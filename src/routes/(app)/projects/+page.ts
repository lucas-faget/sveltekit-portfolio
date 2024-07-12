import type { PageLoad } from "./$types";
import projectData from "$lib/json/projects.json";

export const load: PageLoad = () => {
    return {
        projectData: projectData,
    };
};
