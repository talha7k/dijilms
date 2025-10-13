export interface Course {
  id: string;
  title: string;
  description: string;
  instructorId: string;
  modules: Module[];
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  order: number;
}

export interface Lesson {
  id: string;
  title: string;
  content: string; // or contentId if separate
  order: number;
}
