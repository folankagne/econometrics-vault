---
title: Doubly-Robust Estimation
source: "Econ 2b, Ch.5 Estimation under Unconfoundedness, §Doubly-Robust Estimation"
status: enriched
tags:
  - doubly-robust-estimator
  - propensity-score
  - regression-adjustment
prerequisites:
  - unconfoundedness-methods/inverse-probability-weighting
  - unconfoundedness-methods/regression-and-kernel-based-estimation
---
## Combining regression and IPW

Regression adjustment and [IPW](../unconfoundedness-methods/inverse-probability-weighting.md) each need one model — $g_d(x)$, or $p(x)$ — to be correctly specified. The **doubly-robust** estimator combines both, gaining insurance: it only needs **one** of the two to be right, not both.

## Construction

A key identity: $\mathbb{E}\big[g_1(X_i) - D_ig_1(X_i)/p(X_i)\big] = 0$, since conditioning on $X_i$ makes $g_1(X_i)$ and $p(X_i)$ constants, and $\mathbb{E}[D_i\mid X_i]=p(X_i)$ exactly cancels the denominator. Adding this (algebraically free) zero term to the IPW representation of $\mathbb{E}[Y_i(1)]$:

$$\mathbb{E}[Y_i(1)] = \mathbb{E}\left[\frac{D_i(Y_i-g_1(X_i))}{p(X_i)} + g_1(X_i)\right] \qquad \mathbb{E}[Y_i(0)] = \mathbb{E}\left[\frac{(1-D_i)(Y_i-g_0(X_i))}{1-p(X_i)} + g_0(X_i)\right]$$

giving the **doubly-robust estimator**:

$$\hat\tau_{DR} = \frac{1}{n}\sum_{i=1}^{n}\left[\frac{D_i(Y_i-\hat g_1(X_i))}{\hat p(X_i)} - \frac{(1-D_i)(Y_i-\hat g_0(X_i))}{1-\hat p(X_i)} + \hat g_1(X_i)-\hat g_0(X_i)\right]$$

## The double robustness property

$\hat\tau_{DR}$ is consistent for the ATE if **either**: the outcome model is correctly specified ($\hat g_d\to g_d$), *even if* the propensity score model is wrong; **or** the propensity score model is correctly specified ($\hat p\to p$), *even if* the outcome model is wrong. Only one needs to be right.

**Proof sketch (outcome model correct, propensity score misspecified as $q(x)\neq p(x)$).** The estimator converges to $\mathbb{E}\big[D_i(Y_i-g_1(X_i))/q(X_i) + g_1(X_i)\big]$. The first term's inner conditional expectation is $\mathbb{E}[D_i(Y_i-g_1(X_i))\mid X_i] = \mathbb{E}[D_iY_i(1)\mid X_i] - g_1(X_i)p(X_i)$; by CIA, $\mathbb{E}[D_iY_i(1)\mid X_i]=p(X_i)g_1(X_i)$, so this difference is **exactly zero regardless of what $q(X_i)$ is** — the misspecified propensity score never even gets the chance to matter, because it multiplies something that is already zero in expectation. What survives is $\mathbb{E}[g_1(X_i)] = \mathbb{E}[Y_i(1)]$, the correct answer.

## Why this matters in practice

Parametric assumptions about either $g_d(x)$ or $p(x)$ are routinely wrong to some degree. The doubly-robust estimator provides a genuine hedge: it remains consistent as long as *at least one* of the two auxiliary models happens to be correct, rather than requiring both simultaneously — a materially weaker, more realistic requirement than either regression adjustment or IPW demand on their own.

Cunningham (2021, Ch.5) presents this as the natural response to a real practical dilemma: an applied researcher facing the LaLonde-style comparison-group problem rarely knows in advance whether their outcome model or their propensity-score model is closer to correctly specified. Rather than betting entirely on one (as pure regression adjustment or pure IPW each implicitly does), the doubly-robust estimator hedges the bet — which is precisely why it, and its machine-learning-augmented descendant [DML](../unconfoundedness-methods/double-debiased-machine-learning.md), have become the default recommendation in modern applied practice for unconfoundedness-based estimation.

*Source: Cunningham (2021), Ch.5.*
