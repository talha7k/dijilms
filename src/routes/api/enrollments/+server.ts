import { json, error } from "@sveltejs/kit";
import { getDb } from "$lib/firebase-admin";
import type { Enrollment } from "$lib/types/enrollment";

export async function GET({ locals }: { locals: any }) {
  try {
    if (!locals.user) {
      throw error(401, "Unauthorized");
    }

    const db = getDb();
    const enrollmentsRef = db.collection("enrollments");
    const snapshot = await enrollmentsRef
      .where("userId", "==", locals.user.uid)
      .get();

    const enrollments: Enrollment[] = [];
    snapshot.forEach((doc) => {
      enrollments.push({ id: doc.id, ...doc.data() } as Enrollment);
    });

    return json(enrollments);
  } catch (err) {
    console.error("Error fetching enrollments:", err);
    throw error(500, "Failed to fetch enrollments");
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
    const enrollmentData = {
      ...data,
      userId: locals.user.uid,
      enrolledAt: new Date(),
    };

    const db = getDb();
    const docRef = await db.collection("enrollments").add(enrollmentData);
    const enrollment = { id: docRef.id, ...enrollmentData };

    return json(enrollment, { status: 201 });
  } catch (err) {
    console.error("Error creating enrollment:", err);
    throw error(500, "Error creating enrollment");
  }
}
