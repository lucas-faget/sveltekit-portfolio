<script lang="ts">
    import { onMount } from 'svelte';
    import Paragraph from "./Paragraph.svelte";

    const maxFontSize = 100;

    let text: string;
    let fontSize = maxFontSize;
    updateFontSize();

    onMount(() => {
        window.addEventListener("resize", updateFontSize);
    });

    function updateFontSize() {
        let screenWidth = window.innerWidth;
        if (screenWidth <= 600)
            fontSize = 0.5 * maxFontSize;
        else
            if (screenWidth <= 1200)
                fontSize = 0.75 * maxFontSize;
            else
                fontSize = maxFontSize;
    }
    export { text, fontSize };

</script>

<section class="welcome" on:resize={updateFontSize}>
    <div class="title">
        <Paragraph text={text} fontSize={fontSize} />
    </div>
</section>

<style>
    .welcome {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-block: var(--vertical-gap);
        box-sizing: border-box;
        border-bottom: 2px dotted #fff;
    }

    .title {
        padding-inline: var(--horizontal-padding);
    }

    @media (min-width: 800px) {
        .welcome {
            height: 100vh;
        }
    }

    @media (max-width: 800px) {
        .welcome {
            padding-top: 100px;

            background-image: url("/assets/technology-earth2.jpg");
            background-size: cover;
            background-position: center;
        }
    }
</style>
