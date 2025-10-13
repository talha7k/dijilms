<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import Icon from '@iconify/svelte';
</script>

<section class="py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-14 text-center">
			<h2
				class="mb-6 max-w-max text-center text-4xl font-bold leading-[3.25rem] lg:mx-auto lg:max-w-2xl"
			>
				Transform Learning with Our Advanced LMS Platform
			</h2>
			<p class="mb-8 text-base font-normal lg:mx-auto lg:max-w-xl">
				A comprehensive Learning Management System designed for educators, students, and institutions with AI-powered tools and multi-role portals
			</p>
			<div
				class="mx-auto flex max-w-lg flex-col justify-center gap-5 md:max-w-2xl md:flex-row lg:max-w-full"
			>
				<Button size="lg" href="/features"
					>Explore Features</Button
				>

			</div>
		</div>

		<div
			class="mx-auto grid max-w-lg grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-full lg:grid-cols-4"
		>
			<!-- First Card (Double Width) -->
			<div class="md:col-span-2">
				<Card.Root>
					<Card.Content class="p-0">
						<div class="flex flex-row flex-wrap justify-between rounded-lg">
							<div class="w-full p-5 md:w-1/2 xl:p-8">
								<div class="block">
									<Icon icon="lucide:book-open" width={30} />
								</div>
								<h3 class="w-full py-5 text-lg font-bold xl:w-64 xl:text-xl">
									Comprehensive Course Management
								</h3>
								<p class="mb-8 w-full text-xs font-normal xl:w-64">
									Create, organize, and deliver engaging courses with multimedia content, modules, and learning paths tailored for modern education.
								</p>
								<Button variant="outline" href="/features">
									Explore Courses
									<span class="ml-2">→</span>
								</Button>
							</div>
							<div class="relative hidden h-auto md:block md:w-1/2">
								<img
									src="https://placehold.co/400x320"
									alt="Course Management Feature"
									class="ml-auto h-full object-cover"
								/>
							</div>
						</div>
					</Card.Content>
				</Card.Root>
			</div>

			<!-- Second Card -->
			<Card.Root>
				<Card.Content class="p-5 xl:p-8">
					<div class="block">
						<Icon icon="lucide:brain" width={30} />
					</div>
					<h3 class="py-5 text-lg font-bold xl:text-xl">AI-Powered Assessments</h3>
					<p class="mb-8 text-xs font-normal">
						Generate quizzes and assessments automatically with AI, including adaptive testing and instant grading for personalized learning.
					</p>
					<Button
						variant="outline"
						href="/features"
					>
						View Assessments
						<span class="ml-2">→</span>
					</Button>
				</Card.Content>
			</Card.Root>

			<!-- Third Card -->
			<Card.Root>
				<Card.Content class="p-5 xl:p-8">
					<div class="block">
						<Icon icon="lucide:users" width={30} />
					</div>
					<h3 class="py-5 text-lg font-bold xl:text-xl">Multi-Role Portals</h3>
					<p class="mb-8 text-xs font-normal">
						Dedicated dashboards for teachers, students, parents, and administrators with role-based access and communication tools.
					</p>
					<Button variant="outline" href="/features">
						Explore Portals
						<span class="ml-2">→</span>
					</Button>
				</Card.Content>
			</Card.Root>
		</div>
	</div>
</section>
