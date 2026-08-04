# Econometrica — A Personal Econometrics Knowledge Vault

A structured, cross-linked Markdown vault covering econometrics from first-year OLS theory through modern causal inference, modeled on the entry format of [Algebrica](https://algebrica.org) (a mathematics knowledge base). Unlike Algebrica's flat encyclopedia, this vault also follows the sequence of two graduate courses, so each topic folder states a reading order rather than assuming random-access browsing.

## Format

Every entry is a single Markdown file inside a topic folder, written in English, with YAML frontmatter:

```yaml
---
title: Entry Title
source: "Econ 1, §2.3" | "Econ 2b, Ch.6" | "Wooldridge (2010), Ch.4"
status: stub | drafted | enriched
tags: [ols, gauss-markov, finite-sample]
prerequisites: [ols-estimation/deriving-the-ols-estimator]
---
```

See [`_template.md`](_template.md) for the full skeleton. Cross-links between entries use relative Markdown links (e.g., from within `difference-in-differences/`, `[Gauss-Markov theorem](../ols-estimation/gauss-markov-theorem.md)`), not wikilinks — this keeps the vault Obsidian-readable today and portable to a website later without rewriting content.

For browsing, two extra navigation pages mirror the reading order below: [`Map of Content.md`](Map%20of%20Content.md) embeds every entry's full text inline (`![[...]]`, Obsidian-only) so you can scroll and preview the whole vault from one page; [`Map of Content (List).md`](Map%20of%20Content%20%28List%29.md) is the same order as plain links (portable, lighter) and also carries a vault-statistics table at the top. Both are pure navigation convenience — this README stays the portable source of truth for structure.

**Figures** are embedded directly as TikZ code blocks (rendered live in Obsidian by the [TikZJax](https://github.com/artisticat1/obsidian-tikzjax) community plugin — enable it under *Settings → Community plugins*), rather than pre-rendered SVG files:

````
```tikz
\begin{document}
\begin{tikzpicture}
...
\end{tikzpicture}
\end{document}
```
````

Code is written in **plain core TikZ only** (`\draw`, `\node`, `\fill`, `plot[smooth] coordinates`) — no `pgfplots` or extra `\usetikzlibrary` calls, since those aren't reliably bundled in TikZJax's WASM build and a figure that fails to compile is worse than no figure. Each figure is followed by a one-line italic caption. Added only where a diagram genuinely clarifies the entry (parallel-trends plots, RDD jumps, distribution shapes) — most entries don't need one.

`status` tracks how far an entry has come:
- **stub** — converted from lecture notes only, not yet cross-checked against textbooks.
- **drafted** — full prose written, still needs the textbook enrichment pass.
- **enriched** — reworked with textbook intuition/examples/citations (Phase 3 done).

Entries that cover material **neither course actually taught** — Phase 4 extensions written directly from the textbooks — carry a `beyond-lectures` tag in their `tags:` list (in addition to their topical tags) and a `source:` pointing only to a textbook, never to "Econ 1" or "Econ 2b". This makes them filterable in Obsidian's tag pane while keeping them fully cross-linked and readable alongside the course-derived material — see Part III below.

## Topic map & reading order

### Part I — Econometrics 1 (classical linear regression)
1. [`foundations/`](foundations/00-overview.md) — what econometrics is, parameter vs. estimand vs. estimator, data types
2. [`probability-and-distributions/`](probability-and-distributions/00-overview.md) — moments, normal/χ²/t/F, framed for what OLS inference needs
3. [`matrix-algebra-for-econometrics/`](matrix-algebra-for-econometrics/00-overview.md) — the OLS-in-matrix-form toolkit
4. [`ols-estimation/`](ols-estimation/00-overview.md) — deriving OLS, Gauss-Markov, finite-sample properties, CIs and t-tests
5. [`asymptotic-theory/`](asymptotic-theory/00-overview.md) — LLN, CLT, Slutsky, delta method, asymptotic OLS, Wald/LR/LM tests
6. [`heteroskedasticity-and-autocorrelation/`](heteroskedasticity-and-autocorrelation/00-overview.md) — robust SE, GLS/FGLS, Newey-West
7. [`identification/`](identification/00-overview.md) — omitted variables, measurement error, simultaneity, and the identification map
8. [`instrumental-variables/`](instrumental-variables/00-overview.md) — 2SLS, weak instruments, IV tests *(basic layer; extended in Part II)*

### Part II — Econometrics 2b (causal inference & program evaluation)
9. [`causal-inference-foundations/`](causal-inference-foundations/00-overview.md) — all-causes model, ACEs, Rubin's model, potential outcomes
10. [`treatment-effects/`](treatment-effects/00-overview.md) — selectivity problem, RCTs, imperfect compliance, power, selection correction
11. [`instrumental-variables/`](instrumental-variables/00-overview.md) — LATE, monotonicity, the five IV assumptions with heterogeneity
12. [`regression-discontinuity/`](regression-discontinuity/00-overview.md) — sharp/fuzzy RDD, continuity tests, local-polynomial estimation
13. [`unconfoundedness-methods/`](unconfoundedness-methods/00-overview.md) — CIA, matching, propensity score, IPW, doubly robust
14. [`difference-in-differences/`](difference-in-differences/00-overview.md) — standard DiD, TWFE, heterogeneous effects, modern estimators
15. [`synthetic-control/`](synthetic-control/00-overview.md) — the estimator, permutation inference, factor-model foundation
16. [`partial-identification/`](partial-identification/00-overview.md) — Horowitz-Manski bounds, Lee bounds, sharpness

### Part III — Extensions beyond the two courses (`beyond-lectures`)
Material neither course taught, written directly from the textbooks (chiefly Wooldridge) to round out the vault into a fuller reference. Not part of either course's reading order — read these when the topic itself is of interest.
17. [`panel-data-methods/`](panel-data-methods/00-overview.md) — the unobserved effects model, fixed effects (within) and random effects estimators, the Hausman test
18. [`limited-dependent-variable-models/`](limited-dependent-variable-models/00-overview.md) — logit/probit, partial effects, Tobit, Poisson regression, Heckit sample selection
19. [`time-series-methods/`](time-series-methods/00-overview.md) — static/FDL models, the time-series Gauss-Markov assumptions, weak dependence, trends, seasonality, spurious regression, unit roots, cointegration
20. [`generalized-method-of-moments/`](generalized-method-of-moments/00-overview.md) — moment conditions, the GMM estimator, and how it nests OLS/IV/MLE

### Reference
- [`reference/`](reference/00-overview.md) — proofs and derivations that support the above (delta method, LLN/CLT, LATE theorem, common densities)
- [`pages/sources.md`](pages/sources.md) — bibliography (course reading lists + textbooks)
- [`pages/glossary.md`](pages/glossary.md) — estimator/test/assumption name → entry link
- [`pages/status.md`](pages/status.md) — progress dashboard
- [`pages/external-resources.md`](pages/external-resources.md) — curated external reading list (causal inference, econometrics, R/Python, LaTeX tooling), mirrored from my personal site

## Sources

Primary sources are two graduate econometrics courses (`Notes de cours/`), enriched with: Wooldridge, *Introductory Econometrics* and *Econometric Analysis of Cross Section and Panel Data*; Angrist & Pischke, *Mostly Harmless Econometrics*; Cunningham, *Causal Inference: The Mixtape*; Magnus, lecture notes on matrix calculus; and C. de Chaisemartin's lecture notes. Part III additionally draws on Hansen (1982) and Efron & Tibshirani (1993). Full details in [`pages/sources.md`](pages/sources.md).

## Status

- [x] Scaffold: folder structure, templates, format locked in with demo entries
- [x] Part I converted from Econ 1 notes (59 entries, stub pass)
- [x] Part II converted from Econ 2b notes — all 9 chapters + both appendices (90 entries, stub pass)
- [ ] Textbook enrichment pass (stub → enriched) — 148/149 course-derived entries, 99%: every folder fully enriched except one entry in `difference-in-differences/` (`efficiency-vs-robustness-tradeoff.md`, needs Wolfers 2006) — see `pages/status.md`
- [ ] New entries beyond the two courses (Part III, `beyond-lectures` tag) — `panel-data-methods/` (7), `limited-dependent-variable-models/` (5), `time-series-methods/` (6, complete — Ch.10, 11, 18), `generalized-method-of-moments/` (4), plus a bootstrap entry in `reference/` — **23 entries so far**. Still open: discrete-choice extensions beyond §17 (multinomial/ordered logit), infinite/rational distributed lag models, page-specific GMM sourcing from Wooldridge (2010).
- [ ] Illustrations pass (SVG figures) 
	- [ ] Added by me at 18:57, Mon 3 August: possibly doing some tikz figure that would be directly seen in obsidian (adding a relevant package if necessayr) ; rather than SVG figures. Adding those tikz figures, whenever this appears to be relevant. 

**172 entries total** (149 course-derived + 23 Part III extensions). See [`pages/status.md`](pages/status.md) for the folder-by-folder breakdown.
