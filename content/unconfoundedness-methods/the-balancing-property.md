---
title: The Balancing Property of the Propensity Score
source: "Econ 2b, Ch.5 Estimation under Unconfoundedness, §The Balancing Property"
status: enriched
tags:
  - balancing-property
  - propensity-score
  - diagnostic-test
prerequisites:
  - unconfoundedness-methods/propensity-score-theorem
---
## Statement

Rosenbaum and Rubin (1983) also establish the **balancing property**:

$$X_i \perp D_i \mid p(X_i)$$

Conditional on the propensity score, the full covariate vector is independent of treatment status — covariates are "balanced" across treatment groups at any given value of $p(X_i)$.

## A built-in diagnostic

Unlike the CIA itself, the balancing property is directly **testable**: if $\hat p(X_i)$ is a good estimate of the true $p(X_i)$, then for any fixed value of $\hat p(X_i)$, the *distribution* of $X_i$ should look the same among the treated and the untreated. This gives a concrete **balance check**: stratify the sample into bins of $\hat p(X_i)$ (e.g. quintiles), and within each bin compare the mean of each covariate across treatment groups. Systematic differences within a bin are evidence that the propensity score model is **misspecified** — it has failed to capture something that still differs systematically between treated and untreated units at that estimated score.

> This is the propensity-score analogue of a randomization balance table in an RCT — except here, imbalance is a diagnostic of model misspecification rather than of a failed randomization, since there was no literal randomization to check in the first place.

Cunningham (2021, Ch.5) demonstrates the diagnostic value of this property directly on the LaLonde NSW data: comparing raw covariate means between NSW trainees and the CPS control sample shows severe imbalance (trainees are far more likely to be Black, younger, unmarried, and lower-earning), consistent with severe selection bias in the naive comparison. After estimating the propensity score and **trimming** observations with propensity scores outside the treated group's support — Dehejia and Wahba (1999) dropped 12,611 of the original CPS control observations for lying outside this range — the remaining matched sample shows covariate means far closer to the NSW trainees', directly confirming the balancing property is doing real work: restricting to comparable propensity-score regions is what restores the covariate balance a genuine randomized experiment would have delivered automatically.

*Source: Cunningham (2021), Ch.5; Dehejia & Wahba (1999).*
