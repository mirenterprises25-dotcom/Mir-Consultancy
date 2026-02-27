# Contributing to MIR Consulting Platform

First off, thank you for considering contributing to the MIR Consulting ecosystem. To maintain the executive-level quality required by our brand, stricter engineering guidelines are enforced on this repository.

## Development Workflow

1. **Branching**:
   - Never commit directly to `main`.
   - Branch format: `type/context`. E.g., `feat/add-auth`, `fix/header-mobile-bug`, `chore/update-deps`.
   
2. **Local Environment Context**:
   - Ensure the FastAPI backend is running before testing Frontend components related to API calls.
   - Run `tsc -b` logically on the frontend before any PR to guarantee absolute type safety.

3. **Styling Consistency**:
   - Do NOT use arbitrary Tailwind colors (e.g., `text-[#FF0000]`).
   - You MUST utilize the brand variables defined in `tailwind.config.js`. 
   - If a new brand color is absolutely required, it must be approved by the Design Lead and added to the configuration mapping globally.

## Submitting Pull Requests

1. Provide an exhaustive description of what the PR solves.
2. Link the PR to the relevant issue or internal task tracking ticket.
3. If altering backend database schema (`backend/models.py`), you **MUST** include an Alembic migration script. PRs containing structural model changes without migrations will be rejected immediately.
4. Ensure the `docs/CHANGELOG.md` is updated reflecting your additions under the `[Unreleased]` tag.
