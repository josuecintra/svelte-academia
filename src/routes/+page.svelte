<script>
    import imgHome from '$lib/assets/musculacao.jpg';
    import icon from '$lib/assets/icon-muscle.png';     // emogi de músculo baixado de https://emoji.aranja.com/

    console.log(imgHome);
</script>

<section class="intro" style="background-image: url({imgHome})">
    <div class="intro__wrapper wrap">
        <h1>Você está pronto para o desafio? <img src="{icon}" alt=""></h1>
        <p>A Academia Local está pronta para te ajudar a chegar mais longe e alcançar sua melhor performance.</p>
        <a href="/sobre" class="btn btn-primary">Sobre</a>
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