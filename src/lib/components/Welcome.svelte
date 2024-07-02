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
        background-image: linear-gradient(
                0deg,
                var(--color-dark) 0%,
                var(--color-transparent) 30%,
                var(--color-transparent) 70%,
                var(--color-dark) 100%
            ),
            linear-gradient(
                90deg,
                var(--color-dark) 0%,
                var(--color-transparent) 30%,
                var(--color-transparent) 70%,
                var(--color-dark) 100%
            ),
            url("src/lib/images/coding.gif");
    }
</style>
