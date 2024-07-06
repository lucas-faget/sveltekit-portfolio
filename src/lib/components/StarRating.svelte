<script lang="ts">
    import { Rating } from "$lib/types/Rating";

    export let rating: Rating = Rating.ZeroStar;
</script>

<div class="flex gap-2">
    <iconify-icon
        icon="material-symbols:star"
        width="30"
        height="30"
        class={rating !== Rating.ZeroStar ? "text-amber-100" : "text-neutral-900"}
    ></iconify-icon>

    <iconify-icon
        icon="material-symbols:star"
        width="30"
        height="30"
        class={rating === Rating.TwoStars || rating === Rating.ThreeStars
            ? "text-amber-100"
            : "text-neutral-900"}
    ></iconify-icon>

    <iconify-icon
        icon="material-symbols:star"
        width="30"
        height="30"
        class={rating === Rating.ThreeStars ? "text-amber-100" : "text-neutral-900"}
    ></iconify-icon>
</div>
