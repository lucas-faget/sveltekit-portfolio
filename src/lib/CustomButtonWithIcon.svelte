<script lang="ts">
    export let iconSrc: string;
    export let text: string;
</script>

<div class="button">
    <div class="fill"></div>
    <div class="content">
        <img class="icon" src={iconSrc} alt="icon" />
        <span class="text">{text}</span>
    </div>
</div>

<style>
    .button {
        background-color: var(--color-dark);
        color: var(--color-light);
        position: relative;
        overflow: hidden;
        border: none;
        border-radius: 130px;
        padding: 25px;
        letter-spacing: 0.15rem;
        cursor: pointer;
        z-index: 1;
    }

    .content {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .icon {
        position: relative;
        z-index: 2;
        width: 80px;
        height: 80px;
    }

    .text {
        position: relative;
        z-index: 2;
        transition: color 0.5s ease;
    }

    .fill {
        background-color: var(--color-light);
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        border-radius: 25px;
        transition: left 0.5s ease;
    }

    .button:hover .fill {
        left: 0;
    }

    .button:hover .text {
        color: var(--color-dark);
    }

    @media screen and (max-width: 600px) {
        .text {
            display: none;
        }
    }
</style>
