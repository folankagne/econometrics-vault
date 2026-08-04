---
title: Identification Strategies — An Overview
source: "Econ 1, Lecture Notes, §Solutions: Identification strategies"
status: enriched
tags:
  - identification-strategy
  - confounding-variation
  - instrumental-variables
  - difference-estimators
  - control-variables
prerequisites:
  - identification/exogeneity-and-endogeneity
  - identification/omitted-variable-bias
  - identification/measurement-error-and-attenuation-bias
  - identification/simultaneity-bias
---
## The common target: eliminating confounding variation

Every source of endogeneity covered in this section — [omitted variables](../identification/omitted-variable-bias.md), [measurement error](../identification/measurement-error-and-attenuation-bias.md), [simultaneity](../identification/simultaneity-bias.md) — produces the same symptom: the observed relationship between $y_i$ and $x_{ik}$ mixes the causal parameter of interest with confounding variation:

$$\frac{\partial y_i}{\partial x_{ik}} = b_k + \frac{\partial u_i}{\partial x_{ik}}$$

An **identification strategy** is any method for eliminating (or explicitly modeling) this second term so that the observed variation isolates $b_k$ alone. This section maps out the five broad families of such strategies developed across the rest of this vault.

## Five families of identification strategies

1. **Break** the correlation at the data-collection stage — **experimental methods**. If treatment assignment is randomized, it is by construction independent of every unobservable, so no confounding variation can exist. See [Randomized Controlled Trials](../treatment-effects/00-overview.md).

2. **Filter out** confounding heterogeneity, isolating only exogenous variation in the regressor — **instrumental variables and 2SLS**. An instrument shifts the endogenous regressor without any direct channel to the outcome, letting only the "clean" portion of its variation drive the estimate. See [instrumental variables](../instrumental-variables/00-overview.md).

3. **Drop out** confounding heterogeneity through differencing — **difference estimators**. Time-invariant unobserved heterogeneity can be eliminated by comparing the same unit (or comparable units) across two states or two periods, canceling out whatever stays fixed. See [difference-in-differences](../difference-in-differences/00-overview.md).

4. **Measure** the heterogeneity using observables — **control variables and discontinuities**. If the confounder is itself observed (or a discontinuity lets treatment status be treated as good as randomly assigned locally), it can be conditioned on directly rather than eliminated. See [unconfoundedness methods](../unconfoundedness-methods/00-overview.md) and [regression discontinuity designs](../regression-discontinuity/00-overview.md).

5. **Model** the source of endogeneity explicitly — **structural (often nonlinear) models**. Rather than eliminate the confounding channel, an explicit model of how it arises can be specified and estimated jointly with the parameter of interest.

> This taxonomy is the organizing map for the rest of the causal-inference toolkit in this vault: every method introduced from here on — instruments, RCTs, difference-in-differences, RDD, matching and propensity scores — is best understood as one specific way of executing one of these five general strategies.

Family 4 ("measure the heterogeneity") deserves a caveat Wooldridge (2016, §9-2) makes explicit: a **proxy variable** need not be the same thing as the true omitted factor — IQ is not literally "ability" — it only needs to satisfy a *redundancy* condition, that once the proxy is controlled for, the remaining omitted variation is unrelated to the regressor of interest. This is weaker than fully "measuring" the confounder, which is why proxy-variable control and the [unconfoundedness](../unconfoundedness-methods/00-overview.md) methods elsewhere in this vault both rest on a conditional-independence-type assumption that can never be directly tested, only argued for on institutional or theoretical grounds.

*Source: Wooldridge (2016), §9-2.*
