<script lang="ts">
    import type { PageData } from "./$types";
    import Chapter from "$lib/components/Chapter.svelte";
    import Title from "$lib/components/Title.svelte";
    import Button from "$lib/components/Button.svelte";

    export let data: PageData;
</script>

<svelte:head>
    <title>CV</title>
    <meta name="description" content="CV" />
</svelte:head>

<div>
    <Chapter>
        <Title title={"Curriculum\nvitae"} />

        <a href="{data.assetsBaseUrl}/{data.cvFileName}" download>
            <Button rounded>Télécharger</Button>
        </a>

        <embed
            src="{data.assetsBaseUrl}/{data.cvFileName}"
            type="application/pdf"
            class="w-full max-w-[210mm] aspect-[210/297]"
        />
    </Chapter>
</div>
