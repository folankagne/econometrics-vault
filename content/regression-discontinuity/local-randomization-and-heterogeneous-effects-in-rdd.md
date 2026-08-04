---
title: Local Randomization and Heterogeneous Effects in RDD
source: "Econ 2b, Ch.4 Regression Discontinuity Design (RDD), §Interpreting and Testing the Continuity Assumption (Consequences of Imprecise Control)"
status: enriched
tags:
  - local-randomization
  - heterogeneous-treatment-effects
  - late
prerequisites:
  - regression-discontinuity/the-continuity-assumption-and-imprecise-control
---
## Consequence 1: local randomization

Imprecise control implies $\Pr(W{=}w,U{=}u\mid X{=}x)$ is continuous in $x$. **Proof.** By Bayes' rule, $\Pr(W{=}w,U{=}u\mid X{=}x) = f(x\mid W{=}w,U{=}u)\cdot \Pr(W{=}w,U{=}u)/f(x)$. Imprecise control makes the numerator continuous in $x$; since $f(x)$ is a continuous mixture of continuous densities, it too is continuous, so the ratio is continuous. Locally at the threshold, treatment is therefore **as good as randomly assigned** — the full distribution of both observed and unobserved characteristics is identical just above and just below $c$.

## Consequence 2: the RDD estimand under heterogeneous effects

With effect heterogeneity $\tau(w,u)$, the jump decomposes as:

$$Y^+ - Y^- = \sum_{u,w}\tau(w,u)\cdot \frac{f(c\mid W{=}w,U{=}u)}{f(c)}\cdot \Pr[W{=}w,U{=}u]$$

**Proof sketch.** For $\varepsilon>0$, $\mathbb{E}[Y\mid X{=}c{+}\varepsilon] = \sum_{u,w}\Pr[W{=}w,U{=}u\mid X{=}c{+}\varepsilon]\cdot(\tau(w,u)+w\delta_1+u)$ (sharp design, law of iterated expectations); for $\varepsilon<0$, the same sum without the $\tau(w,u)$ term (untreated). Taking limits and subtracting, the $w\delta_1+u$ terms cancel by the continuity established in Consequence 1, leaving a weighted sum of $\tau(w,u)$ alone, with weights given by Bayes' rule as above.

This means $Y^+-Y^-$ is a **weighted average of treatment effects**, with subpopulations *overrepresented at the threshold* — whether by chance or by (imprecise) strategic sorting — receiving proportionally higher weight. This is structurally the same phenomenon as [LATE](../instrumental-variables/late-theorem.md) in IV: the estimand is an average over whoever's variation actually drives the comparison, not the full population. The [fuzzy-RDD Wald estimator](../regression-discontinuity/fuzzy-rdd.md) can be shown to equal exactly this local Wald/IV estimand, taking limits of $\mathbb{E}[Y\mid Z,|X-c|<\varepsilon]$ and $\mathbb{E}[D\mid Z,|X-c|<\varepsilon]$ as $\varepsilon\to0$.

## Consequence 3: testable implications

Imprecise control implies two directly testable predictions: the **density** of $X$ is continuous at $c$, and the distribution of **predetermined covariates** $W$ is continuous at $c$ — precisely the [McCrary and balancing tests](../regression-discontinuity/testing-continuity-mccrary-and-balancing.md) used in practice to assess RDD credibility.

Cunningham (2021, Ch.6) draws out the practical implication of "local randomization" directly: since imprecise control implies treatment is as-good-as-randomly assigned in a neighborhood of $c$, an RDD estimate can be interpreted with essentially the same internal-validity confidence as a small randomized experiment conducted *only* on units near the threshold — Hoekstra's own framing of comparing "a student who scored 1240" against "a student who scored 1250" makes exactly this point vivid: individually the two students may differ, but averaged across the hundreds of students scoring near that boundary, the groups are balanced on both observed and unobserved characteristics, which is the entire justification for treating the SAT-score jump in enrollment as generating a locally randomized comparison.

*Source: Cunningham (2021), Ch.6.*
