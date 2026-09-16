import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Playtime Namibia – The Playtime Sport Development Trust",
    short_name: "Playtime",
    description:
      "Empowering youth through sports in Walvis Bay, Namibia. Est. 2015.",
    start_url: "/",
    display: "standalone",
    background_color: "#081c2a",
    theme_color: "#081c2a",
    icons: [
      {
        src: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
