<script lang="ts">
    import type { PageData } from "./$types";
    import { isMediumScreen } from "$lib/stores/mediaQuery";
    import type { MenuItem } from "$lib/types/MenuItem";
    import Chapter from "$lib/components/Chapter.svelte";
    import VerticalMenu from "$lib/components/VerticalMenu.svelte";
    import Title from "$lib/components/Title.svelte";
    import Button from "$lib/components/Button.svelte";
    import SocialMedias from "$lib/components/SocialMedias.svelte";
    import Headline from "$lib/components/Headline.svelte";
    import StarRating from "$lib/components/StarRating.svelte";
    import Timeline from "$lib/components/Timeline.svelte";
    import TimelineItem from "$lib/components/TimelineItem.svelte";

    export let data: PageData;

    const menuItems: MenuItem[] = [
        {
            id: "introduction",
            label: "Introduction",
        },
        {
            id: "skills",
            label: "Compétences",
        },
        {
            id: "experience",
            label: "Expérience",
        },
        {
            id: "education",
            label: "Formation",
        },
    ];
</script>

<svelte:head>
    <title>About</title>
    <meta name="description" content="About" />
</svelte:head>

<div>
    <div id="introduction">
        <Chapter aside>
            <div slot="aside">
                <VerticalMenu items={menuItems} id="introduction" />
            </div>

            <Title title={data.aboutData.introduction.title} />

            <a href="{data.assetsBaseUrl}/{data.cvFileName}" download class="flex">
                <Button rounded>Curriculum Vitae</Button>
            </a>

            {#each data.aboutData.introduction.overview.split("\n") as paragraph}
                <p>{paragraph}</p>
            {/each}

            <SocialMedias links={data.socialMediaLinks} />
        </Chapter>
    </div>

    <div id="skills">
        <Chapter aside dark>
            <div slot="aside">
                <VerticalMenu items={menuItems} id="skills" />
            </div>

            {#each data.aboutData.skills as skillGroup}
                <Headline small={!$isMediumScreen}>{skillGroup.headline}</Headline>

                <ul class="flex flex-col gap-8">
                    {#each skillGroup.languages as language}
                        <li class="flex items-center max-sm:gap-4 gap-6">
                            {#if language.rating}
                                <StarRating rating={language.rating} />
                            {/if}

                            {#if language.iconName}
                                <iconify-icon
                                    icon={language.iconName}
                                    width={$isMediumScreen ? 60 : 40}
                                    height={$isMediumScreen ? 60 : 40}
                                />
                            {/if}

                            {#if language.name}
                                <p>{language.name}</p>
                            {/if}
                        </li>
                    {/each}
                </ul>
            {/each}
        </Chapter>
    </div>

    <div id="experience">
        <Chapter aside>
            <div slot="aside">
                <VerticalMenu items={menuItems} id="experience" />
            </div>

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
                                            height={$isMediumScreen ? 40 : 30}
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
        <Chapter aside dark>
            <div slot="aside">
                <VerticalMenu items={menuItems} id="education" />
            </div>

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
