<script lang="ts">
   import { userProfile } from '$lib/stores/user';
   import { goto } from '$app/navigation';
   import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';

  $effect(() => {
    if ($userProfile.data && $userProfile.data.role !== 'student') {
      goto('/dashboard');
    }
  });
</script>

<div class="space-y-6">
  <div>
    <h1 class="text-3xl font-bold">My Learning Dashboard</h1>
    <p class="text-muted-foreground">Track your progress and access your courses.</p>
  </div>

   <Tabs value="courses">
     <TabsList>
       <TabsTrigger value="courses">Courses</TabsTrigger>
       <TabsTrigger value="assessments">Assessments</TabsTrigger>
       <TabsTrigger value="progress">Progress</TabsTrigger>
       <TabsTrigger value="communication">Communication</TabsTrigger>
       <TabsTrigger value="notifications">Notifications</TabsTrigger>
     </TabsList>
     <TabsContent value="courses">
       <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
         <div class="rounded-lg border p-4">
           <h3 class="font-semibold">Enrolled Courses</h3>
           <p class="text-2xl font-bold">0</p>
         </div>
         <div class="rounded-lg border p-4">
           <h3 class="font-semibold">Completed Lessons</h3>
           <p class="text-2xl font-bold">0</p>
         </div>
         <div class="rounded-lg border p-4">
           <h3 class="font-semibold">Assignments Due</h3>
           <p class="text-2xl font-bold">0</p>
         </div>
         <div class="rounded-lg border p-4">
           <h3 class="font-semibold">Overall Progress</h3>
           <p class="text-2xl font-bold">0%</p>
         </div>
       </div>

       <div class="rounded-lg border p-4">
         <h2 class="text-xl font-semibold mb-4">My Enrolled Courses</h2>
         <p>Quick access to your courses.</p>
         <!-- Placeholder for enrolled courses list -->
       </div>
     </TabsContent>
     <TabsContent value="assessments">
       <div class="rounded-lg border p-4">
         <h2 class="text-xl font-semibold mb-4">My Assessments</h2>
         <p>Take and view your assessments.</p>
         <!-- Placeholder for assessment taking -->
       </div>
     </TabsContent>
     <TabsContent value="progress">
       <div class="rounded-lg border p-4">
         <h2 class="text-xl font-semibold mb-4">Progress Tracking</h2>
         <p>Track your learning progress.</p>
         <!-- Placeholder for progress details -->
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
         <p>View notifications about assignments and progress.</p>
         <!-- Placeholder for notifications -->
       </div>
     </TabsContent>
   </Tabs>
</div>