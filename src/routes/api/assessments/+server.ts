import { json, error } from "@sveltejs/kit";
import { getFirestore } from "firebase-admin/firestore";
import { assessmentSchema } from "$lib/schemas/assessment";
import * as v from "valibot";
import type { RequestHandler } from "./$types";

const db = getFirestore();

export const GET: RequestHandler = async ({ url, locals }) => {
  try {
    const courseId = url.searchParams.get("courseId");
    let query = db.collection("assessments");

    if (courseId) {
      query = query.where("courseId", "==", courseId);
    }

    const snapshot = await query.get();
    const assessments = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate(),
      updatedAt: doc.data().updatedAt?.toDate(),
      dueDate: doc.data().dueDate?.toDate(),
    }));

    return json(assessments);
  } catch (err) {
    console.error("Error fetching assessments:", err);
    throw error(500, "Failed to fetch assessments");
  }
};

export const POST: RequestHandler = async ({ request, locals }) => {
  try {
    const data = await request.json();
    const validatedData = v.parse(assessmentSchema, data);

    const assessmentRef = db.collection("assessments").doc();
    const assessment = {
      ...validatedData,
      id: assessmentRef.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await assessmentRef.set(assessment);
    return json(assessment, { status: 201 });
  } catch (err) {
    if (err instanceof v.ValiError) {
      throw error(400, {
        message: "Invalid assessment data",
        details: err.issues,
      });
    }
    console.error("Error creating assessment:", err);
    throw error(500, "Failed to create assessment");
  }
};
