<script lang="ts">
    export let text: string;
</script>

<section
    class="md:h-screen w-full pt-40 pb-4 px-8 flex flex-col justify-end"
    style="font-family: 'Anton'"
>
    <p class="text-[20vw] leading-none uppercase">{text}</p>
</section>

<style>
    section {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url("src/lib/images/coding.gif");
    }
</style>
