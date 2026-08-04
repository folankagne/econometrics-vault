---
title: Adding Controls in RCTs
source: "Econ 2b, Ch.2 Rubin's Causal Model and Randomized Experiments, §Adding Controls in RCTs"
status: enriched
tags:
  - frisch-waugh-theorem
  - precision
  - stratified-estimation
  - heterogeneous-treatment-effects
prerequisites:
  - treatment-effects/randomized-controlled-trials
---
## Controls don't change the estimand...

In an RCT, adding covariates to $y=\alpha+\gamma X+\beta D+u$ does not change what $\hat\beta$ estimates. By the Frisch-Waugh theorem, $\hat\beta$ can equivalently be obtained by first regressing $D$ on $X$ to get residual $\hat r$ ($D=\zeta_0+\zeta_1X+r$), then regressing $y$ on $\hat r$ alone. Since randomization implies $D\perp X$, $\zeta_1=0$ in the population, so $\hat r$ is asymptotically just the demeaned $D$ — meaning $\hat\beta$ with controls is asymptotically equivalent to $\hat\beta$ without them.

## ...but they can increase precision

Comparing the model without controls, $y=\alpha'+\beta'D+u'$ (with $u'=\gamma X+u$), to the model with controls: $\mathbb{V}(u') = \gamma^2\mathbb{V}(X)+\mathbb{V}(u)+2\gamma\,\text{Cov}(X,u)$. Since $u\perp X$ and $u\perp D$ by construction of the regression error, $\text{Cov}(X,u)=0$, so:

$$\mathbb{V}(u') = \gamma^2\mathbb{V}(X) + \mathbb{V}(u) > \mathbb{V}(u)$$

Controls absorb variation in $y$ explained by $X$ but not by $D$, shrinking the residual noise and — without moving the point estimate — tightening the standard error. A smaller standard error means the estimate is less likely to have arisen "by luck" from sampling variability in this particular draw.

## Caveat: controls impose homogeneity and linearity

The controlled model $Y=\alpha+\beta D+X'\gamma+\varepsilon$ silently assumes (i) the treatment effect $\beta$ does **not** vary with $X$, and (ii) $\mathbb{E}(Y\mid X,D)$ is **linear** in $X$. If either fails, the pooled coefficient may not correspond to any well-defined causal parameter.

## A fix: stratified estimation with demeaned interactions

Discretize a control variable into strata — e.g. baseline-score quintiles $Q_k = \mathbf{1}\{\text{in quintile } k\}$ — demean each indicator, $\dot Q_k = Q_k - \bar Q_k$ (with $\bar Q_k = n_k/n$ the stratum's population share), and estimate the fully interacted model (dropping $k{=}1$ to avoid collinearity with the intercept):

$$Y = \alpha + \tau D + \sum_{k=2}^{5}\gamma_k\dot Q_k + \sum_{k=2}^{5}\delta_k(\dot Q_k \times D) + \varepsilon$$

**Why demean?** The individual-level treatment effect is $\tau(i) = \tau + \sum_{k\geq 2}\delta_k\dot Q_{ki}$, so $\tau$ is the effect evaluated at $\dot Q_k=0$ for all $k$. Without demeaning, $Q_k=0$ for all $k\geq 2$ means "individual is in stratum $1$" — so $\tau$ would be the effect for the omitted category *only*. With demeaning, $\dot Q_k=0$ for all $k\geq 2$ means "individual sits at the sample-average position across every stratum indicator" — recentering $\tau$ onto a population-representative point rather than an arbitrary omitted category.

**Formal check.** Substituting the appropriate $\dot Q$ values for each stratum gives $\tau_1 = \tau-\sum_{k\geq2}\delta_k\bar Q_k$ and $\tau_j = \tau+\delta_j-\sum_{k\geq2}\delta_k\bar Q_k$ for $j\geq2$. Taking the population-weighted average $\sum_k(n_k/n)\tau_k$, the $\delta$-terms cancel exactly, leaving:

$$\hat\tau = \sum_{k=1}^{5}\frac{n_k}{n}\hat\tau_k$$

— the coefficient on $D$ recovers the weighted average of within-stratum treatment effects, without ever imposing that the effect is constant across strata. This is the same logic that motivates [conditional average treatment effects](../unconfoundedness-methods/00-overview.md) under weaker-than-experimental settings later in this vault.

Angrist and Pischke (2009, §2.3) note a second, practically important reason to add controls beyond precision: **conditional random assignment**. The STAR design randomized class size *within school*, not across the full sample — students at different schools faced different randomization lotteries, and schools plausibly differ in baseline achievement (urban vs. rural, for instance). Without school fixed effects as controls, a naive pooled comparison risks conflating the causal effect of class size with pre-existing differences in school composition; with them, the comparison is always between students who faced the *same* lottery. This is a case where adding controls is not optional precision-boosting but a technical requirement for the "randomization implies $D\perp X$" argument to hold at all — since assignment was random only *conditional on* school, not unconditionally.

*Source: Angrist & Pischke (2009), §2.3.*
