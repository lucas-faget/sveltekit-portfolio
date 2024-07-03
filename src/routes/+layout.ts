import type { PageLoad } from "./$types";
import data from "$lib/json/projects.json";

export const load: PageLoad = () => {
    return {
        projectNames: data.projects.map((project) => project.name),
    };
};
