<script lang="ts">
    import { Rating } from "$lib/types/Rating";

    export let rating: Rating = Rating.ZeroStar;
</script>

<div class="flex gap-1">
    <iconify-icon
        icon="material-symbols:star"
        class="{rating !== Rating.ZeroStar
            ? 'text-amber-100'
            : 'text-neutral-900'} max-sm:text-xl text-3xl"
    ></iconify-icon>

    <iconify-icon
        icon="material-symbols:star"
        class="{rating === Rating.TwoStars || rating === Rating.ThreeStars
            ? 'text-amber-100'
            : 'text-neutral-900'} max-sm:text-xl text-3xl"
    ></iconify-icon>

    <iconify-icon
        icon="material-symbols:star"
        class="{rating === Rating.ThreeStars
            ? 'text-amber-100'
            : 'text-neutral-900'} max-sm:text-xl text-3xl"
    ></iconify-icon>
</div>
