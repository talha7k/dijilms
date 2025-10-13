<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import Icon from '@iconify/svelte';
</script>

<section class="py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto mb-16 max-w-3xl xl:max-w-full">
			<span class="mb-2 block text-center text-sm uppercase lg:text-left">Features</span>
			<h2 class="text-center text-4xl font-semibold leading-[3.2rem] lg:text-left">
				Everything you need for <span class="text-primary">Modern Education</span>
			</h2>
		</div>

		<div
			class="mx-auto grid max-w-md grid-cols-1 gap-x-5 gap-y-5 sm:max-w-3xl sm:grid-cols-2 xl:max-w-full xl:grid-cols-4 xl:gap-x-8 xl:gap-y-8"
		>
			<!-- Course Management -->
			<Card.Root>
				<Card.Content class="p-4 xl:p-7">
					<div class="mb-6">
						<Icon icon="lucide:book-open" width={26} />
					</div>
					<h4 class="mb-2 text-base font-semibold capitalize">Course Management</h4>
					<p class="text-sm leading-5">
						Create and organize comprehensive courses with multimedia content, modules, and customizable learning paths
					</p>
				</Card.Content>
			</Card.Root>

			<!-- AI-Powered Assessments -->
			<Card.Root>
				<Card.Content class="p-4 xl:p-7">
					<div class="mb-6">
						<Icon icon="lucide:brain" width={26} />
					</div>
					<h4 class="mb-2 text-base font-semibold capitalize">AI-Powered Assessments</h4>
					<p class="text-sm leading-5">
						Generate quizzes automatically, adaptive testing, and instant AI-driven grading for personalized learning
					</p>
				</Card.Content>
			</Card.Root>

			<!-- Progress Tracking -->
			<Card.Root>
				<Card.Content class="p-4 xl:p-7">
					<div class="mb-6">
						<Icon icon="lucide:bar-chart" width={26} />
					</div>
					<h4 class="mb-2 text-base font-semibold capitalize">Advanced Progress Tracking</h4>
					<p class="text-sm leading-5">
						Detailed analytics and real-time progress monitoring for students, teachers, and parents
					</p>
				</Card.Content>
			</Card.Root>

			<!-- Multi-Role Portals -->
			<Card.Root>
				<Card.Content class="p-4 xl:p-7">
					<div class="mb-6">
						<Icon icon="lucide:users" width={26} />
					</div>
					<h4 class="mb-2 text-base font-semibold capitalize">Multi-Role Portals</h4>
					<p class="text-sm leading-5">
						Dedicated dashboards for teachers, students, parents, and administrators with role-based features
					</p>
				</Card.Content>
			</Card.Root>

			<!-- Communication Tools -->
			<Card.Root>
				<Card.Content class="p-4 xl:p-7">
					<div class="mb-6">
						<Icon icon="lucide:message-circle" width={26} />
					</div>
					<h4 class="mb-2 text-base font-semibold capitalize">Communication Tools</h4>
					<p class="text-sm leading-5">
						Built-in messaging, notifications, and collaboration features for seamless stakeholder communication
					</p>
				</Card.Content>
			</Card.Root>

			<!-- Gamification & Certifications -->
			<Card.Root>
				<Card.Content class="p-4 xl:p-7">
					<div class="mb-6">
						<Icon icon="lucide:trophy" width={26} />
					</div>
					<h4 class="mb-2 text-base font-semibold capitalize">Gamification & Certifications</h4>
					<p class="text-sm leading-5">
						Badges, leaderboards, and automated certification generation to motivate and recognize achievements
					</p>
				</Card.Content>
			</Card.Root>

			<!-- CTA Section -->
			<div class="relative mt-8 rounded-2xl sm:col-span-2 xl:mt-0">
				<p class="mb-9 text-center text-base leading-6 xl:text-left">
					Transform your educational institution with our comprehensive LMS platform
				</p>
				<div class="flex flex-col items-center justify-center gap-7 xl:flex-row xl:justify-start">
					<Button size="lg" href="/pricing">Get Started</Button>
					<span class="text-sm">*Free trial available</span>
				</div>
			</div>
		</div>
	</div>
</section>
