---
title: The Continuity Assumption and Imprecise Control
source: "Econ 2b, Ch.4 Regression Discontinuity Design (RDD), §Interpreting and Testing the Continuity Assumption"
status: enriched
tags:
  - continuity-assumption
  - imprecise-control
  - roy-model
  - selection-model
prerequisites:
  - regression-discontinuity/fuzzy-rdd
  - treatment-effects/sources-of-selection-bias
---
## Three questions, one intuition

Lee (2010) frames RDD validity around three questions: when is continuity plausible, how can it be tested, and how far do RDD results generalize? The unifying intuitive test: are individuals *immediately* to either side of the threshold comparable? If so, three things follow together — $\mathbb{E}[Y(0)\mid X]$ is continuous at $c$ (the identifying assumption itself), predetermined covariates $W$ have continuous $\mathbb{E}[W\mid X]$ at $c$ (the basis for **balancing tests**), and the *density* of $X$ is continuous at $c$ (the basis for the **McCrary test**). Balancing and density tests are not incidental diagnostics — they are direct testable implications of the exact same underlying logic that identification itself relies on.

## A selection-model view

Embed RDD in a selection model: $Y=D\tau+W\delta_1+U$, $D=\mathbf{1}[X\geq c]$, $X=W\delta_2+V$, with $W$ observed covariates, $U$ unobserved outcome determinants, $V$ unobserved variation in the forcing variable. Compared to the [Roy model](../treatment-effects/sources-of-selection-bias.md) of self-selection, where $D=\mathbf{1}[Y(1)-Y(0)\geq c]$ and the selection criterion is itself latent, RDD's key advantage is that the forcing variable $X$ is **observed** — this observability is precisely what makes the continuity assumption testable at all.

## Imprecise control over the forcing variable

Lee's fundamental reinterpretation: conditional on $(W{=}w,U{=}u)$, the density of $V$ (and hence $X$) is continuous. Individuals may *influence* $X$, but cannot **precisely manipulate** their exact position relative to the threshold — some residual, stochastic component always remains.

**Plausible (imprecise control):** exact test scores, birth date relative to school-entry cutoffs, exact enrollment counts — all subject to some randomness beyond any individual's or institution's fine control.

**Implausible (precise control):** firms optimizing reported income around a tax-bracket threshold; firms strategically timing layoffs around a benefits-eligibility threshold — settings where the agent whose behavior generates $X$ has both the incentive and the precision to land exactly where they want.

Cunningham (2021, Ch.6) frames Lee's (2010) contribution as resolving what could otherwise look like a contradiction: RDD requires the running variable to be *related* to treatment assignment (indeed, deterministically so in the sharp case) while simultaneously requiring individuals not to *precisely* control their own position relative to the cutoff. Hoekstra's SAT-score running variable satisfies both: SAT performance is certainly not random (it reflects real ability and preparation), yet no student can reliably score exactly 1250 rather than 1249 on demand — enough small, idiosyncratic noise (test-day luck, specific questions asked, grading variation) separates intention from outcome that the density of applicants remains smooth through the cutoff, which is exactly the empirical signature [the McCrary test](../regression-discontinuity/testing-continuity-mccrary-and-balancing.md) checks for directly.

*Source: Cunningham (2021), Ch.6; Lee (2010).*
