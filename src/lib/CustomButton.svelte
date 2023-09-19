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
        cursor: pointer;
        z-index: 1;
    }

    .button-rounded {
        border-radius: 25px;
    }

    .button-dark {
        background-color: hsl(0, 0%, 20%);
        color: #fff;
    }

    .button-light {
        background-color: #fff;
        color: hsl(0, 0%, 20%);
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
        background-color: #fff;
    }

    .button-light .fill {
        background-color: hsl(0, 0%, 20%);
    }

    .button:hover .fill {
        left: 0;
    }

    .button-dark:hover .text {
        color: hsl(0, 0%, 20%);
    }

    .button-light:hover .text {
        color: #fff;
    }
</style>

<div class={buttonClass()}>
    <div class="fill"></div>
    <span class="text">{text}</span>
</div>
