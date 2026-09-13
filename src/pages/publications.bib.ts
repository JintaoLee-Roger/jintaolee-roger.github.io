import { getPublications } from "../lib/content";
import { formatBibTeX } from "../lib/publications";

export const prerender = true;

export async function GET() {
  const publications = await getPublications();
  const bibliography = `${publications.map(formatBibTeX).join("\n\n")}\n`;

  return new Response(bibliography, {
    headers: {
      "Content-Type": "application/x-bibtex; charset=utf-8",
      "Content-Disposition": 'attachment; filename="jintao-li-publications.bib"',
    },
  });
}
