<script>
    import logo from '$lib/assets/logo.png';
</script>

<header class="header">
    <div class="wrap header__wrapper">
        <img src="{logo}" alt="Academia Local" class="header__logo" />
        <nav class="header__nav">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/sobre">Sobre</a></li>
                <li><a href="/modalidades">Modalidades</a></li>
                <li><a href="#contato" class="btn header__btn">Contato</a></li>
            </ul>
        </nav>
    </div>
</header>

<style>

    .header__btn {
        border-color: var(--feat);
        padding: 0 0.5rem;
        background-color: #000;
    }

    .header__btn:hover {
        border-color: #fff;
    }

    .header {
        background: #000;
        padding: 1rem 0;
        position: sticky;
        top: 0;
        z-index: 100;
    }

    .header__wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 120px;
    }

    .header__logo {
        max-width: 277px;
    }

    .header__nav ul {
        display: flex;
        gap: 1.5rem;
    }

    .header__nav a {
        color: #fff;
        /* font-weight: bold; */
        text-decoration: none;
        transition: color 0.3s ease;
    }

    .header__nav a:hover {
        color: #f39c12;
    }


</style>