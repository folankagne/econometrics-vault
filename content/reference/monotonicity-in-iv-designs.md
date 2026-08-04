---
title: Monotonicity in IV Designs — Algebra and Diagnostic Examples
source: "Econ 2b, Appendix, §Further Discussion of the Monotonicity Assumption"
status: enriched
tags:
  - monotonicity
  - defiers
  - instrumental-variables
prerequisites:
  - instrumental-variables/monotonicity-and-relevance-for-late
  - instrumental-variables/consequences-of-late
---
## Why monotonicity matters, in one line of algebra

Since always-takers and never-takers never change treatment status with $Z$, the ITT is driven by compliers and defiers alone:

$$\text{ITT}_Y = \pi_C\,\mathbb{E}[\Delta_i\mid C] + \pi_D\,\mathbb{E}[-\Delta_i\mid D] \qquad\qquad \text{ITT}_D = \pi_C - \pi_D$$

so the Wald estimand is $\text{ITT}_Y/\text{ITT}_D = \big[\pi_C\mathbb{E}[\Delta_i\mid C] - \pi_D\mathbb{E}[\Delta_i\mid D]\big]/(\pi_C-\pi_D)$ — a combination of complier and defier effects with **opposite signs** in the numerator, which corresponds to no well-defined causal parameter for anyone. Only when $\pi_D=0$ (monotonicity) does this collapse to $\mathbb{E}[\Delta_i\mid C]=\text{LATE}$. Without monotonicity, even a *positive* first stage ($\pi_C>\pi_D$) can pair with a Wald estimate matching no one's actual treatment effect — the [sign-reversal failure](../instrumental-variables/consequences-of-late.md) restated in its most compact algebraic form.

## Diagnostic examples

**Holds by construction — one-sided non-compliance.** In a drug trial where the control arm has *no access* to the drug, $D_i(0)=0$ for everyone, so $D_i(1)\geq D_i(0)$ holds trivially. Only compliers and never-takers can exist; there are no always-takers (no access in control) and no defiers (impossible when $D_i(0)=0$ identically).

**Plausible — scholarships.** A tuition scholarship lowers the cost of enrolling; it is hard to construct a story for someone who would enroll *without* the scholarship but specifically refuse to enroll *because* they received one. The instrument pushes everyone the same direction.

**Fails — same-sex instrument.** Parents wanting gender diversity, with two boys, become more likely to have a third child (compliers); parents who specifically wanted boys and already have two may feel "complete" and become *less* likely (defiers). Both types coexist.

**Fails, and definition-dependent — draft lottery.** A low draft number raises combat-infantry service for most (compliers), but some individuals, learning they face high draft priority, may preemptively enlist in a *different* branch specifically to avoid combat infantry — defiers with respect to that narrowly defined outcome. Critically, monotonicity here **depends on how $D$ is defined**: for $D=$ "any military service," the lottery is probably monotone; for $D=$ "combat infantry service" specifically, it may not be.

## The diagnostic question

Monotonicity is most credible when the instrument operates through a **single, unambiguous channel** — removing a barrier, lowering a cost — pushing everyone the same way. It becomes suspect whenever the instrument could plausibly trigger **qualitatively different** behavioral responses in different people. The practical test: *can I tell a plausible story for why someone would do the opposite of what the instrument encourages?* If yes, monotonicity is threatened. This is a thought exercise grounded in institutional knowledge — not a statistical test that any dataset can settle on its own.

This diagnostic question is the direct practical counterpart of the same-sex-instrument case study developed in [theory and the exclusion restriction](../instrumental-variables/theory-and-the-exclusion-restriction.md): Rosenzweig and Wolpin's critique showed that verifying an instrument's monotonicity (and exclusion) properly requires writing down an explicit model of the choice being instrumented, not simply asserting plausibility. The draft-lottery example above illustrates why that model must specify the outcome variable precisely — the same instrument can satisfy monotonicity for one definition of treatment and violate it for another, so "is this instrument monotone?" is never a question that can be answered without first pinning down exactly what "treatment" means.
