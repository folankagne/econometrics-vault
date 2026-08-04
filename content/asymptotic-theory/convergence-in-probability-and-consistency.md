---
title: Convergence in Probability and Consistency
source: "Econ 1, Lecture Notes, §Basic Tools for the asymptotic world › Identification: Unbiasedness, convergence and consistency"
status: enriched
tags:
  - convergence-in-probability
  - consistency
  - plim
  - asymptotic-unbiasedness
prerequisites:
  - foundations/estimators-and-sampling-distributions
---
## Why go beyond unbiasedness

[Unbiasedness](../ols-estimation/unbiasedness-of-ols.md), $\mathbb{E}(\hat{\theta}) = \theta$, is a demanding requirement that rules out many otherwise reasonable estimators. Consider an estimator $\hat{\theta}_N$ with $\mathbb{E}(\hat{\theta}_N) = \theta + 1/N$: it is biased in any finite sample, yet its bias, $1/N$, shrinks to zero as $N \to \infty$. Asymptotic theory is built to capture exactly this kind of estimator — good only "in the limit," but arbitrarily good as the sample grows.

## Convergence in probability

A sequence of random variables $(z_N)$ **converges in probability** to $z$ if:

$$\forall \varepsilon > 0, \quad \mathbb{P}(|z_N - z| > \varepsilon) \xrightarrow[N \to \infty]{} 0$$

written $z_N \overset{\mathbb{P}}{\to} z$, or $\text{plim}\, z_N = z$ (read "probability limit"). Intuitively: as $N$ grows, it becomes overwhelmingly likely that $z_N$ is arbitrarily close to $z$. The $\text{plim}$ operator is the asymptotic-world counterpart of $\mathbb{E}(\cdot)$.

## Consistency

An estimator $\hat{\theta}$ is **consistent** if it converges in probability to the true parameter:

$$\forall \varepsilon > 0, \quad \mathbb{P}(|\hat{\theta}_N - \theta| > \varepsilon) \xrightarrow[N \to \infty]{} 0 \quad\Longleftrightarrow\quad \text{plim}\,\hat{\theta}_N = \theta$$

Equivalently, consistency is **asymptotic unbiasedness**: the estimator's bias need not vanish for any finite $N$, only in the limit. The estimator $\hat{\theta}_N$ above, biased by $1/N$ in every finite sample, is nonetheless consistent, since $1/N \to 0$. This is why consistency, not finite-sample unbiasedness, becomes the baseline requirement once assumption $A_5^{OLS}$ (normality) is dropped and the rest of inference is built on large-sample approximations instead.

Wooldridge (2016, §5-1) frames why this baseline matters with a quote from Nobel laureate Clive Granger: "If you can't get it right as $n$ goes to infinity, you shouldn't be in this business." Consistency is treated as close to a minimal requirement for any estimator to be taken seriously, precisely because it involves the least demanding kind of guarantee: not that the estimator is right in any given (finite) sample, but that collecting arbitrarily more data of the same kind is *guaranteed to help*. An estimator that is not consistent has no such guarantee — more data need not bring it any closer to the truth — which is a much more damning property than merely being biased in finite samples.

*Source: Wooldridge (2016), §5-1.*
