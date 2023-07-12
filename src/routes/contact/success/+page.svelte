<script context="module">
	export const prerender = true;
</script>

<svelte:head>
	<title>Jesus Marron — Contact</title>
</svelte:head>

<div class="container">
	<main>
		<h1>Submitted Successfully</h1>
		<h3>Thank you for submitting a form!</h3>
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

		margin: 0 auto;
		text-align: center;
	}

	main {
		max-width: 100%;
		min-height: 500px;
		text-align: left;
		margin-top: 20px;
		box-sizing: border-box;
	}

	h1 {
		font-weight: 700;
		margin: 0 0 30px 0;
		font-size: 36px;
		text-align: start;
	}

	@media (min-width: 900px) {
		main > h1 {
			font-size: 48px;
		}
	}
</style>
