<script lang="ts">
    import background from "$lib/images/coding.gif";

    export let text: string;
</script>

<section
    class="h-dvh w-full pb-4 px-8 flex flex-col justify-end font-1"
    style="background-size: cover; background-position: center; background-repeat: no-repeat; background-image: url({background});"
>
    <p class="text-[20vw] leading-none uppercase">{text}</p>
</section>
