<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import Paragraph from "./Paragraph.svelte";

    const maxFontSize = 150;

    let text: string[];
    let fontSize = maxFontSize;
    let isVisible: boolean = false;
    let element: HTMLElement;
    updateFontSize();

    const observer = new IntersectionObserver((entries) => {
        isVisible = entries.some(entry => entry.isIntersecting);
    });

    onMount(() => {
        window.addEventListener("resize", updateFontSize);
        observer.observe(element);
    });

    onDestroy(() => {
        window.removeEventListener("resize", updateFontSize);
        observer.unobserve(element);
    });

    function updateFontSize(): void 
    {
        let screenWidth = window.innerWidth;
        if (screenWidth <= 600)
            fontSize = 0.5 * maxFontSize;
        else
            if (screenWidth <= 1200)
                fontSize = 0.75 * maxFontSize;
            else
                fontSize = maxFontSize;
    }

    function getLateralMoveClass(lineIndex: number): string 
    {
        return lineIndex % 2 === 0 ? 'from-right-lateral-move' : 'from-left-lateral-move'
    }

    export { text, fontSize, isVisible };

</script>

<section class="welcome" on:resize={updateFontSize}>
    <div class="title" bind:this={element}>
        {#each text as line, index}
            <div class={isVisible ? getLateralMoveClass(index) : ''}>
                <Paragraph text={line} fontSize={fontSize} />
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
        border-bottom: 2px dotted #fff;
        line-height: 1.1;
        font-family: 'Anton', sans-serif;
    }

    .title {
        padding-inline: var(--horizontal-padding);
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
