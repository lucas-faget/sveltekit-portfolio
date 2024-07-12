<script lang="ts">
    export let small: boolean = false;
</script>

<div class="relative">
    <div class={small ? "-my-3" : "-my-6"}>
        <slot />
    </div>
</div>
