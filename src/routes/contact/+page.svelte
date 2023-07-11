<script>
	import skills from '$lib/Skills';
</script>

<svelte:head>
	<title>Jesus Marron — About</title>
</svelte:head>

<div class="container">
	<main>
		<h1>About</h1>
		<p>
			I'm a self taught software developer with over 2 years of personal frontend and backend
			experience. I have experience in systems and platform engineering with a focus in
			infrastructure automation and DevOps. Recently, I've been coding in Go(lang), Java,
			Typescript, and Sveltekit (and other web technologies), but I tend to learn and use the best
			technology and approach to best solve the problem I'm facing.
		</p>
		<h2>Skills</h2>
		{#each Object.entries(skills) as [section, technologies]}
			<ul>
				<li>
					<h4>
						{section}:
					</h4>
					<div class="list">
						{#each technologies as technology}
							<div>
								{technology}
							</div>
						{/each}
					</div>
				</li>
			</ul>
		{/each}
	</main>
</div>

<style>
	.container {
		width: 100%;
		max-width: 900px;
		display: flex;
		justify-content: center;
		box-sizing: border-box;
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		text-align: center;
	}

	main {
		max-width: 100%;
		min-height: 500px;
		text-align: left;
		margin-top: 30px;
		box-sizing: border-box;
	}

	h1 {
		font-weight: 700;
		margin: 0 0 50px 0;
		font-size: 36px;
		text-align: start;
	}

	h2 {
		margin-top: 50px;
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	@media (min-width: 900px) {
		.list {
			flex-direction: row;
		}
		main > h1 {
			font-size: 48px;
		}
	}
</style>
