<script lang="ts">
    import SmallNetworkLink from "./SmallNetworkLink.svelte";

    const ASSETS_ICON = "/icon/";
</script>

<footer class="footer">
    <div class="content">
        <div class="top">
            <div>Lucas Faget</div>
            <div>©2023</div>
        </div>
        <div class="bottom">
            <div class="networks">
                <SmallNetworkLink size={50} imageUrl={ASSETS_ICON + "linkedin.svg"} networkUrl="https://fr.linkedin.com/in/lucas-faget" />
                <SmallNetworkLink size={50} imageUrl={ASSETS_ICON + "github.svg"} networkUrl="https://github.com/lucas-faget" />
                <SmallNetworkLink size={50} imageUrl={ASSETS_ICON + "email.svg"} networkUrl="mailto:lucas.faget@laposte.net" />
            </div>
        </div>
    </div>
</footer>

<style>
    .footer {
        position: relative;
        background-color: var(--color-light);
        width: 100%;
        min-height: 80px;
        border-radius: 0 80px 0 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .footer::before {
        background-color: var(--color-dark);
        content: "";
        position: absolute;
        top: 0px;
        right: 0;
        width: 80px;
        height: 80px;
        z-index: -1;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 60%;
    }

    .content > div {
        width: 100%;
        padding-block: 40px;
    }

    .top {
        color: var(--color-dark);
        display: flex;
        justify-content: space-between;
        border-bottom: 2px dotted var(--color-dark);
        font-size: 25px;
        font-family: 'Anton', sans-serif;
    }

    .bottom {
        display: flex;
        justify-content: center;
    }

    .networks {
        display: flex;
        gap: 20px;
    }
</style>
