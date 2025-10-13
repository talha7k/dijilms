## Why

To establish dijilms as a fully functional Learning Management System, we need to implement notifications that provide alerts for new content, assignment deadlines, and course updates.

## What Changes

- **Notifications**: Implement alerts for new content, assignment deadlines, and course updates

**BREAKING**: Database schema changes required for new Firestore collections (notifications)

## Impact

- Affected specs: New capabilities added for notifications
- Affected code: New components in `src/lib/components/notifications/`, stores in `src/lib/stores/`, server loaders in routes, and UI updates across the app
- Deployment considerations: Firestore security rules updates, potential data migration for existing users
