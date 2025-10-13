import * as v from "valibot";

export const contentSchema = v.object({
  title: v.pipe(v.string(), v.nonEmpty("Please enter a content title.")),
  type: v.picklist(["video", "pdf", "image", "text", "interactive"]),
  url: v.pipe(v.string(), v.nonEmpty("Please provide a content URL.")),
  lessonId: v.pipe(v.string(), v.nonEmpty("Lesson ID is required.")),
  courseId: v.pipe(v.string(), v.nonEmpty("Course ID is required.")),
  order: v.pipe(v.number(), v.integer("Order must be an integer.")),
});
