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

export async function GET({
  params,
  locals,
}: {
  params: { id: string };
  locals: any;
}) {
  try {
    if (!locals.user) {
      throw error(401, "Unauthorized");
    }

    const docRef = db.collection("courses").doc(params.id);
    const doc = await docRef.get();

    if (!doc.exists) {
      throw error(404, "Course not found");
    }

    const course = { id: doc.id, ...doc.data() } as Course;

    // Check ownership
    if (course.instructorId !== locals.user.uid) {
      throw error(403, "Forbidden");
    }

    return json(course);
  } catch (err) {
    console.error("Error fetching course:", err);
    if (err instanceof Error && "status" in err) {
      throw err;
    }
    throw error(500, "Error fetching course");
  }
}

export async function PUT({
  params,
  request,
  locals,
}: {
  params: { id: string };
  request: Request;
  locals: any;
}) {
  try {
    if (!locals.user) {
      throw error(401, "Unauthorized");
    }

    const data = await request.json();
    const docRef = db.collection("courses").doc(params.id);
    const doc = await docRef.get();

    if (!doc.exists) {
      throw error(404, "Course not found");
    }

    const course = { id: doc.id, ...doc.data() } as Course;
    if (course.instructorId !== locals.user.uid) {
      throw error(403, "Forbidden");
    }

    await docRef.update({ ...data, updatedAt: new Date() });

    return json({ success: true });
  } catch (err) {
    console.error("Error updating course:", err);
    if (err instanceof Error && "status" in err) {
      throw err;
    }
    throw error(500, "Error updating course");
  }
}

export async function DELETE({
  params,
  locals,
}: {
  params: { id: string };
  locals: any;
}) {
  try {
    if (!locals.user) {
      throw error(401, "Unauthorized");
    }

    const docRef = db.collection("courses").doc(params.id);
    const doc = await docRef.get();

    if (!doc.exists) {
      throw error(404, "Course not found");
    }

    const course = { id: doc.id, ...doc.data() } as Course;
    if (course.instructorId !== locals.user.uid) {
      throw error(403, "Forbidden");
    }

    await docRef.delete();

    return json({ success: true });
  } catch (err) {
    console.error("Error deleting course:", err);
    if (err instanceof Error && "status" in err) {
      throw err;
    }
    throw error(500, "Error deleting course");
  }
}
