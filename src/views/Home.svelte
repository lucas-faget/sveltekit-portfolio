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
        <!-- Movue -->
        <section class="article">
            <div class="aside">
                <Aside index="01." title="Movue" />
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
                    <Paragraph fontSize={20} text="To visit the website : #https://www.allocine.fr/" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={ASSETS_SCREENSHOTS + "movue.png"} description="Technology Earth" />
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
                    <Paragraph fontSize={20} text="Sokoban game encoded with Svelte and Typescript. The player can move the character using the directional arrows on the keyboard. The player can go back to the last move played and restart the level again. He can also customize his assets." />
                </FromDownAnimation>

                <FromDownAnimation>
                    <ListWithImage items={[
                        { src: ASSETS_LOGOS + "typescript.svg", text: "TypeScript" },
                        { src: ASSETS_LOGOS + "svelte.svg", text: "Svelte.js" },
                        { src: ASSETS_FLAGS + "united-kingdom.svg", text: "English" }
                    ]} />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Paragraph fontSize={20} text="To visit the website : #https://en.wikipedia.org/wiki/Sokoban" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={ASSETS_SCREENSHOTS + "sokoban1.png"} description="Technology Earth" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={ASSETS_SCREENSHOTS + "sokoban2.png"} description="Technology Earth" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Paragraph fontSize={20} text="To learn more about Sokoban : #https://en.wikipedia.org/wiki/Sokoban" />
                </FromDownAnimation>
            </div>
        </section>
    </div>
</main>

<style>
    main {
        /* background-color: var(--color-dark); */
        background-image: url("assets/background1.jpg");
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
