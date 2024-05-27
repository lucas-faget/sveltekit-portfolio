<script lang="ts">
    import { onMount, onDestroy } from "svelte";

    let isVisible = false;
    let element: HTMLElement;

    const observer = new IntersectionObserver((entries) => {
        isVisible = entries.some((entry) => entry.isIntersecting);
    });

    onMount(() => {
        observer.observe(element);
    });

    onDestroy(() => {
        observer.unobserve(element);
    });
</script>

<div bind:this={element} class={isVisible ? "from-down-move" : "hidden"}>
    <slot></slot>
</div>

<style>
    .hidden {
        opacity: 0;
    }

    .from-down-move {
        animation: 0.5s ease-in-out from-down-move;
    }

    @keyframes from-down-move {
        from {
            transform: translateY(100px);
            opacity: 0;
        }
        to {
            transform: translateY(0px);
            opacity: 1;
        }
    }
</style>
