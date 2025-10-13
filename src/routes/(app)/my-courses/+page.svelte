<script lang="ts">
  import { onMount } from 'svelte';
  import { Button } from '$lib/components/ui/button';
  import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
  import { Progress } from '$lib/components/ui/progress';
  import type { Enrollment } from '$lib/types/enrollment';
  import type { Course } from '$lib/types/course';

  let enrollments: Enrollment[] = [];
  let courses: Course[] = [];
  let loading = true;

  onMount(async () => {
    await loadEnrollments();
    await loadCourses();
    loading = false;
  });

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

  function getCourse(enrollment: Enrollment): Course | undefined {
    return courses.find(c => c.id === enrollment.courseId);
  }

  async function handleUnenroll(enrollment: Enrollment) {
    if (confirm('Are you sure you want to unenroll from this course?')) {
      try {
        await fetch(`/api/enrollments/${enrollment.id}`, { method: 'DELETE' });
        enrollments = enrollments.filter(e => e.id !== enrollment.id);
      } catch (error) {
        console.error('Error unenrolling:', error);
      }
    }
  }
</script>

<svelte:head>
  <title>My Courses</title>
</svelte:head>

<div class="container mx-auto py-8">
  <h1 class="text-3xl font-bold mb-8">My Enrolled Courses</h1>

  {#if loading}
    <p>Loading...</p>
  {:else if enrollments.length === 0}
    <p>You are not enrolled in any courses yet. <a href="/browse" class="text-blue-600">Browse courses</a></p>
  {:else}
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each enrollments as enrollment}
        {@const course = getCourse(enrollment)}
        {#if course}
          <Card>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-muted-foreground mb-4">{course.description}</p>
              <div class="mb-4">
                <p class="text-sm">Progress: {enrollment.progress}%</p>
                <Progress value={enrollment.progress} class="mt-2" />
              </div>
              <div class="flex gap-2">
                <Button variant="outline" size="sm">Continue</Button>
                <Button variant="destructive" size="sm" on:click={() => handleUnenroll(enrollment)}>Unenroll</Button>
              </div>
            </CardContent>
          </Card>
        {/if}
      {/each}
    </div>
  {/if}
</div>