---
title: The Time-Series Gauss-Markov Assumptions
source: "Wooldridge (2016), §10-3"
status: enriched
tags:
  - beyond-lectures
  - time-series
  - gauss-markov-theorem
  - strict-exogeneity
  - serial-correlation
prerequisites:
  - time-series-methods/static-and-finite-distributed-lag-models
  - ols-estimation/gauss-markov-theorem
---
## The same theorem, restated for time series

Wooldridge labels the time-series analogues of the cross-sectional Gauss-Markov assumptions **TS.1–TS.6**, and the correspondence to [the cross-sectional assumptions](../ols-estimation/the-general-linear-regression-model.md) is close but not exact in one crucial respect. **TS.1** (linear in parameters) and **TS.2** (no perfect collinearity) mirror MLR.1–MLR.3 directly. **TS.3** (zero conditional mean) replaces MLR.2's random-sampling assumption entirely, since time series data is a single realized path, not a random draw of independent units — and TS.3 demands more than its cross-sectional counterpart, as developed below. **TS.4** (homoskedasticity) and **TS.5** (no serial correlation) jointly play the role of MLR.5, and **TS.6** (normality) mirrors MLR.6 exactly.

## Strict exogeneity: the assumption that actually bites

TS.3 requires $\mathbb{E}(u_t\mid\mathbf{X})=0$ for every $t$ — conditional on the explanatory variables at **every** time period, not merely period $t$ itself. This is **strict exogeneity**, and it is markedly stronger than the *contemporaneous* exogeneity, $\mathbb{E}(u_t\mid\mathbf{x}_t)=0$, that would suffice in a cross-section. Two failure modes follow directly from the extra requirement: $z$ can have **no lagged effect on $y$** left unmodeled (if it does, the omitted lag structure shows up correlated with $u_t$, exactly [omitted variable bias](../identification/omitted-variable-bias.md) restated in a dynamic setting); and there can be **no feedback from $y$ to future $z$** — a policy variable that itself reacts to past outcomes (a central bank raising rates *because* inflation rose, a police department expanding *because* crime rose) violates strict exogeneity even if $u_t$ and *current* $z_t$ look uncorrelated. Truly strictly exogenous regressors are more the exception than the rule in economic time series — rainfall in an agricultural production function is a clean example; policy variables set partly in response to past outcomes are the more common, more problematic case.

## Homoskedasticity and no serial correlation

TS.4 requires $\text{Var}(u_t\mid\mathbf{X})$ to be constant over time — a restatement of [heteroskedasticity](../heteroskedasticity-and-autocorrelation/non-spherical-disturbances.md) concerns in a time-series setting, often violated when policy regimes or macroeconomic volatility shift within the sample. TS.5 requires $\text{Corr}(u_t,u_s\mid\mathbf{X})=0$ for every $t\neq s$ — no [autocorrelation](../heteroskedasticity-and-autocorrelation/autocorrelation-and-stationarity.md) — genuinely new relative to cross-sectional work, since random sampling made this automatic there but nothing in a time series guarantees it. Under TS.1–TS.5, the Gauss-Markov theorem holds exactly as in the cross-sectional case: OLS is BLUE. Adding TS.6 (normality, independent of $\mathbf{X}$, i.i.d.) restores exact finite-sample $t$ and $F$ distributions, the full classical-linear-model package.

## Why this matters for interpreting the static Phillips curve

The counterintuitive positive coefficient found for [the static Phillips curve](../time-series-methods/static-and-finite-distributed-lag-models.md) is a natural candidate for a TS.5 violation: if the disturbance in a static inflation-unemployment relationship is itself serially correlated (macroeconomic shocks persist across years), then $t$-statistics computed under TS.1–TS.6 are simply invalid, on top of whatever specification issues (the static form omitting an expectations-augmented dynamic) already threaten TS.3. Diagnosing and correcting exactly this kind of serial correlation is the subject of [testing for autocorrelation](../heteroskedasticity-and-autocorrelation/testing-for-autocorrelation.md) and the [AR(1)/Prais-Winsten machinery](../heteroskedasticity-and-autocorrelation/ar1-processes-and-prais-winsten-estimation.md) developed elsewhere in this vault — both apply to time series regression exactly as this folder's Gauss-Markov assumptions predict they should.

*Source: Wooldridge (2016), §10-3, Theorems 10.1–10.5.*
