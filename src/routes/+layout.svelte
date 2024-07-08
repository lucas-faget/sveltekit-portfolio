<script lang="ts">
    import "../app.css";
    import { page } from "$app/stores";
    import type { PageData } from "./$types";
    import Header from "$lib/components/Header.svelte";
    import Welcome from "$lib/components/Welcome.svelte";
    import Footer from "$lib/components/Footer.svelte";

    export let data: PageData;

    $: welcomeText = (() => {
        switch ($page.url.pathname) {
            case "/about":
                return "About";
            case "/projects":
                return "Projects";
            case "/":
            default:
                return "";
        }
    })();
</script>

<div class="flex flex-col min-h-screen">
    <Header contact={data.contact} />

    <Welcome text={welcomeText} />

    <main class="flex-1 box-border">
        <slot />
    </main>

    <Footer projectNames={data.projectNames} contact={data.contact} />
</div>
