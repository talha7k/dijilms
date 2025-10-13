<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Textarea } from '$lib/components/ui/textarea';
  import { Label } from '$lib/components/ui/label';
  import { Card } from '$lib/components/ui/card';
  import type { Submission } from '$lib/types/assessment';

  let { submissions = [], loading = false } = $props();

  const dispatch = createEventDispatcher<{ grade: { submissionId: string; score: number; feedback: string } }>();

  let score = $state(0);
  let feedback = $state('');

  function handleGrade(submissionId: string, score: number, feedback: string) {
    dispatch('grade', { submissionId, score, feedback });
  }
</script>

<div class="space-y-4">
  <h3 class="text-lg font-semibold">Submissions to Grade</h3>

  {#each submissions as submission (submission.id)}
    <Card class="p-4">
      <div class="space-y-2">
        <p><strong>Student:</strong> {submission.studentId}</p>
        <p><strong>Submitted:</strong> {submission.submittedAt.toLocaleDateString()}</p>

        {#if submission.submission}
          <div>
            <Label>Submission Text</Label>
            <div class="border p-2 rounded bg-gray-50">{submission.submission}</div>
          </div>
        {/if}

        {#if submission.fileUrl}
          <div>
            <Label>Attached File</Label>
            <a href={submission.fileUrl} target="_blank" class="text-blue-600 underline">Download File</a>
          </div>
        {/if}

        {#if submission.score !== undefined}
          <p><strong>Score:</strong> {submission.score}</p>
          {#if submission.feedback}
            <p><strong>Feedback:</strong> {submission.feedback}</p>
          {/if}
        {:else}
          <form onsubmit={(e) => { e.preventDefault(); handleGrade(submission.id, score, feedback); }} class="space-y-2">
            <div>
              <Label for="score-{submission.id}">Score</Label>
              <Input id="score-{submission.id}" type="number" bind:value={score} min="0" required />
            </div>
            <div>
              <Label for="feedback-{submission.id}">Feedback</Label>
              <Textarea id="feedback-{submission.id}" bind:value={feedback} />
            </div>
            <Button type="submit" disabled={loading}>Submit Grade</Button>
          </form>
        {/if}
      </div>
    </Card>
  {/each}
</div>