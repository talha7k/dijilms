<script lang="ts">
	import * as Collapsible from '$lib/components/ui/collapsible';
	import Icon from '@iconify/svelte';

	let { title = 'Frequently asked questions', faqs = [
		{
			question: 'How do I get started with the LMS?',
			answer:
				'Getting started is easy! Sign up for a free trial, invite your teachers and students, and start creating courses. Our onboarding wizard will guide you through the initial setup process.'
		},
		{
			question: 'Can I import existing course content?',
			answer:
				'Yes! Our LMS supports importing content from various formats including SCORM packages, PDFs, videos, and existing learning management systems. We also provide bulk upload tools for large content libraries.'
		},
		{
			question: 'How does the AI-powered assessment work?',
			answer:
				'Our AI analyzes your course content and automatically generates relevant quiz questions. It adapts difficulty based on student performance and provides instant feedback with detailed explanations.'
		},
		{
			question: 'What roles and permissions are available?',
			answer:
				'We offer dedicated portals for Administrators, Teachers, Students, and Parents. Each role has customized permissions and features tailored to their specific needs in the educational process.'
		},
		{
			question: 'How do parents access their child\'s progress?',
			answer:
				'Parents receive secure access through our Parent Portal where they can view real-time progress reports, grades, attendance, and communicate directly with teachers. All data is protected with enterprise-grade security.'
		},
		{
			question: 'Can I customize the learning paths?',
			answer:
				'Absolutely! Create personalized learning paths based on student performance, interests, or curriculum requirements. Our adaptive learning technology adjusts content difficulty and pacing automatically.'
		},
		{
			question: 'What reporting and analytics are available?',
			answer:
				'Comprehensive analytics include student performance tracking, course completion rates, engagement metrics, and predictive insights. Generate detailed reports for administrators, teachers, and parents.'
		},
		{
			question: 'How secure is student data?',
			answer:
				'We implement bank-level security with end-to-end encryption, GDPR compliance, and regular security audits. Student data is never shared with third parties, and we provide detailed privacy controls for all users.'
		}
	] } = $props();
</script>

<section class="py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16">
			<h2 class="font-manrope text-center text-4xl font-bold leading-[3.25rem]">
				{title}
			</h2>
		</div>

		<div class="columns-1 gap-8 max-lg:mx-auto max-lg:max-w-2xl lg:columns-2">
			{#each faqs as faq}
				<div class="mb-8 break-inside-avoid">
					<Collapsible.Root class="group rounded-xl border p-4 transition-all duration-500">
						<Collapsible.Trigger
							class="flex w-full items-center justify-between text-left text-lg leading-8"
						>
							<span>{faq.question}</span>
							<Icon
								icon="lucide:chevron-right"
								class="h-5 w-5 transition-transform group-data-[state=open]:rotate-90"
							/>
						</Collapsible.Trigger>
						<Collapsible.Content class="pt-4">
							<p class="leading-6">
								{faq.answer}
							</p>
						</Collapsible.Content>
					</Collapsible.Root>
				</div>
			{/each}
		</div>
	</div>
</section>
