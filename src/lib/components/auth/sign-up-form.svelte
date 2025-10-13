<script lang="ts">
	import { firekitAuth, firekitDocMutations } from 'svelte-firekit';
	import { Input } from '../ui/input/index.js';
	import { signUpSchema } from '../../schemas/sign-up.js';
	import { toast } from 'svelte-sonner';
	import * as v from 'valibot';
	import Button from '../ui/button/button.svelte';
	import Checkbox from '../ui/checkbox/checkbox.svelte';
	import { goto } from '$app/navigation';

	let formData = $state({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		role: 'student',
		agreeToTerms: false
	});

	let errors = $state({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		role: '',
		agreeToTerms: ''
	});

	let isSubmitting = $state(false);

	async function handleSubmit(event: Event) {
		event.preventDefault();
		isSubmitting = true;

		// Clear previous errors
		errors = { firstName: '', lastName: '', email: '', password: '', role: '', agreeToTerms: '' };

		try {
			// Validate form data
			const result = v.safeParse(signUpSchema, formData);
			if (!result.success) {
				// Set validation errors
				for (const issue of result.issues) {
					const field = issue.path?.[0]?.key as keyof typeof errors;
					if (field && field in errors) {
						errors[field] = issue.message;
					}
				}
				return;
			}

			// Sign up
			const displayName = `${formData.firstName} ${formData.lastName}`;
			const userCredential = await firekitAuth.registerWithEmail(formData.email, formData.password, displayName);

			// Create user profile
			await firekitDocMutations.update(`users/${userCredential.user.uid}`, {
				uid: userCredential.user.uid,
				email: formData.email,
				displayName,
				firstName: formData.firstName,
				lastName: formData.lastName,
				isActive: true,
				lastLoginAt: new Date(),
				createdAt: new Date(),
				updatedAt: new Date(),
				emailNotifications: true,
				pushNotifications: true,
				theme: 'system',
				language: 'en',
				role: formData.role,
				permissions: [],
				metadata: {
					accountStatus: 'active'
				}
			});

			toast.success('Account created successfully');
			goto('/dashboard');
		} catch (error) {
			if (error instanceof Error) {
				toast.error(error.message);
			} else {
				toast.error('An error occurred');
			}
		} finally {
			isSubmitting = false;
		}
	}
</script>

<form onsubmit={handleSubmit} class="space-y-2">
	<div class="grid grid-cols-2 gap-4">
		<div class="space-y-2">
			<label for="firstName" class="text-sm font-medium">First Name</label>
			<Input
				id="firstName"
				bind:value={formData.firstName}
				placeholder="John"
				disabled={isSubmitting}
			/>
			{#if errors.firstName}
				<p class="text-sm text-destructive">{errors.firstName}</p>
			{/if}
		</div>
		<div class="space-y-2">
			<label for="lastName" class="text-sm font-medium">Last Name</label>
			<Input
				id="lastName"
				bind:value={formData.lastName}
				placeholder="Smith"
				disabled={isSubmitting}
			/>
			{#if errors.lastName}
				<p class="text-sm text-destructive">{errors.lastName}</p>
			{/if}
		</div>
	</div>
	<div class="space-y-2">
		<label for="email" class="text-sm font-medium">Email</label>
		<Input
			id="email"
			bind:value={formData.email}
			placeholder="you@email.com"
			disabled={isSubmitting}
		/>
		{#if errors.email}
			<p class="text-sm text-destructive">{errors.email}</p>
		{/if}
	</div>
	<div class="space-y-2">
		<label for="password" class="text-sm font-medium">Password</label>
		<Input
			id="password"
			bind:value={formData.password}
			placeholder="*********"
			type="password"
			disabled={isSubmitting}
		/>
		{#if errors.password}
			<p class="text-sm text-destructive">{errors.password}</p>
		{/if}
	</div>
	<div class="space-y-2">
		<label for="role" class="text-sm font-medium">Role</label>
		<select
			id="role"
			bind:value={formData.role}
			class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
			disabled={isSubmitting}
		>
			<option value="admin">Admin</option>
			<option value="teacher">Teacher</option>
			<option value="student">Student</option>
			<option value="parent">Parent</option>
			<option value="management">Management</option>
		</select>
		{#if errors.role}
			<p class="text-sm text-destructive">{errors.role}</p>
		{/if}
	</div>
	<div class="space-y-2">
		<div class="flex items-center gap-2">
			<Checkbox
				id="agreeToTerms"
				bind:checked={formData.agreeToTerms}
				disabled={isSubmitting}
			/>
			<label for="agreeToTerms" class="text-sm font-medium">
				By signing up, you agree to our
				<Button variant="link" href="/terms-and-condition" class="p-0 h-auto">
					Terms and Conditions
				</Button>
			</label>
		</div>
		{#if errors.agreeToTerms}
			<p class="text-sm text-destructive">{errors.agreeToTerms}</p>
		{/if}
	</div>
	<Button type="submit" class="w-full" disabled={isSubmitting}>
		{isSubmitting ? 'Signing up...' : 'Sign Up'}
	</Button>
</form>
