# Project Context

## Purpose
dijilms is a Learning Management System (LMS) built as a SaaS web application. It provides features for user authentication, billing management, notifications, dashboard, and content management to support online education platforms.

## Tech Stack
- Frontend: Svelte 5, SvelteKit, TypeScript
- Styling: Tailwind CSS with tailwind-variants
- Build: Vite, Bun
- Backend: Firebase (Auth, Firestore, Hosting)
- Formatting: Prettier
- Linting: svelte-check
- UI Components: bits-ui, Lucide icons

## Project Conventions

### Code Style
- Use TypeScript with strict mode enabled
- Format code with Prettier (run `npm run format`)
- File naming: kebab-case for components and files (e.g., `user-profile.svelte`)
- Variable naming: camelCase for variables and functions
- Component props: Use Svelte 5 runes syntax with $props()
- Styling: Use tailwind-variants for component variants, cn utility for class merging
- Imports: Group by type (Svelte, external libs, local utils)

### Architecture Patterns
- **Server-Side First**: Use SvelteKit's `+page.server.ts` and `+layout.server.ts` for secure, SEO-friendly data fetching with Firebase Admin SDK. This ensures critical data is loaded server-side, bypassing client security rules.
- **Client-Side Dynamic Loading**: Use client-side Firebase SDK for user-specific or non-critical data (e.g., questions, progress) with custom Svelte stores for caching and efficient re-fetching.
- **Component Organization**: Feature-based folders (e.g., `course/`) for domain-specific components, `ui/` for reusable elements, ensuring modularity and scalability.
- **State Management**: Svelte stores for client-side state, with cacheable stores to prevent redundant API calls and improve performance.
- **Type Safety**: Centralized TypeScript types in `types/` for shared interfaces (e.g., Course, Question).
- **Security Separation**: Server-side code (`lib/server/`) uses Admin SDK with full DB access; client-side uses standard SDK with security rules.

### Folder Structure
```
src/
├── lib/
│   ├── components/
│   │   ├── course/         # Course-specific components (CourseCard, QuestionViewer)
│   │   ├── ui/             # Generic UI components (Button, Card, etc.)
│   │   ├── shared/         # Shared components (breadcrumbs, toggles)
│   │   ├── app/            # App-specific components (account, billing)
│   │   ├── auth/           # Authentication components
│   │   └── marketing/      # Marketing components
│   ├── server/             # SERVER-SIDE ONLY code
│   │   ├── firebase-admin.ts # Firebase Admin SDK initialization
│   │   └── db.ts           # Server-side database helpers
│   ├── stores/             # Svelte stores for client-side state
│   │   ├── cacheableStore.ts # Reusable store logic for caching
│   │   └── courseStores.ts # Stores for course content, questions
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts        # e.g., export type Course = { ... }
│   ├── hooks/              # Svelte hooks and utilities
│   ├── firebase.ts         # CLIENT-SIDE Firebase SDK initialization
│   └── utils.ts            # Utility functions
├── routes/
│   ├── (app)/
│   │   ├── courses/
│   │   │   ├── [courseId]/
│   │   │   │   ├── +page.server.ts  # Fetches core course data
│   │   │   │   └── +page.svelte     # Renders course, loads dynamic content
│   │   │   └── +page.server.ts      # Fetches course list
│   │   └── ...
│   ├── (auth)/              # Auth routes
│   ├── (marketing)/         # Public routes
│   └── api/                 # API routes
├── app.css                 # Global styles
├── app.d.ts                # TypeScript declarations
└── config.ts               # App configuration
```

### Scalability Considerations
- **Server-Client Split**: Server handles core data for fast initial loads and SEO; client fetches dynamic content asynchronously, reducing load times and improving UX.
- **Caching with Stores**: Custom cacheable stores prevent redundant Firestore reads, lowering costs and speeding up navigation.
- **Modular Components**: Feature-based organization allows easy addition of new LMS features (e.g., quizzes, forums) without monolithic growth.
- **Firebase Scalability**: Serverless backend auto-scales; Admin SDK for trusted operations, client SDK for governed access.
- **TypeScript and Strict Mode**: Ensures maintainability and catches errors early as the codebase expands.
- **Route Groups**: Enable code splitting, lazy loading, and clear separation of concerns for authenticated vs. public areas.

### Testing Strategy
No automated testing framework configured. Use manual testing and svelte-check for type validation.

### Git Workflow
- Main branch for production
- Feature branches for development
- Commit messages: Descriptive, imperative mood (e.g., "Add user authentication")

## Domain Context
Educational platform for online learning. Key entities: Users (students/instructors), Courses, Lessons, Enrollments, Payments.

## Important Constraints
- Serverless architecture using Firebase
- Web-first application
- Focus on SaaS subscription model

## External Dependencies
- Firebase: Authentication, Firestore database, Hosting
- Payment processing: Integrated via billing components (likely Stripe or similar)
