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

export const isSmallScreen = createMediaQueryStore("(min-width: 640px)");
export const isMediumScreen = createMediaQueryStore("(min-width: 768px)");
export const isLargeScreen = createMediaQueryStore("(min-width: 1024px)");
