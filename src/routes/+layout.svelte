<script>
    import { page } from "$app/stores";
    import Header from "$lib/components/Header.svelte";
    import Welcome from "$lib/components/Welcome.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import "../app.css";

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
    <Header />

    <Welcome text={welcomeText} />

    <main class="flex-1 box-border">
        <slot />
    </main>

    <Footer />
</div>
