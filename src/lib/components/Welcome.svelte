<script lang="ts">
    import background from "$lib/images/coding.gif";
    console.log(background);

    export let text: string;
</script>

<section
    class="md:h-screen w-full pt-40 pb-4 px-8 flex flex-col justify-end"
    style="font-family: 'Anton'; background-size: cover; background-position: center; background-repeat: no-repeat; background-image: url({background});"
>
    <p class="text-[20vw] leading-none uppercase">{text}</p>
</section>
