<script lang="ts">
  import { Input } from '../ui/input/index.js';
  import Button from '../ui/button/button.svelte';
  import { Textarea } from '../ui/textarea/index.js';
  import type { MCQQuestion } from '$lib/types/question';
  import { Timestamp } from 'firebase/firestore';

  let {
    question: initialQuestion,
    onSave
  }: {
    question?: MCQQuestion;
    onSave: (q: MCQQuestion) => void;
  } = $props();

  let question = $state(initialQuestion ?? {
    id: '',
    type: 'mcq' as const,
    question: '',
    options: ['', ''],
    correctAnswer: 0,
    points: 1,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  });

  function addOption() {
    question.options.push('');
  }

  function removeOption(index: number) {
    if (question.options.length > 2) {
      question.options.splice(index, 1);
      if (question.correctAnswer >= question.options.length) {
        question.correctAnswer = question.options.length - 1;
      }
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
    <label class="text-sm font-medium">Options</label>
    {#each question.options as _, i}
      <div class="flex gap-2 items-center mt-2">
        <input
          type="radio"
          name="correct"
          checked={question.correctAnswer === i}
          onchange={() => question.correctAnswer = i}
        />
        <Input bind:value={question.options[i]} placeholder={`Option ${i + 1}`} />
        <Button variant="outline" size="sm" onclick={() => removeOption(i)} disabled={question.options.length <= 2}>
          Remove
        </Button>
      </div>
    {/each}
    <Button variant="outline" onclick={addOption} class="mt-2">Add Option</Button>
  </div>

  <div>
    <label class="text-sm font-medium">Points</label>
    <Input type="number" bind:value={question.points} min="1" />
  </div>

  <Button onclick={save}>Save Question</Button>
</div>