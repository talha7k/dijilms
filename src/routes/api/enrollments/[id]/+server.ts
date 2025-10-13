import { json, error } from "@sveltejs/kit";
import { getDb } from "$lib/firebase-admin";
import type { Enrollment } from "$lib/types/enrollment";

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

    const db = getDb();
    const docRef = db.collection("enrollments").doc(params.id);
    const doc = await docRef.get();

    if (!doc.exists) {
      throw error(404, "Enrollment not found");
    }

    const enrollment = { id: doc.id, ...doc.data() } as Enrollment;

    if (enrollment.userId !== locals.user.uid) {
      throw error(403, "Forbidden");
    }
    return json(enrollment);
  } catch (err) {
    console.error("Error fetching enrollment:", err);
    throw error(500, "Failed to fetch enrollment");
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
    const db = getDb();
    const docRef = db.collection("enrollments").doc(params.id);
    const doc = await docRef.get();

    if (!doc.exists) {
      throw error(404, "Enrollment not found");
    }

    const enrollment = { id: doc.id, ...doc.data() } as Enrollment;
    if (enrollment.userId !== locals.user.uid) {
      throw error(403, "Forbidden");
    }

    await docRef.update(data);

    return json({ success: true });
  } catch (err) {
    console.error("Error updating enrollment:", err);
    throw error(500, "Error updating enrollment");
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

    const db = getDb();
    const docRef = db.collection("enrollments").doc(params.id);
    const doc = await docRef.get();

    if (!doc.exists) {
      throw error(404, "Enrollment not found");
    }

    const enrollment = { id: doc.id, ...doc.data() } as Enrollment;
    if (enrollment.userId !== locals.user.uid) {
      throw error(403, "Forbidden");
    }

    await docRef.delete();

    return json({ success: true });
  } catch (err) {
    console.error("Error deleting enrollment:", err);
    throw error(500, "Error deleting enrollment");
  }
}
