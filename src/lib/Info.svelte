<script>
    import IconPlus from "$lib/assets/IconPlus.svelte";
    export let question;
    export let answer;

    let isOpen = false;
    let handleIsOpen = () => {
        isOpen = !isOpen;
        // const answerDiv = document.querySelector('.answer');
        // const icon = document.querySelector('.question :global(svg)');
        // if(isOpen){
        //     answerDiv.style.display = 'block';
        //     icon.style.transform = 'rotate(45deg)';
        // } else {
        //     answerDiv.style.display = 'none';
        //     icon.style.transform = 'rotate(0deg)';
        // }
    }
    // $: console.log(isOpen);  => $: é um reactive statement, roda sempre que uma variável muda
</script>

<div class="info" role="button" on:click={handleIsOpen} on:keydown={handleIsOpen} tabindex="0">
    <div class="question">
        <h3>{question}</h3>
        <IconPlus />
    </div>
    {#if isOpen}
        <div class="answer">
            <p>{answer}</p>
        </div>
    {/if}
</div>

<style>
    .question{
        display: flex;
        align-items: center;
        border: 1px solid var(--subtle);
        padding: 17px 16px;
        /* justify-content: space-between; */
        cursor: pointer;
        height: 80px;
    }

    .question :global(svg){
        width: 20px;
        height: 20px;
        margin-left: auto;
        margin-right: 8px;
        fill: var(--subtle);
        transition: transform 0.3s ease;
        flex-shrink: 0; /* Impede que o ícone encolha no redimensionamento da tela */
    }
    .answer{
        padding: 0 16px;
        border-left: 1px solid var(--feat);
        margin-top: 16px;
        margin-bottom: 16px;
    }
/* 
    .info{
        border-bottom: 1px solid var(--gray-300);
        padding: 20px 0;
    }
    .info:last-child{
        border-bottom: none;
    }
    .question h3{
        font-size: 1.2rem;
        color: var(--gray-800);
    }
    .answer p{
        color: var(--gray-600);
        line-height: 1.6;
    }
     */
</style>