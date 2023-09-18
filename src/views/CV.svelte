<script>
    import CustomButton from "../lib/CustomButton.svelte";
</script>

<main>
    <div class="cv">
        <a href="/CV_FAGET_Lucas.pdf" target="_blank" download="CV_FAGET_Lucas.pdf">
            <CustomButton />
        </a> 
        <iframe title="CV" src="/CV_FAGET_Lucas.pdf"></iframe>    
    </div>
</main>

<style>
    main {
        background-color: var(--color-dark);
        min-height: 100vh;
        padding-top: 100px;
        border-radius: 0 0 0 80px;
    }

    .cv {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        padding-block: var(--vertical-gap);
    }

    iframe {
        width: 90vw; /* Largeur en pourcentage de la largeur de la vue */
        aspect-ratio: 0.66; /* Ratio d'aspect A4 (largeur:hauteur) */
        max-width: 100%; /* Pour s'assurer que la largeur n'excède pas 100% de la largeur du conteneur */
        max-height: 32cm; /* Pour s'assurer que la hauteur n'excède pas 100% de la hauteur du conteneur */
    }
</style>
