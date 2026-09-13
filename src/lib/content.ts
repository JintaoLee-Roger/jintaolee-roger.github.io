import { getCollection, getEntry } from "astro:content";

export async function getSiteSettings() {
  const entry = await getEntry("settings", "site");
  if (!entry) {
    throw new Error("Missing src/content/settings/site.md");
  }
  return entry.data;
}

export async function getResearchAreas() {
  const entries = await getCollection("research");
  return entries
    .map((entry) => ({ slug: entry.slug, ...entry.data }))
    .filter((entry) => entry.visible !== false)
    .sort((a, b) => b.order - a.order);
}

export async function getPublications() {
  const entries = await getCollection("publications");
  const publications = entries.flatMap((entry) => entry.data.publications);
  const slugs = publications.map((entry) => entry.slug);
  if (new Set(slugs).size !== slugs.length) {
    throw new Error("Duplicate publication slug in src/content/publications/");
  }
  return publications
    .sort((a, b) => a.slug.localeCompare(b.slug))
    .filter((entry) => entry.visible !== false)
    .sort((a, b) => b.year - a.year || Number(b.featured) - Number(a.featured));
}
