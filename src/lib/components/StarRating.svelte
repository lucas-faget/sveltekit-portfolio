<script lang="ts">
    import { Rating } from "$lib/types/Rating";

    const assetsURL = "https://assets.lucas-faget.com";

    export let rating: Rating = Rating.ZeroStar;
</script>

<div class="flex gap-2">
    <img
        class="h-6 w-6"
        src={`${assetsURL}/icons/${
            rating !== Rating.ZeroStar ? "star-gold.svg" : "star-black.svg"
        }`}
        alt="star"
    />
    <img
        class="h-6 w-6"
        src={`${assetsURL}/icons/${
            rating === Rating.TwoStars || rating === Rating.ThreeStars
                ? "star-gold.svg"
                : "star-black.svg"
        }`}
        alt="star"
    />
    <img
        class="h-6 w-6"
        src={`${assetsURL}/icons/${
            rating === Rating.ThreeStars ? "star-gold.svg" : "star-black.svg"
        }`}
        alt="star"
    />
</div>
