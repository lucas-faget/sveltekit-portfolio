<script lang="ts">
    export let size: number;
    export let imageUrl: string;
    export let networkUrl: string;
</script>

<a href={networkUrl} target="_blank">
    <div class="network" style="width: {size}px; height: {size}px;">
        <img class="icon" src={imageUrl} alt="network" />
    </div>
</a>

<style>
    .network {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        border: 2px solid var(--color-dark);
        border-radius: 100%;
    }

    .icon {
        width: 66%;
        height: 66%;
    }

    .network:hover {
        border-width: 0px;
    }

    .network:hover > .icon {
        width: 100%;
        height: 100%;
    }
</style>