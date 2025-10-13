<script lang="ts" module>
	import { Dialog as DialogPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";
	import { tv, type VariantProps } from "tailwind-variants";

	const dialogVariants = tv({
		base: "bg-background p-6 shadow-lg",
		variants: {
			variant: {
				default: "rounded-lg",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	});

	export type DialogContentVariant = VariantProps<typeof dialogVariants>["variant"];
</script>

 <script lang="ts">

	let {
		ref = $bindable(null),
		class: className,
		variant = "default",
		children,
		...restProps
	}: WithoutChildrenOrChild<DialogPrimitive.Content.Props> & {
		variant?: DialogContentVariant;
	} = $props();
</script>

<DialogPrimitive.Content
	bind:this={ref}
	class={cn(dialogVariants({ variant }), className)}
	{...restProps}
>
	{@render children?.()}
</DialogPrimitive.Content>