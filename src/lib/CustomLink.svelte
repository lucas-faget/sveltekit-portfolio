<script lang="ts">
    export let href: string;
    export let text: string;
</script>

<a href={href}>{text}</a>

<style>
    a {
       color: silver;
       text-decoration: none;
       border-bottom: 1px solid silver;
    }

    a:hover {
        color: gold;
        border-bottom: 1px solid gold;
    }
</style>