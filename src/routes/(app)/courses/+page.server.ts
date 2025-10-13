import type { PageServerLoad } from "./$types";
import type { Course } from "$lib/types/course";

export const load: PageServerLoad = async ({ fetch, locals }) => {
  try {
    const response = await fetch("/api/courses");
    if (response.ok) {
      const courses: Course[] = await response.json();
      return { courses };
    }
  } catch (error) {
    console.error("Error loading courses:", error);
  }
  return { courses: [] };
};
