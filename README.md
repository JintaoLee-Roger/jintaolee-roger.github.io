# Jintao Li — Academic Homepage

Personal academic website built with Astro. The site is bilingual, fully static, responsive, and deploys to GitHub Pages through GitHub Actions.

## Development

```bash
npm install
npm run dev
```

The local site runs at `http://localhost:4321` by default.

## Build

```bash
npm run build
```

The production output is written to `dist/`.

## Content

- `src/content/settings/site.md`: profile and site-wide information
- `src/content/publications/journals.yaml`: journal articles
- `src/content/publications/preprints.yaml`: preprints and manuscripts under review
- `src/content/publications/conferences.yaml`: conference papers and abstracts
- `src/content/research/`: research summaries and detail pages
- `src/pages/`: page structure
- `src/styles/global.css`: visual system and responsive behavior
- `public/`: images, PDFs, favicon, and other static assets

Pushes to `main` are built and published by `.github/workflows/deploy.yml`.

Each publication YAML file contains a `publications` list. Add or edit entries
in the appropriate file; keep each `slug` unique and stable, since it identifies
homepage selections and citation exports. When a preprint is published, move
the entry to `journals.yaml` and update its `type`, `status`, and journal details.

## Update PDF CVs

```bash
bash scripts/build-cv.sh
```

Requires TeX Live with `latexmk`, pdfLaTeX (English), XeLaTeX (Chinese), and the
CVs' LaTeX packages. Both CVs must compile successfully before publication.
The script keeps only `cv_en_YYYY-MM-DD.pdf` and
`cv_cn_YYYY-MM-DD.pdf` in `public/files/cv/`, using the local build date.
Repeated builds on the same day replace that day's PDFs.
Intermediate files stay in `cv_en/` and `cv_cn/` and are ignored by Git.
Website download links resolve these filenames automatically during the Astro
build. Commit both new PDFs and deletions of older versions before deployment.

Each CV directory has its own `latexmkrc` to avoid redundant TeX passes caused
by bibliography XML bookkeeping. `latexmk` loads it automatically, including
when the directory is uploaded separately to Overleaf.
