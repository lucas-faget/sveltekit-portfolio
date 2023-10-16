<script lang="ts">
    import { Assets } from "../enum/Assets";
    import Aside from "../lib/Aside.svelte";
    import Image from "../lib/Image.svelte";
    import ListWithImage from "../lib/ListWithImage.svelte";
    import Paragraph from "../lib/Paragraph.svelte";
    import FromDownAnimation from "../lib/FromDownAnimation.svelte";
    import Welcome from "../lib/Welcome.svelte";
    import CustomButton from "../lib/CustomButton.svelte";
    import { onMount } from 'svelte';

    onMount(() => {
        window.scrollTo(0, 0);
    });
</script>

<main class="background-world-map">
    <Welcome text={["Lucas Faget", "My personal projects"]}/>

    <div class="articles">
        <!-- Sokoban -->
        <section class="article">
            <div class="aside">
                <Aside index="01." title="Chess" />
            </div>
            <div class="section">
                <FromDownAnimation>
                    <Paragraph text="A chess website featuring a Vue.js front-end with TypeScript, and a back-end API developed in NestJS, along with a WebSocket server powered by Socket.io, to enable online multiplayer chess matches." />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Paragraph text="The back-end is currently under development and will be available soon !" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <ListWithImage items={[
                        { src: Assets.Logo + "typescript.svg", text: "TypeScript" },
                        { src: Assets.Logo + "vue.svg", text: "Vue.js" },
                        { src: Assets.Logo + "nest.svg", text: "NestJS" },
                        { src: Assets.Logo + "socket.io.svg", text: "Socket.io" },
                        { src: Assets.Flag + "united-kingdom.svg", text: "English" }
                    ]} />
                </FromDownAnimation>

                <FromDownAnimation>
                    <a href="https://chess.lucas-faget.com">
                        <CustomButton text="Visit the website" isContrasting={true} />
                    </a>
                </FromDownAnimation>

                <FromDownAnimation>
                    <a href="https://github.com/lucas-faget/nest-vue-chess">
                        <CustomButton text="GitHub repository" isContrasting={true} />
                    </a>
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={Assets.Screen + "chess1.png"} description="Chess screenshot" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={Assets.Screen + "chess2.png"} description="Chess screenshot" />
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
                    <Paragraph text="A single-level Sokoban game coded with Svelte and TypeScript." />
                </FromDownAnimation>

                <FromDownAnimation>
                    <ListWithImage items={[
                        { src: Assets.Logo + "typescript.svg", text: "TypeScript" },
                        { src: Assets.Logo + "svelte.svg", text: "Svelte.js" },
                        { src: Assets.Flag + "united-kingdom.svg", text: "English" }
                    ]} />
                </FromDownAnimation>

                <FromDownAnimation>
                    <a href="https://sokoban.lucas-faget.com">
                        <CustomButton text="Visit the website" isContrasting={true} />
                    </a>
                </FromDownAnimation>

                <FromDownAnimation>
                    <a href="https://github.com/lucas-faget/svelte-sokoban">
                        <CustomButton text="GitHub repository" isContrasting={true} />
                    </a>
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={Assets.Screen + "sokoban1.png"} description="Sokoban screenshot" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={Assets.Screen + "sokoban2.png"} description="Sokoban screenshot" />
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
                    <Paragraph text="A CRUD-based movie database developed with Vue.js, containing a few locally stored movies about space." />
                </FromDownAnimation>

                <FromDownAnimation>
                    <ListWithImage items={[
                        { src: Assets.Logo + "javascript.svg", text: "JavaScript" },
                        { src: Assets.Logo + "vue.svg", text: "Vue.js" },
                        { src: Assets.Flag + "france.svg", text: "French" }
                    ]} />
                </FromDownAnimation>

                <FromDownAnimation>
                    <a href="https://movue.lucas-faget.com">
                        <CustomButton text="Visit the website" isContrasting={true} />
                    </a>
                </FromDownAnimation>

                <FromDownAnimation>
                    <a href="https://github.com/lucas-faget/vue-movies">
                        <CustomButton text="GitHub repository" isContrasting={true} />
                    </a>
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={Assets.Screen + "movue1.png"} description="Movue screenshot" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={Assets.Screen + "movue2.png"} description="Movue screenshot" />
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
                    <Paragraph text="Site under construction. Laravel API using PostgreSQL and OpenFoodFacts API, a food products database made by everyone. The front in Svelte enables to read the nutritional information of food products, and list your personal intake, which will allow you to count calories. The database is dockerized." />
                </FromDownAnimation>

                <FromDownAnimation>
                    <ListWithImage items={[
                        { src: Assets.Logo + "laravel.svg", text: "Laravel" },
                        { src: Assets.Logo + "svelte.svg", text: "Svelte.js" },
                        { src: Assets.Logo + "postgresql.svg", text: "PostgreSQL" },
                        { src: Assets.Logo + "docker.svg", text: "Docker" },
                        { src: Assets.Flag + "united-kingdom.svg", text: "English" }
                    ]} />
                </FromDownAnimation>

                <FromDownAnimation>
                    <a href="https://github.com/lucas-faget/laravel-healthy">
                        <CustomButton text="GitHub repository" isContrasting={true} />
                    </a>
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={Assets.Screen + "healthy1.png"} description="Healthy screenshot" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={Assets.Screen + "healthy2.png"} description="Healthy screenshot" />
                </FromDownAnimation>
            </div>
        </section>

    </div>
</main>

<style>
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
