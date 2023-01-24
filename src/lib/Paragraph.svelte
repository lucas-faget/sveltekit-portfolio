<script lang="ts">
    export let text: string;
    export let fontSize: number;
</script>

<p class="paragraph" style:font-size="{fontSize}px">
    {#each text.split(' ') as word}
        {#if word.charAt(0) === '#'}
            <span class="color-red">{word.substring(1, word.length) + ' '}</span>
        {:else}
            <span>{word + ' '}</span>
        {/if}
    {/each}
</p>

<style>
    .paragraph {
        color: var(--color-light);
        padding: 0;
        margin: 0;
    }

    .color-red {
        color: var(--color-pink);
    }
</style>
