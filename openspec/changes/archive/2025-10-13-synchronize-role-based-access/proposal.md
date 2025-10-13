## Why

The existing portal proposals (add-teacher-portal, add-student-portal, add-parent-portal, add-management-portal) implement role-based dashboards, but the current user model only supports basic roles ('user', 'admin', 'moderator'). Additionally, sign-up does not allow role selection, leading to inconsistencies in role-based access control. This proposal synchronizes role definitions, sign-up processes, and dashboard access to ensure coherent role-based functionality across the platform.

## What Changes

- **Role Expansion**: Extend user roles to include 'teacher', 'student', 'parent', 'management' to align with portal requirements
- **Role-Based Sign-Up**: Implement role selection during sign-up or separate sign-up flows for different user types
- **Dashboard Synchronization**: Ensure dashboards route correctly based on expanded roles
- **Access Control Updates**: Update routing and permissions to use the new role definitions

## Impact

- Affected specs: New capabilities added for role-based-access; modifications to user-enrollment if sign-up is expanded
- Affected code: Updates to `src/lib/types/user.ts`, sign-up components, routing logic, and portal implementations
- Deployment considerations: Potential data migration for existing users to assign appropriate roles
