## Development Workflow

We use a feature-branch workflow with `main` and `develop` as protected branches.

### Branch naming:
- `feature/backend-<name>` — backend features (e.g., `feature/backend-auth-api`)
- `feature/frontend-<name>` — frontend features (e.g., `feature/frontend-kanban-board`)
- `fix/<name>` — bug fixes (e.g., `fix/login-redirect`)

### Workflow per developer:
1. `git checkout develop && git pull`
2. Create a feature branch: `git checkout -b feature/backend-auth-api`
3. Make commits: `git add . && git commit -m "feat: add JWT auth endpoint"`
4. Push: `git push -u origin feature/backend-auth-api`
5. Open a Pull Request on GitHub
6. Wait for CI checks to pass (automated tests run)
7. Once approved, merge into `develop`
8. Periodically, merge `develop` → `main` for production releases

### Deployment:
- `develop` → staging (optional, we'll set this up later)
- `main` → production (automatic via CI/CD)