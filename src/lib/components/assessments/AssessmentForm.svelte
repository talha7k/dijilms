<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Textarea } from '$lib/components/ui/textarea';
  import { Label } from '$lib/components/ui/label';

  import type { Assessment } from '$lib/types/assessment';

  export let assessment: Partial<Assessment> = {};
  export let loading = false;

  const dispatch = createEventDispatcher<{ save: Partial<Assessment> }>();

  let title = assessment.title || '';
  let description = assessment.description || '';
  let type: 'quiz' | 'assignment' = assessment.type || 'quiz';
  let instructions = assessment.instructions || '';
  let maxScore = assessment.maxScore || 100;
  let dueDate = assessment.dueDate ? assessment.dueDate.toISOString().split('T')[0] : '';

  function handleSubmit() {
    dispatch('save', {
      title,
      description,
      type,
      instructions: type === 'assignment' ? instructions : undefined,
      maxScore,
      dueDate: dueDate ? new Date(dueDate) : undefined
    });
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="space-y-4">
  <div>
    <Label for="title">Assessment Title</Label>
    <Input id="title" bind:value={title} required />
  </div>

  <div>
    <Label for="description">Description</Label>
    <Textarea id="description" bind:value={description} required />
  </div>

  <div>
    <Label for="type">Type</Label>
    <select id="type" bind:value={type} class="w-full p-2 border rounded">
      <option value="quiz">Quiz</option>
      <option value="assignment">Assignment</option>
    </select>
  </div>

  {#if type === 'assignment'}
    <div>
      <Label for="instructions">Instructions</Label>
      <Textarea id="instructions" bind:value={instructions} />
    </div>
  {/if}

  <div>
    <Label for="maxScore">Max Score</Label>
    <Input id="maxScore" type="number" bind:value={maxScore} min="0" required />
  </div>

  <div>
    <Label for="dueDate">Due Date (optional)</Label>
    <Input id="dueDate" type="date" bind:value={dueDate} />
  </div>

  <Button type="submit" disabled={loading}>
    {#if loading}Saving...{:else}Save Assessment{/if}
  </Button>
</form>