<script lang="ts">
    export let rounded: boolean = false;
    export let dark: boolean = false;
</script>

<div
    class={`${dark ? "bg-neutral-800 text-neutral-200 hover:text-neutral-800" : "bg-neutral-400 text-neutral-800 hover:text-neutral-200"} ${rounded ? "rounded-full " : ""} group relative z-10 px-6 py-3 border-none overflow-hidden uppercase tracking-[0.15rem] cursor-pointer`}
    style="font-family: 'Dosis', sans-serif;"
>
    <div
        class={`${dark ? "bg-neutral-200" : "bg-neutral-800"} ${rounded ? "rounded-full " : ""} absolute top-0 left-[-100%] w-full h-full transition-left duration-500 ease group-hover:left-0`}
    ></div>

    <div class="relative z-20 transition-color duration-500 ease">
        <slot />
    </div>
</div>
