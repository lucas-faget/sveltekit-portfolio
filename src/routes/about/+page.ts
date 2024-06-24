import type { PageLoad } from "./$types";
import {
    PUBLIC_ASSETS_BASE_URL,
    PUBLIC_ICONS_PATH,
    PUBLIC_LOGOS_PATH,
    PUBLIC_LANGUAGES_PATH,
    PUBLIC_SCREENSHOTS_PATH,
} from "$env/static/public";
import data from "$lib/json/about.json";

export const load: PageLoad = () => {
    return {
        assetsBaseUrl: PUBLIC_ASSETS_BASE_URL,
        iconsPath: PUBLIC_ICONS_PATH,
        logosPath: PUBLIC_LOGOS_PATH,
        languagesPath: PUBLIC_LANGUAGES_PATH,
        screenshotsPath: PUBLIC_SCREENSHOTS_PATH,
        json: data,
    };
};
