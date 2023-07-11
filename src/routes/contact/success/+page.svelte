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

	.textInput {
		padding: 10px;
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
		background-color: #ffd100;
		transition: background-color 0.2s ease-in-out;
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

	.formContainer {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	@media (min-width: 900px) {
		main > h1 {
			font-size: 48px;
		}
	}
</style>
