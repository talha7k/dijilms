<script lang="ts">
  import { userProfile } from '$lib/stores/user';
  import { goto } from '$app/navigation';

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
</div>