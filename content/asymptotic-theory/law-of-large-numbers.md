---
title: Law of Large Numbers
source: "Econ 1, Lecture Notes, §Basic Tools for the asymptotic world › Consistency of the mean: The Law of Large Numbers"
status: enriched
tags:
  - law-of-large-numbers
  - consistency
  - sample-mean
prerequisites:
  - asymptotic-theory/convergence-in-probability-and-consistency
---
## Statement

Let $(z_N)$ be a sequence of independent random variables with $\mathbb{E}(z_i) = m$ and $\mathbb{V}(z_i) = \sigma_z^2$ for all $i$, and let $\bar{z}_N = \frac{1}{N}\sum_{i=1}^{N} z_i$. The **Law of Large Numbers (LLN)** states:

$$\bar{z}_N - m \overset{\mathbb{P}}{\longrightarrow} 0 \qquad\Longleftrightarrow\qquad \bar{z}_N \overset{\mathbb{P}}{\longrightarrow} m$$

In words: the mean of $N$ independent random variables converges in probability to their common population mean as $N \to \infty$ — the sample mean is a [consistent](../asymptotic-theory/convergence-in-probability-and-consistency.md) estimator of the population mean.

## Why: the variance of the mean vanishes

$$\mathbb{V}(\bar{z}_N) = \mathbb{V}\left(\frac{1}{N}\sum_{i=1}^{N} z_i\right) = \frac{1}{N^2}\sum_{i=1}^{N}\mathbb{V}(z_i) = \frac{\sigma_z^2}{N} \xrightarrow[N\to\infty]{} 0$$

As $N$ grows, the sampling distribution of $\bar{z}_N$ collapses onto the single point $m$: eventually there is essentially no discrepancy left between the sample mean and the population mean.

> The LLN does **not** say that future draws "compensate" for past ones — the so-called gambler's fallacy. What it actually says is that as the sample grows, the *weight* carried by any individual extreme observation shrinks toward negligible, not that extreme observations become less likely to occur or get cancelled out by opposite ones.

## Application: Condorcet's jury theorem

A jury of size $N$ decides between two options by majority vote. Votes are independent, and every juror's individual probability of choosing correctly exceeds one half: $p_i = 0.5 + \epsilon$ for all $i$, with $\epsilon > 0$. **Condorcet's jury theorem** shows that, for any $\epsilon > 0$, the probability the jury reaches the correct decision by majority vote converges in probability to $1$ as $N \to \infty$ — a striking application of the LLN showing how weak individual signals aggregate into near-certainty at scale.

## Consistency of OLS via the LLN

Wooldridge (2016, §5-1) uses exactly this mechanism to prove that OLS is consistent under only the first four Gauss-Markov assumptions (MLR.1–MLR.4) — a weaker requirement than the full Gauss-Markov set needed for unbiasedness and BLUE-ness. Writing the simple-regression slope estimator as $\hat\beta_1 = \beta_1 + \big(n^{-1}\sum_i(x_i-\bar x)u_i\big)\big/\big(n^{-1}\sum_i(x_i-\bar x)^2\big)$, the LLN applies separately to the numerator and denominator averages, which converge in probability to $\text{Cov}(x,u)$ and $\text{Var}(x)$ respectively; since $\text{Cov}(x,u)=0$ under MLR.4, $\text{plim}\,\hat\beta_1=\beta_1$. This gives a memorable diagnostic (Wooldridge's Theorem 5.1): OLS is consistent whenever the error is *uncorrelated* with each regressor, even if the stronger zero-conditional-mean assumption fails — but if $x$ and $u$ are correlated, the LLN shows the estimator converges not to $\beta_1$ but to $\beta_1 + \text{Cov}(x,u)/\text{Var}(x)$, so the resulting **inconsistency does not vanish, and can even worsen, as the sample grows** — more data does not fix a mis-specified model.

*Source: Wooldridge (2016), §5-1.*
