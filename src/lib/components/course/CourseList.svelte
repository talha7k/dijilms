<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
  import type { Course } from '$lib/types/course';

  let {
    courses = [],
    loading = false,
    onEdit,
    onDelete,
    onCreate
  }: {
    courses?: Course[];
    loading?: boolean;
    onEdit: (course: Course) => void;
    onDelete: (course: Course) => void;
    onCreate: () => void;
  } = $props();
</script>

<div class="space-y-4">
  <div class="flex justify-between items-center">
    <h2 class="text-2xl font-bold">My Courses</h2>
    <Button onclick={onCreate}>Create Course</Button>
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
              <Button variant="outline" size="sm" onclick={() => onEdit(course)}>Edit</Button>
              <Button variant="destructive" size="sm" onclick={() => onDelete(course)}>Delete</Button>
            </div>
          </CardContent>
        </Card>
      {/each}
    </div>
  {/if}
</div>