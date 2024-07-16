<script lang="ts">
    export let index: number | string | undefined = undefined;
    export let title: string = "";
    export let dark: boolean = false;

    $: hasAside = index && title;

    $: formattedIndex = index?.toString().padStart(2, "0") + ".";
</script>

<div class="flex flex-col">
    <div class="{dark ? 'linear-gradient-end' : 'linear-gradient-start'} w-full h-4 z-20"></div>
    <div
        class="{dark
            ? 'bg-dark text-light border-light'
            : 'bg-light text-dark border-dark'} relative min-h-lvh py-12 flex max-md:flex-col max-md:gap-12"
    >
        {#if hasAside}
            <aside class="md:w-1/3 w-full px-8 font-2">
                <div class="sticky top-28 flex flex-col gap-8 text-4xl">
                    <span>{formattedIndex}</span>
                    <span>{title}</span>
                </div>
            </aside>
        {/if}

        <section
            class="w-full px-8 flex flex-col md:justify-center gap-12 {hasAside
                ? 'md:w-2/3'
                : 'items-center'}"
        >
            <slot />
        </section>
    </div>
</div>

<style>
    .linear-gradient-start {
        background: linear-gradient(135deg, var(--color-dark), var(--color-light));
    }

    .linear-gradient-end {
        background: linear-gradient(-45deg, var(--color-dark), var(--color-light));
    }
</style>
