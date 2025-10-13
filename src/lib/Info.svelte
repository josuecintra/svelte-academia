<script>
    import IconPlus from "$lib/assets/IconPlus.svelte";
    export let question;
    export let answer;


</script>

<div class="info">
    <div class="question">
        <h3>{question}</h3>
        <IconPlus />
    </div>
    <div class="answer">
        <p>{answer}</p>
    </div>
</div>

<style>
    .question{
        display: flex;
        align-items: center;
        border: 1px solid var(--subtle);
        padding: 17px 16px;
        /* justify-content: space-between; */
        cursor: pointer;
    }

    .question :global(svg){
        width: 20px;
        height: 20px;
        margin-left: auto;
        margin-right: 8px;
        fill: var(--subtle);
        transition: transform 0.3s ease;

    }
    .answer{
        padding: 0 16px;
        margin-top: 16px;
        display: none;
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