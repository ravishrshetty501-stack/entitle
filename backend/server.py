"""ENTITLE Dev Gateway & Fallback API Server.

If the Java Spring Boot backend (:8095) is running, requests are proxied unchanged.
If Java is not running, this gateway handles the full API using the seed data and
deterministic eligibility engine so login (Google & Demo), schemes, assessments,
checklists, and guide chat work immediately.
"""
import copy
import json
import os
import socket
import uuid
from datetime import datetime, timezone
from typing import Any, Dict, List, Optional

import httpx
from fastapi import FastAPI, HTTPException, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
JAVA_DIR = os.environ.get("JAVA_DIR", os.path.join(ROOT_DIR, "entitle-backend"))
JAVA_PORT = int(os.environ.get("JAVA_PORT", 8095))
HOP = {"host", "content-length", "connection", "transfer-encoding", "content-encoding", "keep-alive"}

SEED_DIR = os.path.join(JAVA_DIR, "src", "main", "resources", "seed")
if not os.path.exists(SEED_DIR):
    SEED_DIR = os.path.join(ROOT_DIR, "entitle-backend", "src", "main", "resources", "seed")

app = FastAPI(title="ENTITLE Dev Gateway")

app.add_middleware(
    CORSMiddleware,
    allow_origin_regex=r"http://(localhost|127\.0\.0\.1)(:\d+)?",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = httpx.AsyncClient(base_url=f"http://127.0.0.1:{JAVA_PORT}", timeout=120)


def java_up() -> bool:
    try:
        with socket.socket() as s:
            s.settimeout(0.3)
            return s.connect_ex(("127.0.0.1", JAVA_PORT)) == 0
    except Exception:
        return False


def load_seed(filename: str):
    p = os.path.join(SEED_DIR, filename)
    if os.path.exists(p):
        with open(p, "r", encoding="utf-8") as f:
            return json.load(f)
    return []


PERSONAS_SEED = load_seed("personas.json")
SCHEMES_SEED = load_seed("schemes.json")
SCHEMES_EXTRA_SEED = load_seed("schemes-extra.json")
ALL_SCHEMES = {s["id"]: s for s in (SCHEMES_SEED + SCHEMES_EXTRA_SEED)}

# --- In-Memory State for local dev ---
USERS: Dict[str, Dict[str, Any]] = {}
SESSIONS: Dict[str, str] = {}  # token -> userId
PROFILES: Dict[str, Dict[str, Any]] = {}
ASSESSMENTS: Dict[str, List[Dict[str, Any]]] = {}  # userId -> results
SAVED: Dict[str, List[Dict[str, Any]]] = {}  # userId -> list of saved
APPLICATIONS: Dict[str, List[Dict[str, Any]]] = {}  # userId -> list of apps
CHECKLISTS: Dict[str, Dict[str, List[str]]] = {}  # userId -> {schemeId: preparedList}
NOTIFICATIONS: Dict[str, List[Dict[str, Any]]] = {}
CHATS: Dict[str, List[Dict[str, Any]]] = {}


def init_demo_data():
    for p in PERSONAS_SEED:
        uid = "demo_" + p["id"]
        USERS[uid] = {
            "id": uid,
            "email": p.get("email", f"{p['id']}@entitle.demo"),
            "name": p.get("name", p["id"].title()),
            "picture": None,
            "demo": True,
            "demoPersona": p["id"],
        }
        prof = copy.deepcopy(p.get("profile", {}))
        prof["userId"] = uid
        prof["displayName"] = p.get("name")
        PROFILES[uid] = prof


init_demo_data()

INCOME_MAP = {
    "BELOW_1L": (0, 100_000),
    "1L_2_5L": (100_001, 250_000),
    "2_5L_4_5L": (250_001, 450_000),
    "4_5L_8L": (450_001, 800_000),
    "8L_18L": (800_001, 1_800_000),
    "ABOVE_18L": (1_800_001, 10**12),
}

QUESTIONS = {
    "age": "your age",
    "state": "your state",
    "area": "whether you live in a rural or urban area",
    "occupation": "your occupation",
    "education": "your education level",
    "incomeRange": "your annual household income range",
    "householdCategory": "your social category",
    "gender": "your gender",
    "student": "whether you are currently studying",
    "farmer": "whether you are a farmer",
    "ownsLand": "whether your family owns cultivable land",
    "disability": "whether you have a disability",
    "disabilityLevel": "your certified disability level",
    "rationCard": "whether your household holds a BPL / priority ration card",
    "incomeTaxPayer": "whether anyone in your family pays income tax",
    "hasBankAccount": "whether you have a savings bank account",
    "ownsPuccaHouse": "whether your family owns a pucca house",
    "hasLpg": "whether your household has an LPG connection",
    "pregnant": "whether you are pregnant or a new mother",
    "hasGirlChildUnder10": "whether you have a daughter below 10 years",
    "healthcareNeed": "whether you need healthcare support",
}


def evaluate_rule(rule: dict, profile: dict) -> str:
    field = rule.get("field")
    op = rule.get("op")
    user_val = profile.get(field)
    if op == "official":
        return "VERIFY"
    if user_val is None or user_val == "":
        return "MISSING"

    if op == "eq":
        expected = rule.get("value")
        if isinstance(expected, bool):
            return "SATISFIED" if bool(user_val) == expected else "FAILED"
        if isinstance(user_val, str) and isinstance(expected, str):
            return "SATISFIED" if user_val.lower() == expected.lower() else "FAILED"
        return "SATISFIED" if user_val == expected else "FAILED"

    if op == "in":
        values = [str(v).lower() for v in rule.get("values", [])]
        return "SATISFIED" if str(user_val).lower() in values else "FAILED"

    if op == "gte":
        try:
            return "SATISFIED" if float(user_val) >= float(rule.get("min", 0)) else "FAILED"
        except (ValueError, TypeError):
            return "FAILED"

    if op == "lte":
        try:
            return "SATISFIED" if float(user_val) <= float(rule.get("max", 0)) else "FAILED"
        except (ValueError, TypeError):
            return "FAILED"

    if op == "between":
        try:
            val = float(user_val)
            min_v = float(rule.get("min", 0))
            max_v = float(rule.get("max", 1000))
            return "SATISFIED" if (min_v <= val <= max_v) else "FAILED"
        except (ValueError, TypeError):
            return "FAILED"

    if op == "income_lte":
        limit = rule.get("max", 0)
        rng = INCOME_MAP.get(str(user_val))
        if not rng:
            return "MISSING"
        low, high = rng
        if high <= limit:
            return "SATISFIED"
        if low > limit:
            return "FAILED"
        return "UNCLEAR"

    return "SATISFIED"


def evaluate_scheme(scheme: dict, profile: dict) -> dict:
    satisfied, failed, missing, verification = [], [], [], []
    mandatory_fail = False
    soft_fail = False
    total = 0
    matched = 0

    for r in scheme.get("rules", []):
        total += 1
        label = r.get("label", "")
        mandatory = r.get("mandatory", True)
        outcome = evaluate_rule(r, profile)
        if outcome == "SATISFIED":
            matched += 1
            satisfied.append({"label": label, "detail": "Matches what you told us."})
        elif outcome == "VERIFY":
            matched += 1
            doc = r.get("doc", "")
            detail = ("Can only be confirmed by the issuing authority."
                      if r.get("op") == "official"
                      else ("Your answers suggest this is met, but it must be proven" +
                            (f" with: {doc}." if doc else ".")))
            verification.append({"label": label, "detail": detail})
        elif outcome == "UNCLEAR":
            verification.append({"label": label, "detail": "Your income range spans this limit. Your exact income certificate will decide."})
        elif outcome == "MISSING":
            q = QUESTIONS.get(r.get("field", ""), "more")
            missing.append({"label": label, "detail": f"Tell us {q}."})
        else:
            failed.append({"label": label, "detail": "Does not match your current profile." if mandatory else "Not met (this is an indicator)."})
            if mandatory:
                mandatory_fail = True
            else:
                soft_fail = True

    if mandatory_fail:
        status_str = "NOT_ELIGIBLE"
    elif missing or soft_fail:
        status_str = "POTENTIALLY_ELIGIBLE"
    elif verification:
        status_str = "NEEDS_VERIFICATION"
    else:
        status_str = "LIKELY_ELIGIBLE"

    score = 0 if total == 0 else round((matched / total) * 100)
    return {
        "schemeId": scheme.get("id"),
        "schemeName": scheme.get("name"),
        "category": scheme.get("category"),
        "department": scheme.get("department"),
        "level": scheme.get("level"),
        "officialUrl": scheme.get("officialUrl"),
        "status": status_str,
        "matchScore": score,
        "satisfied": satisfied,
        "verification": verification,
        "missing": missing,
        "failed": failed,
        "nextAction": ("Check document checklist and gather required papers."
                       if status_str in ("LIKELY_ELIGIBLE", "NEEDS_VERIFICATION")
                       else "Update your profile answers or view full criteria."),
        "estimatedBenefit": scheme.get("estimatedBenefit", ""),
    }


def compute_completion(prof: dict) -> int:
    core_fields = ["age", "state", "district", "area", "occupation", "education",
                   "incomeRange", "householdCategory", "gender", "familySize",
                   "rationCard", "hasBankAccount", "incomeTaxPayer", "ownsPuccaHouse"]
    filled = sum(1 for k in core_fields if prof.get(k) is not None and prof.get(k) != "")
    return round((filled / len(core_fields)) * 100)


def get_current_user(request: Request) -> Optional[dict]:
    token = request.cookies.get("session_token")
    if not token:
        auth_hdr = request.headers.get("Authorization", "")
        if auth_hdr.startswith("Bearer "):
            token = auth_hdr[7:].strip()
    if token and token in SESSIONS:
        uid = SESSIONS[token]
        return USERS.get(uid)
    return None


def get_scheme_view(s: dict) -> dict:
    v = copy.deepcopy(s)
    criteria = []
    for r in v.get("rules", []):
        criteria.append({
            "label": r.get("label", ""),
            "mandatory": r.get("mandatory", True),
            "officialOnly": r.get("op") == "official"
        })
    v["criteria"] = criteria
    if "rules" in v:
        del v["rules"]
    return v


# --- API Routes (Fallback Mode when Java is offline) ---

@app.get("/api/health")
@app.get("/health")
def api_health():
    return {"status": "ok", "gateway": "running", "java_backend": "up" if java_up() else "down"}


@app.get("/api/demo/personas")
async def demo_personas(request: Request):
    if java_up():
        return await proxy_to_java(request)
    return PERSONAS_SEED


@app.post("/api/auth/demo")
async def auth_demo(request: Request, response: Response):
    if java_up():
        return await proxy_to_java(request)
    body = await request.json()
    persona_id = body.get("persona")
    uid = "demo_" + str(persona_id)
    if uid not in USERS:
        init_demo_data()
    if uid not in USERS:
        raise HTTPException(status_code=404, detail="Unknown persona")

    token = str(uuid.uuid4())
    SESSIONS[token] = uid
    response.set_cookie(key="session_token", value=token, path="/", max_age=604800, httponly=True, samesite="lax")
    return USERS[uid]


@app.post("/api/auth/session")
async def auth_session(request: Request, response: Response):
    if java_up():
        return await proxy_to_java(request)
    body = await request.json()
    session_id = body.get("session_id", "")
    email = f"user_{session_id[:8]}@entitle.user" if session_id else "demo.citizen@entitle.demo"
    name = "Citizen User"

    # Try emergent session exchange if online
    if session_id:
        try:
            async with httpx.AsyncClient(timeout=3) as h:
                r = await h.get(f"https://auth.emergentagent.com/session?session_id={session_id}", follow_redirects=True)
                if r.status_code == 200:
                    d = r.json()
                    email = d.get("email", email)
                    name = d.get("name", name)
        except Exception:
            pass

    uid = "usr_" + str(uuid.uuid4())[:8]
    USERS[uid] = {
        "id": uid,
        "email": email,
        "name": name,
        "picture": None,
        "demo": False,
        "demoPersona": None,
    }
    if uid not in PROFILES:
        PROFILES[uid] = {"userId": uid, "displayName": name, "state": "Karnataka"}

    token = str(uuid.uuid4())
    SESSIONS[token] = uid
    response.set_cookie(key="session_token", value=token, path="/", max_age=604800, httponly=True, samesite="lax")
    return USERS[uid]


@app.get("/api/auth/me")
async def auth_me(request: Request):
    if java_up():
        return await proxy_to_java(request)
    user = get_current_user(request)
    if not user:
        return JSONResponse({"error": "Not authenticated", "status": 401}, status_code=401)
    return user


@app.post("/api/auth/logout")
async def auth_logout(request: Request, response: Response):
    if java_up():
        return await proxy_to_java(request)
    token = request.cookies.get("session_token")
    if token and token in SESSIONS:
        del SESSIONS[token]
    response.delete_cookie(key="session_token", path="/")
    return {"status": "ok"}


@app.get("/api/schemes")
@app.get("/api/schemes/search")
async def search_schemes(request: Request, q: Optional[str] = None, category: Optional[str] = None,
                         state: Optional[str] = None, age: Optional[int] = None,
                         incomeRange: Optional[str] = None, provider: Optional[str] = None):
    if java_up():
        return await proxy_to_java(request)
    results = []
    query = (q or "").lower().strip()
    for s in SCHEMES_SEED:
        if category and s.get("category", "").lower() != category.lower():
            continue
        if state and s.get("state") and s.get("state", "").lower() != state.lower():
            continue
        if age is not None:
            min_a = s.get("minAge")
            max_a = s.get("maxAge")
            if min_a is not None and age < min_a:
                continue
            if max_a is not None and age > max_a:
                continue
        if query and query not in json.dumps(s).lower():
            continue
        results.append(get_scheme_view(s))
    return results


@app.get("/api/schemes/recommended")
async def recommended_schemes(request: Request):
    if java_up():
        return await proxy_to_java(request)
    user = get_current_user(request)
    if not user:
        raise HTTPException(status_code=401, detail="Not authenticated")
    results = ASSESSMENTS.get(user["id"])
    if not results:
        prof = PROFILES.get(user["id"], {})
        results = [evaluate_scheme(s, prof) for s in SCHEMES_SEED]
    rec = [r for r in results if r["status"] in ("LIKELY_ELIGIBLE", "NEEDS_VERIFICATION")][:6]
    return rec


@app.get("/api/schemes/{scheme_id}")
async def get_scheme(request: Request, scheme_id: str):
    if java_up():
        return await proxy_to_java(request)
    s = ALL_SCHEMES.get(scheme_id)
    if not s:
        raise HTTPException(status_code=404, detail="Scheme not found")
    return get_scheme_view(s)


@app.get("/api/profile")
async def get_profile(request: Request):
    if java_up():
        return await proxy_to_java(request)
    user = get_current_user(request)
    if not user:
        raise HTTPException(status_code=401, detail="Not authenticated")
    p = PROFILES.get(user["id"], {"userId": user["id"], "displayName": user.get("name")})
    return {"profile": p, "completion": compute_completion(p)}


@app.put("/api/profile")
async def update_profile(request: Request):
    if java_up():
        return await proxy_to_java(request)
    user = get_current_user(request)
    if not user:
        raise HTTPException(status_code=401, detail="Not authenticated")
    body = await request.json()
    if "age" in body and body["age"] is not None:
        if not (0 <= int(body["age"]) <= 120):
            return JSONResponse({"error": "Validation failed", "details": "age: must be between 0 and 120", "status": 400}, status_code=400)
    if "familySize" in body and body["familySize"] is not None:
        if not (1 <= int(body["familySize"]) <= 30):
            return JSONResponse({"error": "Validation failed", "details": "familySize: must be between 1 and 30", "status": 400}, status_code=400)

    p = PROFILES.get(user["id"], {})
    p.update(body)
    p["userId"] = user["id"]
    PROFILES[user["id"]] = p
    return {"profile": p, "completion": compute_completion(p)}


@app.post("/api/profile/assessment")
async def assess_profile(request: Request):
    if java_up():
        return await proxy_to_java(request)
    user = get_current_user(request)
    if not user:
        raise HTTPException(status_code=401, detail="Not authenticated")
    try:
        body = await request.json()
        if body:
            p = PROFILES.get(user["id"], {})
            p.update(body)
            PROFILES[user["id"]] = p
    except Exception:
        pass
    prof = PROFILES.get(user["id"], {})
    results = [evaluate_scheme(s, prof) for s in SCHEMES_SEED]
    order = {"LIKELY_ELIGIBLE": 0, "NEEDS_VERIFICATION": 1, "POTENTIALLY_ELIGIBLE": 2, "NOT_ELIGIBLE": 3}
    results.sort(key=lambda r: (order.get(r["status"], 4), -r["matchScore"]))
    ASSESSMENTS[user["id"]] = results
    return {"results": results, "completion": compute_completion(prof)}


@app.delete("/api/profile/account")
async def delete_account(request: Request, response: Response):
    if java_up():
        return await proxy_to_java(request)
    user = get_current_user(request)
    if not user:
        raise HTTPException(status_code=401, detail="Not authenticated")
    uid = user["id"]
    for store in (USERS, PROFILES, ASSESSMENTS, SAVED, APPLICATIONS, CHECKLISTS, NOTIFICATIONS, CHATS):
        store.pop(uid, None)
    tokens_to_del = [t for t, u in SESSIONS.items() if u == uid]
    for t in tokens_to_del:
        del SESSIONS[t]
    response.delete_cookie("session_token", path="/")
    return {"status": "ok"}


@app.post("/api/eligibility/assess")
async def run_assessment(request: Request):
    return await assess_profile(request)


@app.post("/api/eligibility/preview")
async def preview_eligibility(request: Request):
    if java_up():
        return await proxy_to_java(request)
    body = await request.json()
    results = [evaluate_scheme(s, body) for s in SCHEMES_SEED]
    return results


@app.get("/api/eligibility/results")
async def get_results(request: Request):
    if java_up():
        return await proxy_to_java(request)
    user = get_current_user(request)
    if not user:
        raise HTTPException(status_code=401, detail="Not authenticated")
    if user["id"] not in ASSESSMENTS:
        prof = PROFILES.get(user["id"], {})
        ASSESSMENTS[user["id"]] = [evaluate_scheme(s, prof) for s in SCHEMES_SEED]
    return ASSESSMENTS[user["id"]]


@app.get("/api/eligibility/results/{scheme_id}")
async def get_result_one(request: Request, scheme_id: str):
    if java_up():
        return await proxy_to_java(request)
    user = get_current_user(request)
    if not user:
        raise HTTPException(status_code=401, detail="Not authenticated")
    results = ASSESSMENTS.get(user["id"]) or []
    for r in results:
        if r["schemeId"] == scheme_id:
            return r
    s = ALL_SCHEMES.get(scheme_id)
    if not s:
        raise HTTPException(status_code=404, detail="Scheme not found")
    prof = PROFILES.get(user["id"], {})
    return evaluate_scheme(s, prof)


@app.get("/api/saved-schemes")
async def get_saved(request: Request):
    if java_up():
        return await proxy_to_java(request)
    user = get_current_user(request)
    if not user:
        raise HTTPException(status_code=401, detail="Not authenticated")
    lst = SAVED.get(user["id"], [])
    out = []
    for item in lst:
        sc = ALL_SCHEMES.get(item["schemeId"], {})
        out.append({
            "id": item["id"],
            "schemeId": item["schemeId"],
            "savedAt": item["savedAt"],
            "scheme": {
                "id": sc.get("id"),
                "name": sc.get("name", item["schemeId"]),
                "category": sc.get("category", ""),
                "officialUrl": sc.get("officialUrl"),
            }
        })
    return out


@app.post("/api/saved-schemes", status_code=201)
async def add_saved(request: Request):
    if java_up():
        return await proxy_to_java(request)
    user = get_current_user(request)
    if not user:
        raise HTTPException(status_code=401, detail="Not authenticated")
    body = await request.json()
    sid = body.get("schemeId")
    lst = SAVED.setdefault(user["id"], [])
    if not any(x["schemeId"] == sid for x in lst):
        entry = {"id": len(lst) + 1, "schemeId": sid, "savedAt": datetime.now(timezone.utc).isoformat()}
        lst.append(entry)
        return entry
    return [x for x in lst if x["schemeId"] == sid][0]


@app.delete("/api/saved-schemes/{scheme_id}")
async def remove_saved(request: Request, scheme_id: str):
    if java_up():
        return await proxy_to_java(request)
    user = get_current_user(request)
    if not user:
        raise HTTPException(status_code=401, detail="Not authenticated")
    lst = SAVED.get(user["id"], [])
    SAVED[user["id"]] = [x for x in lst if x["schemeId"] != scheme_id]
    return {"status": "ok"}


VALID_APP_STATUSES = {"INTERESTED", "PREPARING_DOCUMENTS", "READY_TO_APPLY", "SUBMITTED", "UNDER_REVIEW", "APPROVED", "REJECTED", "ACTION_REQUIRED"}


@app.get("/api/applications")
async def list_apps(request: Request):
    if java_up():
        return await proxy_to_java(request)
    user = get_current_user(request)
    if not user:
        raise HTTPException(status_code=401, detail="Not authenticated")
    return APPLICATIONS.get(user["id"], [])


@app.post("/api/applications", status_code=201)
async def create_app(request: Request):
    if java_up():
        return await proxy_to_java(request)
    user = get_current_user(request)
    if not user:
        raise HTTPException(status_code=401, detail="Not authenticated")
    body = await request.json()
    sid = body.get("schemeId")
    status_str = body.get("status", "INTERESTED")
    if status_str not in VALID_APP_STATUSES:
        raise HTTPException(status_code=400, detail="Invalid status")
    sc = ALL_SCHEMES.get(sid, {})
    lst = APPLICATIONS.setdefault(user["id"], [])
    aid = len(lst) + 100
    docs = [d.get("name") for d in sc.get("documents", [])]
    prep = CHECKLISTS.get(user["id"], {}).get(sid, [])
    missing = [d for d in docs if d not in prep]
    entry = {
        "id": aid,
        "schemeId": sid,
        "schemeName": sc.get("name", sid),
        "category": sc.get("category", ""),
        "officialUrl": sc.get("officialUrl"),
        "status": status_str,
        "applicationDate": body.get("applicationDate"),
        "deadline": body.get("deadline"),
        "referenceNumber": body.get("referenceNumber"),
        "notes": body.get("notes", ""),
        "history": [{"status": status_str, "timestamp": datetime.now(timezone.utc).isoformat(), "note": "Created"}],
        "documentsTotal": len(docs),
        "missingDocuments": missing,
        "updatedAt": datetime.now(timezone.utc).isoformat(),
    }
    lst.append(entry)
    return entry


@app.put("/api/applications/{app_id}")
async def update_app(request: Request, app_id: int):
    if java_up():
        return await proxy_to_java(request)
    user = get_current_user(request)
    if not user:
        raise HTTPException(status_code=401, detail="Not authenticated")
    body = await request.json()
    lst = APPLICATIONS.get(user["id"], [])
    for a in lst:
        if a["id"] == app_id:
            if "status" in body:
                st = body["status"]
                if st not in VALID_APP_STATUSES:
                    raise HTTPException(status_code=400, detail="Invalid status")
                if st != a["status"]:
                    a["status"] = st
                    a["history"].append({"status": st, "timestamp": datetime.now(timezone.utc).isoformat(), "note": body.get("notes", "")})
            if "notes" in body:
                a["notes"] = body["notes"]
            if "referenceNumber" in body:
                a["referenceNumber"] = body["referenceNumber"]
            if "applicationDate" in body:
                a["applicationDate"] = body["applicationDate"]
            if "deadline" in body:
                a["deadline"] = body["deadline"]
            a["updatedAt"] = datetime.now(timezone.utc).isoformat()
            return a
    raise HTTPException(status_code=404, detail="Application not found")


@app.delete("/api/applications/{app_id}")
async def delete_app(request: Request, app_id: int):
    if java_up():
        return await proxy_to_java(request)
    user = get_current_user(request)
    if not user:
        raise HTTPException(status_code=401, detail="Not authenticated")
    lst = APPLICATIONS.get(user["id"], [])
    APPLICATIONS[user["id"]] = [a for a in lst if a["id"] != app_id]
    return {"status": "ok"}


@app.get("/api/checklists/{scheme_id}")
async def get_checklist(request: Request, scheme_id: str):
    if java_up():
        return await proxy_to_java(request)
    user = get_current_user(request)
    if not user:
        raise HTTPException(status_code=401, detail="Not authenticated")
    sc = ALL_SCHEMES.get(scheme_id, {})
    docs = sc.get("documents", [])
    prep = CHECKLISTS.get(user["id"], {}).get(scheme_id, [])
    return {
        "schemeId": scheme_id,
        "schemeName": sc.get("name", scheme_id),
        "officialUrl": sc.get("officialUrl"),
        "documents": docs,
        "prepared": prep,
        "preparedCount": len(prep)
    }


@app.put("/api/checklists/{scheme_id}")
async def update_checklist(request: Request, scheme_id: str):
    if java_up():
        return await proxy_to_java(request)
    user = get_current_user(request)
    if not user:
        raise HTTPException(status_code=401, detail="Not authenticated")
    body = await request.json()
    prep = body.get("prepared", [])
    CHECKLISTS.setdefault(user["id"], {})[scheme_id] = prep
    return await get_checklist(request, scheme_id)


@app.get("/api/notifications")
async def get_notifications(request: Request):
    if java_up():
        return await proxy_to_java(request)
    user = get_current_user(request)
    if not user:
        raise HTTPException(status_code=401, detail="Not authenticated")
    notes = NOTIFICATIONS.get(user["id"])
    if notes is None:
        notes = [
            {"id": 1, "notificationType": "PROFILE", "message": "Complete your profile to unlock more targeted benefits.", "link": "/profile", "readStatus": False, "createdAt": datetime.now(timezone.utc).isoformat()},
            {"id": 2, "notificationType": "DOCUMENTS", "message": "You have documents remaining to prepare for your active schemes.", "link": "/applications", "readStatus": False, "createdAt": datetime.now(timezone.utc).isoformat()}
        ]
        NOTIFICATIONS[user["id"]] = notes
    return notes


@app.put("/api/notifications/{nid}/read")
async def mark_read(request: Request, nid: int):
    if java_up():
        return await proxy_to_java(request)
    user = get_current_user(request)
    if not user:
        raise HTTPException(status_code=401, detail="Not authenticated")
    notes = NOTIFICATIONS.get(user["id"], [])
    for n in notes:
        if n["id"] == nid:
            n["readStatus"] = True
            return n
    raise HTTPException(status_code=404, detail="Notification not found")


@app.put("/api/notifications/read-all")
async def mark_read_all(request: Request):
    if java_up():
        return await proxy_to_java(request)
    user = get_current_user(request)
    if not user:
        raise HTTPException(status_code=401, detail="Not authenticated")
    for n in NOTIFICATIONS.get(user["id"], []):
        n["readStatus"] = True
    return {"status": "ok"}


@app.delete("/api/notifications/{nid}")
async def dismiss_notification(request: Request, nid: int):
    if java_up():
        return await proxy_to_java(request)
    user = get_current_user(request)
    if not user:
        raise HTTPException(status_code=401, detail="Not authenticated")
    notes = NOTIFICATIONS.get(user["id"], [])
    found = any(n["id"] == nid for n in notes)
    if not found:
        raise HTTPException(status_code=404, detail="Notification not found")
    NOTIFICATIONS[user["id"]] = [n for n in notes if n["id"] != nid]
    return {"status": "ok"}


@app.get("/api/notifications/preferences")
async def get_prefs(request: Request):
    if java_up():
        return await proxy_to_java(request)
    user = get_current_user(request)
    if not user:
        raise HTTPException(status_code=401, detail="Not authenticated")
    p = PROFILES.get(user["id"], {})
    return {
        "notifyProfile": p.get("notifyProfile", True),
        "notifyDocuments": p.get("notifyDocuments", True),
        "notifyDeadlines": p.get("notifyDeadlines", True),
        "notifyTracker": p.get("notifyTracker", True),
    }


@app.put("/api/notifications/preferences")
async def update_prefs(request: Request):
    if java_up():
        return await proxy_to_java(request)
    user = get_current_user(request)
    if not user:
        raise HTTPException(status_code=401, detail="Not authenticated")
    body = await request.json()
    p = PROFILES.setdefault(user["id"], {})
    p.update(body)
    return await get_prefs(request)


@app.post("/api/guide/chat")
async def guide_chat(request: Request):
    if java_up():
        return await proxy_to_java(request)
    body = await request.json()
    msg = body.get("message", "").strip()
    if not msg:
        raise HTTPException(status_code=400, detail="Message cannot be empty")
    scheme_id = body.get("schemeId")
    sc = ALL_SCHEMES.get(scheme_id) if scheme_id else None
    if sc:
        reply = f"For **{sc.get('name')}**, applications are submitted through {sc.get('sourceUrl')}. Required documents include " + ", ".join([d.get("name") for d in sc.get("documents", [])][:3]) + "."
    else:
        reply = "ENTITLE Guide can help you navigate welfare schemes in Karnataka and Central India. Ask about eligibility or documents for any scheme!"
    return {"reply": reply, "source": "faq"}


@app.get("/api/guide/history")
async def guide_history(request: Request):
    if java_up():
        return await proxy_to_java(request)
    user = get_current_user(request)
    if not user:
        return []
    return CHATS.get(user["id"], [])


@app.get("/api/analytics/impact")
async def get_impact(request: Request):
    if java_up():
        return await proxy_to_java(request)
    cat_counts = {}
    for s in SCHEMES_SEED:
        c = s.get("category", "General")
        cat_counts[c] = cat_counts.get(c, 0) + 1
    return {
        "prototype": {
            "profilesAssessed": max(1, len(PROFILES)),
            "potentialMatchesSurfaced": 21,
            "checklistsStarted": sum(len(v) for v in CHECKLISTS.values()),
            "applicationsTracked": sum(len(v) for v in APPLICATIONS.values()),
            "schemesSaved": sum(len(v) for v in SAVED.values()),
            "schemesInCatalogue": len(SCHEMES_SEED)
        },
        "catalogueByCategory": cat_counts,
        "simulated": {
            "label": "SIMULATED DATA (illustrative only)",
            "monthly": [
                {"month": "Jan", "discovered": 140, "checklists": 45, "tracked": 28},
                {"month": "Feb", "discovered": 210, "checklists": 72, "tracked": 45},
                {"month": "Mar", "discovered": 350, "checklists": 120, "tracked": 80},
                {"month": "Apr", "discovered": 490, "checklists": 195, "tracked": 130},
                {"month": "May", "discovered": 620, "checklists": 260, "tracked": 185},
                {"month": "Jun", "discovered": 780, "checklists": 340, "tracked": 240}
            ]
        }
    }


# Proxy helper
async def proxy_to_java(request: Request):
    headers = {k: v for k, v in request.headers.items() if k.lower() not in HOP}
    path = request.url.path
    if path.startswith("/"):
        path = path[1:]
    r = await client.request(request.method, f"/{path}", params=request.query_params,
                             content=await request.body(), headers=headers)
    resp = Response(content=r.content, status_code=r.status_code)
    for k, v in r.headers.multi_items():
        if k.lower() not in HOP:
            resp.headers.append(k, v)
    return resp


@app.api_route("/api/{path:path}", methods=["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"])
async def catch_all_proxy(path: str, request: Request):
    if java_up():
        return await proxy_to_java(request)
    return JSONResponse({"error": "Not found", "status": 404}, status_code=404)
