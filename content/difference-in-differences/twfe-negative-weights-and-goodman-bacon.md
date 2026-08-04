---
title: TWFE Negative Weights and the Goodman-Bacon Decomposition
source: "Econ 2b, Ch.6 Difference-in-Differences and Two-Way Fixed Effects, §The Problem: Heterogeneous Treatment Effects, §Empirical Evidence"
status: enriched
tags:
  - negative-weights
  - goodman-bacon-decomposition
  - forbidden-comparisons
  - no-sign-reversal
prerequisites:
  - difference-in-differences/two-way-fixed-effects
---
## What TWFE actually estimates under heterogeneous effects

De Chaisemartin and D'Haultfœuille (2020) show that, under parallel trends for $Y_{g,t}(0)$:

$$\mathbb{E}[\hat\beta^{fe}] = \mathbb{E}\left[\sum_{(g,t):D_{g,t}\neq0} W_{g,t}\cdot TE_{g,t}\right], \qquad \sum_{(g,t):D_{g,t}\neq 0} W_{g,t}=1$$

The weights sum to one, but **some can be negative**. This breaks the "no-sign-reversal" property: it is possible for $\mathbb{E}[\hat\beta^{fe}]<0$ even when *every* individual treatment effect $TE_{g,t}>0$ — the estimator can point in the **opposite direction** from every true effect underlying it.

## Where negative weights come from: forbidden comparisons

Negative weights arise specifically from **forbidden comparisons** (Borusyak and Jaravel, 2017): comparisons that use an *already-treated* unit as if it were a valid control. The **Goodman-Bacon decomposition** (2021) makes this precise: TWFE equals a weighted average of every possible $2\times2$ DID comparison in the data,

$$\hat\beta^{fe} = \sum_{g\neq g',\,t<t'} v_{g,g',t,t'}\cdot\widehat{DID}_{g,g',t,t'}, \qquad \sum v_{g,g',t,t'}=1,\ v_{g,g',t,t'}\geq0$$

with $v_{g,g',t,t'}>0$ iff $g$'s treatment status changed between $t$ and $t'$ while $g'$'s did not — a "clean" comparison. A **forbidden** comparison occurs when the supposed control $g'$ is treated in *both* periods $t,t'$: an already-treated unit is being used to net out common trends, contaminating the DID with $g'$'s own (nonzero) treatment effect.

## Empirical evidence: how severe is this in practice?

Gentzkow, Shapiro, and Sinkinov (2011), studying newspapers and electoral turnout (1868–1928 US county data), find $\hat\beta^{fe}=-0.0011$ (se $0.0011$) versus a first-differences estimate $\hat\beta^{fd}=0.0026$ (se $0.0009$) — significantly different ($t=2.86$), evidence against constant treatment effects. Weight decomposition confirms the mechanism directly: $40.1\%$ of the weights in $\hat\beta^{fe}$ are negative (summing to $-0.53$), and $45.7\%$ of the weights in $\hat\beta^{fd}$ are negative (summing to $-1.43$). The `TwoWayFEWeights` package (R) implements this diagnostic directly on applied data.

> This is not a purely theoretical concern confined to adversarial examples — negative weights affecting nearly half the mass of an estimator, in a real, published empirical application, is a routine outcome of staggered-adoption designs with plausible effect heterogeneity, which is exactly why the [modern DID estimators](../difference-in-differences/cohort-based-estimators-csa-sun-abraham-bjs.md) were developed.

## A minimal numeric illustration (de Chaisemartin & D'Haultfœuille, 2020)

De Chaisemartin's (2021, Ch.11.2) own textbook example uses two groups and three periods: group 1 is untreated in periods 1–2 and treated in period 3; group 2 is untreated in period 1 and treated in periods 2–3. Under a balanced panel, the TWFE coefficient decomposes exactly as $\beta_{fe} = \tfrac12\mathbb{E}[\Delta_{1,3}] + \mathbb{E}[\Delta_{2,2}] - \tfrac12\mathbb{E}[\Delta_{2,3}]$ — group 2's period-3 effect enters with weight $-\tfrac12$. If every true cell-level ATE is modestly positive except group 2's period-3 effect, which has built up to $\mathbb{E}[\Delta_{2,3}]=4$ (against $\mathbb{E}[\Delta_{1,3}]=\mathbb{E}[\Delta_{2,2}]=1$), then $\beta_{fe} = \tfrac12(1)+1-\tfrac12(4) = -\tfrac12$ — a **negative** TWFE coefficient even though every underlying treatment effect is strictly positive. The mechanism is exactly the forbidden-comparison logic above, made fully explicit with numbers rather than left abstract.

*Source: de Chaisemartin (2021), Ch.11.2.2; de Chaisemartin & D'Haultfœuille (2020).*
