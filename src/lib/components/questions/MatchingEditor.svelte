<script lang="ts">
  import { Input } from '../ui/input/index.js';
  import Button from '../ui/button/button.svelte';
  import { Textarea } from '../ui/textarea/index.js';
  import type { MatchingQuestion } from '$lib/types/question';
  import { Timestamp } from 'firebase/firestore';

  let {
    question: initialQuestion,
    onSave
  }: {
    question?: MatchingQuestion;
    onSave: (q: MatchingQuestion) => void;
  } = $props();

  let question = $state(initialQuestion ?? {
    id: '',
    type: 'matching' as const,
    question: '',
    leftItems: ['', ''],
    rightItems: ['', ''],
    correctPairs: [[0, 0], [1, 1]],
    points: 1,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  });

  function addItem(side: 'left' | 'right') {
    if (side === 'left') {
      question.leftItems.push('');
      question.correctPairs.push([question.leftItems.length - 1, 0]);
    } else {
      question.rightItems.push('');
    }
  }

  function removeItem(side: 'left' | 'right', index: number) {
    if (side === 'left' && question.leftItems.length > 2) {
      question.leftItems.splice(index, 1);
      question.correctPairs = question.correctPairs.filter(([l]) => l !== index).map(([l, r]) => [l > index ? l - 1 : l, r]);
    } else if (side === 'right' && question.rightItems.length > 2) {
      question.rightItems.splice(index, 1);
      question.correctPairs = question.correctPairs.map(([l, r]) => [l, r > index ? r - 1 : r]);
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

  <div class="grid grid-cols-2 gap-4">
    <div>
      <label class="text-sm font-medium">Left Items</label>
      {#each question.leftItems as _, i}
        <div class="flex gap-2 items-center mt-2">
          <Input bind:value={question.leftItems[i]} placeholder={`Left ${i + 1}`} />
          <Button variant="outline" size="sm" onclick={() => removeItem('left', i)} disabled={question.leftItems.length <= 2}>
            Remove
          </Button>
        </div>
      {/each}
      <Button variant="outline" onclick={() => addItem('left')} class="mt-2">Add Left Item</Button>
    </div>

    <div>
      <label class="text-sm font-medium">Right Items</label>
      {#each question.rightItems as _, i}
        <div class="flex gap-2 items-center mt-2">
          <Input bind:value={question.rightItems[i]} placeholder={`Right ${i + 1}`} />
          <Button variant="outline" size="sm" onclick={() => removeItem('right', i)} disabled={question.rightItems.length <= 2}>
            Remove
          </Button>
        </div>
      {/each}
      <Button variant="outline" onclick={() => addItem('right')} class="mt-2">Add Right Item</Button>
    </div>
  </div>

  <div>
    <label class="text-sm font-medium">Points</label>
    <Input type="number" bind:value={question.points} min="1" />
  </div>

  <Button onclick={save}>Save Question</Button>
</div>