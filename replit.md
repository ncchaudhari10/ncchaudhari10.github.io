# AI Research Scientist Portfolio - Project Architecture

## Overview

This is a modern, professional portfolio website for an AI Research Scientist built with a full-stack TypeScript architecture. The application features a React frontend with shadcn/ui components, an Express.js backend, and is designed for deployment on platforms like GitHub Pages. The project emphasizes clean design, performance, and showcases AI/ML research experience through an interactive portfolio interface.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom cosmic theme variables
- **Animations**: Framer Motion for smooth transitions and effects
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Storage**: PostgreSQL-based session storage using connect-pg-simple

### Design System
- **Theme**: Dark cosmic theme with gold accent colors
- **Typography**: Inter font family for clean readability
- **Components**: Fully accessible Radix UI-based component system
- **Responsive**: Mobile-first design approach
- **Visual Effects**: Animated starfield background and floating mathematical equations

## Key Components

### Frontend Components
- **Navigation**: Responsive navigation with smooth scroll functionality
- **Hero Section**: Professional introduction with animated profile and social links
- **Journey Timeline**: Interactive career timeline with role descriptions
- **Research Section**: Current research focus with mathematical visualizations
- **Projects Section**: Featured publications and projects with external links
- **Skills Section**: Categorized technical skills with visual indicators
- **Connect Section**: Professional opportunities and contact information
- **Visual Effects**: Animated starfield and floating equations for ambiance

### Backend Components
- **Storage Interface**: Abstract storage layer supporting both memory and database implementations
- **User Management**: Basic user schema with authentication capabilities
- **API Routes**: RESTful API structure (currently minimal, extensible)
- **Session Management**: Secure session handling with PostgreSQL storage

## Data Flow

### Client-Side Data Flow
1. React components fetch data using TanStack Query
2. Query client manages caching and background updates
3. Components render with loading states and error handling
4. Smooth animations enhance user experience during state transitions

### Server-Side Data Flow
1. Express server handles API requests with middleware logging
2. Storage layer abstracts database operations
3. Drizzle ORM provides type-safe database queries
4. Error handling middleware provides consistent error responses

### Database Schema
- **Users Table**: Basic user authentication schema
- **Session Storage**: Managed by connect-pg-simple for secure session handling
- **Future Extensions**: Schema designed for easy extension with research data, projects, etc.

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for smooth user interactions
- **wouter**: Lightweight routing solution

### UI Dependencies
- **@radix-ui/***: Accessible, unstyled UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant API for components
- **lucide-react**: Modern icon library

### Development Dependencies
- **vite**: Fast build tool and development server
- **typescript**: Type safety and developer experience
- **drizzle-kit**: Database migration and schema management

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with HMR
- **Database**: Neon Database with environment-based configuration
- **Build Process**: TypeScript compilation with Vite bundling

### Production Deployment
- **Build Command**: `npm run build` - Creates optimized production bundle
- **Server Bundle**: ESBuild compiles server code for Node.js execution
- **Static Assets**: Client build output served from `/dist/public`
- **Environment Variables**: `DATABASE_URL` required for PostgreSQL connection

### GitHub Pages Compatibility
- Architecture supports static deployment with API routes disabled
- Client-side routing configured for GitHub Pages subdirectory hosting
- Optimized asset loading and caching strategies

## Changelog

```
Changelog:
- July 05, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```