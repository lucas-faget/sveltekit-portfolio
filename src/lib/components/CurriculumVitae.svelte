<script lang="ts">
    import Headline from "./Headline.svelte";
    import Timeline from "./Timeline.svelte";
    import TimelineItem from "./TimelineItem.svelte";

    export let assetsBaseUrl: string;
    export let cvData: any;
</script>

<div class="relative w-[210mm] h-[297mm] bg-white text-dark flex flex-col overflow-hidden">
    <div class="w-full h-36">
        <img
            class="w-full h-full object-cover"
            src="{assetsBaseUrl}/cv/banner-light.png"
            alt="Banner"
        />
    </div>
    <div class="pt-4 pr-4 ml-64">
        <div class="flex flex-col gap-4">
            <Headline small>Expérience</Headline>

            <Timeline small>
                {#each cvData.workExperience as item}
                    <TimelineItem
                        title={item.title}
                        label={item.date}
                        imageAlt={item.companyName}
                        imageSrc={item.companyImageFile
                            ? `${assetsBaseUrl}/${item.companyImageFile}`
                            : undefined}
                        small
                    >
                        <div class="flex flex-col gap-1">
                            <p class="font-bold">{item.companyName} - {item.place}</p>
                            <ul>
                                {#each item.overview.split("\n") as line}
                                    <li>{line}</li>
                                {/each}
                            </ul>
                        </div>
                    </TimelineItem>
                {/each}
            </Timeline>

            <Headline small>Formation</Headline>

            <Timeline small>
                {#each cvData.education as item}
                    <TimelineItem
                        title={item.title}
                        label={item.date}
                        imageAlt={item.schoolName}
                        imageSrc={item.imageFile ? `${assetsBaseUrl}/${item.imageFile}` : undefined}
                        small
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

            <Headline small>Compétences</Headline>

            <div class="flex flex-col gap-4 mt-2">
                {#each cvData.skills as skillGroup}
                    <div class="flex items-center">
                        <div class="w-32">
                            <p class="text-base font-2 uppercase">{skillGroup.headline}</p>
                        </div>
                        <div class="flex gap-4">
                            {#each skillGroup.languages as language}
                                <iconify-icon
                                    icon={language.iconName}
                                    class="text-[2.5rem]"
                                    noobserver
                                />
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>

    <div
        class="absolute top-4 left-4 w-56 h-[calc(100%-2rem)] bg-light rounded-full flex flex-col items-center gap-6"
    >
        <div class="w-52 h-52 mt-2 rounded-full">
            <img
                class="h-full w-full object-cover rounded-full"
                src="{assetsBaseUrl}/cv/picture.jpg"
                alt="Profile"
            />
        </div>

        <div class=" w-4/5 h-12 border-y border-neutral-500 flex justify-center items-center">
            <span class="text-2xl font-2 uppercase">Contact</span>
        </div>

        <div class="flex flex-col gap-4 text-sm">
            {#if cvData.website}
                <div class="flex flex-col items-center gap-1">
                    <iconify-icon icon="mdi:web" class="text-3xl" noobserver />
                    <a href={cvData.website.url}>
                        <span>{cvData.website.name}</span>
                    </a>
                </div>
            {/if}

            {#if cvData.github}
                <div class="flex flex-col items-center gap-1">
                    <iconify-icon icon="mdi:github" class="text-3xl" noobserver />
                    <a href={cvData.github.url}>
                        <span>{cvData.github.name}</span>
                    </a>
                </div>
            {/if}

            {#if cvData.linkedin}
                <div class="flex flex-col items-center gap-1">
                    <iconify-icon icon="mdi:linkedin" class="text-3xl" noobserver />
                    <a href={cvData.linkedin.url}>
                        <span>{cvData.linkedin.name}</span>
                    </a>
                </div>
            {/if}

            {#if cvData.mail}
                <div class="flex flex-col items-center gap-1">
                    <iconify-icon icon="mdi:email" class="text-3xl" noobserver />
                    <a href="mailto:{cvData.mail}">
                        <span>{cvData.mail}</span>
                    </a>
                </div>
            {/if}

            {#if cvData.phoneNumber}
                <div class="flex flex-col items-center gap-1">
                    <iconify-icon icon="mdi:phone" class="text-3xl" noobserver />
                    <span>{cvData.phoneNumber}</span>
                </div>
            {/if}
        </div>

        <div class=" w-4/5 h-12 border-y border-neutral-500 flex justify-center items-center">
            <span class="text-2xl font-2 uppercase">Langues</span>
        </div>

        {#each cvData.langues as langue}
            <div class="flex items-center gap-4">
                <iconify-icon icon={langue.iconName} class="text-4xl" noobserver />
                <span>{langue.level}</span>
            </div>
        {/each}

        <div class="w-4/5 h-12 border-y border-neutral-500 flex justify-center items-center">
            <span class="text-2xl font-2 uppercase">Intérêts</span>
        </div>

        <div class="w-1/2 flex justify-center items-center gap-4 flex-wrap">
            {#each cvData.interests as interest}
                <iconify-icon icon={interest.iconName} class="text-4xl" noobserver />
            {/each}
        </div>
    </div>
</div>

<style>
    @media print {
        @page {
            size: A4;
            margin: 0;
        }
    }
</style>
