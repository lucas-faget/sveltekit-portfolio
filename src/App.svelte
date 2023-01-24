<script lang="ts">
    import Aside from "./lib/Aside.svelte";
    import Welcome from "./lib/Welcome.svelte";
</script>

<main>
    <Welcome text="#Lucas #Faget. 25 yo. Web developer."/>

    <div class="articles">
        <section class="article">
            <Aside index="02" title="title1" />
            <div class="section">

            </div>
        </section>
        <section class="article">
            <Aside index="01." title="title2" />
            <div class="section">

            </div>
        </section>
    </div>
</main>

<style>
    .articles {
        display: flex;
        flex-direction: column;
    }

    .article {
        display: flex;
        justify-content: space-between;
        height: 100vh;
        padding-block: 50px;
        box-sizing: border-box;
        border-bottom: 2px dotted #fff;
    }

    .section {
        flex-basis: 60%;
        background-color: red;
    }
</style>
