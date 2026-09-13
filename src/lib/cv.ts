import { readdirSync } from "node:fs";

const files = readdirSync(new URL("../../public/files/cv/", import.meta.url));

function latestCV(language: "cn" | "en") {
  const file = files
    .filter((name) => name.startsWith(`cv_${language}_`) && name.endsWith(".pdf"))
    .sort()
    .at(-1);
  if (!file) throw new Error(`Missing ${language} CV. Run bash scripts/build-cv.sh first.`);
  return `/files/cv/${file}`;
}

export const cvDownloads = { cn: latestCV("cn"), en: latestCV("en") };
