---
title: "Sampling Distribution of OLS under Normality (A5)"
source: "Econ 1, Lecture Notes, §Finite sample properties of the OLS estimator › Statistical Inference 2: Distribution of OLS estimator"
status: enriched
tags:
  - normality-assumption
  - sampling-distribution
  - normal-distribution
prerequisites:
  - ols-estimation/gauss-markov-theorem
  - probability-and-distributions/normal-distribution
---
## Why BLUE is not the whole story

Knowing that OLS is BLUE pins down the *mean* and *variance* of its sampling distribution, but a sample estimate is still a single random draw from that distribution, and quantifying uncertainty around it requires knowing the distribution's actual *shape*, not just its first two moments. Rewriting the estimator conditional on $\mathbf{X}$:

$$\hat{\mathbf{b}}^{OLS} \mid \mathbf{X} = \mathbf{b} + (\mathbf{X}'\mathbf{X})^{-1}\big[\mathbf{X}'(\mathbf{u} \mid \mathbf{X})\big]$$

shows that, conditional on the observed regressors, the *only* random component left is the conditional noise $\mathbf{u} \mid \mathbf{X}$. $A_3^{OLS}$ and $A_4^{OLS}$ pin down its mean ($\mathbf{0}$) and variance ($\sigma^2\mathbf{I}_N$), but infinitely many distributions share that mean and variance — which one actually applies remains unknown without a further assumption.

## Assumption A5: normality

**Assumption $A_5^{OLS}$** closes this gap by assuming the conditional noise is normally distributed:

$$A_5^{OLS}: \ \mathbf{u} \mid \mathbf{X} \equiv \mathcal{N}\big[\mathbf{0}, \sigma^2 \mathbf{I}_N\big]$$

Since $\mathbf{u} \mid \mathbf{X}$ is the only source of randomness in $\hat{\mathbf{b}}^{OLS} \mid \mathbf{X}$, and a linear transformation of a normal random vector is itself normal, $A_5^{OLS}$ together with $A_3^{OLS}$–$A_4^{OLS}$ implies that the OLS estimator itself is exactly normally distributed in finite samples:

$$\hat{\mathbf{b}}^{OLS} \mid \mathbf{X} \equiv \mathcal{N}\big[\mathbf{b},\ \sigma^2(\mathbf{X}'\mathbf{X})^{-1}\big]$$

equivalently, $\hat{\mathbf{b}}^{OLS} - \mathbf{b} \equiv \mathcal{N}\big[\mathbf{0}, \mathbb{V}(\hat{\mathbf{b}}^{OLS})\big]$, with the variance given by the [finite-sample variance formula](../ols-estimation/finite-sample-variance-of-ols.md). Assumptions $A_1^{OLS}$–$A_4^{OLS}$ are often referred to collectively as $\mathcal{A}^{OLS}$; this final normality assumption is what turns the known mean and variance into a fully known distribution, which is exactly what [confidence intervals and hypothesis tests](../ols-estimation/confidence-intervals-for-ols-coefficients.md) require.

> $A_5^{OLS}$ is a genuinely stronger assumption than $A_1^{OLS}$–$A_4^{OLS}$ combined, and — unlike them — it becomes dispensable once the sample is large: [asymptotic theory](../asymptotic-theory/00-overview.md) shows that OLS is approximately normal even without assuming normal errors, as the sample size grows. Normality in finite samples is a convenience assumption, not a strict necessity of the OLS method itself.

## The classical linear model, and why normality of u is not automatic

Wooldridge (2016, §4-1) calls MLR.1 through MLR.6 (his label for $A_5^{OLS}$) together the **classical linear model (CLM) assumptions**, and stresses that the usual justification for normality — that $u$ is the sum of many small, separate unobserved factors, so a central-limit-theorem argument applies — has real limits. It requires those factors to affect $y$ *additively* (any interaction among the omitted factors breaks the argument), and it can fail outright for outcomes with an inherently bounded or discrete support: wages can never be negative, so $wage$ conditional on $educ, exper$ cannot literally be normal, and arrest counts (which are small nonnegative integers, often zero) are visibly non-normal. In practice this matters less than it might seem, for two reasons developed later in the vault: transformations like $\log(wage)$ often bring the conditional distribution much closer to normal, and with large samples the [asymptotic normality](../asymptotic-theory/00-overview.md) of OLS holds regardless of whether $u$ itself is normal — normality of $u$ buys *exact* finite-sample $t$- and $F$-distributions, but is not needed for approximately valid inference once $n$ is reasonably large.

*Source: Wooldridge (2016), §4-1.*
