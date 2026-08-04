---
title: Robust versus Efficient Estimation — The Bias-Variance Trade-off
source: "Econ 1, Lecture Notes, §Non spherical disturbances › What's next?"
status: enriched
tags:
  - robust-estimation
  - feasible-gls
  - bias-variance-tradeoff
prerequisites:
  - heteroskedasticity-and-autocorrelation/sphericalization-and-gls
---
## Two tools, restated

$$\textbf{Robust estimation:}\quad \hat{\mathbf{b}}_{OLS} = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{y}\ ;\quad \mathbb{V}(\hat{\mathbf{b}}_{OLS}\mid\mathbf{X}) = \sigma^2(\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\boldsymbol{\Omega}\mathbf{X}(\mathbf{X}'\mathbf{X})^{-1}$$
$$\textbf{Efficient estimation:}\quad \hat{\mathbf{b}}_{GLS} = (\mathbf{X}'\boldsymbol{\Omega}^{-1}\mathbf{X})^{-1}\mathbf{X}'\boldsymbol{\Omega}^{-1}\mathbf{y}\ ;\quad \mathbb{V}(\hat{\mathbf{b}}_{GLS}\mid\mathbf{X}) = \sigma^2(\mathbf{X}'\boldsymbol{\Omega}^{-1}\mathbf{X})^{-1}$$

Both routes require an estimate of $\boldsymbol{\Omega}$ — a matrix with up to $\frac{1}{2}(N^2+N)$ unknown parameters. Making either operational requires three steps: (i) impose a **structure** on $\boldsymbol{\Omega}$ to escape the curse of dimensionality; (ii) obtain an estimator $\hat\sigma^2\hat{\boldsymbol{\Omega}}$ of that structure — unbiasedness here matters; (iii) plug it in to compute either the **robust variance estimator** $\hat{\mathbb{V}}(\hat{\mathbf{b}}_{OLS}\mid\mathbf{X}) = \hat\sigma^2(\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\hat{\boldsymbol{\Omega}}\mathbf{X}(\mathbf{X}'\mathbf{X})^{-1}$, or the **Feasible GLS (FGLS)** estimator $\hat{\mathbf{b}}_{FGLS} = (\mathbf{X}'\hat{\boldsymbol{\Omega}}^{-1}\mathbf{X})^{-1}\mathbf{X}'\hat{\boldsymbol{\Omega}}^{-1}\mathbf{y}$.

## Why choose one over the other

The choice comes down to a **bias-variance trade-off**. FGLS requires *assuming* a specific structure for $\boldsymbol{\Omega}$ before it can be implemented at all. If that assumed structure is wrong — it does not match the true DGP — the transformation applied is based on a misspecified noise matrix, and $\hat{\mathbf{b}}_{FGLS}$ becomes **biased**. The robust estimator, by contrast, does not transform the model at all: it remains unbiased and consistent regardless of whether the assumed structure of $\boldsymbol{\Omega}$ is correct, but it does not recover efficiency — it only correctly reports the (larger) variance that plain OLS actually has.

> In practice this favors robust standard errors as the safer default whenever the exact structure of $\boldsymbol{\Omega}$ is uncertain: getting the variance formula right without risking bias in the point estimate, at the cost of forgoing the efficiency gain that a correctly specified FGLS could deliver. See [White robust standard errors](../heteroskedasticity-and-autocorrelation/white-robust-standard-errors.md) and [feasible GLS for heteroskedasticity](../heteroskedasticity-and-autocorrelation/feasible-gls-for-heteroskedasticity.md) for the two approaches worked out in the purely heteroskedastic case.

## An informal diagnostic: comparing OLS and WLS estimates

Wooldridge (2016, §8-4) offers a practical rule of thumb for detecting when a misspecified variance function threatens more than just efficiency: since consistency of FGLS/WLS for $\boldsymbol{\beta}$ under a *possibly wrong* $h(\mathbf{x})$ requires only $A_3^{OLS}$ (not the stronger correctness of $\mathbb{E}(y\mid\mathbf{x})$ itself), OLS and WLS should — under correct specification of the *conditional mean* — differ only by sampling error, even if the assumed variance function is wrong. If OLS and WLS point estimates differ by more than sampling error would suggest (e.g. opposite signs, or very different magnitudes on economically important coefficients), this is a signal not of heteroskedasticity but of a deeper problem: functional-form misspecification of $\mathbb{E}(y\mid\mathbf{x})$ itself, since WLS and OLS have different probability limits whenever MLR.4 (zero conditional mean, not just zero correlation) fails. A formal **Hausman test** (Hausman, 1978) can compare the two systematically, though an informal "eyeballing" of how much the coefficients move is often sufficient in practice — exactly the same diagnostic logic later formalized for the [Hausman test between IV estimators](../instrumental-variables/hausman-test.md).

*Source: Wooldridge (2016), §8-4c.*
