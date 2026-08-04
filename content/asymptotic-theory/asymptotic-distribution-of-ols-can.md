---
title: "The OLS Estimator Is CAN (Consistent and Asymptotically Normal)"
source: "Econ 1, Lecture Notes, §Asymptotic distributions of the OLS Estimator"
status: enriched
tags:
  - consistency
  - asymptotic-normality
  - can-estimator
  - law-of-large-numbers
  - central-limit-theorem
prerequisites:
  - asymptotic-theory/law-of-large-numbers
  - asymptotic-theory/convergence-in-distribution-and-the-central-limit-theorem
  - ols-estimation/unbiasedness-of-ols
  - ols-estimation/finite-sample-variance-of-ols
---
## Motivation: dropping normality

[Sampling distribution of OLS under normality](../ols-estimation/sampling-distribution-of-ols-under-normality.md) relied on $A_5^{OLS}$: that each individual's noise is exactly normally distributed. This is a strong assumption about a quantity — the true noise — that is never observed. Asymptotic theory replaces it: rather than assuming a distribution for the noise outright, large-sample results are used to approximate the sampling distribution of $\hat{\mathbf{b}}_{OLS}$ as $N \to \infty$, without ever specifying the shape of the noise's own distribution.

## Assumption A5′: a well-behaved regressor second moment

Starting from $\hat{\mathbf{b}}_{OLS} - \mathbf{b} = \big(\frac{1}{N}\sum_i \mathbf{x}_i'\mathbf{x}_i\big)^{-1}\big(\frac{1}{N}\sum_i \mathbf{x}_i' u_i\big)$ (the $1/N$ factors are inserted deliberately — they cancel algebraically but let the [LLN](../asymptotic-theory/law-of-large-numbers.md) be applied directly), a milder replacement for normality is introduced:

$$A_{5'}^{OLS}: \ \text{plim}\left(\frac{1}{N}\sum_{i=1}^{N} \mathbf{x}_i'\mathbf{x}_i\right) = \mathbb{E}(\mathbf{x}_i'\mathbf{x}_i) = \mathbf{Q}, \quad \mathbf{Q} \text{ invertible}$$

This only requires the sample second-moment matrix of the regressors to converge (by the LLN) to a well-defined, invertible population matrix $\mathbf{Q}$ — nothing is assumed about the distribution of $u_i$ itself.

## The CAN proposition

Under $A_1^{OLS}$–$A_{5'}^{OLS}$, the OLS estimator is **CAN**: Consistent and Asymptotically Normal.

$$\textbf{Consistent:} \quad \text{plim}\,\hat{\mathbf{b}}_{OLS} = \mathbf{b} \qquad\qquad \textbf{Asymptotically Normal:} \quad \sqrt{N}(\hat{\mathbf{b}}_{OLS} - \mathbf{b}) \xrightarrow{\mathcal{L}} \mathcal{N}(0, \sigma^2\mathbf{Q}^{-1})$$

## Proof sketch

**Moments of $\mathbf{x}_i'u_i$.** By $A_3^{OLS}$, $\mathbb{E}(\mathbf{x}_i'u_i) = \mathbb{E}_x[\mathbf{x}_i'\,\mathbb{E}(u_i\mid \mathbf{x}_i)] = 0$. By the law of total variance and $A_4^{OLS}$ (spherical disturbances), $\mathbb{V}(\mathbf{x}_i'u_i) = \mathbb{E}_x[\mathbb{V}(\mathbf{x}_i'u_i\mid\mathbf{x}_i)] = \mathbb{E}_x[\sigma^2 \mathbf{x}_i'\mathbf{x}_i] = \sigma^2\mathbf{Q}$ under $A_{5'}^{OLS}$. Since neither moment depends on $i$, $\mathbf{x}_i'u_i$ is an i.i.d. sequence — exactly what the LLN and CLT require.

**Consistency.** Applying the LLN separately to $\frac{1}{N}\sum_i \mathbf{x}_i'\mathbf{x}_i \overset{\mathbb{P}}{\to} \mathbf{Q}$ and $\frac{1}{N}\sum_i \mathbf{x}_i'u_i \overset{\mathbb{P}}{\to} \mathbb{E}(\mathbf{x}_i'u_i) = 0$:

$$\text{plim}\,\hat{\mathbf{b}}_{OLS} = \mathbf{b} + \mathbf{Q}^{-1}\times 0 = \mathbf{b}$$

**Asymptotic normality.** Rearranging and multiplying by $\sqrt{N}$:

$$\sqrt{N}(\hat{\mathbf{b}}_{OLS} - \mathbf{b}) = \left(\frac{1}{N}\sum_{i=1}^{N}\mathbf{x}_i'\mathbf{x}_i\right)^{-1} \sqrt{N}\left(\frac{1}{N}\sum_{i=1}^{N}\mathbf{x}_i'u_i\right)$$

Since $\mathbf{x}_i'u_i$ is i.i.d. with mean $0$ and variance $\sigma^2\mathbf{Q}$, the [CLT](../asymptotic-theory/convergence-in-distribution-and-the-central-limit-theorem.md) gives $\sqrt{N}\big(\frac{1}{N}\sum_i \mathbf{x}_i'u_i\big) \overset{\mathcal{L}}{\to} \mathcal{N}(\mathbf{0}, \sigma^2\mathbf{Q})$. By [Slutsky's theorem](../asymptotic-theory/slutskys-theorem.md), combining this with $\big(\frac{1}{N}\sum_i \mathbf{x}_i'\mathbf{x}_i\big)^{-1} \overset{\mathbb{P}}{\to} \mathbf{Q}^{-1}$:

$$\sqrt{N}(\hat{\mathbf{b}}_{OLS} - \mathbf{b}) \overset{\mathcal{L}}{\to} \mathbf{Q}^{-1}\mathcal{N}(\mathbf{0}, \sigma^2\mathbf{Q}) = \mathcal{N}(\mathbf{0}, \sigma^2\mathbf{Q}^{-1}\mathbf{Q}\mathbf{Q}^{-1}) = \mathcal{N}(\mathbf{0}, \sigma^2\mathbf{Q}^{-1})$$

which proves the proposition. In practice, $\mathbf{Q}$ is replaced by its sample counterpart $\frac{1}{N}\mathbf{X}'\mathbf{X}$, and the resulting large-sample approximation to the distribution of $\hat{\mathbf{b}}_{OLS}$ is what underlies inference — confidence intervals and hypothesis tests — once normality of the noise ($A_5^{OLS}$) is no longer assumed.

## Wooldridge's Theorem 5.2, and what stays vs. what goes

Wooldridge (2016, Theorem 5.2) states the identical result under his MLR.1–MLR.5 labeling (dropping only MLR.6, normality): $\sqrt{n}(\hat\beta_j-\beta_j) \overset{a}{\sim} \mathcal{N}(0,\sigma^2/a_j^2)$, with $a_j^2 = \text{plim}\big(n^{-1}\sum_i \hat r_{ij}^2\big)$ built from the residuals of regressing $x_j$ on all other regressors — this is exactly the $\mathbf{Q}^{-1}$-weighted variance derived above, specialized to one coefficient. He stresses a subtlety worth flagging explicitly: Assumption MLR.5 (homoskedasticity) is *still required* for Theorem 5.2 to hold — the CLT alone does not rescue inference when $\text{Var}(u\mid\mathbf{x})$ is non-constant, which is exactly why [heteroskedasticity-robust inference](../heteroskedasticity-and-autocorrelation/00-overview.md) needs its own, separate machinery rather than simply appealing to "large samples." What normality (MLR.6) buys beyond CAN is *exact* finite-sample $t$ and $F$ distributions; without it, the same test statistics are only *asymptotically* $t$- and $F$-distributed, which in practice is treated as good enough once $n$ is in the hundreds.

*Source: Wooldridge (2016), §5-2, Theorem 5.2.*
