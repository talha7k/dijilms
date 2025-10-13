<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import Icon from '@iconify/svelte';
</script>

<section class="bg-muted-foreground/5 py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div
			class="mx-auto flex max-w-lg flex-wrap items-center justify-center gap-y-8 md:max-w-3xl md:flex-wrap md:gap-y-0 xl:max-w-full xl:flex-row xl:flex-nowrap xl:justify-between xl:gap-x-8"
		>
			<div class="w-full xl:w-1/3">
				<span class="mb-4 block text-sm font-medium text-primary">Success Stories</span>
				<h2 class="font-manrope mb-4 text-4xl font-bold leading-[3.25rem]">
					What educators are achieving
				</h2>
				<p class="mb-14 text-base">Real results, real impact, real educational success</p>
				<Button variant="outline" class="flex items-center gap-4" href="/features">
					View all features
					<span>→</span>
				</Button>
			</div>

			<div class="relative w-full md:-mt-20 xl:mt-0 xl:w-2/3">
				<div class="flex flex-col items-center gap-8 md:flex-row">
					<!-- First Card -->
					<div class="w-full xl:w-1/2">
						<Card.Root class="shadow-sm">
							<Card.Content class="p-8">
								<div class="flex items-center gap-2 text-amber-500">
									{#each Array(5) as _}
										<Icon icon="lucide:star" width={20} fill="currentColor" />
									{/each}
								</div>
								<p class="py-6 text-lg leading-8">
									"Our student engagement increased by 40% after implementing this LMS. The AI-powered assessments and progress tracking have transformed our teaching approach."
								</p>
								<div class="flex items-center">
									<div class="flex items-center gap-4">
										<Avatar.Root>
											<Avatar.Image src="https://placehold.co/24x24" alt="Dr. Fatima Al-Zahra" />
											<Avatar.Fallback>FA</Avatar.Fallback>
										</Avatar.Root>
										<h6 class="font-medium">Dr. Fatima Al-Zahra</h6>
									</div>
									<span
										class="ml-4 border-l border-solid border-border pl-4 text-sm font-medium text-primary"
									>
										School Principal
									</span>
								</div>
							</Card.Content>
						</Card.Root>
					</div>

					<!-- Right Column Cards -->
					<div class="grid w-full gap-8 xl:w-1/2">
						<Card.Root class="shadow-sm">
							<Card.Content class="p-8">
								<div class="flex items-center gap-2 text-amber-500">
									{#each Array(5) as _}
										<Icon icon="lucide:star" width={20} fill="currentColor" />
									{/each}
								</div>
								<p class="py-6 text-lg leading-8">
									"The multi-role portals make communication seamless between teachers, students, and parents. Progress tracking helps us identify and support struggling students early."
								</p>
								<div class="flex items-center">
									<div class="flex items-center gap-4">
										<Avatar.Root>
											<Avatar.Image src="https://placehold.co/24x24" alt="Ahmed Al-Saud" />
											<Avatar.Fallback>AA</Avatar.Fallback>
										</Avatar.Root>
										<h6 class="font-medium">Ahmed Al-Saud</h6>
									</div>
									<span
										class="ml-4 border-l border-solid border-border pl-4 text-sm font-medium text-primary"
									>
										Teacher
									</span>
								</div>
							</Card.Content>
						</Card.Root>

						<Card.Root class="shadow-sm">
							<Card.Content class="p-8">
								<div class="flex items-center gap-2 text-amber-500">
									{#each Array(5) as _}
										<Icon icon="lucide:star" width={20} fill="currentColor" />
									{/each}
								</div>
								<p class="py-6 text-lg leading-8">
									"As a parent, I love being able to track my child's progress in real-time and communicate directly with teachers. The gamification features keep my child motivated to learn."
								</p>
								<div class="flex items-center">
									<div class="flex items-center gap-4">
										<Avatar.Root>
											<Avatar.Image src="https://placehold.co/24x24" alt="Nora Al-Fayed" />
											<Avatar.Fallback>NA</Avatar.Fallback>
										</Avatar.Root>
										<h6 class="font-medium">Nora Al-Fayed</h6>
									</div>
									<span
										class="ml-4 border-l border-solid border-border pl-4 text-sm font-medium text-primary"
									>
										Parent
									</span>
								</div>
							</Card.Content>
						</Card.Root>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
