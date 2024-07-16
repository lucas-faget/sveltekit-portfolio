<script lang="ts">
    import backgroundImage from "$lib/images/coding.gif";

    export let background: boolean = false;
    export let title: string = "";

    $: backgroundStyle = background
        ? `background-size: cover; background-position: center; background-repeat: no-repeat; background-image: url(${backgroundImage});`
        : "";
</script>

<section
    class="h-svh w-full pb-4 px-8 flex flex-col justify-end leading-tight"
    style={backgroundStyle}
>
    <p class="text-[10vw] leading-none font-4 uppercase">{title}</p>
</section>
