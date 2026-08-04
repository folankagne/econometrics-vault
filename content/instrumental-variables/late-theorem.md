---
title: The LATE Theorem
source: "Econ 2b, Ch.3 Instrumental Variables, §Identification of Key Quantities"
status: enriched
tags:
  - late-theorem
  - wald-estimator
  - compliers
  - local-average-treatment-effect
prerequisites:
  - instrumental-variables/monotonicity-and-relevance-for-late
  - instrumental-variables/sutva-and-exclusion-restriction-for-late
---
## Step 1: the complier share is identified

Under SUTVA, random assignment, and monotonicity, compliers are exactly those with $D_i(1)-D_i(0)=1$, an indicator variable (since $D_i(z)\in\{0,1\}$). Its expectation is directly its probability:

$$\Pr(\text{Complier}) = \mathbb{E}\big(D_i(1)-D_i(0)\big) = \mathbb{E}(D_i(1)) - \mathbb{E}(D_i(0)) \overset{\text{rand. assign.}}{=} \mathbb{E}(D_i\mid Z_i{=}1) - \mathbb{E}(D_i\mid Z_i{=}0)$$

exactly the first stage, as already used in [decomposing the first stage and the ITT](../instrumental-variables/decomposing-the-first-stage-and-itt.md).

## Step 2: the ITT is driven only by compliers

Decompose $\mathbb{E}(Y\mid Z{=}1)$ by compliance type (random assignment makes type independent of $Z$, so $\Pr(T\mid Z{=}1)=\Pr(T)$), then use each type's defining property together with the exclusion restriction: always-takers have $D_i(1)=D_i(0)=1$, so their contribution is $Y_{i1}$ regardless of $Z$; never-takers have $D_i(1)=D_i(0)=0$, contributing $Y_{i0}$ regardless of $Z$; only compliers switch between $Y_{i0}$ (at $Z{=}0$) and $Y_{i1}$ (at $Z{=}1$). The always-taker and never-taker terms are therefore identical in $\mathbb{E}(Y\mid Z{=}1)$ and $\mathbb{E}(Y\mid Z{=}0)$ and cancel exactly on subtraction, leaving:

$$\mathbb{E}(Y\mid Z{=}1)-\mathbb{E}(Y\mid Z{=}0) = \mathbb{E}(Y_{i1}-Y_{i0}\mid \text{Complier})\cdot\Pr(\text{Complier})$$

## Step 3: the LATE theorem

Combining Steps 1 and 2, and dividing by the (nonzero, under relevance) first stage:

$$\Delta_{Wald} = \frac{\mathbb{E}(Y\mid Z{=}1)-\mathbb{E}(Y\mid Z{=}0)}{\mathbb{E}(D\mid Z{=}1)-\mathbb{E}(D\mid Z{=}0)} = \mathbb{E}(Y_1-Y_0\mid\text{Complier})$$

Under **SUTVA, random assignment, exclusion, relevance, and monotonicity**, the Wald estimand identifies the **Local Average Treatment Effect (LATE)** — the average treatment effect *among compliers*, and nothing more general than that.

## Not every step needs every assumption

The five assumptions are not all needed for every quantity along the way:

- **The ITT itself** requires only SUTVA and random assignment — no exclusion, monotonicity, or relevance needed. $\text{ITT} = \mathbb{E}(Y\mid Z{=}1)-\mathbb{E}(Y\mid Z{=}0)$ is a well-defined causal effect of $Z$ on $Y$ regardless.
- **Decomposing the ITT by compliance type** additionally requires the exclusion restriction and monotonicity, since without exclusion the cancellation of always-taker/never-taker terms fails, and without monotonicity a defier term survives with the wrong sign (see [consequences of the LATE reinterpretation](../instrumental-variables/consequences-of-late.md)).
- **The LATE (Wald) interpretation** requires all five: relevance is what makes the division valid in the first place.

> IV identifies effects **on compliers**, full stop — this generalizes well beyond the simple Wald estimator to every instrumental-variables estimator built on this logic. The complier population itself is defined *by the instrument used*: a different valid instrument identifies a different LATE, over a different (and generally overlapping but non-identical) complier subpopulation.

## LATE in a randomized trial with one-sided non-compliance

Angrist and Pischke (2009, §4.4.3, Theorem 4.4.1) present this result as directly bridging IV back to experiments: when the instrument $Z_i$ is literal random assignment to a treatment offer and $D_i$ is whether treatment was actually received, and when the design has **one-sided non-compliance** — no one in the control group can access treatment, so there are no always-takers — LATE collapses to the **effect of treatment on the treated**, since everyone who ends up treated is a complier by construction. Their example is the JTPA (Job Training Partnership Act) evaluation: only 60% of those randomly assigned to training actually received it, while roughly 2% of the control group received training anyway (through some other channel) — close enough to one-sided that LATE is interpreted essentially as the effect on those who took up the offer. This is the direct link between the [statistical cost of non-compliance](../treatment-effects/the-statistical-cost-of-non-compliance.md) in randomized trials and the LATE machinery developed here: IV/Wald estimation is not a separate observational-data technique bolted onto experiments, it is *the* correct way to analyze an RCT with imperfect compliance.

*Source: Angrist & Pischke (2009), §4.4.3, Theorem 4.4.1; Imbens & Angrist (1994).*
