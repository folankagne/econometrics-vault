---
title: Trimming and Overlap Violations
source: "Econ 2b, Ch.5 Estimation under Unconfoundedness, §Trimming and Overlap Violations"
status: enriched
tags:
  - overlap
  - trimming
  - external-validity
prerequisites:
  - unconfoundedness-methods/nonparametric-identification-under-cia
  - unconfoundedness-methods/inverse-probability-weighting
---
## When overlap fails in practice

Even when the [overlap assumption](../unconfoundedness-methods/nonparametric-identification-under-cia.md) holds strictly ($0<p(x)<1$ everywhere), it can fail *practically*: at some covariate values $\hat p(x)$ sits very close to $0$ (almost no treated comparison units) or very close to $1$ (almost no untreated comparison units). This produces extreme weights in [IPW](../unconfoundedness-methods/inverse-probability-weighting.md) — dividing by a near-zero propensity score inflates a single observation's influence enormously — and correspondingly high estimator variance.

```tikz
\begin{document}
\begin{tikzpicture}[scale=1]
\draw[->] (0,0) -- (7,0) node[right] {$\hat p(X)$};
\draw[->] (0,0) -- (0,3) node[above] {density};
\draw[thick] plot[smooth] coordinates {(0.1,0.2) (0.7,1.0) (1.4,2.2) (1.75,2.4) (2.45,1.8) (3.5,0.8) (4.55,0.3) (5.6,0.05)};
\draw[thick,dashed] plot[smooth] coordinates {(1.4,0.05) (2.45,0.3) (3.5,0.8) (4.55,1.8) (5.25,2.4) (5.95,2.0) (6.65,0.6) (6.86,0.2)};
\node[above] at (1.75,2.5) {Control};
\node[above] at (5.25,2.5) {Treated};
\draw[dotted] (2.2,0) -- (2.2,3);
\draw[dotted] (5.0,0) -- (5.0,3);
\node[below] at (0,0) {$0$};
\node[below] at (7,0) {$1$};
\node at (3.6,-0.5) {common support};
\end{tikzpicture}
\end{document}
```
*Figure — estimated propensity-score densities for control (solid) and treated (dashed) groups. Overlap is good between the dotted lines but thin outside them, exactly where one group is barely represented — the region trimming discards.*

## The trimmed estimand

Rather than extrapolate beyond where the data can actually support a comparison, redefine the target parameter itself:

$$\mathbb{E}[Y_i(1)-Y_i(0) \mid \alpha < p(X_i) < 1-\alpha]$$

for some threshold $\alpha>0$ (commonly $\alpha=0.1$) — the ATE **restricted to the subpopulation where overlap is empirically adequate**, rather than the full population.

## A trade-off, not a free lunch

Trimming buys more reliable estimation — less extrapolation, lower variance — at the cost of **changing the estimand**: the trimmed ATE describes a different (narrower) population than the one originally of interest, raising external-validity concerns about how far the result generalizes. The choice of $\alpha$ is inherently context-dependent, and since it changes *what parameter is being estimated*, it should always be reported transparently rather than treated as a purely technical tuning choice.

## Overlap failure at scale: the LaLonde control group

The severity of a real overlap violation is visible in Cunningham's (2021, Ch.5) presentation of the LaLonde data: plotting a histogram of the estimated propensity score separately for NSW trainees and CPS control respondents shows the two distributions barely overlapping at all — the CPS sample is overwhelmingly concentrated at propensity scores near zero (most CPS respondents look nothing like a disadvantaged NSW trainee on observables), while NSW trainees range up to propensity scores near one. Dehejia and Wahba's response was exactly the [trimmed estimand](../unconfoundedness-methods/trimming-and-overlap-violations.md) developed here: drop the 12,611 CPS observations whose propensity scores fell outside the treated group's range entirely, accepting a narrower, better-supported comparison in exchange for a credible estimate — a concrete illustration that trimming is not an optional refinement but often the only way to make an unconfoundedness-based estimate meaningful when the raw comparison groups are this different.

*Source: Cunningham (2021), Ch.5; Dehejia & Wahba (1999).*
