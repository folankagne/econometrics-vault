---
title: Status
---
Progress dashboard. `stub` = converted from lecture notes only; `drafted` = full prose written (demo entries and a few dense synthesis entries went straight here); `enriched` = textbook pass done (Phase 3, nearly complete).

## Part I — Econometrics 1 (Phase 1 — complete)

| Folder | Entries | Status |
|---|---|---|
| `foundations/` | 4 | **enriched** (Wooldridge 2016, Ch.1 + App. C-1/C-2/C-3a) |
| `probability-and-distributions/` | 7 | **enriched** (Wooldridge 2016, App. B) |
| `matrix-algebra-for-econometrics/` | 9 | **enriched** (Wooldridge 2016, App. D + E-1; Magnus) |
| `ols-estimation/` | 8 | **enriched** (Wooldridge 2016, Ch.2–4) |
| `asymptotic-theory/` | 8 | **enriched** (Wooldridge 2016, Ch.5) |
| `heteroskedasticity-and-autocorrelation/` | 9 | **enriched** (Wooldridge 2016, Ch.8, Ch.12) |
| `identification/` | 6 | **enriched** (Wooldridge 2016, Ch.9, Ch.16) |
| `instrumental-variables/` (basic + 2SLS + tests layer) | 9 | **enriched** (Angrist & Pischke 2009, Ch.4.1–4.2) |

## Part II — Econometrics 2b (Phase 2 — complete)

| Folder | Entries | Status |
|---|---|---|
| `causal-inference-foundations/` | 7 | **enriched** (Cunningham 2021 Ch.4; Angrist & Pischke 2009 Ch.2) |
| `treatment-effects/` | 14 | **enriched** (Angrist & Pischke 2009 Ch.2, 4.4; Cunningham 2021 Ch.4) |
| `instrumental-variables/` (LATE + weak-instruments layer) | 13 | **enriched** (Angrist & Pischke 2009, Ch.4.4, 4.6) |
| `regression-discontinuity/` | 9 | **enriched** (Cunningham 2021 Ch.6; Hoekstra 2009; Carpenter & Dobkin 2009) |
| `unconfoundedness-methods/` | 14 | **enriched** (Cunningham 2021 Ch.5; LaLonde 1986; Dehejia & Wahba 1999/2002) |
| `difference-in-differences/` | 9 new (12 total with Econ 1 bridge + demo) | **11 of 12 enriched** (de Chaisemartin 2021 Ch.11 + Cunningham 2021: full sharp 2x2 case, TWFE negative weights/Goodman-Bacon, DID_M, early-vs-late, dynamic event-studies/Bacon worked example, cohort-based CSA/Sun-Abraham/BJS + Cengiz stacking + Athey matrix completion, modern-DID summary) — only `efficiency-vs-robustness-tradeoff.md` (Wolfers 2006 comparison) still stub, source not yet located |
| `synthetic-control/` | 6 | **enriched** (Cunningham 2021: German reunification, Prop 99, Basque terrorism, Mariel Boatlift replication, Texas prison construction) |
| `partial-identification/` | 6 | **enriched** (Manski 1989/1990; Horowitz & Manski 2000; Lee 2009) |
| `reference/` (appendix proofs & derivations) | 9 (8 course-derived + 1 `beyond-lectures`) | **enriched** (Wooldridge 2016 App. C/D; Heckman 2005; Berger 2013; de Chaisemartin 2021; Efron & Tibshirani 1993) |

**Course-derived total: 149 entries** (148 enriched, 1 stub). See below for Part III.

## Part III — Extensions beyond the two courses (Phase 4, `beyond-lectures` tag)

| Folder | Entries | Status |
|---|---|---|
| `panel-data-methods/` | 7 | **enriched** (Wooldridge 2016, Ch.13–14) |
| `limited-dependent-variable-models/` | 5 | **enriched** (Wooldridge 2016, Ch.17) |
| `time-series-methods/` | 6 | **enriched** (Wooldridge 2016, Ch.10–11, 18: static/FDL models, TS Gauss-Markov, trends/seasonality, index numbers/event studies, weak dependence & asymptotic OLS, unit roots/spurious regression/cointegration) |
| `generalized-method-of-moments/` | 4 | **enriched** (Hansen 1982; Wooldridge 2010, cited generically — specific pages not yet pulled) |
| `reference/bootstrap-methods-for-standard-errors-and-inference.md` | 1 | **enriched** (Efron & Tibshirani 1993) |

**Part III total: 23 entries**, all tagged `beyond-lectures`, all `status: enriched` from the moment they were written (they have no lecture-note "stub" stage to pass through — they exist only because the enrichment pass created them). `time-series-methods/` is now the one fully complete Part III folder, covering everything Wooldridge (2016) Part 2 offers (Ch.10, 11, 18) short of forecasting-specific material (Ch.18-5, out of scope for a reference vault) and infinite/rational distributed lag models (Ch.18-1–18-2, a possible future addition).

**Grand total: 172 entries** across course-derived + Part III content, + 20 `00-overview.md` folder indexes (16 original + 4 new) + 3 `pages/` + root `README.md` + `_template.md`.

## Phases

- [x] Phase 0 — Scaffold (folders, README, template, 3 demo entries)
- [x] Phase 1 — Econ 1 → vault (both source files fully converted, stub pass, 59 entries)
- [x] Phase 2 — Econ 2b → vault (all 9 chapters + both appendices fully converted, 90 entries)
- [ ] Phase 3 — Textbook enrichment pass (Wooldridge ×2, Angrist & Pischke, Cunningham, Magnus, de Chaisemartin notes) — **148/149 entries enriched (99%)**. Every folder is fully enriched except `difference-in-differences/`, which is missing only `efficiency-vs-robustness-tradeoff.md` (needs the Wolfers 2006 unilateral-divorce comparison, not yet sourced from primary text). Sourced from: Wooldridge (2016) Ch.1–5, 8, 9, 12, 16 + Appendices B/C/D/E-1; Angrist & Pischke (2009) Ch.2, 4; Cunningham (2021) Ch.4–7; de Chaisemartin (2021) Ch.11; Magnus (matrix calculus); Manski/Horowitz-Manski/Lee (partial identification); Heckman (2005); Berger (2013).
- [ ] Phase 4 — New entries beyond the two courses — **23 entries**: `panel-data-methods/` (7), `limited-dependent-variable-models/` (5), `time-series-methods/` (6, complete), `generalized-method-of-moments/` (4), bootstrap (1). All tagged `beyond-lectures`. **Deliberately paused here** — remaining candidates (Wolfers 2006 for `difference-in-differences/efficiency-vs-robustness-tradeoff.md`, discrete-choice extensions beyond Wooldridge §17, infinite/rational distributed lag models, page-specific GMM sourcing from Wooldridge 2010) are left in the backlog for a later session.
- [ ] Phase 5 — Illustrations & polish — **started 2026-08-04**: figures are embedded as `tikz` code blocks (rendered live via the Obsidian TikZJax community plugin), not pre-rendered SVGs, per the 2026-08-03 direction note. Convention documented in `README.md`. **24 figures added so far** (all brace-balanced, checked): [DiD parallel trends](../difference-in-differences/standard-difference-in-differences.md), [sharp RDD](../regression-discontinuity/sharp-rdd.md), [fuzzy RDD](../regression-discontinuity/fuzzy-rdd.md), [synthetic control trajectories](../synthetic-control/setup-and-the-estimator.md), [normal](../probability-and-distributions/normal-distribution.md)/[χ²](../probability-and-distributions/chi-square-distribution.md)/[t](../probability-and-distributions/students-t-distribution.md)/[F](../probability-and-distributions/fishers-f-distribution.md) densities, [IV DAG](../instrumental-variables/iv-identification-conditions.md), [OLS fitted-line scatter](../ols-estimation/deriving-the-ols-estimator.md), [heteroskedasticity fan](../heteroskedasticity-and-autocorrelation/non-spherical-disturbances.md), [propensity-score overlap](../unconfoundedness-methods/trimming-and-overlap-violations.md), [Roy-model selection](../treatment-effects/sources-of-selection-bias.md), [event-study coefficient plot](../difference-in-differences/dynamic-twfe-and-event-studies.md), [Horowitz-Manski identified set](../partial-identification/horowitz-manski-bounds.md), [McCrary density-jump](../regression-discontinuity/testing-continuity-mccrary-and-balancing.md), [synthetic-control placebo spaghetti plot](../synthetic-control/sparsity-and-permutation-inference.md), [Lee-bounds quantile trimming](../partial-identification/lee-bounds.md), [FE within-transformation](../panel-data-methods/fixed-effects-within-estimator.md), [random walk vs. stable AR(1)](../time-series-methods/unit-roots-spurious-regression-and-cointegration.md), [CLT narrowing distributions](../asymptotic-theory/convergence-in-distribution-and-the-central-limit-theorem.md), [potential-outcomes fork](../causal-inference-foundations/rubins-causal-model.md), [nearest-neighbor matching diagram](../unconfoundedness-methods/nearest-neighbor-matching.md), [RDD bandwidth window](../regression-discontinuity/local-linear-estimation-and-bandwidth-choice.md). Cross-link backfill not yet started.

## Notes on scope decisions

- Content from Econ 1's closing "policy evaluation" bridge and Econ 2b material that logically belongs together was placed by **topic**, not by source course — e.g. Econ 1's difference-estimator material sits in `difference-in-differences/`, not a separate "Econ 1 bridge" folder.
- A handful of appendix subsections were **not** separately reproduced because they were fully redundant with material already converted from the main chapters (e.g. the OLS-difference-in-means alternative derivation, the basic "why demeaning matters" explanation) — only genuinely new content from the appendices (variance derivations, delta method, extended monotonicity discussion, extended TWFE robustness results, probability-theory formalism) became new entries.
