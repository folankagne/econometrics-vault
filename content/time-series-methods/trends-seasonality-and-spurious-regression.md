---
title: Trends, Seasonality, and the Spurious Regression Problem
source: "Wooldridge (2016), §10-5"
status: enriched
tags:
  - beyond-lectures
  - time-series
  - time-trend
  - spurious-regression
  - seasonality
prerequisites:
  - time-series-methods/time-series-gauss-markov-assumptions
  - foundations/what-is-econometrics
---
## Characterizing a trending series

Many economic time series grow (or shrink) systematically over time. A **linear time trend**, $y_t=\alpha_0+\alpha_1t+e_t$, has $\mathbb{E}(y_t)=\alpha_0+\alpha_1t$ — a straight-line average path, with $\alpha_1$ the expected per-period change. Many series instead grow at a roughly **constant percentage rate**, better captured by an **exponential trend**: modeling $\log(y_t)=\beta_0+\beta_1t+e_t$ implies $y_t=\exp(\beta_0+\beta_1t+e_t)$ grows exponentially in levels, and $\beta_1$ is approximately the average per-period *growth rate*, since $\Delta\log(y_t)\approx(y_t-y_{t-1})/y_{t-1}$ for small changes. A **quadratic trend**, $y_t=\alpha_0+\alpha_1t+\alpha_2t^2+e_t$, adds a hump or accelerating shape when a simple straight line or constant growth rate is not flexible enough.

## Spurious regression: correlation through shared drift, not causation

If two variables are each independently trending upward for entirely unrelated reasons — one for demographic reasons, another for technological ones — a naive regression of one on the other can show a strong, statistically significant relationship that reflects nothing but the shared upward drift. This is the time-series incarnation of exactly the [correlation-is-not-causation](../foundations/what-is-econometrics.md) warning that opens this vault, now with a specific, well-understood mechanism: an omitted trend acts as a confounder in precisely the sense of [omitted variable bias](../identification/omitted-variable-bias.md), since $t$ itself is correlated with both the "dependent" and "independent" trending series. The fix is direct — include $t$ itself as a regressor — which absorbs the common drift and leaves only the genuine co-movement (if any) between the two series' *detrended* fluctuations to drive the estimated relationship.

## Worked example: housing investment and prices

Regressing per-capita housing investment on a housing price index in constant-elasticity form gives an implausibly large elasticity, $\widehat{\log(invpc)}=-.550+1.241\log(price)$ ($se=.382$) — not statistically distinguishable from an elasticity of exactly $1$, and suspiciously imprecise. Both series turn out to have strong, independent upward trends: regressing $\log(invpc)$ on $t$ alone gives a trend coefficient of $.0081$ ($se=.0018$), and regressing $\log(price)$ on $t$ alone gives $.0044$ ($se=.0004$) — both series drift upward for reasons that need not have anything to do with each other. The original regression's large, imprecise elasticity is symptomatic of exactly this kind of spurious co-trending rather than a genuine, tightly estimated supply relationship — a caution to add a time trend (or otherwise detrend) before trusting any time-series regression involving two variables that are each visibly trending.

## Seasonality

Time series measured more often than annually (monthly, quarterly) often exhibit **seasonality** — systematic within-year patterns (retail sales spiking every December, agricultural output following planting cycles) that are not genuine trend or genuine causal response to the regressors of interest. The standard fix mirrors the trend fix exactly: include a full set of seasonal dummy variables (11 month dummies, or 3 quarter dummies, leaving one period as the reference category) so that any regressor's estimated effect is purged of purely calendar-driven variation, exactly as year dummies in [panel data](../panel-data-methods/pooled-cross-sections-and-the-unobserved-effects-model.md) absorb aggregate time effects common to every cross-sectional unit.

*Source: Wooldridge (2016), §10-5, Example 10.7.*
