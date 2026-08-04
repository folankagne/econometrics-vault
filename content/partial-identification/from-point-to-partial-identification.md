---
title: From Point to Partial Identification
source: "Econ 2b, Ch.8 Partial Identification, §Motivation, §Setup, §From Point to Partial Identification"
status: enriched
tags:
  - partial-identification
  - identified-set
  - attrition
  - sample-selection
prerequisites:
  - treatment-effects/randomized-controlled-trials
---
## Learning something without a selection model

Every unconfoundedness- or instrument-based approach so far has required *some* assumption on the selection mechanism — random conditional on observables, or an instrument satisfying exclusion. Horowitz and Manski (2000) and Lee (2009) ask a more basic question: what can be learned about a treatment effect **without any** parametric assumption on selection at all? The answer is not a point estimate but an **identified set** — a range of values consistent with the data and whatever (possibly minimal) assumptions are actually imposed. This is **partial identification**.

## The running example: attrition in an experiment

A randomized job-training experiment: $D\in\{0,1\}$ treatment, $Y$ the outcome (e.g. employment), $S\in\{0,1\}$ whether $Y$ is actually observed (e.g. survey response). Randomization gives $D\perp(Y(1),Y(0))$ — there is no *confounding* problem — but $S$ is not necessarily independent of $D$: some units simply never have their outcome recorded, and **attrition** need not be random.

Under random assignment, $\text{ATE} = \mathbb{E}[Y(1)-Y(0)] = \mathbb{E}[Y\mid D{=}1]-\mathbb{E}[Y\mid D{=}0]$ — but this uses $\mathbb{E}[Y\mid D{=}d]$ over the *whole* population, while the data only ever delivers $\mathbb{E}[Y\mid D{=}1,S{=}1]-\mathbb{E}[Y\mid D{=}0,S{=}1]$. The two coincide **only if** $S\perp D$ (attrition is completely random) — without that assumption, the naive comparison need not have any causal interpretation at all.

**Numerical illustration.** 100 individuals per arm; $D{=}1$: 80 respond, 48 employed; $D{=}0$: 90 respond, 45 employed. The observed difference is $48/80-45/90 = 0.6-0.5=0.1$ — a valid point estimate of the ATE *only if* attrition is random, and otherwise just one number among many consistent with the data.

## The identified set

For a parameter $\theta=\mathbb{E}[Y(1)-Y(0)]$, the **identified set** is $\Theta_I = \{\theta_0\in\mathbb{R}: \theta_0 \text{ is compatible with the data and maintained assumptions}\}$, with lower/upper bounds $\theta_{lb}=\min\Theta_I$, $\theta_{ub}=\max\Theta_I$.

Without attrition (or with $S\equiv1$), random assignment alone makes $\Theta_I$ a single point — **point identification**, business as usual. With attrition, neither $\mathbb{E}[Y\mid D{=}1]$ nor $\mathbb{E}[Y\mid D{=}0]$ equals its $S{=}1$-conditional counterpart, since non-respondents' outcomes are simply missing — $\Theta_I$ becomes a genuine **interval**, and getting a *useful* (non-trivial) interval requires further assumptions. Two approaches follow: [Horowitz-Manski bounds](../partial-identification/horowitz-manski-bounds.md), which add nothing beyond the known support of $Y$, and [Lee bounds](../partial-identification/lee-bounds.md), which add a monotonicity assumption on selection in exchange for substantially tighter intervals.

Manski's own framing of this research program (Manski, 1990, "Nonparametric Bounds on Treatment Effects") is that point identification is often purchased with assumptions no more credible than the data can bear — an analyst who is only willing to assume what the data and design genuinely support should expect an interval, not a point, and treating that interval honestly is preferable to imposing an assumption strong enough to collapse it to a point but too strong to defend. Partial identification formalizes this "honest reporting" instinct into an actual estimation framework, rather than treating a wide confidence interval on a point estimate as the only available way to communicate uncertainty.

*Source: Manski (1990); Horowitz & Manski (2000); Lee (2009).*
