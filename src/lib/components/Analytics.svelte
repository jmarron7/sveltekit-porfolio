<script setup lang="ts">
	import { page } from '$app/stores';
	const googleAnalyticsID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', googleAnalyticsID, {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}
</script>

<svelte:head>
	<script async src={'https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsID}'}>
	</script>
	<script>
		const googleAnalyticsID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', googleAnalyticsID);
	</script>
</svelte:head>
