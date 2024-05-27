<script lang="ts">
    export let text: string;
</script>

<div class="title-bar">
    <div class="line"></div>
    <div class="title-block">
        <div class="border-left">
            <div class="border-top"></div>
            <div class="border-bottom"></div>
        </div>
        <div class="middle">{text}</div>
        <div class="border-right">
            <div class="border-top"></div>
            <div class="border-bottom"></div>
        </div>
    </div>
    <div class="line"></div>
</div>

<style>
    .title-bar {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .line {
        height: 1px;
        background-color: var(--color-light);
        flex: 1;
    }

    .title-block {
        display: flex;
    }

    .border-left,
    .border-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 25px;
    }

    .border-top,
    .border-bottom {
        background-color: var(--color-light);
        flex: 1;
        width: 1.2px;
    }

    .border-left .border-top,
    .border-right .border-bottom {
        transform: skew(-45deg);
    }

    .border-left .border-bottom,
    .border-right .border-top {
        transform: skew(45deg);
    }

    .middle {
        color: var(--color-light);
        height: 50px;
        padding-inline: 24px;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        letter-spacing: 0.15rem;
        font-family: Abel, sans-serif;
        border-block: 1px solid var(--color-light);
    }
</style>
