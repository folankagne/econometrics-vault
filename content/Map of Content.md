---
title: Map of Content
---
# Map of Content

Every entry in the vault, embedded full-text, in reading order. This page exists purely for navigation and preview inside Obsidian — it uses `![[...]]` embeds, which only render here, not on GitHub or any plain Markdown viewer. The [README](README.md) has the identical reading order as plain portable links, and is the canonical structure document; this page is a convenience layer on top of it, safe to delete and regenerate at any time.

Each embed can be folded individually in Obsidian (hover the block, click the collapse arrow on the left) if a section gets long.

## Part I — Econometrics 1 (classical linear regression)

### 1. Foundations
![[foundations/00-overview]]
![[foundations/what-is-econometrics]]
![[foundations/population-sample-and-data-structures]]
![[foundations/estimators-and-sampling-distributions]]
![[foundations/identification-and-statistical-inference]]

### 2. Probability and Distributions
![[probability-and-distributions/00-overview]]
![[probability-and-distributions/probability-density-and-distribution-functions]]
![[probability-and-distributions/expectation-of-a-random-variable]]
![[probability-and-distributions/variance-and-covariance-of-a-random-variable]]
![[probability-and-distributions/normal-distribution]]
![[probability-and-distributions/chi-square-distribution]]
![[probability-and-distributions/students-t-distribution]]
![[probability-and-distributions/fishers-f-distribution]]

### 3. Matrix Algebra for Econometrics
![[matrix-algebra-for-econometrics/00-overview]]
![[matrix-algebra-for-econometrics/matrices-and-vectors-in-econometrics]]
![[matrix-algebra-for-econometrics/matrix-transpose-and-symmetric-matrices]]
![[matrix-algebra-for-econometrics/matrix-addition-and-subtraction]]
![[matrix-algebra-for-econometrics/matrix-multiplication-for-econometrics]]
![[matrix-algebra-for-econometrics/special-matrices-in-econometrics]]
![[matrix-algebra-for-econometrics/rank-of-a-matrix]]
![[matrix-algebra-for-econometrics/determinant-of-a-square-matrix]]
![[matrix-algebra-for-econometrics/matrix-inversion]]
![[matrix-algebra-for-econometrics/differentiation-of-linear-and-quadratic-forms]]

### 4. OLS Estimation
![[ols-estimation/00-overview]]
![[ols-estimation/deriving-the-ols-estimator]]
![[ols-estimation/the-general-linear-regression-model]]
![[ols-estimation/unbiasedness-of-ols]]
![[ols-estimation/finite-sample-variance-of-ols]]
![[ols-estimation/gauss-markov-theorem]]
![[ols-estimation/sampling-distribution-of-ols-under-normality]]
![[ols-estimation/confidence-intervals-for-ols-coefficients]]
![[ols-estimation/hypothesis-testing-and-t-statistics]]

### 5. Asymptotic Theory
![[asymptotic-theory/00-overview]]
![[asymptotic-theory/convergence-in-probability-and-consistency]]
![[asymptotic-theory/law-of-large-numbers]]
![[asymptotic-theory/convergence-in-distribution-and-the-central-limit-theorem]]
![[asymptotic-theory/slutskys-theorem]]
![[asymptotic-theory/asymptotic-distribution-of-ols-can]]
![[asymptotic-theory/estimating-the-asymptotic-variance-of-ols]]
![[asymptotic-theory/hypothesis-testing-framework-errors-and-power]]
![[asymptotic-theory/fisher-and-wald-tests]]

### 6. Heteroskedasticity and Autocorrelation
![[heteroskedasticity-and-autocorrelation/00-overview]]
![[heteroskedasticity-and-autocorrelation/non-spherical-disturbances]]
![[heteroskedasticity-and-autocorrelation/consequences-of-non-sphericity-for-ols]]
![[heteroskedasticity-and-autocorrelation/sphericalization-and-gls]]
![[heteroskedasticity-and-autocorrelation/robust-vs-efficient-estimation-tradeoff]]
![[heteroskedasticity-and-autocorrelation/white-robust-standard-errors]]
![[heteroskedasticity-and-autocorrelation/feasible-gls-for-heteroskedasticity]]
![[heteroskedasticity-and-autocorrelation/autocorrelation-and-stationarity]]
![[heteroskedasticity-and-autocorrelation/ar1-processes-and-prais-winsten-estimation]]
![[heteroskedasticity-and-autocorrelation/testing-for-autocorrelation]]

### 7. Identification
![[identification/00-overview]]
![[identification/exogeneity-and-endogeneity]]
![[identification/omitted-variable-bias]]
![[identification/measurement-error-and-attenuation-bias]]
![[identification/simultaneity-bias]]
![[identification/identification-strategies-overview]]

### 8. Instrumental Variables — basic IV and 2SLS
![[instrumental-variables/00-overview]]
![[instrumental-variables/iv-identification-conditions]]
![[instrumental-variables/wald-estimator]]
![[instrumental-variables/compliers-always-takers-never-takers-defiers]]
![[instrumental-variables/continuous-iv-and-the-first-stage]]
![[instrumental-variables/multivariate-iv-estimator]]
![[instrumental-variables/two-stage-least-squares]]
![[instrumental-variables/weak-instruments-and-iv-warnings]]
![[instrumental-variables/hausman-test]]
![[instrumental-variables/sargan-test-for-overidentification]]

## Part II — Econometrics 2b (causal inference & program evaluation)

### 9. Causal Inference Foundations
![[causal-inference-foundations/00-overview]]
![[causal-inference-foundations/marshalls-maxim-and-the-all-causes-model]]
![[causal-inference-foundations/parameter-estimand-and-estimator]]
![[causal-inference-foundations/average-causal-effects]]
![[identification/zcm-and-zc-assumptions]]
![[causal-inference-foundations/four-views-on-the-zero-covariance-assumption]]
![[causal-inference-foundations/two-approaches-to-marshalls-maxim]]
![[causal-inference-foundations/potential-outcomes-and-the-naive-estimator]]
![[causal-inference-foundations/rubins-causal-model]]

### 10. Treatment Effects
![[treatment-effects/00-overview]]
![[treatment-effects/average-treatment-effect-and-att]]
![[treatment-effects/the-selectivity-problem]]
![[treatment-effects/sources-of-selection-bias]]
![[treatment-effects/randomized-experiments-and-difference-in-means]]
![[treatment-effects/randomized-controlled-trials]]
![[treatment-effects/the-star-experiment-and-balance-checks]]
![[treatment-effects/adding-controls-in-rcts]]
![[treatment-effects/imperfect-compliance-and-encouragement-designs]]
![[treatment-effects/from-wald-to-2sls-star-application]]
![[treatment-effects/statistical-power-and-type-i-ii-errors]]
![[treatment-effects/minimum-detectable-effect]]
![[treatment-effects/the-statistical-cost-of-non-compliance]]
![[treatment-effects/validation-studies-and-observational-bias]]
![[treatment-effects/experimental-selection-correction-estimator]]

### 11. Instrumental Variables — LATE and heterogeneous effects
![[instrumental-variables/iv-as-a-source-of-exogenous-variation]]
![[instrumental-variables/decomposing-the-first-stage-and-itt]]
![[instrumental-variables/sutva-and-exclusion-restriction-for-late]]
![[instrumental-variables/monotonicity-and-relevance-for-late]]
![[instrumental-variables/late-theorem]]
![[instrumental-variables/consequences-of-late]]
![[instrumental-variables/exclusion-violations-and-iv-bias]]
![[instrumental-variables/one-instrument-one-endogenous-variable]]
![[instrumental-variables/theory-and-the-exclusion-restriction]]
![[instrumental-variables/statistical-properties-of-the-wald-estimator]]
![[instrumental-variables/the-weak-instruments-problem]]
![[instrumental-variables/testing-and-fixing-weak-instruments]]
![[instrumental-variables/recommendations-for-iv-practitioners]]

### 12. Regression Discontinuity
![[regression-discontinuity/00-overview]]
![[regression-discontinuity/introduction-and-historical-examples]]
![[regression-discontinuity/sharp-rdd]]
![[regression-discontinuity/fuzzy-rdd]]
![[regression-discontinuity/the-continuity-assumption-and-imprecise-control]]
![[regression-discontinuity/local-randomization-and-heterogeneous-effects-in-rdd]]
![[regression-discontinuity/testing-continuity-mccrary-and-balancing]]
![[regression-discontinuity/local-linear-estimation-and-bandwidth-choice]]
![[regression-discontinuity/application-tax-credits-rural-france]]
![[regression-discontinuity/special-cases-and-when-rdd-fails]]

### 13. Unconfoundedness Methods
![[unconfoundedness-methods/00-overview]]
![[unconfoundedness-methods/conditional-independence-assumption]]
![[unconfoundedness-methods/nonparametric-identification-under-cia]]
![[unconfoundedness-methods/cia-and-linear-regression]]
![[unconfoundedness-methods/regression-and-kernel-based-estimation]]
![[unconfoundedness-methods/nearest-neighbor-matching]]
![[unconfoundedness-methods/propensity-score-theorem]]
![[unconfoundedness-methods/the-balancing-property]]
![[unconfoundedness-methods/cate-and-machine-learning-estimators]]
![[unconfoundedness-methods/inverse-probability-weighting]]
![[unconfoundedness-methods/doubly-robust-estimation]]
![[unconfoundedness-methods/double-debiased-machine-learning]]
![[unconfoundedness-methods/interpretation-and-examples-of-unconfoundedness]]
![[unconfoundedness-methods/att-under-cia]]
![[unconfoundedness-methods/trimming-and-overlap-violations]]

### 14. Difference-in-Differences
![[difference-in-differences/00-overview]]
![[difference-in-differences/cross-section-and-before-after-estimators]]
![[difference-in-differences/standard-difference-in-differences]]
![[difference-in-differences/the-did-regression-representation]]
![[difference-in-differences/card-krueger-and-assessing-parallel-trends]]
![[difference-in-differences/two-way-fixed-effects]]
![[difference-in-differences/twfe-negative-weights-and-goodman-bacon]]
![[difference-in-differences/early-vs-late-treated-illustrative-example]]
![[difference-in-differences/dynamic-twfe-and-event-studies]]
![[difference-in-differences/did-m-estimator]]
![[difference-in-differences/cohort-based-estimators-csa-sun-abraham-bjs]]
![[difference-in-differences/efficiency-vs-robustness-tradeoff]]
![[difference-in-differences/modern-did-summary-and-open-questions]]

### 15. Synthetic Control
![[synthetic-control/00-overview]]
![[synthetic-control/motivation-and-examples]]
![[synthetic-control/setup-and-the-estimator]]
![[synthetic-control/sparsity-and-permutation-inference]]
![[synthetic-control/linear-factor-model-and-bias-bound]]
![[synthetic-control/choosing-predictors-and-comparison-with-ols]]
![[synthetic-control/applied-example-texas-prison-construction]]

### 16. Partial Identification
![[partial-identification/00-overview]]
![[partial-identification/from-point-to-partial-identification]]
![[partial-identification/horowitz-manski-bounds]]
![[partial-identification/lee-bounds]]
![[partial-identification/sharpness]]
![[partial-identification/length-of-horowitz-manski-bounds]]
![[partial-identification/bounds-with-covariates]]

## Part III — Extensions beyond the two courses (`beyond-lectures`)

Not part of either course's reading order — read these when the topic itself is of interest.

### 17. Panel Data Methods
![[panel-data-methods/00-overview]]
![[panel-data-methods/pooled-cross-sections-and-the-unobserved-effects-model]]
![[panel-data-methods/the-first-differenced-estimator]]
![[panel-data-methods/fixed-effects-within-estimator]]
![[panel-data-methods/fixed-effects-vs-first-differencing]]
![[panel-data-methods/random-effects-model-and-gls]]
![[panel-data-methods/fixed-vs-random-effects-and-the-hausman-test]]
![[panel-data-methods/unbalanced-panels-and-clustered-standard-errors]]

### 18. Limited Dependent Variable Models
![[limited-dependent-variable-models/00-overview]]
![[limited-dependent-variable-models/logit-and-probit-models]]
![[limited-dependent-variable-models/partial-effects-in-nonlinear-response-models]]
![[limited-dependent-variable-models/the-tobit-model-for-corner-solutions]]
![[limited-dependent-variable-models/poisson-regression-for-count-data]]
![[limited-dependent-variable-models/sample-selection-and-the-heckit-method]]

### 19. Time Series Methods
![[time-series-methods/00-overview]]
![[time-series-methods/static-and-finite-distributed-lag-models]]
![[time-series-methods/time-series-gauss-markov-assumptions]]
![[time-series-methods/trends-seasonality-and-spurious-regression]]
![[time-series-methods/index-numbers-and-event-studies]]
![[time-series-methods/weakly-dependent-time-series-and-asymptotic-ols]]
![[time-series-methods/unit-roots-spurious-regression-and-cointegration]]

### 20. Generalized Method of Moments
![[generalized-method-of-moments/00-overview]]
![[generalized-method-of-moments/moment-conditions-and-the-method-of-moments]]
![[generalized-method-of-moments/the-gmm-estimator-and-efficient-weighting]]
![[generalized-method-of-moments/gmm-nests-ols-iv-and-mle]]
![[generalized-method-of-moments/overidentification-and-the-j-test]]

## Reference — proofs and derivations

![[reference/00-overview]]
![[reference/heckman-2005-scientific-model-of-causality]]
![[reference/variance-derivations-ols-and-iv]]
![[reference/the-delta-method]]
![[reference/monotonicity-in-iv-designs]]
![[reference/twfe-robustness-measures-and-did-m-details]]
![[reference/common-statistical-densities]]
![[reference/laws-of-large-numbers-formal]]
![[reference/central-limit-theorem-formal]]
![[reference/bootstrap-methods-for-standard-errors-and-inference]]

## Meta pages (not embedded — indexes, not content)

- [`pages/sources.md`](pages/sources.md) — bibliography
- [`pages/glossary.md`](pages/glossary.md) — estimator/test/assumption name → entry link
- [`pages/status.md`](pages/status.md) — progress dashboard
- [`pages/external-resources.md`](pages/external-resources.md) — curated external reading list, mirrored from my personal site
