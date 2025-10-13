<script lang="ts">
  import { Input } from '../ui/input/index.js';
  import Button from '../ui/button/button.svelte';
  import { Textarea } from '../ui/textarea/index.js';
  import type { TextResponseQuestion } from '$lib/types/question';
  import { Timestamp } from 'firebase/firestore';

  let {
    question: initialQuestion,
    onSave
  }: {
    question?: TextResponseQuestion;
    onSave: (q: TextResponseQuestion) => void;
  } = $props();

  let question = $state(initialQuestion ?? {
    id: '',
    type: 'textResponse' as const,
    question: '',
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
    <label class="text-sm font-medium">Points</label>
    <Input type="number" bind:value={question.points} min="1" />
  </div>

  <Button onclick={save}>Save Question</Button>
</div>