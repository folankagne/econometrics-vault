---
title: Student's t Distribution
source: "Econ 1, Intro Note, §Laws of distributions › Student's distribution"
status: enriched
tags:
  - students-t-distribution
  - small-sample-inference
  - sample-mean
  - sample-variance
prerequisites:
  - probability-and-distributions/normal-distribution
  - probability-and-distributions/chi-square-distribution
---
## Motivation

The Student's $t$ distribution matters most when working with small samples. It closely resembles the normal distribution but has lower density at the mean and "fatter tails," reflecting the fact that small samples are more likely to produce extreme outcomes than the normal distribution alone would suggest. It was developed by [William Sealy Gosset](https://en.wikipedia.org/wiki/William_Sealy_Gosset), who published under the pseudonym "Student" while working as Head Experimental Brewer at Guinness.

```tikz
\begin{document}
\begin{tikzpicture}[scale=1]
\draw[->] (-3.5,0) -- (3.5,0) node[right] {$x$};
\draw[->] (0,0) -- (0,3.2) node[above] {density};
\draw[dashed] plot[smooth] coordinates {
(-3,0.03) (-2.5,0.12) (-2,0.38) (-1.5,0.91) (-1,1.69) (-0.5,2.46)
(0,2.79) (0.5,2.46) (1,1.69) (1.5,0.91) (2,0.38) (2.5,0.12) (3,0.03)};
\draw[thick] plot[smooth] coordinates {
(-3,0.17) (-2.5,0.29) (-2,0.51) (-1.5,0.90) (-1,1.55) (-0.5,2.35)
(0,2.76) (0.5,2.35) (1,1.55) (1.5,0.90) (2,0.51) (2.5,0.29) (3,0.17)};
\node[right] at (3,0.55) {$t(3)$};
\node[right] at (3,0.05) {$\mathcal{N}(0,1)$};
\end{tikzpicture}
\end{document}
```
*Figure — Student's $t(3)$ (solid) against the standard normal (dashed): a slightly lower peak and visibly fatter tails, reflecting the extra uncertainty from estimating $\sigma^2$ with a small sample. As $L\to\infty$ the solid curve converges onto the dashed one.*

## From a normal sample to the t statistic

Draw a sample of size $n$, $(x_1, \dots, x_n)$, from $x \sim \mathcal{N}(\mu, \sigma^2)$. Let the sample mean and sample variance be:

$$\bar{x} = \frac{1}{n}\sum_{i=1}^{n} x_i \qquad V^2 = \frac{1}{n-1}\sum_{i=1}^{n} (x_i - \bar{x})^2$$

Then:

$$S = \frac{\bar{x} - \mu}{V/\sqrt{n}}$$

is distributed according to a **Student's $t$ distribution with $n-1$ degrees of freedom**, $S \sim t(n-1)$. This relies on two facts: $V^2$ itself is (a scaled) $\chi^2(n-1)$-distributed, and the numerator and denominator of $S$ are statistically independent — which holds here because $\text{Cov}(\bar{x}, x_i - \bar{x}) = 0$.

## General definition

More generally, if $x_1 \sim \mathcal{N}(0,1)$ and $x_2 \sim \chi^2(L)$ with $x_1 \perp x_2$, then:

$$S = \frac{x_1}{\sqrt{x_2/L}}$$

is distributed according to the Student's $t$ distribution with $L$ degrees of freedom, $S \sim t(L)$, with $\mathbb{E}(S) = 0$ and $\mathbb{V}(S) = L/(L-2)$ for $L > 2$. In words: a standard normal divided by an independent, appropriately scaled chi-square is $t$-distributed. This is exactly the structure of the sample-mean case above, once $\bar{x}$ is standardized.

As $L \to \infty$, the $t(L)$ distribution converges to the standard normal (Wooldridge, 2016, Appendix B-5e) — the extra uncertainty from estimating $\sigma^2$ with $V^2$ instead of knowing it fades out as the sample grows, which is why large-sample regression inference routinely uses normal critical values in place of $t$ critical values without much practical difference for $n$ in the hundreds. For small $n$, however, the fatter tails matter: they are what make the $t$ test in [hypothesis testing and t-statistics](../ols-estimation/hypothesis-testing-and-t-statistics.md) more conservative than a naive normal-based test would be.

*Source: Wooldridge (2016), Appendix B-5e.*
