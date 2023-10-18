<script lang="ts">
    import { Assets } from "../enum/Assets";
    import { Rating } from "../enum/Rating";

    export let rating: Rating = Rating.ZeroStar;
</script>

<div class="stars">
    <img class="star" src={Assets.Icon + "star/" + (rating !== Rating.ZeroStar ? "gold-star.svg" : "black-star.svg")} alt="logo" />
    <img class="star" src={Assets.Icon + "star/" + (rating === Rating.TwoStars || rating === Rating.ThreeStars ? "gold-star.svg" : "black-star.svg")} alt="logo" />
    <img class="star" src={Assets.Icon + "star/" + (rating === Rating.ThreeStars ? "gold-star.svg" : "black-star.svg")} alt="logo" />
</div>

<style>
    .stars {
        display: flex;
        gap: 10px;
    }

    .star {
        height: 25px;
        min-width: 25px;
    }
</style>
