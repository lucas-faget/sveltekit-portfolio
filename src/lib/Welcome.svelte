<script lang="ts">
    import Paragraph from "./Paragraph.svelte";

    export let text: string;
</script>

<section class="welcome">
    <div>
        <Paragraph text={text} fontSize={100} />
    </div>
</section>

<style>
    .welcome {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 100vh;
        padding-block: 50px;
        box-sizing: border-box;
        border-bottom: 2px dotted #fff;
    }
</style>
