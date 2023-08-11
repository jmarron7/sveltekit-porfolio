<script lang="ts">
	import GameGuildImg from '$lib/assets/gameguild.png';
	import ETLProjectImg from '$lib/assets/etlproject.png';
	import PixlImg from '$lib/assets/gopixl.png';
	import MGrepImg from '$lib/assets/mgrep.png';

	const projects = [
		{
			title: 'GameGuild',
			description:
				'WebApp using RAWG API videogame data built with Typescript, React, and ChakraUI with filtering and sorting capabilities',
			tech: ['React', 'Typescript', 'ChakraUI', 'REST API'],
			image: GameGuildImg,
			repoLink: '',
			demoLink: '',
			selectedClass: 'bg-primary-500 text-surface-900 text-center',
			hoverClass: 'hover:bg-primary-500 hover:border-primary-500 hover:text-surface-900',
			underlineColor: 'decoration-primary-500'
		},
		{
			title: 'Pixl',
			description:
				'Cross platform pixel art editor written in Go and Fyne toolkit with functionality to open/save created files, select color via color picker, and more',
			tech: ['Go', 'Fyne'],
			image: PixlImg,
			selectedClass: 'bg-secondary-500 text-surface-900 text-center',
			hoverClass: 'hover:bg-secondary-500 hover:border-secondary-500 hover:text-surface-900',
			underlineColor: 'decoration-secondary-500'
		},
		{
			title: 'Serverless Spotify ETL Pipeline',
			description:
				'Python ETL (Extract, Transform, Load) pipeline using the Spotify API on AWS Serverless Architecture',
			tech: ['Python', 'AWS', 'REST API'],
			image: ETLProjectImg,
			selectedClass: 'bg-tertiary-500 text-surface-900 text-center',
			hoverClass: 'hover:bg-tertiary-500 hover:border-tertiary-500 hover:text-surface-900',
			underlineColor: 'decoration-tertiary-500'
		},
		{
			title: 'Multithreaded Grep Tool',
			description:
				'Terminal CLI application of a multithreaded grep implementation written in Go for substring searching within files',
			tech: ['Go'],
			image: MGrepImg,
			selectedClass: 'bg-error-500 text-surface-900 text-center',
			hoverClass: 'hover:bg-error-500 hover:border-error-500 hover:text-surface-900',
			underlineColor: 'decoration-error-500'
		}
	];
</script>

<div class="grid md:grid-cols-2 sm:grid-cols-1 gap-6 mt-4 top-0 mb-8 w-full">
	{#each projects as project}
		<div
			class="overflow-hidden min-h-60 lg:w-96 md:w-80 col-span-1 flex flex-col items-center justify-center border-2 md:transition-all rounded decoration-2 {project.hoverClass}"
		>
			<div>
				<img src={project.image} alt={project.title} class="w-full aspect-[21/9]" />
			</div>
			<div class="p-4 space-y-4">
				<h4 class="h4">{project.title}</h4>

				<article>
					<p>
						{project.description}
					</p>
				</article>

				<div class="flex flex-row flex-wrap w-full">
					{#each project.tech as tech}
						<div class="rounded bg-surface-400/20 hover:bg-surface-50 p-1 mb-2 mx-2">
							{tech}
						</div>
					{/each}
				</div>
			</div>
			<hr class="opacity-50" />
		</div>
	{/each}
</div>
