---
title: Conditional Average Treatment Effect (CATE) and ML Estimators
source: "Econ 2b, Ch.5 Estimation under Unconfoundedness, §Conditional Average Treatment Effect (CATE)"
status: enriched
tags:
  - cate
  - treatment-effect-heterogeneity
  - causal-forests
prerequisites:
  - unconfoundedness-methods/regression-and-kernel-based-estimation
---
## Definition

The **Conditional Average Treatment Effect** is $\tau(x) = \mathbb{E}[Y_i\mid X_i{=}x,D_i{=}1] - \mathbb{E}[Y_i\mid X_i{=}x,D_i{=}0]$ — how the treatment effect itself varies across covariate values, capturing treatment-effect heterogeneity directly rather than averaging it away into a single ATE.

## Direct estimation versus differencing

The natural estimator, $\hat g_1(x)-\hat g_0(x)$, estimates the two conditional means *separately* and differences them. An alternative, machine-learning-based family of methods estimates $\tau(x)$ **directly**, targeting the difference itself rather than each piece independently — **causal trees** (Athey and Imbens, 2016) and **causal forests** (Wager and Athey, 2018) are the leading examples. This distinction matters when the goal is specifically to characterize heterogeneity (which subgroups benefit more or less) rather than only to report a single average effect.

A CATE-based reanalysis of the LaLonde/NSW data would ask a sharper question than the ATT alone: rather than a single average effect on trainees, does the training program help some subgroups (e.g. younger participants, those with more recent labor-force attachment) more than others? Cunningham (2021, Ch.5) notes this heterogeneity-focused perspective is where much of the current research energy in unconfoundedness-based causal inference is concentrated, precisely because policymakers are often less interested in "did this program work on average" than in "for whom did this program work," which a single ATE or ATT number cannot answer on its own.

*Source: Cunningham (2021), Ch.5; Athey & Imbens (2016); Wager & Athey (2018).*
