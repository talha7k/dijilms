<script lang="ts">
  import { userProfile } from '$lib/stores/user';
  import { goto } from '$app/navigation';

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
</div>