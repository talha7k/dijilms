import { json, error } from "@sveltejs/kit";
import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, getApps } from "firebase-admin/app";
import type { Course } from "$lib/types/course";

// Initialize Firebase Admin if not already
if (!getApps().length) {
  // Assume env vars are set
  initializeApp({
    // config
  });
}

const db = getFirestore();

export async function GET({ locals }: { locals: any }) {
  try {
    // Check auth
    if (!locals.user) {
      throw error(401, "Unauthorized");
    }

    const coursesRef = db.collection("courses");
    const snapshot = await coursesRef
      .where("instructorId", "==", locals.user.uid)
      .get();
    const courses: Course[] = [];

    snapshot.forEach((doc) => {
      courses.push({ id: doc.id, ...doc.data() } as Course);
    });

    return json(courses);
  } catch (err) {
    console.error("Error fetching courses:", err);
    throw error(500, "Error fetching courses");
  }
}

export async function POST({
  request,
  locals,
}: {
  request: Request;
  locals: any;
}) {
  try {
    if (!locals.user) {
      throw error(401, "Unauthorized");
    }

    const data = await request.json();
    const courseData = {
      ...data,
      instructorId: locals.user.uid,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const docRef = await db.collection("courses").add(courseData);
    const course = { id: docRef.id, ...courseData };

    return json(course, { status: 201 });
  } catch (err) {
    console.error("Error creating course:", err);
    throw error(500, "Error creating course");
  }
}
