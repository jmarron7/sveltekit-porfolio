<script>
	import projects from '$lib/Projects';
	import GameGuildImg from '$lib/assets/gameguild.png';
	import PixlImg from '$lib/assets/gopixl.png';
	import MGrepImg from '$lib/assets/mgrep.png';
	import ETLImg from '$lib/assets/etlproject.png';
</script>

<svelte:head>
	<title>Jesus Marron — Projects</title>
</svelte:head>

<div class="projectContainer">
	<div class="projects">
		<h1>Projects</h1>
		{#each projects as project}
			<div class="project">
				<div class="header">
					<h2>
						{project.title}
					</h2>
					<div class="techsContainer">
						Technologies:
						<div class="techs">
							{#each project.technologies as tech}
								<div>{tech}</div>
							{/each}
						</div>
					</div>
				</div>
				<div class="imageContainer">
					{#if project.title === 'Game Guild'}
						<img src={GameGuildImg} alt="Game Guild Project" />
					{:else if project.title === 'Pixl'}
						<img src={PixlImg} alt="Pixl Project" />
					{:else if project.title === 'Serverless Spotify ETL Pipeline'}
						<img src={ETLImg} alt="Serverless Spotify ETL Pipeline Project" />
					{:else}
						<img src={MGrepImg} alt="Multithreaded Grep Tool Project" />
					{/if}
				</div>
				<p>
					{project.description}
				</p>
				<a href={project.url} target="_blank" rel="noreferrer">
					<div class="button">Source Code</div>
				</a>
			</div>
		{/each}
	</div>
</div>

<style>
	.projectContainer {
		width: 100%;
		max-width: 700px;
		display: flex;
		justify-content: center;
		box-sizing: border-box;
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		text-align: center;
	}

	a {
		text-decoration: none;
	}

	.projectContainer .projects {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 40px;
		margin-top: 30px;
	}

	h1 {
		font-weight: 700;
		text-align: start;
	}

	h2 {
		display: flex;
		margin: 0;
	}

	img {
		width: 350px;
	}

	.project {
		text-align: start;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		color: #080c10;
		background: #ffd100;

		padding: 2rem;
		width: 100%;
		border-radius: 5px;
		transition: transform 0.2s ease-in-out;
		border-radius: 25px;
	}

	.project p {
		font-weight: 100;
		color: #0a0e13;
	}

	.projects {
		width: 100%;
		margin: 50px auto;
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: 1fr;
		margin-bottom: 10px;
	}

	.techsContainer {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.techs {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.techs > div {
		margin: 0 0 0 10px;
	}

	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #080c10;
		border: 2px solid #080c10;
		padding: 10px;
		cursor: pointer;
	}

	.button:hover {
		background-color: #ff6a13;
		transition: background-color 0.2s ease-in-out;
	}
	@media (min-width: 900px) {
		.projectContainer {
			padding: 0;
		}
		.projects > h1 {
			font-size: 48px;
			margin: 50px 0 0 0;
		}

		.projects {
			grid-template-columns: 1fr;
		}

		.projects .project {
			min-height: 200px;
		}
		.button {
			max-width: 200px;
		}
	}

	@media (min-width: 600px) {
		.projects {
			grid-template-columns: 1fr;
		}

		img {
			width: 600px;
		}
	}
</style>
