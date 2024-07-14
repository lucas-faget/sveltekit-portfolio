<script lang="ts">
    import type { PageData } from "./$types";
    import { isSmallScreen } from "$lib/stores/mediaQuery";
    import Chapter from "$lib/components/Chapter.svelte";
    import Title from "$lib/components/Title.svelte";
    import Button from "$lib/components/Button.svelte";

    export let data: PageData;
</script>

<svelte:head>
    <title>Projects</title>
    <meta name="description" content="Projects" />
</svelte:head>

<div>
    {#each data.projectData.projects as project, index}
        <div id={project.name}>
            <Chapter index={index + 1} title={project.name} dark={index % 2 !== 0}>
                <Title title={project.title} />

                {#if project.overview}
                    <div class="flex flex-col gap-6">
                        {#each project.overview.split("\n") as paragraph}
                            <p>{paragraph}</p>
                        {/each}
                    </div>
                {/if}

                {#if project.websiteUrl}
                    <a href={project.websiteUrl}>
                        <Button dark={index % 2 !== 0} rounded>
                            <div class="flex gap-4 items-center">
                                <iconify-icon icon="bi:globe2" class="max-sm:text-xl text-3xl" />
                                <span>Visiter le site web</span>
                            </div>
                        </Button>
                    </a>
                {/if}

                {#if project.githubRepository}
                    <a href={project.githubRepository}>
                        <Button dark={index % 2 !== 0} rounded>
                            <div class="flex gap-4 items-center">
                                <iconify-icon icon="bi:github" class="max-sm:text-xl text-3xl" />
                                <span>Voir le dépôt github</span>
                            </div>
                        </Button>
                    </a>
                {/if}

                {#if project.languages}
                    <ul class="flex flex-col gap-8">
                        {#each project.languages as language}
                            <li class="flex items-center max-sm:gap-4 gap-6">
                                {#if language.iconName}
                                    <iconify-icon
                                        icon={language.iconName}
                                        width={$isSmallScreen ? 40 : 60}
                                        height={$isSmallScreen ? 40 : 60}
                                    />
                                {/if}

                                {#if language.name}
                                    <p class="sm:text-lg">{language.name}</p>
                                {/if}
                            </li>
                        {/each}
                    </ul>
                {/if}

                {#if project.screenshots}
                    {#each project.screenshots as screenshot}
                        <img src="{data.assetsBaseUrl}/{screenshot}" alt={project.name} />
                    {/each}
                {/if}
            </Chapter>
        </div>
    {/each}
</div>
