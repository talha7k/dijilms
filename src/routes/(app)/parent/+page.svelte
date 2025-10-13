<script lang="ts">
   import { userProfile } from '$lib/stores/user';
   import { goto } from '$app/navigation';
   import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';

  $effect(() => {
    if ($userProfile.data && $userProfile.data.role !== 'parent') {
      goto('/dashboard');
    }
  });
</script>

<div class="space-y-6">
  <div>
    <h1 class="text-3xl font-bold">Parent Dashboard</h1>
    <p class="text-muted-foreground">Monitor your child's learning progress and communicate with teachers.</p>
  </div>

   <Tabs value="progress">
     <TabsList>
       <TabsTrigger value="progress">Progress</TabsTrigger>
       <TabsTrigger value="assessments">Assessments</TabsTrigger>
       <TabsTrigger value="communication">Communication</TabsTrigger>
       <TabsTrigger value="notifications">Notifications</TabsTrigger>
     </TabsList>
     <TabsContent value="progress">
       <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
         <div class="rounded-lg border p-4">
           <h3 class="font-semibold">Children</h3>
           <p class="text-2xl font-bold">0</p>
         </div>
         <div class="rounded-lg border p-4">
           <h3 class="font-semibold">Active Courses</h3>
           <p class="text-2xl font-bold">0</p>
         </div>
         <div class="rounded-lg border p-4">
           <h3 class="font-semibold">Recent Grades</h3>
           <p class="text-2xl font-bold">0</p>
         </div>
         <div class="rounded-lg border p-4">
           <h3 class="font-semibold">Messages</h3>
           <p class="text-2xl font-bold">0</p>
         </div>
       </div>
     </TabsContent>
     <TabsContent value="assessments">
       <div class="rounded-lg border p-4">
         <h2 class="text-xl font-semibold mb-4">Child Assessments</h2>
         <p>View your child's assessment results and grades.</p>
         <!-- Placeholder for assessment viewing -->
       </div>
     </TabsContent>
     <TabsContent value="communication">
       <div class="rounded-lg border p-4">
         <h2 class="text-xl font-semibold mb-4">Communication</h2>
         <p>Communicate with teachers.</p>
         <!-- Placeholder for communication tools -->
       </div>
     </TabsContent>
     <TabsContent value="notifications">
       <div class="rounded-lg border p-4">
         <h2 class="text-xl font-semibold mb-4">Notifications</h2>
         <p>View notifications about your child's progress.</p>
         <!-- Placeholder for notifications -->
       </div>
     </TabsContent>
   </Tabs>
</div>