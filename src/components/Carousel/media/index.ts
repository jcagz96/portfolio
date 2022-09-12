import media1 from "./media-1.jpeg";
import media3 from "./media-3.jpeg";
import media4 from "./media-4.jpeg";
import media5 from "./media-5.jpeg";

export const media = [media1.src, media3.src, media4.src, media5.src];
export const mediaByIndex = (index: any) => media[index % media.length];
