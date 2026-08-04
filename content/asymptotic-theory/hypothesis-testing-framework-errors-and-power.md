---
title: "The Hypothesis Testing Framework: Errors, Power, and Asymptotic Size"
source: "Econ 1, Lecture Notes, §A reminder on asymptotic tests"
status: enriched
tags:
  - hypothesis-testing
  - type-i-error
  - type-ii-error
  - power-of-a-test
  - neyman-principle
  - critical-region
prerequisites:
  - asymptotic-theory/estimating-the-asymptotic-variance-of-ols
  - ols-estimation/hypothesis-testing-and-t-statistics
---
## The general testing recipe

A test of statistical significance proceeds by constructing a **test statistic** $S(\hat\theta) = S(\mathbf{y}, \mathbf{X})$ whose distribution under the null hypothesis, $\mathcal{L}_S^0$, is known and differs from its distribution under the alternative, $\mathcal{L}_S^1$. A significance level is chosen, defining a **critical region** $W$: the range of statistic values that lead to rejecting $H_0$. If $H_0$ is true and $S \in W$ occurs anyway, the statistic looks unlikely to have come from $\mathcal{L}_S^0$ — grounds to reject.

## Type I and Type II errors

|  | $S \in W$ (reject) | $S \notin W$ (do not reject) |
|---|:---:|:---:|
| **True DGP is $H_0$** | Type I error | Correct |
| **True DGP is $H_1$** | Correct | Type II error |

A **Type I error** is rejecting a true null hypothesis; its probability equals the chosen significance level (size) of the test. A **Type II error** is failing to reject a false null hypothesis. The **power** of a test is the probability of correctly rejecting $H_0$ when a specific $H_1$ is in fact true — the probability of *avoiding* a Type II error.

It is mathematically impossible to minimize both error types simultaneously for a fixed sample. The **Neyman principle** resolves this by fixing the Type I error rate $\alpha_0$ arbitrarily and then choosing, among tests of that size, the one that (uniformly) maximizes power — the Student's $t$-test does exactly this for univariate tests on OLS coefficients.

## What determines power

Testing $H_0: b_1 = 0$ against $H_1: b_1 \neq 0$ leaves the alternative unspecified — a whole family of distributions is compatible with $H_1$. Computing power requires pinning down one specific alternative value (e.g. $b_1 = 5$). Two things drive power:

- **Distance between null and alternative.** The further the true parameter is from the value under $H_0$, the less the two distributions overlap, and the higher the power. In the impact-evaluation literature this shows up as the **minimum detectable effect size**: the smallest true effect a test can reliably detect at a target power level (e.g. $0.8$).
- **Precision of the estimator.** A lower-variance estimator produces thinner, more separated distributions under $H_0$ and $H_1$, reducing their overlap and raising power for any fixed distance. Since variance falls with sample size, **increasing $N$ increases power**.

## Asymptotic size and consistency of a test

A test with critical region $W$ has **asymptotic size** $\alpha$ if $\lim_{N\to\infty} \mathbb{P}(\hat{S} \in W \mid H_0) = \alpha$, and is **consistent** if $\lim_{N\to\infty}\mathbb{P}(\hat{S} \in W \mid H_1) = 1$ — its power converges to $1$ no matter how small (but nonzero) the true discrepancy from $H_0$ is.

Under $H_0: \mathbf{c}'\mathbf{b} = r$, the [asymptotic normality of OLS](../asymptotic-theory/asymptotic-distribution-of-ols-can.md) gives a statistic $\hat{S} = \sqrt{N}\dfrac{\mathbf{c}'\hat{\mathbf{b}}_{OLS} - r}{\sqrt{\mathbf{c}'\hat{\mathbb{V}}_{as}(\hat{\mathbf{b}}_{OLS})\mathbf{c}}} \overset{\mathcal{L}}{\underset{H_0}{\to}} \mathcal{N}(0,1)$. If instead $H_1$ generated the data, with discrepancy $m = \mathbf{c}'\mathbf{b} - r \neq 0$, then $|\hat{S}|/\sqrt{N}$ converges in probability to a strictly positive constant, so $|\hat{S}| \overset{\mathbb{P}}{\to} +\infty$: the statistic diverges, guaranteeing the power converges to $1$. This is why well-constructed asymptotic tests, including the Student test and the [Wald and Fisher tests](../asymptotic-theory/fisher-and-wald-tests.md), are consistent by design.

> Applied to a univariate test of $b_k = 0$: the general statistic reduces to $t_k = \hat{b}_k / \hat\sigma_k \overset{\mathcal{L}}{\to} \mathcal{N}(0,1)$ under $H_0$. This looks like — and is closely related to — the finite-sample [Student's $t$-statistic](../ols-estimation/hypothesis-testing-and-t-statistics.md), because the normal distribution is the limiting distribution of the $t$-distribution: as $N \to \infty$, the $t$-distribution converges to the standard normal, so the asymptotic and finite-sample testing frameworks converge onto the same statistic, differing only in which reference distribution (normal vs. $t$) is used to obtain critical values.

Wooldridge (2016, §5-2) makes this last point operational: because it is easiest in practice to simply keep using the $t_{n-k-1}$ and $F_{q,n-k-1}$ reference distributions from the finite-sample framework — rather than switching to their normal and $\chi^2$ limits — applied econometrics software reports "asymptotic standard errors" and "asymptotic $t$ statistics" that are numerically the *same* quantities as their finite-sample counterparts, just with a large-sample rather than exact-normality justification. Nothing in the mechanics of running a regression or reading its output changes once normality (MLR.6) is dropped; only the interpretation of *why* the reported $p$-values are approximately valid changes.

*Source: Wooldridge (2016), §5-2.*
