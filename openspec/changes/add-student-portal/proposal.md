## Why

To establish dijilms as a fully functional Learning Management System, we need to implement a separate portal for learners/students that provides a tailored dashboard for course access, progress tracking, and learning activities.

## What Changes

- **Student Portal**: Create a dedicated interface for students with personalized course views, progress indicators, and learning tools

## Impact

- Affected specs: New capabilities added for student-portal
- Affected code: New components in `src/lib/components/student-portal/`, stores in `src/lib/stores/`, server loaders in routes, and UI updates across the app
- Deployment considerations: Role-based routing and access controls
