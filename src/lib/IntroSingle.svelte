<script>
    export let data;
    console.log(data);
</script>

<div class="intro__wrapper wrapper">
    <div class="intro__content">
        <h2>{data.name}</h2>
        <p>{data.content}</p>
    </div>
    <div class="intro__img">
        <img src="{data.img}" alt="{data.name}" />
    </div>

</div>

<style>
    .intro__wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        max-height: 360px;
        align-items: center;
    }

    .intro__img {
        margin-right: -20px;
        position: relative;
    }

    .intro__img::before {
        content: "";
        display: block;
        position: absolute;
        inset: 0;
        background-color: var(--overlay);
    }

    img {
        border-radius: 0 0 0 8px;
        height: 360px;
        object-fit: cover;
    }

    p {
        font-size: calc(18 / 16 * 1rem);
        margin-top: 8px;
    }
</style>