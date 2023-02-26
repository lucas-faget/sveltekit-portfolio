<script lang="ts">
    import Aside from "./lib/Aside.svelte";
    import Image from "./lib/Image.svelte";
    import ListWithImage from "./lib/ListWithImage.svelte";
    import Welcome from "./lib/Welcome.svelte";

    const ASSETS = "/assets/";
    const ASSETS_LOGOS = "/assets/logos/";
</script>

<main>
    <Welcome text="#Lucas #Faget. 25 yo. Web developer. Welcome to my portfolio."/>

    <div class="articles">
        <section class="article">
            <div class="aside">
                <Aside index="01." title="title1" />
            </div>
            <div class="section">
                <Image src="{ASSETS + "technology-earth1.jpg"}" description="Technology Earth" />
                <ListWithImage items={[
                    { src: ASSETS_LOGOS + "typescript.png", text: "TypeScript" },
                    { src: ASSETS_LOGOS + "vuejs.svg", text: "Vue.js" },
                    { src: ASSETS_LOGOS + "svelte.svg", text: "Svelte.js" }
                ]} />
            </div>
        </section>
        <section class="article">
            <div class="aside">
                <Aside index="02." title="title2" />
            </div>
            <div class="section">
                <Image src="{ASSETS + "technology-earth2.jpg"}" description="Technology Earth" />
            </div>
        </section>
    </div>
</main>

<style>
    .articles {
        display: flex;
        flex-direction: column;
        padding-inline: var(--horizontal-padding);
    }

    .article {
        display: flex;
        justify-content: space-between;
        padding-block: var(--vertical-gap);
        box-sizing: border-box;
        border-bottom: 2px dotted #fff;
    }

    .aside {
        width: 30%;
        /* background-color: blue; */
    }

    .section {
        display: flex;
        flex-direction: column;
        gap: var(--vertical-gap);
        width: 60%;
        /* height: 100vh; */
        /* background-color: red; */
    }

    @media (max-width: 800px) {
        .article {
            flex-direction: column;
            gap: var(--vertical-gap);
        }

        .aside, .section {
            width: 100%;
        }
    }
</style>
