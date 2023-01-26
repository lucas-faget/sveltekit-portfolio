<script lang="ts">
    import Aside from "./lib/Aside.svelte";
    import Image from "./lib/Image.svelte";
    import Welcome from "./lib/Welcome.svelte";

    const IMAGE_URL_ROOT = "/assets/";
</script>

<main>
    <Welcome text="#Lucas #Faget. 25 yo. Web developer."/>

    <div class="articles">
        <section class="article">
            <div class="aside">
                <Aside index="02" title="title1" />
            </div>
            <div class="section">
                <Image url="{IMAGE_URL_ROOT + "technology-earth1.jpg"}" description="Technology Earth" />
            </div>
        </section>
        <section class="article">
            <div class="aside">
                <Aside index="01." title="title2" />
            </div>
            <div class="section">
                <Image url="{IMAGE_URL_ROOT + "technology-earth2.jpg"}" description="Technology Earth" />
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
        padding-block: var(--vertical-gap);;
        box-sizing: border-box;
        border-bottom: 2px dotted #fff;
    }

    .aside {
        width: 30%;
        /* background-color: blue; */
    }

    .section {
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
