<script lang="ts">
    import type { PageData } from "./$types";
    import { isSmallScreen } from "$lib/stores/mediaQuery";
    import { browser } from "$app/environment";
    import Chapter from "$lib/components/Chapter.svelte";
    import Title from "$lib/components/Title.svelte";
    import Timeline from "$lib/components/Timeline.svelte";
    import TimelineItem from "$lib/components/TimelineItem.svelte";
    import Button from "$lib/components/Button.svelte";
    import Carousel from "svelte-carousel";

    export let data: PageData;

    $: carouselImages =
        data.homeData?.carouselImages.map((image) => `${data.assetsBaseUrl}/${image}`) ?? [];

    $: skillGridSize = data.homeData?.skills
        ? Math.ceil(Math.sqrt(data.homeData.skills.length))
        : 1;
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Home" />
</svelte:head>

<div>
    <div id="projects">
        <Chapter>
            <Title title={"Apercu\ndes projets"}></Title>

            {#if data.homeData.carouselImages}
                <div class="relative w-full max-w-[64rem]">
                    <div
                        class="absolute w-[83.6%] top-[2.8%] left-1/2 -translate-x-1/2 aspect-video z-20"
                    >
                        {#if browser}
                            <Carousel
                                autoplayDuration={2000}
                                duration={2000}
                                autoplay
                                timingFunction="ease"
                                dots={false}
                                arrows={false}
                                swiping={false}
                            >
                                {#each data.homeData.carouselImages as image}
                                    <img
                                        class="w-full h-full object-cover"
                                        src="{data.assetsBaseUrl}/{image}"
                                        alt={image}
                                        draggable="false"
                                    />
                                {/each}
                            </Carousel>
                        {/if}
                    </div>
                    <img
                        class="relative w-full z-10"
                        src="{data.assetsBaseUrl}/images/mockup/laptop.png"
                        alt="Laptop frame"
                    />
                </div>
            {/if}

            <a href="/projects#project_1">
                <Button rounded>Tous les projects</Button>
            </a>
        </Chapter>
    </div>

    <div id="skills">
        <Chapter dark>
            <Title title={"Compétences\nprincipales"}></Title>

            <div class="w-full max-w-[32rem] flex flex-wrap gap-4 justify-center">
                {#each data.homeData.skills as skill}
                    <div
                        class="group h-28 w-28 sm:h-40 sm:w-40 flex justify-center items-center bg-neutral-800 rounded-lg cursor-grab"
                    >
                        <div
                            class="flex flex-col items-center sm:gap-4 gap-3 group-hover:scale-110 transition duration-300 ease"
                        >
                            {#if skill.iconName}
                                <iconify-icon
                                    icon={skill.iconName}
                                    width={$isSmallScreen ? 90 : 60}
                                    height={$isSmallScreen ? 60 : 40}
                                />
                            {/if}

                            {#if skill.name}
                                <p class="text-neutral-500 sm:text-base text-sm">{skill.name}</p>
                            {/if}
                        </div>
                    </div>
                {/each}
            </div>

            <a href="/about#skills">
                <Button rounded>Voir plus</Button>
            </a>
        </Chapter>
    </div>

    <div id="timeline">
        <Chapter>
            <Title title={"Chronologie"}></Title>

            <Timeline>
                {#each data.homeData.timeline as item}
                    <TimelineItem
                        title={item.title}
                        label={item.date}
                        imageAlt="image"
                        imageSrc={item.imageFile
                            ? `${data.assetsBaseUrl}/${item.imageFile}`
                            : undefined}
                    >
                        <div class="flex flex-col gap-1">
                            {#if item.place}
                                <p class="font-bold">{item.place}</p>
                            {/if}

                            {#if item.overview}
                                <ul>
                                    {#each item.overview.split("\n") as line}
                                        <li>{line}</li>
                                    {/each}
                                </ul>
                            {/if}
                        </div>
                    </TimelineItem>
                {/each}
            </Timeline>

            <a href="/about#experience">
                <Button rounded>Voir plus</Button>
            </a>
        </Chapter>
    </div>
</div>
