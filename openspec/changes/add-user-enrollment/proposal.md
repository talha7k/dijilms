## Why

To establish dijilms as a fully functional Learning Management System, we need to implement user enrollment that allows users to browse, enroll in, and manage their course registrations.

## What Changes

- **User Enrollment**: Implement a system for users to browse, enroll in, and manage their course registrations

**BREAKING**: Database schema changes required for new Firestore collections (enrollments)

## Impact

- Affected specs: New capabilities added for user-enrollment
- Affected code: New components in `src/lib/components/enrollment/`, stores in `src/lib/stores/`, server loaders in routes, and UI updates across the app
- Deployment considerations: Firestore security rules updates, potential data migration for existing users
