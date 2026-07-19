import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://giorgiy.org";
  const routes = [
    ["", 1, "weekly"],
    ["/work", 0.9, "weekly"],
    ["/components", 0.8, "monthly"],
    ["/services", 0.8, "monthly"],
    ["/work/docket-intelligence-workbench", 0.8, "monthly"],
  ] as const;

  return routes.map(([route, priority, changeFrequency]) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
