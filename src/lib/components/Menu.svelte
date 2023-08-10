<script lang="ts">
	import { page } from '$app/stores';

	const menuItems = [
		{
			name: 'Home',
			link: '/'
		},
		{
			name: 'About',
			link: '/about'
		},
		{
			name: 'Experience',
			link: '/experience'
		},
		{
			name: 'Skills',
			link: '/skills'
		},
		{
			name: 'Projects',
			link: '/projects'
		},
		{
			name: 'Contact',
			link: '/contact'
		}
	];
</script>

<div class="grid md:grid-cols-7 sm:grid-cols-4 grid-cols-3 gap-2 mt-4 top-0 mb-8 w-full">
	{#each menuItems as item}
		<a
			href={item.link}
			class="h-8 col-span-1 flex items-center justify-center md:transition-all {$page.url
				.pathname === item.link
				? 'bg-primary-500 text-surface-900 text-center'
				: ''} rounded hover:bg-primary-500 hover:text-surface-900"
		>
			{item.name}
		</a>
	{/each}
</div>
