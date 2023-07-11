<script lang="ts">
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
	import { modalOpened } from '$lib/store';
	import ProfilePic from '$lib/components/ProfilePic.svelte';

	import { onMount, onDestroy } from 'svelte';

	let userData: any = {};
	let userPic: string;
	let userBio: string;

	const fetchUserData = async () => {
		const response = await fetch('https://api.github.com/users/jmarron7');
		if (response.ok) {
			userData = await response.json();
			userBio = userData.bio;
			userPic = userData.avatar_url;
		} else {
			console.error('Failed to fetch user data');
		}
	};

	onMount(() => {
		fetchUserData();
	});

	onDestroy(() => {
		// Clean up if needed
	});
</script>

<svelte:head>
	<title>Jesus Marron - Software Engineer</title>
</svelte:head>
<main>
	<ProfilePic profile_pic={userPic} />
	<h1>
		<strong>Hi, I'm Jesus✋</strong> <br />I'm a Fullstack Software Engineer
	</h1>
	<p>{userBio}</p>
	<a
		href="https://docs.google.com/document/d/1cBPLzRlOppfwnVhCGqaO9HGFl5P7BUtuXEzbUgLDEmA/edit?usp=sharing"
		target="_blank"
	>
		<div class="resumeButton">View Resume</div>
	</a>
	<div class="icons">
		<a href="mailto:hello@jesusmarron.com">
			<div class="icon">
				<FaEnvelope />
			</div>
		</a>

		<div class="icon">
			<a
				href="https://github.com/jmarron7"
				aria-label="GitHub"
				target="_blank"
				rel="noopener noreferrer"
				class="icon"
			>
				<FaGithub />
			</a>
		</div>
		<a
			href="https://www.linkedin.com/in/jesusmarron/"
			aria-label="Linkedin"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div class="icon">
				<FaLinkedin />
			</div>
		</a>
	</div>
</main>

<style>
	a {
		color: white;
		text-decoration: none;
	}

	main {
		text-align: center;
		padding: 0;
		margin: 0 auto;
		text-align: center;

		display: flex;
		flex-direction: column;
		height: calc(100vh - 80px - 88px);
		justify-content: center;
		align-items: center;
	}

	h1 {
		font-weight: 700;
	}

	main > h1 {
		margin: 10px 10px 0;
		font-size: 36px;
	}

	.resumeButton {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #ffd100;
		color: #080c10;
		border: 2px solid #080c10;
		padding: 10px;
		cursor: pointer;
		transition: color 0.2s ease-in-out;
	}

	.resumeButton:hover {
		background-color: #ff6a13;
		transition: background-color 0.2s ease-in-out;
	}

	.icons {
		display: flex !important;
		justify-content: center !important;
		align-items: center;
		gap: 20px;
		cursor: pointer;
		font-size: 30px;
		display: flex;
		justify-content: space-between;
		max-width: 200px;
		margin: 25px auto 0;
	}

	.icon {
		cursor: pointer;
		transition: color 0.2s ease-in-out;
		width: 40px;
	}
	.icon:hover {
		color: #ffd100;
	}

	@media (min-width: 900px) {
		main > h1 {
			font-size: 48px;
		}
	}

	@media (min-width: 600px) {
		main {
			max-width: none;
		}
	}
</style>
