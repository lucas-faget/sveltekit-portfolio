<script lang="ts">
    import type { MenuItem } from "$lib/types/MenuItem";

    export let items: MenuItem[];
    export let id: string = "";
</script>

<div>
    <div class="flex flex-col">
        {#each items as item}
            <a href="about#{item.id}">
                <span
                    class="text-5xl leading-none capitalize font-3 {id === item.id
                        ? ''
                        : 'text-neutral-400 hover:text-neutral-500 dark:text-neutral-600 hover:dark:text-neutral-500'}"
                >
                    {item.label}
                </span>
            </a>
        {/each}
    </div>
</div>
