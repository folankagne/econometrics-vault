---
title: "Modern DID: Efficiency versus Robustness, and the Wolfers (2006) Comparison"
source: "Econ 2b, Ch.6 Difference-in-Differences and Two-Way Fixed Effects, §Efficiency vs. Robustness Trade-offs, §Empirical Comparison: Wolfers (2006)"
status: stub
tags:
  - bjs-imputation-estimator
  - callaway-santanna
  - anticipation-effects
  - unilateral-divorce
prerequisites:
  - difference-in-differences/cohort-based-estimators-csa-sun-abraham-bjs
---
## Why BJS is more efficient than CSA

If Gauss-Markov holds (in particular, $\varepsilon_{g,t}$ uncorrelated over time), the [BJS imputation estimator](../difference-in-differences/cohort-based-estimators-csa-sun-abraham-bjs.md) is provably more efficient than [Callaway-Sant'Anna](../difference-in-differences/cohort-based-estimators-csa-sun-abraham-bjs.md) or Sun-Abraham. The mechanism is the baseline construction: CSA anchors on a **single** pre-treatment period, $\bar Y_{s,t_s-1}$; BJS instead averages **all** pre-treatment periods, $\frac{1}{t_s-1}\sum_{k=1}^{t_s-1}\bar Y_{s,k}$. More data points feeding the baseline means lower baseline variance, which is BJS's efficiency edge.

## Why that same choice creates a robustness trade-off

If treated and control groups were on genuinely parallel trends throughout the *entire* pre-period, averaging over all of it is free precision. But if trends were **slowly diverging** even before treatment — group $s$ gradually pulling ahead, say — BJS's long-run average baseline sits systematically below $s$'s true level just before $t_s$, **inflating** the estimated effect; a single recent pre-period, as CSA uses, is far less exposed to this slow drift. The comparison flips for **anticipation effects** concentrated right before $t_s$ (units starting to respond before the nominal treatment date): BJS's long averaging washes that episode out, while CSA — anchored right next to $t_s$ — is directly contaminated by it.

**Practical guidance.** If parallel trends is highly credible, prefer BJS for the efficiency gain; if there's real concern about slowly diverging trends, prefer CSA or Sun-Abraham for the added robustness. Anticipation effects specifically can often be handled more simply, by just redefining $t_s$ as the *announcement* date rather than the implementation date — whereas a genuinely widening trend gap is much harder to correct for within BJS, precisely because its averaging mechanism is what amplifies that particular bias.

## An empirical stress test: Wolfers (2006) on unilateral divorce laws

Wolfers studies how state-level adoption of unilateral divorce laws affected divorce rates, using staggered US state-level adoption — a canonical binary-staggered design. The expected pattern: divorce rates jump when the law passes (previously "locked-in" unhappy marriages can now exit), then decline over time as that stock depletes and new marriages form under the new legal regime — a mechanically expected dynamic pattern, not necessarily a behavioral response to worry about. Comparing TWFE, Sun-Abraham, Callaway-Sant'Anna, BJS, and de Chaisemartin-D'Haultfœuille (with and without linear trend controls) side by side, the estimates are **broadly similar across all of them** — direct evidence that, in this particular application, treatment-effect heterogeneity is not severe enough to make the choice of estimator practically consequential. This is itself a useful diagnostic habit: running several of the modern estimators together and checking whether they agree is a natural robustness check, independent of which one is ultimately reported.
