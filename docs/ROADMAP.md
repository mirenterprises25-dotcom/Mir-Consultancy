# MIR Consulting & Enterprises Roadmap

MIR Consulting is simply the first node in a broader, heavily integrated holding ecosystem. While this repository currently establishes the web presence for the consultancy arm, the architecture was intentionally designed to support rapid lateral scaling.

## Phase 1: V1 Launch (Current)
- **Goal**: Establish the digital cornerstone for MIR Consulting.
- **Deliverables**:
  - High-end React Frontend.
  - FastAPI Data Layer.
  - Scalable SQLite/Alembic database ready for Postgres migration.

## Phase 2: Operations Dashboard & Authentication Core (Next Quarter)
- **Goal**: Transition from a public marketing presence to an interactive client portal.
- **Key Initiatives**:
  - Integrate a secure JWT identity layer via FastAPI.
  - Implement role-based access control (RBAC) separating "Admins", "Partners", and "Clients".
  - Construct a secure `/portal` route on the Frontend requiring session tokens to view proprietary project updates.

## Phase 3: "MIR Enterprises" Holding Architecture (Year 2)
- **Goal**: Expand the codebase into a monolithic monorepo or robust microservices mesh serving multiple entities.
- **Key Initiatives**:
  - Separate `frontend` into `packages/ui` (shared components) and `apps/consulting`, `apps/capital`, `apps/real-estate`.
  - Refactor FastAPI to implement multi-tenancy. E.g., Adding an `entity_id` to models to serve `Mir Capital` and `Mir Consulting` from the same cluster, minimizing operational overhead.
  - Centralized unified login system across all ecosystem businesses.

## Phase 4: Big Data & Analytics Integration 
- **Goal**: Bring our "Data Analytics & BI" capabilities to life natively on the platform.
- **Key Initiatives**:
  - Integrate Apache Superset or Metabase embeddings within the client portal.
  - Process real-time client APIs through a synchronized ETL pipeline (Airflow).
