---
title: Two-Stage Least Squares (2SLS)
source: "Econ 1, Lecture Notes, §Selecting instruments: the 2SLS estimator"
status: enriched
tags:
  - 2sls
  - two-stage-least-squares
  - over-identification
  - projection-matrix
prerequisites:
  - instrumental-variables/multivariate-iv-estimator
  - matrix-algebra-for-econometrics/matrix-inversion
---
## Why not just pick one instrument?

With more instruments available ($H-K$) than endogenous regressors, discarding all but one instrument throws away useful information. **Two-Stage Least Squares (2SLS)** combines the information in every available instrument rather than choosing among them.

## Over-identification and the order/rank conditions

With more instruments than endogenous regressors, the moment conditions $\mathbf{Z}'\hat{\mathbf{u}}^{IV} = \mathbf{0}$ outnumber the parameters to be estimated — an **over-identified** model (analogous to having 3 equations for 2 unknowns: using any 2 to solve for $x,y$ risks violating the third). The relevant conditions become:

$$A_{2a}^{IV} \text{ (Order):}\ \text{at least as many instruments as endogenous regressors} \qquad A_{2b}^{IV} \text{ (Rank):}\ \boldsymbol{\theta} \neq \mathbf{0} \text{ in } x_K = \delta_0+\dots+\sum_h\theta_h z_h^e + r_K$$

## The optimal IV estimator via projection

Let $\mathbf{P}_z = \mathbf{Z}(\mathbf{Z}'\mathbf{Z})^{-1}\mathbf{Z}'$ (the projection onto the column space of $\mathbf{Z}$) and $\mathbf{M}_z = \mathbf{I}_N - \mathbf{P}_z$, so $\mathbf{X} = \mathbf{P}_z\mathbf{X} + \mathbf{M}_z\mathbf{X}$. Substituting into the model:

$$\mathbf{y} = \underbrace{\mathbf{P}_z\mathbf{X}}_{\hat{\mathbf{X}}}\mathbf{b} + \underbrace{\mathbf{M}_z\mathbf{X}\mathbf{b} + \mathbf{u}}_{\mathbf{v}}$$

By construction $\hat{\mathbf{X}}'\mathbf{M}_z\mathbf{X} = \mathbf{0}$, and $A_1^{IV}$ implies $\text{plim}\,\frac{1}{N}(\mathbf{P}_z\mathbf{X})'\mathbf{u} = \mathbb{E}(\mathbf{x}_i'\mathbf{z}_i)\mathbb{E}(\mathbf{z}_i'\mathbf{z}_i)^{-1}\mathbb{E}(\mathbf{z}_i'u_i) = \mathbf{0}$, so OLS on the transformed model $\mathbf{y} = \hat{\mathbf{X}}\mathbf{b} + \mathbf{v}$ identifies $\mathbf{b}$. This is the **optimal IV estimator**:

$$\hat{\mathbf{b}}_{IV^*} = (\mathbf{X}'\mathbf{P}_z\mathbf{X})^{-1}\mathbf{X}'\mathbf{P}_z\mathbf{y} = \big[\mathbf{X}'\mathbf{Z}(\mathbf{Z}'\mathbf{Z})^{-1}\mathbf{Z}'\mathbf{X}\big]^{-1}\mathbf{X}'\mathbf{Z}(\mathbf{Z}'\mathbf{Z})^{-1}\mathbf{Z}'\mathbf{y}$$

## Two stages, made explicit

The name "2SLS" comes from an equivalent, two-step construction:

1. **First stage (instrumental regression).** Regress the endogenous regressor on every instrument and exogenous regressor: $\hat{\gamma}_{OLS} = (\mathbf{Z}'\mathbf{Z})^{-1}\mathbf{Z}'\mathbf{x}_K$, giving fitted values $\hat{\mathbf{x}}_K = \mathbf{P}_z\mathbf{x}_K$ — the "best" (OLS-optimal-fit) exogenous predictor of $x_K$. This collapses the full set of $H$ instruments into a single fitted regressor, turning an over-identified problem into a just-identified one.
2. **Second stage.** OLS of $\mathbf{y}$ on $\hat{\mathbf{X}} = [\mathbf{x}_0,\dots,\mathbf{x}_{K-1},\hat{\mathbf{x}}_K]$: $\hat{\mathbf{b}}_{OLS} = (\hat{\mathbf{X}}'\hat{\mathbf{X}})^{-1}\hat{\mathbf{X}}'\mathbf{y} = \hat{\mathbf{b}}_{IV^*}$.

> **Every exogenous regressor must be included in $\mathbf{Z}$**, both stages — first, because exogenous regressors are themselves valid instruments for themselves; second, because what matters is not the total variation in $x_K$ but only the variation *independent of the other regressors already in the model*, exactly as with any partial effect in a multivariate regression.

## Why go through the trouble?

A single valid instrument, used alone, would also identify $\mathbf{b}$ consistently. The gain from combining all available instruments via 2SLS is **precision**: the optimal IV estimator uses more of the available exogenous variation, and so generally has lower variance than an estimator built from any single instrument or arbitrary subset.

## Adding instruments: a real trade-off, not a free lunch

Angrist and Pischke's (2009, §4.1.1) quarter-of-birth 2SLS table shows this precision gain concretely: moving from one instrument (a single quarter-of-birth dummy) to the full set of quarter-of-birth dummies interacted with 9 year-of-birth dummies (30 instruments total) shrinks the standard error on the schooling coefficient from $.0194$ to $.0161$ — a real, if modest, gain, since the richer instrument set raises the first-stage $R^2$. But this is not free: adding controls that are closely correlated with the instrument itself (age-in-quarters, entered linearly and quadratically) sharply *reduces* the residual variation the 2SLS estimator has to work with, and the resulting standard error nearly doubles (to $.031$) even though the point estimate barely moves — a direct illustration that 2SLS precision depends on how much "clean," instrument-driven variation in the endogenous regressor survives *after* partialling out the included covariates, exactly as the [multivariate IV estimator](../instrumental-variables/multivariate-iv-estimator.md) entry emphasizes.

*Source: Angrist & Pischke (2009), §4.1.1, Table 4.1.1.*
