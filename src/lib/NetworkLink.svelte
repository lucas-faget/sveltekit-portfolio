<script lang="ts">
    export let imageUrl: string;
    export let networkUrl: string;
    export let networkText: string;
</script>

<a href={networkUrl} target="_blank" rel="noreferrer">
    <div class="contact">
        <div class="network">
            <img class="icon" src={imageUrl} alt="network" />
        </div>
        <div>
            {networkText}
        </div>
    </div>
</a>

<style>
    .contact {
        color: var(--color-dark);
        background-color: var(--color-light);
        height: 100px;
        width: 80vw;
        padding-inline: 20px;
        display: flex;
        align-items: center;
        gap: 30px;
        border-radius: 100px;
    }

    .contact:hover {
        background-color: var(--color-pink);
    }

    .network {
        height: 60px;
        aspect-ratio: 1/1;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        border-radius: 100%;
    }

    .icon {
        width: 100%;
        height: 100%;
    }
</style>
