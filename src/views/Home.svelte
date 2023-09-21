<script lang="ts">
    import Aside from "../lib/Aside.svelte";
    import ListWithImage from "../lib/ListWithImage.svelte";
    import Paragraph from "../lib/Paragraph.svelte";
    import FromDownAnimation from "../lib/FromDownAnimation.svelte";
    import Welcome from "../lib/Welcome.svelte";
    import List from "../lib/List.svelte";
    import CustomButton from "../lib/CustomButton.svelte";
    import { Link } from "svelte-routing";
    import { onMount } from 'svelte';

    onMount(() => {
        window.scrollTo(0, 0);
    });

    const ASSETS_LOGO = "/logo/";
</script>

<main class="background-landscape1">
    <Welcome text={["Lucas Faget", "Web developer", "Welcome to my portfolio"]}/>

    <div class="articles">
        <!-- Introduction -->
        <section class="article">
            <div class="aside">
                <Aside index="01." title="Introduction" />
            </div>
            <div class="section">
                <FromDownAnimation>
                    <Paragraph text="Welcome to my website !" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Paragraph text="I am Lucas Faget, a 💻 web developer with a background in Computer Science from a two-year technical degree and a Professional Bachelor's degree in web development. Within the span of a year, I was able to integrate into the professional world by joining Simpliciti company. Today, I am seeking a new challenge in a company where I can leverage my expertise." />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Link to="/cv" style="text-decoration: none">
                        <CustomButton text="Curriculum Vitae" isContrasting={true} />
                    </Link>
                </FromDownAnimation>
            </div>
        </section>

        <!-- My technology stack -->
        <section class="article">
            <div class="aside">
                <Aside index="02." title="My technology stack" />
            </div>
            <div class="section">
                <FromDownAnimation>
                    <Paragraph text="FRONT-END" />
                </FromDownAnimation>
                
                <FromDownAnimation>
                    <ListWithImage items={[
                        { src: ASSETS_LOGO + "javascript.svg", text: "JavaScript" },
                        { src: ASSETS_LOGO + "typescript.svg", text: "TypeScript" },
                        { src: ASSETS_LOGO + "vue.svg", text: "Vue.js" },
                        { src: ASSETS_LOGO + "svelte.svg", text: "Svelte" },
                        { src: ASSETS_LOGO + "react.svg", text: "React" }
                    ]} />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Paragraph text="BACK-END" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <ListWithImage items={[
                        { src: ASSETS_LOGO + "php.svg", text: "PHP" },
                        { src: ASSETS_LOGO + "laravel.svg", text: "Laravel" },
                        { src: ASSETS_LOGO + "symfony.svg", text: "Symfony" },
                        { src: ASSETS_LOGO + "nodejs.svg", text: "Node.js" }
                    ]} />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Paragraph text="I also have the basics of Java, C# and Python." />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Paragraph text="DATABASE" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <ListWithImage items={[
                        { src: ASSETS_LOGO + "mysql.png", text: "MySQL" },
                        { src: ASSETS_LOGO + "postgresql.svg", text: "PostgreSQL" },
                        { src: ASSETS_LOGO + "mongodb.svg", text: "MongoDB" }
                    ]} />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Link to="/projects" style="text-decoration: none">
                        <CustomButton text="Go to my projects" isContrasting={true} />
                    </Link>
                </FromDownAnimation>
            </div>
        </section>

        <!-- Work experience -->
        <section class="article">
            <div class="aside">
                <Aside index="03." title="Work experience" />
            </div>
            <div class="section">
                <FromDownAnimation>
                    <ListWithImage items={[
                        { src: ASSETS_LOGO + "simpliciti.svg", text: "Simpliciti" }
                    ]} />
                </FromDownAnimation>

                <FromDownAnimation>
                    <List items={[
                        { text: "July 2022 - Sept. 2023 (13 months)" },
                        { text: "Web Developer Intern" },
                        { text: "Maintenance and development of an application to optimize waste collection circuits" },
                        { text: "PHP / MySQL / PostgreSQL / JavaScript (+ Svelte / TypeScript / Docker)" },
                        { text: "Project management (SCRUM, Git, EasyRedmine, ...)" }
                    ]} />
                </FromDownAnimation>

                <FromDownAnimation>
                    <ListWithImage items={[
                        { src: ASSETS_LOGO + "audit-action-plus.jpg", text: "Audit Action +" }
                    ]} />
                </FromDownAnimation>

                <FromDownAnimation>
                    <List items={[
                        { text: "June 2021 - Aug. 2021 (3 months)" },
                        { text: "Web Developer Intern" },
                        { text: "Development of an ERP" },
                        { text: "PHP / JavaScript / MySQL" }
                    ]} />
                </FromDownAnimation>
            </div>
        </section>

        <!-- Education -->
        <section class="article">
            <div class="aside">
                <Aside index="04." title="Education" />
            </div>
            <div class="section">
                <FromDownAnimation>
                    <ListWithImage items={[
                        { src: ASSETS_LOGO + "iut-bordeaux.jpg", text: "University of Bordeaux" }
                    ]} />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Paragraph text="Professional Bachelor Degree in computer sciences (2023)" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <ListWithImage items={[
                        { src: ASSETS_LOGO + "iut-toulouse.png", text: "University of Toulouse" }
                    ]} />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Paragraph text="DUT in computing (2021)" />
                </FromDownAnimation>
            </div>
        </section>

        <!-- Learn more -->
        <section class="article">
            <div class="aside">
                <Aside index="03." title="My networks" />
            </div>
            <div class="section">
                <FromDownAnimation>
                    <ListWithImage items={[
                        { src: ASSETS_LOGO + "linkedin.jpg", text: "LinkedIn: #https://fr.linkedin.com/in/lucas-faget" },
                        { src: ASSETS_LOGO + "github.jpg", text: "GitHub profile: #https://github.com/lucas-faget" }
                    ]} />
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
