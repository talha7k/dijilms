import { json, error } from "@sveltejs/kit";
import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, getApps } from "firebase-admin/app";
import type { Course } from "$lib/types/course";

// Initialize Firebase Admin if not already
if (!getApps().length) {
  initializeApp({
    // config
  });
}

const db = getFirestore();

export async function GET() {
  try {
    const coursesRef = db.collection("courses");
    const snapshot = await coursesRef.where("published", "==", true).get();
    const courses: Course[] = [];

    snapshot.forEach((doc) => {
      courses.push({ id: doc.id, ...doc.data() } as Course);
    });

    return json(courses);
  } catch (err) {
    console.error("Error fetching published courses:", err);
    throw error(500, "Error fetching published courses");
  }
}
