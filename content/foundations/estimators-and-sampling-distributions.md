---
title: Estimators and Sampling Distributions
source: "Econ 1, Lecture Notes, §The two fundamental inferential problems in econometrics › Econometrics tools: estimators and distribution properties"
status: enriched
tags:
  - estimator
  - estimate
  - sampling-distribution
  - population-parameter
prerequisites:
  - foundations/population-sample-and-data-structures
---
## Definition

Once a target **population parameter** $\theta$ has been chosen, a rule is needed to compute a value for it from sample data. Such a rule is an **estimator**:

$$\hat{\theta} = \hat{\theta}(\mathbf{X}, \mathbf{y})$$

An estimator is a function of the observations, and since the observations are themselves random (a different sample would contain different values), the estimator is a random variable in its own right, distributed according to some — generally unknown — law:

$$\hat{\theta} \equiv \mathcal{L}\big(\mathbb{E}_{\hat{\theta}}, \mathbb{V}_{\hat{\theta}}\big)$$

The estimator is sometimes written $\hat{\theta}_N$ to make the sample size explicit.

## Estimator, estimate, and sampling distribution

Three related terms are easy to conflate and worth keeping distinct:

- An **estimator** is the function itself — the method or algorithm for computing a value of $\theta$ from any sample.
- An **estimate** is the particular value the estimator returns for one specific sample. A different sample, drawn by the same sampling rule, generally yields a different estimate.
- Because an estimator yields different estimates for different samples, an estimate is a **random draw from the estimator's sampling distribution** — the distribution the estimator would trace out if applied, hypothetically, to every sample the sampling process could produce.

> This distinction is what makes the rest of classical inference possible: precision, bias, and confidence intervals are all properties of the *sampling distribution* of an estimator, not properties of any single estimate. A single number computed from one sample carries no information about its own reliability without reference to the distribution it was drawn from.

## Judging an estimator: bias, efficiency, and mean squared error

Given a random sample $\{Y_1, \dots, Y_N\}$ drawn from a population with mean $\mu$, the sample average $\bar{Y} = N^{-1}\sum_i Y_i$ is the natural estimator of $\mu$ — but it is far from the only *unbiased* one. Wooldridge (Appendix C-2) makes the point with a deliberately bad example: the estimator $W \equiv Y_1$, which discards every observation except the first, is also unbiased for $\mu$, since $\mathbb{E}(Y_1) = \mu$ regardless of $N$. Two properties are needed to tell $\bar{Y}$ and $Y_1$ apart:

- **Unbiasedness.** $W$ is unbiased for $\theta$ if $\mathbb{E}(W) = \theta$ for every possible value of $\theta$; otherwise its **bias** is $\text{Bias}(W) \equiv \mathbb{E}(W) - \theta$. Unbiasedness says the sampling distribution is centered on the truth — it says nothing about how spread out that distribution is.
- **Sampling variance and relative efficiency.** $\mathbb{V}(\bar{Y}) = \sigma^2/N$, while $\mathbb{V}(Y_1) = \sigma^2$ for every $N$ — so $\bar{Y}$'s sampling variance shrinks as the sample grows while $Y_1$'s does not. When two estimators are both unbiased, the one with (weakly) smaller variance for every value of the parameter is said to be **efficient relative to** the other; among unbiased estimators that are linear in the sample, $\bar{Y}$ is the most efficient (the Gauss-Markov logic behind [BLUE](../ols-estimation/gauss-markov-theorem.md) is the regression-model version of this same idea).
- **Mean squared error (MSE).** When comparing estimators that need not be unbiased, variance alone is not a fair basis for comparison — a trivial estimator that always returns the constant $0$ has zero variance but can be arbitrarily bad. $\text{MSE}(W) \equiv \mathbb{E}[(W-\theta)^2] = \mathbb{V}(W) + [\text{Bias}(W)]^2$ combines both concerns into a single criterion, and is what motivates accepting a small amount of bias in exchange for a large reduction in variance in some estimation problems.

## A preview: consistency

Unbiasedness and efficiency are **finite-sample** properties — they hold (or fail) for any given $N$. A complementary, large-sample property is **consistency**: $W_N$ is a consistent estimator of $\theta$ if its sampling distribution collapses onto $\theta$ as $N \to \infty$, i.e. $\mathbb{P}(|W_N - \theta| > \varepsilon) \to 0$ for every $\varepsilon > 0$. Unbiased estimators whose variance shrinks to zero as $N$ grows — like $\bar{Y}$, but *not* $Y_1$ — are automatically consistent; consistency is treated formally, together with asymptotic normality, in [asymptotic theory](../asymptotic-theory/00-overview.md).

*Source: Wooldridge (2016), Appendix C-2, C-3a.*
