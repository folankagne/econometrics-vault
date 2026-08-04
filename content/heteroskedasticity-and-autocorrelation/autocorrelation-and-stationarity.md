---
title: Autocorrelation and Stationarity
source: "Econ 1, Lecture Notes, §Time-Series: Auto-correlation, §Stationarity"
status: enriched
tags:
  - autocorrelation
  - stationarity
  - moving-average-process
  - random-walk
  - time-series
prerequisites:
  - heteroskedasticity-and-autocorrelation/non-spherical-disturbances
---
## Autocorrelation: the polar opposite of pure heteroskedasticity

Where pure heteroskedasticity drops $A_{4a}^{OLS}$ but keeps $A_{4b}^{OLS}$, **autocorrelation** (or serial correlation) does the reverse:

$$\overline{A}_{4b}^{OLS}: \ \exists\, i,j: \ \mathbb{E}(u_iu_j\mid\mathbf{X}) \neq 0$$

Its most common source is time-series data, $y_t = \mathbf{x}_t\mathbf{b} + u_t$, $t = 1,\dots,T$, where $u_t$ carries **persistent unobserved heterogeneity** — shocks whose effects linger across periods rather than dissipating instantly.

## Example: an MA(1) process

A **moving average process of order 1**, $u_t = \varepsilon_t + \rho\varepsilon_{t-1}$, built from white noise $\varepsilon_t$ (mean zero, variance $\sigma_\varepsilon^2$, uncorrelated across periods), has:

$$\mathbb{E}(u_t^2\mid\mathbf{X}) = \sigma_\varepsilon^2(1+\rho^2) \qquad \mathbb{E}(u_tu_{t-1}\mid\mathbf{X}) = \sigma_\varepsilon^2\rho \qquad \mathbb{E}(u_tu_{t'}\mid\mathbf{X}) = 0 \text{ for } |t-t'|>1$$

The resulting variance-covariance matrix has a **band structure**: nonzero only on the diagonal and its immediate neighbors — correlation exists, but only between adjacent time periods, not across arbitrarily distant ones.

## Why stationarity is required: a counterexample

A **random walk**, $z_t = z_{t-1} + \varepsilon_t$ with $\mathbb{E}(z_{t-1}\varepsilon_t) = 0$, is first-order stationary ($\mathbb{E}(z_t) = \mathbb{E}(z_{t-1})$ for all $t$) but **not** second-order stationary: $\mathbb{E}(z_t^2) = t\sigma_\varepsilon^2 \to \infty$ as $t\to\infty$. Each period adds another independent random update, and the accumulated variance grows without bound. There is consequently no hope of a sample mean like $\frac{1}{T}\sum_t \mathbf{x}_t'u_t$ converging to anything — the asymptotic tools ([LLN](../asymptotic-theory/law-of-large-numbers.md), [CLT](../asymptotic-theory/convergence-in-distribution-and-the-central-limit-theorem.md)) that underlie [CAN](../asymptotic-theory/asymptotic-distribution-of-ols-can.md) simply do not apply to a process whose own variance diverges. This is why time-series econometrics needs an explicit notion of stationarity before proceeding.

## Formal definitions

A random variable $u_t$ is **first-order stationary** if $\mathbb{E}(u_t) = \mu$ for all $t$. It is **second-order stationary** if, in addition, $\text{Cov}(u_t, u_s) = \sigma_{t-s}$ depends only on the time *distance* $t-s$, not on $t$ and $s$ individually. Setting $s=t$ in second-order stationarity recovers $A_{4a}^{OLS}$: $\mathbb{V}(u_t\mid\mathbf{x}_t) = \sigma_0^2$ for all $t$ — homoskedasticity is the special case of second-order stationarity at zero lag.

Under generic second-order-stationary serial correlation, the noise covariance matrix takes a **Toeplitz** form — constant along each diagonal, governed by autocorrelations $\rho_1, \rho_2, \dots, \rho_{T-1}$ at increasing lags — which is again more heavily parameterized than the purely heteroskedastic case, worsening the curse of dimensionality. As with heteroskedasticity, two tools remain available: a **robust** estimator (the Newey-West estimator, built on the same sandwich-estimator logic as [White's estimator](../heteroskedasticity-and-autocorrelation/white-robust-standard-errors.md)), and an **efficient** estimator, which requires imposing enough structure on the correlation process — most commonly an [AR(1) process](../heteroskedasticity-and-autocorrelation/ar1-processes-and-prais-winsten-estimation.md) — for asymptotic properties to hold at all, which they only do for stationary processes such as MA($q$) or AR($p$).

## Why autocorrelation doesn't cause bias, only invalid inference

Wooldridge (2016, §12-1a–b) proves a result exactly parallel to heteroskedasticity's: under strict exogeneity, OLS remains **unbiased regardless of the degree of serial correlation** in the errors, and remains **consistent** even under the weaker assumption of weak dependence — serial correlation is purely an efficiency and inference problem, not a bias problem, precisely mirroring [why heteroskedasticity doesn't cause bias](../heteroskedasticity-and-autocorrelation/consequences-of-non-sphericity-for-ols.md). His explicit variance derivation for the AR(1) case, $\text{Var}(\hat\beta_1) = \sigma^2/SST_x + 2(\sigma^2/SST_x^2)\sum_{t}\sum_{j}\rho^j x_tx_{t+j}$, shows the usual OLS variance formula $\sigma^2/SST_x$ is only the *first* term — the second term is what the naive formula misses entirely, and since $\rho>0$ combined with positively autocorrelated regressors (the empirically common case in time series) makes this second term positive, **naive OLS standard errors typically understate the true sampling variability** when serial correlation is positive, inflating $t$-statistics and overstating statistical significance.

## A subtlety with lagged dependent variables

Wooldridge (2016, §12-1d) flags a widely-repeated but imprecise claim: "OLS is inconsistent with a lagged dependent variable and serially correlated errors." This is true only in a specific sense. If the *true* conditional expectation is dynamically complete — $\mathbb{E}(y_t\mid y_{t-1})=\beta_0+\beta_1y_{t-1}$ — then by construction $u_t\equiv y_t-\beta_0-\beta_1y_{t-1}$ satisfies $\mathbb{E}(u_t\mid y_{t-1})=0$, and OLS is consistent for $\beta_0,\beta_1$ **even though** $u_t$ can still be serially correlated (since $u_{t-1}$ and $u_{t-2}$ both feed into $y_{t-1}$, which correlates with $u_t$ through the model's own dynamics). Inconsistency arises only in the different, narrower case where a researcher *additionally assumes* the errors follow an AR(1) process on top of the lagged-dependent-variable specification — a combination that is rarely a sensible modeling choice in the first place, since the correct fix for residual serial correlation in a dynamic model is usually to add more lags of $y$, not to layer an AR(1) error structure on top.

*Source: Wooldridge (2016), §§12-1a–d.*
