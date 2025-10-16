<script>
    import { page } from '$app/state';
    import { modalidades } from '$lib/stores';

    import IntroSingle from '$lib/IntroSingle.svelte';

	let modalidade = page.params.slug;

    let data = $modalidades.find(m => m.slug === modalidade);
    
    console.log(data);

</script>

<IntroSingle {data} />