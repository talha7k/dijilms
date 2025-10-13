import type { PageServerLoad } from "./$types";
import type { Course } from "$lib/types/course";

export const load: PageServerLoad = async ({ params, fetch }) => {
  try {
    const response = await fetch(`/api/courses/${params.id}`);
    if (response.ok) {
      const course: Course = await response.json();
      return { course };
    }
  } catch (error) {
    console.error("Error loading course:", error);
  }
  throw new Error("Course not found");
};
