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
    <h1 class="text-3xl font-bold">My Progress</h1>
    <p class="text-muted-foreground">View your learning progress and achievements.</p>
  </div>

  <div class="rounded-lg border p-4">
    <p>Progress tracking widgets will be implemented here.</p>
  </div>
</div>