# MIR Consulting - Official Website Platform

Welcome to the central repository for the **MIR Consulting** website platform. This project serves as a cornerstone of the broader MIR Enterprises holding ecosystem, meticulously engineered to combine high-end aesthetic presentation with robust, scalable software architecture.

---

## 1. Project Overview

The MIR Consulting website is designed to reflect the executive-level professionalism, strategic discipline, and operational excellence of a top-tier management consultancy. Beyond acting as a digital brochure, it is engineered as an extensible platform capable of accommodating dynamic content distribution (insights, articles, podcasts) and seamlessly scaling to integrate future businesses under the MIR Holding structure.

## 2. Business Vision

**"Navigating Complexity. Driving Excellence."**

MIR Consulting operates on the premise that true transformation requires both deep industry expertise and innovative technological application. Our vision for this platform is to act as the primary touchpoint for global leaders seeking our tailored operational, strategic, and digital solutions. Furthermore, the "MIR" brand identity embedded in this project serves as the foundational template for all future entities within the MIR Enterprises portfolio.

---

## 3. Architecture Explanation

This application employs a modern **Decoupled (Headless) Architecture**:

- **Frontend Application (Client-Side)**: Developed using React, built with Vite, and heavily utilizing TypeScript for type safety. It fetches data dynamically and handles all UI/UX routing via React Router. Styling is driven by TailwindCSS, utilizing a custom consultancy-tailored theme.
- **Backend Service (API Layer)**: Developed via FastAPI (Python). It provides high-performance asynchronous REST endpoints.
- **Data Persistence**: SQLAlchemy ORM with an SQLite database (configured for easy migration to PostgreSQL for production environments).

*For a highly detailed technical breakdown, please refer to `/docs/SYSTEM_ARCHITECTURE.md`.*

---

## 4. Folder Structure

```text
Mir_Consultancy/
│
├── frontend/                  # React Application
│   ├── src/
│   │   ├── components/        # Reusable UI elements (Header, Footer, Layout)
│   │   ├── pages/             # Route-specific views (Home, Insights, etc.)
│   │   ├── services/          # Data fetching utilities (Axios client)
│   │   ├── App.tsx            # Main router
│   │   └── index.css          # Tailwind and global styles
│   ├── index.html
│   └── tailwind.config.js     # Brand-specific aesthetic tokens
│
├── backend/                   # FastAPI Service
│   ├── routers/               # Modular API endpoint definitions
│   ├── main.py                # Server entry point
│   ├── models.py              # SQLAlchemy Data Models
│   ├── schemas.py             # Pydantic validation schemas
│   ├── crud.py                # Database queries and operations
│   ├── database.py            # Engine and connection configurations
│   ├── seed.py                # Mock data initialization script
│   └── requirements.txt       # Python dependencies
│
├── docs/                      # Central Documentation Hub
│   ├── SYSTEM_ARCHITECTURE.md
│   ├── DEVELOPMENT_LOG.md
│   ├── CHANGELOG.md
│   ├── ROADMAP.md
│   └── CONTRIBUTING.md
│
└── README.md                  # This file
```

---

## 5. Technology Decisions

- **React + Vite**: Chosen for rapid development modularity, vast ecosystem, and blazing-fast hot module replacement.
- **TailwindCSS**: Chosen for building highly customized, specific consultancy aesthetics quickly without maintaining immense, bloated CSS files.
- **FastAPI**: Selected for incredible out-of-the-box performance, native validation (Pydantic), and automatic interactive API documentation (Swagger).
- **SQLite / SQLAlchemy**: Ensures frictionless development initialization. The ORM abstracts raw SQL, allowing immediate transition to a robust PostgreSQL cluster on deployment.

---

## 6. Setup Instructions

### Prerequisites
- Node.js (v18+)
- Python (3.10+)

### Database & Backend Setup
1. Navigate to the backend directory: `cd backend`
2. Create virtual environment: `python -m venv venv`
3. Activate environment: 
   - Windows: `.\venv\Scripts\activate`
   - Mac/Linux: `source venv/bin/activate`
4. Install requirements: `pip install -r requirements.txt`
5. Seed Database: `python seed.py`
6. Run Server: `uvicorn main:app --reload`
   *Available on `http://localhost:8000` (API documentation at `/docs`)*

### Frontend Setup
1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start Dev Server: `npm run dev`
   *Available on `http://localhost:5173`*

---

## 7. Development Workflow

1. Discuss feature logic and update `task.md` internally.
2. Develop the Backend (Models -> Schemas -> CRUD -> Routers).
3. Test Backend endpoints via Swagger UI.
4. Develop Frontend Components.
5. Connect API logic via `src/services/api.ts`.
6. Verify design metrics against brand guidelines.

---

## 8. API Documentation

Available natively via Swagger UI when running the backend: `http://localhost:8000/docs`

**Core Endpoints:**
- `GET /api/industries`: Retrieve all mapped industries.
- `GET /api/capabilities`: Retrieve consultancy services.
- `GET /api/insights/category/{category_slug}`: Retrieve specific category insights.
- `GET /api/pages/{slug}`: Read arbitrary static pages mapped in the database.

---

## 9. Database Schema Explanation

Our DB architecture maps the real-world operational structure of the consultancy:
- `Industries` & `Capabilities`: Act as categorical pillars representing what we do and where we do it.
- `Insights` & `Categories`: A dynamic publishing relationship for whitepapers, blogs, and studies.
- `Leadership`: Represents managing partners and key personnel.
- `Pages`: A flexible table containing markdown/HTML for dynamic non-structural pages (e.g., "Our Idea", "Our History").

---

## 10. How to Add New Pages

**Option A (Dynamic Content):**
Add a row to the `Pages` table in the database containing the new routing slug and content. Access it via the `/about/:slug` frontend route.

**Option B (Structural Component):**
1. Create a raw `.tsx` component in `frontend/src/pages/`.
2. Add the route object to `frontend/src/App.tsx`.

---

## 11. Multi-Company Expansion (MIR Holding)

The architecture is explicitly designed to handle multiple entities.
To add new businesses:
1. Re-use the `frontend` React components as a UI library workspace.
2. Clone the routing scheme and adapt the `tailwind.config.js` with the new business's specific CSS tokens.
3. Update the `backend` to either support multi-tenancy (adding an `entity_id` to all tables) or deploy a parallel FastApi microservice instance for the new business.

---

## 12. Deployment Guide

**Backend (Production)**
1. Map Database to a managed PostgreSQL cluster. Update `DATABASE_URL` in `.env`.
2. Deploy the FastAPI app via a Docker container orchestrated by Kubernetes or AWS ECS.
3. Use Gunicorn with Uvicorn workers: `gunicorn main:app -k uvicorn.workers.UvicornWorker -w 4`

**Frontend (Production)**
1. Run `npm run build` in `/frontend`.
2. Serve the `/dist` directory statically via Vercel, Netlify, or AWS CloudFront/S3.
3. Map environment variables referencing the production API Endpoint.

---

## 13. Update & Versioning Strategy

- **Semantic Versioning** used for API endpoint updates (v1, v2).
- Feature branches are mapped in Git using `feature/capability-name`.
- Any modification to database models must be accompanied by an Alembic migration script.

---

## 14. Future Scalability Plan

We anticipate aggressive scaling in Q3/Q4. 
- Introduce a Redis caching layer for `/insights` endpoints to reduce database hits.
- Evolve FastAPI into a GraphQL service structure if deeply nested category relations become common.
- Implement an Authentication layer (JWT based) for creating a private client portal via React.

---

## 15. Maintenance Instructions

- Monitor dependency health automatically utilizing `dependabot` or equivalent.
- `sqlite` backups should be automated if a transition to `postgres` is delayed.
- Ensure the API documentation (`/docs`) logic perfectly mirrors code changes. Review the `CHANGELOG.md` upon every merge.
