<script>
  let { ...rest } = $props();
</script>

<div class="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2" {...rest}>
  {@render children?.()}
</div>