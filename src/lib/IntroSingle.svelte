<script>
    export let data;
    // console.log(`\n\nIntroSingle.svelte data line #3:`);
    // console.log(data);
    let img1 = `${data.img} 640w`;  // Example: "image.jpg 640w" já recortada
    let img2 = `${data.img} 1280w`; // Example: "image.jpg 1280w" já recortada
</script>

<div class="intro__wrapper wrapper">
    <div class="intro__content">
        <h2>{data.name}</h2>
        <p>{data.content}</p>
    </div>
    <div class="intro__img">
        <img src="{data.img}" alt="{data.name}" srcset="{img1}, {img2}" />
    </div>

</div>

<style>
    .intro__wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
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

    @media (max-width: 768px) {
        .intro__wrapper {
            grid-template-columns: 1fr;
            text-align: center;
        }

        .intro__img {
            grid-row: 1;
            margin: -20px;
        }

        img {
            width: 100%;
            height: 240px;
            border-radius: 8px;
            object-position: center;
        }
    }
</style>