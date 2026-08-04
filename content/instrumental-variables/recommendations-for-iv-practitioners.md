---
title: Recommendations for IV Practitioners
source: "Econ 2b, Ch.3 Instrumental Variables, §Recommendations for Practitioners"
status: enriched
tags:
  - best-practices
  - reduced-form
  - liml
prerequisites:
  - instrumental-variables/testing-and-fixing-weak-instruments
---
Following Angrist and Pischke's *Mostly Harmless Econometrics* (p.212), five practical habits for reporting an IV estimate honestly:

1. **Report the first stage**, and sanity-check it: do the signs and magnitudes of the coefficients make substantive sense? A "significant" first stage in a small sample can still reflect a mechanism that isn't really there.
2. **Report the F-statistic** on the excluded instruments — is it above the conventional $10$ threshold from [Stock-Yogo](../instrumental-variables/testing-and-fixing-weak-instruments.md)?
3. **Report the just-identified IV estimate** using the single strongest instrument, alongside any over-identified specification.
4. **Cross-check over-identified 2SLS against LIML.** If the two estimators disagree substantially, that is itself informative — consider reducing the number of instruments rather than trusting the over-identified 2SLS number as-is.
5. **Report the reduced-form estimate** (and its own F-statistic): it is unbiased, unlike 2SLS in finite samples. As Angrist and Pischke put it: "if you can't see the causal relationship of interest in the reduced form, it's probably not there" — a useful discipline against over-trusting a 2SLS coefficient that a simple $Z$-on-$Y$ regression doesn't visibly support.

Two further recommendations follow directly from the mechanics developed elsewhere in this vault. Never construct 2SLS "by hand" as two literal sequential OLS regressions — the resulting point estimate is correct but the [second-stage standard errors are wrong](../instrumental-variables/statistical-properties-of-the-wald-estimator.md), since off-the-shelf software cannot know the second-stage regressor is itself estimated. And when reporting instruments constructed from many mutually exclusive dummies (e.g. quarter-of-birth × year-of-birth interactions), remember that [2SLS with dummy instruments is numerically GLS on group means](../instrumental-variables/continuous-iv-and-the-first-stage.md) — a useful sanity check ("does a plot of group means against group first-stage values look like the 2SLS line?") that catches many specification errors before they reach a regression table.

*Source: Angrist & Pischke (2009), Ch.4 "Last Words," p.212.*
