---
title: Relevance and Monotonicity (Generalized IV)
source: "Econ 2b, Ch.3 Instrumental Variables, §Five Key Assumptions for IV with Heterogeneous Effects (4-5)"
status: enriched
tags:
  - monotonicity
  - relevance-condition
  - late
  - defiers
prerequisites:
  - instrumental-variables/sutva-and-exclusion-restriction-for-late
---
## Assumption 4: relevance

$$\mathbb{E}\big(D_i(1)-D_i(0)\big) \neq 0$$

There must be a genuine first stage: assignment must actually move the average treatment rate — equivalent to $\text{Cov}(Z_i,D_i)\neq 0$ in the earlier, simpler IV treatment.

## Assumption 5: monotonicity

$$D_i(1) \geq D_i(0) \quad \forall i$$

The instrument's effect runs the same direction for everyone — nobody is pushed *away* from treatment by an instrument designed to encourage it. This is the genuinely "new" assumption Angrist, Imbens, and Rubin (1996) introduce to make sense of IV under heterogeneous effects: **monotonicity is equivalent to the absence of defiers** in the population.

Monotonicity has three properties worth internalizing together: an individual's *type* is itself never identified (the same fundamental identification problem encountered for potential outcomes generally, now applied to potential *treatment statuses*); monotonicity is **not directly testable**, since testing it would require observing both $D_i(0)$ and $D_i(1)$ for the same person; yet **conditional on monotonicity holding**, the population *shares* of compliers, always-takers, and never-takers are identified — a share is estimable even though no individual's type ever is.

## When does monotonicity plausibly hold?

It holds **by construction** in encouragement designs where the control group has literally no access to treatment (nobody in the control arm can become an always-taker or a defier with respect to that channel). It is **likely to hold** whenever the instrument moves everyone's incentive to take treatment in one clear direction — e.g. an instrument that uniformly lowers the cost of access. It **may fail** when the instrument affects access through multiple mechanisms that can operate in opposite directions for different people.

> **Example — the same-sex instrument.** To study the effect of fertility on labor supply, researchers instrument having a third child with whether the first two children were the same sex. But this instrument can cut both ways: having two boys **increases** the probability of a third child for parents with a preference for a mixed-sex family, while **decreasing** it for parents who specifically wanted a boy. The instrument creates both compliers *and* defiers simultaneously — monotonicity fails, and the resulting IV estimate no longer has a clean LATE interpretation.

Angrist and Pischke (2009, §4.4.1) note that monotonicity "plays no role in the traditional simultaneous-equations framework with constant effects" — it is a genuinely new assumption required *only* once effects are allowed to be heterogeneous, with no analogue in the basic-IV entries earlier in this folder. They also flag the draft lottery as a case where monotonicity is essentially guaranteed by design: draft-eligibility status is a binding constraint on service for the vast majority, so there is no plausible mechanism by which becoming draft-eligible would make someone *less* likely to serve — a useful contrast to the same-sex instrument, where the direction of the effect is inherently ambiguous across subgroups with different sibling-composition preferences.

*Source: Angrist & Pischke (2009), §4.4.1; Imbens & Angrist (1994); Angrist, Imbens & Rubin (1996).*
