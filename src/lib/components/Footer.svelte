<script lang="ts">
    export let projectNames: string[] = [];
</script>

<footer class="p-8 flex flex-col items-center">
    <div class="flex flex-col gap-12">
        <div class="flex justify-between flex-wrap gap-16">
            <img class="h-16" src="https://assets.lucas-faget.com/logos/logo-dark.png" alt="Logo" />

            <div class="flex flex-wrap gap-16">
                <ul class="flex flex-col gap-2">
                    <li class="font-bold">Home</li>

                    <a href={`/#projects`} class="hover:underline">
                        <li class="text-neutral-400">Project overview</li>
                    </a>
                    <a href={`/#skills`} class="hover:underline">
                        <li class="text-neutral-400">Skills overview</li>
                    </a>
                    <a href={`/#timeline`} class="hover:underline">
                        <li class="text-neutral-400">Timeline</li>
                    </a>
                </ul>

                <ul class="flex flex-col gap-2">
                    <li class="font-bold">About</li>

                    <a href={`/about#introduction`} class="hover:underline">
                        <li class="text-neutral-400">Introduction</li>
                    </a>
                    <a href={`/about#skills`} class="hover:underline">
                        <li class="text-neutral-400">Skills</li>
                    </a>
                    <a href={`/about#experience`} class="hover:underline">
                        <li class="text-neutral-400">Work experience</li>
                    </a>
                    <a href={`/about#education`} class="hover:underline">
                        <li class="text-neutral-400">Education</li>
                    </a>
                </ul>

                {#if projectNames.length > 0}
                    <ul class="flex flex-col gap-2">
                        <li class="font-bold">Projects</li>

                        {#each projectNames as projectName}
                            <a href={`/projects#${projectName}`} class="hover:underline">
                                <li class="text-neutral-400">{projectName}</li>
                            </a>
                        {/each}
                    </ul>
                {/if}
            </div>
        </div>

        <div class="flex justify-between items-center text-neutral-400">
            <p>Copyright © 2023-2024 Lucas Faget</p>
            <div class="flex gap-4">
                <!-- Social media icon links -->
            </div>
        </div>
    </div>
</footer>
