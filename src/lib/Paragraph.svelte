<script lang="ts">
  import CustomLink from "./CustomLink.svelte";

    export let text: string;
    export let fontSize: number; // in pixels
</script>

<p style:font-size="{fontSize}px">
    {#each text.split(' ') as word}
        {#if word.charAt(0) === '#'}
            <span><CustomLink 
                href={word.substring(1, word.length)} 
                text={word.substring(1, word.length) + ' '} 
                fontSize={fontSize}>
            </CustomLink></span>
        {:else}
            <span>{word + ' '}</span>
        {/if}
    {/each}
</p>

<style>
    p {
        color: var(--color-light);
    }
</style>
