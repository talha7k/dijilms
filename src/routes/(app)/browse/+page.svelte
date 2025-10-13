<script lang="ts">
  import { onMount } from 'svelte';
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
  import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '$lib/components/ui/dialog';
  import type { Course } from '$lib/types/course';
  import type { Enrollment } from '$lib/types/enrollment';

  let courses: Course[] = [];
  let enrollments: Enrollment[] = [];
  let searchQuery = '';
  let loading = true;
  let showEnrollDialog = false;
  let selectedCourse: Course | null = null;

  onMount(async () => {
    await loadCourses();
    await loadEnrollments();
    loading = false;
  });

  async function loadCourses() {
    try {
      const response = await fetch('/api/courses/published');
      if (response.ok) {
        courses = await response.json();
      }
    } catch (error) {
      console.error('Error loading courses:', error);
    }
  }

  async function loadEnrollments() {
    try {
      const response = await fetch('/api/enrollments');
      if (response.ok) {
        enrollments = await response.json();
      }
    } catch (error) {
      console.error('Error loading enrollments:', error);
    }
  }

  function isEnrolled(courseId: string): boolean {
    return enrollments.some(e => e.courseId === courseId && e.status === 'enrolled');
  }

  function handleEnrollClick(course: Course) {
    selectedCourse = course;
    showEnrollDialog = true;
  }

  async function confirmEnroll() {
    if (!selectedCourse) return;
    try {
      const response = await fetch('/api/enrollments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseId: selectedCourse.id })
      });
      if (response.ok) {
        const newEnrollment: Enrollment = await response.json();
        enrollments = [...enrollments, newEnrollment];
      }
    } catch (error) {
      console.error('Error enrolling:', error);
    } finally {
      showEnrollDialog = false;
      selectedCourse = null;
    }
  }

  $: filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
</script>

<svelte:head>
  <title>Browse Courses</title>
</svelte:head>

<div class="container mx-auto py-8">
  <h1 class="text-3xl font-bold mb-8">Browse Courses</h1>

  <div class="mb-6">
    <Input
      placeholder="Search courses..."
      bind:value={searchQuery}
      class="max-w-md"
    />
  </div>

  {#if loading}
    <p>Loading courses...</p>
  {:else if filteredCourses.length === 0}
    <p>No courses available.</p>
  {:else}
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each filteredCourses as course}
        <Card>
          <CardHeader>
            <CardTitle>{course.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-muted-foreground mb-4">{course.description}</p>
            {#if isEnrolled(course.id)}
              <Button disabled>Enrolled</Button>
            {:else}
              <Button on:click={() => handleEnrollClick(course)}>Enroll</Button>
            {/if}
          </CardContent>
        </Card>
      {/each}
    </div>
  {/if}

  <Dialog bind:open={showEnrollDialog}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Confirm Enrollment</DialogTitle>
      </DialogHeader>
      <p>Are you sure you want to enroll in "{selectedCourse?.title}"?</p>
      <DialogFooter>
        <Button variant="outline" on:click={() => showEnrollDialog = false}>Cancel</Button>
        <Button on:click={confirmEnroll}>Confirm</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</div>