<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import "@fontsource/roboto-condensed";
	import "@fontsource/roboto-condensed/700.css";
	import "@fontsource/cabin";
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import Credits from '$lib/Credits.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>


<div class="layout">	
	<Header />

	<main class="main">
		{@render children?.()}
	</main>
	
	<div class="footer__container">
		<Footer />		
	</div>
	
	<div class="credits__container">		
		<Credits />		
	</div>
</div>

<style>
	.layout {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	/* .main {
		flex: 1;
	} */

	.footer__container {
		margin-bottom: auto;
	}

	.credits__container {
		margin-bottom: -70px;
	}
</style>