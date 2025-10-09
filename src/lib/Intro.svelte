<script>
    import imgMusculacao from '$lib/assets/musculacao.jpg';
    import iconMuscle from '$lib/assets/icon-muscle.png';     // emogi de músculo baixado de https://emoji.aranja.com/

    export let title;
    export let content;
    export let btnText;
    export let btnLink;
    export let img;
    export let icon;

    if (img === 'musculacao') {
        img = imgMusculacao;
    }

    if (icon === 'muscle') {
        icon = iconMuscle;
    }
</script>


<section class="intro" style="background-image: url({imgMusculacao})">
    <div class="intro__wrapper wrap">
        <h1>{@html title} <img src="{icon}" alt=""></h1>
        <p>{content}</p>
        <a href="{btnLink}" class="btn btn-primary">{btnText}</a>
    </div>
</section>

<style>
    .intro {
        min-height: 360px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        display: grid;
        align-content: center;
        justify-content: start;
        position: relative;
    }

    .intro::after {
        content: '';
        position: absolute;
        inset: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.55);
    }

    .intro__wrapper {
        background: rgba(0, 0, 0, 0.5);
        padding: 2rem;
        border-radius: 10px;
    }

    .btn-primary {
        background-color: #ff5722;
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 5px;
        text-decoration: none;
        font-weight: bold;
    }

    .btn-primary:hover {
        background-color: #e64a19;
    }

    .intro__wrapper {
        z-index: 1;
        max-width: 450px;
    }

    .btn {
        margin-top: 24px;
    }

    p {
        font-size: calc(18 / 16 * 1rem);
        margin-top: 16px;
    }

    img {
        display: inline;
        max-width: 36px;
    }
</style>