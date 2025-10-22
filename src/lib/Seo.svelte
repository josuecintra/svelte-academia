<script>
	export let title = "Default SEO Title";
    export let description = "Default description for SEO purposes.";

    let siteName = "Academia Local";
    let separator = " | ";

</script>

<svelte:head>
    <title>{title}{separator}{siteName}</title>
    <meta name="description" content="{description}" />

    <!-- JSON-LD-->
    {@html `<script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "WebPage",
        "name": "${title || name}",
        "description": "${description || siteDescription}",
        "publisher": {
            "@type": "ProfilePage",
            "name": "Academia Local's Website"
        }
    }
    </script>`}

</svelte:head>