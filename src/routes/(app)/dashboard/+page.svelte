<script lang="ts">
	import { userProfile } from '$lib/stores/user';
	import { goto } from '$app/navigation';

	$effect(() => {
		if ($userProfile.data) {
			const role = $userProfile.data.role;
			if (role === 'teacher') {
				goto('/teacher');
			} else if (role === 'student') {
				goto('/student');
			} else if (role === 'parent') {
				goto('/parent');
			} else if (role === 'management') {
				goto('/management');
			}
			// For 'user', 'admin', 'moderator', stay on dashboard
		}
	});
</script>

<div class="flex flex-1 flex-col gap-4 p-4 pt-0">
	<div class="grid auto-rows-min gap-4 md:grid-cols-3">
		<div class="bg-muted/50 aspect-video rounded-xl"></div>
		<div class="bg-muted/50 aspect-video rounded-xl"></div>
		<div class="bg-muted/50 aspect-video rounded-xl"></div>
	</div>
	<div class="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min"></div>
</div>