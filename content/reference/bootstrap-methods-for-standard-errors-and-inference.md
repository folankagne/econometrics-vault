---
title: Bootstrap Methods for Standard Errors and Inference
source: "Efron & Tibshirani (1993)"
status: enriched
tags:
  - beyond-lectures
  - bootstrap
  - resampling
  - standard-errors
  - randomization-inference
prerequisites:
  - asymptotic-theory/convergence-in-distribution-and-the-central-limit-theorem
  - treatment-effects/statistical-power-and-type-i-ii-errors
---
## Resampling the sample itself

Every standard-error formula in this vault — the OLS variance, the delta method, the Wald estimator's asymptotic variance — is a *closed-form* approximation to an estimator's sampling distribution, derived analytically under a stated set of assumptions. The **bootstrap** (Efron, 1979) takes a different route: rather than deriving a formula, it approximates the sampling distribution **computationally**, by treating the observed sample itself as a stand-in for the population and repeatedly resampling from it.

The basic (nonparametric, i.i.d.) **pairs bootstrap** procedure: draw a new sample of size $n$ from the original $n$ observations **with replacement**, recompute the estimator $\hat\theta^{(b)}$ on this resampled dataset, and repeat this $B$ times (typically $B=1{,}000$ or more) to build up an empirical distribution $\{\hat\theta^{(1)},\dots,\hat\theta^{(B)}\}$. The standard deviation of this empirical distribution is the **bootstrap standard error**; its $2.5$th and $97.5$th percentiles give a **percentile bootstrap confidence interval** — no closed-form variance formula is ever derived or needed.

## Why this can help precisely where closed-form formulas struggle

The bootstrap is most valuable exactly where an analytical variance formula is unavailable, intractable, or known to perform poorly: statistics that are complicated nonlinear functions of the data (median regression, certain [GMM](../generalized-method-of-moments/the-gmm-estimator-and-efficient-weighting.md) estimators with awkward asymptotic variance expressions), or settings where the [delta method](../reference/the-delta-method.md)'s first-order Taylor approximation is known to be a poor guide in finite samples. It is, in a sense, the general-purpose numerical answer to a question the delta method answers analytically: "what is the sampling variance of this transformation of my estimator?" — and unlike the delta method, it requires no differentiability of the transformation at all.

## Relation to randomization inference

The bootstrap is a close cousin, but not identical, to [randomization inference](../treatment-effects/statistical-power-and-type-i-ii-errors.md) developed elsewhere in this vault: both are computational, assumption-light alternatives to asymptotic-normal inference, but they resample different things for different purposes. Randomization inference (Fisher's exact test) permutes the **treatment assignment** while holding potential outcomes fixed, to test a sharp null hypothesis; the bootstrap resamples **entire observations** to approximate the sampling distribution of an estimator under repeated sampling from the population, without any hypothesis-testing structure built in. In practice they are often used for related but distinct purposes: randomization inference for hypothesis tests in experiments, the bootstrap for standard errors and confidence intervals more generally, including in observational settings with no explicit assignment mechanism to permute.

## A caveat: what the bootstrap does not fix

The bootstrap approximates a sampling distribution *given the estimator and the data-generating process actually in play* — it cannot repair a biased or inconsistent estimator, and it can itself perform poorly in settings with weak identification, boundary parameters, or dependent (non-i.i.d.) data, where specialized resampling schemes (block bootstrap for time series, wild bootstrap for heteroskedastic or clustered data) are needed in place of the basic i.i.d. procedure. As with every computational shortcut developed in this vault, it is a tool for approximating an otherwise-hard sampling distribution, not a substitute for a credible identification strategy in the first place.

*Source: Efron (1979); Efron & Tibshirani (1993).*
