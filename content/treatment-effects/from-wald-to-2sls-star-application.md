---
title: "From Wald to 2SLS: The STAR Application"
source: "Econ 2b, Ch.2 Rubin's Causal Model and Randomized Experiments, §From Wald to 2SLS, §Comparing OLS and 2SLS Estimates"
status: enriched
tags:
  - two-stage-least-squares
  - star-experiment
  - composition-effects
  - imperfect-compliance
prerequisites:
  - treatment-effects/imperfect-compliance-and-encouragement-designs
  - instrumental-variables/two-stage-least-squares
---
## Extending the Wald estimator to a continuous treatment

The [Wald estimator](../treatment-effects/imperfect-compliance-and-encouragement-designs.md) handles a single binary instrument and a single endogenous regressor. Krueger (1999) instead uses **2SLS** with a continuous treatment — actual class size $CS$ — and two instruments built from initial assignment:

$$\text{First stage:}\quad CS_{ics} = \pi_0+\pi_1S_{ics}+\pi_2R_{ics}+\pi_3X_{ics}+\delta_s+\tau_{ics}$$
$$\text{Second stage:}\quad Y_{ics} = \beta_0+\beta_1\widehat{CS}_{ics}+\beta_2X_{ics}+\alpha_s+\varepsilon_{ics}$$

where $S$ and $R$ are indicators for initial assignment to small and regular classes respectively (regular-with-aide is the omitted category), $X$ collects student and teacher covariates, and $\delta_s,\alpha_s$ are school fixed effects. This is exactly the [2SLS machinery](../instrumental-variables/two-stage-least-squares.md) already developed, applied here to a continuous rather than binary endogenous regressor, and — as in [adding controls to RCTs](../treatment-effects/adding-controls-in-rcts.md) — the covariates $X$ are included purely to gain precision, not because they are needed for identification.

## Comparing OLS and 2SLS estimates

Krueger's Table VII reports OLS (using realized class size) alongside 2SLS (using initial assignment as instrument) across grades K–3; the two are similar in magnitude but not identical — e.g. in grade 3, $-0.61$ (OLS) versus $-0.81$ (2SLS). Several mechanisms can explain the gap:

- **Composition effects.** Students who switch out of small classes (non-compliers) may differ systematically from those who stay — if students with behavioral problems are moved to regular classes, OLS on *realized* class size conflates the causal effect of class size with a "difficult student" selection effect.
- **Asymmetric selection.** The roughly 10% non-compliance need not be random: it may concentrate among students for whom small classes matter less (or are more disruptive), biasing the OLS composition of each group.
- **Cumulative bias by grade.** The largest OLS/2SLS gap appears in grade 3, consistent with non-compliance accumulating over the multi-year study and progressively distorting the composition of the "treated" (small-class) group under OLS.

> The general lesson: in imperfect-compliance settings, 2SLS using the original random assignment as instrument isolates the causal effect of interest, while OLS on the realized (chosen, not assigned) treatment can be contaminated by exactly the kind of selection an RCT was designed to eliminate in the first place.

This is the treatment-evaluation mirror of the general point developed in [the multivariate IV estimator](../instrumental-variables/multivariate-iv-estimator.md): Angrist and Pischke's (2009) own quarter-of-birth application found 2SLS estimates consistently *at or above* OLS, whereas here 2SLS and OLS diverge because of within-study composition effects from mid-experiment class switching — a reminder that there is no universal rule for which direction OLS/2SLS gaps run; the direction is diagnostic of the specific selection mechanism at work in each application, not a fixed law.

*Source: Krueger (1999).*
