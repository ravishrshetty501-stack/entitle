ENTITLE — PRD
Original problem
AI-powered welfare & healthcare benefits access platform (India). "Benefits You Deserve. Access You Can Trust." Explainable rule-based eligibility engine, wizard, dashboard, scheme browser/detail, document checklist, application tracker, notifications, ENTITLE Guide AI, EN/KN/HI, Benefits Discovery Simulator, impact analytics (simulated labelled), privacy + account deletion.

User choices
Backend STRICTLY Java Spring Boot + MySQL (no Python business logic)
Real AI (Claude via Emergent key) with FAQ fallback
Emergent-managed Google Sign-In + demo personas
Real schemes with official links
English + Kannada + Hindi key screens
Architecture
/app/entitle-backend: Java 17, Spring Boot 3.3, JPA, Spring Security (session cookie filter), validation. Profiles: mysql (prod), dev (H2 MySQL-mode file DB used in preview). db/schema-mysql.sql, Dockerfile, README (deploy to Render/Railway).
Preview: Java runs on :8095 via run-dev.sh (JDK/Maven in /root/tools). /app/backend/server.py = thin FastAPI proxy only (ingress requires :8001), auto-starts the jar.
/app/frontend: React (CRA, JS) + Tailwind + shadcn + Recharts; src/lib/api.js is the API integration layer.
LLM: Java calls OpenAI-compatible Emergent proxy (claude-sonnet-5-5), non-streaming.
Implemented (2026-06)
21 real schemes (national + Karnataka) with rules, documents, process, FAQs, source URLs
Engine: 4 statuses, satisfied/verify/missing/not-satisfied, next action, match % (completeness)
All pages: landing, login, wizard (conditional q's, review/edit), results, dashboard, schemes (filters/search), detail, checklist (print), applications (8 statuses, history), notifications (+prefs, auto-sync/cleanup), simulator (8 steps), impact, privacy, profile (delete account)
i18n EN/KN/HI with untranslated-content notice
Tested: iteration_1 backend 24/24, frontend all flows; minor issues fixed afterwards
Backlog
P1: Streaming Guide responses; full Kannada/Hindi scheme text (verified translations)
P1: Re-verify each scheme's criteria against official sources before launch
P2: TypeScript/Vite migration of frontend; email/SMS reminders with consent; more states' schemes