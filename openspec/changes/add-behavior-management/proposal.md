## Why

To establish dijilms as a fully functional Learning Management System, we need to implement behavior management that tracks positive and negative behaviors, issues rewards/punishments, and maintains behavior logs.

## What Changes

- **Behavior Management**: Track positive and negative behaviors, issue rewards/punishments, and maintain behavior logs

**BREAKING**: Database schema changes required for new Firestore collections (behaviors, rewards)

## Impact

- Affected specs: New capabilities added for behavior-management
- Affected code: New components in `src/lib/components/behavior/`, stores in `src/lib/stores/`, server loaders in routes, and UI updates across the app
- Deployment considerations: Firestore security rules updates, potential data migration for existing users
