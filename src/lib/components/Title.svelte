<script lang="ts">
    export let title: string;
    export let small: boolean = false;
</script>

<div class="flex flex-col {small ? '' : 'md:text-7xl'} text-5xl leading-none capitalize font-4">
    {#each title.split("\n") as word, index}
        {#if index % 2 === 0}
            <span>{word}</span>
        {:else}
            <span class="text-neutral-500">{word}</span>
        {/if}
    {/each}
</div>
