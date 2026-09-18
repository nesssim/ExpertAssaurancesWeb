import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.expert-assurance.fr";

  const staticPages = [
    "",
    "/assurance-auto",
    "/assurance-habitation",
    "/assurance-moto",
    "/assurance-sante",
    "/devis-auto",
    "/devis-habitation",
    "/devis-moto",
    "/devis-sante",
    "/sinistre",
    "/a-propos",
    "/contact",
    "/mentions-legales",
    "/politique-confidentialite",
  ];

  return staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
}
