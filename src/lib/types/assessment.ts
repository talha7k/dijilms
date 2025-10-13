export interface Assessment {
  id: string;
  courseId: string;
  moduleId?: string;
  lessonId?: string;
  title: string;
  description: string;
  type: "quiz" | "assignment";
  questions?: Question[]; // for quizzes
  instructions?: string; // for assignments
  dueDate?: Date;
  maxScore: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Question {
  id: string;
  type: "multiple-choice" | "true-false" | "short-answer";
  question: string;
  options?: string[]; // for multiple-choice
  correctAnswer: string; // or array for multiple correct
}

export interface Submission {
  id: string;
  assessmentId: string;
  studentId: string;
  answers?: Answer[]; // for quizzes
  submission?: string; // text for assignments
  fileUrl?: string; // for file uploads
  submittedAt: Date;
  score?: number;
  gradedBy?: string;
  gradedAt?: Date;
  feedback?: string;
}

export interface Answer {
  questionId: string;
  answer: string;
}
