import { writable } from "svelte/store";
import type { Enrollment } from "$lib/types/enrollment";

export const enrollments = writable<Enrollment[]>([]);
export const loadingEnrollments = writable(false);
export const enrollmentError = writable<string | null>(null);

// Actions
export const fetchEnrollments = async () => {
  loadingEnrollments.set(true);
  enrollmentError.set(null);
  try {
    const response = await fetch("/api/enrollments");
    if (response.ok) {
      const data: Enrollment[] = await response.json();
      enrollments.set(data);
    } else {
      enrollmentError.set("Failed to fetch enrollments");
    }
  } catch (error) {
    enrollmentError.set("Error fetching enrollments");
  } finally {
    loadingEnrollments.set(false);
  }
};

export const createEnrollment = async (enrollmentData: Partial<Enrollment>) => {
  try {
    const response = await fetch("/api/enrollments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enrollmentData),
    });
    if (response.ok) {
      const newEnrollment: Enrollment = await response.json();
      enrollments.update((e) => [...e, newEnrollment]);
      return newEnrollment;
    }
  } catch (error) {
    enrollmentError.set("Error creating enrollment");
  }
};

export const updateEnrollment = async (
  id: string,
  enrollmentData: Partial<Enrollment>,
) => {
  try {
    const response = await fetch(`/api/enrollments/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enrollmentData),
    });
    if (response.ok) {
      enrollments.update((e) =>
        e.map((enrollment) =>
          enrollment.id === id
            ? { ...enrollment, ...enrollmentData }
            : enrollment,
        ),
      );
    }
  } catch (error) {
    enrollmentError.set("Error updating enrollment");
  }
};

export const deleteEnrollment = async (id: string) => {
  try {
    const response = await fetch(`/api/enrollments/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      enrollments.update((e) => e.filter((enrollment) => enrollment.id !== id));
    }
  } catch (error) {
    enrollmentError.set("Error deleting enrollment");
  }
};
