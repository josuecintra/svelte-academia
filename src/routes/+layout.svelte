<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import "@fontsource/roboto-condensed";
	import "@fontsource/roboto-condensed/700.css";
	import "@fontsource/cabin";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
