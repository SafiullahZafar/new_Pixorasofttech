import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PixoraSoftTech",
    short_name: "Pixora",
    description:
      "Premium software, web & mobile development solutions by PixoraSoftTech.",
    start_url: "/",
    display: "standalone",
    background_color: "#030014",
    theme_color: "#0A2540",
    orientation: "portrait",
    categories: ["business", "productivity", "technology"],
    lang: "en",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
