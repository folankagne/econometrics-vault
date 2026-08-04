---
title: Chi-Square Distribution
source: "Econ 1, Intro Note, §Laws of distributions › Chi-square distribution"
status: enriched
tags:
  - chi-square-distribution
  - sum-of-squares
  - degrees-of-freedom
prerequisites:
  - probability-and-distributions/normal-distribution
---
## Definition

The sum of squares of independent and identically distributed (i.i.d.) standard normal random variables follows a **chi-square distribution**. Formally, if $z_1, z_2, \dots, z_k$ are $k$ i.i.d. draws with $z_i \sim \mathcal{N}(0,1)$ and:

$$Q = \sum_{i=1}^{k} z_i^2$$

then $Q$ is chi-square distributed with $k$ **degrees of freedom**, written $Q \sim \chi^2(k)$.

```tikz
\begin{document}
\begin{tikzpicture}[scale=1]
\draw[->] (0,0) -- (10.5,0) node[right] {$x$};
\draw[->] (0,0) -- (0,3.4) node[above] {$f(x)$};
\draw[thick] plot[smooth] coordinates {
(0.1,1.44) (0.5,2.64) (1,2.9) (2,2.49) (3,1.85) (4,1.30) (5,0.88) (6,0.58) (8,0.25) (10,0.10)};
\draw[dashed] (1,0) -- (1,2.9);
\node[below] at (1,0) {$k{-}2$};
\end{tikzpicture}
\end{document}
```
*Figure — the $\chi^2(k)$ density (here $k=3$): always nonnegative since it's a sum of squares, right-skewed with mode at $k-2$ for $k>2$, and a long right tail that thins as $k$ grows and the sum concentrates more tightly around its mean.*

> The chi-square distribution is the building block behind both the [Student's $t$](../probability-and-distributions/students-t-distribution.md) and [Fisher's $F$](../probability-and-distributions/fishers-f-distribution.md) distributions, which are respectively formed from a normal divided by a scaled chi-square, and from the ratio of two scaled chi-squares. It also appears directly whenever a sum of squared residuals or squared standardized deviations is involved, which is why it underlies many goodness-of-fit and variance-based tests in econometrics.

## Moments and shape

If $Q \sim \chi^2(k)$, then $\mathbb{E}(Q) = k$ and $\mathbb{V}(Q) = 2k$ (Wooldridge, 2016, Appendix B-5d) — both facts follow immediately from $Q$ being a sum of $k$ terms each with $\mathbb{E}(z_i^2) = \mathbb{V}(z_i) = 1$ and $\mathbb{V}(z_i^2) = \mathbb{E}(z_i^4) - 1 = 2$ for standard normal $z_i$. Unlike the normal, the chi-square distribution is (i) always nonnegative, since it is a sum of squares, and (ii) not symmetric — it is right-skewed, with the skew becoming less pronounced as $k$ grows, reflecting the fact that a sum of more squared terms concentrates more tightly (in relative terms) around its mean by the same logic as the law of large numbers.

*Source: Wooldridge (2016), Appendix B-5d.*
