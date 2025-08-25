# Overview

This is a professional portfolio website for Lakshya Porwal, a Senior Data Engineer at ZS Associates. The application is built as a full-stack web application showcasing skills, experience, projects, and providing contact functionality. It features a modern, responsive design with dark/light theme support and smooth scrolling navigation.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built with **React 18** using **TypeScript** and **Vite** as the build tool. The application follows a component-based architecture with:

- **UI Framework**: Radix UI components with shadcn/ui for consistent, accessible design
- **Styling**: Tailwind CSS with CSS variables for theming support
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Context for theme management, TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React and React Icons for comprehensive icon coverage

## Backend Architecture
The backend uses **Express.js** with **TypeScript** running on Node.js:

- **API Structure**: RESTful endpoints for contact form submission and resume download
- **Data Storage**: In-memory storage implementation with interfaces for future database integration
- **Development Server**: Vite middleware integration for hot module replacement
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Logging**: Request/response logging for API endpoints

## Database Design
Currently implements an in-memory storage pattern with:

- **User Schema**: Basic user entity with username/password (prepared for future authentication)
- **Storage Interface**: Abstract storage layer allowing easy migration to persistent databases
- **Drizzle ORM**: Configured for PostgreSQL with schema definitions ready for database integration

## Development Workflow
- **Build System**: Vite for fast development and optimized production builds
- **Type Safety**: Full TypeScript coverage across frontend and backend
- **Code Quality**: Consistent code formatting and organization
- **Development Features**: Hot reload, error overlays, and development banners

# External Dependencies

## Core Technologies
- **React 18**: Frontend framework with TypeScript support
- **Express.js**: Backend web framework
- **Vite**: Build tool and development server
- **Node.js**: Runtime environment

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless UI components for accessibility
- **shadcn/ui**: Pre-built component library
- **Lucide React**: Icon library
- **React Icons**: Additional icon collections

## Database and ORM
- **Drizzle ORM**: Type-safe database toolkit
- **@neondatabase/serverless**: PostgreSQL database connector
- **Drizzle Kit**: Database migration and schema management

## Form and Validation
- **React Hook Form**: Form state management
- **Zod**: Schema validation
- **@hookform/resolvers**: Form validation integration

## Development Tools
- **TypeScript**: Static type checking
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixes
- **ESBuild**: Fast JavaScript bundler for production

## Utility Libraries
- **TanStack Query**: Server state management
- **date-fns**: Date manipulation
- **clsx & class-variance-authority**: Conditional CSS classes
- **nanoid**: Unique ID generation

## Deployment and Production
- **Replit Integration**: Development environment optimization
- **Static Asset Serving**: Express static file serving
- **Environment Configuration**: Development/production environment handling