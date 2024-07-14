<script lang="ts">
    import type { SocialMedias } from "$lib/types/SocialMedias";

    export let socialMedias: SocialMedias;
    export let dark: boolean = false;
</script>

<div class="flex items-center gap-4">
    <a href={socialMedias.github} target="_blank">
        <iconify-icon
            icon="mdi:github"
            width="30"
            height="30"
            class="{dark
                ? 'text-neutral-400 hover:text-neutral-100'
                : 'text-neutral-500 hover:text-neutral-900'} cursor-pointer"
        />
    </a>
    <a href={socialMedias.linkedin} target="_blank">
        <iconify-icon
            icon="mdi:linkedin"
            width="30"
            height="30"
            class="{dark
                ? 'text-neutral-400 hover:text-neutral-100'
                : 'text-neutral-500 hover:text-neutral-900'} cursor-pointer"
        />
    </a>
    <a href="mailto:{socialMedias.mail}">
        <iconify-icon
            icon="mdi:email"
            width="30"
            height="30"
            class="{dark
                ? 'text-neutral-400 hover:text-neutral-100'
                : 'text-neutral-500 hover:text-neutral-900'} cursor-pointer"
        />
    </a>
</div>
