<script lang="ts">
	import { spring } from 'svelte/motion';
	import Icon from '@iconify/svelte';
	import avatar from '$lib/assets/profilepic.jpg';
	import Menu from './Menu.svelte';

	const y = spring(0, {
		stiffness: 1,
		damping: 1
	});
</script>

<svelte:window
	on:scroll={(e) => {
		const scrollY = window.scrollY;
		$y = scrollY * 0.5;
	}}
/>

<div class="relative group">
	<img
		src="https://images.unsplash.com/photo-1587608684699-8afac4c6c88c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
		alt=""
		class="h-60 rounded-t-none -z-50 relative w-full object-cover rounded"
		style="object-position: 50% {$y}px"
	/>
</div>

<div class="-mt-20 px-10 z-10">
	<div
		class="w-28 rounded-full relative z-50 overflow-hidden border-solid border-2 border-surface-50"
	>
		<img src={avatar} alt="avatar" />
	</div>

	<div class="rounded p-4 -m-4">
		<h1 class="text-3xl mt-2 font-semibold flex items-center">
			Jesus Marron

			<span class="align-middle text-base ml-2 text-surface-400"> (he/him) </span>
		</h1>

		<h2 class="text-lg mt-2 mb-4">Fullstack Software Engineer</h2>

		<div class="">
			<div class="inline-flex items-center mr-4 mb-2">
				<Icon icon="fluent:location-12-filled" class="text-lg mr-2" />
				<p class="text-surface-400 text-sm">Memphis, TN</p>
			</div>

			<div class="inline-flex items-center mr-4 mb-2">
				<Icon icon="fluent:mail-16-filled" class="text-lg mr-2" />
				<p
					class="text-surface-400 text-sm hover:underline hover:decoration-2 hover:decoration-primary-500"
				>
					<a href="mailto:hello@jesusmarron.com"> hello@jesusmarron.com </a>
				</p>
			</div>
		</div>
		<Menu />
	</div>
</div>
