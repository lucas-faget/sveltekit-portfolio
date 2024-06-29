import type { PageLoad } from "./$types";
import { PUBLIC_ASSETS_BASE_URL } from "$env/static/public";
import data from "$lib/json/projects.json";

export const load: PageLoad = () => {
    return {
        assetsBaseUrl: PUBLIC_ASSETS_BASE_URL,
        json: data,
    };
};
