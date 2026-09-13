# English CV

The English and Chinese CV directories use the same editing framework.

## Where to edit

| Content | File |
| --- | --- |
| Document settings and section order | `main.tex` |
| Experience | `exp_research.tex` |
| Education | `education.tex` |
| Research interests | `research_int.tex` |
| Funding | `funding.tex` |
| Publication group headings | `publications.tex` |
| Publication data, ordering, and annotations | `ref.bib` |
| Chicago, Harvard, or IEEE selector | `reference-style.tex` |
| Shared bibliography rendering | `bibliography-config.tex` |
| Software, awards, teaching, and service | Matching section `.tex` files |
| Invited talks (optional, hidden by default) | `invited_talks.tex` |
| Colors | `colors.tex` |

## Publication fields

- `keywords = {J}`: published journals and major conference papers.
- `keywords = {P}`: preprints and manuscripts under review or revision.
- `keywords = {C}`: other conference papers and abstracts.
- `sortkey`: descending order within a group.
- `author+an`: `highlight`, `cofirst`, and `corresponding` may be combined.
- `usera`: a CV-only note printed after the citation and DOI.

Compile with `latexmk -pdf main.tex`.

Select `chicago`, `harvard`, or `ieee` in `reference-style.tex`. After changing
the style, use Overleaf's **Recompile from scratch** once because bibliography
styles cannot safely reuse an old `.bcf` or `.bbl` file.

To show invited talks, add entries to `invited_talks.tex` and change
`\showinvitedtalksfalse` to `\showinvitedtalkstrue` in `main.tex`.
