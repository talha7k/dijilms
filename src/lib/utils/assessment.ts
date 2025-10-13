import type { Question, Answer } from "$lib/types/assessment";

export function scoreQuiz(questions: Question[], answers: Answer[]): number {
  let score = 0;
  for (const question of questions) {
    const answer = answers.find((a) => a.questionId === question.id);
    if (
      answer &&
      answer.answer.toLowerCase().trim() ===
        question.correctAnswer.toLowerCase().trim()
    ) {
      score++;
    }
  }
  return score;
}

export function calculatePercentage(score: number, total: number): number {
  return total > 0 ? (score / total) * 100 : 0;
}
