<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Button } from '$lib/components/ui/button';
  import { Textarea } from '$lib/components/ui/textarea';
  import { Label } from '$lib/components/ui/label';

  export let loading = false;

  const dispatch = createEventDispatcher<{ submit: { submission: string; file?: File } }>();

  let submission = '';
  let file: File | undefined;

  function handleFileSelect(event: Event) {
    const target = event.target as HTMLInputElement;
    file = target.files?.[0];
  }

  function handleSubmit() {
    dispatch('submit', { submission, file });
  }
</script>

<div class="space-y-4">
  <div>
    <Label for="submission">Your Submission</Label>
    <Textarea
      id="submission"
      bind:value={submission}
      placeholder="Enter your assignment submission here..."
      rows="10"
    />
  </div>

  <div>
    <Label for="file">Attach File (optional)</Label>
    <input
      id="file"
      type="file"
      on:change={handleFileSelect}
      class="w-full p-2 border rounded"
    />
    {#if file}
      <p class="text-sm text-gray-600">Selected: {file.name}</p>
    {/if}
  </div>

  <Button on:click={handleSubmit} disabled={loading || (!submission.trim() && !file)}>
    {#if loading}Submitting...{:else}Submit Assignment{/if}
  </Button>
</div>