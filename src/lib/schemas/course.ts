import * as v from "valibot";

export const courseSchema = v.object({
  title: v.pipe(v.string(), v.nonEmpty("Please enter a course title.")),
  description: v.pipe(
    v.string(),
    v.nonEmpty("Please enter a course description."),
  ),
  published: v.boolean(),
});

export const moduleSchema = v.object({
  title: v.pipe(v.string(), v.nonEmpty("Please enter a module title.")),
  description: v.pipe(
    v.string(),
    v.nonEmpty("Please enter a module description."),
  ),
  order: v.pipe(v.number(), v.integer("Order must be an integer.")),
});

export const lessonSchema = v.object({
  title: v.pipe(v.string(), v.nonEmpty("Please enter a lesson title.")),
  content: v.pipe(v.string(), v.nonEmpty("Please enter lesson content.")),
  order: v.pipe(v.number(), v.integer("Order must be an integer.")),
});
