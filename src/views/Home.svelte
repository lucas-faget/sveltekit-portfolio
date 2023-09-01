<script lang="ts">
    import Aside from "../lib/Aside.svelte";
    import Image from "../lib/Image.svelte";
    import ListWithImage from "../lib/ListWithImage.svelte";
    import Paragraph from "../lib/Paragraph.svelte";
    import FromDownAnimation from "../lib/FromDownAnimation.svelte";
    import Welcome from "../lib/Welcome.svelte";

    const ASSETS_LOGOS = "/assets/logos/";
    const ASSETS_FLAGS = "/assets/flags/";
    const ASSETS_SCREENSHOTS = "/assets/screenshots/";
</script>

<main>
    <Welcome text={["Lucas Faget", "Web developer", "Welcome to my portfolio"]}/>

    <div class="articles">
        <!-- Sokoban -->
        <section class="article">
            <div class="aside">
                <Aside index="01." title="Chess" />
            </div>
            <div class="section">
                <FromDownAnimation>
                    <Paragraph fontSize={20} text="Chess game playable locally with 4 variants, Strandard, Fischer Random, Fog Of War, Four Player Four. The site has a learning section to understand the movement of the pieces." />
                </FromDownAnimation>

                <FromDownAnimation>
                    <ListWithImage items={[
                        { src: ASSETS_LOGOS + "typescript.svg", text: "TypeScript" },
                        { src: ASSETS_LOGOS + "vue.svg", text: "Vue.js" },
                        { src: ASSETS_FLAGS + "united-kingdom.svg", text: "English" }
                    ]} />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Paragraph fontSize={20} text="To visit the website : #https://chess-lucas-faget.netlify.app" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Paragraph fontSize={20} text="To see the GitHub repository : #https://github.com/lucas-faget/vue-chess" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={ASSETS_SCREENSHOTS + "chess1.png"} description="Chess screenshot" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={ASSETS_SCREENSHOTS + "chess2.png"} description="Chess screenshot" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Paragraph fontSize={20} text="To learn more about Chess : #https://en.wikipedia.org/wiki/Chess" />
                </FromDownAnimation>
            </div>
        </section>

        <!-- Sokoban -->
        <section class="article">
            <div class="aside">
                <Aside index="02." title="Sokoban" />
            </div>
            <div class="section">
                <FromDownAnimation>
                    <Paragraph fontSize={20} text="Sokoban game encoded with Svelte and Typescript. The player can move the character using the directional arrows on the keyboard. The player can go back to the last move played and restart the level again. He can also customize his assets. The online playable game is coming soon using Socket.io." />
                </FromDownAnimation>

                <FromDownAnimation>
                    <ListWithImage items={[
                        { src: ASSETS_LOGOS + "typescript.svg", text: "TypeScript" },
                        { src: ASSETS_LOGOS + "svelte.svg", text: "Svelte.js" },
                        { src: ASSETS_FLAGS + "united-kingdom.svg", text: "English" }
                    ]} />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Paragraph fontSize={20} text="To visit the website : #https://sokoban-lucas-faget.netlify.app" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Paragraph fontSize={20} text="To see the GitHub repository : #https://github.com/lucas-faget/svelte-sokoban" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={ASSETS_SCREENSHOTS + "sokoban1.png"} description="Sokoban screenshot" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={ASSETS_SCREENSHOTS + "sokoban2.png"} description="Sokoban screenshot" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Paragraph fontSize={20} text="To learn more about Sokoban : #https://en.wikipedia.org/wiki/Sokoban" />
                </FromDownAnimation>
            </div>
        </section>

        <!-- Movue -->
        <section class="article">
            <div class="aside">
                <Aside index="03." title="Movue" />
            </div>
            <div class="section">
                <FromDownAnimation>
                    <Paragraph fontSize={20} text="A minimalist movie database using Vue.js. The user can visit the list of available films, see the details of a movie and add a movie to the database." />
                </FromDownAnimation>

                <FromDownAnimation>
                    <ListWithImage items={[
                        { src: ASSETS_LOGOS + "javascript.svg", text: "JavaScript" },
                        { src: ASSETS_LOGOS + "vue.svg", text: "Vue.js" },
                        { src: ASSETS_FLAGS + "france.svg", text: "French" }
                    ]} />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Paragraph fontSize={20} text="To visit the website : #https://movue-lucas-faget.netlify.app" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Paragraph fontSize={20} text="To see the GitHub repository : #https://github.com/lucas-faget/vue-movies" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={ASSETS_SCREENSHOTS + "movue.png"} description="Movue screenshot" />
                </FromDownAnimation>
            </div>
        </section>

        <!-- Healthy -->
        <section class="article">
            <div class="aside">
                <Aside index="04." title="Healthy" />
            </div>
            <div class="section">
                <FromDownAnimation>
                    <Paragraph fontSize={20} text="Healthy" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <ListWithImage items={[
                        { src: ASSETS_LOGOS + "laravel.svg", text: "Laravel" },
                        { src: ASSETS_LOGOS + "svelte.svg", text: "Svelte.js" },
                        { src: ASSETS_LOGOS + "postgresql.svg", text: "PostgreSQL" },
                        { src: ASSETS_LOGOS + "docker.svg", text: "Docker" },
                        { src: ASSETS_FLAGS + "united-kingdom.svg", text: "English" }
                    ]} />
                </FromDownAnimation>

                <!-- <FromDownAnimation>
                    <Paragraph fontSize={20} text="To visit the website : #https://healthy-lucas-faget.netlify.app" />
                </FromDownAnimation> -->

                <FromDownAnimation>
                    <Paragraph fontSize={20} text="To see the GitHub repository : #https://github.com/lucas-faget/laravel-healthy" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={ASSETS_SCREENSHOTS + "healthy1.png"} description="Healthy screenshot" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={ASSETS_SCREENSHOTS + "healthy2.png"} description="Healthy screenshot" />
                </FromDownAnimation>
            </div>
        </section>

    </div>
</main>

<style>
    main {
        /* background-color: var(--color-dark); */
        background-image: url("/assets/background1.jpg");
        background-attachment: fixed;
        background-size: cover;
        background-position-y: top;
        background-repeat: no-repeat;
        border-radius: 0 0 0 80px;
    }

    .articles {
        position: relative;
        display: flex;
        flex-direction: column;
        padding-inline: var(--horizontal-padding);
        padding-bottom: 80px;
        z-index: 1;
    }

    .article {
        position: relative;
        display: flex;
        justify-content: space-between;
        padding-block: var(--vertical-gap);
        box-sizing: border-box;
        border-bottom: 2px dotted var(--color-light);
        z-index: 1;
    }

    .aside {
        width: 30%;
    }

    .section {
        display: flex;
        flex-direction: column;
        gap: var(--vertical-gap);
        width: 60%;
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
