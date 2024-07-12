<script lang="ts">
    import type { PageData } from "./$types";
    import CurriculumVitae from "$lib/components/CurriculumVitae.svelte";

    export let data: PageData;
</script>

<svelte:head>
    <title>CV</title>
    <meta name="description" content="CV" />
</svelte:head>

<div class="flex justify-center items-center">
    <CurriculumVitae assetsBaseUrl={data.assetsBaseUrl} json={data.json} />
</div>
