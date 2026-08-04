---
title: Two-Way Fixed Effects (TWFE)
source: "Econ 2b, Ch.6 Difference-in-Differences and Two-Way Fixed Effects, §Two-Way Fixed Effects (TWFE)"
status: enriched
tags:
  - two-way-fixed-effects
  - panel-data
  - staggered-adoption
prerequisites:
  - difference-in-differences/the-did-regression-representation
---
## The model

With more than two groups and two periods, the standard extension of DID is the **two-way fixed effects (TWFE)** regression:

$$Y_{g,t} = \alpha_g + \gamma_t + \beta^{fe}D_{g,t} + \varepsilon_{g,t}$$

with group fixed effects $\alpha_g$ (absorbing time-invariant group characteristics), time fixed effects $\gamma_t$ (absorbing shocks common to all groups), and treatment coefficient $\beta^{fe}$.

## TWFE nests the 2×2 DID exactly

With exactly two groups ($s,n$) and two periods ($1,2$), dropping one group and one time dummy to avoid collinearity, TWFE reduces to $Y_{g,t}=\beta_0+(\alpha_s-\alpha_n)\mathbf{1}(g{=}s)+\gamma_2\mathbf{1}(t{=}2)+\beta^{fe}\mathbf{1}(g{=}s)\mathbf{1}(t{=}2)+\varepsilon_{g,t}$, since $D_{g,t}=\mathbf{1}(g{=}s)\mathbf{1}(t{=}2)$ in this case — exactly the [interaction-term regression representation](../difference-in-differences/the-did-regression-representation.md) already derived. The OLS estimate $\hat\beta^{fe}$ recovers $\widehat{DID}$ *exactly*. This is why, in the general multi-group, multi-period case, $\hat\beta^{fe}$ was for decades simply called "the DID estimator."

## The implicit homogeneity assumption

That correspondence, however, only extends cleanly to settings with **constant** treatment effects. When treatment effects vary across groups or over time — the norm rather than the exception in most applications with staggered rollout — TWFE's interpretation as "the" average treatment effect can break down badly, as developed in [negative weights and the Goodman-Bacon decomposition](../difference-in-differences/twfe-negative-weights-and-goodman-bacon.md).

De Chaisemartin (2021, Ch.11, §11.2) — himself a co-author of one of the two papers (with D'Haultfœuille) that first fully characterized this breakdown — frames the TWFE literature's development as a cautionary tale about how far an estimator's informal reputation ("the DID estimator") can outrun its actual formal properties: for roughly three decades, applied economists used TWFE regressions as the default tool for any multi-group, multi-period rollout design, reasoning by analogy to the exact 2×2 equivalence proven here, without realizing that the analogy breaks down as soon as treatment timing is staggered *and* effects are heterogeneous — a realization that only became widespread following Goodman-Bacon (2021), de Chaisemartin and D'Haultfœuille (2020), and several contemporaneous papers.

*Source: de Chaisemartin (2021), Ch.11, §11.2; de Chaisemartin & D'Haultfœuille (2020).*
