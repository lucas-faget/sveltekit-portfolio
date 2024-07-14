import type { PageLoad } from "./$types";
import cvData from "$lib/json/cv.json";

export const load: PageLoad = () => {
    return {
        cvFileName: cvData.fileName,
    };
};
