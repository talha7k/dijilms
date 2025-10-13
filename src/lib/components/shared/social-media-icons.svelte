<script lang="ts">
	import Button from '../ui/button/button.svelte';
	import { socialLinks } from '../../../config';
	import Icon from '@iconify/svelte';
</script>

<!-- Social Icons -->
<div class="flex">
	{#each socialLinks as { title, url, icon }}
		<Button
			size="icon"
			variant="ghost"
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={title}
		>
			<Icon icon={icon} class="size-3.5 shrink-0" />
		</Button>
	{/each}
</div>

<!-- End Social Icons -->

<style>
	.size-3\.5 {
		width: 0.875rem;
		height: 0.875rem;
	}
</style>
