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

  <Tabs value="overview">
    <TabsList>
      <TabsTrigger value="overview">Overview</TabsTrigger>
      <TabsTrigger value="analytics">Analytics</TabsTrigger>
    </TabsList>
    <TabsContent value="overview">
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div class="rounded-lg border p-4">
          <h3 class="font-semibold">Total Courses</h3>
          <p class="text-2xl font-bold">0</p>
        </div>
        <div class="rounded-lg border p-4">
          <h3 class="font-semibold">Active Students</h3>
          <p class="text-2xl font-bold">0</p>
        </div>
        <div class="rounded-lg border p-4">
          <h3 class="font-semibold">Assignments Due</h3>
          <p class="text-2xl font-bold">0</p>
        </div>
        <div class="rounded-lg border p-4">
          <h3 class="font-semibold">Recent Activity</h3>
          <p class="text-2xl font-bold">0</p>
        </div>
      </div>
    </TabsContent>
    <TabsContent value="analytics">
      <div class="rounded-lg border p-4">
        <h2 class="text-xl font-semibold mb-4">Analytics and Reporting</h2>
        <p>View detailed analytics and reports on student performance.</p>
        <!-- Placeholder for analytics charts and reports -->
      </div>
    </TabsContent>
  </Tabs>
</div>