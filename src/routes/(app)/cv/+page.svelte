<script lang="ts">
    import { onMount } from "svelte";
    import type { PageData } from "./$types";
    import * as pdfjsLib from "pdfjs-dist";
    import pdfWorker from "pdfjs-dist/build/pdf.worker?url";
    import Chapter from "$lib/components/Chapter.svelte";
    import Title from "$lib/components/Title.svelte";
    import Button from "$lib/components/Button.svelte";

    export let data: PageData;

    let canvas: HTMLCanvasElement | null = null;

    const pdfUrl: string = data.cvFileName;

    pdfjsLib.GlobalWorkerOptions.workerSrc = "/node_modules/pdfjs-dist/build/pdf.worker.min.mjs";

    onMount(async () => {
        if (canvas) {
            const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
            const cv = await pdf.getPage(1);
    
            const scale: number = 1.5;
            const viewport = cv.getViewport({ scale });
    
            const context = canvas.getContext("2d");
            canvas.width = viewport.width;
            canvas.height = viewport.height;
    
            await cv.render({
                canvasContext: context,
                viewport
            });
        }
    });

    const printCV = (): void => {
        const printWindow = window.open(pdfUrl, "_blank");

        if (printWindow) {
            printWindow.onload = () => {
                printWindow.print();
            };
        }
    }
</script>

<svelte:head>
    <title>CV</title>
    <meta name="description" content="CV" />
</svelte:head>

<div>
    <Chapter>
        <Title title={"Curriculum\nvitae"} />

        <div class="flex flex-wrap gap-4">
            <a href="{pdfUrl}" download>
                <Button rounded>Télécharger</Button>
            </a>
            <button on:click={printCV}>
                <Button rounded>Imprimer</Button>
            </button>
        </div>

        <canvas bind:this={canvas} class="w-full max-w-[210mm]"></canvas>
    </Chapter>
</div>
