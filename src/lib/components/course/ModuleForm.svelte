<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Textarea } from '$lib/components/ui/textarea';
  import { Label } from '$lib/components/ui/label';
  import type { Module } from '$lib/types/course';

  export let module: Partial<Module> = {};
  export let loading = false;

  const dispatch = createEventDispatcher<{ save: Partial<Module> }>();

  let title = module.title || '';
  let description = module.description || '';
  let order = module.order || 1;

  function handleSubmit() {
    dispatch('save', {
      title,
      description,
      order
    });
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="space-y-4">
  <div>
    <Label for="title">Module Title</Label>
    <Input id="title" bind:value={title} required />
  </div>

  <div>
    <Label for="description">Description</Label>
    <Textarea id="description" bind:value={description} required />
  </div>

  <div>
    <Label for="order">Order</Label>
    <Input id="order" type="number" bind:value={order} required />
  </div>

  <Button type="submit" disabled={loading}>
    {#if loading}Saving...{:else}Save Module{/if}
  </Button>
</form>