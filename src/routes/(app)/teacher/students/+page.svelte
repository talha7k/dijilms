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
    <h1 class="text-3xl font-bold">Student Oversight</h1>
    <p class="text-muted-foreground">Monitor student progress and performance.</p>
  </div>

  <Tabs value="progress">
    <TabsList>
      <TabsTrigger value="progress">Progress</TabsTrigger>
      <TabsTrigger value="communication">Communication</TabsTrigger>
    </TabsList>
    <TabsContent value="progress">
      <div class="rounded-lg border p-4">
        <h2 class="text-xl font-semibold mb-4">Student Progress</h2>
        <p>Student monitoring tools will be implemented here.</p>
        <!-- Placeholder for student list and progress -->
      </div>
    </TabsContent>
    <TabsContent value="communication">
      <div class="rounded-lg border p-4">
        <h2 class="text-xl font-semibold mb-4">Communication Tools</h2>
        <p>Send announcements and messages to students.</p>
        <!-- Placeholder for communication tools -->
      </div>
    </TabsContent>
  </Tabs>
</div>