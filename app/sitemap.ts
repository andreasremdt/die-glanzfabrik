import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.dieglanzfabrik.ch/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.dieglanzfabrik.ch/leistungen",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.dieglanzfabrik.ch/preise",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.dieglanzfabrik.ch/galerie",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.dieglanzfabrik.ch/kontakt",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://www.dieglanzfabrik.ch/impressum",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
