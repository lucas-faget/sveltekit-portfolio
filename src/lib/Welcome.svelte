<script lang="ts">
    import { onMount, onDestroy } from 'svelte';

    let text: string[];
    let isVisible: boolean = false;
    let element: HTMLElement;

    const observer = new IntersectionObserver((entries) => {
        isVisible = entries.some(entry => entry.isIntersecting);
    });

    onMount(() => {
        observer.observe(element);
    });

    onDestroy(() => {
        observer.unobserve(element);
    });

    function getLateralMoveClass(lineIndex: number): string 
    {
        return lineIndex % 2 === 0 ? 'from-right-lateral-move' : 'from-left-lateral-move'
    }

    export { text, isVisible };
</script>

<section class="welcome">
    <div class="welcome-title" bind:this={element}>
        {#each text as line, index}
            <div class={isVisible ? getLateralMoveClass(index) : ''}>
                {#if index > 1}
                    <p class="outlined-text">{line}</p>
                {:else}
                    <p>{line}</p>
                {/if}
            </div>
        {/each}
    </div>
</section>

<style>
    .welcome {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-top: calc(100px + var(--vertical-gap));
        padding-bottom: var(--vertical-gap);
        box-sizing: border-box;
        border-bottom: 2px dotted var(--color-light);
        line-height: 1.1;
        font-family: Anton, sans-serif;
    }

    .welcome-title {
        color: var(--color-light);
        padding-inline: var(--horizontal-padding);
        font-size: var(--welcome-font-size);
    }

    .outlined-text {
        color: transparent;
        -webkit-text-stroke: min(0.2vw, 0.1rem) var(--color-light);
    }

    @media (min-width: 800px) {
        .welcome {
            min-height: 100vh;
        }
    }

    .from-left-lateral-move {
        animation: 2s ease-in-out from-left-lateral-move;
    }

    .from-right-lateral-move {
        animation: 2s ease-in-out from-right-lateral-move;
    }

    @keyframes from-left-lateral-move {
        from {
            transform: translateX(-100px);
        }
        to {
            transform: translateX(0px);
        }
    }

    @keyframes from-right-lateral-move {
        from {
            transform: translateX(100px);
        }
        to {
            transform: translateX(0px);
        }
    }
</style>
