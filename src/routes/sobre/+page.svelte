<script>
	import Info from "$lib/Info.svelte";
	import Intro from "$lib/Intro.svelte";

</script>


<Intro 
    title="Conheça a academia que mais cresce na cidade"
    content="Confira algumas das perguntas frequentes."
    btnText="Modalidades"
    btnLink="/modalidades"
    img="exercicios"
    icon="weight"
/>

<section class="faq">
    <div class="faq__wrapper wrap">
        <Info 
            question ="Quanto custa a mensalidade?"
            answer="Nossas mensalidades variam de acordo com o plano escolhido. Temos opções a partir de R$99,00 por mês."
        />
        <Info 
            question ="Quais são os horários de funcionamento?"
            answer="Estamos abertos de segunda a sexta, das 6h às 22h, e aos sábados, das 8h às 18h."
        />
        <Info 
            question ="Preciso agendar uma aula experimental?"
            answer="Sim, recomendamos que você agende uma aula experimental para conhecer nossas instalações e instrutores."
        />
        <Info 
            question ="Quais modalidades vocês oferecem?"
            answer="Oferecemos uma variedade de modalidades, incluindo musculação, yoga, pilates, spinning e muito mais."
        />
        <Info 
            question ="Vocês oferecem planos familiares ou corporativos?"
            answer="Sim, temos planos especiais para famílias e empresas. Entre em contato conosco para mais detalhes."
        />
    </div>
</section>

<style>
    .faq{
        margin-top: 60px;
        /* background-color: var(--gray-100); */
    }
    /* .faq__wrapper{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    } */
</style>