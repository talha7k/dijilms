<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Textarea } from '$lib/components/ui/textarea';
  import { Label } from '$lib/components/ui/label';
  import { Checkbox } from '$lib/components/ui/checkbox';
  import type { Course } from '$lib/types/course';

  export let course: Partial<Course> = {};
  export let loading = false;

  const dispatch = createEventDispatcher<{ save: Partial<Course> }>();

  let title = course.title || '';
  let description = course.description || '';
  let published = course.published || false;

  function handleSubmit() {
    dispatch('save', {
      title,
      description,
      published
    });
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="space-y-4">
  <div>
    <Label for="title">Course Title</Label>
    <Input id="title" bind:value={title} required />
  </div>

  <div>
    <Label for="description">Description</Label>
    <Textarea id="description" bind:value={description} required />
  </div>

  <div class="flex items-center space-x-2">
    <Checkbox id="published" bind:checked={published} />
    <Label for="published">Published</Label>
  </div>

  <Button type="submit" disabled={loading}>
    {#if loading}Saving...{:else}Save Course{/if}
  </Button>
</form>