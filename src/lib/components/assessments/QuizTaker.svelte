<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Textarea } from '$lib/components/ui/textarea';
  import { Label } from '$lib/components/ui/label';
  import type { Question, Answer } from '$lib/types/assessment';

  let { questions = [], loading = false } = $props();

  const dispatch = createEventDispatcher<{ submit: Answer[] }>();

  let answers = $state<Answer[]>(questions.map(q => ({ questionId: q.id, answer: '' })));

  function handleSubmit() {
    dispatch('submit', answers);
  }
</script>

<div class="space-y-6">
  {#each questions as question, index}
    <div class="border p-4 rounded">
      <Label class="font-semibold">{question.question}</Label>

      {#if question.type === 'multiple-choice'}
        <div class="mt-2 space-y-1">
          {#each question.options || [] as option}
            <label class="flex items-center gap-2">
              <input
                type="radio"
                name="question-{question.id}"
                value={option}
                bind:group={answers[index].answer}
              />
              {option}
            </label>
          {/each}
        </div>
      {:else if question.type === 'true-false'}
        <div class="mt-2 space-y-1">
          <label class="flex items-center gap-2">
            <input
              type="radio"
              name="question-{question.id}"
              value="true"
              bind:group={answers[index].answer}
            />
            True
          </label>
          <label class="flex items-center gap-2">
            <input
              type="radio"
              name="question-{question.id}"
              value="false"
              bind:group={answers[index].answer}
            />
            False
          </label>
        </div>
      {:else if question.type === 'short-answer'}
        <Textarea
          bind:value={answers[index].answer}
          placeholder="Your answer"
          class="mt-2"
        />
      {/if}
    </div>
  {/each}

  <Button onclick={handleSubmit} disabled={loading}>
    {#if loading}Submitting...{:else}Submit Quiz{/if}
  </Button>
</div>