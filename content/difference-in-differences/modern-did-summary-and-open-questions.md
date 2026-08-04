---
title: Modern DID — Summary, Diagnostics, and Open Questions
source: "Econ 2b, Ch.6 Difference-in-Differences and Two-Way Fixed Effects, §Summary and Practical Recommendations, §Extensions and Open Questions"
status: enriched
tags:
  - twfe
  - practical-recommendations
  - open-questions
prerequisites:
  - difference-in-differences/efficiency-vs-robustness-tradeoff
---
## Key takeaways

Standard TWFE is genuinely problematic under heterogeneous treatment effects — it need not be a convex combination of the underlying effects, and can even carry the wrong sign. The mechanism is always the same: **negative weights**, arising from **forbidden comparisons** that use already-treated units as controls. Dynamic (event-study) TWFE suffers a compounding version of the same problem, adding contamination across exposure horizons on top of the negative-weights issue. Modern estimators — Callaway-Sant'Anna, Sun-Abraham, Borusyak-Jaravel-Spiess, de Chaisemartin-D'Haultfœuille — all fix this by construction, restricting comparisons to genuinely valid ones; the residual choice among them is an [efficiency-versus-robustness](../difference-in-differences/efficiency-vs-robustness-tradeoff.md) trade-off, not a question of which is "correct."

## A minimal diagnostic routine

Before running (or trusting) a TWFE regression on staggered-adoption data: check for negative weights (`TwoWayFEWeights` in R, or equivalent); examine the actual structure of treatment timing in the data (is adoption genuinely staggered? is there a never-treated group?); and if weights turn out to be substantially negative, switch to one of the robust modern alternatives rather than reporting the TWFE coefficient as-is.

## Open directions

The literature continues to extend this framework to **non-binary treatments** (multi-valued or continuous intensities, beyond the binary-staggered case these estimators were built for), **non-staggered designs** (units switching in *and* out of treatment, not just once), **multiple simultaneous treatments**, formal **tests of parallel trends** itself, the **pre-testing problem** (testing for parallel trends before estimating can itself invalidate subsequent inference — a subtle but important caveat to the pre-trend-plot habit), and **partial identification** approaches that derive bounds under only "small" deviations from parallel trends, rather than assuming it holds exactly.

## Software

R: `did` (Callaway-Sant'Anna), `fixest`'s `sunab()` (Sun-Abraham), `didimputation` (BJS), `TwoWayFEWeights` (diagnostics). Stata: `csdid`, `did_imputation`, `eventstudyinteract`, `twowayfeweights`.

## Cunningham's (2021) closing assessment

Cunningham frames this entire literature as still actively unsettled: writing in 2021, he notes that "from 2018 to 2020, there has been an explosion of work on the DD design," that "much of it [remains] unpublished," and that "there has yet to appear any real consensus among applied people as to how to handle it." His own organizing scheme divides the emerging solutions into three families — reweighting approaches (Goodman-Bacon-style diagnostics, Callaway-Sant'Anna), selective-comparison approaches (Sun-Abraham, Cengiz et al.'s stacking), and machine-learning approaches (Athey et al.'s matrix completion) — while stressing a pragmatic point often lost in the technical debate: despite these genuine problems, DiD "is not going away." A Google Scholar search for "difference-in-differences" returns tens of thousands of hits, and it remains the single most common identification strategy in applied economics, ahead of IV, matching, or even RDD (despite RDD's often-cited superior credibility) — precisely because decentralized policy variation (US state-level law changes, in particular) generates a never-ending supply of natural quasi-experiments for it to exploit. The practical takeaway is therefore not "abandon TWFE" but "understand its failure modes well enough to diagnose and route around them."

*Source: Cunningham (2021).*
