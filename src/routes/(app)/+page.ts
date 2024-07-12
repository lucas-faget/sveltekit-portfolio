import type { PageLoad } from "./$types";
import homeData from "$lib/json/home.json";

export const load: PageLoad = () => {
    return {
        homeData: homeData,
    };
};
