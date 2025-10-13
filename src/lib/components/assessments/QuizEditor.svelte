<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Textarea } from '$lib/components/ui/textarea';
  import { Label } from '$lib/components/ui/label';
  import type { Question } from '$lib/types/assessment';

  export let questions: Question[] = [];
  export let loading = false;

  const dispatch = createEventDispatcher<{ save: Question[] }>();

  function addQuestion() {
    questions = [...questions, {
      id: crypto.randomUUID(),
      type: 'multiple-choice',
      question: '',
      options: [],
      correctAnswer: ''
    }];
  }

  function removeQuestion(index: number) {
    questions = questions.filter((_, i) => i !== index);
  }

  function addOption(qIndex: number) {
    questions[qIndex].options = [...(questions[qIndex].options || []), ''];
  }

  function removeOption(qIndex: number, oIndex: number) {
    questions[qIndex].options = questions[qIndex].options?.filter((_, i) => i !== oIndex);
  }

  function handleSubmit() {
    dispatch('save', questions);
  }
</script>

<div class="space-y-4">
  <div class="flex justify-between items-center">
    <h3 class="text-lg font-semibold">Quiz Questions</h3>
    <Button on:click={addQuestion} variant="outline">Add Question</Button>
  </div>

  {#each questions as question, qIndex}
    <div class="border p-4 rounded space-y-2">
      <div class="flex justify-between">
        <Label>Question {qIndex + 1}</Label>
        <Button on:click={() => removeQuestion(qIndex)} variant="destructive" size="sm">Remove</Button>
      </div>

      <select bind:value={question.type} class="w-full p-2 border rounded">
        <option value="multiple-choice">Multiple Choice</option>
        <option value="true-false">True/False</option>
        <option value="short-answer">Short Answer</option>
      </select>

      <Textarea bind:value={question.question} placeholder="Enter question" />

      {#if question.type === 'multiple-choice'}
        <div class="space-y-1">
          <Label>Options</Label>
          {#each question.options || [] as option, oIndex}
            <div class="flex gap-2">
              <Input bind:value={option} placeholder="Option {oIndex + 1}" />
              <Button on:click={() => removeOption(qIndex, oIndex)} variant="outline" size="sm">Remove</Button>
            </div>
          {/each}
          <Button on:click={() => addOption(qIndex)} variant="outline" size="sm">Add Option</Button>
        </div>
      {/if}

      <Input bind:value={question.correctAnswer} placeholder="Correct Answer" />
    </div>
  {/each}

  <Button on:click={handleSubmit} disabled={loading}>
    {#if loading}Saving...{:else}Save Questions{/if}
  </Button>
</div>