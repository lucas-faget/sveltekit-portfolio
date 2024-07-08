<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import { browser } from "$app/environment";
    import { Rating } from "$lib/types/Rating";

    export let rating: Rating = Rating.ZeroStar;

    let isMobileWidth: boolean = false;

    function handleResize() {
        if (browser) {
            isMobileWidth = window.innerWidth < 640;
        }
    }

    onMount(() => {
        if (browser) {
            handleResize();
            window.addEventListener("resize", handleResize);
        }
    });

    onDestroy(() => {
        if (browser) {
            window.removeEventListener("resize", handleResize);
        }
    });
</script>

<div class="flex gap-1">
    <iconify-icon
        icon="material-symbols:star"
        width={isMobileWidth ? 20 : 30}
        height={isMobileWidth ? 20 : 30}
        class={rating !== Rating.ZeroStar ? "text-amber-100" : "text-neutral-900"}
    ></iconify-icon>

    <iconify-icon
        icon="material-symbols:star"
        width={isMobileWidth ? 20 : 30}
        height={isMobileWidth ? 20 : 30}
        class={rating === Rating.TwoStars || rating === Rating.ThreeStars
            ? "text-amber-100"
            : "text-neutral-900"}
    ></iconify-icon>

    <iconify-icon
        icon="material-symbols:star"
        width={isMobileWidth ? 20 : 30}
        height={isMobileWidth ? 20 : 30}
        class={rating === Rating.ThreeStars ? "text-amber-100" : "text-neutral-900"}
    ></iconify-icon>
</div>
