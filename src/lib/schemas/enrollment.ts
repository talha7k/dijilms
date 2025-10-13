import * as v from "valibot";

export const enrollmentSchema = v.object({
  courseId: v.pipe(v.string(), v.nonEmpty("Course ID is required.")),
  status: v.picklist(["enrolled", "completed", "dropped"]),
  progress: v.pipe(
    v.number(),
    v.minValue(0, "Progress must be at least 0."),
    v.maxValue(100, "Progress cannot exceed 100."),
  ),
});
