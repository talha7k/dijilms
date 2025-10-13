import { describe, it, expect } from "vitest";
import * as v from "valibot";
import { courseSchema, moduleSchema, lessonSchema } from "./course";

describe("Course Schemas", () => {
  it("validates course data", () => {
    const validCourse = {
      title: "Test Course",
      description: "A test course",
      published: true,
    };

    const result = v.safeParse(courseSchema, validCourse);
    expect(result.success).toBe(true);
  });

  it("rejects invalid course data", () => {
    const invalidCourse = {
      title: "",
      description: "A test course",
      published: true,
    };

    const result = v.safeParse(courseSchema, invalidCourse);
    expect(result.success).toBe(false);
  });

  it("validates module data", () => {
    const validModule = {
      title: "Test Module",
      description: "A test module",
      order: 1,
    };

    const result = v.safeParse(moduleSchema, validModule);
    expect(result.success).toBe(true);
  });

  it("validates lesson data", () => {
    const validLesson = {
      title: "Test Lesson",
      content: "Lesson content",
      order: 1,
    };

    const result = v.safeParse(lessonSchema, validLesson);
    expect(result.success).toBe(true);
  });
});
