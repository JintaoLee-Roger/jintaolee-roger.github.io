#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEST="$ROOT/public/files/cv"
command -v latexmk >/dev/null || { echo "Please install TeX Live with latexmk first." >&2; exit 1; }

# Keep intermediate files in the source folders, never in the public directory.
for lang in en cn; do
  engine=-pdf
  [[ "$lang" == cn ]] && engine=-xelatex
  (
    cd "$ROOT/cv_$lang"
    latexmk "$engine" -interaction=nonstopmode -halt-on-error main.tex
    test -s main.pdf
  )
done

# Only publish and retire old versions once both compilations have succeeded.
stamp="$(date +%Y-%m-%d)"
mkdir -p "$DEST"
for lang in en cn; do
  cp "$ROOT/cv_$lang/main.pdf" "$DEST/cv_${lang}_${stamp}.pdf"
done
for file in "$DEST"/*.pdf; do
  case "$(basename "$file")" in
    "cv_en_${stamp}.pdf"|"cv_cn_${stamp}.pdf") ;;
    *) rm -- "$file" ;;
  esac
done
printf 'Published CVs (%s):\n%s\n%s\n' "$stamp" \
  "$DEST/cv_en_${stamp}.pdf" "$DEST/cv_cn_${stamp}.pdf"
