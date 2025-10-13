## ADDED Requirements

### Requirement: Course Creation
Instructors SHALL be able to create new courses with title, description, category, and basic metadata.

#### Scenario: Successful course creation
- **WHEN** an authenticated instructor submits a course creation form with valid data
- **THEN** the course is saved to the database and appears in the course catalog

#### Scenario: Course creation validation
- **WHEN** required fields are missing
- **THEN** appropriate error messages are displayed

### Requirement: Course Editing
Instructors SHALL be able to edit existing courses they own.

#### Scenario: Course update
- **WHEN** instructor modifies course details and saves
- **THEN** changes are persisted and reflected in the UI

### Requirement: Module Management
Courses SHALL be organized into modules containing lessons.

#### Scenario: Adding modules
- **WHEN** instructor adds a module to a course
- **THEN** the module is saved with order and title

### Requirement: Lesson Management
Modules SHALL contain individual lessons with content.

#### Scenario: Creating lessons
- **WHEN** instructor creates a lesson within a module
- **THEN** lesson is added with content type and order