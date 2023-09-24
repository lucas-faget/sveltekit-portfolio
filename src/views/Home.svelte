<script lang="ts">
    import { Assets } from "../lib/Assets";
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
</script>

<main class="background-world-map">
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
                        { src: Assets.Logo + "javascript.svg", text: "JavaScript" },
                        { src: Assets.Logo + "typescript.svg", text: "TypeScript" },
                        { src: Assets.Logo + "vue.svg", text: "Vue.js" },
                        { src: Assets.Logo + "svelte.svg", text: "Svelte" },
                        { src: Assets.Logo + "react.svg", text: "React" }
                    ]} />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Paragraph text="BACK-END" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <ListWithImage items={[
                        { src: Assets.Logo + "php.svg", text: "PHP" },
                        { src: Assets.Logo + "laravel.svg", text: "Laravel" },
                        { src: Assets.Logo + "symfony-white.svg", text: "Symfony" },
                        { src: Assets.Logo + "nodejs.svg", text: "Node.js" }
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
                        { src: Assets.Logo + "mysql.png", text: "MySQL" },
                        { src: Assets.Logo + "postgresql.svg", text: "PostgreSQL" },
                        { src: Assets.Logo + "mongodb.svg", text: "MongoDB" }
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
                        { src: Assets.Logo + "simpliciti.svg", text: "Simpliciti" }
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
                        { src: Assets.Logo + "audit-action-plus.jpg", text: "Audit Action +" }
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
                        { src: Assets.Logo + "iut-bordeaux.jpg", text: "University of Bordeaux" }
                    ]} />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Paragraph text="Professional Bachelor Degree in computer sciences (2023)" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <ListWithImage items={[
                        { src: Assets.Logo + "iut-toulouse.png", text: "University of Toulouse" }
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
                        { src: Assets.Logo + "linkedin.jpg", text: "LinkedIn: #https://fr.linkedin.com/in/lucas-faget" },
                        { src: Assets.Logo + "github.jpg", text: "GitHub profile: #https://github.com/lucas-faget" }
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
