---
title: Special Cases and When RDD Fails
source: "Econ 2b, Ch.4 Regression Discontinuity Design (RDD), §Special Cases and Limitations, §Summary: RDD in the Identification Toolkit"
status: enriched
tags:
  - geographic-rdd
  - bunching
  - identification-strategy
prerequisites:
  - regression-discontinuity/testing-continuity-mccrary-and-balancing
  - identification/identification-strategies-overview
---
## Settings that don't fit the standard RDD prototype

The prototypical RDD sequence is: individuals make decisions affecting the forcing variable, a stochastic shock occurs (imprecise control), then treatment is assigned by threshold. Several common settings depart from this: **perfect control** (tax optimization around income brackets); **multiple simultaneous treatments** at the same threshold (e.g. several regulations all changing at a firm-size cutoff, making it impossible to attribute the jump to any one of them); **age discontinuities**, where *everyone* eventually crosses the threshold (e.g. pension eligibility at 65), raising different generalizability questions than a one-time eligibility cutoff; and **geographic discontinuities**, where the forcing variable is spatial rather than a single continuous number.

## Geographic RDD's extra challenges

Location on either side of an administrative boundary is rarely as-good-as-random — people **sort** into where they live, at least partly, based on the very policies that differ across the boundary. **Spatial interactions** can spill across the boundary, so any estimate captures only a net effect. And boundaries frequently coincide with **multiple** policy differences simultaneously, not just the one under study. Before trusting a geographic RDD, three questions are essential: what determined the boundary's location in the first place (did houses come first, or the boundary)? Is there direct evidence of sorting around it? And are there other treatments that also happen to change at the same boundary?

## When RDD fails by institutional design: Chilean voucher schools

Urquiola and Verhoogen (2009) study Chilean private voucher schools facing the same $45$-student class-size cap as Angrist and Lavy's Israeli schools — but in an institutional context where parents freely choose schools and schools compete on price and quality. This predicts **sorting** (wealthier families at higher-quality, pricier schools), **strategic bunching** (schools adjusting fees specifically to avoid crossing the enrollment threshold that would force a new class), and consequently a **jump in school quality and student background right at the cap** — because higher-quality schools bunch less than lower-quality ones. The enrollment distribution shows sharp spikes just below $45$, $90$, and $135$ (multiples of the cap): a clear density discontinuity, meaning the McCrary test **fails**, and the RDD identifying assumption is violated **by institutional design**, not by accident. A naive application of the Maimonides-style design here would confound the causal effect of class size with a composition effect driven by strategic sorting.

## RDD in the identification toolkit

RDD's core idea — exploit a discontinuous change in treatment probability at a known threshold — rests on continuity of potential outcomes, justified by imprecise control over the forcing variable; sharp designs estimate by OLS, fuzzy designs by 2SLS using the threshold indicator as instrument; the estimand is a local average effect at the threshold, a weighted average under heterogeneity; and validity rests on density tests, balancing tests, and bandwidth/specification sensitivity. Its chief advantages — a known, often directly observable assignment mechanism, and partially testable assumptions — trade off against being a fundamentally **local** identification strategy: valid only near the threshold, data-hungry there specifically, and vulnerable to exactly the kind of manipulation the Chilean example illustrates.

Set against the rest of the [identification-strategy map](../identification/identification-strategies-overview.md): RDD has less internal validity than an RCT but applies far more broadly to non-experimental settings; it is a special case of IV where the instrument is the threshold indicator itself, with an unusually transparent assignment mechanism; unlike selection-on-observables methods, it does not require that selection be fully explained by observed covariates; and unlike difference-in-differences, it draws its identifying variation from a cross-sectional threshold rather than from variation over time.

Cunningham (2021, Ch.6) opens his RDD chapter by noting its "huge popularity" in modern applied economics relative to its comparatively obscure origins in educational psychology (Thistlethwaite & Campbell, 1960) — a rise driven precisely by the two properties emphasized throughout this folder: administrative rules embedding sharp thresholds are common and increasingly well-documented in large administrative datasets, and the design's core assumption (continuity, tested via density and balancing checks) is unusually transparent and falsifiable compared to the harder-to-verify assumptions behind [unconfoundedness methods](../unconfoundedness-methods/00-overview.md). The Chilean voucher-school case is his own cautionary counterpoint: precisely because RDD's credibility rests so heavily on imprecise control, institutional settings that reward precise sorting (competitive private markets, tax optimization, strategic bunching) are exactly where the design is most likely to fail silently if the McCrary and balancing checks are skipped.

*Source: Cunningham (2021), Ch.6; Thistlethwaite & Campbell (1960); Urquiola & Verhoogen (2009).*
