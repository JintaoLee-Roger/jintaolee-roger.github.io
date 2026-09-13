import { execFileSync } from "node:child_process";

const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

export function getLastCommitDate(fallback: string): string {
  try {
    const date = execFileSync("git", ["show", "-s", "--format=%cs", "HEAD"], {
      cwd: process.cwd(),
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();

    return ISO_DATE_PATTERN.test(date) ? date : fallback;
  } catch {
    return fallback;
  }
}
