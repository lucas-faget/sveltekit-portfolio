<script lang="ts">
    export let title: string;
    export let label: string | undefined = undefined;
    export let imageAlt: string | undefined = undefined;
    export let imageSrc: string | undefined = undefined;

    export let small: boolean = false;
</script>

<div class="relative pl-8 {small ? 'py-3 sm:pl-28' : 'py-6 sm:pl-32'} group">
    {#if label}
        <div
            class="{small ? 'text-sm' : 'text-base'} font-medium"
            style="color: var(--color-theme-1)"
        >
            {label}
        </div>
    {/if}

    <div
        class="flex flex-col sm:flex-row items-start {small
            ? 'gap-1 mb-1'
            : 'gap-2 mb-2'} group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-neutral-500 {small
            ? 'sm:before:ml-[5.5rem]'
            : 'sm:before:ml-[6.5rem]'} before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-neutral-100 after:border-4 after:box-content after:border-neutral-600 after:rounded-full {small
            ? 'sm:after:ml-[5.5rem]'
            : 'sm:after:ml-[6.5rem]'} after:-translate-x-1/2 after:translate-y-1.5"
    >
        {#if title}
            <div class="{small ? 'text-base' : 'text-lg sm:text-xl'} font-bold">
                {title}
            </div>
        {/if}

        {#if imageSrc}
            <div
                class="{small
                    ? 'h-16 sm:w-16 sm:-translate-y-3'
                    : 'h-20 sm:w-20 sm:-translate-y-6'} sm:absolute left-0 inline-flex items-center justify-center max-sm:my-2"
            >
                <img class="w-full max-h-full" src={imageSrc} alt={imageAlt} />
            </div>
        {/if}
    </div>

    <div class="{small ? 'text-sm' : 'text-base'} text-neutral-500">
        <slot />
    </div>
</div>
