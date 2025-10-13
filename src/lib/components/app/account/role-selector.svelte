<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import { userProfile } from '$lib/stores/user';
	import { toast } from 'svelte-sonner';

	const userData = $derived($userProfile.data);

	let selectedRole = $state<typeof roles[number]>('student');
	$effect(() => {
		if (userData?.role) {
			selectedRole = userData.role;
		}
	});

	const roles = ['admin', 'teacher', 'student', 'parent', 'management'] as const;

	async function updateRole() {
		if (!userData || selectedRole === userData.role) return;

		try {
			await $userProfile.update({
				role: selectedRole
			});
			toast.success('Role updated successfully');
		} catch (error) {
			console.error('Failed to update role:', error);
			toast.error('Failed to update role');
		}
	}
</script>

{#if userData}
	<div class="flex flex-col gap-4">
		<div class="grid grid-cols-4">
			<Label class="font-normal text-muted-foreground">Role</Label>
			<div class="col-span-3 space-y-2">
				<select bind:value={selectedRole} class="w-full p-2 border rounded">
					{#each roles as role}
						<option value={role}>{role}</option>
					{/each}
				</select>
				<p class="text-xs text-muted-foreground">Select your role for testing different dashboards.</p>
			</div>
		</div>
		<div class="mt-4 flex justify-end">
			<Button onclick={updateRole} disabled={selectedRole === userData.role || $userProfile.loading}>
				{#if $userProfile.loading}
					Updating...
				{:else}
					Update Role
				{/if}
			</Button>
		</div>
	</div>
{/if}