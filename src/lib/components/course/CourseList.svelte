<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
  import type { Course } from '$lib/types/course';

  export let courses: Course[] = [];
  export let loading = false;

  export let onEdit: (course: Course) => void;
  export let onDelete: (course: Course) => void;
  export let onCreate: () => void;
</script>

<div class="space-y-4">
  <div class="flex justify-between items-center">
    <h2 class="text-2xl font-bold">My Courses</h2>
    <Button on:click={onCreate}>Create Course</Button>
  </div>

  {#if loading}
    <p>Loading courses...</p>
  {:else if courses.length === 0}
    <p>No courses found. Create your first course!</p>
  {:else}
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {#each courses as course}
        <Card>
          <CardHeader>
            <CardTitle>{course.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-muted-foreground mb-4">{course.description}</p>
            <div class="flex gap-2">
              <Button variant="outline" size="sm" on:click={() => onEdit(course)}>Edit</Button>
              <Button variant="destructive" size="sm" on:click={() => onDelete(course)}>Delete</Button>
            </div>
          </CardContent>
        </Card>
      {/each}
    </div>
  {/if}
</div>