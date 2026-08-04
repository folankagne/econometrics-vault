---
title: Two Approaches to Implementing Marshall's Maxim
source: "Econ 2b, Ch.1 Traditional Approach to Causality, §Summary: Two Approaches, §What's New with Treatment Effect Models?"
status: enriched
tags:
  - identification-strategy
  - credibility-revolution
  - marshalls-maxim
prerequisites:
  - causal-inference-foundations/marshalls-maxim-and-the-all-causes-model
  - identification/zcm-and-zc-assumptions
  - instrumental-variables/iv-as-a-source-of-exogenous-variation
---
## Two routes to ceteris paribus

Everything covered in this course's opening chapter reduces to two broad strategies for implementing Marshall's *ceteris paribus* maxim:

**1. Control other causes ex post, statistically.** This requires the statistical model to be a valid approximation of the all-causes model (no remaining [omitted-variable bias](../identification/zcm-and-zc-assumptions.md)), and requires *residual variation* in the cause of interest once every other cause is held equal. The natural follow-up question is: *where does that residual variation come from?* In an RCT the answer is simple — randomization. In observational data, it demands a harder argument: individuals with identical observables may still differ along something that drives their choices (e.g. private information not captured by the model) — and the analyst must argue that this remaining variation is unrelated to the outcome through any channel other than the cause of interest.

**2. Use experimental or quasi-experimental variation.** This does not require an all-causes model at all — the mechanism generating the outcome can remain a black box — but it does require an actual source of randomized or as-good-as-random variation, of the kind exploited by [instrumental variables](../instrumental-variables/iv-as-a-source-of-exogenous-variation.md). Many observational datasets simply contain no such variation, ruling this route out regardless of how rich the data is.

## What treatment-effect models add

The rest of Part II of this vault develops the **treatment effect / design-based** tradition, organized around two recurring questions:

- **Credibility.** For any estimator used — OLS or IV in experiments, IV or local linear regression in quasi-experiments ([RDD](../regression-discontinuity/00-overview.md)), matching or OLS under selection-on-observables ([unconfoundedness](../unconfoundedness-methods/00-overview.md)) — the emphasis shifts from "what functional form fits" to "what identification strategy justifies this comparison."
- **Robustness to heterogeneity.** Rather than assuming a single homogeneous effect, this tradition asks which *sub-population* a given estimator actually identifies effects for, whether OLS estimates rely on undue extrapolation beyond the data's support, and whether different instruments (or different comparison groups) would identify different parameters altogether — the [LATE](../instrumental-variables/weak-instruments-and-iv-warnings.md) concern already previewed from Econ 1, developed fully in the chapters that follow.

## The experimental benchmark, in practice

Angrist and Pischke (2009, Ch.2) take route 2 as the field's benchmark even for observational work: "not all researchers share this view, but many do," and cite their own advisor Orley Ashenfelter's assessment of schooling-and-income research as illustrative of the mindset — betting that a genuine randomized experiment would confirm what the best quasi-experimental estimates already show, and using that hypothetical experiment as the standard against which any non-experimental design is judged. Their own Tennessee STAR class-size example embodies route 2 directly: literal random assignment of students to small versus regular classes removed the need for any all-causes model of what drives student achievement, while the Angrist-Lavy (1999) Israeli class-size study embodies a *quasi-experimental* version of the same route — exploiting Maimonides' Rule (a legal cap of 40 students per class) to argue that enrollment cohorts of 40 versus 41 students are "as good as randomly assigned" to different class sizes, without ever specifying a full theoretical model of achievement.

*Source: Angrist & Pischke (2009), Ch.2.*
