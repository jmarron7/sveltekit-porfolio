<script context="module">
	export const prerender = true;
</script>

<script>
	const handleSubmit = (e) => {
		e.preventDefault();
		let myForm = document.getElementById('contact-form-submission');
		let formData = new FormData(myForm);
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(formData).toString()
		})
			.then(() => console.log('Form successfully submitted'))
			.catch((error) => alert(error));
	};
</script>

<svelte:head>
	<title>Jesus Marron — Contact</title>
</svelte:head>

<div class="container">
	<main>
		<h1>Get in touch</h1>
		<form
			name="contact-form-submission"
			method="POST"
			netlify
			netlify-honeypot="bot-field"
			class="formContainer"
			on:submit={handleSubmit}
		>
			<input type="hidden" name="form-name" value="contact-form-submission" />
			<label for="name">Name</label>
			<input name="name" id="name" required placeholder="Your Name" type="text" class="textInput" />
			<label for="email">Email</label>
			<input
				name="email"
				id="email"
				required
				placeholder="Email Address"
				type="email"
				class="textInput"
			/>
			<label for="message">Message</label>
			<textarea
				name="message"
				id="message"
				required
				placeholder="What would you like to talk about?"
				class="textInput"
			/>
			<input type="submit" value="Submit" class="button" />
		</form>
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
