<script>
    import { page } from '$app/state';
    import { modalidades } from '$lib/stores';

    import IntroSingle from '$lib/IntroSingle.svelte';
    import Card from '$lib/Card.svelte';
    import autoAnimate from "@formkit/auto-animate"

	let modalidade = page.params.slug;

    // let data = $modalidades.find(m => m.slug === modalidade);
    export let data;
    
</script>

<IntroSingle data={data} />

<section class="related">
    <div class="related__wrapper wrap">
        <h3>Outras modalidades</h3>

        <div class="list" use:autoAnimate>
            {#each $modalidades.filter(m => m.slug !== modalidade) as mod}
                <Card info={mod} />
            {/each}
        </div>
    </div>
</section>

<style>
    .related {
        margin-top: 40px;
    }

    .list {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        margin-top: 16px;
    }
</style>