<script lang="ts">
    export let title: string;
</script>

<div class="flex flex-col text-8xl leading-none uppercase" style="font-family: 'Anton'">
    {#each title.split(" ") as word, index}
        {#if index % 2 === 0}
            <p>{word}</p>
        {:else}
            <p class="text-neutral-600">{word}</p>
        {/if}
    {/each}
</div>
