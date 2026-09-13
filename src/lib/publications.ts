type PublicationAuthor = {
  name?: string;
  citationName?: string;
  self?: boolean;
  equal?: boolean;
  corresponding?: boolean;
};

type PublicationLike = {
  slug?: string;
  title: string;
  authors: PublicationAuthor[];
  venue: string;
  shortVenue?: string;
  year: number;
  volume?: string;
  issue?: string;
  pages?: string;
  articleNumber?: string;
  citation?: string;
  type: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
};

export type DisplayAuthor = PublicationAuthor & {
  displayName: string;
};

export function getDisplayAuthors(publication: PublicationLike): DisplayAuthor[] {
  return publication.authors.map((author) => ({
    ...author,
    displayName: author.name ?? "Unknown Author",
  }));
}

export function formatPublicationDetails(publication: PublicationLike) {
  if (publication.citation) {
    return publication.citation;
  }

  const title = `"${publication.title}."`;

  if (publication.type === "conference") {
    const pages = publication.pages ? `, ${publication.pages}` : "";
    return `${title} In ${publication.venue}${pages}. ${publication.year}.`;
  }

  if (publication.type === "preprint") {
    return `${title} ${publication.venue}, ${publication.year}.`;
  }

  const volume = publication.volume ? ` ${publication.volume}` : "";
  const issue = publication.issue ? `, no. ${publication.issue}` : "";
  const articleNumber = publication.articleNumber ? `, ${publication.articleNumber}` : "";
  const pages = publication.pages ? `: ${publication.pages}` : "";

  return `${title} ${publication.venue}${volume}${issue}${articleNumber} (${publication.year})${pages}.`;
}

export function getDisplayCitationParts(publication: PublicationLike) {
  const citation = formatPublicationDetails(publication);

  if (publication.type !== "journal") {
    return { before: citation, venue: "", after: "" };
  }

  const venueIndex = citation.indexOf(publication.venue);
  if (venueIndex === -1) {
    return { before: citation, venue: "", after: "" };
  }

  return {
    before: citation.slice(0, venueIndex),
    venue: publication.shortVenue
      ? `${publication.venue} (${publication.shortVenue})`
      : publication.venue,
    after: citation.slice(venueIndex + publication.venue.length),
  };
}

function formatCitationName(author: PublicationAuthor, invert = false) {
  const name = author.citationName ?? author.name ?? "Unknown Author";
  let formattedName = name;

  if (invert && !author.citationName) {
    const parts = name.trim().split(/\s+/);
    if (parts.length > 1) {
      formattedName = `${parts.at(-1)}, ${parts.slice(0, -1).join(" ")}`;
    }
  }

  const equal = author.equal ? "*" : "";
  const corresponding = author.corresponding ? "†" : "";
  return `${formattedName}${equal}${corresponding}`;
}

function formatChicagoAuthors(authors: PublicationAuthor[]) {
  const names = authors.map((author, index) => formatCitationName(author, index === 0));

  if (names.length === 0) return "";
  if (names.length === 1) return names[0];
  if (names.length === 2) return `${names[0]}, and ${names[1]}`;
  return `${names.slice(0, -1).join(", ")}, and ${names.at(-1)}`;
}

export function formatChicagoCitation(publication: PublicationLike) {
  const authors = formatChicagoAuthors(publication.authors);
  return authors ? `${authors}. ${formatPublicationDetails(publication)}` : formatPublicationDetails(publication);
}

function escapeBibTeX(value: string) {
  return value
    .replace(/\\/g, "\\textbackslash{}")
    .replace(/([&%_$#])/g, "\\$1")
    .replace(/~/g, "\\textasciitilde{}")
    .replace(/\^/g, "\\textasciicircum{}");
}

function getDoi(publication: PublicationLike) {
  for (const link of publication.links ?? []) {
    const match = decodeURIComponent(link.href).match(/(10\.\d{4,9}\/[-._;()/:A-Z0-9]+)/i);
    if (match) return match[1].replace(/[/?#]+$/, "");
  }
  return undefined;
}

function getArxivId(publication: PublicationLike) {
  for (const link of publication.links ?? []) {
    const match = link.href.match(/arxiv\.org\/abs\/([^/?#]+)/i);
    if (match) return match[1];
  }
  return undefined;
}

function getCitationKey(publication: PublicationLike) {
  if (publication.slug) return publication.slug.replace(/[^a-zA-Z0-9:_-]/g, "");

  const firstAuthor = publication.authors[0]?.name?.trim().split(/\s+/).at(-1) ?? "publication";
  const titleWord = publication.title.match(/[a-zA-Z0-9]+/)?.[0] ?? "work";
  return `${firstAuthor}${publication.year}${titleWord}`.replace(/[^a-zA-Z0-9:_-]/g, "").toLowerCase();
}

export function formatBibTeX(publication: PublicationLike) {
  const entryType = publication.type === "conference"
    ? "inproceedings"
    : publication.type === "journal"
      ? "article"
      : publication.type === "book"
        ? "book"
        : "misc";
  const fields: Array<[string, string | undefined]> = [
    ["title", publication.title],
    ["author", publication.authors.map((author) => author.name ?? author.citationName ?? "Unknown Author").join(" and ")],
  ];

  if (entryType === "article") fields.push(["journal", publication.venue]);
  if (entryType === "inproceedings") fields.push(["booktitle", publication.venue]);
  if (entryType === "book") fields.push(["publisher", publication.venue]);

  fields.push(["year", String(publication.year)]);
  if (publication.volume) fields.push(["volume", publication.volume]);
  if (publication.issue) fields.push(["number", publication.issue]);
  if (publication.pages) fields.push(["pages", publication.pages]);
  if (publication.articleNumber) fields.push(["pages", publication.articleNumber]);

  const arxivId = getArxivId(publication);
  if (arxivId) {
    fields.push(["eprint", arxivId], ["archivePrefix", "arXiv"]);
  } else if (entryType === "misc") {
    fields.push(["note", publication.venue]);
  }

  const doi = getDoi(publication);
  if (doi) fields.push(["doi", doi]);

  const externalUrl = (publication.links ?? []).find((link) => /^https?:\/\//.test(link.href))?.href;
  if (externalUrl) fields.push(["url", externalUrl]);

  const renderedFields = fields
    .filter((field): field is [string, string] => Boolean(field[1]))
    .map(([name, value]) => `  ${name} = {${escapeBibTeX(value)}}`)
    .join(",\n");

  return `@${entryType}{${getCitationKey(publication)},\n${renderedFields}\n}`;
}
