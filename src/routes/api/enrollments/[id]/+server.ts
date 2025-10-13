import { json, error } from "@sveltejs/kit";
import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, getApps } from "firebase-admin/app";
import type { Enrollment } from "$lib/types/enrollment";

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
    if (err instanceof Error && "status" in err) {
      throw err;
    }
    throw error(500, "Error fetching enrollment");
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
    if (err instanceof Error && "status" in err) {
      throw err;
    }
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
    if (err instanceof Error && "status" in err) {
      throw err;
    }
    throw error(500, "Error deleting enrollment");
  }
}
