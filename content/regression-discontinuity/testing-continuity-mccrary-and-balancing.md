---
title: Testing Continuity — The McCrary Test, Balancing, and Bunching
source: "Econ 2b, Ch.4 Regression Discontinuity Design (RDD), §The McCrary Density Test, §Balancing Tests, §When Precise Control Exists: Bunching"
status: enriched
tags:
  - mccrary-test
  - balancing-test
  - bunching
prerequisites:
  - regression-discontinuity/local-randomization-and-heterogeneous-effects-in-rdd
---
## The McCrary density test

McCrary (2008) formalizes a test for a discontinuity in the **density** of the forcing variable at $c$. No detectable discontinuity is consistent with imprecise control — individuals cannot precisely sort around the threshold. A detected discontinuity is evidence of manipulation, with two possible readings: either the RDD is **invalid** (sorting violates continuity), or the sorting behavior itself becomes the object of study (**bunching analysis** — e.g. labor-supply responses to a tax kink).

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.1]
\draw[->] (-3,0) -- (3,0) node[right] {Running variable $X$};
\draw[->] (-3,0) -- (-3,3) node[above] {Density};
\draw[dashed] (0,0) -- (0,2.8);
\node[below] at (0,-0.15) {$c$};
\draw[thick] plot[smooth] coordinates {(-3,0.6) (-2,0.9) (-1,1.2) (-0.05,1.5)};
\draw[thick] plot[smooth] coordinates {(0.05,2.6) (1,2.3) (2,1.9) (3,1.5)};
\draw[<->] (0.15,1.5) -- (0.15,2.6);
\node[right] at (0.3,2.05) {jump};
\end{tikzpicture}
\end{document}
```
*Figure — a McCrary test **failure**: the density of the running variable itself jumps at the cutoff, direct evidence that units manipulated their position relative to $c$. A passing test would instead show one continuous curve running smoothly through $c$, exactly like [the sharp-RDD outcome plot](../regression-discontinuity/sharp-rdd.md) — but here it is the running variable's own density being plotted, not the outcome.*

## Balancing tests

A **balancing test** runs the RDD specification with a *predetermined* covariate $W$ as the outcome: $W = \alpha+\gamma\cdot\mathbf{1}[X\geq c]+g(X)+\varepsilon$. A significant $\hat\gamma$ signals that units on either side differ systematically on something that should not respond to treatment at all — undermining the comparability the design relies on. Density and balancing tests check different things (manipulation of $X$ itself, versus sorting on other observables) and neither alone is sufficient — but passing both substantially strengthens the design's credibility.

## When precise control exists: bunching becomes the object of interest

Khoury (2023) studies unemployment insurance rules where benefits become more generous at $365$ days of seniority. Firms and workers can strategically time layoffs to cross this threshold, and the McCrary test shows clear bunching just above $365$ days — a violation of imprecise control that would invalidate a standard RDD. But rather than a dead end, this bunching is itself informative: it quantifies the extent of strategic behavior induced by the UI incentive structure, turning the design failure into the actual research finding.

> The lesson runs in both directions: passing density and balancing tests supports trusting an RDD estimate as a causal effect; *failing* them does not necessarily waste the data — it can instead reveal something real and separately interesting about how agents respond to the threshold itself.

## A placebo-style continuity check: the minimum drinking age

Cunningham (2021, Ch.6) presents Carpenter and Dobkin's (2009) minimum-legal-drinking-age study as a complementary way to build confidence in continuity, distinct from a formal density test: rather than testing the running variable's own density, it tests whether the *outcome* jumps at the cutoff for reasons **unrelated** to the treatment under study. Plotting mortality rates by age (the running variable) and by cause of death, motor-vehicle-accident deaths jump sharply at exactly age 21 — consistent with a causal effect of legal alcohol access — while deaths from unrelated causes (e.g. certain external causes not plausibly linked to drinking) show no comparable jump at the same age. This kind of **cause-specific placebo check** is a close cousin of a balancing test: if age 21 caused a jump in *every* category of death, that would suggest something other than alcohol access is driving the discontinuity (a biological change at 21, a coincidental policy bundling), undermining confidence in the causal story; the fact that only alcohol-plausible causes jump is exactly the pattern continuity-based identification predicts.

*Source: Cunningham (2021), Ch.6; Carpenter & Dobkin (2009).*
