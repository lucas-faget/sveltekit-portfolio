<script lang="ts">
    import type { SocialMediaLink } from "$lib/types/SocialMediaLink";

    export let links: SocialMediaLink[];
</script>

<div class="flex items-center gap-2">
    {#each links as link}
        <a href={link.href} target="_blank">
            <iconify-icon
                icon={link.icon}
                width="30"
                height="30"
                class="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 cursor-pointer"
            />
        </a>
    {/each}
</div>
