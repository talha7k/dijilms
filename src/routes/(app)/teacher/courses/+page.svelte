<script lang="ts">
  import { userProfile } from '$lib/stores/user';
  import { goto } from '$app/navigation';
  import CourseList from '$lib/components/course/CourseList.svelte';
  import QuizEditor from '$lib/components/assessments/QuizEditor.svelte';
  import GradingInterface from '$lib/components/assessments/GradingInterface.svelte';
  import { Button } from '$lib/components/ui/button';
  import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
  import type { Course } from '$lib/types/course';

  $effect(() => {
    if ($userProfile.data && $userProfile.data.role !== 'teacher') {
      goto('/dashboard');
    }
  });

  function handleEdit(course: Course) {
    // TODO: Implement edit
  }

  function handleDelete(course: Course) {
    // TODO: Implement delete
  }

  function handleCreate() {
    // TODO: Implement create
  }
</script>

<div class="space-y-6">
  <div class="flex items-center justify-between">
    <div>
      <h1 class="text-3xl font-bold">Course Management</h1>
      <p class="text-muted-foreground">Create and manage your courses.</p>
    </div>
    <Button>Create Course</Button>
  </div>

  <Tabs value="courses">
    <TabsList>
      <TabsTrigger value="courses">Courses</TabsTrigger>
      <TabsTrigger value="assessments">Assessments</TabsTrigger>
      <TabsTrigger value="grading">Grading</TabsTrigger>
    </TabsList>
    <TabsContent value="courses">
      <CourseList onEdit={handleEdit} onDelete={handleDelete} onCreate={handleCreate} />
    </TabsContent>
    <TabsContent value="assessments">
      <QuizEditor />
    </TabsContent>
    <TabsContent value="grading">
      <GradingInterface />
    </TabsContent>
  </Tabs>
</div>