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
                    <Title title={project.title} small />

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
                    {#each project.screenshots as screenshot}
                        <img src="{data.assetsBaseUrl}/{screenshot}" alt={project.name} />
                    {/each}
                {/if}
            </Chapter>
        </div>
    {/each}
</div>
