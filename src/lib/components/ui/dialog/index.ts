import { Dialog as DialogPrimitive } from "bits-ui";
import { tv, type VariantProps } from "tailwind-variants";

import DialogContent from "./dialog-content.svelte";
import DialogHeader from "./dialog-header.svelte";
import DialogTitle from "./dialog-title.svelte";
import DialogFooter from "./dialog-footer.svelte";

const Dialog = DialogPrimitive;

export {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  //
  Dialog as DialogRoot,
};
