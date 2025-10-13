import * as v from "valibot";

export const progressSchema = v.object({
  enrollmentId: v.pipe(v.string(), v.nonEmpty("Enrollment ID is required.")),
  lessonId: v.pipe(v.string(), v.nonEmpty("Lesson ID is required.")),
  completed: v.boolean(),
  timeSpent: v.pipe(
    v.number(),
    v.minValue(0, "Time spent must be non-negative."),
  ),
});
