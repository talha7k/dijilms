## Why

To establish dijilms as a fully functional Learning Management System, we need to implement advanced question types that support multiple question formats including MCQ, Fill in the Blank, Short Answer, Matching, and Text Response.

## What Changes

- **Advanced Question Types**: Support multiple question formats including MCQ, Fill in the Blank, Short Answer, Matching, and Text Response

**BREAKING**: Database schema changes required for new Firestore collections (questions)

## Impact

- Affected specs: New capabilities added for question-types
- Affected code: New components in `src/lib/components/questions/`, stores in `src/lib/stores/`, server loaders in routes, and UI updates across the app
- Deployment considerations: Firestore security rules updates, potential data migration for existing users
