<script lang="ts">
    import Aside from "../lib/Aside.svelte";
    import Image from "../lib/Image.svelte";
    import ListWithImage from "../lib/ListWithImage.svelte";
    import Paragraph from "../lib/Paragraph.svelte";
    import FromDownAnimation from "../lib/FromDownAnimation.svelte";
    import Welcome from "../lib/Welcome.svelte";

    const ASSETS = "/assets/";
    const ASSETS_LOGOS = "/assets/logos/";
</script>

<main>
    <Welcome text={["Web developer.", "Welcome to my portfolio."]}/>

    <div class="articles">
        <section class="article">
            <div class="aside">
                <Aside index="01." title="Sokoban" />
            </div>
            <div class="section">
                <FromDownAnimation>
                    <Paragraph fontSize={20} text="The game is played on a board of squares, where each square is a floor or a wall. Some floor squares contain boxes, and some floor squares are marked as storage locations. The player is confined to the board and may move horizontally or vertically onto empty squares (never through walls or boxes). The player can move a box by walking up to it and push it to the square beyond. Boxes cannot be pulled, and they cannot be pushed to squares with walls or other boxes. The number of boxes equals the number of storage locations. The puzzle is solved when all boxes are placed at storage locations." />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={ASSETS + "technology-earth1.jpg"} description="Technology Earth" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <ListWithImage items={[
                        { src: ASSETS_LOGOS + "typescript.png", text: "TypeScript" },
                        { src: ASSETS_LOGOS + "svelte.svg", text: "Svelte.js" }
                    ]} />
                </FromDownAnimation>
            </div>
        </section>
        <section class="article">
            <div class="aside">
                <Aside index="02." title="Chess" />
            </div>
            <div class="section">
                <FromDownAnimation>
                    <Paragraph fontSize={20} text="Chess is an abstract strategy game and involves no hidden information. It is played on a chessboard with 64 squares arranged in an eight-by-eight grid. At the start, each player controls sixteen pieces: one king, one queen, two rooks, two bishops, two knights, and eight pawns. The player controlling the white pieces moves first, followed by the player controlling the black pieces. The object of the game is to checkmate the opponent's king, whereby the king is under immediate attack (in 'check') and there is no way for it to escape. There are also several ways a game can end in a draw." />
                </FromDownAnimation>

                <FromDownAnimation>
                    <Image src={ASSETS + "sites/vue-chess.png"} description="Chess" />
                </FromDownAnimation>

                <FromDownAnimation>
                    <ListWithImage items={[
                        { src: ASSETS_LOGOS + "typescript.png", text: "TypeScript" },
                        { src: ASSETS_LOGOS + "vuejs.svg", text: "Vue.js" },
                        { src: ASSETS_LOGOS + "socketio.svg", text: "Socket.IO" }
                    ]} />
                </FromDownAnimation>
            </div>
        </section>
    </div>
</main>

<style>
    main {
        /* background-color: var(--color-dark); */
        background-image: url("assets/background1.jpg");
        background-attachment: fixed;
        background-size: cover;
        background-position-y: top;
        background-repeat: no-repeat;
        border-radius: 0 0 0 80px;
    }

    .articles {
        position: relative;
        display: flex;
        flex-direction: column;
        padding-inline: var(--horizontal-padding);
        padding-bottom: 80px;
        z-index: 1;
    }

    .article {
        position: relative;
        display: flex;
        justify-content: space-between;
        padding-block: var(--vertical-gap);
        box-sizing: border-box;
        border-bottom: 2px dotted var(--color-light);
        z-index: 1;
    }

    .aside {
        width: 30%;
    }

    .section {
        display: flex;
        flex-direction: column;
        gap: var(--vertical-gap);
        width: 60%;
    }

    @media (max-width: 800px) {
        .article {
            flex-direction: column;
            gap: var(--vertical-gap);
        }

        .aside, .section {
            width: 100%;
        }
    }
</style>
