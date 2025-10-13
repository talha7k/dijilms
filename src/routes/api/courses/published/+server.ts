import { json, error } from "@sveltejs/kit";
import { getDb } from "$lib/firebase-admin";
import type { Course } from "$lib/types/course";

export async function GET() {
  try {
    const db = getDb();
    const coursesRef = db.collection("courses");
    const snapshot = await coursesRef.where("published", "==", true).get();

    const courses: Course[] = [];
    snapshot.forEach((doc) => {
      courses.push({ id: doc.id, ...doc.data() } as Course);
    });

    return json(courses);
  } catch (err) {
    console.error("Error fetching published courses:", err);
    throw error(500, "Failed to fetch published courses");
  }
}
