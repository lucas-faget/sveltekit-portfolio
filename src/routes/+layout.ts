import type { PageLoad } from "./$types";
import projectsData from "$lib/json/projects.json";
import contactData from "$lib/json/contact.json";

export const load: PageLoad = () => {
    return {
        projectNames: projectsData.projects.map((project) => project.name),
        contact: contactData,
    };
};
