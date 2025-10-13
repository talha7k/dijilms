<script>
  let { ...rest } = $props();
</script>

<h2 class="text-lg font-semibold leading-none tracking-tight" {...rest}>
  {@render children?.()}
</h2>