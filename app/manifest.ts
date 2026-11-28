import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PIXORASOFTTECH",
    short_name: "PIXORA",
    description:
      "Premium software, web & mobile development solutions by PixoraSoftTech.",
    start_url: "/",
    display: "standalone",
    background_color: "#030014",
    theme_color: "#8b5cf6",
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
        src: "/icon-96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
  };
}
