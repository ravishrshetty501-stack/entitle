# Utility: restore demo persona profiles modified during UI tests and remove test-created tracker items
import json
import os
import requests
BASE = os.environ["REACT_APP_BACKEND_URL"].rstrip("/")
personas = requests.get(f"{BASE}/api/demo/personas").json()
for p in personas:
    if p["id"] not in ("student", "household"):
        continue
    s = requests.Session()
    s.post(f"{BASE}/api/auth/demo", json={"persona": p["id"]})
    r = s.post(f"{BASE}/api/profile/assessment", json=p["profile"])
    print(p["id"], "restore", r.status_code)
    if p["id"] == "household":
        for a in s.get(f"{BASE}/api/applications").json():
            if a["schemeId"] == "apy":
                print("del apy app", s.delete(f"{BASE}/api/applications/{a['id']}").status_code)
        s.put(f"{BASE}/api/checklists/apy", json={"prepared": []})
    if p["id"] == "student":
        print("unsave pmjjby", s.delete(f"{BASE}/api/saved-schemes/pmjjby").status_code)
        s.put(f"{BASE}/api/checklists/pmjjby", json={"prepared": []})
    print(p["id"], json.dumps(s.get(f"{BASE}/api/profile").json()["profile"])[:200])
