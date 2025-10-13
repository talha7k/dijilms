<script>
  let { ...rest } = $props();
</script>

<div class="flex flex-col space-y-1.5 text-center sm:text-left" {...rest}>
  {@render children?.()}
</div>