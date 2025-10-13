import { writable } from "svelte/store";
import type { Course } from "$lib/types/course";

export const courses = writable<Course[]>([]);
export const currentCourse = writable<Course | null>(null);
export const loadingCourses = writable(false);
export const courseError = writable<string | null>(null);

// Actions
export const fetchCourses = async () => {
  loadingCourses.set(true);
  courseError.set(null);
  try {
    const response = await fetch("/api/courses");
    if (response.ok) {
      const data: Course[] = await response.json();
      courses.set(data);
    } else {
      courseError.set("Failed to fetch courses");
    }
  } catch (error) {
    courseError.set("Error fetching courses");
  } finally {
    loadingCourses.set(false);
  }
};

export const createCourse = async (courseData: Partial<Course>) => {
  try {
    const response = await fetch("/api/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(courseData),
    });
    if (response.ok) {
      const newCourse: Course = await response.json();
      courses.update((c) => [...c, newCourse]);
      return newCourse;
    }
  } catch (error) {
    courseError.set("Error creating course");
  }
};

export const updateCourse = async (id: string, courseData: Partial<Course>) => {
  try {
    const response = await fetch(`/api/courses/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(courseData),
    });
    if (response.ok) {
      courses.update((c) =>
        c.map((course) =>
          course.id === id ? { ...course, ...courseData } : course,
        ),
      );
    }
  } catch (error) {
    courseError.set("Error updating course");
  }
};

export const deleteCourse = async (id: string) => {
  try {
    const response = await fetch(`/api/courses/${id}`, { method: "DELETE" });
    if (response.ok) {
      courses.update((c) => c.filter((course) => course.id !== id));
    }
  } catch (error) {
    courseError.set("Error deleting course");
  }
};
