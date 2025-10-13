<script lang="ts">
  import type { Content } from '$lib/types/content';

  export let content: Content;
</script>

{#if content.type === 'video'}
  <video controls class="w-full">
    <source src={content.url} type="video/mp4">
    Your browser does not support the video tag.
  </video>
{:else if content.type === 'pdf'}
  <iframe src={content.url} class="w-full h-96" title={content.title}></iframe>
{:else if content.type === 'image'}
  <img src={content.url} alt={content.title} class="max-w-full h-auto" />
{:else if content.type === 'text'}
  <div class="prose">{content.url}</div>
{:else}
  <p>Unsupported content type: {content.type}</p>
{/if}