---
title: Horowitz-Manski Bounds
source: "Econ 2b, Ch.8 Partial Identification, §Horowitz-Manski Bounds"
status: enriched
tags:
  - horowitz-manski-bounds
  - worst-case-bounds
  - attrition
prerequisites:
  - partial-identification/from-point-to-partial-identification
---
## Derivation: worst-case imputation

Decompose $\mathbb{E}[Y\mid D{=}d]$ by response status: $\mathbb{E}[Y\mid D{=}d] = \mathbb{E}[Y\mid S{=}1,D{=}d]P(S{=}1\mid D{=}d) + \mathbb{E}[Y\mid S{=}0,D{=}d]P(S{=}0\mid D{=}d)$. The first term is observed; the second is not — but since $\underline{y}\leq Y\leq\bar y$ always, the unobserved term is itself bounded, $\underline{y}\leq\mathbb{E}[Y\mid S{=}0,D{=}d]\leq\bar y$. Substituting these two extremes:

$$\overline\mu(d) = \mathbb{E}[Y\mid S{=}1,D{=}d]P(S{=}1\mid D{=}d) + \bar y\,P(S{=}0\mid D{=}d)$$
$$\underline\mu(d) = \mathbb{E}[Y\mid S{=}1,D{=}d]P(S{=}1\mid D{=}d) + \underline y\,P(S{=}0\mid D{=}d)$$

so $\mathbb{E}[Y(d)]\in[\underline\mu(d),\overline\mu(d)]$: in the worst case for the upper bound, every non-respondent in arm $d$ would have had the *maximum* possible outcome; in the worst case for the lower bound, the *minimum*.

## The ATE bounds

$$\overline{\text{ATE}} = \overline\mu(1)-\underline\mu(0) \qquad\qquad \underline{\text{ATE}} = \underline\mu(1)-\overline\mu(0)$$

These bounds are **sharp** — every value in the resulting interval is achievable by some data-generating process consistent with the observed data and the known support of $Y$.

```tikz
\begin{document}
\begin{tikzpicture}[scale=1]
\draw[->] (-2,0) -- (5,0) node[right] {$\theta$};
\draw[very thick] (-0.5,0) -- (2.5,0);
\fill (-0.5,0) circle (2pt);
\fill (2.5,0) circle (2pt);
\node[below] at (-0.5,-0.1) {$\theta_{lb}$};
\node[below] at (2.5,-0.1) {$\theta_{ub}$};
\fill[red] (1.2,0) circle (2pt);
\node[above] at (1.2,0.15) {naive point estimate};
\draw[dotted] (-2,0) -- (-0.5,0);
\draw[dotted] (2.5,0) -- (5,0);
\end{tikzpicture}
\end{document}
```
*Figure — the identified set $\Theta_I=[\theta_{lb},\theta_{ub}]$: every point on the thick segment is consistent with the data and maintained assumptions; nothing on the dotted extensions is achievable by any compatible data-generating process. The naive (attrition-ignoring) point estimate sits inside the interval, as it must, but is only one of many values the data cannot rule out.*

## Numerical example

Employment example continued ($\underline y{=}0$, $\bar y{=}1$): $\overline{\text{ATE}} = \frac{48}{80}\cdot\frac{80}{100} + 1\cdot\frac{20}{100} - \frac{45}{90}\cdot\frac{90}{100} - 0\cdot\frac{10}{100} = 0.48+0.20-0.45-0 = 0.23$; $\underline{\text{ATE}} = 0.48+0-0.45-0.10 = -0.07$. So $\text{ATE}\in[-0.07,0.23]$ — the naive point estimate ($0.1$) falls inside, as it must under random attrition, but the interval **includes zero**: a genuinely negative effect cannot be ruled out from the data alone, even though the interval is informative (width $0.30$, far short of the full $[-1,1]$ range that would hold with no information at all).

Equivalently: the $20$ non-respondents in arm $1$ could all have $Y{=}1$ ($\mathbb{E}[Y(1)]\leq0.68$) or all $Y{=}0$ ($\mathbb{E}[Y(1)]\geq0.48$); similarly $\mathbb{E}[Y(0)]\in[0.45,0.55]$. Combining the most favorable and least favorable pairings across arms reproduces exactly the same $[-0.07,0.23]$ interval.

These are sometimes called **worst-case** or **Manski bounds**, after Horowitz and Manski's (2000) formal treatment in the *Journal of the American Statistical Association*, which built on Manski's own earlier (1989, 1990) development of the underlying logic for missing-data and treatment-effect problems more generally. Their defining feature — requiring nothing beyond the outcome's known support — makes them applicable essentially anywhere attrition or nonresponse occurs, at the cost of being the *loosest* sharp bound available; every other partial-identification result in this folder is, in effect, a way of tightening the Horowitz-Manski interval by adding one further assumption.

*Source: Horowitz & Manski (2000); Manski (1989, 1990).*
