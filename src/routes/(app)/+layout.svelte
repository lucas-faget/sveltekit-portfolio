<script lang="ts">
    import "../../app.css";
    import { page } from "$app/stores";
    import type { PageData } from "./$types";
    import Header from "$lib/components/Header.svelte";
    import Welcome from "$lib/components/Welcome.svelte";
    import Footer from "$lib/components/Footer.svelte";

    export let data: PageData;

    $: welcomeTitle = (() => {
        switch ($page.url.pathname) {
            case "/about":
                return "About";
            case "/projects":
                return "Projects";
            case "/cv":
                return "Curriculum Vitae";
            case "/":
            default:
                return "";
        }
    })();
</script>

<div class="flex flex-col min-h-screen">
    <Header assetsBaseUrl={data.assetsBaseUrl} socialMedias={data.socialMedias} />

    <Welcome title={welcomeTitle} socialMedias={data.socialMedias} background />

    <main class="flex-1 box-border">
        <slot />
    </main>

    <Footer
        assetsBaseUrl={data.assetsBaseUrl}
        projectNames={data.projectNames}
        socialMedias={data.socialMedias}
    />
</div>
