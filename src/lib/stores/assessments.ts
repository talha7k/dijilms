import { writable } from "svelte/store";
import type { Assessment, Submission } from "$lib/types/assessment";

export const assessments = writable<Assessment[]>([]);
export const currentAssessment = writable<Assessment | null>(null);
export const submissions = writable<Submission[]>([]);
export const loadingAssessments = writable(false);
export const assessmentError = writable<string | null>(null);

// Actions
export const fetchAssessments = async (courseId?: string) => {
  loadingAssessments.set(true);
  assessmentError.set(null);
  try {
    const url = courseId
      ? `/api/assessments?courseId=${courseId}`
      : "/api/assessments";
    const response = await fetch(url);
    if (response.ok) {
      const data: Assessment[] = await response.json();
      assessments.set(data);
    } else {
      assessmentError.set("Failed to fetch assessments");
    }
  } catch (error) {
    assessmentError.set("Error fetching assessments");
  } finally {
    loadingAssessments.set(false);
  }
};

export const createAssessment = async (assessmentData: Partial<Assessment>) => {
  try {
    const response = await fetch("/api/assessments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(assessmentData),
    });
    if (response.ok) {
      const newAssessment: Assessment = await response.json();
      assessments.update((a) => [...a, newAssessment]);
      return newAssessment;
    }
  } catch (error) {
    assessmentError.set("Error creating assessment");
  }
};

export const updateAssessment = async (
  id: string,
  assessmentData: Partial<Assessment>,
) => {
  try {
    const response = await fetch(`/api/assessments/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(assessmentData),
    });
    if (response.ok) {
      assessments.update((a) =>
        a.map((assessment) =>
          assessment.id === id
            ? { ...assessment, ...assessmentData }
            : assessment,
        ),
      );
    }
  } catch (error) {
    assessmentError.set("Error updating assessment");
  }
};

export const deleteAssessment = async (id: string) => {
  try {
    const response = await fetch(`/api/assessments/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      assessments.update((a) => a.filter((assessment) => assessment.id !== id));
    }
  } catch (error) {
    assessmentError.set("Error deleting assessment");
  }
};

export const fetchSubmissions = async (assessmentId: string) => {
  try {
    const response = await fetch(
      `/api/assessments/${assessmentId}/submissions`,
    );
    if (response.ok) {
      const data: Submission[] = await response.json();
      submissions.set(data);
    }
  } catch (error) {
    assessmentError.set("Error fetching submissions");
  }
};

export const submitAssessment = async (
  assessmentId: string,
  submissionData: Partial<Submission>,
) => {
  try {
    const response = await fetch(
      `/api/assessments/${assessmentId}/submissions`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      },
    );
    if (response.ok) {
      const newSubmission: Submission = await response.json();
      submissions.update((s) => [...s, newSubmission]);
      return newSubmission;
    }
  } catch (error) {
    assessmentError.set("Error submitting assessment");
  }
};

export const gradeSubmission = async (
  submissionId: string,
  score: number,
  feedback: string,
) => {
  try {
    const response = await fetch(`/api/submissions/${submissionId}/grade`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ score, feedback }),
    });
    if (response.ok) {
      submissions.update((s) =>
        s.map((submission) =>
          submission.id === submissionId
            ? { ...submission, score, feedback, gradedAt: new Date() }
            : submission,
        ),
      );
    }
  } catch (error) {
    assessmentError.set("Error grading submission");
  }
};
