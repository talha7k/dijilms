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
    <h1 class="text-3xl font-bold">Communication</h1>
    <p class="text-muted-foreground">Communicate with teachers and view messages.</p>
  </div>

  <div class="rounded-lg border p-4">
    <p>Messages and communication tools will be implemented here.</p>
  </div>
</div>