---
title: Fixed Effects versus First Differencing
source: "Wooldridge (2016), Ch.14"
status: enriched
tags:
  - beyond-lectures
  - panel-data
  - fixed-effects
  - first-differencing
  - efficiency-comparison
  - measurement-error
prerequisites:
  - panel-data-methods/fixed-effects-within-estimator
  - panel-data-methods/the-first-differenced-estimator
  - identification/measurement-error-and-attenuation-bias
---
## Identical when T = 2, different otherwise

With exactly two periods, the fixed-effects (FE) and first-differenced (FD) estimators — along with all their standard errors and test statistics — are numerically **identical**, provided the FD equation includes an intercept (which plays the role of the second period's time dummy). For $T\geq3$ they generally diverge, and both remain unbiased and consistent under the same strict-exogeneity assumptions, so unbiasedness alone cannot decide between them.

## The deciding criterion: serial correlation in the idiosyncratic errors

Efficiency comparisons between FE and FD require an assumption about $u_{it}$'s own serial correlation (net of $a_i$, which both transformations remove). If the $u_{it}$ are **serially uncorrelated** — the standard assumption implicit whenever an unobserved-effects model is written down — **FE is more efficient than FD**. This has a clean intuition: FD's residual, $\Delta u_{it}$, is itself first-order autocorrelated with $\text{Corr}(\Delta u_{it},\Delta u_{i,t+1})=-0.5$ whenever the underlying $u_{it}$ are serially uncorrelated, so FD discards efficiency by inducing correlation between adjacent differenced observations that a within-transformed panel does not have.

The comparison flips if $u_{it}$ instead follows something close to a **random walk** — strong positive serial correlation — in which case first differencing is the more efficient choice, since it directly removes that persistence while the within transformation does not. In many applications $u_{it}$ shows *some* positive serial correlation short of a full random walk, in which case neither estimator dominates on efficiency grounds alone, and the practical recommendation is simply to compute both and check whether conclusions are sensitive to the choice.

## A second criterion: robustness to measurement error

Like OLS under [classical measurement error](../identification/measurement-error-and-attenuation-bias.md), both FE and FD amplify the *relative* importance of measurement error in a regressor, since differencing or demeaning shrinks the genuine signal (if $x$ moves little within a unit over time) while leaving the measurement noise largely intact. Between the two, **FE is generally the more robust choice** when strict exogeneity is otherwise violated in a specific way — a lagged dependent variable among the regressors, or feedback from $u_{it}$ into future $x$'s — since the FD estimator's bias in these cases stays roughly constant as $T$ grows, while the FE estimator's bias shrinks at rate $1/T$.

## Practical guidance

Because the two estimators can genuinely disagree and neither is obviously superior in every application, the standard advice — echoed throughout this vault's treatment of estimator choice, from [OLS vs. WLS under heteroskedasticity](../heteroskedasticity-and-autocorrelation/robust-vs-efficient-estimation-tradeoff.md) to [BJS vs. CSA](../difference-in-differences/cohort-based-estimators-csa-sun-abraham-bjs.md) in modern DiD — is to report **both** and investigate discrepancies rather than picking one and hoping the other would agree. A large, substantively important gap between FE and FD estimates is itself informative: it signals that the choice of transformation matters for this specific application, which is worth understanding before trusting either number.

*Source: Wooldridge (2016), §14-1b.*
