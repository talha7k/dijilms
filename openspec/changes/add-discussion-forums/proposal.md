## Why

To establish dijilms as a fully functional Learning Management System, we need to implement discussion forums that add course-specific discussion boards for student-instructor and peer interactions.

## What Changes

- **Discussion Forums**: Add course-specific discussion boards for student-instructor and peer interactions

**BREAKING**: Database schema changes required for new Firestore collections (discussions, posts)

## Impact

- Affected specs: New capabilities added for discussion-forums
- Affected code: New components in `src/lib/components/discussions/`, stores in `src/lib/stores/`, server loaders in routes, and UI updates across the app
- Deployment considerations: Firestore security rules updates, potential data migration for existing users
