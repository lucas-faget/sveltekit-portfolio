<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import "../app.css";
</script>

<div class="flex flex-col min-h-screen">
    <Header />

    <main class="flex-1 box-border">
        <slot />
    </main>

    <Footer />
</div>
