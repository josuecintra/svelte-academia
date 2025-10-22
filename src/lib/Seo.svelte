<script>
	export let title = "Default SEO Title";
    export let description = "Default description for SEO purposes.";

    let siteName = "Academia Local";
    let separator = " | ";

</script>

<svelte:head>
    <title>{title}{separator}{siteName}</title>
    <meta name="description" content="{description}" />
</svelte:head>