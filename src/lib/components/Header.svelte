<script lang="ts">
    import { page } from "$app/stores";
    import { onDestroy, onMount } from "svelte";
    import Button from "./Button.svelte";

    let scrollY: number = window.scrollY;

    $: scrolled = scrollY > window.innerHeight / 2;

    function handleScroll() {
        scrollY = window.scrollY;
    }

    onMount(() => {
        window.addEventListener("scroll", handleScroll);
    });

    onDestroy(() => {
        window.removeEventListener("scroll", handleScroll);
    });
</script>

<header
    class={`${scrolled ? "fixed bg-neutral-900 -translate-y-full down-animation" : "absolute"} top-0 left-0 h-20 w-full p-4 flex justify-between items-center z-50`}
>
    <a href="/">
        <img class="h-12" src="https://assets.lucas-faget.com/logos/logo-dark.png" alt="Logo" />
    </a>

    <nav>
        <ul class="flex gap-4">
            <li>
                <a href="/">
                    <Button rounded dark border={$page.url.pathname === "/"}>Home</Button>
                </a>
            </li>
            <li>
                <a href="/about">
                    <Button rounded dark border={$page.url.pathname === "/about"}>About</Button>
                </a>
            </li>
            <li>
                <a href="/projects">
                    <Button rounded dark border={$page.url.pathname === "/projects"}>
                        Projects
                    </Button>
                </a>
            </li>
        </ul>
    </nav>
</header>

<style>
    .down-animation {
        animation: downAnimation 1s forwards;
    }

    @keyframes downAnimation {
        from {
            transform: translateY(-100%);
        }
        to {
            transform: translateY(0);
        }
    }
</style>
