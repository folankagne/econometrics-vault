---
title: Instrumental Variables as a Source of Exogenous Variation
source: "Econ 2b, Ch.1 Traditional Approach to Causality, §Instrumental Variable Models"
status: enriched
tags:
  - instrumental-variables
  - exclusion-restriction
  - intention-to-treat
  - wald-estimator
prerequisites:
  - instrumental-variables/iv-identification-conditions
  - identification/zcm-and-zc-assumptions
---
## The key insight: look for causes of causes

When [ZC](../identification/zcm-and-zc-assumptions.md) is implausible for a regressor $X_1$, one option is to step back and ask a different question: not "what explains $y$?" but "what explains $X_1$?" — its **sources of variation**. If some of that variation is random, or as good as random, it can be used for identification even when $X_1$ itself is endogenous.

## The mechanics, as a diagram

Picture three linked effects: a random source of variation $Z$ affects the cause of interest $X_1$ (effect $A$, the **first stage**), $X_1$ affects the outcome $y$ (effect $C$, the **structural parameter of interest**), and $Z$ has a *total* effect on $y$ (effect $B$, the **reduced form** / intention-to-treat effect). Both $A$ and $B$ are easy to identify directly, since $Z$ is (as-good-as) random:

$$A = \mathbb{E}(X_1\mid Z{=}1)-\mathbb{E}(X_1\mid Z{=}0) \qquad\qquad B = \mathbb{E}(y\mid Z{=}1)-\mathbb{E}(y\mid Z{=}0)$$

Under the **exclusion restriction** — $Z$ has no direct effect on $y$ and is uncorrelated with every other cause of $y$ besides $X_1$ — the entirety of $B$ passes through $X_1$: $B = A \times C$. If $A \neq 0$ (the **relevance condition**), $C$ is identified as $C = B/A$.

> **IVs are immune to omitted variables.** Even if $X_1$ correlates with unobserved causes of $y$, as long as the exclusion restriction holds — the instrument $Z$ itself is uncorrelated with those omitted causes — they cannot contaminate the estimate of $C$. This is the deeper reason IV recovers identification where OLS cannot: it never needs to argue that $X_1$ itself is exogenous, only that $Z$ is.

## Example: quarter of birth and returns to education

If being born in Q4 rather than Q1 raises education by $0.1$ years ($A$) and raises wages by $1\%$ ($B$), and the exclusion restriction — "people are not paid according to their birth quarter, and nothing else correlated with birth quarter determines wages" — is credible, then:

$$C = \frac{B}{A} = \frac{0.01}{0.1} = 0.10$$

One additional year of schooling raises wages by roughly $10\%$.

## The Wald and IV estimators, and their equivalence

For binary $Z$, the **Wald estimand** is $C = \big[\mathbb{E}(y\mid Z{=}1)-\mathbb{E}(y\mid Z{=}0)\big] / \big[\mathbb{E}(X_1\mid Z{=}1)-\mathbb{E}(X_1\mid Z{=}0)\big]$, estimated by analogy as $\hat\beta_{Wald} = (\bar y_{Z=1}-\bar y_{Z=0})/(\bar X_1^{Z=1}-\bar X_1^{Z=0})$ — identical in substance to the [Wald estimator](../instrumental-variables/wald-estimator.md) already introduced from Econ 1.

For a general (not necessarily binary) instrument with $y=\beta_0+\beta_1X+u$, relevance $\text{Cov}(Z,X)\neq 0$, and exclusion $\text{Cov}(Z,u)=0$: $\text{Cov}(Z,y) = \beta_1\text{Cov}(X,Z)$, so $\beta_1 = \text{Cov}(Z,y)/\text{Cov}(Z,X)$, estimated by $\hat\beta_{IV} = \sum_i(y_i-\bar y)(Z_i-\bar Z)\big/\sum_i(X_i-\bar X)(Z_i-\bar Z)$. When $Z$ is binary, algebra identical in structure to the [difference-in-means proof](../treatment-effects/randomized-experiments-and-difference-in-means.md) shows $\hat\beta_{IV} = \hat\beta_{Wald}$ exactly — the general IV estimator and the simple ratio-of-differences Wald estimator are the same object, just derived from two different starting points.

## IV solves omitted-variables bias the way a randomized trial does

Angrist and Pischke (2009, Ch.4 intro) draw this parallel explicitly: "IV solves the problem of missing or unknown control variables, much as a randomized trial obviates the need for extensive controls in a regression." The instrument plays the role random assignment would play if it were available directly on $X_1$ — since $Z$ is (as good as) randomly assigned, it cannot be correlated with whatever unobserved factors are driving the omitted-variable problem, and the exclusion restriction ensures none of $Z$'s influence on $y$ leaks in through a side channel. This is also why they treat the historical origin of IV — solving simultaneous-equations bias in agricultural supply-and-demand systems (Wright, 1928) — as almost incidental to its modern use: in practice, IV today is used far more often to fix omitted-variable and measurement-error problems in observational data than to estimate a genuine system of simultaneous equations, even though the SEM vocabulary (endogenous/exogenous variables, structural/reduced-form equations) persists.

*Source: Angrist & Pischke (2009), Ch.4 intro, §4.1.*
