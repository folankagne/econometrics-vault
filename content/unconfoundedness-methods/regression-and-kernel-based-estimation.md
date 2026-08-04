---
title: Regression-Based and Kernel-Based Estimation under Unconfoundedness
source: "Econ 2b, Ch.5 Estimation under Unconfoundedness, §Estimation Strategies, §Regression-Based Estimation, §Local Estimators"
status: enriched
tags:
  - regression-adjustment
  - kernel-regression
  - nadaraya-watson
  - bias-variance-tradeoff
prerequisites:
  - unconfoundedness-methods/nonparametric-identification-under-cia
---
## From identification to estimation

The identification result $\mathbb{E}[Y_i(1)-Y_i(0)] = \mathbb{E}\big[\mathbb{E}[Y_i\mid X_i,D_i{=}1]-\mathbb{E}[Y_i\mid X_i,D_i{=}0]\big]$ leaves one open question: how to estimate the two conditional expectation functions $g_d(x)=\mathbb{E}[Y_i\mid X_i{=}x,D_i{=}d]$. Every estimator below is a different answer to that same question, plugged into $\hat\tau = \frac{1}{n}\sum_i\big[\hat g_1(X_i)-\hat g_0(X_i)\big]$.

## Parametric regression adjustment

Assume $g_d(x)=\alpha_d+x'\beta_d$, estimated by running **separate** OLS regressions of $Y_i$ on $X_i$ within the treated and untreated subsamples. The resulting ATE estimator, $\hat\tau_{reg} = \frac{1}{n}\sum_i\big[(\hat\alpha_1-\hat\alpha_0)+X_i'(\hat\beta_1-\hat\beta_0)\big]$, predicts each unit's outcome under both treatment states and averages the difference — allowing treatment-effect heterogeneity through the $X_i'(\hat\beta_1-\hat\beta_0)$ term, unlike a single pooled regression with one $D_i$ coefficient.

Regression adjustment is exactly the approach LaLonde (1986) originally applied to the CPS/PSID comparison groups — a single pooled regression with linear controls, one step short of the fully separate-slopes version here — and its poor performance (estimates of the wrong sign) is a cautionary data point for this section: regression adjustment inherits all of the CIA's substantive requirements, and a flexible functional form alone cannot repair a fundamentally non-comparable control group.

*Source: Cunningham (2021), Ch.5; LaLonde (1986).*

## Discrete covariates: the easy case

If $X_i$ is discrete, $\hat g_d(x) = \frac{1}{N_x^d}\sum_{i:X_i=x,D_i=d}Y_i$ is a simple cell mean, and $\hat\tau = \frac{1}{n}\sum_x[\hat g_1(x)-\hat g_0(x)]N_x$ — a weighted average of within-cell treatment/control differences, with each covariate value acting as its own stratum.

## Kernel regression: the continuous case

With continuous $X_i$, no unit is observed at exactly the same $x$ under both treatment states, so "close" observations must substitute for "identical" ones. The **Nadaraya-Watson** estimator:

$$\hat g_d(x) = \frac{\sum_{i:D_i=d} K\big(\frac{X_i-x}{h}\big)Y_i}{\sum_{i:D_i=d} K\big(\frac{X_i-x}{h}\big)}$$

with kernel $K(\cdot)$ (a weighting function) and bandwidth $h$ (neighborhood size) — e.g. the Epanechnikov kernel $K(u)=\frac34(1-u^2)$ for $|u|\leq1$, zero otherwise, which weights nearby observations more and ignores distant ones entirely (compact support). Consistency requires $h\to0$ (shrinking neighborhoods, less bias) *and* $nh\to\infty$ (enough observations per neighborhood despite shrinking $h$, controlling variance) — as $n$ grows, bandwidths can shrink while neighborhoods still contain enough data, tracing the same [bias-variance trade-off](../regression-discontinuity/local-linear-estimation-and-bandwidth-choice.md) seen in RDD bandwidth selection.

## Global nonparametric alternative: series/polynomial regression

For scalar $X_i$, approximate $g_d(x) = \gamma_{0d}+\gamma_{1d}x+\dots+\gamma_{kd}x^k$ with $k\to\infty$ as $n\to\infty$ (at a rate with $k/n\to0$). This is licensed by the Weierstrass approximation theorem: any continuous function on a closed interval can be approximated arbitrarily well by polynomials — the true $g_d$ need not *be* a polynomial, only approximable by one, which is the foundational idea behind **sieve estimation** more broadly. Choosing $k$ faces the same trade-off as bandwidth choice: small $k$ underfits (high bias, low variance), large $k$ overfits (low bias, high variance), typically resolved via cross-validation.
