<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Button } from '$lib/components/ui/button';
  import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
  import type { Module } from '$lib/types/course';

  let { modules = [] } = $props<{ modules?: Module[] }>();

  const dispatch = createEventDispatcher<{
    addModule: void;
    editModule: Module;
    deleteModule: Module;
  }>();
</script>

  <div class="space-y-4">
   <div class="flex justify-between items-center">
     <h3 class="text-xl font-semibold">Modules</h3>
     <Button onclick={() => dispatch('addModule')}>Add Module</Button>
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
               <Button variant="outline" size="sm" onclick={() => dispatch('editModule', module)}>Edit</Button>
               <Button variant="destructive" size="sm" onclick={() => dispatch('deleteModule', module)}>Delete</Button>
             </div>
           </CardContent>
         </Card>
       {/each}
     </div>
   {/if}
 </div>