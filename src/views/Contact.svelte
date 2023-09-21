<script lang="ts">
    import CustomButtonWithIcon from "../lib/CustomButtonWithIcon.svelte";
    import Welcome from "../lib/Welcome.svelte";
    import { onMount } from 'svelte';

    onMount(() => {
        window.scrollTo(0, 0);
    });

    const ASSETS_ICON = "/icon/";
</script>

<main class="background-dark">
    <Welcome text={["Lucas Faget", "My networks"]}/>

    <div class="contact">
        <div class="links">
            <a href="https://fr.linkedin.com/in/lucas-faget">
                <CustomButtonWithIcon iconSrc={ASSETS_ICON + "linkedin.svg"} text="LinkedIn @lucas-faget" />
            </a>
            <a href="https://github.com/lucas-faget">
                <CustomButtonWithIcon iconSrc={ASSETS_ICON + "github.svg"} text="GitHub @lucas-faget" />
            </a>
            <a href="mailto:lucas.faget@laposte.net">
                <CustomButtonWithIcon iconSrc={ASSETS_ICON + "email.svg"} text="E-Mail lucas-faget@laposte.net" />
            </a>
        </div>
    </div>
</main>

<style>
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
