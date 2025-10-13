## Why

To establish dijilms as a fully functional Learning Management System, we need to implement a separate portal for teachers that provides tools for course management, student oversight, and instructional activities.

## What Changes

- **Teacher Portal**: Create a dedicated interface for teachers with course creation tools, student management, and analytics

## Impact

- Affected specs: New capabilities added for teacher-portal
- Affected code: New components in `src/lib/components/teacher-portal/`, stores in `src/lib/stores/`, server loaders in routes, and UI updates across the app
- Deployment considerations: Role-based routing and access controls
