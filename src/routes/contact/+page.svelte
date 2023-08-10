<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Jesus Marron - Contact</title>
</svelte:head>

<h2 class="text-3xl mb-2 font-semibold">Let's Connect</h2>
<div class="p-4 mt-4">
	<h3 class="mr-2">
		<span class="text-primary-500">■</span> Email:
		<a
			href="mailto:hello@jesusmarron.com"
			target="_blank"
			class="underline decoration-2 decoration-primary-500 hover:text-primary-500"
			>hello@jesusmarron.com</a
		>
	</h3>

	<h3 class="mr-2">
		<span class="text-secondary-500">■</span> LinkedIn:
		<a
			href="https://www.linkedin.com/in/jesusmarron/"
			target="_blank"
			class="underline decoration-2 decoration-secondary-500 hover:text-secondary-500"
			>in/jesusmarron</a
		>
	</h3>

	<h3 class="mr-2">
		<span class="text-tertiary-500">■</span> Twitter:
		<a
			href="https://twitter.com/jmarron7_dev"
			target="_blank"
			class="underline decoration-2 decoration-tertiary-500 hover:text-tertiary-500"
			>@jmarron7_dev</a
		>
	</h3>

	<h3 class="mr-2">
		<span class="text-warning-500">■</span> Github:
		<a
			href="https://github.com/jmarron7"
			target="_blank"
			class="underline decoration-2 decoration-warning-500 hover:text-warning-500">@jmarron7</a
		>
	</h3>
</div>
