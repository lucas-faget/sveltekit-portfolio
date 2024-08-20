<script lang="ts">
    import type { PageData } from "./$types";
    import { isLargeScreen } from "$lib/stores/mediaQuery";
    import { browser } from "$app/environment";
    import Chapter from "$lib/components/Chapter.svelte";
    import Title from "$lib/components/Title.svelte";
    import SocialMedias from "$lib/components/SocialMedias.svelte";
    import Carousel from "svelte-carousel";

    export let data: PageData;
</script>

<svelte:head>
    <title>Projects</title>
    <meta name="description" content="Projects" />
</svelte:head>

<div>
    {#each data.projectData.projects as project, index}
        <div id={project.name}>
            <Chapter aside dark={index % 2 !== 0}>
                <div class="flex flex-col gap-6" slot="aside">
                    <Title title={project.title} />

                    {#if project.socialMediaLinks.length > 0}
                        <SocialMedias links={project.socialMediaLinks} />
                    {/if}

                    {#if project.languages}
                        <div class="flex flex-wrap gap-3 md:gap-4">
                            {#each project.languages as language}
                                {#if language.iconName}
                                    <iconify-icon
                                        icon={language.iconName}
                                        width={$isLargeScreen ? 50 : 40}
                                        height={$isLargeScreen ? 50 : 40}
                                    />
                                {/if}
                            {/each}
                        </div>
                    {/if}
                </div>

                {#if project.screenshots}
                    <div class="relative">
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
                                    {#each project.screenshots as screenshot}
                                        <img
                                            class="w-full h-full object-cover"
                                            src="{data.assetsBaseUrl}/{screenshot}"
                                            alt={project.name}
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
            </Chapter>
        </div>
    {/each}
</div>
