---
title: SUTVA, Random Assignment, and the Exclusion Restriction (Generalized IV)
source: "Econ 2b, Ch.3 Instrumental Variables, §Five Key Assumptions for IV with Heterogeneous Effects (1-3)"
status: enriched
tags:
  - sutva
  - exclusion-restriction
  - potential-outcomes
  - late
prerequisites:
  - instrumental-variables/decomposing-the-first-stage-and-itt
  - causal-inference-foundations/rubins-causal-model
---
## Generalized potential outcomes

Following Angrist, Imbens, and Rubin (1996), let $D_i = D_i(\mathbf{Z})$ and $Y_i = Y_i(\mathbf{Z},\mathbf{D})$, where $\mathbf{Z}$ and $\mathbf{D}$ are the *entire population's* assignment and treatment vectors — in principle, $i$'s treatment and outcome could depend on everyone's assignment, not just their own (spillovers, general equilibrium effects). Making this explicit sets up exactly what needs to be ruled out.

## Assumption 1: SUTVA

$$D_i(\mathbf{Z}) = D_i(\mathbf{Z}') \text{ if } Z_i=Z_i' \qquad\qquad Y_i(\mathbf{Z},\mathbf{D}) = Y_i(\mathbf{Z}',\mathbf{D}') \text{ if } Z_i=Z_i' \text{ and } D_i=D_i'$$

The **Stable Unit Treatment Value Assumption** rules out spillovers: only $i$'s own assignment and treatment status matter for $i$'s own potential outcomes, collapsing the notation to $D_i = D_i(Z_i)$ and $Y_i = Y_i(Z_i,D_i)$.

## Assumption 2: random assignment — on potential, not observed, treatment

$$Z_i \perp \big(D_i(0),D_i(1),Y_i(0,0),Y_i(0,1),Y_i(1,0),Y_i(1,1)\big)$$

> A subtlety worth dwelling on: random assignment does **not** imply $Z_i\perp D_i$ — in fact, the entire point of an instrument is that $Z_i$ *does* affect $D_i$ (there must be a first stage). The switching equation $D_i = (1-Z_i)D_i(0)+Z_iD_i(1)$ makes $D_i$ mechanically a function of $Z_i$, so *observed* treatment is correlated with $Z_i$ by construction. What randomization requires is independence at the level of **potential** treatment and outcomes: an individual's underlying *type* (always-taker, never-taker, complier, defier) is independent of which assignment they happen to draw.

Combined with SUTVA, this lets the first stage and ITT be written as simple mean comparisons — exactly the derivations in [decomposing the first stage and the ITT](../instrumental-variables/decomposing-the-first-stage-and-itt.md).

## Assumption 3: exclusion restriction

$$Y_i(0,1) = Y_i(1,1) \equiv Y_{i1} \qquad\qquad Y_i(0,0) = Y_i(1,0) \equiv Y_{i0}$$

Without this assumption, each individual has **four** potential outcomes $Y_i(z,d)$ for $(z,d)\in\{0,1\}^2$ — the outcome could depend on assignment *and* treatment status separately. The exclusion restriction collapses these four into **two**, $Y_{i1}$ and $Y_{i0}$, by requiring that for a given treatment level $d$, assignment $z$ makes no further difference: $Z_i$ "drops out" once $D_i$ is conditioned on. Only with this restriction is the individual treatment effect $\Delta_i \equiv Y_{i1}-Y_{i0}$ even **well-defined** — without it, $Y_i(0,1)$ could differ from $Y_i(1,1)$, and there is no unambiguous "effect of treatment" to speak of.

## How this decomposes the old single IV assumption

The earlier, non-potential-outcomes treatment of IV used one condition, $\text{Cov}(Z_i,u_i)=0$, in $Y_i=\alpha+\beta D_i+u_i$. That single condition actually bundled two conceptually distinct ideas, now separated explicitly:

- **Exogeneity** ("$Z$ is as good as randomly assigned," no confounding) → **random assignment** here, and in fact a *stronger* requirement, since full independence implies zero covariance but not the reverse.
- **Exclusion** ("$Z$ affects $Y$ only through $D$") → the **exclusion restriction** here, stated directly on potential outcomes rather than folded into an error term.

Separating them clarifies exactly what could go wrong with a candidate instrument — a spillover violates SUTVA, a confound violates random assignment, a direct channel to $Y$ violates exclusion — and makes each failure mode separately identifiable in a way the single bundled condition never could.

Angrist and Pischke (2009, §4.4.1) present this potential-outcomes notation — $Y_i(d,z)$ indexed against both treatment and instrument value — as the natural generalization of the constant-effects setup from earlier in the chapter, needed precisely because a heterogeneous-effects model can no longer be summarized by a single error term $\eta_i$. Their draft-lottery illustration of a plausible exclusion violation is concrete: Angrist and Krueger (1992) checked whether draft-eligibility affected earnings through education (low lottery numbers inducing educational deferments, hence more schooling, hence higher earnings through a channel other than military service) — a real threat to exclusion, in the end judged empirically small since eligibility turned out to have little detectable relationship with schooling in their data, but a reminder that exclusion is a substantive claim to be checked, not a formality.

*Source: Angrist & Pischke (2009), §4.4.1; Angrist, Imbens & Rubin (1996).*
