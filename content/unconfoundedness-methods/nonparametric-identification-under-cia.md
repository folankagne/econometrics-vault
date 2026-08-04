---
title: Nonparametric Identification under the CIA
source: "Econ 2b, Ch.5 Estimation under Unconfoundedness, §The Unconfoundedness Assumption, §Relation to Experimental Independence, §Nonparametric Identification under CIA"
status: enriched
tags:
  - unconfoundedness
  - conditional-independence-assumption
  - overlap
  - selection-on-observables
prerequisites:
  - unconfoundedness-methods/conditional-independence-assumption
  - treatment-effects/the-selectivity-problem
---
## The unconfoundedness assumption

When no experiment is possible, the **unconfoundedness assumption** — also called the Conditional Independence Assumption (CIA), **ignorability**, or **selection on observables** — is often the only route to a causal estimate from observational (i.i.d., binary-treatment) data:

$$Y_i(1), Y_i(0) \perp D_i \mid X_i$$

Unlike a randomization check, this assumption is **not testable** from data alone — it requires substantive knowledge of how treatment was actually assigned, and its plausibility is entirely context-specific.

## From unconditional to conditional independence

A randomized experiment delivers the *stronger*, unconditional version, $Y_i(1),Y_i(0)\perp D_i$, under which $\tau \equiv \mathbb{E}[Y_i(1)-Y_i(0)] = \mathbb{E}[Y_i\mid D_i{=}1]-\mathbb{E}[Y_i\mid D_i{=}0]$ directly (independence lets potential outcomes be swapped for conditional-on-$D$ expectations; consistency — $Y_i = D_iY_i(1)+(1-D_i)Y_i(0)$ — lets those be swapped for the observed $Y_i$). Unconfoundedness **relaxes** this to hold only *within* strata of observed covariates $X_i$ — the identifying claim becomes local to each covariate value rather than global.

## Identification of the ATE

$$\mathbb{E}[Y_i(1)-Y_i(0)] = \mathbb{E}\Big[\mathbb{E}[Y_i\mid X_i,D_i{=}1] - \mathbb{E}[Y_i\mid X_i,D_i{=}0]\Big]$$

**Proof.** By the law of iterated expectations, $\mathbb{E}[Y_i(1)-Y_i(0)] = \mathbb{E}\big[\mathbb{E}[Y_i(1)-Y_i(0)\mid X_i]\big]$. By linearity, split into $\mathbb{E}[Y_i(1)\mid X_i]-\mathbb{E}[Y_i(0)\mid X_i]$. By the CIA, $\mathbb{E}[Y_i(d)\mid X_i] = \mathbb{E}[Y_i(d)\mid X_i,D_i{=}d]$ for $d\in\{0,1\}$. By consistency, $\mathbb{E}[Y_i(d)\mid X_i,D_i{=}d] = \mathbb{E}[Y_i\mid X_i,D_i{=}d]$.

## Overlap / common support

This is only well-defined if both conditional expectations exist for every relevant $x$, which requires the **overlap assumption**:

$$0 < \Pr(D_i{=}1\mid X_i{=}x) < 1 \quad \text{for all } x$$

Without overlap, some covariate values have no treated (or no untreated) comparison units at all — there is simply nothing to compare for those individuals, and causal inference at that $x$ is impossible regardless of how large the sample is.

Cunningham (2021, Ch.5) is explicit that unconfoundedness is best thought of as a spectrum of credibility rather than a binary switch: it is most persuasive when the assignment mechanism is itself institutionally documented (his lottery-winner and voluntary-enlistment examples, developed in [interpretation and examples of unconfoundedness](../unconfoundedness-methods/interpretation-and-examples-of-unconfoundedness.md)) and least persuasive when $X_i$ is simply "whatever covariates happen to be in the dataset" with no substantive argument for why they exhaust every confounding channel — precisely the failure mode of LaLonde's original CPS/PSID comparisons.

*Source: Cunningham (2021), Ch.5.*
