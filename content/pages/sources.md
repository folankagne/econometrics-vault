---
title: Sources
---
## Primary sources (course notes)

- **Econ 1** — *Econometrics 1 Lecture Notes*, `Notes de cours/Econometrics_1_Notes/` (`1. Intro Note.tex`, `2 Lecture Notes.tex`). Classical linear regression: distribution theory review, matrix algebra, OLS derivation, finite-sample and asymptotic properties, heteroskedasticity/autocorrelation, identification, instrumental variables.
- **Econ 2b** — *Econometrics 2b Lecture Notes*, `Notes de cours/Notes_Econometrics_2b__OG_Full_/` (`0 Introduction.tex` through `8 Partial Identification.tex`, plus `Appendix.tex` and `Appendix_S1.tex`). Causal inference and program evaluation: potential outcomes, RCTs, IV/LATE, RDD, unconfoundedness, DiD/TWFE, synthetic control, partial identification.

Both courses carry their own `.bib` files (`refs.bib`, `references.bib`) with the full citation lists used in lecture; entry-level citations are pulled from these as each entry gets its textbook-enrichment pass (see [`status.md`](status.md)), rather than reproduced here in full.

## Textbooks (enrichment pass, `Textbooks/`)

- Wooldridge, J. M. (2016). *Introductory Econometrics: A Modern Approach.* South-Western Cengage Learning. — intuition and examples for undergraduate-level entries.
- Wooldridge, J. M. (2010). *Econometric Analysis of Cross Section and Panel Data.* MIT Press. — rigor for asymptotic theory, GMM-adjacent material, panel data.
- Angrist, J. D., & Pischke, J.-S. (2009). *Mostly Harmless Econometrics: An Empiricist's Companion.* Princeton University Press. — applied intuition for IV, RDD, DiD.
- Cunningham, S. (2021). *Causal Inference: The Mixtape.* Yale University Press. — worked examples and alternative expositions for the Part II causal-inference material.
- Magnus, J. R. — lecture notes on matrix calculus. — rigor for `matrix-algebra-for-econometrics/` and matrix-form derivations.
- de Chaisemartin, C. — lecture notes. Likely the primary source the Econ 2b course draws from, especially for modern DiD/TWFE (own research area); used for terminology cross-checks and citations.

## Additional sources (Part III — `beyond-lectures` extensions)

Material in `panel-data-methods/`, `limited-dependent-variable-models/`, `time-series-methods/`, and `generalized-method-of-moments/` covers topics neither course taught, so it is sourced directly from textbooks rather than lecture notes:

- Wooldridge (2016), Ch.10 (basic time series), Ch.13–14 (pooling/panel data), Ch.17 (limited dependent variables and sample selection) — primary source for three of the four Part III folders.
- Hansen, L. P. (1982). "Large Sample Properties of Generalized Method of Moments Estimators." *Econometrica*, 50(4). — foundational GMM paper, `generalized-method-of-moments/`.
- Efron, B., & Tibshirani, R. J. (1993). *An Introduction to the Bootstrap.* Chapman & Hall. — `reference/bootstrap-methods-for-standard-errors-and-inference.md`.

## Citation style in entries

The `source:` frontmatter field points to where an entry's content was drawn from (a course section or a textbook chapter). Inline citations, where added during the enrichment pass, use author-year in prose (e.g. "Callaway & Sant'Anna (2021) show...") rather than a bibtex key, since this vault has no bibliography-rendering pipeline yet.
