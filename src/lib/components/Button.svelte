<script lang="ts">
    export let rounded: boolean = false;
    export let dark: boolean = false;
    export let border: boolean = false;
</script>

<div
    class="{dark ? 'bg-neutral-800 text-neutral-200' : 'bg-neutral-400 text-neutral-800'} {rounded
        ? 'rounded-full '
        : ''} border-2 {border
        ? dark
            ? 'border-neutral-200'
            : 'border-neutral-800'
        : dark
          ? 'border-neutral-800 hover:text-neutral-800'
          : 'border-neutral-400 hover:text-neutral-200'} group relative z-10 px-6 max-sm:px-4 py-3 max-sm:py-2 overflow-hidden uppercase tracking-[0.15rem] cursor-pointer font-2"
>
    <div
        class="{dark ? 'bg-neutral-200' : 'bg-neutral-800'} {rounded
            ? 'rounded-full '
            : ''} absolute top-0 left-[-100%] w-full h-full transition-left duration-500 ease {border
            ? ''
            : 'group-hover:left-0'} overflow-hidden"
    ></div>

    <div class="relative z-20 transition-color duration-500 ease max-sm:text-sm">
        <slot />
    </div>
</div>
