## Why

To establish dijilms as a fully functional Learning Management System, we need to implement progress tracking that tracks and displays user progress through courses, modules, and individual lessons.

## What Changes

- **Progress Tracking**: Track and display user progress through courses, modules, and individual lessons

**BREAKING**: Database schema changes required for new Firestore collections (progress)

## Impact

- Affected specs: New capabilities added for progress-tracking
- Affected code: New components in `src/lib/components/progress/`, stores in `src/lib/stores/`, server loaders in routes, and UI updates across the app
- Deployment considerations: Firestore security rules updates, potential data migration for existing users
