import { readable } from "svelte/store";
import { browser } from "$app/environment";

function createMediaQueryStore(mediaQueryString: string) {
    return readable(false, (set) => {
        if (browser) {
            const mediaQueryList = window.matchMedia(mediaQueryString);

            const updateMediaQuery = (event: MediaQueryListEvent) => {
                set(event.matches);
            };

            mediaQueryList.addEventListener("change", updateMediaQuery);

            set(mediaQueryList.matches);

            return () => {
                mediaQueryList.removeEventListener("change", updateMediaQuery);
            };
        }
    });
}

export const isSmallScreen = createMediaQueryStore("(max-width: 640px)");
