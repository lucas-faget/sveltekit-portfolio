import type { PageLoad } from "./$types";
import { PUBLIC_ASSETS_BASE_URL } from "$env/static/public";
import projectData from "$lib/json/projects.json";
import cvData from "$lib/json/cv.json";

export const load: PageLoad = () => {
    return {
        assetsBaseUrl: PUBLIC_ASSETS_BASE_URL,
        projectNames: projectData.projects.map((project) => project.name),
        contact: {
            githubUrl: cvData.github.url,
            linkedinUrl: cvData.linkedin.url,
            mail: cvData.mail,
        },
    };
};
