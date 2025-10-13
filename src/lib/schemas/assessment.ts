import * as v from "valibot";

export const questionSchema = v.object({
  type: v.picklist(["multiple-choice", "true-false", "short-answer"]),
  question: v.pipe(v.string(), v.nonEmpty("Please enter a question.")),
  options: v.optional(v.array(v.string())),
  correctAnswer: v.pipe(
    v.string(),
    v.nonEmpty("Please provide the correct answer."),
  ),
});

export const assessmentSchema = v.object({
  title: v.pipe(v.string(), v.nonEmpty("Please enter an assessment title.")),
  description: v.pipe(
    v.string(),
    v.nonEmpty("Please enter an assessment description."),
  ),
  type: v.picklist(["quiz", "assignment"]),
  questions: v.optional(v.array(questionSchema)),
  instructions: v.optional(v.string()),
  dueDate: v.optional(v.date()),
  maxScore: v.pipe(v.number(), v.minValue(0, "Max score must be positive.")),
});

export const answerSchema = v.object({
  questionId: v.pipe(v.string(), v.nonEmpty("Question ID is required.")),
  answer: v.string(),
});

export const submissionSchema = v.object({
  answers: v.optional(v.array(answerSchema)),
  submission: v.optional(v.string()),
  fileUrl: v.optional(v.string()),
});
