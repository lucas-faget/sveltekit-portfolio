<script>
    import { page } from "$app/stores";
    import logo from "$lib/images/svelte-logo.svg";
    import Button from "./Button.svelte";
</script>

<header class="absolute top-0 left-0 h-20 w-full p-4 flex justify-between items-center">
    <div class="h-12 w-12">
        <img class="h-full w-full" src={logo} alt="SvelteKit" />
    </div>

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
