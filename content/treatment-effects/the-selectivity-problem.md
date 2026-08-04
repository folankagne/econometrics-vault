---
title: The Selectivity Problem
source: "Econ 2b, Ch.2 Rubin's Causal Model and Randomized Experiments, §The Selectivity Problem"
status: enriched
tags:
  - selectivity
  - selection-bias
  - endogeneity
  - treatment-on-the-treated
prerequisites:
  - causal-inference-foundations/rubins-causal-model
  - causal-inference-foundations/potential-outcomes-and-the-naive-estimator
---
## What the data can and cannot reveal

From data alone, only $\mathbb{E}(y_0\mid D{=}0)$ (mean untreated outcome among the untreated) and $\mathbb{E}(y_1\mid D{=}1)$ (mean treated outcome among the treated) are observable. The two counterfactual quantities — $\mathbb{E}(y_1\mid D{=}0)$ and $\mathbb{E}(y_0\mid D{=}1)$ — remain unidentified without further assumptions. Estimating $TT = \mathbb{E}(y_1\mid D{=}1) - \mathbb{E}(y_0\mid D{=}1)$ requires the second term, which is never directly observed.

## Two "no selectivity" assumptions, for two different targets

**For TT**, a *sufficient* condition is that treated individuals resemble untreated individuals in their **untreated** potential outcome only:

$$\mathbb{E}(y_0\mid D{=}1) = \mathbb{E}(y_0\mid D{=}0) = \mathbb{E}(y_0)$$

Under this, $TT = \mathbb{E}(y_1\mid D{=}1) - \mathbb{E}(y_0\mid D{=}0)$ — both terms observed, and the control group's mean serves directly as the treated group's counterfactual.

**For ATE**, a *stronger* condition — full independence of both potential outcomes from treatment status — is needed:

$$\mathbb{E}(y_0\mid D) = \mathbb{E}(y_0) \qquad\qquad \mathbb{E}(y_1\mid D) = \mathbb{E}(y_1)$$

Under full independence, $ATE = \mathbb{E}(y_1\mid D{=}1) - \mathbb{E}(y_0\mid D{=}0)$ as well, and moreover $ATE = TT$ — the "**equal gain**" property: since potential outcomes have the same distribution regardless of treatment status, averaging over the treated subpopulation gives the same result as averaging over everyone.

## Selection bias, decomposed

In general $\mathbb{E}(y_0\mid D{=}1) \neq \mathbb{E}(y_0\mid D{=}0)$, so the naive difference in observed means is biased for $TT$:

$$\mathbb{E}(y_1\mid D{=}1) - \mathbb{E}(y_0\mid D{=}0) = \underbrace{\big[\mathbb{E}(y_1\mid D{=}1) - \mathbb{E}(y_0\mid D{=}1)\big]}_{TT} + \underbrace{\big[\mathbb{E}(y_0\mid D{=}1) - \mathbb{E}(y_0\mid D{=}0)\big]}_{\text{selectivity bias}}$$

**Selectivity bias** is the gap between the average counterfactual untreated outcome across the two populations — exactly the decomposition already seen in [potential outcomes and the naive estimator](../causal-inference-foundations/potential-outcomes-and-the-naive-estimator.md), restated in Rubin's-model notation. See [sources of selection bias](../treatment-effects/sources-of-selection-bias.md) for where this gap typically comes from in practice.

## Selectivity is endogeneity

For the homogeneous-effects model $y_i = \alpha+\beta D_i+u_i$ with $y_{0i}=\alpha+u_i$ and $y_{1i}=y_{0i}+\beta$:

$$\text{Selectivity} \iff \mathbb{E}(y_0\mid D{=}1)\neq\mathbb{E}(y_0\mid D{=}0) \iff \mathbb{E}(u\mid D{=}1)\neq\mathbb{E}(u\mid D{=}0) \iff \text{ZCM fails}$$

so that OLS on this model estimates $\mathbb{E}(y\mid D{=}1)-\mathbb{E}(y\mid D{=}0) = \beta + [\mathbb{E}(u\mid D{=}1)-\mathbb{E}(u\mid D{=}0)]$ — treatment status is endogenous in exactly the sense developed in [exogeneity and endogeneity](../identification/exogeneity-and-endogeneity.md), with the selectivity bias term playing the role of the endogeneity bias term. Selectivity and endogeneity are the same problem, described in two different vocabularies — potential-outcomes language for treatment evaluation, regression language for everything else in this vault.

## Summary of Rubin's causal model so far

Treatment effects are differences between potential outcomes; heterogeneity implies multiple candidate evaluation parameters (ATE, TT, ...); the fundamental identification problem is that counterfactuals are never observed; and selectivity means that, in general, outcomes of the treated cannot stand in for outcomes of the untreated, or vice versa, without an identifying assumption to bridge the gap.

## The hospital allegory

Angrist and Pischke (2009, §2.1) open their entire discussion of experiments with a deliberately provocative version of this problem: does going to the hospital make people healthier? Comparing 2005 NHIS respondents, those hospitalized in the past year report *substantially worse* health (mean 2.79 on a 1–5 scale, 1=excellent) than those who were not (mean 2.07) — a highly significant difference (t = 58.9) that, taken at face value, says hospitals make people sicker. The resolution is exactly the selectivity-bias decomposition above: $\mathbb{E}(y_0\mid D{=}1)$ — how healthy hospitalized people *would be* absent hospitalization — is much lower than $\mathbb{E}(y_0\mid D{=}0)$, since sicker people are the ones who go to the hospital in the first place. The raw comparison conflates $TT$ (the genuine effect of hospitalization on those hospitalized, plausibly positive) with a large negative selectivity bias term, and the latter dominates the sign of the naive comparison entirely.

*Source: Angrist & Pischke (2009), §2.1.*
