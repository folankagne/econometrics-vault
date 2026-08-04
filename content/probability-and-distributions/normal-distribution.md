---
title: Normal (Gaussian) Distribution
source: "Econ 1, Intro Note, §Laws of distributions › Normal (Gaussian) distribution"
status: enriched
tags:
  - normal-distribution
  - gaussian-distribution
  - standardization
prerequisites:
  - probability-and-distributions/expectation-of-a-random-variable
  - probability-and-distributions/variance-and-covariance-of-a-random-variable
---
## Standard normal density

A random variable $y \in \mathbb{R}$ follows the **reduced centered normal law**, denoted $\phi(y)$, if its density is:

$$\phi(y) = \frac{1}{\sqrt{2\pi}} \exp\left(-\frac{y^2}{2}\right)$$

Its cumulative distribution function is $\Phi(y) = \int_{-\infty}^{y} \phi(t)\, dt$. Because $\phi$ is symmetric around zero, $\phi(y) = \phi(-y)$, and consequently $\Phi(-y) = 1 - \Phi(y)$.

This is the familiar bell-shaped curve, formalized in essentially its modern form by [Carl Friedrich Gauss](https://en.wikipedia.org/wiki/Carl_Friedrich_Gauss) while studying measurement error in planetary observations — hence "Gaussian distribution."

```tikz
\begin{document}
\begin{tikzpicture}[scale=1]
\draw[->] (-3.5,0) -- (3.5,0) node[right] {$y$};
\draw[->] (0,0) -- (0,3.2) node[above] {$\phi(y)$};
\draw[thick] plot[smooth] coordinates {
(-3,0.03) (-2.5,0.12) (-2,0.38) (-1.5,0.91) (-1,1.69) (-0.5,2.46)
(0,2.79) (0.5,2.46) (1,1.69) (1.5,0.91) (2,0.38) (2.5,0.12) (3,0.03)};
\draw[dashed] (0,0) -- (0,2.79);
\node[below] at (0,0) {$0$};
\node[below] at (-1,0) {$-1$};
\node[below] at (1,0) {$1$};
\node[below] at (-2,0) {$-2$};
\node[below] at (2,0) {$2$};
\end{tikzpicture}
\end{document}
```
*Figure — the standard normal density $\phi(y)$: symmetric about $0$, its peak, with inflection points at $\pm1$ where the curve switches from concave to convex.*

## General normal distribution and standardization

If $y$ has mean $\mu$ and variance $\sigma^2$, it is written $y \sim \mathcal{N}(\mu, \sigma^2)$. **Standardizing** $y$ means forming:

$$\tilde{y} = \frac{y - \mu}{\sigma}$$

which is **standard normally distributed**, $\tilde{y} \sim \mathcal{N}(0, 1)$: mean zero, variance one. Standardization is what makes a single table of $\Phi(\cdot)$ values usable for any normal distribution regardless of its own mean and variance — every normal random variable is a location-scale transformation of the same standard normal.

## Why the normal distribution is everywhere in econometrics

Wooldridge (2016, Appendix B-5a) singles out two properties that make the normal family the workhorse of statistical inference. First, **linear combinations of independent, identically distributed normal random variables are themselves normal**: if $X_1, X_2, X_3$ are i.i.d. $\mathcal{N}(\mu, \sigma^2)$, then $W = X_1 + 2X_2 - 3X_3$ is normal with $\mathbb{E}(W) = 0$ and $\mathbb{V}(W) = 14\sigma^2$, computed purely from the linearity of expectation and the variance-of-a-sum formula — no new distributional theory is needed. A direct consequence is that the sample average of $n$ i.i.d. $\mathcal{N}(\mu, \sigma^2)$ draws is itself exactly $\bar{Y} \sim \mathcal{N}(\mu, \sigma^2/n)$ for *any* sample size $n$, which is the finite-sample justification for classical $t$- and $F$-based inference in the normal linear regression model (the asymptotic justification via the CLT, which does not require normality of the underlying data, is covered in [asymptotic theory](../asymptotic-theory/00-overview.md)).

Second, **for jointly normal random variables, zero covariance is equivalent to independence** (Property Normal.3) — a much stronger statement than the general fact that independence implies, but is not implied by, zero covariance. This is why, within the normal model, "uncorrelated" and "independent" are used almost interchangeably.

Not every economic variable is well approximated by a normal distribution — income and prices, in particular, are usually right-skewed. When $X > 0$ and $\log(X)$ is normally distributed, $X$ is said to follow a **lognormal distribution**, which fits income and price data in many countries far better than the normal itself; this is part of the motivation for the frequent use of $\log(wage)$, $\log(price)$, etc. as dependent variables in applied regression work.

*Source: Wooldridge (2016), Appendix B-5a–c.*
