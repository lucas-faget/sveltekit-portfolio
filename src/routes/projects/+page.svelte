<script lang="ts">
    import type { PageData } from "./$types";
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
    {#each data.json.projects as project, index}
        <div id={project.name}>
            <Chapter index={index + 1} title={project.name} dark={index % 2 !== 0}>
                <Title title={project.title} />

                {#if project.overview}
                    <p>{project.overview}</p>
                {/if}

                {#if project.websiteUrl}
                    <a href={project.websiteUrl}>
                        <Button dark={index % 2 !== 0}>{project.websiteUrl}</Button>
                    </a>
                {/if}

                {#if project.githubRepository}
                    <a href={project.githubRepository}>
                        <Button dark={index % 2 !== 0}>{project.githubRepository}</Button>
                    </a>
                {/if}

                {#if project.languages}
                    <ul class="flex flex-col gap-8">
                        {#each project.languages as language}
                            <li class="flex items-center max-sm:gap-4 gap-6">
                                {#if language.iconName}
                                    <iconify-icon
                                        icon={language.iconName}
                                        width="60"
                                        height="60"
                                        class="max-sm:hidden"
                                    />
                                    <iconify-icon
                                        icon={language.iconName}
                                        width="40"
                                        height="40"
                                        class="sm:hidden"
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
