<script lang="ts">
    import type { PageData } from "./$types";
    import Welcome from "$lib/components/Welcome.svelte";
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
    <Welcome text="Projects" />

    {#each data.json.projects as project, index}
        <div id={`project_${index + 1}`}>
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
                            <li class="flex items-center gap-8 text-lg">
                                {#if language.imageFile}
                                    <div class="h-14 w-20 flex justify-center">
                                        <img
                                            class="h-full"
                                            src={`${data.assetsBaseUrl}/${language.imageFile}`}
                                            alt={language.name}
                                        />
                                    </div>
                                {/if}

                                {#if language.name}
                                    <p>{language.name}</p>
                                {/if}
                            </li>
                        {/each}
                    </ul>
                {/if}

                {#if project.screenshots}
                    {#each project.screenshots as screenshot}
                        <img src={`${data.assetsBaseUrl}/${screenshot}`} alt={project.name} />
                    {/each}
                {/if}
            </Chapter>
        </div>
    {/each}
</div>
