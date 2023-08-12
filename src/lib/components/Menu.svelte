<script lang="ts">
	import { page } from '$app/stores';

	const menuItems = [
		{
			name: 'Home',
			link: '/',
			selectedClass: 'bg-primary-500 text-surface-900 text-center',
			hoverClass: 'hover:bg-primary-500 hover:text-surface-900',
			underlineColor: 'decoration-primary-500'
		},
		{
			name: 'About',
			link: '/about',
			selectedClass: 'bg-secondary-500 text-surface-900 text-center',
			hoverClass: 'hover:bg-secondary-500 hover:text-surface-900',
			underlineColor: 'decoration-secondary-500'
		},
		{
			name: 'Experience',
			link: '/experience',
			selectedClass: 'bg-tertiary-500 text-surface-900 text-center',
			hoverClass: 'hover:bg-tertiary-500 hover:text-surface-900',
			underlineColor: 'decoration-tertiary-500'
		},
		{
			name: 'Skills',
			link: '/skills',
			selectedClass: 'bg-error-500 text-surface-900 text-center',
			hoverClass: 'hover:bg-error-500 hover:text-surface-900',
			underlineColor: 'decoration-error-500'
		},
		{
			name: 'Projects',
			link: '/projects',
			selectedClass: 'bg-warning-500 text-surface-900 text-center',
			hoverClass: 'hover:bg-warning-500 hover:text-surface-900',
			underlineColor: 'decoration-warning-500'
		},
		{
			name: 'Contact',
			link: '/contact',
			selectedClass: 'bg-success-500 text-surface-900 text-center',
			hoverClass: 'hover:bg-success-500 hover:text-surface-900',
			underlineColor: 'decoration-success-500'
		}
	];
</script>

<div class="grid md:grid-cols-7 sm:grid-cols-4 grid-cols-3 gap-2 mt-4 top-0 mb-8 w-full">
	{#each menuItems as item}
		<a
			href={item.link}
			class="h-8 col-span-1 flex items-center justify-center md:transition-all {$page.url
				.pathname === item.link ||
			($page.url.pathname === '/' && item.link === '/')
				? item.selectedClass
				: ''} rounded underline decoration-2 {item.underlineColor} {item.hoverClass}"
		>
			{item.name}
		</a>
	{/each}
</div>
