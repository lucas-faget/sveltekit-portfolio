<script lang="ts">
    export let small: boolean = false;
</script>

<div class="flex items-center gap-2 font-2">
    <div class="flex-1 border-t-[1px] border-current"></div>
    <div class="flex">
        <div class="{small ? 'w-4' : 'w-6'} flex flex-col justify-center items-center">
            <div class="flex-1 w-[1.2px] border-[1px] border-current skew-plus-45"></div>
            <div class="flex-1 w-[1.2px] border-[1px] border-current skew-minus-45"></div>
        </div>
        <div
            class="{small
                ? 'text-sm h-8 px-4'
                : 'text-lg h-12 px-6'} border-y-[1px] border-current flex items-center uppercase tracking-[0.15rem]"
        >
            <slot />
        </div>
        <div class="{small ? 'w-4' : 'w-6'} flex flex-col justify-center items-center">
            <div class="flex-1 w-[1.2px] border-[1px] border-current skew-minus-45"></div>
            <div class="flex-1 w-[1.2px] border-[1px] border-current skew-plus-45"></div>
        </div>
    </div>
    <div class="flex-1 border-t-[1px] border-current"></div>
</div>

<style>
    .skew-plus-45 {
        transform: skew(-45deg);
    }

    .skew-minus-45 {
        transform: skew(45deg);
    }
</style>
