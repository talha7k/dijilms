import { json, error } from "@sveltejs/kit";
import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, getApps } from "firebase-admin/app";
import type { Content } from "$lib/types/content";

// Initialize Firebase Admin if not already
if (!getApps().length) {
  initializeApp({
    // config
  });
}

const db = getFirestore();

export async function GET({ url, locals }: { url: URL; locals: any }) {
  try {
    if (!locals.user) {
      throw error(401, "Unauthorized");
    }

    const lessonId = url.searchParams.get("lessonId");
    if (!lessonId) {
      throw error(400, "lessonId query parameter required");
    }

    const contentsRef = db.collection("contents");
    const snapshot = await contentsRef
      .where("lessonId", "==", lessonId)
      .orderBy("order")
      .get();
    const contents: Content[] = [];

    snapshot.forEach((doc) => {
      contents.push({ id: doc.id, ...doc.data() } as Content);
    });

    return json(contents);
  } catch (err) {
    console.error("Error fetching contents:", err);
    throw error(500, "Error fetching contents");
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
    const contentData = {
      ...data,
      uploadedAt: new Date(),
    };

    const docRef = await db.collection("contents").add(contentData);
    const content = { id: docRef.id, ...contentData };

    return json(content, { status: 201 });
  } catch (err) {
    console.error("Error creating content:", err);
    throw error(500, "Error creating content");
  }
}
