## Why

To establish dijilms as a fully functional Learning Management System, we need to implement a separate portal for management that provides oversight tools for leadership roles like principals and HODs.

## What Changes

- **Management Portal**: Create a dedicated interface for management with system-wide analytics, course approvals, and administrative controls

## Impact

- Affected specs: New capabilities added for management-portal
- Affected code: New components in `src/lib/components/management-portal/`, stores in `src/lib/stores/`, server loaders in routes, and UI updates across the app
- Deployment considerations: Role-based routing and access controls
