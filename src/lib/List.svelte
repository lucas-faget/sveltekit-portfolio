<script lang="ts">
    import Paragraph from "./Paragraph.svelte";

    type Item = {
        text: string
    }

    export let items: Item[];
</script>

<ul class="list">
    {#each items as item}
        <li class="item">
            <Paragraph text={item.text} />
        </li>
    {/each}
</ul>

<style>
    .list {
        color: var(--color-light);
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 0;
        margin: 0;
    }
</style>
