## Why

To establish dijilms as a fully functional Learning Management System, we need to implement course management that enables instructors to create, edit, and publish courses with structured modules and lessons.

## What Changes

- **Course Management**: Enable instructors to create, edit, and publish courses with structured modules and lessons

**BREAKING**: Database schema changes required for new Firestore collections (courses, modules, lessons)

## Impact

- Affected specs: New capabilities added for course-management
- Affected code: New components in `src/lib/components/course/`, stores in `src/lib/stores/`, server loaders in routes, and UI updates across the app
- Deployment considerations: Firestore security rules updates, potential data migration for existing users
