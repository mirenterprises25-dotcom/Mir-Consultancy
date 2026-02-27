# Changelog

All notable changes to the MIR Consulting web platform will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Complete React (Vite) frontend with Tailwind CSS theming.
- Responsive layout supporting `Header`, `Footer`, `Home`, and detail pages.
- Robust routing logic via `react-router-dom`.
- Full integration with the underlying FastAPI backend utilizing `Axios`.
- FastAPI backend framework initialized.
- Configured SQLAlchemy database mappings across `industries`, `capabilities`, `insights`, `categories`, `leadership`, and `pages`.
- Written comprehensive initialization seed script for mocking the primary database context.
- Modularized RESTful routers inside `/backend/routers`.

### Fixed
- Addressed TypeScript compiling errors regarding unused import variables.

### Changed
- Refactored base Tailwind config to strictly adhere to high-end consulting brand aesthetics (`brand-900`, etc).
