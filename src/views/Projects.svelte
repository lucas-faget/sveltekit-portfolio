<script lang="ts">
    import Aside from "../lib/Aside.svelte";
    import Image from "../lib/Image.svelte";
    import ListWithImage from "../lib/ListWithImage.svelte";
    import Paragraph from "../lib/Paragraph.svelte";
    import FromDownAnimation from "../lib/FromDownAnimation.svelte";
    import Welcome from "../lib/Welcome.svelte";

    const ASSETS_LOGO = "/logo/";
    const ASSETS_FLAG = "/flag/";
    const ASSETS_SCREEN = "/screen/";
</script>

<main>
    <Welcome text={["Lucas Faget", "My personal projects"]}/>

    <div class="articles">
        <!-- Sokoban -->
        <section class="article">
            <div class="aside">
                <Aside index="01." title="Chess" />
            </div>
            <div class="section">
                <FromDownAnimation>
                    <Paragraph text="Chess game playable locally with 4 variants, Standard Chess, Fischer Random Chess, Fog of War, Four Player Chess. The site has a learning section to understand the movement of the pieces. Online games will soon be available thanks to Socket.io" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <ListWithImage items={[
                        { src: ASSETS_LOGO + "typescript.svg", text: "TypeScript" },
                        { src: ASSETS_LOGO + "vue.svg", text: "Vue.js" },
                        { src: ASSETS_FLAG + "united-kingdom.svg", text: "English" }
                    ]} />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Paragraph text="To visit the website : #https://chess-lucas-faget.netlify.app" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Paragraph text="To see the GitHub repository : #https://github.com/lucas-faget/vue-chess" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={ASSETS_SCREEN + "chess1.png"} description="Chess screenshot" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={ASSETS_SCREEN + "chess2.png"} description="Chess screenshot" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Paragraph text="To learn more about Chess : #https://en.wikipedia.org/wiki/Chess" />
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
                    <Paragraph text="Sokoban game encoded with Svelte and Typescript. The player can move the character using the directional arrows on the keyboard. The player can go back to the last move played and restart the level again. He can also customize his assets. The online playable game is coming soon using Socket.io." />
                </FromDownAnimation>

                <FromDownAnimation>
                    <ListWithImage items={[
                        { src: ASSETS_LOGO + "typescript.svg", text: "TypeScript" },
                        { src: ASSETS_LOGO + "svelte.svg", text: "Svelte.js" },
                        { src: ASSETS_FLAG + "united-kingdom.svg", text: "English" }
                    ]} />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Paragraph text="To visit the website : #https://sokoban-lucas-faget.netlify.app" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Paragraph text="To see the GitHub repository : #https://github.com/lucas-faget/svelte-sokoban" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={ASSETS_SCREEN + "sokoban1.png"} description="Sokoban screenshot" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={ASSETS_SCREEN + "sokoban2.png"} description="Sokoban screenshot" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Paragraph text="To learn more about Sokoban : #https://en.wikipedia.org/wiki/Sokoban" />
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
                    <Paragraph text="A minimalist movie database using Vue.js. The user can visit the list of available films, see the details of a movie and add a movie to the database." />
                </FromDownAnimation>

                <FromDownAnimation>
                    <ListWithImage items={[
                        { src: ASSETS_LOGO + "javascript.svg", text: "JavaScript" },
                        { src: ASSETS_LOGO + "vue.svg", text: "Vue.js" },
                        { src: ASSETS_FLAG + "france.svg", text: "French" }
                    ]} />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Paragraph text="To visit the website : #https://movue-lucas-faget.netlify.app" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Paragraph text="To see the GitHub repository : #https://github.com/lucas-faget/vue-movies" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={ASSETS_SCREEN + "movue1.png"} description="Movue screenshot" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={ASSETS_SCREEN + "movue2.png"} description="Movue screenshot" />
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
                    <Paragraph text="Site under construction. Laravel API using PostgreSQL and OpenFoodFacts API, a food products database made by everyone. The front in Svelte will allow to read the nutritional information of food products, and list your personal intake, which will allow you to count calories. The database is dockerized." />
                </FromDownAnimation>

                <FromDownAnimation>
                    <ListWithImage items={[
                        { src: ASSETS_LOGO + "laravel.svg", text: "Laravel" },
                        { src: ASSETS_LOGO + "svelte.svg", text: "Svelte.js" },
                        { src: ASSETS_LOGO + "postgresql.svg", text: "PostgreSQL" },
                        { src: ASSETS_LOGO + "docker.svg", text: "Docker" },
                        { src: ASSETS_FLAG + "united-kingdom.svg", text: "English" }
                    ]} />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Paragraph text="To see the GitHub repository : #https://github.com/lucas-faget/laravel-healthy" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={ASSETS_SCREEN + "healthy1.png"} description="Healthy screenshot" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={ASSETS_SCREEN + "healthy2.png"} description="Healthy screenshot" />
                </FromDownAnimation>
            </div>
        </section>

    </div>
</main>

<style>
    main {
        background-image: url("/background/background1.jpg");
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
