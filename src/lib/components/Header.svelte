<script>
    import { page } from "$app/stores";
    import Button from "./Button.svelte";
</script>

<header class="absolute top-0 left-0 h-20 w-full p-4 flex justify-between items-center">
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
