<script lang="ts">
    export let href: string;
    export let text: string;
</script>

<a {href}>{text}</a>

<style>
    a {
        color: hsl(240, 100%, 80%);
        text-decoration: none;
    }

    a:hover {
        border-bottom: 1px solid hsl(240, 100%, 80%);
    }
</style>
