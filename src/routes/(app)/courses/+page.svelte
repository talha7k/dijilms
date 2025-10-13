<script lang="ts">
  import { goto } from '$app/navigation';
  import CourseList from '$lib/components/course/CourseList.svelte';
  import CourseForm from '$lib/components/course/CourseForm.svelte';
  import { Button } from '$lib/components/ui/button';
  // import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '$lib/components/ui/dialog';
  import type { Course } from '$lib/types/course';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();

  let courses: Course[] = $state(data.courses || []);
  let showCreateDialog = $state(false);
  let creating = $state(false);

  async function handleCreate(courseData: Partial<Course>) {
    creating = true;
    try {
      const response = await fetch('/api/courses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(courseData)
      });
      if (response.ok) {
        const newCourse = await response.json();
        courses = [...courses, newCourse];
        showCreateDialog = false;
      }
    } catch (error) {
      console.error('Error creating course:', error);
    } finally {
      creating = false;
    }
  }

  function handleEdit(course: Course) {
    goto(`/courses/${course.id}`);
  }

  async function handleDelete(course: Course) {
    if (confirm('Are you sure you want to delete this course?')) {
      try {
        await fetch(`/api/courses/${course.id}`, { method: 'DELETE' });
        courses = courses.filter(c => c.id !== course.id);
      } catch (error) {
        console.error('Error deleting course:', error);
      }
    }
  }
</script>

<svelte:head>
  <title>My Courses</title>
</svelte:head>

<div class="container mx-auto py-8">
  <CourseList {courses} onEdit={handleEdit} onDelete={handleDelete} onCreate={() => showCreateDialog = true} />

  <!-- <Dialog bind:open={showCreateDialog}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create New Course</DialogTitle>
      </DialogHeader>
      <CourseForm loading={creating} on:save={handleCreate} />
    </DialogContent>
  </Dialog> -->
</div>