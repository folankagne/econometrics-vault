---
title: Slutsky's Theorem
source: "Econ 1, Lecture Notes, §Basic Tools for the asymptotic world › Statistical Inference: Asymptotic distributions"
status: enriched
tags:
  - slutskys-theorem
  - convergence-in-distribution
  - convergence-in-probability
  - residuals
prerequisites:
  - asymptotic-theory/convergence-in-distribution-and-the-central-limit-theorem
---
## Statement

The [LLN](../asymptotic-theory/law-of-large-numbers.md) and the [CLT](../asymptotic-theory/convergence-in-distribution-and-the-central-limit-theorem.md) describe the asymptotic behavior of a single sequence of random variables. **Slutsky's theorem** extends this to combinations of two sequences with different modes of convergence. Let $x_n \overset{\mathcal{L}}{\to} x$ (convergence in distribution) and $y_n \overset{\mathbb{P}}{\to} a$ (convergence in probability, to a constant). Then:

$$x_n y_n \overset{\mathcal{L}}{\to} xa \qquad\qquad x_n + y_n \overset{\mathcal{L}}{\to} x + a \qquad\qquad \frac{x_n}{y_n} \overset{\mathcal{L}}{\to} \frac{x}{a} \ \ (a \neq 0)$$

Informally, a sequence converging to a *constant* behaves, for the purposes of these operations, just like that constant when combined with a sequence converging in distribution.

## Application: OLS residuals converge to the true noise, conditionally

For the model $y_i = \mathbf{x}_i\mathbf{b} + u_i$, suppose $\hat{\mathbf{b}}_{OLS} \overset{\mathbb{P}}{\to} \mathbf{b}$ (OLS is [consistent](../asymptotic-theory/convergence-in-probability-and-consistency.md)). Then the estimated residual converges in distribution to the true noise:

$$\hat{u}_i^{OLS} \mid x_i = y_i - \mathbf{x}_i\hat{\mathbf{b}}_{OLS} \overset{\mathcal{L}}{\longrightarrow} y_i - \mathbf{x}_i\mathbf{b} = u_i$$

This is genuinely useful: the true noise is part of the (unknown) true DGP and is never directly observed, yet consistency of $\hat{\mathbf{b}}_{OLS}$ guarantees the *estimated* residuals behave, asymptotically, like the true noise.

> The converse illustrates why identification must come first. If $\hat{\mathbf{b}}_{OLS}$ does **not** converge to the true $\mathbf{b}$ but instead to some other value $\mathbf{k} \neq \mathbf{b}$, then $\hat{u}_i^{OLS}\mid x_i \overset{\mathcal{L}}{\to} y_i - \mathbf{x}_i\mathbf{k} \neq u_i$: the estimated residuals converge to a random variable unrelated to the true noise. No amount of sample size fixes an estimator that targets the wrong parameter — exactly the [identification comes first](../foundations/identification-and-statistical-inference.md) principle, restated in asymptotic terms.

## The workhorse combination: a plim times an asymptotically normal term

The specific Slutsky pattern used throughout this vault's asymptotic derivations — e.g. in proving the [CAN property of OLS](../asymptotic-theory/asymptotic-distribution-of-ols-can.md) — is $x_n \overset{\mathcal{L}}{\to} \mathcal{N}(0,\sigma^2\mathbf{Q})$ combined with a matrix sequence $\mathbf{A}_n \overset{\mathbb{P}}{\to} \mathbf{Q}^{-1}$, giving $\mathbf{A}_n x_n \overset{\mathcal{L}}{\to} \mathbf{Q}^{-1}\mathcal{N}(0,\sigma^2\mathbf{Q})$. Wooldridge (2016, Appendix 5A) uses exactly this device to sketch the asymptotic normality proof: the sample second-moment matrix $n^{-1}\sum_i \mathbf{x}_i'\mathbf{x}_i$ converges in probability to a constant matrix $\mathbf{Q}$ by the LLN, while the appropriately scaled score term converges in distribution to a normal random vector by the CLT; Slutsky's theorem is precisely what licenses combining a plim (from the LLN) with a convergence in distribution (from the CLT) into a single limiting distribution for the product — without it, the two separate asymptotic results could not legitimately be combined.

*Source: Wooldridge (2016), Appendix 5A.*
