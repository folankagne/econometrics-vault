# Econometrica — published site

This repo publishes the [Econometrica](content/README.md) econometrics knowledge vault as a website using [Quartz](https://quartz.jzhao.xyz/), deployed to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.

- Vault content lives entirely under [`content/`](content/) — see [`content/README.md`](content/README.md) for the vault's own format, sourcing, and reading order documentation.
- Quartz tooling (everything outside `content/`) is MIT-licensed, from [jackyzha0/quartz](https://github.com/jackyzha0/quartz) — see `LICENSE.txt`.
- TikZ figures render client-side via [TikZJax](https://github.com/artisticat1/tikzjax) (`quartz/components/scripts/tikzjax.inline.ts`), matching how they render in Obsidian.

## Updating the site

1. Edit the vault (either directly in `content/`, or in the original Obsidian vault and copy changes into `content/`).
2. `npx quartz build --serve` to preview locally.
3. Commit and push to `main` — the GitHub Actions workflow rebuilds and redeploys automatically.
