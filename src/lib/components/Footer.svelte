<script lang="ts">
	import Icon from '@iconify/svelte';

	const socialArr = [
		{
			name: 'Email',
			icon: 'fluent:mail-24-filled',
			link: 'mailto:hello@jesusmarron.com'
		},
		{
			name: 'GitHub',
			icon: 'uiw:github',
			link: 'https://github.com/jmarron7'
		},
		{
			name: 'LinkedIn',
			icon: 'akar-icons:linkedin-fill',
			link: 'https://www.linkedin.com/in/jesusmarron/'
		}
	];
</script>

<p class="mt-24 text-center">
	Made by Jesus Marron in
	<span class="text-error-500">Memphis, TN</span>.
</p>

<div class="text-center mt-4 mb-6">
	{#each socialArr as social}
		<a
			href={social.link}
			target="_blank"
			class="btn btn-sm mx-1 bg-transparent border-none btn-circle text-success-50 transition-all -outline-offset-4 hover:outline-offset-1"
			title={social.name}
		>
			<Icon icon={social.icon} class="inline text-xl" />
		</a>
	{/each}
</div>
