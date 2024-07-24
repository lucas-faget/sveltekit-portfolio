<script lang="ts">
    export let title: string;
</script>

<div class="flex flex-col md:text-7xl text-5xl leading-none capitalize font-3">
    {#each title.split("\n") as word, index}
        {#if index % 2 === 0}
            <p>{word}</p>
        {:else}
            <p class="text-neutral-600">{word}</p>
        {/if}
    {/each}
</div>
