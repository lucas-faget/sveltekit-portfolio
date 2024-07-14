import type { PageLoad } from "./$types";
import { dev } from "$app/environment";
import { error } from "@sveltejs/kit";
import { PUBLIC_ASSETS_BASE_URL } from "$env/static/public";
import cvData from "$lib/json/cv.json";

export const load: PageLoad = () => {
    if (dev) {
        return {
            assetsBaseUrl: PUBLIC_ASSETS_BASE_URL,
            cvData: cvData,
        };
    }

    error(404, "Not found");
};
