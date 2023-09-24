<script lang="ts">
    export let text: string;
    export let isRounded: boolean = false;
    export let isContrasting: boolean = false;

    function buttonClass(): string {
        return 'button ' + (isRounded ? 'button-rounded ' : ' ') + (isContrasting ? 'button-light' : 'button-dark');
    }
</script>

<style>
    .button {
        position: relative;
        overflow: hidden;
        border: none;
        padding: 12px 25px;
        text-transform: uppercase;
        letter-spacing: 0.15rem;
        font-family: Abel, sans-serif;
        cursor: pointer;
        z-index: 1;
    }

    .button-rounded {
        border-radius: 25px;
    }

    .button-dark {
        background-color: var(--color-dark);
        color: var(--color-light);
    }

    .button-light {
        background-color: var(--color-light);
        color: var(--color-dark);
    }

    .text {
        position: relative;
        z-index: 2;
        transition: color 0.5s ease;
    }

    .fill {
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        transition: left 0.5s ease;
    }

    .button-dark .fill {
        background-color: var(--color-light);
    }

    .button-light .fill {
        background-color: var(--color-dark);
    }

    .button:hover .fill {
        left: 0;
    }

    .button-dark:hover .text {
        color: var(--color-dark);
    }

    .button-light:hover .text {
        color: var(--color-light);
    }
</style>

<div class={buttonClass()}>
    <div class="fill"></div>
    <span class="text">{text}</span>
</div>
