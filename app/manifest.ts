import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ThoughtHub - Where Thoughts Take Shape",
    short_name: "ThoughtHub",
    description: "Innovative solutions for Web & Mobile apps, Creative Design & Editing, Notion Workspace, IT & Network Consultancy.",
    start_url: "/",
    display: "standalone",
    background_color: "#070a0a",
    theme_color: "#e7e9cd",
    icons: [
      {
        src: "/logo/th-logo-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo/th-logo-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}