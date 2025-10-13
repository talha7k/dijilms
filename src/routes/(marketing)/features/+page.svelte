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
						<Icon icon="lucide:book-open" width={26} class="text-primary" />
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
						<Icon icon="lucide:brain" width={26} class="text-primary" />
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
						<Icon icon="lucide:bar-chart" width={26} class="text-primary" />
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
						<Icon icon="lucide:users" width={26} class="text-primary" />
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
						<Icon icon="lucide:message-circle" width={26} class="text-primary" />
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
						<Icon icon="lucide:trophy" width={26} class="text-primary" />
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

		<!-- Detailed Feature Explanations -->
		<div class="mt-24 space-y-16">
			<!-- Course Management Detail -->
			<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
				<div>
					<h3 class="text-2xl font-bold mb-4">Comprehensive Course Management</h3>
					<p class="text-lg text-muted-foreground mb-6">
						Create engaging courses with multimedia content, structured modules, and customizable learning paths. Our intuitive course builder allows educators to design interactive lessons that adapt to different learning styles.
					</p>
					<ul class="space-y-2">
						<li class="flex items-center gap-2">
							<Icon icon="lucide:check" class="h-5 w-5 text-primary" />
							<span>Multimedia content support (videos, documents, quizzes)</span>
						</li>
						<li class="flex items-center gap-2">
							<Icon icon="lucide:check" class="h-5 w-5 text-primary" />
							<span>Modular course structure with prerequisites</span>
						</li>
						<li class="flex items-center gap-2">
							<Icon icon="lucide:check" class="h-5 w-5 text-primary" />
							<span>Customizable learning paths and certificates</span>
						</li>
					</ul>
				</div>
				<div class="bg-muted rounded-lg p-8">
					<img src="https://placehold.co/500x300" alt="Course Management Interface" class="w-full rounded" />
				</div>
			</div>

			<!-- AI-Powered Assessments Detail -->
			<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
				<div class="order-2 lg:order-1 bg-muted rounded-lg p-8">
					<img src="https://placehold.co/500x300" alt="AI Assessment Tools" class="w-full rounded" />
				</div>
				<div class="order-1 lg:order-2">
					<h3 class="text-2xl font-bold mb-4">AI-Powered Assessments</h3>
					<p class="text-lg text-muted-foreground mb-6">
						Revolutionary assessment tools powered by AI to create personalized quizzes, provide instant feedback, and adapt to student learning patterns for optimal educational outcomes.
					</p>
					<ul class="space-y-2">
						<li class="flex items-center gap-2">
							<Icon icon="lucide:check" class="h-5 w-5 text-primary" />
							<span>Automatic quiz generation from course content</span>
						</li>
						<li class="flex items-center gap-2">
							<Icon icon="lucide:check" class="h-5 w-5 text-primary" />
							<span>Adaptive testing based on student performance</span>
						</li>
						<li class="flex items-center gap-2">
							<Icon icon="lucide:check" class="h-5 w-5 text-primary" />
							<span>Instant AI-driven grading and feedback</span>
						</li>
					</ul>
				</div>
			</div>

			<!-- Progress Tracking Detail -->
			<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
				<div>
					<h3 class="text-2xl font-bold mb-4">Advanced Progress Tracking</h3>
					<p class="text-lg text-muted-foreground mb-6">
						Comprehensive analytics and real-time progress monitoring to track student performance, identify learning gaps, and provide data-driven insights for educators and parents.
					</p>
					<ul class="space-y-2">
						<li class="flex items-center gap-2">
							<Icon icon="lucide:check" class="h-5 w-5 text-primary" />
							<span>Real-time progress dashboards</span>
						</li>
						<li class="flex items-center gap-2">
							<Icon icon="lucide:check" class="h-5 w-5 text-primary" />
							<span>Detailed performance analytics</span>
						</li>
						<li class="flex items-center gap-2">
							<Icon icon="lucide:check" class="h-5 w-5 text-primary" />
							<span>Early intervention alerts</span>
						</li>
					</ul>
				</div>
				<div class="bg-muted rounded-lg p-8">
					<img src="https://placehold.co/500x300" alt="Progress Tracking Dashboard" class="w-full rounded" />
				</div>
			</div>

			<!-- Multi-Role Portals Detail -->
			<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
				<div class="order-2 lg:order-1 bg-muted rounded-lg p-8">
					<img src="https://placehold.co/500x300" alt="Multi-Role Portals" class="w-full rounded" />
				</div>
				<div class="order-1 lg:order-2">
					<h3 class="text-2xl font-bold mb-4">Multi-Role Portals</h3>
					<p class="text-lg text-muted-foreground mb-6">
						Dedicated interfaces for teachers, students, parents, and administrators, each with role-specific features and seamless communication tools for collaborative education.
					</p>
					<ul class="space-y-2">
						<li class="flex items-center gap-2">
							<Icon icon="lucide:check" class="h-5 w-5 text-primary" />
							<span>Teacher dashboard with course management</span>
						</li>
						<li class="flex items-center gap-2">
							<Icon icon="lucide:check" class="h-5 w-5 text-primary" />
							<span>Student portal with personalized learning</span>
						</li>
						<li class="flex items-center gap-2">
							<Icon icon="lucide:check" class="h-5 w-5 text-primary" />
							<span>Parent access to child progress</span>
						</li>
					</ul>
				</div>
			</div>

			<!-- Communication Tools Detail -->
			<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
				<div>
					<h3 class="text-2xl font-bold mb-4">Communication Tools</h3>
					<p class="text-lg text-muted-foreground mb-6">
						Built-in messaging, notifications, and collaboration features that facilitate seamless communication between all stakeholders in the educational process.
					</p>
					<ul class="space-y-2">
						<li class="flex items-center gap-2">
							<Icon icon="lucide:check" class="h-5 w-5 text-primary" />
							<span>Direct messaging between teachers and parents</span>
						</li>
						<li class="flex items-center gap-2">
							<Icon icon="lucide:check" class="h-5 w-5 text-primary" />
							<span>Automated progress notifications</span>
						</li>
						<li class="flex items-center gap-2">
							<Icon icon="lucide:check" class="h-5 w-5 text-primary" />
							<span>Group discussion forums</span>
						</li>
					</ul>
				</div>
				<div class="bg-muted rounded-lg p-8">
					<img src="https://placehold.co/500x300" alt="Communication Tools" class="w-full rounded" />
				</div>
			</div>

			<!-- Gamification & Certifications Detail -->
			<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
				<div class="order-2 lg:order-1 bg-muted rounded-lg p-8">
					<img src="https://placehold.co/500x300" alt="Gamification Features" class="w-full rounded" />
				</div>
				<div class="order-1 lg:order-2">
					<h3 class="text-2xl font-bold mb-4">Gamification & Certifications</h3>
					<p class="text-lg text-muted-foreground mb-6">
						Engage students with badges, leaderboards, and achievement systems while providing automated certification generation to recognize and reward learning milestones.
					</p>
					<ul class="space-y-2">
						<li class="flex items-center gap-2">
							<Icon icon="lucide:check" class="h-5 w-5 text-primary" />
							<span>Badges and achievement systems</span>
						</li>
						<li class="flex items-center gap-2">
							<Icon icon="lucide:check" class="h-5 w-5 text-primary" />
							<span>Leaderboards and competitions</span>
						</li>
						<li class="flex items-center gap-2">
							<Icon icon="lucide:check" class="h-5 w-5 text-primary" />
							<span>Automated certificate generation</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
