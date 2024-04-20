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
                    <Paragraph text="A chess website featuring a Vue.js frontend with TypeScript." />
                </FromDownAnimation>

                <FromDownAnimation>
                    <ListWithImage items={[
                        { src: Assets.Technology + "vuejs.svg", text: "Vue.js" },
                        { src: Assets.Technology + "typescript.svg", text: "TypeScript" },
                        { src: Assets.Icon + "flag/united-kingdom.svg", text: "English" }
                    ]} />
                </FromDownAnimation>

                <FromDownAnimation>
                    <a href="https://chess.lucas-faget.com">
                        <CustomButton text="Visit the website" isContrasting={true} />
                    </a>
                </FromDownAnimation>

                <FromDownAnimation>
                    <a href="https://github.com/lucas-faget/vue-chess">
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

        <!-- Healthy -->
        <section class="article">
            <div class="aside">
                <Aside index="02." title="Healthy" />
            </div>
            <div class="section">
                <FromDownAnimation>
                    <Paragraph text="A food application which allows you to read the nutritional information, list your daily food intake, and count calories." />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Paragraph text="The backend is a Laravel and PostgreSQL API. The food product data are based on FoodData Central : #https://fdc.nal.usda.gov. The frontend is powered by Svelte. The database is dockerized." />
                </FromDownAnimation>

                <FromDownAnimation>
                    <ListWithImage items={[
                        { src: Assets.Technology + "laravel.svg", text: "Laravel" },
                        { src: Assets.Technology + "svelte.svg", text: "Svelte.js" },
                        { src: Assets.Technology + "typescript.svg", text: "TypeScript" },
                        { src: Assets.Technology + "postgresql.svg", text: "PostgreSQL" },
                        { src: Assets.Technology + "docker.svg", text: "Docker" },
                        { src: Assets.Icon + "flag/united-kingdom.svg", text: "English" }
                    ]} />
                </FromDownAnimation>

                <FromDownAnimation>
                    <a href="https://github.com/lucas-faget/laravel-svelte-healthy">
                        <CustomButton text="GitHub repository" isContrasting={true} />
                    </a>
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={Assets.Screen + "healthy1.png"} description="Healthy screenshot" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={Assets.Screen + "healthy2.png"} description="Healthy screenshot" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={Assets.Screen + "healthy3.png"} description="Healthy screenshot" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={Assets.Screen + "healthy4.png"} description="Healthy screenshot" />
                </FromDownAnimation>
            </div>
        </section>

        <!-- Networth -->
        <section class="article">
            <div class="aside">
                <Aside index="03." title="Networth" />
            </div>
            <div class="section">
                <FromDownAnimation>
                    <Paragraph text="A professional social network inspired by LinkedIn. The aim of the application is to find professionals who can help you with your projects." />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Paragraph text="The backend is an API using Symfony and PostgreSQL. The frontend is powered by Vue.js. The database is dockerized." />
                </FromDownAnimation>

                <FromDownAnimation>
                    <ListWithImage items={[
                        { src: Assets.Technology + "symfony.svg", text: "Symfony" },
                        { src: Assets.Technology + "vuejs.svg", text: "Vue.js" },
                        { src: Assets.Technology + "typescript.svg", text: "TypeScript" },
                        { src: Assets.Technology + "mysql.svg", text: "MySQL" },
                        { src: Assets.Technology + "docker.svg", text: "Docker" },
                        { src: Assets.Icon + "flag/united-kingdom.svg", text: "English" }
                    ]} />
                </FromDownAnimation>

                <FromDownAnimation>
                    <a href="https://github.com/lucas-faget/symfony-vue-networth">
                        <CustomButton text="GitHub repository" isContrasting={true} />
                    </a>
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={Assets.Screen + "networth1.png"} description="Networth screenshot" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={Assets.Screen + "networth2.png"} description="Networth screenshot" />
                </FromDownAnimation>
            </div>
        </section>

        <!-- Movue -->
        <section class="article">
            <div class="aside">
                <Aside index="04." title="Movue" />
            </div>
            <div class="section">
                <FromDownAnimation>
                    <Paragraph text="A CRUD-based movie database written in Vue.js, containing a few locally stored movies about space." />
                </FromDownAnimation>

                <FromDownAnimation>
                    <ListWithImage items={[
                        { src: Assets.Technology + "vuejs.svg", text: "Vue.js" },
                        { src: Assets.Technology + "javascript.svg", text: "JavaScript" },
                        { src: Assets.Icon + "flag/france.svg", text: "French" }
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

        <!-- Sokoban -->
        <section class="article">
            <div class="aside">
                <Aside index="05." title="Sokoban" />
            </div>
            <div class="section">
                <FromDownAnimation>
                    <Paragraph text="A single-level Sokoban game developed with Svelte and TypeScript." />
                </FromDownAnimation>

                <FromDownAnimation>
                    <ListWithImage items={[
                        { src: Assets.Technology + "svelte.svg", text: "Svelte.js" },
                        { src: Assets.Technology + "typescript.svg", text: "TypeScript" },
                        { src: Assets.Icon + "flag/united-kingdom.svg", text: "English" }
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
