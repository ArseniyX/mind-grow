# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MindGrow is a Next.js application for mental and emotional growth, built with TypeScript, React 19, and Tailwind CSS. The app features a multi-step user flow: authentication → onboarding → dashboard.

## Development Commands

- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

### Component Structure
- `/src/components/` - Main application components
  - `auth-flow.tsx` - Handles user authentication
  - `onboarding-flow.tsx` - User onboarding process
  - `dashboard.tsx` - Main application dashboard
  - `training-module.tsx` - Training functionality
  - `/ui/` - Reusable shadcn/ui components
- `/src/app/` - Next.js App Router structure
- `/src/lib/` - Utility functions and helpers

### Routing Structure
The application uses Next.js App Router with proper route separation:
- `/` - Landing page that redirects based on authentication status
- `/auth` - Authentication flow
- `/onboarding` - User onboarding process (requires authentication)
- `/dashboard` - Main application dashboard (requires authentication)

User authentication state is managed via localStorage, with protected routes redirecting unauthenticated users to `/auth`.

### UI Framework
Uses shadcn/ui components with:
- Tailwind CSS for styling (configured in `src/app/globals.css`)
- Radix UI primitives for accessibility
- "new-york" style variant
- Neutral base color scheme
- CSS variables enabled

### Path Aliases
- `@/*` maps to `./src/*`
- Components: `@/components`
- Utils: `@/lib/utils`
- UI: `@/components/ui`

### Key Dependencies
- Next.js 14.2 with App Router
- React 19
- TypeScript with strict mode
- Tailwind CSS v4
- Lucide React for icons
- React Hook Form with Zod validation
- Geist font family
- Vercel Analytics integration