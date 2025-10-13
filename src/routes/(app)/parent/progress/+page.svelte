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
    <h1 class="text-3xl font-bold">Child Progress</h1>
    <p class="text-muted-foreground">View your child's learning progress and grades.</p>
  </div>

  <div class="rounded-lg border p-4">
    <p>Child progress and grades will be displayed here.</p>
  </div>
</div>