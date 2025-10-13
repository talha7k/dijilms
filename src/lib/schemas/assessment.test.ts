import { describe, it, expect } from "vitest";
import * as v from "valibot";
import {
  assessmentSchema,
  questionSchema,
  answerSchema,
  submissionSchema,
} from "./assessment";

describe("assessmentSchema", () => {
  it("should validate a valid assessment", () => {
    const validAssessment = {
      title: "Test Quiz",
      description: "A test quiz",
      type: "quiz",
      questions: [
        {
          type: "multiple-choice",
          question: "What is 2+2?",
          options: ["3", "4", "5"],
          correctAnswer: "4",
        },
      ],
      maxScore: 100,
    };

    expect(() => v.parse(assessmentSchema, validAssessment)).not.toThrow();
  });

  it("should reject invalid assessment", () => {
    const invalidAssessment = {
      title: "",
      description: "A test quiz",
      type: "quiz",
      maxScore: 100,
    };

    expect(() => v.parse(assessmentSchema, invalidAssessment)).toThrow();
  });
});

describe("questionSchema", () => {
  it("should validate a valid question", () => {
    const validQuestion = {
      type: "multiple-choice",
      question: "What is 2+2?",
      options: ["3", "4", "5"],
      correctAnswer: "4",
    };

    expect(() => v.parse(questionSchema, validQuestion)).not.toThrow();
  });

  it("should reject invalid question", () => {
    const invalidQuestion = {
      type: "multiple-choice",
      question: "",
      options: ["3", "4", "5"],
      correctAnswer: "4",
    };

    expect(() => v.parse(questionSchema, invalidQuestion)).toThrow();
  });
});

describe("answerSchema", () => {
  it("should validate a valid answer", () => {
    const validAnswer = {
      questionId: "q1",
      answer: "4",
    };

    expect(() => v.parse(answerSchema, validAnswer)).not.toThrow();
  });
});

describe("submissionSchema", () => {
  it("should validate a valid submission", () => {
    const validSubmission = {
      answers: [
        {
          questionId: "q1",
          answer: "4",
        },
      ],
      submission: "My assignment text",
    };

    expect(() => v.parse(submissionSchema, validSubmission)).not.toThrow();
  });
});
