---
title: Cross-Section and Before-After Estimators
source: "Econ 1, Lecture Notes, §Difference Estimators"
status: enriched
tags:
  - selection-bias
  - simultaneity-bias
  - difference-estimators
  - policy-evaluation
prerequisites:
  - treatment-effects/average-treatment-effect-and-att
---
## Setup

Consider the linear model $y_{it} = \alpha + \gamma_T\mathcal{T}_{it} + u_{it}$, with the DGP $y_{it} = y_{0i} + u_{it}$ if untreated and $y_{it} = y_{0i} + \Delta_i + u_{it}$ if treated. Two simple **difference estimators** attempt to recover $\Delta^{ATT}$ by comparing sample means — each relies on a different identifying assumption, and each fails in a distinct, informative way when that assumption does not hold.

## The cross-section estimator: selection bias

Comparing treated and untreated individuals **at the same point in time** $\bar{t}$:

$$\hat{\Delta}^{C} = \hat{\gamma}_T^{OLS} = \bar{y}_{i\bar{t}}^{\mathcal{T}=1} - \bar{y}_{i\bar{t}}^{\mathcal{T}=0}$$

Its expectation decomposes as:

$$\mathbb{E}(\hat{\Delta}^C) = \underbrace{\big[\mathbb{E}(y_{1i}\mid\mathcal{T}_{i\bar{t}}{=}1) - \mathbb{E}(y_{0i}\mid\mathcal{T}_{i\bar{t}}{=}1)\big]}_{\Delta^{ATT}} + \underbrace{\big[\mathbb{E}(y_{0i}\mid\mathcal{T}_{i\bar{t}}{=}1) - \mathbb{E}(y_{0i}\mid\mathcal{T}_{i\bar{t}}{=}0)\big] + \big[\mathbb{E}(u_{i\bar{t}}\mid\mathcal{T}_{i\bar{t}}{=}1) - \mathbb{E}(u_{i\bar{t}}\mid\mathcal{T}_{i\bar{t}}{=}0)\big]}_{\text{selection bias}}$$

The bias term vanishes only if treated and untreated individuals would have had the *same* untreated outcome on average — i.e. if treatment status is unrelated to $y_{0i}$. If individuals **self-select** into treatment (as in the [OFS job-search example](../foundations/what-is-econometrics.md), where the least employable individuals received the most intensive assistance), the untreated group is a poor stand-in for what the treated group's outcome would have been absent treatment, and the cross-section estimator is biased — this is the same **selection bias** first introduced in [potential outcomes and the naive estimator](../causal-inference-foundations/potential-outcomes-and-the-naive-estimator.md).

## The before-after estimator: simultaneity bias

Comparing the **same individuals** before ($\underline{t}$, all untreated, $P_{i\underline{t}}=0$) and after ($\bar{t}$, all treated, $P_{i\bar{t}}=1$): the OLS coefficient $\gamma_P$ in $y_{it} = \alpha + \gamma_PP_{it} + u_{it}$ is the **before-after estimator**:

$$\hat{\Delta}^{BA} = \hat{\gamma}_P^{OLS} = \bar{y}_{it}^{P=1} - \bar{y}_{it}^{P=0}$$

$$\mathbb{E}(\hat{\Delta}^{BA}) = \Delta^{ATT} + \big[\mathbb{E}(u_{it}\mid P_{it}{=}1) - \mathbb{E}(u_{it}\mid P_{it}{=}0)\big]$$

The bias term here vanishes only if the noise itself is stable over time. If unobservables that affect the outcome also change between the two periods for reasons unrelated to treatment — a general macroeconomic trend, a seasonal effect — the before-after comparison mistakenly attributes that change to the treatment. This failure mode is called **simultaneity bias**: the treatment and time both change together, and the estimator cannot tell them apart.

> Each estimator holds one dimension fixed (time, or treatment status) and varies the other — and each is vulnerable to whatever it fails to hold fixed. This is exactly the gap the [difference-in-differences estimator](../difference-in-differences/standard-difference-in-differences.md) closes, by combining both comparisons at once: it differences out selection bias by comparing changes rather than levels, and differences out simultaneity bias by netting the treated group's change against the untreated group's change over the same period.

De Chaisemartin's (2021, Ch.11) own framing of simultaneity bias is worth stating alongside this entry's: the before-after estimator implicitly assumes nothing else of relevance changed between the two periods besides treatment — an assumption he calls implausible in essentially any real macroeconomic setting, since business cycles, seasonal effects, and secular trends are the norm rather than the exception. This is precisely why applied work almost never relies on the before-after estimator alone, reaching instead for a control group (the cross-section estimator's ingredient) to combine into a full difference-in-differences design.

*Source: de Chaisemartin (2021), Ch.11.*
