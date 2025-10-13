dijilms - Project Guidelines
dijilms is a modern, scalable Learning Management System (LMS) built as a SaaS web application. It provides a complete platform for online education, featuring user authentication, billing management, course content delivery, and progress tracking.

This document outlines the project's architecture, conventions, and best practices for developers.

Domain & Constraints
Domain Context: An educational platform for online learning. Key entities include Users (students/instructors), Courses, Lessons, Enrollments, and Payments.

Important Constraints: The application must follow a serverless architecture using Firebase, be web-first, and focus on a SaaS subscription model.

External Dependencies:

Firebase: Authentication, Firestore database, Hosting.

Payment Processing: Integrated via billing components (e.g., Stripe).

Tech Stack
Framework: Svelte 5 & SvelteKit

Language: TypeScript

Backend & DB: Firebase (Auth, Firestore, Hosting)

Styling: Tailwind CSS with tailwind-variants

UI Components: Bits UI (headless) & Lucide Svelte (icons).

Runtime & Build: Bun & Vite

Formatting & Linting: Prettier, ESLint, and svelte-check.

Project Conventions
Code Style
TypeScript First: Strict mode is enabled. All code should be strongly typed.

Svelte 5 Runes: We exclusively use the Svelte 5 Runes syntax for reactivity and component props.

$props() for declaring component properties.

$state() for managing local component state.

$derived() for computed values from existing state.

File Naming: Use kebab-case for all files and directories (e.g., user-profile.svelte, auth-flow/).

Variable Naming: Use camelCase for variables and functions.

Styling:

Use tailwind-variants to create type-safe, reusable component variants.

Use the cn() utility function from bits-ui for conditionally merging Tailwind CSS classes.

Imports: Group imports in the following order:

Svelte / SvelteKit imports

External library imports

Local application imports ($lib/...)

Relative imports (./, ../)

Architecture
Our architecture follows a "server-first" data loading strategy, prioritizing security, SEO, and performance.

Server-Side Core Data Loading:

We use SvelteKit's +page.server.ts and +layout.server.ts files to fetch essential data.

This server-side code uses the Firebase Admin SDK, which operates in a trusted environment with full database access, bypassing restrictive client-side security rules.

This pattern is used for loading critical, non-user-specific data required for the initial page render (e.g., course details, pricing plans).

Client-Side Dynamic Data:

For dynamic, user-specific, or non-essential data (e.g., quiz questions, user progress, real-time updates), we use the client-side Firebase SDK.

This approach respects Firestore Security Rules, ensuring users can only access data they are permitted to see.

Client-side data is managed using custom Svelte stores to handle state, caching, and prevent redundant API calls.

Security Separation:

src/lib/server/: Contains all backend code that uses the Firebase Admin SDK. This code is never exposed to the client.

src/lib/firebase.ts: Initializes the client-side Firebase app. This is safe to expose and is used for all frontend interactions with Firebase services.

State Management:

Server-Side: Data is passed from *.server.ts files to pages via the data prop.

Client-Side: We use Svelte stores (src/lib/stores/) for managing client-side state. Our custom cacheableStore utility provides a caching layer to minimize Firestore reads and improve perceived performance during navigation.

Scalability Considerations
Server-Client Split: Server handles core data for fast initial loads and SEO; client fetches dynamic content asynchronously, reducing load times and improving UX.

Caching with Stores: Custom cacheable stores prevent redundant Firestore reads, lowering costs and speeding up navigation.

Modular Components: Feature-based organization allows easy addition of new LMS features (e.g., quizzes, forums) without monolithic growth.

Firebase Scalability: Serverless backend auto-scales; Admin SDK for trusted operations, client SDK for governed access.

TypeScript and Strict Mode: Ensures maintainability and catches errors early as the codebase expands.

Route Groups: Enable code splitting, lazy loading, and clear separation of concerns for authenticated vs. public areas.

Folder Structure
The project is organized by feature and domain to ensure modularity and scalability.

src/
├── lib/
│   ├── components/
│   │   ├── course/         # Course-specific components (CourseCard)
│   │   ├── ui/             # Generic, reusable UI components (Button, Card)
│   │   ├── shared/         # Shared components (Breadcrumbs, ThemeToggle)
│   │   └── ...             # Other feature-based component folders
│   ├── server/             # SERVER-SIDE ONLY code
│   │   ├── firebase-admin.ts # Firebase Admin SDK initialization
│   │   └── db.ts           # Server-side database helpers
│   ├── stores/             # Svelte stores for client-side state
│   │   ├── cacheableStore.ts # Generic store with caching logic
│   │   └── courseStores.ts # Example: stores for course questions
│   ├── types/              # Global TypeScript type definitions
│   │   └── index.ts        # e.g., export type Course = { ... }
│   ├── firebase.ts         # CLIENT-SIDE Firebase SDK initialization
│   └── utils.ts            # Utility functions (e.g., cn)
├── routes/
│   ├── (app)/              # Authenticated user routes (dashboard, courses)
│   │   └── courses/
│   │       └── [courseId]/
│   │           ├── +page.server.ts # Fetches core course data (server)
│   │           └── +page.svelte    # Renders course page, loads dynamic data (client)
│   ├── (auth)/             # Auth routes (login, register, forgot-password)
│   ├── (marketing)/        # Public marketing routes (homepage, pricing)
│   └── api/                # API endpoints
├── app.css                 # Global CSS styles (Tailwind base layers)
├── app.d.ts                # Global TypeScript declarations
└── hooks.server.ts         # Server-side hooks (e.g., auth handling)

Testing Strategy
No automated testing framework is configured. Use manual testing and svelte-check for type validation.
