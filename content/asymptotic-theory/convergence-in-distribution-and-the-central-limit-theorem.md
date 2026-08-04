---
title: Convergence in Distribution and the Central Limit Theorem
source: "Econ 1, Lecture Notes, §Basic Tools for the asymptotic world › Statistical Inference: Asymptotic distributions"
status: enriched
tags:
  - convergence-in-distribution
  - central-limit-theorem
  - normal-distribution
  - standardization
prerequisites:
  - asymptotic-theory/law-of-large-numbers
  - probability-and-distributions/normal-distribution
---
## Convergence in distribution

While convergence in probability describes what happens to a *point* (like a sample mean) as $N \to \infty$, **convergence in distribution** describes what happens to the entire *shape* of a sequence's distribution. A sequence $(z_N)$ with CDF $F_N$ **converges in distribution** to a random variable $z$ with CDF $F$ if:

$$\forall z, \quad F_N \xrightarrow[N\to\infty]{} F(z) \qquad\Longleftrightarrow\qquad z_N \overset{\mathcal{L}}{\longrightarrow} z$$

at every point where $F$ is continuous. As $N$ grows, the CDF of $z_N$ overlaps the CDF of $z$ ever more closely.

## The Central Limit Theorem

Let $(z_N)$ be i.i.d. with $\mathbb{E}(z_i) = m$, $\mathbb{V}(z_i) = \sigma^2$, and $\bar{z}_N$ their sample mean. The **Central Limit Theorem (CLT)** states:

$$\sqrt{N}(\bar{z}_N - m) \overset{\mathcal{L}}{\longrightarrow} \mathcal{N}(0, \sigma^2) \qquad\Longleftrightarrow\qquad \frac{\bar{z}_N - m}{\sigma/\sqrt{N}} \overset{\mathcal{L}}{\longrightarrow} \mathcal{N}(0,1)$$

The remarkable part: **no distributional assumption was made on $z_i$ at all**. Regardless of the shape of the underlying distribution the $z_i$ are drawn from, their appropriately standardized sample mean always converges in distribution to the same normal distribution.

```tikz
\begin{document}
\begin{tikzpicture}[scale=1]
\draw[->] (-3.5,0) -- (3.5,0) node[right] {$\sqrt{n}(\bar Y_n-\mu)$};
\draw[->] (0,0) -- (0,3) node[above] {density};
\draw[thick,dotted] plot[smooth] coordinates {(-3,0.05) (-2,0.3) (-1,0.8) (0,1.2) (1,0.8) (2,0.3) (3,0.05)};
\draw[thick,dashed] plot[smooth] coordinates {(-2,0.1) (-1.3,0.6) (-0.7,1.4) (0,1.8) (0.7,1.4) (1.3,0.6) (2,0.1)};
\draw[thick] plot[smooth] coordinates {(-1,0.15) (-0.6,0.9) (-0.3,2.0) (0,2.7) (0.3,2.0) (0.6,0.9) (1,0.15)};
\node[above] at (2.3,0.5) {small $n$};
\node[above] at (1.6,1.1) {medium $n$};
\node[above] at (0.9,2.0) {large $n$};
\end{tikzpicture}
\end{document}
```
*Figure — As $n$ grows, the sampling distribution of the standardized sample mean concentrates ever more tightly around the same center — the CLT describes the shape this concentration converges to, a normal distribution, regardless of the underlying population's own distribution.*

## Why the √N: keeping the randomness alive

By the [LLN](../asymptotic-theory/law-of-large-numbers.md), $\bar{z}_N - m \overset{\mathbb{P}}{\to} 0$ and $\mathbb{V}(\bar{z}_N) \to 0$: as $N$ grows, the distribution of $\bar{z}_N$ collapses onto a single point, the population mean, and stops being a genuinely random object worth studying. Multiplying by $\sqrt{N}$ — an increasing function of $N$ — deliberately slows this collapse down, keeping $\sqrt{N}(\bar{z}_N - m)$ a nondegenerate random variable with a well-defined limiting distribution, which is exactly what makes the CLT a useful, non-trivial statement rather than a restatement of the LLN.

> The [Galton board](https://www.youtube.com/watch?v=AwEaHCjgeXk) gives a physical illustration of the CLT for a binomial variable, and shows that a sample of only a few thousand — far from infinite — already approximates the normal distribution closely. The **speed of convergence** is directly tied to the variance of the underlying $z_i$: the smaller their variance, the faster the standardized sample mean converges to normality.

## Why this rescues inference when errors are not normal

Wooldridge (2016, §5-2) uses the CLT to resolve a problem left open by the [classical linear model](../ols-estimation/sampling-distribution-of-ols-under-normality.md): exact $t$- and $F$-based inference requires the errors $u$ to be normally distributed, yet many economic outcomes visibly cannot be. His two running counterexamples: `narr86` (the number of times a young man was arrested in 1986) is a small nonnegative integer, zero for the vast majority of the sample — nothing like a continuous, symmetric normal variable; and `prate` (401(k) plan participation rates) is heavily right-skewed, with over 40% of observations bunched at exactly 100%. In both cases $y$, and hence $u$, is visibly non-normal in the population — no amount of additional data changes that, since the population distribution does not depend on sample size. What the CLT delivers instead is that the OLS estimators themselves, being (in a more complex way) built from sample averages, are *asymptotically* normal regardless of the population distribution of $u$ — so standard $t$ and $F$ inference remains approximately valid in large samples even when $u$ is clearly not normal, which is precisely why applied work routinely uses $t$-statistics without first checking normality of the residuals.

*Source: Wooldridge (2016), §5-2.*
