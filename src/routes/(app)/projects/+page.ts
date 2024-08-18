import type { PageLoad } from "./$types";
import projectData from "$lib/json/projects.json";

const computedProjectData = {
    ...projectData,
    projects: projectData.projects.map((project) => {
        const socialMediaLinks = [];

        if (project.websiteUrl) {
            socialMediaLinks.push({
                href: project.websiteUrl,
                icon: "mdi:web",
            });
        }

        if (project.githubRepositoryUrl) {
            socialMediaLinks.push({
                href: project.githubRepositoryUrl,
                icon: "mdi:github",
            });
        }

        return {
            ...project,
            socialMediaLinks,
        };
    }),
};

export const load: PageLoad = () => {
    return {
        projectData: computedProjectData,
    };
};
