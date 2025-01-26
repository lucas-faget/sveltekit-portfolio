<script lang="ts">
    import type { SocialMediaLink } from "$lib/types/SocialMediaLink";
    import SocialMedias from "./SocialMedias.svelte";

    export let assetsBaseUrl: string;
    export let projectNames: string[] = [];
    export let socialMediaLinks: SocialMediaLink[];
</script>

<footer class="dark p-8 flex flex-col items-center bg-neutral-900">
    <div class="flex flex-col sm:gap-12 gap-8">
        <div class="flex justify-between flex-wrap sm:gap-12 gap-8">
            <a href="/">
                <img class="h-16" src="{assetsBaseUrl}/images/logos/logo-dark.png" alt="Logo" />
            </a>

            <div class="flex flex-wrap sm:gap-12 gap-8">
                <ul class="flex flex-col gap-1">
                    <li class="font-bold">Home</li>

                    <a href="/#projects" class="hover:underline decoration-neutral-400">
                        <li class="text-neutral-400">Project overview</li>
                    </a>
                    <a href="/#skills" class="hover:underline decoration-neutral-400">
                        <li class="text-neutral-400">Skills overview</li>
                    </a>
                    <a href="/#timeline" class="hover:underline decoration-neutral-400">
                        <li class="text-neutral-400">Timeline</li>
                    </a>
                </ul>

                <ul class="flex flex-col gap-1">
                    <li class="font-bold">About</li>

                    <a href="/about#introduction" class="hover:underline decoration-neutral-400">
                        <li class="text-neutral-400">Introduction</li>
                    </a>
                    <a href="/about#skills" class="hover:underline decoration-neutral-400">
                        <li class="text-neutral-400">Skills</li>
                    </a>
                    <a href="/about#experience" class="hover:underline decoration-neutral-400">
                        <li class="text-neutral-400">Work experience</li>
                    </a>
                    <a href="/about#education" class="hover:underline decoration-neutral-400">
                        <li class="text-neutral-400">Education</li>
                    </a>
                </ul>

                {#if projectNames.length > 0}
                    <ul class="flex flex-col gap-1">
                        <li class="font-bold">Projects</li>

                        {#each projectNames as projectName}
                            <a
                                href="projects#{projectName}"
                                class="hover:underline decoration-neutral-400"
                            >
                                <li class="text-neutral-400">{projectName}</li>
                            </a>
                        {/each}
                    </ul>
                {/if}
            </div>
        </div>

        <div class="flex justify-between items-center gap-4 flex-wrap text-neutral-400">
            <p>Copyright © 2023-2024 Lucas Faget</p>
            <SocialMedias links={socialMediaLinks} />
        </div>
    </div>
</footer>
