<script setup>
	import { page } from '$app/stores';
	const googleAnalyticsID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;

	if (typeof gtag !== 'undefined') {
		window.dataLayer = window.dataLayer || [];

		function gtag(...args) {
			dataLayer.push(...args);
		}

		gtag('js', new Date());
		gtag('config', googleAnalyticsID, {
			page_title: document.title,
			page_path: $page.url.pathname
		});
	}
</script>

<svelte:head>
	<script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsID}`}></script>
	<script>
		if (typeof gtag !== 'undefined') {
			const googleAnalyticsID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;

			window.dataLayer = window.dataLayer || [];

			function gtag(...args) {
				dataLayer.push(...args);
			}

			gtag('js', new Date());
			gtag('config', googleAnalyticsID);
		}
	</script>
</svelte:head>
