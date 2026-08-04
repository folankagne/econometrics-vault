---
title: Double/Debiased Machine Learning (DML)
source: "Econ 2b, Ch.5 Estimation under Unconfoundedness, §Which Estimator to Choose?"
status: enriched
tags:
  - double-machine-learning
  - semiparametric-efficiency
  - cross-fitting
prerequisites:
  - unconfoundedness-methods/doubly-robust-estimation
---
## Efficiency as a tiebreaker

Among consistent estimators, some achieve the **semi-parametric efficiency bound** — the lowest possible asymptotic variance attainable by any regular estimator — under weaker assumptions than others. This is the criterion that separates otherwise-valid competing approaches once consistency alone is no longer discriminating.

## The current recommended recipe

Chernozhukov et al. (2018) formalize **Double/Debiased Machine Learning (DML)**: combine [doubly-robust estimation](../unconfoundedness-methods/doubly-robust-estimation.md) with machine-learning estimators for $g_1(x)$, $g_0(x)$, and $p(x)$ (random forests, LASSO/elastic net, neural networks, ensembles), and use **cross-fitting** (sample splitting — estimating the nuisance functions on one fold and the treatment effect on a held-out fold) to avoid the overfitting bias that flexible ML methods would otherwise introduce into the treatment-effect estimate itself. This combination achieves the efficiency bound under mild conditions, making it the current state of the art for unconfoundedness-based causal estimation. Which specific ML method to use for each nuisance function remains an open, largely empirical, choice.

Cunningham (2021, Ch.5) frames DML as the culmination of the estimator progression this folder walks through — from simple matching, through propensity-score methods, to doubly-robust estimation, to a fully machine-learning-augmented version — but stresses it does not relax the *identifying* assumption at all: DML is a strictly better way to estimate the nuisance functions $g_d(x)$ and $p(x)$ once CIA and overlap are assumed to hold, not a way to avoid needing those assumptions in the first place. Applied to a hypothetical re-analysis of the LaLonde comparison groups, DML's flexible ML-based propensity and outcome models might fit the data better than logit/OLS, but they would not rescue an estimate from a genuinely non-comparable control group — the CIA's institutional plausibility remains the binding constraint no matter how sophisticated the estimator.

*Source: Cunningham (2021), Ch.5; Chernozhukov et al. (2018).*
