<script>
    export let info;

    /**
     * as linhas abaixo são uma tentativa de pegar a rota atual para montar o link dinâmico
     * assim como no
     * <a href="{currentPageId}/{info.slug}"
     * 
     * Foram alterados para versão hardcoded por conta da utilização deste componente em outros lugares que não funcionam dinamicamente 
    */
    // import { page } from '$app/state';

    // let currentPageId = page.route.id;

</script>

<a href="/modalidades/{info.slug}" class="card">
    <img src="{info.img}" alt="" width="120" height="120" />
    <h2>{info.name}</h2> 
</a>

<style>
    img {
        object-fit: cover;
        border-radius: 4px;
    }

    h2 {
        padding: 8px 16px;
    }

    .card {
        border: 1px solid var(--subtle);
        padding: 4px;
        display: flex;
        align-items: center;
        border-radius: 8px;
        flex-basis: calc(50% - 1rem);
    }

    a {
        color: #fff;
        transition: 250ms;
    }

    a:hover {
        border-color: var(--feat);
        transition: 125ms;
    }

    @media (max-width: 768px) {
        .card {
            flex-basis: 100%;
        }
    }
</style>