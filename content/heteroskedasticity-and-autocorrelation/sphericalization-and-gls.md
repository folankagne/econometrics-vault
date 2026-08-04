---
title: Sphericalization and the Generalized Least Squares Estimator
source: "Econ 1, Lecture Notes, §Efficient estimation: Sphericalised model, Generalized Least Squares"
status: enriched
tags:
  - generalized-least-squares
  - cholesky-decomposition
  - sphericalization
  - blue
prerequisites:
  - heteroskedasticity-and-autocorrelation/consequences-of-non-sphericity-for-ols
  - matrix-algebra-for-econometrics/matrix-inversion
---
## The Cholesky decomposition

Any symmetric, positive definite matrix $\boldsymbol{\Omega}$ admits a **Cholesky decomposition**: a matrix $\mathbf{S} \equiv \boldsymbol{\Omega}^{-1/2}$ such that $\mathbf{S}\boldsymbol{\Omega}\mathbf{S}' = \mathbf{I}$ and $\boldsymbol{\Omega}^{-1/2}\boldsymbol{\Omega}^{-1/2} = \boldsymbol{\Omega}^{-1}$.

## Sphericalizing the model

Pre-multiplying the original model $\mathbf{y} = \mathbf{X}\mathbf{b} + \mathbf{u}$ by $\boldsymbol{\Omega}^{-1/2}$ produces a **transformed model**:

$$\boldsymbol{\Omega}^{-1/2}\mathbf{y} = \boldsymbol{\Omega}^{-1/2}\mathbf{X}\mathbf{b} + \boldsymbol{\Omega}^{-1/2}\mathbf{u} \qquad\Longleftrightarrow\qquad \tilde{\mathbf{y}} = \tilde{\mathbf{X}}\mathbf{b} + \tilde{\mathbf{u}}$$

For instance, if $\boldsymbol{\Omega} = \text{Diag}(\sigma_i^2)$ (heteroskedasticity with no serial correlation), then $\boldsymbol{\Omega}^{-1/2} = \text{Diag}(1/\sigma_i)$. Checking the transformed noise:

$$\mathbb{E}(\tilde{\mathbf{u}}\mid\mathbf{X}) = \boldsymbol{\Omega}^{-1/2}\,\underbrace{\mathbb{E}(\mathbf{u}\mid\mathbf{X})}_{=0 \text{ by } A_3^{OLS}} = 0$$
$$\mathbb{E}(\tilde{\mathbf{u}}\tilde{\mathbf{u}}'\mid\mathbf{X}) = \boldsymbol{\Omega}^{-1/2}\big(\sigma^2\boldsymbol{\Omega}\big)\boldsymbol{\Omega}^{-1/2\prime} = \sigma^2\mathbf{I}_N$$

The transformed model has exactly spherical disturbances — hence "**sphericalization**." It is once again a classical linear model, so OLS applied to it is BLUE again.

## The GLS estimator

The OLS estimator of the transformed model is the **Generalized Least Squares (GLS)** estimator:

$$\hat{\mathbf{b}}_{GLS} = (\tilde{\mathbf{X}}'\tilde{\mathbf{X}})^{-1}\tilde{\mathbf{X}}'\tilde{\mathbf{y}} = (\mathbf{X}'\boldsymbol{\Omega}^{-1}\mathbf{X})^{-1}\mathbf{X}'\boldsymbol{\Omega}^{-1}\mathbf{y}$$

This is the **BLUE estimator of $\mathbf{b}$ in the non-spherical model** — unbiased and CAN, exactly as OLS is under $\mathcal{A}^{OLS}$, but now recovering efficiency that plain OLS lost once $A_4^{OLS}$ failed. A special case, when $\boldsymbol{\Omega}$ is diagonal (pure heteroskedasticity, no autocorrelation), is called **Weighted Least Squares (WLS)**: the transformation effectively assigns higher weight to observations with lower noise variance — the opposite of plain OLS, which weights every observation equally regardless of how precisely it is measured.

## When Ω is known: weighting by group size

Wooldridge (2016, §8-4a) gives the cleanest cases where $\boldsymbol{\Omega}$ is known up to scale *without* estimating a variance function at all. If individual-level data satisfying the Gauss-Markov assumptions is aggregated into group averages — e.g. average 401(k) contributions by firm, built from $m_i$ employees per firm $i$ — then averaging a homoskedastic individual-level error over $m_i$ independent draws gives $\text{Var}(\bar u_i) = \sigma^2/m_i$: the *known* functional form $h_i = 1/m_i$, so WLS with weights equal to firm size is efficient with no estimation of the variance function required. The identical logic applies to per-capita data aggregated at the city, state, or country level, where the natural WLS weight is the underlying population. This "known-form" case is the exception rather than the rule — the more common case, where the variance function itself must be estimated, is exactly what motivates [feasible GLS](../heteroskedasticity-and-autocorrelation/feasible-gls-for-heteroskedasticity.md).

*Source: Wooldridge (2016), §8-4a.*
