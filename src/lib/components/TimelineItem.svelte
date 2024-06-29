<script lang="ts">
    export let title: string;
    export let label: string | undefined = undefined;
    export let imageAlt: string | undefined = undefined;
    export let imageSrc: string | undefined = undefined;
</script>

<div class="relative pl-8 sm:pl-32 py-6 group">
    {#if label}
        <div class="font-medium" style="color: var(--color-theme-1)">{label}</div>
    {/if}

    <div
        class="flex flex-col sm:flex-row items-start gap-2 mb-2 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-neutral-500 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-neutral-100 after:border-4 after:box-content after:border-neutral-600 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5"
    >
        {#if title}
            <div class="text-xl font-bold">
                {title}
            </div>
        {/if}

        {#if imageSrc}
            <div
                class="h-20 sm:w-20 sm:-translate-y-6 sm:absolute left-0 inline-flex items-center justify-center"
            >
                <img class="max-h-full max-w-full" src={imageSrc} alt={imageAlt} />
            </div>
        {/if}
    </div>

    <div class="text-neutral-500">
        <slot />
    </div>
</div>
