<script lang="ts">
    import type { PageData } from "./$types";
    import Welcome from "$lib/components/Welcome.svelte";
    import Chapter from "$lib/components/Chapter.svelte";
    import Title from "$lib/components/Title.svelte";
    import Timeline from "$lib/components/Timeline.svelte";
    import TimelineItem from "$lib/components/TimelineItem.svelte";
    import Carousel from "$lib/components/Carousel.svelte";

    export let data: PageData;

    $: carouselImages = data.json.carousel.map((image) => `${data.assetsBaseUrl}/${image}`);

    $: skillGridSize = Math.ceil(Math.sqrt(data.json.skills.length));
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Home" />
</svelte:head>

<div>
    <Welcome text="Home" />

    <Chapter>
        <Title title="Project overview"></Title>
        <Carousel images={carouselImages} />
    </Chapter>

    <Chapter dark>
        <Title title="Main skills"></Title>
        <div class={`grid grid-cols-${skillGridSize} gap-4`}>
            {#each data.json.skills as skill}
                <div
                    class="group h-40 w-40 flex justify-center items-center bg-neutral-800 rounded-lg cursor-grab"
                >
                    <div
                        class="flex flex-col items-center gap-4 group-hover:scale-110 transition duration-300 ease"
                    >
                        {#if skill.imageFile}
                            <img
                                class="h-14 max-w-20"
                                src={`${data.assetsBaseUrl}/${skill.imageFile}`}
                                alt={skill.name}
                            />
                        {/if}

                        {#if skill.name}
                            <p class="text-neutral-500">{skill.name}</p>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </Chapter>

    <Chapter>
        <Title title="Timeline"></Title>

        <Timeline>
            {#each data.json.timeline as item}
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
    </Chapter>
</div>
