<script lang="ts">
    import Paragraph from "./Paragraph.svelte";

    export let index: string;
    export let title: string;
</script>

<aside class="aside">
    <div>
        <Paragraph text={index} fontSize={30} />
        <Paragraph text={title} fontSize={50} />
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
</style>
