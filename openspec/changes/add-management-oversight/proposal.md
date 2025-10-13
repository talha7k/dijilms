## Why

To establish dijilms as a fully functional Learning Management System, we need to implement management oversight that enables educational leadership to review teacher-created courses and content, provide feedback for improvements, and approve/reject changes.

## What Changes

- **Management Content Oversight**: Enable educational leadership to review teacher-created courses and content, provide feedback for improvements, and approve/reject changes

**BREAKING**: Database schema changes required for new Firestore collections (reviews, approvals)

## Impact

- Affected specs: New capabilities added for management-oversight
- Affected code: New components in `src/lib/components/oversight/`, stores in `src/lib/stores/`, server loaders in routes, and UI updates across the app
- Deployment considerations: Firestore security rules updates, potential data migration for existing users
