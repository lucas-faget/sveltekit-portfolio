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
            <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
                <a href="/">
                    <Button text="Home" rounded dark />
                </a>
            </li>
            <li aria-current={$page.url.pathname === "/about" ? "page" : undefined}>
                <a href="/about">
                    <Button text="About" rounded dark />
                </a>
            </li>
            <li aria-current={$page.url.pathname === "/projects" ? "page" : undefined}>
                <a href="/projects">
                    <Button text="Projects" rounded dark />
                </a>
            </li>
        </ul>
    </nav>
</header>

<style>
    li[aria-current="page"] > a {
        text-decoration: underline;
    }
</style>
