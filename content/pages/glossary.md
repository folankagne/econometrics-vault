---
title: Glossary
---
An index of estimators, tests, and assumptions, pointing to the entry that defines them.

## Estimators
- Ordinary Least Squares (OLS) → [`ols-estimation/deriving-the-ols-estimator`](../ols-estimation/deriving-the-ols-estimator.md)
- Generalized Least Squares (GLS) / Weighted Least Squares (WLS) → [`heteroskedasticity-and-autocorrelation/sphericalization-and-gls`](../heteroskedasticity-and-autocorrelation/sphericalization-and-gls.md)
- Feasible GLS (FGLS) → [`heteroskedasticity-and-autocorrelation/feasible-gls-for-heteroskedasticity`](../heteroskedasticity-and-autocorrelation/feasible-gls-for-heteroskedasticity.md)
- White / HCCME robust estimator → [`heteroskedasticity-and-autocorrelation/white-robust-standard-errors`](../heteroskedasticity-and-autocorrelation/white-robust-standard-errors.md)
- Prais-Winsten (AR(1) GLS) → [`heteroskedasticity-and-autocorrelation/ar1-processes-and-prais-winsten-estimation`](../heteroskedasticity-and-autocorrelation/ar1-processes-and-prais-winsten-estimation.md)
- Instrumental Variables (IV) / Wald estimator → [`instrumental-variables/wald-estimator`](../instrumental-variables/wald-estimator.md)
- Two-Stage Least Squares (2SLS) → [`instrumental-variables/two-stage-least-squares`](../instrumental-variables/two-stage-least-squares.md)
- LIML → mentioned in [`instrumental-variables/testing-and-fixing-weak-instruments`](../instrumental-variables/testing-and-fixing-weak-instruments.md)
- Rubin's Causal Model / potential outcomes → [`causal-inference-foundations/rubins-causal-model`](../causal-inference-foundations/rubins-causal-model.md)
- Difference-in-Differences (DiD) → [`difference-in-differences/standard-difference-in-differences`](../difference-in-differences/standard-difference-in-differences.md)
- Two-Way Fixed Effects (TWFE) → [`difference-in-differences/two-way-fixed-effects`](../difference-in-differences/two-way-fixed-effects.md)
- $DID_M$ (de Chaisemartin–D'Haultfœuille) → [`difference-in-differences/did-m-estimator`](../difference-in-differences/did-m-estimator.md)
- Callaway-Sant'Anna, Sun-Abraham, Borusyak-Jaravel-Spiess estimators → [`difference-in-differences/cohort-based-estimators-csa-sun-abraham-bjs`](../difference-in-differences/cohort-based-estimators-csa-sun-abraham-bjs.md)
- Synthetic control estimator → [`synthetic-control/setup-and-the-estimator`](../synthetic-control/setup-and-the-estimator.md)
- Regression/kernel/matching estimators under CIA → [`unconfoundedness-methods/regression-and-kernel-based-estimation`](../unconfoundedness-methods/regression-and-kernel-based-estimation.md), [`nearest-neighbor-matching`](../unconfoundedness-methods/nearest-neighbor-matching.md)
- Inverse Probability Weighting (IPW) → [`unconfoundedness-methods/inverse-probability-weighting`](../unconfoundedness-methods/inverse-probability-weighting.md)
- Doubly-robust / Double Machine Learning (DML) → [`unconfoundedness-methods/doubly-robust-estimation`](../unconfoundedness-methods/doubly-robust-estimation.md), [`double-debiased-machine-learning`](../unconfoundedness-methods/double-debiased-machine-learning.md)
- Experimental Selection Correction (ESC) estimator → [`treatment-effects/experimental-selection-correction-estimator`](../treatment-effects/experimental-selection-correction-estimator.md)
- Horowitz-Manski bounds / Lee bounds → [`partial-identification/horowitz-manski-bounds`](../partial-identification/horowitz-manski-bounds.md), [`lee-bounds`](../partial-identification/lee-bounds.md)
- Fixed effects (within) / Random effects (GLS) estimator → [`panel-data-methods/fixed-effects-within-estimator`](../panel-data-methods/fixed-effects-within-estimator.md), [`random-effects-model-and-gls`](../panel-data-methods/random-effects-model-and-gls.md) *(beyond-lectures)*
- Logit / Probit / Tobit / Poisson regression → [`limited-dependent-variable-models/logit-and-probit-models`](../limited-dependent-variable-models/logit-and-probit-models.md), [`the-tobit-model-for-corner-solutions`](../limited-dependent-variable-models/the-tobit-model-for-corner-solutions.md), [`poisson-regression-for-count-data`](../limited-dependent-variable-models/poisson-regression-for-count-data.md) *(beyond-lectures)*
- Heckit (Heckman two-step) → [`limited-dependent-variable-models/sample-selection-and-the-heckit-method`](../limited-dependent-variable-models/sample-selection-and-the-heckit-method.md) *(beyond-lectures)*
- GMM estimator → [`generalized-method-of-moments/the-gmm-estimator-and-efficient-weighting`](../generalized-method-of-moments/the-gmm-estimator-and-efficient-weighting.md) *(beyond-lectures)*
- Bootstrap → [`reference/bootstrap-methods-for-standard-errors-and-inference`](../reference/bootstrap-methods-for-standard-errors-and-inference.md) *(beyond-lectures)*

## Tests
- t-test (finite sample) → [`ols-estimation/hypothesis-testing-and-t-statistics`](../ols-estimation/hypothesis-testing-and-t-statistics.md)
- Fisher / F-test, Wald test → [`asymptotic-theory/fisher-and-wald-tests`](../asymptotic-theory/fisher-and-wald-tests.md)
- Breusch-Godfrey/Pagan, Durbin-Watson → [`heteroskedasticity-and-autocorrelation/testing-for-autocorrelation`](../heteroskedasticity-and-autocorrelation/testing-for-autocorrelation.md)
- Hausman test → [`instrumental-variables/hausman-test`](../instrumental-variables/hausman-test.md)
- Sargan (Hansen) test → [`instrumental-variables/sargan-test-for-overidentification`](../instrumental-variables/sargan-test-for-overidentification.md)
- Stock-Yogo weak-instrument test, Anderson-Rubin test → [`instrumental-variables/testing-and-fixing-weak-instruments`](../instrumental-variables/testing-and-fixing-weak-instruments.md)
- McCrary density test, balancing tests → [`regression-discontinuity/testing-continuity-mccrary-and-balancing`](../regression-discontinuity/testing-continuity-mccrary-and-balancing.md)
- Permutation / placebo test (synthetic control) → [`synthetic-control/sparsity-and-permutation-inference`](../synthetic-control/sparsity-and-permutation-inference.md)
- DID_M placebo pre-trends test → [`reference/twfe-robustness-measures-and-did-m-details`](../reference/twfe-robustness-measures-and-did-m-details.md)
- Hausman test (fixed vs. random effects, panel data) → [`panel-data-methods/fixed-vs-random-effects-and-the-hausman-test`](../panel-data-methods/fixed-vs-random-effects-and-the-hausman-test.md) *(beyond-lectures)*
- GMM overidentification / J-test → [`generalized-method-of-moments/overidentification-and-the-j-test`](../generalized-method-of-moments/overidentification-and-the-j-test.md) *(beyond-lectures)*

## Assumptions
- $A_1^{OLS}$–$A_5^{OLS}$ → [`ols-estimation/the-general-linear-regression-model`](../ols-estimation/the-general-linear-regression-model.md) and related entries in that folder
- Gauss-Markov / BLUE → [`ols-estimation/gauss-markov-theorem`](../ols-estimation/gauss-markov-theorem.md)
- $A_1^{IV}$–$A_3^{IV}$, SUTVA, monotonicity → [`instrumental-variables/iv-identification-conditions`](../instrumental-variables/iv-identification-conditions.md), [`sutva-and-exclusion-restriction-for-late`](../instrumental-variables/sutva-and-exclusion-restriction-for-late.md), [`monotonicity-and-relevance-for-late`](../instrumental-variables/monotonicity-and-relevance-for-late.md)
- Zero Conditional Mean (ZCM) / Zero Covariance (ZC) → [`identification/zcm-and-zc-assumptions`](../identification/zcm-and-zc-assumptions.md)
- Parallel trends → [`difference-in-differences/standard-difference-in-differences`](../difference-in-differences/standard-difference-in-differences.md)
- Conditional independence (CIA) / unconfoundedness / selection on observables → [`unconfoundedness-methods/conditional-independence-assumption`](../unconfoundedness-methods/conditional-independence-assumption.md)
- Overlap / common support → [`unconfoundedness-methods/nonparametric-identification-under-cia`](../unconfoundedness-methods/nonparametric-identification-under-cia.md)
- Continuity of potential outcomes / imprecise control (RDD) → [`regression-discontinuity/the-continuity-assumption-and-imprecise-control`](../regression-discontinuity/the-continuity-assumption-and-imprecise-control.md)
- Exclusion restriction (general IV) → [`instrumental-variables/exclusion-violations-and-iv-bias`](../instrumental-variables/exclusion-violations-and-iv-bias.md), [`theory-and-the-exclusion-restriction`](../instrumental-variables/theory-and-the-exclusion-restriction.md)
- Stationarity (first/second order) → [`heteroskedasticity-and-autocorrelation/autocorrelation-and-stationarity`](../heteroskedasticity-and-autocorrelation/autocorrelation-and-stationarity.md)
- Sharpness of bounds → [`partial-identification/sharpness`](../partial-identification/sharpness.md)
- Time-series Gauss-Markov assumptions (TS.1–TS.6), strict exogeneity → [`time-series-methods/time-series-gauss-markov-assumptions`](../time-series-methods/time-series-gauss-markov-assumptions.md) *(beyond-lectures)*

## Key parameters
- ATE, TT/ATT → [`treatment-effects/average-treatment-effect-and-att`](../treatment-effects/average-treatment-effect-and-att.md), [`unconfoundedness-methods/att-under-cia`](../unconfoundedness-methods/att-under-cia.md)
- LATE → [`instrumental-variables/late-theorem`](../instrumental-variables/late-theorem.md)
- CATE → [`unconfoundedness-methods/cate-and-machine-learning-estimators`](../unconfoundedness-methods/cate-and-machine-learning-estimators.md)
- MTE (marginal treatment effect) → [`reference/heckman-2005-scientific-model-of-causality`](../reference/heckman-2005-scientific-model-of-causality.md)
