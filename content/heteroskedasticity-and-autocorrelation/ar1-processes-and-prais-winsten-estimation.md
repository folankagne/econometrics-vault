---
title: AR(1) Processes and Prais-Winsten Estimation
source: "Econ 1, Lecture Notes, §Auto-regressive disturbances, §Efficient estimation"
status: enriched
tags:
  - autoregressive-process
  - ar1
  - prais-winsten
  - generalized-least-squares
prerequisites:
  - heteroskedasticity-and-autocorrelation/autocorrelation-and-stationarity
  - heteroskedasticity-and-autocorrelation/sphericalization-and-gls
---
## The AR(1) model

Disturbances follow an **autoregressive process of order $p$**, AR($p$), if $u_t = \rho_1 u_{t-1} + \dots + \rho_p u_{t-p} + \varepsilon_t$. The leading case is **AR(1)**: $u_t = \rho u_{t-1} + \varepsilon_t$, which (under regularity conditions) can be written as an infinite moving average, $u_t = \sum_{s=0}^{\infty}\rho^s\varepsilon_{t-s}$. This gives, for any lag $\ell \geq 0$:

$$\mathbb{E}(u_tu_{t-\ell}\mid\mathbf{X}) = \frac{\sigma_\varepsilon^2\rho^\ell}{1-\rho^2}$$

so the noise covariance matrix, unlike the MA(1) case, is **dense**: every pair of periods is correlated, with correlation decaying geometrically in the lag $\ell$:

$$\mathbb{E}(\mathbf{u}\mathbf{u}'\mid\mathbf{X}) = \frac{\sigma_\varepsilon^2}{1-\rho^2}\begin{pmatrix} 1 & \rho & \rho^2 & \cdots & \rho^{T-1} \\ \rho & 1 & \rho & \cdots & \rho^{T-2} \\ \vdots & & \ddots & & \vdots \\ \rho^{T-1} & \cdots & \rho^2 & \rho & 1 \end{pmatrix} = \sigma_\varepsilon^2\boldsymbol{\Omega}_{AR(1)}$$

Despite the matrix being $(T \times T)$, it is governed by just **two** parameters, $\{\sigma_\varepsilon^2, \rho\}$ — a robust estimator is therefore comparatively easy to build: $\rho$ can be estimated consistently by OLS on $u_t = \rho u_{t-1} + \varepsilon_t$, and $\sigma_\varepsilon$ from the empirical residual distribution.

## Sphericalizing an AR(1) model: quasi-differencing

Lag the original model by one period and multiply by $\rho$: $\rho y_{t-1} = \rho\mathbf{x}_{t-1}\mathbf{b} + \rho u_{t-1}$. Subtracting this from the original model:

$$\underbrace{y_t - \rho y_{t-1}}_{\tilde{y}_t} = \underbrace{(\mathbf{x}_t - \rho\mathbf{x}_{t-1})}_{\tilde{\mathbf{x}}_t}\mathbf{b} + \underbrace{u_t - \rho u_{t-1}}_{v_t \equiv \varepsilon_t}$$

Since $u_t - \rho u_{t-1} = \varepsilon_t$ by construction, the noise in this **quasi-differenced** model is i.i.d.: the model has been sphericalized without needing the full Cholesky machinery — a direct consequence of the AR(1) structure itself.

## The Prais-Winsten correction for the first observation

The transformation above requires $y_{t-1}$, which does not exist for $t=1$: $y_0$ is unobserved. Working with $v_1 = u_1$ directly, $\mathbb{V}(u_1) = \sigma_\varepsilon^2/(1-\rho^2)$, which is **not** $\sigma_\varepsilon^2$ like every other transformed observation — $u_1$ is more dispersed because there is no lagged term available to correct it. Rescaling $u_1$ by $\sqrt{1-\rho^2}$ restores $\mathbb{V}[u_1\sqrt{1-\rho^2}] = \sigma_\varepsilon^2$, matching the rest of the sample. This yields the full **Prais-Winsten** sphericalization matrix $\boldsymbol{\Omega}_{AR(1)}^{-1/2}$, with $\sqrt{1-\rho^2}$ in the top-left corner and a bidiagonal band of $1$'s and $-\rho$'s elsewhere, transforming the model as:

$$\big(y_1\sqrt{1-\rho^2},\ y_2-\rho y_1,\ \dots,\ y_T - \rho y_{T-1}\big) = \big(\mathbf{x}_1\sqrt{1-\rho^2},\ \mathbf{x}_2-\rho\mathbf{x}_1,\ \dots,\ \mathbf{x}_T-\rho\mathbf{x}_{T-1}\big)\mathbf{b} + \big(u_1\sqrt{1-\rho^2},\ v_2,\ \dots,\ v_T\big)$$

This is the i.i.d.-equivalent representation of the information contained in AR(1) data, and OLS applied to it is the (feasible, once $\rho$ is estimated) GLS estimator for AR(1) disturbances.

## Cochrane-Orcutt versus Prais-Winsten, and when FGLS can mislead

Wooldridge (2016, §12-3) distinguishes two feasible-GLS implementations that differ only in how they treat the unusable first observation: **Cochrane-Orcutt (CO)** simply drops it, using only the quasi-differenced observations $t=2,\dots,T$; **Prais-Winsten (PW)** keeps it, rescaled by $\sqrt{1-\hat\rho^2}$ as derived above. Asymptotically the choice is immaterial, but with the small samples typical of time-series work the difference can be noticeable, and PW is generally preferred since it does not discard information. His static Phillips-curve application (inflation on unemployment, 1948–1996) shows just how consequential the FGLS transformation can be in practice: OLS finds a positive, "wrong-signed" coefficient on unemployment ($\hat\beta=0.468$, se $0.289$), while iterated Prais-Winsten with $\hat\rho=.781$ flips the sign entirely ($\hat\beta=-0.716$, se $0.313$) — consistent with the textbook inflation-unemployment tradeoff and close to what first-differencing the same data delivers, since heavy quasi-differencing at $\hat\rho$ near 1 behaves similarly to a first difference.

## A genuine caveat: FGLS is not automatically better than OLS

Wooldridge stresses a point easy to overlook: **FGLS is only consistent under an assumption stronger than what OLS itself requires.** OLS needs only $\text{Cov}(x_t,u_t)=0$; FGLS additionally needs $\text{Cov}(x_{t-1}+x_{t+1},u_t)=0$ — a genuinely stronger condition that fails, for instance, whenever $x$ has a lagged effect on $y$ or $x_{t+1}$ itself reacts to $u_t$ (a feedback pattern common in dynamic economic systems). When OLS and FGLS estimates diverge substantially, this is not automatic evidence that FGLS's efficiency gain should be trusted — it can equally indicate that FGLS's extra assumption has failed, in which case the now-inconsistent FGLS estimate is the one to distrust, not OLS. This is the direct time-series analogue of the [OLS-vs-WLS diagnostic](../heteroskedasticity-and-autocorrelation/robust-vs-efficient-estimation-tradeoff.md) used for cross-sectional heteroskedasticity.

*Source: Wooldridge (2016), §§12-3a–c, Example 12.5.*
