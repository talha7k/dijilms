import { json, error } from "@sveltejs/kit";
import { getDb } from "$lib/firebase-admin";
import type { Course } from "$lib/types/course";

export async function GET({ locals }: { locals: any }) {
  try {
    // Check auth
    if (!locals.user) {
      throw error(401, "Unauthorized");
    }

    const db = getDb();
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
    throw error(500, "Failed to fetch courses");
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

    const db = getDb();
    const docRef = await db.collection("courses").add(courseData);
    const course = { id: docRef.id, ...courseData };

    return json(course, { status: 201 });
  } catch (err) {
    console.error("Error creating course:", err);
    throw error(500, "Error creating course");
  }
}
