# ENTITLE Backend — Java 17 · Spring Boot 3.3 · Spring Data JPA · Spring Security · MySQL

All business logic for ENTITLE lives here: the explainable rule-based eligibility engine, REST APIs,
session security, notifications and the ENTITLE Guide AI proxy.

## Project layout
```
src/main/java/com/entitle
├── EntitleApplication.java
├── config/      SecurityConfig (Spring Security, CORS), SessionAuthFilter, DataSeeder
├── engine/      EligibilityEngine  ← deterministic, explainable rules (no AI)
├── model/       JPA entities (User, UserSession, UserProfile, Scheme, SavedScheme,
│                EligibilityAssessment, Application, ChecklistProgress, Notification, ChatMessage)
├── repo/        Spring Data repositories
├── service/     SchemeService, NotificationService, GuideService, Json, ApiException
└── web/         REST controllers + GlobalExceptionHandler
src/main/resources
├── application.properties, application-dev.properties (H2, MySQL mode), application-mysql.properties
└── seed/schemes.json (21 real schemes), seed/personas.json (3 fictional demo personas)
db/schema-mysql.sql  ← normalized MySQL DDL with FKs and indexes
```

## Environment variables
| Variable | Purpose |
|---|---|
| `PORT` | HTTP port (e.g. 8080) |
| `SPRING_PROFILES_ACTIVE` | `mysql` in production, `dev` for local H2 |
| `MYSQL_URL` | e.g. `jdbc:mysql://host:3306/entitle?useSSL=true&serverTimezone=UTC` |
| `MYSQL_USER`, `MYSQL_PASSWORD` | DB credentials |
| `EMERGENT_AUTH_SESSION_URL` | Google sign-in session exchange endpoint |
| `LLM_BASE_URL`, `EMERGENT_LLM_KEY`, `LLM_MODEL` | OpenAI-compatible chat endpoint used by ENTITLE Guide (optional — falls back to FAQ answers) |
| `CORS_ORIGINS` | Comma-separated frontend origins, e.g. `https://entitle.vercel.app` |

Spring loads a local `.env` file automatically (`spring.config.import=optional:file:.env[.properties]`). Never commit real secrets.

## Run locally
```bash
# With MySQL
mysql -u root -p < db/schema-mysql.sql      # optional, Hibernate also creates tables
export SPRING_PROFILES_ACTIVE=mysql MYSQL_URL=jdbc:mysql://localhost:3306/entitle MYSQL_USER=root MYSQL_PASSWORD=secret PORT=8080 ...
mvn spring-boot:run
# Quick start without MySQL: SPRING_PROFILES_ACTIVE=dev (embedded H2 in MySQL compatibility mode)
```

## Deploy (Render / Railway)
1. Push this folder to GitHub. Create a new **Web Service** from the `Dockerfile`.
2. Provision a MySQL database (Railway MySQL, PlanetScale-compatible, Aiven, etc.) and set the env vars above.
3. Frontend (Vercel): set `REACT_APP_BACKEND_URL=https://<your-backend-host>` and add the Vercel URL to `CORS_ORIGINS`.
   Session cookies are `Secure; HttpOnly; SameSite=None`, so both sites must use HTTPS.

## REST API (all under `/api`)
| Area | Endpoints |
|---|---|
| Auth | `POST /auth/session` (Google), `POST /auth/demo`, `GET /auth/me`, `POST /auth/logout` |
| Profile | `GET /profile`, `PUT /profile`, `POST /profile/assessment`, `DELETE /profile/account` |
| Schemes | `GET /schemes`, `GET /schemes/search?q=&category=&state=&age=&incomeRange=`, `GET /schemes/{id}`, `GET /schemes/recommended` |
| Eligibility | `POST /eligibility/assess`, `POST /eligibility/preview` (anonymous, used by simulator), `GET /eligibility/results`, `GET /eligibility/results/{schemeId}` |
| Saved | `POST /saved-schemes`, `GET /saved-schemes`, `DELETE /saved-schemes/{schemeId}` |
| Applications | `POST /applications`, `GET /applications`, `PUT /applications/{id}`, `DELETE /applications/{id}` |
| Checklists | `GET /checklists`, `GET /checklists/{schemeId}`, `PUT /checklists/{schemeId}` |
| Notifications | `GET /notifications`, `PUT /notifications/{id}/read`, `PUT /notifications/read-all`, `DELETE /notifications/{id}`, `GET/PUT /notifications/preferences` |
| Guide | `POST /guide/chat`, `GET /guide/history` |
| Demo & analytics | `GET /demo/personas`, `GET /analytics/impact`, `GET /health` |

Errors return `{ "error": "...", "status": <code> }` with meaningful HTTP status codes (400/401/404).

## Eligibility engine
Each scheme has `rules`: `{field, op, value|values|min|max, label, mandatory, verify, doc}`.
Ops: `eq`, `in`, `gte`, `lte`, `between`, `income_lte` (range-aware), `official` (only the authority can confirm).
Outcome per rule: satisfied / needs verification / missing / not satisfied →
status `LIKELY_ELIGIBLE`, `NEEDS_VERIFICATION`, `POTENTIALLY_ELIGIBLE` or `NOT_ELIGIBLE`.
`matchScore` = share of criteria satisfied (profile completeness, **not** approval probability).

## Data accuracy
Scheme data was compiled from official portals and simplified for screening. Re-verify every scheme against its
`sourceUrl` before any real-world launch and update `lastVerified`.
