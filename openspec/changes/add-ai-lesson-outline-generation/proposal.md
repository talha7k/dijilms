## Why

To establish dijilms as a fully functional Learning Management System, we need to implement AI-powered lesson creation tools that enable teachers to generate outlines, plans, and content with AI assistance.

## What Changes

- **AI Lesson Outline Generation**: Enable teachers to create lesson outlines with AI assistance
- **AI Lesson Plan Generation**: Enable teachers to generate detailed lesson plans using AI
- **Lesson Content Generation**: Allow teachers to generate lesson notes and content for students on specific topics using TinyMCE

**BREAKING**: Database schema changes required for new Firestore collections (ai-outlines, ai-plans, generated-content)

## Impact

- Affected specs: New capabilities added for ai-lesson-outline-generation, ai-lesson-plan-generation, lesson-content-generation
- Affected code: New components in `src/lib/components/ai-outline/`, `src/lib/components/ai-plan/`, `src/lib/components/content-gen/`, stores in `src/lib/stores/`, server loaders in routes, and UI updates across the app
- Deployment considerations: Firestore security rules updates, AI service integration, TinyMCE integration, potential data migration for existing users
