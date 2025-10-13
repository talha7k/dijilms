import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

let db: ReturnType<typeof getFirestore> | null = null;

export function getDb() {
  if (!db) {
    const apps = getApps();
    if (apps.length === 0) {
      if (process.env.FIREBASE_PROJECT_ID) {
        initializeApp({
          credential: cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
          }),
        });
      } else {
        // For build/development without Firebase
        initializeApp({
          projectId: "dummy-project",
        });
      }
    }
    db = getFirestore();
  }
  return db;
}
