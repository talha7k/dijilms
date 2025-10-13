## Why

To establish dijilms as a fully functional Learning Management System, we need to implement reporting and analytics that provide dashboards with user engagement metrics, course performance data, and completion rates.

## What Changes

- **Reporting and Analytics**: Provide dashboards with user engagement metrics, course performance data, and completion rates

**BREAKING**: Database schema changes required for new Firestore collections (analytics, reports)

## Impact

- Affected specs: New capabilities added for reporting-analytics
- Affected code: New components in `src/lib/components/analytics/`, stores in `src/lib/stores/`, server loaders in routes, and UI updates across the app
- Deployment considerations: Firestore security rules updates, potential data migration for existing users
