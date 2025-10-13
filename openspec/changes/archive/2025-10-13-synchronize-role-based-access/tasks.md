## Tasks

1. **Update User Type Definitions**
   - [x] 1.1 Expand the role union type in `src/lib/types/user.ts` to include 'teacher', 'student', 'parent', 'management'

2. **Modify Sign-Up Process**
   - [x] 2.1 Add optional role field to `src/lib/schemas/sign-up.ts`

   - [x] 2.2 Update `src/lib/components/auth/sign-up-form.svelte` to include a role selection dropdown

   - [x] 2.3 Modify the sign-up logic to save the selected role to the user profile

3. **Implement Role-Based Routing**
   - [x] 3.1 Update routing logic in portal components to check for appropriate roles

   - [x] 3.2 Add access guards to prevent unauthorized access to role-specific dashboards

4. **Testing and Validation**
   - [x] 4.1 Test sign-up flow with different role selections

   - [x] 4.2 Test dashboard routing and access for each role type

   - [x] 4.3 Run `npm run lint` and `npm run check` to ensure code quality

   - [x] 4.4 Perform manual testing of role-based features across different user scenarios

**Dependencies:**

- Task 1 must be completed before tasks 2 and 3.

- Tasks 2 and 3 can be worked on in parallel after task 1.

- Task 4 depends on completion of tasks 1-3.

This structure ensures the role system is foundational and enables the portal implementations in separate proposals.
