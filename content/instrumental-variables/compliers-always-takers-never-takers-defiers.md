---
title: "Compliers, Always-Takers, Never-Takers, and Defiers"
source: "Econ 1, Lecture Notes, §Where does identification come from?"
status: enriched
tags:
  - compliance-types
  - monotonicity
  - potential-outcomes
  - instrumental-variables
prerequisites:
  - instrumental-variables/wald-estimator
  - causal-inference-foundations/rubins-causal-model
---
## Potential values of the endogenous regressor

Where does IV identification actually come from at the individual level? Applying the [potential outcomes framework](../causal-inference-foundations/rubins-causal-model.md) to the *regressor itself* (not just the outcome): for a binary endogenous regressor $s_i$ and binary instrument $z_i^e$, define potential regressor values $s_{0i}$ (value of $s_i$ if $z_i^e=0$) and $s_{1i}$ (value if $z_i^e=1$). The realized regressor is $s_i = s_{0i}$ or $s_{1i}$ depending on the instrument actually received.

## Four latent subgroups

Every individual falls into one of four (unobserved) types, cross-classifying $s_{0i}$ and $s_{1i}$:

| | $s_{1i}=0$ | $s_{1i}=1$ |
|---|:---:|:---:|
| **$s_{0i}=0$** | Never-taker | Complier |
| **$s_{0i}=1$** | Defier | Always-taker |

**Never-takers** ($s_{0i}=s_{1i}=0$) never take the treatment regardless of the instrument — e.g., never attend college whether born early or late in the year. **Always-takers** ($s_{0i}=s_{1i}=1$) always take it regardless. **Compliers** ($s_{0i}=0, s_{1i}=1$) take the treatment only when the instrument pushes them to. **Defiers** ($s_{0i}=1, s_{1i}=0$) do the opposite of what the instrument encourages.

## Only compliers drive identification

Among these four types, only **compliers** have regressor variation that is actually correlated with the instrument — never-takers and always-takers show no variation in $s_i$ at all as $z^e$ changes, and defiers move in the "wrong" direction. IV identification is therefore inherently about compliers, not the whole population.

## The monotonicity assumption

Isolating the complier-driven variation requires ruling out defiers:

$$A_3^{IV} \text{ (Monotonicity):}\ \text{there are no defiers in the population}$$

The four types are never directly observed — only the realized $s_i$ and $z_i^e$ are. But $A_1^{IV}$ (instrument uncorrelated with unobservables) implies the instrument splits the population into two comparable groups. Within the $z^e=0$ group, individuals with $s_i=1$ are either always-takers or defiers; within the $z^e=1$ group, individuals with $s_i=0$ are either never-takers or defiers. If monotonicity holds, the first group's $s_i=1$ individuals must be always-takers (no defiers to muddy the count), and the second group's $s_i=0$ individuals must be never-takers — since the two instrument groups are otherwise comparable, this pins down the population shares of always-takers and never-takers, and therefore of compliers by subtraction. Without monotonicity, this accounting breaks down and the four groups cannot be disentangled.

## Special cases: designs with no never-takers or no always-takers

Angrist and Pischke (2009, §4.4.2) highlight an important special case where LATE happens to coincide with a more familiar parameter: when an instrument allows **no always-takers**, LATE equals the effect of treatment on the treated; when it allows **no never-takers**, LATE equals the effect of treatment on the non-treated. Both cases arise naturally in practice. The **twins instrument** for fertility (a multiple second birth) has essentially no never-takers among women who wanted a third child anyway and no always-takers among those who didn't — but because *every* mother who has a multiple second birth ends up with (at least) three children regardless of preference, there are no never-takers with respect to the third-child margin, so the twins-based LATE equals the average effect on women who would otherwise have stopped at two children. Oreopoulos's (2006) British compulsory-schooling-age study is the mirror case: because compliance with the law change from 14 to 15 was "near perfect," essentially everyone who would have left school at 14 stayed the extra year — no never-takers — so his IV estimate captures the average causal effect of an extra year of schooling on precisely the population that would otherwise have dropped out early, a group of particular policy interest.

*Source: Angrist & Pischke (2009), §4.4.2; Angrist & Evans (1998); Oreopoulos (2006).*
