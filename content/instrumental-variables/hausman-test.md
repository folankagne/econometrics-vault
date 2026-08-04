---
title: The Hausman Test
source: "Econ 1, Lecture Notes, §Testing in the IV framework › OLS vs IV, Hausman specification tests: general framework"
status: enriched
tags:
  - hausman-test
  - specification-test
  - endogeneity-test
prerequisites:
  - instrumental-variables/multivariate-iv-estimator
  - ols-estimation/gauss-markov-theorem
---
## The comparison logic

The IV estimator is consistent as long as $\mathbb{E}(\mathbf{z}_i^{e\prime}u_i) = 0$, **regardless of** whether $\mathbb{E}(\mathbf{x}_i'u_i)=0$ holds. If regressors actually are exogenous, OLS is not just consistent but efficient (BLUE), so IV — which discards some usable variation — has strictly higher variance for no benefit. **Maintaining the assumption that IV is consistent**, comparing $\hat{\mathbf{b}}_{IV}$ and $\hat{\mathbf{b}}_{OLS}$ therefore reveals information about whether $\mathbb{E}(\mathbf{x}_i'u_i) = 0$: if the two estimates differ substantially, OLS is likely inconsistent (its target parameter differs from what IV consistently estimates); if they are close, OLS is more likely to be the efficient, valid choice.

$$H_0: \mathbb{E}(\mathbf{x}_i'u_i) = \mathbf{0} \ \ (\&\ \mathbb{E}(\mathbf{z}_i^{e\prime}u_i)=\mathbf{0}) \qquad\qquad H_1: \mathbb{E}(\mathbf{x}_i'u_i) \neq \mathbf{0} \ \ (\&\ \mathbb{E}(\mathbf{z}_i^{e\prime}u_i)=\mathbf{0})$$

$$\hat{S}^{Hausman} = N(\hat{\mathbf{b}}_{IV} - \hat{\mathbf{b}}_{OLS})'\big[\mathbb{V}(\hat{\mathbf{b}}_{IV}) - \mathbb{V}(\hat{\mathbf{b}}_{OLS})\big]^{-1}(\hat{\mathbf{b}}_{IV} - \hat{\mathbf{b}}_{OLS}) \ \overset{\mathcal{L}}{\underset{H_0}{\to}}\ \chi^2[\dim(\mathbf{b})]$$

> The Hausman test is often — **misleadingly** — called a test of "instrument exogeneity." It is not: instrument exogeneity is the *assumption* the test is built on, not something it verifies. What the test actually checks is whether, *given* that the instruments are valid, the data suggests the originally suspect regressors are endogenous.

## The general Hausman framework

More generally, given two competing specifications $H_0$ and $H_1$ of the DGP and two estimators $\hat{\boldsymbol{\theta}}^\star$ (efficient under $H_0$, inconsistent under $H_1$ — e.g. OLS) and $\hat{\boldsymbol{\theta}}$ (consistent under both — e.g. IV), both CAN under $H_0$:

$$\sqrt{N}(\hat{\boldsymbol{\theta}}^\star - \boldsymbol{\theta}_0) \overset{\mathcal{L}}{\underset{H_0}{\to}} \mathcal{N}[\mathbf{0}, \mathbb{V}(\hat{\boldsymbol{\theta}}^\star)] \qquad \sqrt{N}(\hat{\boldsymbol{\theta}} - \boldsymbol{\theta}_0) \overset{\mathcal{L}}{\underset{H_0}{\to}} \mathcal{N}[\mathbf{0}, \mathbb{V}(\hat{\boldsymbol{\theta}})]$$

Because $\hat{\boldsymbol{\theta}}^\star$ is efficient under $H_0$, a classical result gives $\mathbb{V}(\hat{\boldsymbol{\theta}} - \hat{\boldsymbol{\theta}}^\star) = \mathbb{V}(\hat{\boldsymbol{\theta}}) - \mathbb{V}(\hat{\boldsymbol{\theta}}^\star)$ — the variance of the *difference* simplifies to a difference of variances, which is what makes the statistic computable from the two estimators' individual variances alone:

$$\hat{S}^{Hausman} = N(\hat{\boldsymbol{\theta}} - \hat{\boldsymbol{\theta}}^\star)'\big[\mathbb{V}(\hat{\boldsymbol{\theta}}) - \mathbb{V}(\hat{\boldsymbol{\theta}}^\star)\big]^{-1}(\hat{\boldsymbol{\theta}} - \hat{\boldsymbol{\theta}}^\star) \overset{\mathcal{L}}{\underset{H_0}{\to}} \chi^2[\dim(\boldsymbol{\theta})]$$

This general contrast — an efficient-but-fragile estimator versus a robust-but-less-efficient one — recurs throughout applied econometrics wherever two estimators agree under a maintained assumption and diverge without it.

Angrist and Pischke (2009, §4.2.2) note that this comparison of just-identified estimators is itself one of the "many roads" to the over-identification test statistic: testing whether all possible just-identified IV estimates constructed from different subsets of instruments agree with each other is, in the linear IV setting, numerically the Wald-type dual of the [Sargan/GMM over-identification statistic](../instrumental-variables/sargan-test-for-overidentification.md) — the same underlying question (do different valid ways of estimating the parameter agree?) asked from two different angles, one comparing estimators directly (Hausman), the other testing the moment conditions collectively (Sargan/Hansen).

*Source: Angrist & Pischke (2009), §4.2.2; Hausman (1978, 1983).*
