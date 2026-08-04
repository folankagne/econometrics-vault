---
title: Incorporating Covariates into Partial-Identification Bounds
source: "Econ 2b, Ch.8 Partial Identification, §Using Covariates"
status: enriched
tags:
  - horowitz-manski-bounds
  - lee-bounds
  - covariates
prerequisites:
  - partial-identification/length-of-horowitz-manski-bounds
  - partial-identification/lee-bounds
---
## Setup

Adding discrete pre-treatment covariates $X$, with full independence $D\perp(Y(1),Y(0),S(1),S(0),X)$ (random assignment holding unconditionally, not merely given $X$).

## Manski bounds: conditioning on X doesn't help

Construct $x$-specific HM bounds $\mathbb{E}[Y(d)\mid X{=}x]\in[\underline\mu(d,x),\overline\mu(d,x)]$, then integrate out via the law of iterated expectations, $\mathbb{E}[Y(d)] = \sum_x\mathbb{E}[Y(d)\mid X{=}x]P(X{=}x)$. **This produces exactly the same bound as never conditioning on $X$ at all.** Proof sketch: expanding $\sum_x\underline\mu(d,x)P(X{=}x)$ and using $D\perp X$ (so $P(X{=}x\mid D{=}d)=P(X{=}x)$) to recombine terms, the sum collapses back to $\underline\mu(d) = \mathbb{E}[Y\mid D{=}d,S{=}1]P(S{=}1\mid D{=}d) + \underline y\,P(S{=}0\mid D{=}d)$ — the plain marginal HM bound. **Conditioning on covariates and then averaging back out is a no-op for Horowitz-Manski.**

## Lee bounds: conditioning on X does help

The same is **not** true for Lee bounds. The trimming fraction $p_c$ can vary with $x$, since the selection probabilities $P(S{=}1\mid D{=}1,X{=}x)$ and $P(S{=}1\mid D{=}0,X{=}x)$ generally differ across covariate values. When $p_c(x)$ varies, computing Lee bounds **within each cell** $X{=}x$ and then averaging is strictly tighter than trimming the pooled, marginal distribution of $Y\mid S{=}1,D{=}1$. The reason is that quantile trimming is a **nonlinear** operation on a distribution — by Jensen's-inequality-style reasoning, averaging cell-level sharp bounds (each correctly calibrated to its own local $p_c(x)$) can only be at least as tight as applying one aggregate trimming rule across a pooled, more heterogeneous distribution. Pooling forces a single trim threshold onto cells that actually need different ones, systematically over-trimming some and under-trimming others.

> **Practical implication.** With Lee bounds, condition on available pre-treatment covariates whenever $p_c$ plausibly varies with $X$ — the payoff is real: cells with low local selection ($p_c(x)$ small) contribute narrow, informative bounds, and averaging across cells improves overall precision. With Horowitz-Manski bounds, this exercise is pointless — the marginal bound is already the best that construction can deliver, regardless of how finely $X$ is sliced.

This asymmetry is a useful diagnostic in its own right: if a researcher finds that covariate-conditioned and marginal Horowitz-Manski bounds coincide (as the result above guarantees they must), that is not evidence the covariates are uninformative about selection — it simply reflects the linearity of the HM construction. The genuinely informative check is whether covariate-conditioned *Lee* bounds tighten meaningfully relative to the marginal Lee bound; a large improvement signals that selection probabilities vary substantially with $X$, which is itself useful descriptive information about who is at risk of attrition.

*Source: Lee (2009); Horowitz & Manski (2000).*
