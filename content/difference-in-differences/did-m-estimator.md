---
title: "The DID_M Estimator (de Chaisemartin and D'Haultfœuille)"
source: "Econ 2b, Ch.6 Difference-in-Differences and Two-Way Fixed Effects, §Modern Solutions › Ruling Out Dynamic Effects"
status: enriched
tags:
  - did-m-estimator
  - switchers
  - dechaisemartin-dhaultfoeuille
prerequisites:
  - difference-in-differences/twfe-negative-weights-and-goodman-bacon
---
## The core idea: only compare genuine changers to genuine non-changers

De Chaisemartin and D'Haultfœuille (2020) build an estimator that, by construction, never makes a [forbidden comparison](../difference-in-differences/twfe-negative-weights-and-goodman-bacon.md): only units whose treatment status actually *changed* between $t-1$ and $t$ are ever used as the "treated" side of a comparison, and only units whose status *did not change* are ever used as controls.

$$DID_{+,t} = \frac{1}{N_{0,1,t}}\sum_{g:D_{g,t-1}=0,D_{g,t}=1}(Y_{g,t}-Y_{g,t-1}) - \frac{1}{N_{0,0,t}}\sum_{g:D_{g,t-1}=0,D_{g,t}=0}(Y_{g,t}-Y_{g,t-1})$$
$$DID_{-,t} = \frac{1}{N_{1,1,t}}\sum_{g:D_{g,t-1}=1,D_{g,t}=1}(Y_{g,t}-Y_{g,t-1}) - \frac{1}{N_{1,0,t}}\sum_{g:D_{g,t-1}=1,D_{g,t}=0}(Y_{g,t}-Y_{g,t-1})$$

$DID_{+,t}$ compares **switchers-in** (untreated at $t{-}1$, treated at $t$) against **stayers-at-zero** (untreated throughout); $DID_{-,t}$ compares **switchers-out** against **stayers-at-one**. $DID_M$ is a weighted average of these two quantities across all periods, weighted by the number of switchers contributing to each.

## Properties

$DID_{+,t}$ is unbiased for the switchers-in effect under parallel trends **for $Y_{g,t}(0)$**; $DID_{-,t}$ is unbiased for (minus) the switchers-out effect under parallel trends **for $Y_{g,t}(1)$** — two distinct parallel-trends conditions, one on each potential outcome. Under **homogeneous** effects, $Y_{g,t}(1)=Y_{g,t}(0)+\delta_t$ for all $g$, so any parallel-trends condition on $Y(0)$ mechanically implies the same condition on $Y(1)$: the two collapse into a single assumption. Under binary staggered treatment specifically, $DID_M$ is robust to fully **dynamic** treatment effects — it never needs to assume effects are constant over exposure duration, unlike plain TWFE.

> The mechanism generalizes the lesson from the [early-vs-late illustrative example](../difference-in-differences/early-vs-late-treated-illustrative-example.md): the source of TWFE's negative weights was always the use of already-treated units as controls. $DID_M$ eliminates the problem at its root by simply never constructing such a comparison in the first place, rather than trying to reweight or correct for it after the fact.

## The target parameter, and a built-in placebo test

De Chaisemartin (2021, Ch.11.2.2) is precise about what $DID_M$ actually estimates: $\delta^S$, the average effect of treatment *at the moment a group's status switches*, averaged across every switching event in the panel (switchers-in and switchers-out together) — a well-defined causal parameter even when effects vary arbitrarily across groups and over time, as long as at every date there exists at least one "stable" group of each type (some group untreated throughout consecutive periods to serve as a control for joiners, some group treated throughout to serve as a control for leavers). $DID_M$ also comes with a genuine placebo test built from the same logic: $DID_M^{pl}$ compares switching and non-switching groups' trends *one period before* the actual switch, and under the maintained assumptions this placebo estimand equals exactly zero — so a statistically significant $DID_M^{pl}$ is direct evidence that switchers and stable groups were already on divergent trends before treatment, a genuine (if partial) empirical check on the plausibility of the identifying assumptions, implemented in the `did_multipleGT` Stata package alongside the estimator itself.

*Source: de Chaisemartin (2021), Ch.11.2.2; de Chaisemartin & D'Haultfœuille (2020).*
