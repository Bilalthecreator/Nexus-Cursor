# Nexus SaaS - Master Project Prompt & Documentation

**Project Name:** Nexus SaaS  
**Type:** Project Management Tool (Jira + Notion hybrid)  
**Current Status:** Phase 6 Complete (Docker working), Moving to Phase 7 (Hosting)  
**Last Updated:** August 13, 2026  

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Current Setup Completed](#current-setup-completed)
4. [Folder Structure](#folder-structure)
5. [Environment Setup](#environment-setup)
6. [Development Workflow](#development-workflow)
7. [Phases Completed](#phases-completed)
8. [Phases Remaining](#phases-remaining)
9. [Important Notes](#important-notes)
10. [Quick Reference Commands](#quick-reference-commands)

---

## Project Overview

**Nexus** is a SaaS project management tool combining the best features of:
- **Jira** — task tracking, sprints, workflows
- **Notion** — databases, rich content, collaboration

**Target:** Teams needing a lightweight, affordable alternative to expensive PM tools.

**Architecture:** 
- Separate frontend & backend repos in a monorepo structure
- Independent development path for frontend and backend developers
- Automated CI/CD pipeline for testing and deployment
- Free hosting tier on Render (backend) and Vercel (frontend)

---

## Tech Stack

| Component | Technology | Version |
|-----------|-----------|---------|
| **Frontend** | React (JavaScript) + Vite | Latest |
| **Backend** | Django + Django REST Framework | 5.2.17 |
| **Database (Primary)** | Firestore (NoSQL) | Latest |
| **Database (Backup)** | SQLite/PostgreSQL (relational) | SQLite for dev, PostgreSQL for prod |
| **Real-time** | Firebase Realtime Listeners | Latest |
| **State Management** | TanStack Query (@tanstack/react-query) | Latest |
| **HTTP Client** | Axios | Latest |
| **Routing** | React Router DOM | Latest |
| **API Documentation** | drf-spectacular (Swagger) | 0.30.0 |
| **Docker** | Docker + Docker Compose | Latest |
| **CI/CD** | GitHub Actions | Free tier |
| **Containerization** | Docker (frontend: nginx, backend: gunicorn) | Latest |

---

## Current Setup Completed

### ✅ Phase 0: Prerequisites
- [x] Git installed and configured
- [x] Node.js v20+ installed
- [x] Python 3.11+ installed
- [x] Docker Desktop with WSL2 backend
- [x] GitHub account created
- [x] VS Code (or preferred editor)

### ✅ Phase 1: Repo & Folder Structure
- [x] Monorepo created at `D:\Project\Nexus-Cursor\`
- [x] Root `.gitignore` configured (Python, Node, Firebase keys)
- [x] Root `README.md` created
- [x] Git initialized and linked to GitHub repo
- [x] Folder structure:
  ```
  Nexus-Cursor/
  ├── backend/           # Django app
  ├── frontend/          # React + Vite app
  ├── .github/
  │   └── workflows/     # CI/CD pipelines (TODO)
  ├── .gitignore
  ├── README.md
  └── docker-compose.yml # Local development
  ```

### ✅ Phase 2: Branching Strategy
- [x] `main` branch created and protected on GitHub
- [x] `develop` branch created for integration
- [x] Branching convention documented in README:
  - `feature/backend-<name>` — backend features
  - `feature/frontend-<name>` — frontend features
  - `fix/<name>` — bug fixes
- [x] Protected branch rules: require PR + status checks

### ✅ Phase 3: Backend Setup (Django)
- [x] Python virtual environment created (`venv/`)
- [x] Django project initialized (`config/`)
- [x] Django app created (`core/`)
- [x] Key packages installed:
  - `djangorestframework` — REST API
  - `django-cors-headers` — CORS for frontend
  - `python-decouple` — environment variables
  - `firebase-admin` — Firebase integration
  - `drf-spectacular` — auto API docs
  - `gunicorn` — production server
  - `psycopg2-binary` — PostgreSQL driver
- [x] Settings configured:
  - INSTALLED_APPS updated with DRF, CORS, docs, core
  - MIDDLEWARE updated with CorsMiddleware
  - CORS_ALLOWED_ORIGINS set to `http://localhost:5173` (frontend dev)
  - REST_FRAMEWORK configured with drf-spectacular
  - Environment variables (`SECRET_KEY`, `DEBUG`) via `.env`
- [x] API documentation endpoint: `http://localhost:8000/api/docs/`
- [x] Database configured (SQLite for dev, can switch to PostgreSQL)
- [x] `.env` created with `SECRET_KEY` and `DEBUG`
- [x] `.dockerignore` created

### ✅ Phase 4: Frontend Setup (React + Vite)
- [x] Vite + React scaffold created
- [x] Key packages installed:
  - `react-router-dom` — page routing
  - `axios` — HTTP client
  - `firebase` — Firebase client SDK
  - `@tanstack/react-query` — data fetching & caching
- [x] Folder structure created:
  ```
  frontend/src/
  ├── components/    # Reusable React components
  ├── pages/         # Page-level components
  ├── hooks/         # Custom React hooks
  ├── services/      # API calls (firebase.js, api.js)
  ├── store/         # State management
  ├── utils/         # Helper functions
  ├── App.jsx
  └── main.jsx
  ```
- [x] `.env` configured with:
  - `VITE_API_BASE_URL=http://localhost:8000`
  - Firebase config (placeholder keys initially)
- [x] API service (`axios` instance) created in `src/services/api.js`
- [x] Firebase config created in `src/services/firebase.js`
- [x] nginx config created for production serving
- [x] `.dockerignore` created

### ✅ Phase 5: Firebase Setup
- [x] Firebase project created (`nexus-saas`)
- [x] Firestore Database enabled (test mode)
- [x] Frontend Firebase config obtained and added to `.env`
- [x] Backend Firebase Admin SDK key generated and saved to `backend/config/firebase-adminsdk.json`
- [x] Firebase Admin SDK initialized in `backend/core/firebase_client.py`
- [x] Connection tested (Python shell test successful)
- [x] `.gitignore` prevents committing `firebase-adminsdk.json`

### ✅ Phase 6: Dockerization
- [x] Backend Dockerfile created (Python 3.11 slim, gunicorn)
- [x] Frontend Dockerfile created (Node build stage + nginx serving)
- [x] nginx.conf created for frontend SPA routing
- [x] `docker-compose.yml` created with 3 services:
  - `backend` — Django on port 8000
  - `frontend` — nginx on port 3000
  - `db` — PostgreSQL on port 5432 (removed from current version, using SQLite)
- [x] Docker builds tested locally
- [x] All services running and accessible

---

## Folder Structure

```
Nexus-Cursor/
│
├── backend/
│   ├── config/                    # Django project settings
│   │   ├── __init__.py
│   │   ├── settings.py            # Django config (INSTALLED_APPS, DB, CORS, etc.)
│   │   ├── urls.py                # URL routing
│   │   ├── wsgi.py                # WSGI app (production)
│   │   ├── asgi.py                # ASGI app (async)
│   │   └── firebase-adminsdk.json # Firebase credentials (NEVER COMMIT)
│   │
│   ├── core/                      # Main Django app (models, views, serializers)
│   │   ├── migrations/
│   │   ├── __init__.py
│   │   ├── admin.py               # Django admin config
│   │   ├── apps.py
│   │   ├── models.py              # Database models (Projects, Tasks, Users, etc.)
│   │   ├── views.py               # API views/viewsets
│   │   ├── serializers.py         # DRF serializers (TODO)
│   │   ├── urls.py                # App-level URL routing (TODO)
│   │   ├── firebase_client.py     # Firebase Admin SDK setup
│   │   └── tests.py               # Unit tests
│   │
│   ├── venv/                      # Python virtual environment (git ignored)
│   ├── .env                       # Environment variables (git ignored)
│   ├── .dockerignore              # Docker build ignore rules
│   ├── Dockerfile                 # Docker image spec
│   ├── manage.py                  # Django management CLI
│   ├── requirements.txt           # Python dependencies
│   └── db.sqlite3                 # SQLite database (dev only, git ignored)
│
├── frontend/
│   ├── src/
│   │   ├── components/            # Reusable React components
│   │   ├── pages/                 # Full-page components
│   │   ├── hooks/                 # Custom React hooks
│   │   ├── services/
│   │   │   ├── api.js             # Axios instance for Django API
│   │   │   └── firebase.js        # Firebase client initialization
│   │   ├── store/                 # State management (empty, for future)
│   │   ├── utils/                 # Helper utilities
│   │   ├── App.jsx                # Root component
│   │   └── main.jsx               # Entry point
│   │
│   ├── public/                    # Static assets
│   ├── node_modules/              # NPM packages (git ignored)
│   ├── dist/                      # Built output (git ignored, generated by Vite)
│   ├── .env                       # Environment variables (git ignored)
│   ├── .dockerignore              # Docker build ignore rules
│   ├── .gitignore
│   ├── Dockerfile                 # Docker image spec (multi-stage)
│   ├── nginx.conf                 # nginx config for SPA routing
│   ├── package.json               # Dependencies
│   ├── package-lock.json
│   ├── vite.config.js             # Vite build config
│   └── index.html                 # HTML entry point
│
├── .github/
│   └── workflows/                 # GitHub Actions CI/CD (TODO)
│       ├── ci.yml                 # Test pipeline (TODO)
│       └── deploy.yml             # Deploy pipeline (TODO)
│
├── .gitignore                     # Root-level git ignore
├── README.md                      # Project README
├── docker-compose.yml             # Local dev environment spec
└── MASTER_PROMPT.md               # THIS FILE
```

---

## Environment Setup

### Backend Environment Variables (`.env`)

Located at `backend/.env`:

```
SECRET_KEY=your-super-secret-key-change-this-in-production
DEBUG=True
DB_NAME=nexus_db
DB_USER=nexus_user
DB_PASSWORD=nexus_password
DB_HOST=localhost
DB_PORT=5432
```

**Never commit this file.** It's in `.gitignore`.

### Frontend Environment Variables (`.env`)

Located at `frontend/.env`:

```
VITE_API_BASE_URL=http://localhost:8000
VITE_FIREBASE_API_KEY=AIzaSy...
VITE_FIREBASE_AUTH_DOMAIN=nexus-saas-xxxx.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=nexus-saas-xxxx
VITE_FIREBASE_STORAGE_BUCKET=nexus-saas-xxxx.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef1234567890
```

**Never commit this file.** It's in `.gitignore`.

### Firebase Admin Key

Located at `backend/config/firebase-adminsdk.json`:

This is a secret JSON file downloaded from Firebase Console. **NEVER commit it.** It's in `.gitignore`.

---

## Development Workflow

### For Backend Developers

1. **Activate virtual environment:**
   ```bash
   cd backend
   .\venv\Scripts\Activate.ps1  # Windows PowerShell
   ```

2. **Create a feature branch:**
   ```bash
   git checkout develop
   git pull
   git checkout -b feature/backend-auth-api
   ```

3. **Make changes** in `core/models.py`, `core/views.py`, etc.

4. **Test locally:**
   ```bash
   python manage.py runserver
   ```
   Visit `http://localhost:8000` and `http://localhost:8000/api/docs/`

5. **Run tests (when we add them):**
   ```bash
   python manage.py test
   ```

6. **Commit and push:**
   ```bash
   git add .
   git commit -m "feat: add JWT auth endpoint"
   git push -u origin feature/backend-auth-api
   ```

7. **Open Pull Request** on GitHub into `develop`

8. **CI pipeline runs** automatically (Phase 8 — tests run)

9. **Once approved & tests pass**, merge into `develop`

### For Frontend Developers

1. **Create a feature branch:**
   ```bash
   cd frontend
   git checkout develop
   git pull
   git checkout -b feature/frontend-kanban-board
   ```

2. **Start dev server:**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173`

3. **Create components** in `src/components/`, `src/pages/`, etc.

4. **Make API calls** using the `api.js` service

5. **Commit and push:**
   ```bash
   git add .
   git commit -m "feat: add kanban board layout"
   git push -u origin feature/frontend-kanban-board
   ```

6. **Open Pull Request** on GitHub into `develop`

7. **CI pipeline runs** automatically (Phase 8 — build test)

8. **Once approved & build passes**, merge into `develop`

### Local Testing (Both Together)

```bash
# From project root
docker compose up --build
```

Access:
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:8000`
- API Docs: `http://localhost:8000/api/docs/`

---

## Phases Completed

### Phase 0: Prerequisites ✅
Installed Git, Node, Python, Docker, GitHub account.

### Phase 1: Repo Setup ✅
Initialized monorepo with `backend/` and `frontend/` folders.

### Phase 2: Branching Strategy ✅
Set up `main` (protected), `develop`, and feature branch naming.

### Phase 3: Backend (Django) ✅
Created Django project with DRF, CORS, Firebase, and API docs.

### Phase 4: Frontend (React + Vite) ✅
Created React app with routing, HTTP client (axios), and Firebase config.

### Phase 5: Firebase ✅
Integrated Firestore (primary), Admin SDK (backend), and client SDK (frontend).

### Phase 6: Docker ✅
Dockerized backend (gunicorn) and frontend (nginx). Running locally with `docker-compose up --build`.

---

## Phases Remaining

### Phase 7: Free Hosting Setup (NEXT)
**Goal:** Deploy backend and frontend to free platforms.

**Steps:**
1. Sign up on **Render.com** (backend hosting)
2. Sign up on **Vercel** (frontend hosting)
3. Connect GitHub repos to both platforms
4. Generate **Deploy Hooks** (URLs to trigger deploys)
5. Store hooks as GitHub Secrets

**Timeline:** 30 mins

### Phase 8: CI/CD Pipelines
**Goal:** Automate testing & deployment on code push.

**What happens:**
- Push to `feature/*` branch → GitHub Actions runs tests
- Tests pass → Green ✅ on PR
- Merge to `main` → Auto-deploy to Render (backend) + Vercel (frontend)

**Files to create:**
- `.github/workflows/ci.yml` — runs tests on every push/PR
- `.github/workflows/deploy.yml` — deploys on merge to `main`

**Timeline:** 30 mins

### Phase 9: API Documentation
**Goal:** Document all API endpoints for frontend devs.

**Current:** Swagger auto-docs already available at `/api/docs/` (drf-spectacular)

**Future:** Add detailed endpoint descriptions as we build features.

**Timeline:** Ongoing

### Phase 10: Core Models & First Endpoints
**Goal:** Build the data models and first API endpoints.

**What to build:**
- **Models:** User, Project, Board, Task, Label, Member
- **Endpoints:**
  - `POST /api/projects/` — create project
  - `GET /api/projects/` — list projects
  - `GET /api/projects/{id}/` — project detail
  - `POST /api/projects/{id}/boards/` — create board
  - `GET /api/projects/{id}/boards/` — list boards
  - `POST /api/boards/{id}/tasks/` — create task
  - `GET /api/boards/{id}/tasks/` — list tasks
  - etc.

**Frontend Components:**
- Project list page
- Board page with tasks
- Task detail modal
- Create project form
- Create task form

**Timeline:** 3-5 days of development

### Phase 11: Authentication
**Goal:** User signup, login, JWT tokens.

**Backend:**
- Django user model customization
- JWT token endpoints
- Permission classes for API views

**Frontend:**
- Login/signup pages
- Store JWT in localStorage
- Add token to API requests
- Logout

**Timeline:** 1-2 days

### Phase 12: Real-time Updates
**Goal:** Live collaboration (multiple users see updates instantly).

**Approach:**
- Firebase Firestore listeners for real-time data
- WebSocket for instant notifications (optional: upgrade later)

**Timeline:** 2-3 days

### Phase 13: Testing & QA
**Goal:** Unit & integration tests, manual testing.

**Backend:**
- Django unit tests
- DRF endpoint tests
- Firebase integration tests

**Frontend:**
- Component tests (React Testing Library)
- End-to-end tests (Cypress or Playwright)

**Timeline:** 2-3 days

### Phase 14: Deployment & Launch
**Goal:** Go live.

**Steps:**
- Lock down Firestore security rules
- Set up production `.env` files
- Test in staging environment
- Deploy to production
- Monitor logs & performance

**Timeline:** 1 day

---

## Important Notes

### Database Strategy
- **Firestore (primary):** Real-time, unstructured data (Projects, Tasks, Boards)
- **SQLite/PostgreSQL (backup):** Django auth, sessions, admin panel
- **Why hybrid?** Firestore is great for collaborative features but Django's ORM handles auth/admin better.

### Authentication Flow (To Be Implemented)
1. User signs up → Django creates `User` in database
2. Django issues JWT token
3. Frontend stores token in localStorage
4. Frontend includes token in every API request header
5. Django validates token on each request

### CORS Explained
- Frontend runs on `localhost:5173` (dev) or `vercel.app` (prod)
- Backend runs on `localhost:8000` (dev) or `render.com` (prod)
- They're different origins → CORS headers required
- `django-cors-headers` handles this automatically

### Docker Volumes
- `./backend:/app` — Live reload during dev. Changes to Python files restart Django
- No volumes for frontend in prod build (nginx serves static files)

### Git Ignore
Everything in `.gitignore` is never committed:
- `.env` files (secrets)
- `firebase-adminsdk.json` (backend secret)
- `venv/`, `node_modules/`, `dist/`, `__pycache__/` (generated)
- `.DS_Store` (OS junk)

---

## Quick Reference Commands

### Project Root
```bash
# Start all services locally
docker compose up --build

# Stop services
docker compose down

# Remove all Docker images/containers
docker system prune -a

# View logs
docker compose logs -f backend
docker compose logs -f frontend
```

### Backend
```bash
# Activate venv (Windows PowerShell)
cd backend
.\venv\Scripts\Activate.ps1

# Install new package
pip install package-name
pip freeze > requirements.txt

# Run migrations
python manage.py migrate

# Create superuser (admin)
python manage.py createsuperuser

# Run tests
python manage.py test

# Django shell (interactive Python)
python manage.py shell

# Start dev server
python manage.py runserver
```

### Frontend
```bash
cd frontend

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Git
```bash
# Create feature branch
git checkout develop
git pull
git checkout -b feature/backend-auth-api

# Commit
git add .
git commit -m "feat: add feature"
git push -u origin feature/backend-auth-api

# Merge (via GitHub PR)
# Don't force-push to main/develop — always use PRs

# Sync local with remote
git fetch origin
git pull origin develop
```

### Firebase
```bash
# Test Firebase connection (Python shell)
cd backend
python manage.py shell
>>> from core.firebase_client import db
>>> list(db.collections())
[]  # If this works, Firebase is connected
>>> exit()
```

---

## FAQ & Troubleshooting

**Q: Docker compose hangs during build?**
A: Stop with `Ctrl + C`, run `docker system prune -a`, try again.

**Q: Frontend can't call backend API?**
A: Check `VITE_API_BASE_URL` in `frontend/.env`. Should be `http://localhost:8000` locally or `http://backend:8000` inside Docker.

**Q: Firebase credentials error?**
A: Ensure `backend/config/firebase-adminsdk.json` exists and is valid. Never commit it.

**Q: How do I add a new Python package?**
A: `pip install package-name`, then `pip freeze > requirements.txt`, then rebuild Docker.

**Q: How do I add a new npm package?**
A: `npm install package-name`, commit `package.json` and `package-lock.json`.

**Q: Can I work on frontend without running backend?**
A: Yes, but API calls will fail. Mock the responses in development or run backend separately.

---

## Next Steps for Next Agent

1. **Read this document fully** to understand the architecture
2. **Verify local setup:** Run `docker compose up --build` and confirm all three services work
3. **Phase 7 (Hosting):** Set up Render (backend) and Vercel (frontend) with deploy hooks
4. **Phase 8 (CI/CD):** Create GitHub Actions workflows for testing and deploying
5. **Phase 10 (Core Models):** Start building the actual app (Projects, Boards, Tasks)

---

**Questions?** Refer to this document first. If unclear, search the git history for context of each decision.

**Good luck building Nexus! 🚀**
