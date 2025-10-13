<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
  import type { Module } from '$lib/types/course';

  export let modules: Module[] = [];
  export let onAddModule: () => void;
  export let onEditModule: (module: Module) => void;
  export let onDeleteModule: (module: Module) => void;
</script>

<div class="space-y-4">
  <div class="flex justify-between items-center">
    <h3 class="text-xl font-semibold">Modules</h3>
    <Button on:click={onAddModule}>Add Module</Button>
  </div>

  {#if modules.length === 0}
    <p>No modules yet. Add your first module!</p>
  {:else}
    <div class="space-y-2">
      {#each modules as module (module.id)}
        <Card>
          <CardHeader>
            <CardTitle>{module.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-muted-foreground mb-4">{module.description}</p>
            <div class="flex gap-2">
              <Button variant="outline" size="sm" on:click={() => onEditModule(module)}>Edit</Button>
              <Button variant="destructive" size="sm" on:click={() => onDeleteModule(module)}>Delete</Button>
            </div>
          </CardContent>
        </Card>
      {/each}
    </div>
  {/if}
</div>