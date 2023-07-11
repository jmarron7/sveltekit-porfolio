<script lang="ts">
	export let profile_pic: string;
</script>

<div class="imageContainer">
	<img src={profile_pic} class="profilePic" alt="Profile headshot of Jesus." />
</div>

<style lang="postcss">
	.profilePic {
		width: 10rem;
		outline-style: solid;
		outline-offset: 4px;
		outline-color: #ffd100;
		border-radius: 9999px;
	}

	.imageContainer {
		padding-top: 10%;
	}
</style>
