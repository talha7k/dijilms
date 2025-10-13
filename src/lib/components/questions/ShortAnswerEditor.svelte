<script lang="ts">
  import { Input } from '../ui/input/index.js';
  import Button from '../ui/button/button.svelte';
  import { Textarea } from '../ui/textarea/index.js';
  import Checkbox from '../ui/checkbox/checkbox.svelte';
  import type { ShortAnswerQuestion } from '$lib/types/question';
  import { Timestamp } from 'firebase/firestore';

  let {
    question: initialQuestion,
    onSave
  }: {
    question?: ShortAnswerQuestion;
    onSave: (q: ShortAnswerQuestion) => void;
  } = $props();

  let question = $state(initialQuestion ?? {
    id: '',
    type: 'shortAnswer' as const,
    question: '',
    correctAnswer: '',
    caseSensitive: false,
    points: 1,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  });

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
    <label class="text-sm font-medium">Correct Answer</label>
    <Input bind:value={question.correctAnswer} placeholder="Enter the correct answer" />
  </div>

  <div class="flex items-center gap-2">
    <Checkbox bind:checked={question.caseSensitive} />
    <label class="text-sm font-medium">Case Sensitive</label>
  </div>

  <div>
    <label class="text-sm font-medium">Points</label>
    <Input type="number" bind:value={question.points} min="1" />
  </div>

  <Button onclick={save}>Save Question</Button>
</div>