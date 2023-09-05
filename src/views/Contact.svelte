<script lang="ts">
    import NetworkLink from "../lib/NetworkLink.svelte";

    const ASSETS_ICON = "/icon/";
</script>

<main>
    <div class="contact">
        <NetworkLink imageUrl={ASSETS_ICON + "linkedin.svg"} networkUrl="https://fr.linkedin.com/in/lucas-faget" networkText="LinkedIn @lucas-faget" />
        <NetworkLink imageUrl={ASSETS_ICON + "github.svg"} networkUrl="https://github.com/lucas-faget" networkText="GitHub @lucas-faget" />
        <NetworkLink imageUrl={ASSETS_ICON + "email.svg"} networkUrl="mailto:lucas.faget@laposte.net" networkText="E-Mail @lucas-faget@laposte.net" /> 
    </div>
</main>

<style>
    main {
        background-color: var(--color-dark);
        padding-top: 100px;
        border-radius: 0 0 0 80px;
        display: flex;
        justify-content: center;
    }

    .contact {
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding-block: var(--vertical-gap);
    }
</style>
