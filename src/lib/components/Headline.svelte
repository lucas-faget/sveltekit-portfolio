<script lang="ts">
    export let dark: boolean = false;
    export let small: boolean = false;
</script>

<div class="flex items-center gap-2 font-2">
    <div class="flex-1 border-t-[1px] {dark ? 'border-light' : 'border-dark'}"></div>
    <div class="flex">
        <div class="{small ? 'w-4' : 'w-6'} flex flex-col justify-center items-center">
            <div
                class="flex-1 w-[1.2px] border-[1px] {dark
                    ? 'border-light'
                    : 'border-dark'} skew-plus-45"
            ></div>
            <div
                class="flex-1 w-[1.2px] border-[1px] {dark
                    ? 'border-light'
                    : 'border-dark'} skew-minus-45"
            ></div>
        </div>
        <div
            class="{small
                ? 'text-sm h-8 px-4'
                : 'text-xl h-12 px-6'} border-y-[1px] flex items-center uppercase tracking-[0.15rem] {dark
                ? 'text-light border-light'
                : 'text-dark border-dark'}"
        >
            <slot />
        </div>
        <div class="{small ? 'w-4' : 'w-6'} flex flex-col justify-center items-center">
            <div
                class="flex-1 w-[1.2px] border-[1px] {dark
                    ? 'border-light'
                    : 'border-dark'} skew-minus-45"
            ></div>
            <div
                class="flex-1 w-[1.2px] border-[1px] {dark
                    ? 'border-light'
                    : 'border-dark'} skew-plus-45"
            ></div>
        </div>
    </div>
    <div class="flex-1 border-t-[1px] {dark ? 'border-light' : 'border-dark'}"></div>
</div>

<style>
    .skew-plus-45 {
        transform: skew(-45deg);
    }

    .skew-minus-45 {
        transform: skew(45deg);
    }
</style>
