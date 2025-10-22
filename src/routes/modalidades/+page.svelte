<script>
	import Card from "$lib/Card.svelte";
	import Intro from "$lib/Intro.svelte";
	import Seo from "$lib/Seo.svelte";
    import { modalidades } from "$lib/stores.js"; 

    // $: console.log($modalidades);
</script>

<Seo 
    title="Modalidades" 
    description="Explore as diversas modalidades de treino que oferecemos para ajudar você a alcançar seus objetivos de fitness."
/>

<Intro 
    title="Temos a modalidade certa para você"
    content="Escolha entre uma variedade de opções para alcançar seus objetivos de fitness."
    img="alongamento"
    icon="weight"
/>

<section class="modalidades">
    <div class="modalidades__wrapper wrap">
        {#each $modalidades as modalidade}
            <Card info={modalidade} />            
        {/each}
    </div>
</section>

<style>
    .modalidades {
        margin-top: 60px;
    }

    .modalidades__wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
    }
</style>