<script lang="ts">
    export let index: string;
    export let title: string;
</script>

<aside class="aside">
    <div>
        <p>{index}</p>
        <p>{title}</p>
    </div>
</aside>

<style>
    .aside {
        width: 100%;
        height: 100%;
    }

    .aside > div {
        position: sticky;
        top: 20vh;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .aside > div > p {
        color: var(--color-light);
        font-size: var(--aside-font-size);
        font-family: Abel, sans-serif;
    }
</style>
