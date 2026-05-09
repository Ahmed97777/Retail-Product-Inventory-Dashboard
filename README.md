# Retail Product Inventory Dashboard

A full stack product management dashboard built to manage retail inventory efficiently through a modern, scalable architecture.

This application enables users to create, view, update, and delete products while maintaining strong type safety, clean code organization, and enterprise-level development practices.

## Core Features

- Product CRUD operations (Create, Read, Update, Delete)
- PostgreSQL database integration
- Dockerized backend environment
- Type-safe validation using Zod
- Repository Pattern architecture
- TypeORM for database management
- Next.js App Router frontend
- Axios-powered API communication
- Interactive product tables
- Dynamic forms and selectors with shadcn/ui
- Loading states, async UI patterns, and error handling

## Tech Stack

### Backend

- Node.js
- TypeScript
- Express.js / NestJS principles
- PostgreSQL
- Docker
- TypeORM
- Zod

### Frontend

- Next.js
- React
- TypeScript
- Axios
- shadcn/ui
- TanStack patterns

## Project Goals

- Demonstrate full stack engineering best practices
- Apply modular architecture and separation of concerns
- Showcase production-ready CRUD system design
- Practice scalable frontend and backend integration
- Prepare for real-world technical interviews and enterprise development

## Architecture Focus

- Schema-driven development
- Single source of truth using Zod
- Repository Pattern
- Service layer abstraction
- Clean modular codebase
- Maintainable and scalable project structure

## Getting Started

### Backend Setup

Open terminal inside the backend folder:

```bash
docker compose up -d
npm run dev
```

### Frontend Setup

Open terminal inside the frontend folder:

```bash
npm run dev
```

## Notes

- Ensure Docker is installed and running locally
- Backend server should be started before frontend
- PostgreSQL container must be active for database operations
- Frontend will communicate with backend APIs during development

This project is designed as both a practical full stack learning experience and a professional portfolio piece demonstrating modern web development capabilities.
