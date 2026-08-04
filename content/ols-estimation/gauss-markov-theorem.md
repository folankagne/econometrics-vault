---
title: Gauss-Markov Theorem
source: "Econ 1, Lecture Notes, §Finite sample properties of the OLS estimator › Statistical Inference 1: Precision of the OLS estimator"
status: enriched
tags:
  - gauss-markov-theorem
  - blue
  - efficiency
  - best-linear-unbiased-estimator
prerequisites:
  - ols-estimation/finite-sample-variance-of-ols
---
## Statement

Under assumptions $A_1^{OLS}$ through $A_4^{OLS}$ — linearity in parameters, full rank of $\mathbf{X}$, strict exogeneity, and spherical disturbances (homoskedasticity plus no serial correlation) — the **Gauss-Markov theorem** (proved by Gauss and later generalized by Andrey Markov) states that the OLS estimator is **BLUE**: the **Best Linear Unbiased Estimator**.

- **Linear**: $\hat{\mathbf{b}}^{OLS}$ is a linear function of $\mathbf{y}$.
- **Unbiased**: established separately under $A_3^{OLS}$ — see [unbiasedness of OLS](../ols-estimation/unbiasedness-of-ols.md).
- **Best**: among *all* linear unbiased estimators of $\mathbf{b}$, OLS has the lowest variance — it is **efficient**.

## Why "best" matters

If a competing estimator were both unbiased and had lower variance than OLS, it would be preferable: lower variance means a tighter sampling distribution, hence a lower chance of drawing an estimate far from the true parameter, hence more informative estimates for a given sample size. The Gauss-Markov theorem says that, within the class of linear unbiased estimators and under $A_1^{OLS}$–$A_4^{OLS}$, no such competitor exists — OLS already extracts the maximum attainable precision from the data.

> The qualifier "linear unbiased" matters: Gauss-Markov does not claim OLS beats every conceivable estimator, only every *linear, unbiased* one. A biased estimator can in principle have lower variance (a classic bias-variance trade-off), and once $A_4^{OLS}$ fails — as under [heteroskedasticity or autocorrelation](../heteroskedasticity-and-autocorrelation/00-overview.md) — OLS typically stops being efficient, even though it may remain unbiased.

Wooldridge (2016, §3-5) labels the same five conditions — his MLR.1–MLR.5, matching $A_1^{OLS}$–$A_4^{OLS}$ here term for term — collectively the **Gauss-Markov assumptions**, precisely because it is this specific set that the theorem needs (no more, no less): dropping MLR.4 (zero conditional mean) breaks unbiasedness itself, so "best" becomes moot; dropping only MLR.5 (homoskedasticity) leaves OLS unbiased but strips away its efficiency, since a *weighted* least squares estimator that down-weights high-variance observations can then achieve strictly lower variance — this is exactly the motivation for [GLS/WLS and feasible GLS](../heteroskedasticity-and-autocorrelation/00-overview.md) under heteroskedasticity.

*Source: Wooldridge (2016), §3-5.*
