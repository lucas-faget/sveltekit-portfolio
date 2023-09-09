<script lang="ts">
    export let href: string;
    export let text: string;
</script>

<a href={href}>{text}</a>

<style>
    a {
       color: red;
       text-decoration: none;
       border-bottom: 1px solid red;
    }

    a:hover {
        color: var(--color-pink);
        border-bottom: 1px solid var(--color-pink);
    }
</style>