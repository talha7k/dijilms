## Why

To establish dijilms as a fully functional Learning Management System, we need to implement assessments that create quizzes, assignments, and graded activities with automatic scoring.

## What Changes

- **Assessments**: Create quizzes, assignments, and graded activities with automatic scoring

**BREAKING**: Database schema changes required for new Firestore collections (assessments, submissions)

## Impact

- Affected specs: New capabilities added for assessments
- Affected code: New components in `src/lib/components/assessments/`, stores in `src/lib/stores/`, server loaders in routes, and UI updates across the app
- Deployment considerations: Firestore security rules updates, potential data migration for existing users
