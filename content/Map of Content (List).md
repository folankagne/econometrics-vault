---
title: Map of Content (List)
---
# Map of Content — List View

Same reading order as [`Map of Content.md`](Map%20of%20Content.md), but as plain links rather than embeds — lighter to open, and portable to GitHub/any Markdown viewer (no Obsidian-only syntax). Use this one for quick navigation; use the embedded version for in-place preview.

## Vault statistics

| Metric                                  | Value                                                                                   |
| --------------------------------------- | --------------------------------------------------------------------------------------- |
| Total entries                           | 172 (171 enriched, 1 stub)                                                              |
| Topic folders                           | 20 (+ `reference/`)                                                                     |
| Part I — Econometrics 1                 | 59 entries, 8 folders                                                                   |
| Part II — Econometrics 2b               | 90 entries, 8 folders                                                                   |
| Part III — `beyond-lectures` extensions | 23 entries, 4 folders                                                                   |
| Reference (proofs & derivations)        | 9 entries                                                                               |
| Figures (TikZ diagrams)                 | 25                                                                                      |
| Unique tags                             | 436 (661 total tag applications, ~3.8/entry)                                            |
| Total Markdown files in vault           | 198 (172 entries + 20 folder overviews + README + 2 MOCs + template + 3 `pages/` files) |

**Most-used tags:** `instrumental-variables` (10), `panel-data` (9), `wald-estimator` (8), `potential-outcomes` (7), `time-series` (7), `consistency` (6), `late` (6), `heterogeneous-treatment-effects` (5), `selection-bias` (5), `exclusion-restriction` (5).

**Stub remaining:** [`difference-in-differences/efficiency-vs-robustness-tradeoff.md`](difference-in-differences/efficiency-vs-robustness-tradeoff.md) — needs the Wolfers (2006) unilateral-divorce comparison, source not yet located.

---

## Part I — Econometrics 1 (classical linear regression)

### 1. Foundations
- [Foundations Overview](foundations/00-overview.md)
- [What Is Econometrics](foundations/what-is-econometrics.md)
- [Population, Sample, and Data Structures](foundations/population-sample-and-data-structures.md)
- [Estimators and Sampling Distributions](foundations/estimators-and-sampling-distributions.md)
- [Identification and Statistical Inference](foundations/identification-and-statistical-inference.md)

### 2. Probability and Distributions
- [Probability and Distributions Overview](probability-and-distributions/00-overview.md)
- [Probability Density and Distribution Functions](probability-and-distributions/probability-density-and-distribution-functions.md)
- [Expectation of a Random Variable](probability-and-distributions/expectation-of-a-random-variable.md)
- [Variance and Covariance of a Random Variable](probability-and-distributions/variance-and-covariance-of-a-random-variable.md)
- [Normal (Gaussian) Distribution](probability-and-distributions/normal-distribution.md)
- [Chi-Square Distribution](probability-and-distributions/chi-square-distribution.md)
- [Student's t Distribution](probability-and-distributions/students-t-distribution.md)
- [Fisher's F Distribution](probability-and-distributions/fishers-f-distribution.md)

### 3. Matrix Algebra for Econometrics
- [Matrix Algebra Overview](matrix-algebra-for-econometrics/00-overview.md)
- [Matrices and Vectors in Econometrics](matrix-algebra-for-econometrics/matrices-and-vectors-in-econometrics.md)
- [Matrix Transpose and Symmetric Matrices](matrix-algebra-for-econometrics/matrix-transpose-and-symmetric-matrices.md)
- [Matrix Addition and Subtraction](matrix-algebra-for-econometrics/matrix-addition-and-subtraction.md)
- [Matrix Multiplication for Econometrics](matrix-algebra-for-econometrics/matrix-multiplication-for-econometrics.md)
- [Special Matrices in Econometrics](matrix-algebra-for-econometrics/special-matrices-in-econometrics.md)
- [Rank of a Matrix](matrix-algebra-for-econometrics/rank-of-a-matrix.md)
- [Determinant of a Square Matrix](matrix-algebra-for-econometrics/determinant-of-a-square-matrix.md)
- [Matrix Inversion](matrix-algebra-for-econometrics/matrix-inversion.md)
- [Differentiation of Linear and Quadratic Forms](matrix-algebra-for-econometrics/differentiation-of-linear-and-quadratic-forms.md)

### 4. OLS Estimation
- [OLS Estimation Overview](ols-estimation/00-overview.md)
- [Deriving the OLS Estimator](ols-estimation/deriving-the-ols-estimator.md)
- [The General Linear Regression Model (A1, A2)](ols-estimation/the-general-linear-regression-model.md)
- [Unbiasedness of OLS (A3)](ols-estimation/unbiasedness-of-ols.md)
- [Finite-Sample Variance of OLS (A4)](ols-estimation/finite-sample-variance-of-ols.md)
- [Gauss-Markov Theorem](ols-estimation/gauss-markov-theorem.md)
- [Sampling Distribution of OLS under Normality (A5)](ols-estimation/sampling-distribution-of-ols-under-normality.md)
- [Confidence Intervals for OLS Coefficients](ols-estimation/confidence-intervals-for-ols-coefficients.md)
- [Hypothesis Testing and t-Statistics](ols-estimation/hypothesis-testing-and-t-statistics.md)

### 5. Asymptotic Theory
- [Asymptotic Theory Overview](asymptotic-theory/00-overview.md)
- [Convergence in Probability and Consistency](asymptotic-theory/convergence-in-probability-and-consistency.md)
- [Law of Large Numbers](asymptotic-theory/law-of-large-numbers.md)
- [Convergence in Distribution and the Central Limit Theorem](asymptotic-theory/convergence-in-distribution-and-the-central-limit-theorem.md)
- [Slutsky's Theorem](asymptotic-theory/slutskys-theorem.md)
- [The OLS Estimator Is CAN](asymptotic-theory/asymptotic-distribution-of-ols-can.md)
- [Estimating the Asymptotic Variance of OLS](asymptotic-theory/estimating-the-asymptotic-variance-of-ols.md)
- [The Hypothesis Testing Framework: Errors, Power, and Asymptotic Size](asymptotic-theory/hypothesis-testing-framework-errors-and-power.md)
- [Joint Hypothesis Tests: The Fisher and Wald Statistics](asymptotic-theory/fisher-and-wald-tests.md)

### 6. Heteroskedasticity and Autocorrelation
- [Heteroskedasticity and Autocorrelation Overview](heteroskedasticity-and-autocorrelation/00-overview.md)
- [Non-Spherical Disturbances](heteroskedasticity-and-autocorrelation/non-spherical-disturbances.md)
- [Consequences of Non-Sphericity for OLS](heteroskedasticity-and-autocorrelation/consequences-of-non-sphericity-for-ols.md)
- [Sphericalization and the Generalized Least Squares Estimator](heteroskedasticity-and-autocorrelation/sphericalization-and-gls.md)
- [Robust versus Efficient Estimation — The Bias-Variance Trade-off](heteroskedasticity-and-autocorrelation/robust-vs-efficient-estimation-tradeoff.md)
- [White (Heteroskedasticity-Robust) Standard Errors](heteroskedasticity-and-autocorrelation/white-robust-standard-errors.md)
- [Feasible GLS for Heteroskedasticity](heteroskedasticity-and-autocorrelation/feasible-gls-for-heteroskedasticity.md)
- [Autocorrelation and Stationarity](heteroskedasticity-and-autocorrelation/autocorrelation-and-stationarity.md)
- [AR(1) Processes and Prais-Winsten Estimation](heteroskedasticity-and-autocorrelation/ar1-processes-and-prais-winsten-estimation.md)
- [Testing for AR(1) Autocorrelation](heteroskedasticity-and-autocorrelation/testing-for-autocorrelation.md)

### 7. Identification
- [Identification Overview](identification/00-overview.md)
- [Exogeneity and Endogeneity](identification/exogeneity-and-endogeneity.md)
- [Omitted Variable Bias](identification/omitted-variable-bias.md)
- [Measurement Error and Attenuation Bias](identification/measurement-error-and-attenuation-bias.md)
- [Simultaneity Bias](identification/simultaneity-bias.md)
- [Identification Strategies — An Overview](identification/identification-strategies-overview.md)

### 8. Instrumental Variables — basic IV and 2SLS
- [Instrumental Variables Overview](instrumental-variables/00-overview.md)
- [Instrumental Variables — Identification Conditions](instrumental-variables/iv-identification-conditions.md)
- [The Wald Estimator](instrumental-variables/wald-estimator.md)
- [Compliers, Always-Takers, Never-Takers, and Defiers](instrumental-variables/compliers-always-takers-never-takers-defiers.md)
- [Continuous Instruments, the First Stage, and the Reduced Form](instrumental-variables/continuous-iv-and-the-first-stage.md)
- [The Multivariate IV Estimator](instrumental-variables/multivariate-iv-estimator.md)
- [Two-Stage Least Squares (2SLS)](instrumental-variables/two-stage-least-squares.md)
- [Weak Instruments and the Limits of IV](instrumental-variables/weak-instruments-and-iv-warnings.md)
- [The Hausman Test](instrumental-variables/hausman-test.md)
- [The Sargan Test for Over-Identifying Restrictions](instrumental-variables/sargan-test-for-overidentification.md)

## Part II — Econometrics 2b (causal inference & program evaluation)

### 9. Causal Inference Foundations
- [Causal Inference Foundations Overview](causal-inference-foundations/00-overview.md)
- [Marshall's Maxim and the All-Causes Model](causal-inference-foundations/marshalls-maxim-and-the-all-causes-model.md)
- ["Econometrics in Three Words": Parameter, Estimand, Estimator](causal-inference-foundations/parameter-estimand-and-estimator.md)
- [Average Causal Effects (ACEs)](causal-inference-foundations/average-causal-effects.md)
- [The Zero Conditional Mean and Zero Covariance Assumptions](identification/zcm-and-zc-assumptions.md) *(in `identification/`)*
- [The Mathematician, the Randomista, the Theorist, and the Computer Scientist](causal-inference-foundations/four-views-on-the-zero-covariance-assumption.md)
- [Two Approaches to Implementing Marshall's Maxim](causal-inference-foundations/two-approaches-to-marshalls-maxim.md)
- [Potential Outcomes and the Naive Estimator](causal-inference-foundations/potential-outcomes-and-the-naive-estimator.md)
- [Rubin's Causal Model](causal-inference-foundations/rubins-causal-model.md)

### 10. Treatment Effects
- [Treatment Effects Overview](treatment-effects/00-overview.md)
- [Average Treatment Effect (ATE) and Treatment on the Treated (ATT)](treatment-effects/average-treatment-effect-and-att.md)
- [The Selectivity Problem](treatment-effects/the-selectivity-problem.md)
- [Sources of Selection Bias](treatment-effects/sources-of-selection-bias.md)
- [Randomized Experiments and the Difference-in-Means Estimator](treatment-effects/randomized-experiments-and-difference-in-means.md)
- [Randomized Controlled Trials (RCTs)](treatment-effects/randomized-controlled-trials.md)
- [Application: The STAR Class-Size Experiment and Balance Checks](treatment-effects/the-star-experiment-and-balance-checks.md)
- [Adding Controls in RCTs](treatment-effects/adding-controls-in-rcts.md)
- [Imperfect Compliance and Encouragement Designs](treatment-effects/imperfect-compliance-and-encouragement-designs.md)
- [From Wald to 2SLS: The STAR Application](treatment-effects/from-wald-to-2sls-star-application.md)
- [Statistical Power, and Type I / Type II Errors](treatment-effects/statistical-power-and-type-i-ii-errors.md)
- [Minimum Detectable Effect (MDE)](treatment-effects/minimum-detectable-effect.md)
- [The Statistical Cost of Non-Compliance](treatment-effects/the-statistical-cost-of-non-compliance.md)
- [Validation Studies and the Reliability of Observational Methods](treatment-effects/validation-studies-and-observational-bias.md)
- [The Experimental Selection Correction (ESC) Estimator](treatment-effects/experimental-selection-correction-estimator.md)

### 11. Instrumental Variables — LATE and heterogeneous effects
- [Instrumental Variables as a Source of Exogenous Variation](instrumental-variables/iv-as-a-source-of-exogenous-variation.md)
- [Decomposing the First Stage and the ITT by Compliance Type](instrumental-variables/decomposing-the-first-stage-and-itt.md)
- [SUTVA, Random Assignment, and the Exclusion Restriction](instrumental-variables/sutva-and-exclusion-restriction-for-late.md)
- [Relevance and Monotonicity](instrumental-variables/monotonicity-and-relevance-for-late.md)
- [The LATE Theorem](instrumental-variables/late-theorem.md)
- [Three Consequences of the LATE Reinterpretation](instrumental-variables/consequences-of-late.md)
- [Small Exclusion Violations Can Cause Large IV Bias](instrumental-variables/exclusion-violations-and-iv-bias.md)
- ["One Instrument, One Endogenous Variable"](instrumental-variables/one-instrument-one-endogenous-variable.md)
- [Theory May Be Needed to Assess Exclusion](instrumental-variables/theory-and-the-exclusion-restriction.md)
- [Statistical Properties of the Wald and 2SLS Estimators](instrumental-variables/statistical-properties-of-the-wald-estimator.md)
- [The Weak Instruments Problem](instrumental-variables/the-weak-instruments-problem.md)
- [Testing for and Correcting Weak Instruments](instrumental-variables/testing-and-fixing-weak-instruments.md)
- [Recommendations for IV Practitioners](instrumental-variables/recommendations-for-iv-practitioners.md)

### 12. Regression Discontinuity
- [Regression Discontinuity Overview](regression-discontinuity/00-overview.md)
- [Regression Discontinuity Design — Introduction and Historical Examples](regression-discontinuity/introduction-and-historical-examples.md)
- [Sharp Regression Discontinuity Design](regression-discontinuity/sharp-rdd.md)
- [Fuzzy Regression Discontinuity Design](regression-discontinuity/fuzzy-rdd.md)
- [The Continuity Assumption and Imprecise Control](regression-discontinuity/the-continuity-assumption-and-imprecise-control.md)
- [Local Randomization and Heterogeneous Effects in RDD](regression-discontinuity/local-randomization-and-heterogeneous-effects-in-rdd.md)
- [Testing Continuity — The McCrary Test, Balancing, and Bunching](regression-discontinuity/testing-continuity-mccrary-and-balancing.md)
- [Local Linear Estimation and Bandwidth Choice in RDD](regression-discontinuity/local-linear-estimation-and-bandwidth-choice.md)
- [Application: Tax Credits in Rural France](regression-discontinuity/application-tax-credits-rural-france.md)
- [Special Cases and When RDD Fails](regression-discontinuity/special-cases-and-when-rdd-fails.md)

### 13. Unconfoundedness Methods
- [Unconfoundedness Methods Overview](unconfoundedness-methods/00-overview.md)
- [The Conditional Independence Assumption](unconfoundedness-methods/conditional-independence-assumption.md)
- [Nonparametric Identification under the CIA](unconfoundedness-methods/nonparametric-identification-under-cia.md)
- [The CIA and Standard Linear Regression](unconfoundedness-methods/cia-and-linear-regression.md)
- [Regression-Based and Kernel-Based Estimation under Unconfoundedness](unconfoundedness-methods/regression-and-kernel-based-estimation.md)
- [Nearest-Neighbor Matching](unconfoundedness-methods/nearest-neighbor-matching.md)
- [The Propensity Score Theorem](unconfoundedness-methods/propensity-score-theorem.md)
- [The Balancing Property of the Propensity Score](unconfoundedness-methods/the-balancing-property.md)
- [Conditional Average Treatment Effect (CATE) and ML Estimators](unconfoundedness-methods/cate-and-machine-learning-estimators.md)
- [Inverse Probability Weighting (IPW)](unconfoundedness-methods/inverse-probability-weighting.md)
- [Doubly-Robust Estimation](unconfoundedness-methods/doubly-robust-estimation.md)
- [Double/Debiased Machine Learning (DML)](unconfoundedness-methods/double-debiased-machine-learning.md)
- [Interpreting Unconfoundedness — Selection on Observables in Practice](unconfoundedness-methods/interpretation-and-examples-of-unconfoundedness.md)
- [The ATT under the CIA](unconfoundedness-methods/att-under-cia.md)
- [Trimming and Overlap Violations](unconfoundedness-methods/trimming-and-overlap-violations.md)

### 14. Difference-in-Differences
- [Difference-in-Differences Overview](difference-in-differences/00-overview.md)
- [Cross-Section and Before-After Estimators](difference-in-differences/cross-section-and-before-after-estimators.md)
- [Standard Difference-in-Differences](difference-in-differences/standard-difference-in-differences.md)
- [The Difference-in-Differences Regression Representation](difference-in-differences/the-did-regression-representation.md)
- ["Card & Krueger (1994)" and Assessing Parallel Trends](difference-in-differences/card-krueger-and-assessing-parallel-trends.md)
- [Two-Way Fixed Effects (TWFE)](difference-in-differences/two-way-fixed-effects.md)
- [TWFE Negative Weights and the Goodman-Bacon Decomposition](difference-in-differences/twfe-negative-weights-and-goodman-bacon.md)
- [Illustrative Example: Early versus Late Treated Groups](difference-in-differences/early-vs-late-treated-illustrative-example.md)
- [Dynamic TWFE and Event Studies](difference-in-differences/dynamic-twfe-and-event-studies.md)
- [The DID_M Estimator (de Chaisemartin and D'Haultfœuille)](difference-in-differences/did-m-estimator.md)
- [Cohort-Based Estimators: Callaway-Sant'Anna, Sun-Abraham, and Borusyak-Jaravel-Spiess](difference-in-differences/cohort-based-estimators-csa-sun-abraham-bjs.md)
- [Modern DID: Efficiency versus Robustness, and the Wolfers (2006) Comparison](difference-in-differences/efficiency-vs-robustness-tradeoff.md) — *stub*
- [Modern DID — Summary, Diagnostics, and Open Questions](difference-in-differences/modern-did-summary-and-open-questions.md)

### 15. Synthetic Control
- [Synthetic Control Overview](synthetic-control/00-overview.md)
- [Synthetic Control — Motivation and Canonical Examples](synthetic-control/motivation-and-examples.md)
- [Synthetic Control — Setup and the Estimator](synthetic-control/setup-and-the-estimator.md)
- [Sparsity, Transparency, and Permutation Inference in Synthetic Control](synthetic-control/sparsity-and-permutation-inference.md)
- [The Linear Factor Model and the Synthetic Control Bias Bound](synthetic-control/linear-factor-model-and-bias-bound.md)
- [Choosing Predictors, and Synthetic Control versus OLS](synthetic-control/choosing-predictors-and-comparison-with-ols.md)
- [Applied Example: Texas Prison Construction and Falsification Exercises](synthetic-control/applied-example-texas-prison-construction.md)

### 16. Partial Identification
- [Partial Identification Overview](partial-identification/00-overview.md)
- [From Point to Partial Identification](partial-identification/from-point-to-partial-identification.md)
- [Horowitz-Manski Bounds](partial-identification/horowitz-manski-bounds.md)
- [Lee Bounds](partial-identification/lee-bounds.md)
- [Sharpness of Bounds](partial-identification/sharpness.md)
- [The Length of the Horowitz-Manski Bounds](partial-identification/length-of-horowitz-manski-bounds.md)
- [Incorporating Covariates into Partial-Identification Bounds](partial-identification/bounds-with-covariates.md)

## Part III — Extensions beyond the two courses (`beyond-lectures`)

Not part of either course's reading order — read these when the topic itself is of interest.

### 17. Panel Data Methods
- [Panel Data Methods Overview](panel-data-methods/00-overview.md)
- [Pooled Cross Sections and the Unobserved Effects Model](panel-data-methods/pooled-cross-sections-and-the-unobserved-effects-model.md)
- [The First-Differenced Estimator, Revisited for T > 2](panel-data-methods/the-first-differenced-estimator.md)
- [The Fixed Effects (Within) Estimator](panel-data-methods/fixed-effects-within-estimator.md)
- [Fixed Effects versus First Differencing](panel-data-methods/fixed-effects-vs-first-differencing.md)
- [The Random Effects Model and GLS](panel-data-methods/random-effects-model-and-gls.md)
- [Fixed versus Random Effects, and the Hausman Test](panel-data-methods/fixed-vs-random-effects-and-the-hausman-test.md)
- [Unbalanced Panels and Clustered Standard Errors](panel-data-methods/unbalanced-panels-and-clustered-standard-errors.md)

### 18. Limited Dependent Variable Models
- [Limited Dependent Variable Models Overview](limited-dependent-variable-models/00-overview.md)
- [Logit and Probit Models for Binary Response](limited-dependent-variable-models/logit-and-probit-models.md)
- [Partial Effects in Nonlinear Response Models](limited-dependent-variable-models/partial-effects-in-nonlinear-response-models.md)
- [The Tobit Model for Corner Solution Responses](limited-dependent-variable-models/the-tobit-model-for-corner-solutions.md)
- [The Poisson Regression Model for Count Data](limited-dependent-variable-models/poisson-regression-for-count-data.md)
- [Sample Selection and the Heckit Method](limited-dependent-variable-models/sample-selection-and-the-heckit-method.md)

### 19. Time Series Methods
- [Time Series Methods Overview](time-series-methods/00-overview.md)
- [Static and Finite Distributed Lag Models](time-series-methods/static-and-finite-distributed-lag-models.md)
- [The Time-Series Gauss-Markov Assumptions](time-series-methods/time-series-gauss-markov-assumptions.md)
- [Trends, Seasonality, and the Spurious Regression Problem](time-series-methods/trends-seasonality-and-spurious-regression.md)
- [Index Numbers and Event Studies in Time Series](time-series-methods/index-numbers-and-event-studies.md)
- [Weakly Dependent Time Series and Asymptotic OLS](time-series-methods/weakly-dependent-time-series-and-asymptotic-ols.md)
- [Unit Roots, Spurious Regression, and Cointegration](time-series-methods/unit-roots-spurious-regression-and-cointegration.md)

### 20. Generalized Method of Moments
- [Generalized Method of Moments Overview](generalized-method-of-moments/00-overview.md)
- [Moment Conditions and the Method of Moments](generalized-method-of-moments/moment-conditions-and-the-method-of-moments.md)
- [The GMM Estimator and Efficient Weighting](generalized-method-of-moments/the-gmm-estimator-and-efficient-weighting.md)
- [GMM Nests OLS, IV, and MLE](generalized-method-of-moments/gmm-nests-ols-iv-and-mle.md)
- [Overidentification and the J-Test](generalized-method-of-moments/overidentification-and-the-j-test.md)

## Reference — proofs and derivations

- [Reference Overview](reference/00-overview.md)
- [Heckman (2005) — The Scientific Model of Causality](reference/heckman-2005-scientific-model-of-causality.md)
- [Variance Derivations for OLS and IV Estimators (Binary Treatment)](reference/variance-derivations-ols-and-iv.md)
- [The Delta Method](reference/the-delta-method.md)
- [Monotonicity in IV Designs — Algebra and Diagnostic Examples](reference/monotonicity-in-iv-designs.md)
- ["TWFE Robustness Measures and DID_M Details (de Chaisemartin and D'Haultfœuille, Extended)"](reference/twfe-robustness-measures-and-did-m-details.md)
- [Common Statistical Densities — Reference Catalogue](reference/common-statistical-densities.md)
- [The Laws of Large Numbers, Formally](reference/laws-of-large-numbers-formal.md)
- [The Central Limit Theorem, Formally](reference/central-limit-theorem-formal.md)
- [Bootstrap Methods for Standard Errors and Inference](reference/bootstrap-methods-for-standard-errors-and-inference.md) — *beyond-lectures*

## Meta pages

- [`pages/sources.md`](pages/sources.md) — bibliography
- [`pages/glossary.md`](pages/glossary.md) — estimator/test/assumption name → entry link
- [`pages/status.md`](pages/status.md) — progress dashboard
- [`pages/external-resources.md`](pages/external-resources.md) — curated external reading list, mirrored from my personal site
