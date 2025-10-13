<div class="credits">
    <div class="credits__wrapper wrap">
        <span>(c) Academia Local, </span>
    </div>
</div>

<style>
    .credits__wrapper {
        margin-top: 60px
    }

    .credits__wrapper::before {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background-color: var(--subtle);
        border-radius: 50%;
        margin: 0 8px;
        transform: translateY(-1px);
    }

    span {
        color: var(--subtle);
        font-size: calc(14 / 16 * 1rem); 
        padding-top: 24px; 
        padding-bottom: 24px;
    }
</style>