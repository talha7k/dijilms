<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Textarea } from '$lib/components/ui/textarea';
  import { Label } from '$lib/components/ui/label';
  import type { Question } from '$lib/types/assessment';

  let { questions: initialQuestions = [], loading = false } = $props();

  const dispatch = createEventDispatcher<{ save: Question[] }>();

  let questions = $state(initialQuestions);

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
    questions = questions.filter((_: Question, i: number) => i !== index);
  }

  function addOption(qIndex: number) {
    questions[qIndex].options = [...(questions[qIndex].options || []), ''];
  }

  function removeOption(qIndex: number, oIndex: number) {
    questions[qIndex].options = questions[qIndex].options?.filter((_: string, i: number) => i !== oIndex);
  }

  function handleSubmit() {
    dispatch('save', questions);
  }
</script>

<div class="space-y-4">
  <div class="flex justify-between items-center">
    <h3 class="text-lg font-semibold">Quiz Questions</h3>
    <Button onclick={addQuestion} variant="outline">Add Question</Button>
  </div>

  {#each questions as question, qIndex}
    <div class="border p-4 rounded space-y-2">
      <div class="flex justify-between">
        <Label>Question {qIndex + 1}</Label>
        <Button onclick={() => removeQuestion(qIndex)} variant="destructive" size="sm">Remove</Button>
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
              <Input bind:value={questions[qIndex].options[oIndex]} placeholder="Option {oIndex + 1}" />
              <Button onclick={() => removeOption(qIndex, oIndex)} variant="outline" size="sm">Remove</Button>
            </div>
          {/each}
          <Button onclick={() => addOption(qIndex)} variant="outline" size="sm">Add Option</Button>
        </div>
      {/if}

      <Input bind:value={question.correctAnswer} placeholder="Correct Answer" />
    </div>
  {/each}

  <Button onclick={handleSubmit} disabled={loading}>
    {#if loading}Saving...{:else}Save Questions{/if}
  </Button>
</div>