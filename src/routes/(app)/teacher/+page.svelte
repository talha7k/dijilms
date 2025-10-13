<script lang="ts">
  import { userProfile } from '$lib/stores/user';
  import { goto } from '$app/navigation';
  import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';

  $effect(() => {
    if ($userProfile.data && $userProfile.data.role !== 'teacher') {
      goto('/dashboard');
    }
  });
</script>

<div class="space-y-6">
  <div>
    <h1 class="text-3xl font-bold">Teacher Dashboard</h1>
    <p class="text-muted-foreground">Manage your courses and monitor student progress.</p>
  </div>

   <Tabs value="courses">
     <TabsList>
       <TabsTrigger value="courses">Courses</TabsTrigger>
       <TabsTrigger value="assessments">Assessments</TabsTrigger>
       <TabsTrigger value="grading">Grading</TabsTrigger>
       <TabsTrigger value="communication">Communication</TabsTrigger>
       <TabsTrigger value="notifications">Notifications</TabsTrigger>
     </TabsList>
     <TabsContent value="courses">
       <div class="rounded-lg border p-4">
         <h2 class="text-xl font-semibold mb-4">Course Management</h2>
         <p>Manage your courses and content.</p>
         <!-- Placeholder for course list and management -->
       </div>
     </TabsContent>
     <TabsContent value="assessments">
       <div class="rounded-lg border p-4">
         <h2 class="text-xl font-semibold mb-4">Assessment Management</h2>
         <p>Create and manage assessments for your courses.</p>
         <!-- Placeholder for assessment creation and listing -->
       </div>
     </TabsContent>
     <TabsContent value="grading">
       <div class="rounded-lg border p-4">
         <h2 class="text-xl font-semibold mb-4">Grading</h2>
         <p>Grade student submissions and view results.</p>
         <!-- Placeholder for grading interface -->
       </div>
     </TabsContent>
     <TabsContent value="communication">
       <div class="rounded-lg border p-4">
         <h2 class="text-xl font-semibold mb-4">Communication</h2>
         <p>Communicate with students and parents.</p>
         <!-- Placeholder for communication tools -->
       </div>
     </TabsContent>
     <TabsContent value="notifications">
       <div class="rounded-lg border p-4">
         <h2 class="text-xl font-semibold mb-4">Notifications</h2>
         <p>View notifications about student activity and system updates.</p>
         <!-- Placeholder for notifications -->
       </div>
     </TabsContent>
  </Tabs>
</div>