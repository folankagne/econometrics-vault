---
title: Statistical Power, and Type I / Type II Errors
source: "Econ 2b, Ch.2 Rubin's Causal Model and Randomized Experiments, §The Power of an Experiment"
status: enriched
tags:
  - statistical-power
  - type-i-error
  - type-ii-error
  - significance-test
prerequisites:
  - treatment-effects/randomized-controlled-trials
  - asymptotic-theory/hypothesis-testing-framework-errors-and-power
---
## Finite samples reintroduce imbalance

Identification results (like [no selectivity holding by design](../treatment-effects/randomized-controlled-trials.md)) describe what randomization delivers as $N\to\infty$: at infinite sample size, treatment and control groups are identical in every respect but treatment status. At any *finite* $N$, they are always somewhat different by chance — an **imbalance** that could be mistaken for a treatment effect. Statistical inference is what lets a finite sample distinguish a genuine effect from this sampling noise.

> Sampling error is not the same as bias. Standard errors quantify sampling error; they say nothing about bias. A biased estimator can report a small, precise standard error while still being far from the truth — precision is not accuracy.

## Significance testing, briefly restated

By the CLT, $\hat\beta$ is asymptotically $\mathcal{N}(\beta, \sigma_{\hat\beta}^2)$. Under $H_0:\beta=0$, at risk level $\alpha$ (e.g. $5\%$), the critical value $C_\alpha$ solves $1-\alpha = 2\Phi(C_\alpha)-1$; for $\alpha=0.05$, $C_\alpha = 1.96$. The decision rule rejects $H_0$ when $|\hat\beta/\sigma_{\hat\beta}| > 1.96$ — the same asymptotic normal test developed in [the hypothesis testing framework](../asymptotic-theory/hypothesis-testing-framework-errors-and-power.md).

## Type I and Type II errors, and power

A **Type I error** finds an effect where none exists (false positive); a **Type II error** fails to find a real effect (false negative). Significance tests control the Type I error rate directly (that is what $\alpha$ *is*); **power** computations manage the Type II error rate:

$$\text{Power} = 1 - \mathbb{P}(\text{Type II error})$$

Power matters because an underpowered study risks running the full logistical and financial cost of an experiment and still failing to detect a real effect — not because the effect isn't there, but because the design was never capable of finding it reliably. The usual workflow: fix an acceptable power (often $80\%$) at a given significance level (often $5\%$); decide on the smallest effect size $\beta$ worth being able to detect; then compute the sample size needed to achieve that power for that effect. Because researchers typically *can* choose sample size in an experimental setting — unlike in most observational work — this design question is worth answering *before* data collection, not after.

## An alternative to the asymptotic-normal test: randomization inference

Cunningham (2021, Ch.4) presents **randomization inference** as a conceptually distinct alternative to the CLT-based significance test above, tracing back to Fisher's (1935) "lady tasting tea" experiment (Muriel Bristol, a PhD scientist, claimed she could tell whether milk or tea was poured first into a cup — Fisher devised a permutation-based test of her claim rather than a normal-approximation one). The key idea is **Fisher's sharp null**: rather than testing $H_0: ATE=0$ (Neyman's null, about the *average* effect), Fisher's sharp null asserts that literally *every unit's* treatment effect is exactly zero, $\delta_i=Y_i^1-Y_i^0=0 \ \forall i$. Under the sharp null, both potential outcomes for every unit are known — equal to whichever was observed — so the researcher can computationally re-shuffle the treatment assignment vector, recompute a test statistic (e.g. the simple difference in means) for every possible reassignment, and build an *exact* (non-asymptotic, nonparametric) $p$-value from the resulting distribution, without ever invoking a normal approximation. This matters most precisely where the asymptotic-normal test is weakest — small samples, or samples with a few high-leverage outliers — since randomization inference's validity does not rely on $N\to\infty$ at all.

*Source: Cunningham (2021), Ch.4, "Randomization Inference"; Fisher (1935).*
