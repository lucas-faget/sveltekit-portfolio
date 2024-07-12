import type { PageLoad } from "./$types";
import aboutData from "$lib/json/about.json";

export const load: PageLoad = () => {
    return {
        aboutData: aboutData,
    };
};
