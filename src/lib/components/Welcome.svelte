<script lang="ts">
    import backgroundImage from "$lib/images/desk-background.jpg";
    import type { SocialMedias } from "$lib/types/SocialMedias";
    import SocialMediaLinks from "./SocialMediaLinks.svelte";

    export let background: boolean = false;
    export let title: string = "";
    export let socialMedias: SocialMedias;

    $: backgroundStyle = background
        ? `background-size: cover; background-position: center; background-repeat: no-repeat; background-image: url(${backgroundImage});`
        : "";
</script>

<section class="relative min-h-svh w-full flex justify-center items-center">
    {#if background}
        <div class="absolute inset-0 h-full w-full blur-sm" style={backgroundStyle}></div>
    {/if}

    <div class="relative flex flex-col pt-28 pb-16 px-4">
        <div class="flex justify-between items-center">
            <span
                class="lg:text-[4rem] md:text-[3rem] text-[2rem] leading-none font-3 text-neutral-500"
            >
                Lucas Faget
            </span>

            <div>
                <SocialMediaLinks {socialMedias} dark />
            </div>
        </div>

        {#each String("Developpeur web").split(" ") as word}
            <span
                class="lg:text-[12rem] md:text-[9rem] sm:text-[6rem] text-[4rem] leading-none font-3 uppercase"
            >
                {word}
            </span>
        {/each}

        {#each title.split(" ") as word}
            <span
                class="lg:text-[12rem] md:text-[9rem] sm:text-[6rem] text-[4rem] leading-none font-3 uppercase text-neutral-500"
            >
                {word}
            </span>
        {/each}
    </div>
</section>
