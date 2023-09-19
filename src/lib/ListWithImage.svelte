<script lang="ts">
    import Paragraph from "./Paragraph.svelte";

    type Item = {
        src: string
        text: string
    }

    export let items: Item[];
</script>

<ul class="list">
    {#each items as item}
        <li class="item">
            <img class="logo" src={item.src} alt="logo" />
            <Paragraph text={item.text} />
        </li>
    {/each}
</ul>

<style>
    .list {
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    .list > .item {
        display: flex;
        align-items: center;
        gap: 30px;
    }

    .list > .item > .logo {
        height: 60px;
        min-width: 60px;
    }
</style>
