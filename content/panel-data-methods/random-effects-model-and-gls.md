---
title: The Random Effects Model and GLS
source: "Wooldridge (2016), Ch.14"
status: enriched
tags:
  - beyond-lectures
  - panel-data
  - random-effects
  - generalized-least-squares
  - quasi-demeaning
prerequisites:
  - panel-data-methods/fixed-effects-within-estimator
  - heteroskedasticity-and-autocorrelation/sphericalization-and-gls
---
## When eliminating $a_i$ is unnecessarily costly

The [fixed effects](../panel-data-methods/fixed-effects-within-estimator.md) and [first-differenced](../panel-data-methods/the-first-differenced-estimator.md) transformations both discard the unobserved effect $a_i$ entirely, at the cost of also discarding any time-constant regressor. If $a_i$ happens to be **uncorrelated** with every regressor in every period —

$$\text{Cov}(x_{itj}, a_i) = 0, \qquad t=1,\dots,T,\ j=1,\dots,k$$

— eliminating $a_i$ is unnecessary and inefficient: this is the **random effects (RE)** assumption, and under it the composite error $v_{it}=a_i+u_{it}$ is uncorrelated with the regressors, so pooled OLS on the *levels* equation is itself consistent. It is not, however, efficient, because $v_{it}$ is serially correlated across $t$ by construction — the same $a_i$ appears in every period's composite error, inducing $\text{Corr}(v_{it},v_{is}) = \sigma_a^2/(\sigma_a^2+\sigma_u^2)$ for $t\neq s$, generally substantial and always positive.

## The GLS transformation

Exactly as [GLS sphericalizes a non-spherical disturbance](../heteroskedasticity-and-autocorrelation/sphericalization-and-gls.md) more generally, the random-effects model calls for a transformation that removes this specific serial-correlation structure. Define $\theta = 1-\big[\sigma_u^2/(\sigma_u^2+T\sigma_a^2)\big]^{1/2}\in(0,1)$ and **quasi-demean** every variable:

$$y_{it}-\theta\bar y_i = \beta_0(1-\theta) + \beta_1(x_{it1}-\theta\bar x_{i1}) + \dots + \beta_k(x_{itk}-\theta\bar x_{ik}) + (v_{it}-\theta\bar v_i)$$

Pooled OLS on this transformed equation is the (infeasible) **GLS estimator**; using a consistent estimate $\hat\theta$ built from pooled-OLS or fixed-effects residuals gives the **feasible GLS random effects estimator**, the version implemented by standard software.

## RE nests both pooled OLS and fixed effects

The parameter $\theta$ interpolates between two extremes already developed in this vault: $\theta=0$ recovers **pooled OLS exactly** (no demeaning at all — appropriate when $a_i$ contributes negligible variance, $\sigma_a^2\to0$), and $\theta=1$ recovers the **fixed-effects estimator exactly** (full demeaning). In practice $\hat\theta$ is never exactly 0 or 1; it tends toward 1 as $T$ grows or as $\sigma_a^2$ becomes large relative to $\sigma_u^2$ — the unobserved effect's variance dominates, so the RE and FE estimates converge. This single formula is a compact way of seeing that the FE/RE choice is not a binary either/or in principle, only in the two limiting cases most textbook discussions emphasize.

## Why RE, unlike FE, permits time-constant regressors

Because RE never removes $a_i$ from the equation, time-constant regressors (education fixed over the sample window, gender, a firm's founding characteristics) survive the quasi-demeaning transformation and remain estimable — the central practical advantage RE holds over FE, and often the deciding reason to use it despite RE's stronger identifying assumption. In [the wage-equation panel example](../panel-data-methods/fixed-vs-random-effects-and-the-hausman-test.md) developed next, this is exactly why the coefficient on `educ` — constant for each man across the sample — can be estimated by pooled OLS or RE but not by FE at all.

*Source: Wooldridge (2016), §14-2.*
