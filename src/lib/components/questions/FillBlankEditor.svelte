<script lang="ts">
  import { Input } from '../ui/input/index.js';
  import Button from '../ui/button/button.svelte';
  import { Textarea } from '../ui/textarea/index.js';
  import type { FillBlankQuestion } from '$lib/types/question';
  import { Timestamp } from 'firebase/firestore';

  let {
    question: initialQuestion,
    onSave
  }: {
    question?: FillBlankQuestion;
    onSave: (q: FillBlankQuestion) => void;
  } = $props();

  let question = $state(initialQuestion ?? {
    id: '',
    type: 'fillBlank' as const,
    question: '',
    blanks: [''],
    displayText: '',
    points: 1,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  });

  function addBlank() {
    question.blanks.push('');
  }

  function removeBlank(index: number) {
    if (question.blanks.length > 1) {
      question.blanks.splice(index, 1);
    }
  }

  function save() {
    onSave(question);
  }
</script>

<div class="space-y-4">
  <div>
    <label class="text-sm font-medium">Question</label>
    <Textarea bind:value={question.question} placeholder="Enter your question" />
  </div>

  <div>
    <label class="text-sm font-medium">Display Text (use ___ for blanks)</label>
    <Textarea bind:value={question.displayText} placeholder="Enter text with ___ for blanks" />
  </div>

  <div>
    <label class="text-sm font-medium">Answers for Blanks</label>
    {#each question.blanks as _, i}
      <div class="flex gap-2 items-center mt-2">
        <Input bind:value={question.blanks[i]} placeholder={`Answer for blank ${i + 1}`} />
        <Button variant="outline" size="sm" onclick={() => removeBlank(i)} disabled={question.blanks.length <= 1}>
          Remove
        </Button>
      </div>
    {/each}
    <Button variant="outline" onclick={addBlank} class="mt-2">Add Blank</Button>
  </div>

  <div>
    <label class="text-sm font-medium">Points</label>
    <Input type="number" bind:value={question.points} min="1" />
  </div>

  <Button onclick={save}>Save Question</Button>
</div>