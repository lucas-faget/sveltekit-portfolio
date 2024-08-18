<script lang="ts">
    export let aside: boolean = false;
    export let dark: boolean = false;
</script>

<div class="flex flex-col {dark ? 'dark' : ''}">
    <div class="{dark ? 'linear-gradient-end' : 'linear-gradient-start'} w-full h-4 z-20"></div>
    <div
        class="{dark
            ? 'bg-dark text-light'
            : 'bg-light text-dark'} relative min-h-lvh py-12 flex max-lg:flex-col max-lg:gap-12"
    >
        {#if aside}
            <aside class="lg:w-1/3 w-full md:px-8 px-4">
                <div class="sticky top-28">
                    <slot name="aside" />
                </div>
            </aside>
        {/if}

        <section
            class="w-full md:px-8 px-4 flex flex-col lg:justify-center gap-12 {aside
                ? 'lg:w-2/3'
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
