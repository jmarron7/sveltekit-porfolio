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
			repoUrl: 'https://github.com/jmarron7/game-guild',
			demoUrl: '',
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
			repoUrl: 'https://github.com/jmarron7/go-pixl',
			demoUrl: '',
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
			repoUrl: 'https://github.com/jmarron7/spotify-etl-project',
			demoUrl: '',
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
			repoUrl: 'https://github.com/jmarron7/go-mgrep',
			demoUrl: '',
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
						<div class="rounded bg-surface-400/20 hover:bg-surface-50 py-1 px-4 mb-2 mx-2">
							{tech}
						</div>
					{/each}
				</div>
			</div>
			<div class="h-[2px] bg-surface-50/20 w-[96%]" />
			<div class="p-4 flex justify-start items-center space-x-4">
				<div>
					<a href={project.repoUrl} target="_blank" class="underline decoration-2">Source Code</a>
				</div>
			</div>
		</div>
	{/each}
</div>
