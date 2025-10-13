export interface Content {
  id: string;
  title: string;
  type: "video" | "pdf" | "image" | "text" | "interactive";
  url: string;
  lessonId: string;
  courseId: string;
  order: number;
  uploadedAt: Date;
}
