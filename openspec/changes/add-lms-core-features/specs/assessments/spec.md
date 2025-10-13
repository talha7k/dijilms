## ADDED Requirements

### Requirement: Quiz Creation
Teachers SHALL create quizzes with various question types.

#### Scenario: Building a quiz
- **WHEN** teacher adds questions and settings
- **THEN** quiz is saved and available to enrolled students

### Requirement: Quiz Taking
Students SHALL take quizzes with time limits and navigation.

#### Scenario: Starting a quiz
- **WHEN** student begins a quiz
- **THEN** questions are presented sequentially

### Requirement: Automatic Grading
System SHALL grade multiple choice and other auto-gradable questions.

#### Scenario: Instant feedback
- **WHEN** student submits answers
- **THEN** scores are calculated and displayed

### Requirement: Group Formation
Teachers SHALL create groups of 2-5 students from enrolled users.

#### Scenario: Automatic grouping
- **WHEN** teacher selects group size and enables grouping
- **THEN** students are randomly assigned to groups

#### Scenario: Manual adjustment
- **WHEN** teacher drags students between groups
- **THEN** group assignments are updated in real-time

### Requirement: Group Activities
Quizzes SHALL support collaborative group work.

#### Scenario: Group quiz mode
- **WHEN** quiz is set to group mode
- **THEN** groups work together on questions and submit joint answers

### Requirement: Group Results
System SHALL track and display group performance.

#### Scenario: Viewing group scores
- **WHEN** teacher reviews quiz results
- **THEN** individual and group scores are shown