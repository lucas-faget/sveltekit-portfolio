<script lang="ts">
    import CustomLink from "./CustomLink.svelte";

    export let text: string;
</script>

<p>
    {#each text.split(" ") as word}
        {#if word.charAt(0) === "#"}
            <span
                ><CustomLink
                    href={word.substring(1, word.length)}
                    text={word.substring(1, word.length) + " "}
                ></CustomLink></span
            >
        {:else}
            <span>{word + " "}</span>
        {/if}
    {/each}
</p>

<style>
    p {
        color: var(--color-light);
        font-size: var(--paragraph-font-size);
    }
</style>
