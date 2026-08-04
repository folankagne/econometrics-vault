---
title: Confidence Intervals for OLS Coefficients
source: "Econ 1, Lecture Notes, §Confidence intervals and tests of statistical significance"
status: enriched
tags:
  - confidence-interval
  - students-t-distribution
  - standard-error
prerequisites:
  - ols-estimation/sampling-distribution-of-ols-under-normality
  - probability-and-distributions/students-t-distribution
  - probability-and-distributions/chi-square-distribution
---
## From normality to a pivotal statistic

Focus on a single coefficient $b_k$, and let $S_k = \mathbb{V}(\hat{b}_k^{OLS})/\sigma^2$ — the part of its variance not attributable to $\sigma^2$. Under [normality](../ols-estimation/sampling-distribution-of-ols-under-normality.md):

$$\frac{\hat{b}_k^{OLS} - b_k}{\sqrt{\sigma^2 S_k}} \equiv \mathcal{N}(0,1)$$

A **confidence interval** for $b_k$ at level $1-\alpha$ is a (data-dependent) range $CI_{1-\alpha} = [\underline{b}_k(\mathbf{y},\mathbf{X}), \overline{b}_k(\mathbf{y},\mathbf{X})]$ such that $\mathbb{P}(b_k \in CI_{1-\alpha}) = 1-\alpha$. If $\sigma^2$ were known, normality alone would give $CI_{1-\alpha} = \big[\hat{b}_k^{OLS} \pm \mathcal{N}_\alpha \sqrt{\sigma^2 S_k}\big]$, where $\mathcal{N}_\alpha$ is the standard normal quantile satisfying $\mathbb{P}[\mathcal{N}(0,1) \geq \mathcal{N}_\alpha] = \alpha/2$.

## Replacing the unknown σ² forces a switch to the t distribution

$\sigma^2$ relates to the true (unobserved) noise, so it must itself be estimated: $\hat{\sigma}^2 = \hat{\mathbf{u}}'\hat{\mathbf{u}}/(N-K-1)$, the sample variance of the estimated residuals. Under normality, a standard [chi-square](../probability-and-distributions/chi-square-distribution.md) result applies:

$$\frac{(N-K-1)\hat{\sigma}^2}{\sigma^2} \equiv \chi^2(N-K-1)$$

because $u_i \sim \mathcal{N}(0,\sigma^2) \Rightarrow u_i/\sigma \sim \mathcal{N}(0,1)$, making $\hat{\sigma}^2$ a sum of squared standard normals; and $A_3^{OLS}$ additionally implies $\hat{b}^{OLS}_k$ and $\hat{\sigma}^2$ are independent. Dividing the normal pivotal statistic by the square root of this (scaled) chi-square variable gives, by the definition of the [Student's $t$ distribution](../probability-and-distributions/students-t-distribution.md):

$$\frac{\hat{b}_k^{OLS} - b_k}{\sqrt{\hat{\sigma}^2 S_k}} \equiv \frac{\mathcal{N}(0,1)}{\sqrt{\chi^2_{N-K-1}/(N-K-1)}} \equiv \mathcal{T}_{N-K-1}$$

This is exactly why practitioners use the $t$-distribution — developed specifically for small samples — rather than the normal, once $\sigma^2$ is replaced by its sample estimate.

## The confidence interval in practice

$$CI_{1-\alpha}^{OLS} = \Big[\hat{b}_k^{OLS} - t_\alpha \sqrt{\hat{\sigma}^2 S_k}\ ;\ \hat{b}_k^{OLS} + t_\alpha \sqrt{\hat{\sigma}^2 S_k}\Big] = \big[\hat{b}_k^{OLS} \pm t_{1-\alpha}\sqrt{\hat{\sigma}^2 S_k}\big]$$

where $t_\alpha^{N-K-1}$ is the $t$-distribution quantile satisfying $\mathbb{P}[\mathcal{T}_{N-K-1} \geq t_\alpha^{N-K-1}] = \mathbb{P}[\mathcal{T}_{N-K-1} \leq -t_\alpha^{N-K-1}] = \alpha/2$. The quantity $\sqrt{\hat{\sigma}^2 S_k}$ is the coefficient's **standard error** — the estimated standard deviation of its sampling distribution — and it is what every regression output table reports alongside a point estimate.

## A rule of thumb, and reading a CI against a hypothesis test

Wooldridge (2016, §4-3) offers a practical shortcut: once the residual degrees of freedom $N-K-1$ exceed about 50, the relevant $t$ quantile is close enough to $2$ that a rough 95% confidence interval is simply $\hat\beta_k \pm 2\cdot\text{se}(\hat\beta_k)$ — useful for a quick gut check without consulting a $t$-table. A confidence interval and a two-sided $t$-test are two views of the same calculation: $H_0: \beta_k = a$ is rejected against $H_1: \beta_k \neq a$ at the (say) 5% level if and only if $a$ falls *outside* the 95% CI. Wooldridge's R&D-spending example makes this concrete: for the sales elasticity of R&D spending, the 95% CI is roughly $(0.96, 1.21)$ — this comfortably excludes $0$ (R&D responds to firm size) but *includes* $1$, so the hypothesis of a unit elasticity cannot be rejected at the 5% level, even though the point estimate of $1.084$ is not exactly one.

*Source: Wooldridge (2016), §4-3.*
