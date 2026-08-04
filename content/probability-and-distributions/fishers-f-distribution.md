---
title: Fisher's F Distribution
source: "Econ 1, Intro Note, §Laws of distributions › Fisher's distribution"
status: enriched
tags:
  - fishers-f-distribution
  - chi-square-distribution
  - degrees-of-freedom
prerequisites:
  - probability-and-distributions/chi-square-distribution
---
## Definition

Fisher's distribution, or the $F$-distribution, arises from the ratio of two chi-square distributed variables, each scaled by its own degrees of freedom. If $x_1 \sim \chi^2(L_1)$ and $x_2 \sim \chi^2(L_2)$ with $x_1 \perp x_2$, then:

$$Z = \frac{x_1/L_1}{x_2/L_2}$$

is distributed according to **Fisher's $F$ distribution with $L_1$ and $L_2$ degrees of freedom**, $Z \sim \mathcal{F}(L_1, L_2)$, with:

$$\mathbb{E}(Z) = \frac{L_2}{L_2 - 2} \qquad \mathbb{V}(Z) = \frac{2L_2^2(L_1 + L_2 - 2)}{L_1(L_2-2)^2(L_2-4)}$$

```tikz
\begin{document}
\begin{tikzpicture}[scale=1]
\draw[->] (0,0) -- (6.5,0) node[right] {$x$};
\draw[->] (0,0) -- (0,1.5) node[above] {$f(x)$};
\draw[thick] plot[smooth] coordinates {
(0.05,0.3) (0.2,0.85) (0.4,1.15) (0.6,1.2) (1,1.0) (1.5,0.65) (2,0.42) (3,0.20) (4,0.10) (6,0.04)};
\draw[dashed] (1,0) -- (1,1.0);
\node[below] at (1,0) {$1$};
\end{tikzpicture}
\end{document}
```
*Figure — Fisher's $F(L_1,L_2)$ density: right-skewed with mode below $1$ whenever $L_1>2$, and a long right tail — the shape underlying every $F$-test critical value in this vault.*

> The $F$ distribution is what makes joint hypothesis tests possible: comparing two sums of squared deviations — for instance, the increase in the residual sum of squares from imposing several restrictions at once, against the unrestricted residual sum of squares — naturally produces a ratio of (scaled) chi-square variables, hence an $F$-distributed test statistic.

Wooldridge (2016, Appendix B-5f) stresses that the *order* of the degrees of freedom is not a bookkeeping detail: $L_1$ (numerator df) and $L_2$ (denominator df) are not interchangeable, and $\mathcal{F}(L_1, L_2) \neq \mathcal{F}(L_2, L_1)$ in general — a common source of table-lookup errors. Two useful special cases tie the $F$ distribution back to distributions already introduced: if $x_1 \sim \chi^2(1)$, then $Z = x_1/(x_2/L_2) \sim \mathcal{F}(1, L_2)$ is literally the square of a $t(L_2)$-distributed variable, which is why an $F$ test with one restriction and a two-sided $t$ test of the same restriction always agree; and as $L_2 \to \infty$, $L_1 \cdot \mathcal{F}(L_1, L_2) \to \chi^2(L_1)$, recovering the large-sample [Wald test](../asymptotic-theory/fisher-and-wald-tests.md).

*Source: Wooldridge (2016), Appendix B-5f.*
