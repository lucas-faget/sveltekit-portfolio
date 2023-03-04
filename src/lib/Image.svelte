<script lang="ts">
    export let src: string;
    export let description: string;
</script>

<img src={src} alt={description}>

<style>
    img {
        width: 100%;
        height: 100%;
    }
</style>
