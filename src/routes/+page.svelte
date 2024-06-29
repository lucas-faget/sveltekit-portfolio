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
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Home" />
</svelte:head>

<div>
    <Welcome text="Home" />

    <Chapter title={"hello"} dark>
        <Title title="Project overview"></Title>
        <Carousel images={carouselImages} />
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
