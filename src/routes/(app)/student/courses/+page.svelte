<script lang="ts">
  import { userProfile } from '$lib/stores/user';
  import { goto } from '$app/navigation';

  $effect(() => {
    if ($userProfile.data && ($userProfile.data.role !== 'student' && $userProfile.data.role !== 'user')) {
      goto('/dashboard');
    }
  });
</script>

<div class="space-y-6">
  <div>
    <h1 class="text-3xl font-bold">My Courses</h1>
    <p class="text-muted-foreground">Access and continue your enrolled courses.</p>
  </div>

  <div class="rounded-lg border p-4">
    <p>Enrolled courses will be listed here.</p>
  </div>
</div>