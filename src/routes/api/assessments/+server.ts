import { json, error } from "@sveltejs/kit";
import { getDb } from "$lib/firebase-admin";
import { assessmentSchema } from "$lib/schemas/assessment";
import * as v from "valibot";
import type { RequestHandler } from "./$types";
import type { Assessment } from "$lib/types/assessment";

export const GET: RequestHandler = async ({ url, locals }) => {
  try {
    const db = getDb();
    const assessmentsRef = db.collection("assessments");
    const snapshot = await assessmentsRef.get();
    const assessments: Assessment[] = snapshot.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() }) as Assessment,
    );
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

    const db = getDb();
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
