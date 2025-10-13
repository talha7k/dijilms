<script lang="ts">
  import { goto } from '$app/navigation';
  import CourseForm from '$lib/components/course/CourseForm.svelte';
  import ModuleList from '$lib/components/course/ModuleList.svelte';
  import { Button } from '$lib/components/ui/button';
  import { Dialog, DialogContent, DialogHeader, DialogTitle } from '$lib/components/ui/dialog';
  import type { Course, Module } from '$lib/types/course';
  import type { PageData } from './$types';

  export let data: PageData;

  let course: Course = data.course;
  let saving = false;
  let publishing = false;
  let showModuleDialog = false;
  let editingModule: Module | null = null;

  async function handleSave(updatedData: Partial<Course>) {
    saving = true;
    try {
      const response = await fetch(`/api/courses/${course.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData)
      });
      if (response.ok) {
        course = { ...course, ...updatedData };
      }
    } catch (error) {
      console.error('Error updating course:', error);
    } finally {
      saving = false;
    }
  }

  function handleAddModule() {
    editingModule = null;
    showModuleDialog = true;
  }

  function handleEditModule(module: Module) {
    editingModule = module;
    showModuleDialog = true;
  }

  async function handleDeleteModule(module: Module) {
    if (confirm('Are you sure you want to delete this module?')) {
      // Implement delete logic
      course.modules = course.modules.filter(m => m.id !== module.id);
    }
  }

  async function handleSaveModule(moduleData: Partial<Module>) {
    // Implement save logic for module
    if (editingModule) {
      // Update existing
      const index = course.modules.findIndex(m => m.id === editingModule!.id);
      course.modules[index] = { ...editingModule, ...moduleData };
    } else {
      // Add new
      const newModule: Module = {
        id: Date.now().toString(), // Temporary ID
        ...moduleData as Module,
        lessons: []
      };
      course.modules = [...course.modules, newModule];
    }
    showModuleDialog = false;
  }

  async function handleTogglePublish() {
    publishing = true;
    try {
      const newPublished = !course.published;
      const response = await fetch(`/api/courses/${course.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ published: newPublished })
      });
      if (response.ok) {
        course = { ...course, published: newPublished };
      }
    } catch (error) {
      console.error('Error toggling publish:', error);
    } finally {
      publishing = false;
    }
  }
</script>

<svelte:head>
  <title>Edit Course: {course.title}</title>
</svelte:head>

<div class="container mx-auto py-8">
  <div class="mb-4">
    <Button variant="outline" on:click={() => goto('/courses')}>Back to Courses</Button>
  </div>

  <h1 class="text-3xl font-bold mb-8">Edit Course</h1>

  <div class="space-y-8">
    <div class="flex justify-between items-center">
      <h2 class="text-2xl font-semibold">Course Details</h2>
      <Button
        variant={course.published ? "destructive" : "default"}
        on:click={handleTogglePublish}
        disabled={publishing}
      >
        {#if publishing}Processing...{:else}{course.published ? "Unpublish" : "Publish"} Course{/if}
      </Button>
    </div>

    <CourseForm {course} loading={saving} on:save={handleSave} />

    <ModuleList
      modules={course.modules}
      on:addModule={handleAddModule}
      on:editModule={handleEditModule}
      on:deleteModule={handleDeleteModule}
    />
  </div>

  <Dialog bind:open={showModuleDialog}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{editingModule ? 'Edit Module' : 'Add Module'}</DialogTitle>
      </DialogHeader>
      <!-- ModuleForm would go here, but for brevity, assume it's implemented -->
      <p>Module form placeholder</p>
    </DialogContent>
  </Dialog>
</div>