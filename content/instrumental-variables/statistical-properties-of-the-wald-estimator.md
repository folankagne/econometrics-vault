---
title: Statistical Properties of the Wald and 2SLS Estimators
source: "Econ 2b, Ch.3 Instrumental Variables, §Relevance Revisited: Weak Instruments (Angrist-Krueger, Statistical Properties)"
status: enriched
tags:
  - wald-estimator
  - consistency
  - asymptotic-normality
  - quarter-of-birth
prerequisites:
  - instrumental-variables/late-theorem
  - asymptotic-theory/convergence-in-probability-and-consistency
---
## Angrist and Krueger's quarter-of-birth design, revisited

Compulsory schooling rules create a mechanical link between birth quarter and years of schooling: children entering school in September must turn 6 by year's end, so a child born in January enters at $6.60$ years old while one born in December enters at $5.76$ — and since compulsory schooling ends at $16$ regardless of entry age, the January-born child accumulates $16-6.60=9.40$ years of schooling versus $16-5.76=10.24$ for the December-born child. This generates the Wald estimator $\hat\beta_{Wald} = \big[\mathbb{E}(\log w\mid Q1)-\mathbb{E}(\log w\mid Q4)\big]\big/\big[\mathbb{E}(S\mid Q1)-\mathbb{E}(S\mid Q4)\big]$, already familiar from [decomposing the first stage and ITT](../instrumental-variables/decomposing-the-first-stage-and-itt.md). The puzzle motivating this section: why do Angrist and Krueger's IV estimates end up so close to plain OLS?

## Not unbiased, but consistent and asymptotically normal

The Wald estimator is a *ratio* of two sample means: $\hat\beta_{Wald} = (\bar Y^{Z=1}-\bar Y^{Z=0})/(\bar D^{Z=1}-\bar D^{Z=0})$. Even though each piece is individually unbiased for its population counterpart, the expectation of a ratio is **not** the ratio of expectations — so $\hat\beta_{Wald}$ is **not generally unbiased** in finite samples. It is, however, **consistent** by [Slutsky's theorem](../asymptotic-theory/slutskys-theorem.md): $\hat\beta_{Wald}\overset{\mathbb{P}}{\to}\beta_{Wald}$, since numerator and denominator each converge to their population values and the ratio of two convergent sequences converges to the ratio (denominator permitting). It is also **asymptotically normal**, with asymptotic variance $\mathbb{V}(\hat\beta_{Wald}) = \frac{1}{\bar Z(1-\bar Z)}\cdot\frac{\mathbb{V}(u)}{N}\cdot\frac{1}{\pi_1^2}$, where $\pi_1=\mathbb{E}(D\mid Z{=}1)-\mathbb{E}(D\mid Z{=}0)$ is the first-stage strength — exactly the [take-up-differential variance formula](../treatment-effects/the-statistical-cost-of-non-compliance.md) already seen for imperfect compliance.

## What limited instrument power does — under standard asymptotics

If $\pi_1$ is small, $\mathbb{V}(\hat\beta_{Wald})$ is large: estimates are less precise, confidence intervals widen. Under the **usual** asymptotic approximation, this is the whole story — 2SLS retains a finite-sample bias that vanishes as $N\to\infty$, and reduced precision just shows up honestly as wider confidence intervals. The estimator becomes **less informative, but not misleading**. Whether this benign picture actually holds in practice — or whether "usual asymptotics" is itself a poor approximation once instruments are weak — is exactly the question taken up in [the weak instruments problem](../instrumental-variables/the-weak-instruments-problem.md).

Angrist and Pischke (2009, §4.2.1) note that this ratio-of-means structure is exactly why 2SLS software never literally implements "two separate OLS regressions": doing so by hand produces the right point estimate but the *wrong* standard errors, because the second-stage regression's residuals are computed from the fitted (not actual) endogenous regressor, understating residual variance. Dedicated 2SLS routines correct this automatically, which is why applied practice almost universally uses purpose-built commands rather than literally running two sequential OLS regressions — see [IV practitioner recommendations](../instrumental-variables/recommendations-for-iv-practitioners.md).

*Source: Angrist & Pischke (2009), §4.2.1.*
