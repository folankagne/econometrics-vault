---
title: Static and Finite Distributed Lag Models
source: "Wooldridge (2016), §§10-1–10-2"
status: enriched
tags:
  - beyond-lectures
  - time-series
  - static-model
  - distributed-lag-model
  - long-run-propensity
  - stochastic-process
prerequisites:
  - foundations/population-sample-and-data-structures
---
## A time series is a single realization of a stochastic process

Cross-sectional randomness comes from *which* units happened to be sampled; a different draw from the population would give different individuals. Time series randomness is subtler: history only happens once, so a time series dataset is a single **realization** of a **stochastic process** — the sequence of random variables $\{y_t\}$ that, in principle, could have unfolded differently had history taken a different path. This reframing (rather than any change to the mechanics of OLS) is what licenses treating time series coefficients as random variables with sampling distributions at all, even though only one sample path is ever observed.

## Static models

A **static model** relates $y_t$ to $z_t$ contemporaneously, $y_t=\beta_0+\beta_1z_t+u_t$, appropriate when a change in $z$ is believed to affect $y$ immediately and only at that moment — the *static Phillips curve*, $inf_t=\beta_0+\beta_1unem_t+u_t$, is a canonical example, used to test for a short-run inflation-unemployment tradeoff. On 1948–1996 US data this actually gives $\hat\beta_1=.468$ (se $.289$) — the **wrong sign** for the textbook tradeoff, and not close to statistically significant ($t\approx1.62$) — an early warning, developed further in [the time-series Gauss-Markov assumptions](../time-series-methods/time-series-gauss-markov-assumptions.md), that a static specification omits dynamics essential to this particular relationship.

## Finite distributed lag (FDL) models

When $y$ plausibly responds to $z$ only with a delay — biological or behavioral lags mean decisions rarely react to a shock the instant it occurs — a **finite distributed lag model of order $q$** allows several lags:

$$y_t = \alpha_0+\delta_0z_t+\delta_1z_{t-1}+\dots+\delta_qz_{t-q}+u_t$$

$\delta_0$ is the **impact propensity** (immediate effect of a one-unit change in $z$); the **long-run propensity (LRP)**, $\delta_0+\delta_1+\dots+\delta_q$, is the cumulative effect after $z$ has permanently shifted by one unit and all lagged adjustments have played out — obtained by imagining $z$ jumps once and stays at its new level forever, then summing every period's marginal contribution to $y$.

## Worked example: the personal tax exemption and fertility

Modeling the general fertility rate as a function of the real tax exemption value with two lags, $gfr_t=\alpha_0+\delta_0pe_t+\delta_1pe_{t-1}+\delta_2pe_{t-2}+\dots+u_t$, the individual lag coefficients come out statistically insignificant and imprecisely estimated ($\hat\delta_0=.073$, se $.126$; $\hat\delta_1=-.0058$, se $.1557$; $\hat\delta_2=.034$, se $.126$) — a textbook symptom of **multicollinearity among lags of the same variable**, since $pe_t$, $pe_{t-1}$, and $pe_{t-2}$ are themselves highly correlated. Despite this, the LRP is estimated far more precisely than any individual $\delta_j$: reparametrizing the regression to estimate $\theta_0=\delta_0+\delta_1+\delta_2$ directly gives $\hat\theta_0=.101$ with $t\approx3.37$, a 95% confidence interval of roughly $[.041,.160]$. This is a general lesson worth carrying beyond time series: multicollinearity can make *individual* coefficients hopeless to pin down while leaving a well-chosen *linear combination* of them (here, the cumulative long-run effect) precisely estimable — the practical question a researcher actually cares about is often exactly such a combination, not any single lag coefficient in isolation.

*Source: Wooldridge (2016), §§10-1, 10-2, Examples 10.1, 10.4.*
