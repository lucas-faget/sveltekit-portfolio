<script lang="ts">
    import type { PageData } from "./$types";
    import Welcome from "$lib/components/Welcome.svelte";
    import Chapter from "$lib/components/Chapter.svelte";
    import Timeline from "$lib/components/Timeline.svelte";
    import TimelineItem from "$lib/components/TimelineItem.svelte";

    export let data: PageData;
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Home" />
</svelte:head>

<div>
    <Welcome text="Home" />

    <Chapter index={1} title="Chronologie">
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
