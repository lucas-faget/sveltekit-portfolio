<script lang="ts">
    import { page } from "$app/stores";
    import { onDestroy, onMount } from "svelte";
    import { browser } from "$app/environment";
    import Button from "./Button.svelte";

    export let contact: any = {};

    let isMenuOpen: boolean = false;

    $: scrolled = false;

    function handleScroll() {
        if (browser) {
            scrolled = window.scrollY > window.innerHeight / 2;
        }
    }

    function handleMenuToggle() {
        isMenuOpen = !isMenuOpen;
    }

    function closeMenu() {
        isMenuOpen = false;
    }

    onMount(() => {
        if (browser) {
            window.addEventListener("scroll", handleScroll);
        }
    });

    onDestroy(() => {
        if (browser) {
            window.removeEventListener("scroll", handleScroll);
        }
    });
</script>

<header>
    <nav
        class="{scrolled
            ? 'fixed bg-neutral-900 -translate-y-full down-animation'
            : 'absolute'} top-0 left-0 h-20 w-full p-4 flex justify-between items-center z-40"
    >
        <a href="/" class={isMenuOpen ? "max-md:hidden" : ""}>
            <img class="h-12" src="https://assets.lucas-faget.com/logos/logo-dark.png" alt="Logo" />
        </a>

        <ul class="flex gap-4 max-md:hidden">
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

    <div
        class="{isMenuOpen
            ? 'md:hidden'
            : 'hidden'} fixed bg-neutral-300 w-[calc(100%-1rem)] h-[calc(100svh-1rem)] top-2 left-2 rounded-xl z-50"
    >
        <div class="w-full h-full flex flex-col justify-between p-8 text-neutral-500">
            <div class="flex flex-col gap-16">
                <a href="/">
                    <img
                        class="h-12"
                        src="https://assets.lucas-faget.com/logos/logo-light.png"
                        alt="Logo"
                    />
                </a>

                <ul class="flex flex-col gap-6 font-2 text-4xl">
                    <li>
                        <a href="/" on:click={closeMenu}>
                            <span class="hover:text-neutral-900">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="/about" on:click={closeMenu}>
                            <span class="hover:text-neutral-900">About</span>
                        </a>
                    </li>
                    <li>
                        <a href="/projects" on:click={closeMenu}>
                            <span class="hover:text-neutral-900">Projects</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="flex justify-between items-center gap-8 flex-wrap">
                <p>© 2023-2024 Lucas Faget</p>
                <div class="flex items-center gap-4">
                    <a href={contact.githubUrl} target="_blank">
                        <iconify-icon
                            icon="mdi:github"
                            width="30"
                            height="30"
                            class="hover:text-neutral-900 cursor-pointer"
                        />
                    </a>
                    <a href={contact.linkedinUrl} target="_blank">
                        <iconify-icon
                            icon="mdi:linkedin"
                            width="30"
                            height="30"
                            class="hover:text-neutral-900 cursor-pointer"
                        />
                    </a>
                    <a href="mailto:{contact.mail}">
                        <iconify-icon
                            icon="mdi:email"
                            width="30"
                            height="30"
                            class="hover:text-neutral-900 cursor-pointer"
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>

    <button on:click={handleMenuToggle} class="md:hidden fixed top-6 right-6 z-50">
        <iconify-icon
            icon={isMenuOpen
                ? "line-md:menu-to-close-alt-transition"
                : "line-md:close-to-menu-alt-transition"}
            width="30"
            height="30"
            class={isMenuOpen ? "text-neutral-900" : "text-neutral-100"}
        ></iconify-icon>
    </button>
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
