<script>
    import img from '/crossfit.jpg';
</script>

<footer class="footer">
    <div class="footer__wrapper wrap">
        <div class="footer-image">
            <img src={img} alt="" class="footer-image" />
        </div>
        <div class="footer-content">
            <h2>Venha fazer seu<br /> primeiro treino grátis</h2>
            <p>Entre em contato via WhatsApp ou e-mail e fale com um treinador especialista da equipe.</p>  
            <div class="footer-links">
                <a href="http://api.whatsapp.com/send?prone=5519987654321">WhatsApp</a>
                <a href="mailto:contato@academialocal.com.br">E-mail</a>
            </div>
        </div>
    </div>


</footer>  

<style>
    .footer__wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        align-items: center;
    }

    .footer {
        margin-top: 90px;
    }

    .footer-image {
        position: relative;
    }

    .footer-image::after {
        content: "";
        position: absolute;
        inset: 0;
        background-color: var(--overlay);
        border-radius: 16px;
    }
    
    img {
        border-radius: 16px;
    }

    p {
        margin-top: 16px;
        max-width: 360px;
    }

    h2 {
        font-size: calc(36 / 16 * 1rem);
    }

    .footer-links {
        margin-top: 24px;
        display: flex;
        gap: 8px;
    }
</style>