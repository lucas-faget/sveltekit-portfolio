<script lang="ts">
    export let images: string[] = [];

    $: classList = (() => {
        switch (images.length) {
            case 0:
                return [];
            case 1:
            case 2:
                return ["carousel-image-2"];
            case 3:
            case 4:
                return ["carousel-image-1", "carousel-image-2", "carousel-image-3"];
            default:
                return [
                    "carousel-image-0",
                    "carousel-image-1",
                    "carousel-image-2",
                    "carousel-image-3",
                    "carousel-image-4",
                ];
        }
    })();

    let currentIndex = 0;

    function next() {
        currentIndex = (currentIndex + 1) % images.length;
    }

    function previous() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    }

    $: imageClass = (index: number) => {
        const relativeIndex =
            (index - currentIndex + images.length + Math.floor(classList.length / 2)) %
            images.length;
        return classList[relativeIndex] || "carousel-image-hidden";
    };

    function handleClick(index: number) {
        currentIndex = index;
    }
</script>

<div class="relative w-full h-96 overflow-hidden">
    {#each images as image, index}
        <button
            class="image-container absolute top-0 left-1/2 h-full cursor-pointer {imageClass(
                index
            )}"
            on:click|stopPropagation={() => (currentIndex = index)}
        >
            <img
                src={image}
                class="w-full h-full object-cover shrink-0"
                alt="carousel-image-{index}"
            />
        </button>
    {/each}

    <button
        class="absolute top-1/2 -translate-y-1/2 left-2 h-10 w-10 rounded-full bg-neutral-950 text-neutral-50 opacity-60 z-10 flex justify-center items-center"
        on:click={previous}
    >
        <iconify-icon icon="material-symbols:keyboard-arrow-left" width="20" height="20"
        ></iconify-icon>
    </button>

    <button
        class="absolute top-1/2 -translate-y-1/2 right-2 h-10 w-10 rounded-full bg-neutral-950 text-neutral-50 opacity-60 z-10 flex justify-center items-center"
        on:click={next}
    >
        <iconify-icon icon="material-symbols:keyboard-arrow-right" width="20" height="20"
        ></iconify-icon>
    </button>
</div>

<style>
    .image-container {
        aspect-ratio: 16/9;
        transition:
            transform 0.5s ease,
            filter 0.5s ease,
            opacity 0.5s ease;
    }

    .carousel-image-0 {
        transform: translateX(-50%) translateX(-90%) scale(0.6);
        filter: brightness(40%);
        opacity: 1;
        z-index: 1;
    }

    .carousel-image-1 {
        transform: translateX(-50%) translateX(-60%) scale(0.8);
        filter: brightness(65%);
        opacity: 1;
        z-index: 2;
    }

    .carousel-image-2 {
        transform: translateX(-50%) scale(1);
        filter: brightness(100%);
        opacity: 1;
        z-index: 3;
    }

    .carousel-image-3 {
        transform: translateX(-50%) translateX(60%) scale(0.8);
        filter: brightness(65%);
        opacity: 1;
        z-index: 2;
    }

    .carousel-image-4 {
        transform: translateX(-50%) translateX(90%) scale(0.6);
        filter: brightness(40%);
        opacity: 1;
        z-index: 1;
    }

    .carousel-image-hidden {
        transform: translateX(-50%) scale(0.6);
        filter: brightness(40%);
        opacity: 0;
        z-index: 0;
    }
</style>
