<script lang="ts">
    import backgroundImage from "$lib/images/desk-background.jpg";
    import type { SocialMediaLink } from "$lib/types/SocialMediaLink";
    import SocialMedias from "./SocialMedias.svelte";

    export let background: boolean = false;
    export let title: string = "";
    export let socialMediaLinks: SocialMediaLink[];

    $: backgroundStyle = background
        ? `background-size: cover; background-position: center; background-repeat: no-repeat; background-image: url(${backgroundImage});`
        : "";
</script>

<section class="dark relative min-h-svh w-full flex justify-center items-center font-4">
    {#if background}
        <div class="absolute inset-0 h-full w-full blur-sm" style={backgroundStyle}></div>
    {/if}

    <div class="relative flex flex-col pt-28 pb-16 px-4">
        <div class="flex justify-between items-center">
            <span class="lg:text-[4rem] md:text-[3rem] text-[2rem] leading-none text-neutral-500">
                Lucas Faget
            </span>

            <div class="z-10">
                <SocialMedias links={socialMediaLinks} />
            </div>
        </div>

        {#each String("Developpeur web").split(" ") as word}
            <span
                class="lg:text-[12rem] md:text-[9rem] sm:text-[6rem] text-[4rem] leading-none uppercase"
            >
                {word}
            </span>
        {/each}

        {#each title.split(" ") as word}
            <span
                class="lg:text-[12rem] md:text-[9rem] sm:text-[6rem] text-[4rem] leading-none uppercase text-neutral-500"
            >
                {word}
            </span>
        {/each}
    </div>
</section>
