---
title: Weakly Dependent Time Series and Asymptotic OLS
source: "Wooldridge (2016), §§11-1–11-2"
status: enriched
tags:
  - beyond-lectures
  - time-series
  - stationarity
  - weak-dependence
  - autoregressive-process
prerequisites:
  - time-series-methods/time-series-gauss-markov-assumptions
  - heteroskedasticity-and-autocorrelation/autocorrelation-and-stationarity
  - asymptotic-theory/law-of-large-numbers
---
## Why the cross-sectional asymptotics don't transfer automatically

[Asymptotic theory](../asymptotic-theory/00-overview.md) built consistency and asymptotic normality on the LLN and CLT applied to an i.i.d. sample. Time series observations are never i.i.d. — today's shock is correlated with tomorrow's by the very nature of a single evolving process — so the LLN and CLT cannot be invoked automatically. What is needed instead is a *sufficiently mild* form of temporal dependence under which the same limit theorems still apply.

## Stationarity, strict and covariance

A stochastic process $\{x_t\}$ is (strictly) **stationary** if the joint distribution of any finite collection $(x_{t_1},\dots,x_{t_m})$ is unchanged by shifting every index forward by the same amount $h$ — the process's *entire probabilistic structure* is stable over time, not merely its first two moments. A weaker, more practically checkable version — **covariance stationarity** — requires only that $\mathbb{E}(x_t)$ and $\text{Var}(x_t)$ be constant over $t$, and that $\text{Cov}(x_t,x_{t+h})$ depend only on the lag $h$, never on $t$ itself. Every strictly stationary process with finite second moments is covariance stationary; the converse need not hold, but for the purposes of applied time-series regression covariance stationarity is the operative concept.

## Weak dependence: the substitute for random sampling

**Weak dependence** is the further requirement that $x_t$ and $x_{t+h}$ become "almost independent" as the lag $h\to\infty$ — formally, for a covariance-stationary process, that $\text{Corr}(x_t,x_{t+h})\to0$ sufficiently fast as $h$ grows (an **asymptotically uncorrelated** sequence). This is the time-series analogue of the [random sampling](../foundations/population-sample-and-data-structures.md) assumption that made the LLN and CLT automatic in the cross-sectional case: it does not require independence, only that dependence *fades* far enough into the past to no longer matter for large-sample approximations.

## The AR(1) process as the workhorse example

The **autoregressive process of order one**, $y_t=\rho_1y_{t-1}+e_t$ with $\{e_t\}$ i.i.d. mean-zero and independent of $y_0$, is weakly dependent exactly when it satisfies the **stability condition** $|\rho_1|<1$. Under stability, the process is covariance stationary with $\sigma_y^2=\sigma_e^2/(1-\rho_1^2)$ and $\text{Corr}(y_t,y_{t+h})=\rho_1^h$ — a correlation that decays **geometrically** in the lag $h$, going to zero as $h\to\infty$ regardless of how close $\rho_1$ sits to $1$ (even $\rho_1=.9$ gives $\text{Corr}(y_t,y_{t+20})\approx.122$, a twenty-year-apart correlation already quite small). This geometric decay is exactly the mechanism [the AR(1) quasi-differencing transformation](../heteroskedasticity-and-autocorrelation/ar1-processes-and-prais-winsten-estimation.md) elsewhere in this vault exploits to sphericalize serially correlated disturbances.

## Trending series can still be weakly dependent

A subtlety worth flagging explicitly: **weak dependence and stationarity are logically separate properties**. [A linear time trend](../time-series-methods/trends-seasonality-and-spurious-regression.md), $y_t=\delta_0+\delta_1t+e_t$ with i.i.d. $e_t$, is clearly *nonstationary* (its mean changes with $t$) yet is still weakly dependent, since $e_t$ itself is independent across periods — a **trend-stationary process**. This is why including a time trend and then treating the detrended series as weakly dependent is a coherent, standard strategy, not a contradiction.

## Consistency and asymptotic normality under TS.1′

Replacing the finite-sample TS.1 assumption with **TS.1′** — the identical linear model, but now requiring $\{(\mathbf{x}_t,y_t)\}$ to be stationary and weakly dependent — restores the LLN and CLT for sample averages built from the regressors and errors, which is enough to establish that OLS is consistent and asymptotically normal under only *contemporaneous* (not strict) exogeneity, exactly paralleling [the cross-sectional CAN result](../asymptotic-theory/asymptotic-distribution-of-ols-can.md). This is the payoff for the entire weak-dependence apparatus: it is what finally allows a **lagged dependent variable** among the regressors — ruled out under strict exogeneity in the finite-sample TS.3 — since consistency under TS.1′ only ever required the weaker, large-sample condition.

*Source: Wooldridge (2016), §§11-1, 11-2.*
