<script lang="ts">
	const projectItems = [
		{
			name: 'Project 1',
			description:
				'Deserunt reprehenderit adipisicing aliquip deserunt ex enim esse in nulla tempor incididunt cillum elit.',
			tech: 'Go, Sveltekit, Typescript, PostgreSQL',
			selectedClass: 'bg-primary-500 text-surface-900 text-center',
			hoverClass: 'hover:bg-primary-500 hover:text-surface-900',
			underlineColor: 'decoration-primary-500'
		},
		{
			name: 'Project 2',
			description:
				'Deserunt reprehenderit adipisicing aliquip deserunt ex enim esse in nulla tempor incididunt cillum elit.',
			tech: 'Go, Sveltekit, Typescript, PostgreSQL',
			selectedClass: 'bg-secondary-500 text-surface-900 text-center',
			hoverClass: 'hover:bg-secondary-500 hover:text-surface-900',
			underlineColor: 'decoration-secondary-500'
		},
		{
			name: 'Project 3',
			description:
				'Deserunt reprehenderit adipisicing aliquip deserunt ex enim esse in nulla tempor incididunt cillum elit.',
			tech: 'Go, Sveltekit, Typescript, PostgreSQL',
			selectedClass: 'bg-tertiary-500 text-surface-900 text-center',
			hoverClass: 'hover:bg-tertiary-500 hover:text-surface-900',
			underlineColor: 'decoration-tertiary-500'
		},
		{
			name: 'Project 4',
			description:
				'Deserunt reprehenderit adipisicing aliquip deserunt ex enim esse in nulla tempor incididunt cillum elit.',
			tech: 'Go, Sveltekit, Typescript, PostgreSQL',
			selectedClass: 'bg-error-500 text-surface-900 text-center',
			hoverClass: 'hover:bg-error-500 hover:text-surface-900',
			underlineColor: 'decoration-error-500'
		}
	];
</script>

<div class="grid md:grid-cols-2 sm:grid-cols-1 gap-6 mt-4 top-0 mb-8 w-full">
	{#each projectItems as item}
		<div
			class="h-60 lg:w-96 md:w-80 col-span-1 flex items-center justify-center border-2 md:transition-all rounded underline decoration-2 {item.underlineColor} {item.hoverClass}"
		>
			{item.name}
			<br />
			{item.description}
			<br />
			{item.tech}
		</div>
	{/each}
</div>
