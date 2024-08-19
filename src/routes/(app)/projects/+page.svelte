<script lang="ts">
    import type { PageData } from "./$types";
    import { isLargeScreen } from "$lib/stores/mediaQuery";
    import Chapter from "$lib/components/Chapter.svelte";
    import Title from "$lib/components/Title.svelte";
    import SocialMedias from "$lib/components/SocialMedias.svelte";

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
                            class="absolute top-[4.2%] left-1/2 -translate-x-1/2 w-[72.5%] aspect-video z-20"
                        >
                            <img
                                class="w-full h-full object-cover"
                                src="{data.assetsBaseUrl}/{project.screenshots[0]}"
                                alt={project.name}
                            />
                        </div>
                        <img
                            class="relative w-full z-10"
                            src="{data.assetsBaseUrl}/images/mockup/laptop.svg"
                            alt="Laptop mockup"
                        />
                    </div>
                {/if}
            </Chapter>
        </div>
    {/each}
</div>
