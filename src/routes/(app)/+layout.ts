import type { PageLoad } from "./$types";
import { PUBLIC_ASSETS_BASE_URL } from "$env/static/public";
import cvData from "$lib/json/cv.json";
import projectData from "$lib/json/projects.json";

export const load: PageLoad = () => {
    return {
        assetsBaseUrl: PUBLIC_ASSETS_BASE_URL,
        socialMediaLinks: [
            {
                href: cvData.github.url,
                icon: "mdi:github",
            },
            {
                href: cvData.linkedin.url,
                icon: "mdi:linkedin",
            },
            {
                href: `mailto:${cvData.mail}`,
                icon: "mdi:email",
            },
        ],
        cvFileName: cvData.fileName,
        projectNames: projectData.projects.map((project) => project.name),
    };
};
