import type { Timestamp } from "@firebase/firestore";

export type QuestionType =
  | "mcq"
  | "fillBlank"
  | "shortAnswer"
  | "matching"
  | "textResponse";

export interface BaseQuestion {
  id: string;
  type: QuestionType;
  question: string;
  points: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface MCQQuestion extends BaseQuestion {
  type: "mcq";
  options: string[];
  correctAnswer: number; // index of correct option
}

export interface FillBlankQuestion extends BaseQuestion {
  type: "fillBlank";
  blanks: string[]; // the answers for each blank
  displayText: string; // text with ___ for blanks
}

export interface ShortAnswerQuestion extends BaseQuestion {
  type: "shortAnswer";
  correctAnswer: string;
  caseSensitive: boolean;
}

export interface MatchingQuestion extends BaseQuestion {
  type: "matching";
  leftItems: string[];
  rightItems: string[];
  correctPairs: number[][]; // pairs of indices
}

export interface TextResponseQuestion extends BaseQuestion {
  type: "textResponse";
  // No correct answer, manual grading
}

export type Question =
  | MCQQuestion
  | FillBlankQuestion
  | ShortAnswerQuestion
  | MatchingQuestion
  | TextResponseQuestion;
