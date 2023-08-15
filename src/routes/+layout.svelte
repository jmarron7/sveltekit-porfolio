<script lang="ts">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Analytics from '$lib/components/Analytics.svelte';
</script>

<main class="max-w-4xl m-auto text-success-50">
	<Header />
	<Analytics />
	<div class="px-10">
		<slot />
	</div>

	<Footer />
</main>
