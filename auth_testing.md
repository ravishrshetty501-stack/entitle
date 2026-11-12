Auth testing (Emergent Google Auth + demo sessions) — ENTITLE
Backend is Java Spring Boot (H2 file DB in preview, MySQL in production). Not MongoDB.

Easiest: demo session
curl -c cookies.txt -X POST "$API/api/auth/demo" -H "Content-Type: application/json" -d '{"persona":"student"}' Personas: student, household, healthcare. Cookie session_token is set (httpOnly, Secure, SameSite=None). Then: curl -b cookies.txt "$API/api/auth/me"

Bearer header also works: Authorization: Bearer <session_token>

Browser
Login page /login → buttons data-testid=demo-persona-student|household|healthcare. Google button data-testid=google-signin-button redirects to auth.emergentagent.com (cannot be automated).

Success indicators
/api/auth/me returns user JSON
/dashboard loads without redirect to /login