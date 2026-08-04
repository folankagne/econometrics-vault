---
title: Nearest-Neighbor Matching
source: "Econ 2b, Ch.5 Estimation under Unconfoundedness, §Nearest-Neighbors Matching"
status: enriched
tags:
  - matching
  - nearest-neighbor
  - consistency
  - asymptotic-unbiasedness
prerequisites:
  - unconfoundedness-methods/regression-and-kernel-based-estimation
  - asymptotic-theory/convergence-in-probability-and-consistency
---
## The estimator

For each unit $i$, let $\mathcal{J}_M(i)$ be the $M$ closest units *with the opposite treatment status*, ranked by distance $\|X_l-X_i\|$. Impute the missing potential outcome as the average outcome among these $M$ neighbors:

$$\hat g_1(X_i) = \begin{cases} Y_i & D_i=1 \\ \frac{1}{M}\sum_{j\in\mathcal{J}_M(i)}Y_j & D_i=0 \end{cases} \qquad\qquad \hat g_0(X_i) = \begin{cases} \frac{1}{M}\sum_{j\in\mathcal{J}_M(i)}Y_j & D_i=1 \\ Y_i & D_i=0 \end{cases}$$

giving $\hat\tau_{NN} = \frac{1}{n}\sum_i[\hat g_1(X_i)-\hat g_0(X_i)]$. $M$ here plays the same role a bandwidth $h$ plays for kernel estimators — it fixes how large a "neighborhood" contributes to each imputation.

```tikz
\begin{document}
\begin{tikzpicture}[scale=1]
\draw[->] (0,0) -- (6,0) node[right] {$X_1$};
\draw[->] (0,0) -- (0,5) node[above] {$X_2$};
\draw (1,1) circle (2pt); \draw (1.5,2.5) circle (2pt); \draw (2.8,1.2) circle (2pt);
\draw (3.5,3.2) circle (2pt); \draw (4.5,1.8) circle (2pt); \draw (2.2,3.8) circle (2pt);
\draw (5,3.5) circle (2pt); \draw (0.8,3.5) circle (2pt);
\fill (1.3,1.3) circle (2pt);
\fill (3.7,3.5) circle (2pt);
\fill (4.6,2.0) circle (2pt);
\draw[dashed] (1.3,1.3) -- (1,1);
\draw[dashed] (3.7,3.5) -- (3.5,3.2);
\draw[dashed] (4.6,2.0) -- (4.5,1.8);
\node[below right] at (5,0.3) {\small $\bullet$ treated \quad $\circ$ control};
\end{tikzpicture}
\end{document}
```
*Figure — Each treated unit (filled) is matched to its nearest control unit (open) in covariate space; the dashed segments are the matches nearest-neighbor matching uses to impute each treated unit's missing untreated outcome.*

## A subtlety: consistent, but not asymptotically unbiased

Unlike a kernel estimator, where $h\to0$ as $n\to\infty$, nearest-neighbor matching typically holds $M$ **fixed**. As $n$ grows, the *distance* to each of those $M$ neighbors shrinks (matches get better), but $M$ itself never grows. This raises a genuine question: is $\hat\tau_{NN}$ [consistent](../asymptotic-theory/convergence-in-probability-and-consistency.md)? Is it asymptotically unbiased? The answer: **consistent, but not asymptotically unbiased** — and these are genuinely different properties.

**An illuminating analogy.** Suppose $\bar X\overset{\mathbb{P}}{\to}\theta$ with $\sqrt{n}(\bar X-\theta)\overset{d}{\to}\mathcal{N}(0,\text{Var}(X))$, and consider $\tilde\theta_n = \bar X+h/\sqrt{n}$ for fixed $h\neq0$. Then $\tilde\theta_n\overset{\mathbb{P}}{\to}\theta$ — **consistent**, since the added bias $h/\sqrt{n}\to0$ — yet $\sqrt{n}(\tilde\theta_n-\theta) = \sqrt{n}(\bar X-\theta)+h \overset{d}{\to}\mathcal{N}(h,\text{Var}(X))$, a distribution centered at $h\neq0$: **not asymptotically unbiased**. Consistency only requires the bias to vanish in the limit; asymptotic unbiasedness (needed for standard, uncorrected confidence intervals to be valid) requires the bias to vanish *fast enough relative to $\sqrt{n}$*.

The same phenomenon affects $\hat\tau_{NN}$: the finite-$M$ matching discrepancy introduces a bias that does not shrink fast enough for $\sqrt{n}$-centered inference to be automatically valid. Consequently, constructing correct confidence intervals for nearest-neighbor matching estimators requires an explicit **bias correction**, developed formally by Abadie and Imbens (2006) — using the estimator "as is," without this correction, produces confidence intervals that are not centered where they should be.

## Bias correction, worked numerically

Cunningham (2021, Ch.5) walks through the bias-correction mechanics on a small simulated sample: for each matched pair, the raw simple difference in outcomes (e.g. $5-4$ for one treated-control pair) is adjusted by subtracting the difference in *fitted* outcome values from an auxiliary regression of $Y^0$ on $X$, evaluated at the treated unit's own covariate value versus its match's — e.g. $\hat\delta^{BC} = \big[(5-4)-(\hat\mu^0(11)-\hat\mu^0(10))\big]/4 + \dots$. Averaging this bias-corrected quantity across all matched pairs in his numeric example gives $\hat\delta^{BC}_{ATT}=3.28$, slightly above the unadjusted estimate of $3.25$ — a small correction in that particular example, but one Cunningham notes grows more consequential exactly when matching discrepancies (the gap between a unit's covariates and its nearest match's) are larger, which is precisely when the uncorrected estimator's bias is largest too.

*Source: Cunningham (2021), Ch.5; Abadie & Imbens (2006).*
