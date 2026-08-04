---
title: Feasible GLS for Heteroskedasticity
source: "Econ 1, Lecture Notes, §Cross section data: Heteroskedasticity › Feasible Efficient Estimation"
status: enriched
tags:
  - feasible-gls
  - variance-generating-function
  - weighted-least-squares
prerequisites:
  - heteroskedasticity-and-autocorrelation/white-robust-standard-errors
  - heteroskedasticity-and-autocorrelation/robust-vs-efficient-estimation-tradeoff
---
## Why White's estimator alone doesn't deliver FGLS

The [White estimator](../heteroskedasticity-and-autocorrelation/white-robust-standard-errors.md) consistently estimates $\mathbf{X}'\boldsymbol{\Omega}\mathbf{X}$, but efficient (GLS) estimation needs $\boldsymbol{\Omega}$ itself, to build $\boldsymbol{\Omega}^{-1/2}$ and sphericalize the model. Even restricting to pure heteroskedasticity (no serial correlation) still leaves $N$ separate variance parameters $\sigma_i^2$ against only $N-K-1$ degrees of freedom — not enough to estimate them individually. Further structure on the *source* of the heteroskedasticity is required.

## A variance-generating function

The standard fix is to model the individual variance as a function of a small number of parameters and observables:

$$\mathbb{V}(y_i\mid\mathbf{x}_i) = \sigma_i^2 = h(\boldsymbol{\gamma}, \mathbf{x}_i) > 0 \qquad \text{e.g. } h(\boldsymbol{\gamma},\mathbf{x}_i) = \exp(\gamma_0 + \gamma_1 x_{1i})$$

For instance, modeling consumption as a function of income, the variance of consumption plausibly grows with income (poorer households have fewer margins along which consumption can vary; wealthier households display more discretionary, hence more variable, spending) — exactly the kind of pattern $h(\boldsymbol{\gamma}, \mathbf{x}_i)$ is meant to capture.

If $\hat{\boldsymbol{\gamma}} \overset{\mathbb{P}}{\to} \boldsymbol{\gamma}$, then $\hat{\boldsymbol{\Omega}}^{-1/2} = \text{Diag}\big[\sqrt{h(\hat{\boldsymbol{\gamma}}, \mathbf{x}_i)}\big]^{-1}$, and the resulting **FGLS** (a weighted least squares estimator) is:

$$\hat{\mathbf{b}}_{FGLS} = \left(\sum_i \frac{\mathbf{x}_i'\mathbf{x}_i}{h(\mathbf{x}_i,\hat{\boldsymbol{\gamma}})}\right)^{-1}\left(\sum_i \frac{\mathbf{x}_i'y_i}{h(\mathbf{x}_i,\hat{\boldsymbol{\gamma}})}\right)$$

FGLS is CAN, and — provided $\hat{\boldsymbol{\gamma}}$ is consistent — asymptotically equivalent to the (infeasible) GLS estimator: $\mathbb{V}_{as}(\hat{\mathbf{b}}_{FGLS}) = \mathbb{V}(\hat{\mathbf{b}}_{GLS})$.

## FGLS in practice

Given $y_i = \mathbf{x}_i\mathbf{b} + u_i$ and a flexible specification $\mathbb{E}(u_i^2\mid\mathbf{x}_i) = v_i \cdot \mathbb{E}\big(\sum_{l,m} \gamma_{lm}x_{li}x_{mi}\big)$, the estimation proceeds in five steps:

1. Estimate $\hat{\mathbf{b}}_{OLS}$ and compute residuals $\hat{u}_i = y_i - \mathbf{x}_i\hat{\mathbf{b}}_{OLS}$.
2. Regress $\ln(\hat{u}_i^2)$ on the cross-products $x_{li}x_{mi}$ to estimate $\hat{\boldsymbol{\gamma}}_{OLS}$ (working with $\ln(\hat u_i^2)$ rather than $\hat u_i^2$ directly keeps the fitted variance positive).
3. Compute predicted individual standard deviations $\hat{\sigma}_i = \sqrt{\sum_{l,m}\mathbb{E}(x_{li}x_{mi}\hat{\gamma}_{lm})}$.
4. **Sphericalize** the data: $\tilde{y}_i = y_i/\hat{\sigma}_i$, $\tilde{x}_{ik} = x_{ik}/\hat{\sigma}_i$.
5. $\hat{\mathbf{b}}_{FGLS}$ is the OLS estimator of $\tilde{y}_i = \tilde{\mathbf{x}}_i\mathbf{b} + \tilde{u}_i$.

This is exactly the [sphericalization](../heteroskedasticity-and-autocorrelation/sphericalization-and-gls.md) recipe, with the previously unknown $\boldsymbol{\Omega}^{-1/2}$ now replaced by its estimated, feasible counterpart built from step 3.

Wooldridge (2016, §8-4) works through exactly this five-step recipe on cigarette demand (Example 8.7): OLS residuals from the initial fit are squared and log-transformed, regressed on the covariates to get fitted $\hat g_i$, exponentiated to get weights $\hat h_i = \exp(\hat g_i)$, and WLS is re-run with weights $1/\hat h_i$. The resulting FGLS estimates shift substantially from OLS — the income effect on cigarette demand becomes statistically significant and roughly 50% larger — illustrating that FGLS is not merely a standard-error correction but can materially change point estimates and their precision when heteroskedasticity is severe. Because FGLS is only *consistent*, not exactly unbiased or exactly efficient in finite samples (it depends on the *estimated* $\hat{\boldsymbol{\gamma}}$ rather than the true $\boldsymbol{\gamma}$), Wooldridge recommends computing fully robust standard errors even *after* WLS/FGLS estimation, in case the assumed variance function $h(\boldsymbol{\gamma},\mathbf{x})$ itself is misspecified — see [the robust-versus-efficient trade-off](../heteroskedasticity-and-autocorrelation/robust-vs-efficient-estimation-tradeoff.md).

*Source: Wooldridge (2016), §8-4, Example 8.7.*
