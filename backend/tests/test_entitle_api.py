# ENTITLE API regression tests (Spring Boot backend via FastAPI gateway)
import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL').rstrip('/')


def login(persona):
    s = requests.Session()
    r = s.post(f"{BASE_URL}/api/auth/demo", json={"persona": persona})
    if r.status_code != 200:
        pytest.skip(f"demo login failed {r.status_code}")
    return s, r


@pytest.fixture(scope="module")
def student():
    s, _ = login("student")
    return s


# --- Health & schemes catalogue
class TestSchemes:
    def test_health(self):
        r = requests.get(f"{BASE_URL}/api/health")
        assert r.status_code == 200 and r.json()["status"] == "ok"

    def test_list_21(self):
        r = requests.get(f"{BASE_URL}/api/schemes")
        assert r.status_code == 200
        assert len(r.json()) == 21

    def test_filter_category(self):
        allr = requests.get(f"{BASE_URL}/api/schemes").json()
        cat = allr[0]["category"]
        r = requests.get(f"{BASE_URL}/api/schemes", params={"category": cat}).json()
        assert len(r) > 0 and all(s["category"] == cat for s in r)
        assert len(r) < 21

    def test_filter_q(self):
        r = requests.get(f"{BASE_URL}/api/schemes", params={"q": "kisan"}).json()
        assert any(s["id"] == "pm-kisan" for s in r)
        assert len(r) < 21

    def test_filter_age_state_income(self):
        r = requests.get(f"{BASE_URL}/api/schemes", params={"age": 70}).json()
        for s in r:
            assert (s.get("minAge") is None or s["minAge"] <= 70) and (s.get("maxAge") is None or s["maxAge"] >= 70)
        r2 = requests.get(f"{BASE_URL}/api/schemes", params={"state": "Karnataka"})
        assert r2.status_code == 200 and len(r2.json()) > 0
        r3 = requests.get(f"{BASE_URL}/api/schemes", params={"incomeRange": "BELOW_1L"})
        assert r3.status_code == 200 and len(r3.json()) > 0

    def test_get_one_and_404(self):
        r = requests.get(f"{BASE_URL}/api/schemes/pm-kisan")
        assert r.status_code == 200 and r.json()["id"] == "pm-kisan"
        assert requests.get(f"{BASE_URL}/api/schemes/nope-xyz").status_code == 404


# --- Auth
class TestAuth:
    def test_demo_cookie_and_me(self):
        s, r = login("student")
        assert "session_token" in r.headers.get("set-cookie", "")
        me = s.get(f"{BASE_URL}/api/auth/me")
        assert me.status_code == 200 and me.json()["email"] == "demo.student@entitle.demo"

    def test_unknown_persona(self):
        r = requests.post(f"{BASE_URL}/api/auth/demo", json={"persona": "zzz"})
        assert r.status_code == 404

    @pytest.mark.parametrize("path", ["/api/auth/me", "/api/profile", "/api/eligibility/results",
                                      "/api/applications", "/api/notifications", "/api/saved-schemes"])
    def test_401(self, path):
        assert requests.get(f"{BASE_URL}{path}").status_code == 401


# --- Profile & eligibility
class TestProfileEligibility:
    def test_validation(self, student):
        r = student.put(f"{BASE_URL}/api/profile", json={"age": 150})
        assert r.status_code == 400 and "age" in r.json().get("details", "")
        r = student.put(f"{BASE_URL}/api/profile", json={"age": 20, "familySize": 0})
        assert r.status_code == 400 and "familySize" in r.json().get("details", "")

    def test_assessment_and_results(self, student):
        prof = student.get(f"{BASE_URL}/api/profile").json()["profile"]
        r = student.post(f"{BASE_URL}/api/profile/assessment", json=prof)
        assert r.status_code == 200, r.text
        res = r.json()["results"]
        assert len(res) == 21
        rr = student.get(f"{BASE_URL}/api/eligibility/results")
        assert rr.status_code == 200
        statuses = {x["status"] for x in rr.json()}
        assert statuses <= {"LIKELY_ELIGIBLE", "NEEDS_VERIFICATION", "POTENTIALLY_ELIGIBLE", "NOT_ELIGIBLE"}, statuses
        one = student.get(f"{BASE_URL}/api/eligibility/results/pm-jay")
        assert one.status_code == 200 and one.json()["schemeId"] == "pm-jay"

    def test_preview_anonymous(self):
        r = requests.post(f"{BASE_URL}/api/eligibility/preview", json={"age": 65, "state": "Karnataka", "incomeRange": "BELOW_1L", "gender": "FEMALE"})
        assert r.status_code == 200 and len(r.json()) == 21


# --- Saved, applications, checklists, notifications, guide
class TestUserData:
    def test_saved(self, student):
        r = student.post(f"{BASE_URL}/api/saved-schemes", json={"schemeId": "pmsby"})
        assert r.status_code == 201
        assert any(x["schemeId"] == "pmsby" for x in student.get(f"{BASE_URL}/api/saved-schemes").json())
        assert student.delete(f"{BASE_URL}/api/saved-schemes/pmsby").status_code == 200
        assert not any(x["schemeId"] == "pmsby" for x in student.get(f"{BASE_URL}/api/saved-schemes").json())

    def test_applications(self, student):
        r = student.post(f"{BASE_URL}/api/applications", json={"schemeId": "pmjjby", "notes": "TEST_note"})
        assert r.status_code in (200, 201), r.text
        aid = r.json()["id"]
        try:
            u = student.put(f"{BASE_URL}/api/applications/{aid}", json={"status": "SUBMITTED", "referenceNumber": "TEST_REF1", "applicationDate": "2026-01-10"})
            assert u.status_code == 200 and u.json()["status"] == "SUBMITTED"
            assert u.json()["history"][-1]["status"] == "SUBMITTED"
            bad = student.put(f"{BASE_URL}/api/applications/{aid}", json={"status": "FOO"})
            assert bad.status_code == 400
            got = [a for a in student.get(f"{BASE_URL}/api/applications").json() if a["id"] == aid][0]
            assert got["referenceNumber"] == "TEST_REF1" and got["status"] == "SUBMITTED"
        finally:
            assert student.delete(f"{BASE_URL}/api/applications/{aid}").status_code == 200
        assert not any(a["id"] == aid for a in student.get(f"{BASE_URL}/api/applications").json())

    def test_checklist(self, student):
        c = student.get(f"{BASE_URL}/api/checklists/pmsby").json()
        names = [d["name"] for d in c["documents"]]
        r = student.put(f"{BASE_URL}/api/checklists/pmsby", json={"prepared": names[:1]})
        assert r.status_code == 200 and r.json()["preparedCount"] == 1
        student.put(f"{BASE_URL}/api/checklists/pmsby", json={"prepared": []})

    def test_notifications(self, student):
        r = student.get(f"{BASE_URL}/api/notifications")
        assert r.status_code == 200
        lst = r.json()
        if lst:
            nid = lst[0]["id"]
            assert student.put(f"{BASE_URL}/api/notifications/{nid}/read").json()["readStatus"] is True
        assert student.put(f"{BASE_URL}/api/notifications/read-all").status_code == 200
        p = student.put(f"{BASE_URL}/api/notifications/preferences", json={"notifyDeadlines": False}).json()
        assert p["notifyDeadlines"] is False
        assert student.get(f"{BASE_URL}/api/notifications/preferences").json()["notifyDeadlines"] is False
        student.put(f"{BASE_URL}/api/notifications/preferences", json={"notifyDeadlines": True})
        assert student.delete(f"{BASE_URL}/api/notifications/999999999").status_code == 404

    def test_guide_chat(self, student):
        r = student.post(f"{BASE_URL}/api/guide/chat", json={"message": "What documents do I need?", "schemeId": "pm-jay"}, timeout=90)
        assert r.status_code == 200, r.text
        d = r.json()
        assert d["source"] in ("ai", "faq") and len(d["reply"]) > 0
        print("guide source:", d["source"])
        assert student.post(f"{BASE_URL}/api/guide/chat", json={"message": ""}).status_code == 400

    def test_impact(self):
        r = requests.get(f"{BASE_URL}/api/analytics/impact")
        assert r.status_code == 200 and "SIMULATED" in r.json()["simulated"]["label"]


# --- Account deletion (healthcare persona)
class TestDeleteAccount:
    def test_delete_and_relogin(self):
        s, _ = login("healthcare")
        r = s.delete(f"{BASE_URL}/api/profile/account")
        assert r.status_code == 200
        assert "session_token=;" in r.headers.get("set-cookie", "") or "Max-Age=0" in r.headers.get("set-cookie", "")
        s2 = requests.Session()
        s2.cookies.update(s.cookies)
        assert requests.get(f"{BASE_URL}/api/auth/me").status_code == 401
        s3, _ = login("healthcare")
        p = s3.get(f"{BASE_URL}/api/profile").json()
        assert p["profile"]["age"] is not None
        assert len(s3.get(f"{BASE_URL}/api/eligibility/results").json()) == 21
