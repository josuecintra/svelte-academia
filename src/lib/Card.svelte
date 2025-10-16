<script>
    import { page } from '$app/state';
    export let info;

    let currentPageId = page.route.id;

    console.log(currentPageId);

    // console.log(info);

</script>

<a href="{currentPageId}/{info.slug}" class="card">
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
</style>