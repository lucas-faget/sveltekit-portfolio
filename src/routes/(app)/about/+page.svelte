<script lang="ts">
    import type { PageData } from "./$types";
    import { isSmallScreen } from "$lib/stores/mediaQuery";
    import Chapter from "$lib/components/Chapter.svelte";
    import Title from "$lib/components/Title.svelte";
    import Button from "$lib/components/Button.svelte";
    import SocialMediaLinks from "$lib/components/SocialMediaLinks.svelte";
    import Headline from "$lib/components/Headline.svelte";
    import StarRating from "$lib/components/StarRating.svelte";
    import Timeline from "$lib/components/Timeline.svelte";
    import TimelineItem from "$lib/components/TimelineItem.svelte";

    export let data: PageData;
</script>

<svelte:head>
    <title>About</title>
    <meta name="description" content="About" />
</svelte:head>

<div>
    <div id="introduction">
        <Chapter index={1} title="Introduction">
            <Title title={data.aboutData.introduction.title} />

            <a href="{data.assetsBaseUrl}/{data.cvFileName}" download class="flex">
                <Button rounded>Curriculum Vitae</Button>
            </a>

            {#each data.aboutData.introduction.overview.split("\n") as paragraph}
                <p>{paragraph}</p>
            {/each}

            <SocialMediaLinks socialMedias={data.socialMedias} />
        </Chapter>
    </div>

    <div id="skills">
        <Chapter index={2} title="Compétences" dark>
            {#each data.aboutData.skills as skillGroup}
                <Headline small={$isSmallScreen} dark>{skillGroup.headline}</Headline>

                <ul class="flex flex-col gap-8">
                    {#each skillGroup.languages as language}
                        <li class="flex items-center max-sm:gap-4 gap-6">
                            {#if language.rating}
                                <StarRating rating={language.rating} />
                            {/if}

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
            {/each}
        </Chapter>
    </div>

    <div id="experience">
        <Chapter index={3} title="Expérience">
            <Timeline>
                {#each data.aboutData.workExperience as item}
                    <TimelineItem
                        title={item.title}
                        label={item.date}
                        imageAlt={item.companyName}
                        imageSrc={item.companyImageFile
                            ? `${data.assetsBaseUrl}/${item.companyImageFile}`
                            : undefined}
                    >
                        <div class="flex flex-col gap-1">
                            <p class="font-bold">{item.companyName} - {item.place}</p>
                            <ul>
                                {#each item.overview.split("\n") as line}
                                    <li>{line}</li>
                                {/each}
                            </ul>
                        </div>

                        {#if item.languages.length > 0}
                            <div class="flex flex-wrap gap-4 mt-4">
                                {#each item.languages as language}
                                    {#if language.iconName}
                                        <iconify-icon
                                            icon={language.iconName}
                                            height={$isSmallScreen ? 30 : 40}
                                        />
                                    {/if}
                                {/each}
                            </div>
                        {/if}
                    </TimelineItem>
                {/each}
            </Timeline>
        </Chapter>
    </div>

    <div id="education">
        <Chapter index={4} title="Formation" dark>
            <Timeline>
                {#each data.aboutData.education as item}
                    <TimelineItem
                        title={item.title}
                        label={item.date}
                        imageAlt={item.schoolName}
                        imageSrc={item.imageFile
                            ? `${data.assetsBaseUrl}/${item.imageFile}`
                            : undefined}
                    >
                        <div class="flex flex-col gap-1">
                            <p class="font-bold">{item.schoolName}</p>
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
</div>
