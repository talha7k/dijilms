<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Button } from '$lib/components/ui/button';
  import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
  import type { Lesson } from '$lib/types/course';

  let { lessons = [] } = $props<{ lessons?: Lesson[] }>();

  const dispatch = createEventDispatcher<{
    addLesson: undefined;
    editLesson: Lesson;
    deleteLesson: Lesson;
  }>();
</script>

  <div class="space-y-4">
   <div class="flex justify-between items-center">
     <h4 class="text-lg font-semibold">Lessons</h4>
     <Button onclick={() => dispatch('addLesson')}>Add Lesson</Button>
   </div>

   {#if lessons.length === 0}
     <p>No lessons yet. Add your first lesson!</p>
   {:else}
     <div class="space-y-2">
       {#each lessons as lesson (lesson.id)}
         <Card>
           <CardHeader>
             <CardTitle>{lesson.title}</CardTitle>
           </CardHeader>
           <CardContent>
             <p class="text-sm text-muted-foreground mb-4">{lesson.content.substring(0, 100)}...</p>
             <div class="flex gap-2">
               <Button variant="outline" size="sm" onclick={() => dispatch('editLesson', lesson)}>Edit</Button>
               <Button variant="destructive" size="sm" onclick={() => dispatch('deleteLesson', lesson)}>Delete</Button>
             </div>
           </CardContent>
         </Card>
       {/each}
     </div>
   {/if}
 </div>