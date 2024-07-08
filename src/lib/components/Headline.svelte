<script lang="ts">
    export let text: string;
</script>

<div class="flex items-center gap-2 font-2">
    <div class="flex-1 border-t-[1px]"></div>
    <div class="flex">
        <div class="w-6 flex flex-col justify-center items-center">
            <div class="flex-1 w-[1.2px] border-[1px] skew-plus-45"></div>
            <div class="flex-1 w-[1.2px] border-[1px] skew-minus-45"></div>
        </div>
        <div
            class="h-12 px-6 border-y-[1px] flex items-center text-lg uppercase tracking-[0.15rem]"
        >
            {text}
        </div>
        <div class="w-6 flex flex-col justify-center items-center">
            <div class="flex-1 w-[1.2px] border-[1px] skew-minus-45"></div>
            <div class="flex-1 w-[1.2px] border-[1px] skew-plus-45"></div>
        </div>
    </div>
    <div class="flex-1 border-t-[1px]"></div>
</div>

<style>
    .skew-plus-45 {
        transform: skew(-45deg);
    }

    .skew-minus-45 {
        transform: skew(45deg);
    }
</style>
