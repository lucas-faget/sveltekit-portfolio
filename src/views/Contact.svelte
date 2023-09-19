<script lang="ts">
    import Welcome from "../lib/Welcome.svelte";
    import NetworkLink from "../lib/NetworkLink.svelte";

    const ASSETS_ICON = "/icon/";
</script>

<main>
    <Welcome text={["Lucas Faget", "My networks"]}/>

    <div class="contact">
        <div class="links">
            <NetworkLink imageUrl={ASSETS_ICON + "linkedin.svg"} networkUrl="https://fr.linkedin.com/in/lucas-faget" networkText="LinkedIn @lucas-faget" />
            <NetworkLink imageUrl={ASSETS_ICON + "github.svg"} networkUrl="https://github.com/lucas-faget" networkText="GitHub @lucas-faget" />
            <NetworkLink imageUrl={ASSETS_ICON + "email.svg"} networkUrl="mailto:lucas.faget@laposte.net" networkText="E-Mail @lucas-faget@laposte.net" /> 
        </div>
    </div>
</main>

<style>
    main {
        background-color: var(--color-dark);
        border-radius: 0 0 0 80px;
    }

    .contact {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-block: var(--vertical-gap);
    }

    .links {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
</style>
