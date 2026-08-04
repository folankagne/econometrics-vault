---
title: Interpreting Unconfoundedness — Selection on Observables in Practice
source: "Econ 2b, Ch.5 Estimation under Unconfoundedness, §Interpretation of Unconfoundedness"
status: enriched
tags:
  - selection-on-observables
  - lottery-winners
  - military-service
prerequisites:
  - unconfoundedness-methods/nonparametric-identification-under-cia
---
## Selection on observables, precisely

Unconfoundedness ("selection on observables") means: no unobservable simultaneously determines treatment status *and* correlates with potential outcomes. Under the [overlap assumption](../unconfoundedness-methods/nonparametric-identification-under-cia.md), $p(x)$ must be strictly between $0$ and $1$ — so *something* random still determines who gets treated at any given covariate value; unconfoundedness just requires that whatever that residual randomness is, it is unrelated to potential outcomes. In other words: **given the observables, treatment occurs "by chance."**

## Example: lottery winners

Imbens, Rubin, and Sacerdote (2001) study the effect of winning the lottery on future earnings among Massachusetts lottery players. Winning is random *among players* — but players differ systematically in observables such as number of tickets purchased weekly, age, education, and pre-lottery earnings. Unconfoundedness here amounts to: conditional on these observables, winning is as good as random — plausible precisely because the randomizing device (which numbers get drawn) has no way of "knowing" anything beyond what's captured by ticket-buying behavior and demographics.

## Example: voluntary military service

Angrist (1998) studies voluntary enlistment's effect on future earnings by comparing applicants who enlisted to those who didn't, matched on observables. Here the CIA's plausibility hinges entirely on **how the military selects applicants**: if the military's assessment of applicant quality draws on *unobserved* traits also correlated with future earnings (ambition, family connections, unmeasured ability), the CIA fails. If the assessment instead rests only on **observed** characteristics (test scores, education), CIA may hold.

> Both examples make the same point from different angles: whether unconfoundedness is credible is never a statistical question answerable from the data — it is an **institutional** question about the actual mechanism generating treatment assignment, and it can only be argued for using outside knowledge of that mechanism, exactly as with [exogeneity in general](../identification/exogeneity-and-endogeneity.md).

A third, cautionary example from Cunningham (2021, Ch.5) is the NSW job-training program itself: unconfoundedness there requires believing that, conditional on the observed demographics and pre-program earnings history, whatever else determined an individual's presence in the CPS/PSID comparison sample versus actual NSW enrollment is unrelated to their labor-market potential. Given how badly LaLonde's naive regression and matching estimates performed relative to the experimental benchmark, this is precisely the case where unconfoundedness's institutional plausibility should have been — and, with hindsight, was — questioned from the start: comparison-group construction from a general population survey, rather than from a genuine applicant pool who chose not to enroll, is a comparatively weak foundation for CIA relative to the lottery and enlistment examples above.

*Source: Cunningham (2021), Ch.5; LaLonde (1986).*
