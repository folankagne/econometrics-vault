---
title: The Zero Conditional Mean (ZCM) and Zero Covariance (ZC) Assumptions
source: "Econ 2b, Ch.1 Traditional Approach to Causality, §Causality in Linear Models for Cross-Sectional Data"
status: enriched
tags:
  - zero-conditional-mean
  - zero-covariance
  - omitted-variable-bias
  - all-causes-model
prerequisites:
  - causal-inference-foundations/marshalls-maxim-and-the-all-causes-model
  - identification/omitted-variable-bias
---
## The linear model as a proxy for the all-causes model

In practice the all-causes model $y=f(X_1,\dots,X_K)$ is never observable. A linear model with $L \leq K$ regressors serves as a proxy:

$$y = \beta_0 + \beta_1X_1 + \dots + \beta_LX_L + u$$

The error $u$ absorbs the gap with the all-causes model: missing causes (when $L<K$), specification error (if the true relationship is nonlinear), and measurement error in $y$.

## Two forms of the exogeneity assumption

**Zero Conditional Mean (ZCM)**, also called GM3:

$$\mathbb{E}(u\mid X) = 0$$

This is a strong statement — it restricts the functional form of the CEF itself, $\mathbb{E}(y\mid X) = \beta_0+\beta_1X_1+\dots+\beta_LX_L$, and is fundamentally a *theoretical* claim about missing versus included causes, not merely a statistical property.

**Zero Covariance (ZC)**, also called GM3′:

$$\text{Cov}(u,X_k) = \mathbb{E}(u) = 0 \ \ \forall k$$

ZC defines $u$ as the residual of the *linear projection* of $y$ on $X$ and makes no claim about the shape of $\mathbb{E}(y\mid X)$ — a strictly weaker requirement, and the one relevant for [instrumental variables](../instrumental-variables/iv-identification-conditions.md).

**ZCM implies ZC**: by the law of iterated expectations, $\text{Cov}(u,X_k) = \mathbb{E}(\mathbb{E}(uX_k\mid X)) = \mathbb{E}(X_k\,\mathbb{E}(u\mid X)) = \mathbb{E}(X_k \cdot 0) = 0$.

> The gap between ZCM and ZC should not be overstated: justifying either requires the same underlying question — *what is in $u$, and is it correlated with the included regressors?* The distinction is mainly about functional-form flexibility, which discretizing covariates, adding interactions, or adding polynomials can often resolve without abandoning ZCM altogether.

## What's in u? Two worked examples

**Example 1 — luck.** If the true model adds only "luck" to education, ability, and origin, $u = \beta_4\cdot\text{luck}$. ZCM/ZC are plausible if luck is genuinely random, or if $\beta_4=0$. But if match quality is partly driven by personal networks — themselves correlated with origin — both assumptions become implausible.

**Example 2 — ability.** If the true model also includes ability but the estimated model omits it, $u = \beta_2\cdot\text{ability}+\beta_4\cdot\text{luck}$. Since more able people tend to study longer, $\text{Cov}(\text{ability},\text{edu})>0$; if ability also raises wages ($\beta_2>0$), then $\mathbb{E}(u\mid\text{edu},\text{origin})\neq 0$ and ZCM fails — the same [ability-bias](../identification/exogeneity-and-endogeneity.md) story reached from a different angle.

## Omitted variable bias, derived via the CEF

Comparing the all-causes CEF, $\mathbb{E}(y\mid\text{edu},\text{ability},\text{origin}) = \beta_0+\beta_1\text{edu}+\beta_2\text{ability}+\beta_3\text{origin}$, to the estimated CEF omitting ability, $\mathbb{E}(y\mid\text{edu},\text{origin}) = \gamma_0+\gamma_1\text{edu}+\gamma_2\text{origin}$: applying the law of iterated expectations and a linear projection of ability onto the included regressors, $\mathbb{E}(\text{ability}\mid\text{edu},\text{origin}) = \pi_0+\pi_1\text{edu}+\pi_2\text{origin}$, gives:

$$\mathbb{E}(y\mid\text{edu},\text{origin}) = (\beta_0+\beta_2\pi_0) + (\beta_1+\beta_2\pi_1)\text{edu} + (\beta_3+\beta_2\pi_2)\text{origin}$$

Matching coefficients, $\gamma_1 = \beta_1+\beta_2\pi_1$, so the **omitted variable bias** is:

$$OVB = \gamma_1-\beta_1 = \beta_2\pi_1$$

— exactly (effect of the omitted variable on $y$) × (effect of the included variable on the omitted variable), the same structure as the [Econ 1 OVB result](../identification/omitted-variable-bias.md), here derived directly from the CEF rather than from covariance algebra. No bias arises ($\gamma_1=\beta_1$) iff $\beta_2=0$ (ability doesn't affect wages) or $\pi_1=0$ (ability is uncorrelated with education given origin) — and ZCM itself holds exactly when $\beta_2=0$ or $\pi_0=\pi_1=\pi_2=0$, tying omitted-variable bias, ZCM, and the validity of a causal interpretation into a single condition.

## Why ZCM is sufficient: a general proof

For a model with $L$ included and $K-L$ omitted causes, if $\mathbb{E}(u\mid X_1,\dots,X_L)=0$ — equivalently $\beta_{L+1}\mathbb{E}(X_{L+1}\mid X_1,\dots,X_L) = \dots = \beta_K\mathbb{E}(X_K\mid X_1,\dots,X_L) = 0$ — then by the law of iterated expectations:

$$\mathbb{E}(y\mid X_1,\dots,X_L) = \mathbb{E}\big(\mathbb{E}(y\mid X_1,\dots,X_K)\mid X_1,\dots,X_L\big) = \beta_0+\beta_1X_1+\dots+\beta_LX_L$$

the omitted-cause terms integrating to zero. This is the general statement of which the ability example above is a special case: the estimated coefficients equal the all-causes coefficients precisely when ZCM holds — whether it is reasonable must be judged case by case, based on theoretical priors about the omitted causes and their correlation with what is included.

## A weaker fallback when ZCM cannot be defended directly

Wooldridge (2016, §9-2a) offers a middle path relevant when the researcher has no *proxy* for the omitted cause but does observe an earlier realization of the outcome itself. Including a **lagged dependent variable** as a control — e.g. a city's crime rate five years prior, when estimating the effect of current law-enforcement spending on current crime — does not require believing that lagged crime is on anyone's causal pathway; its role is purely to absorb persistent, slow-moving unobserved heterogeneity (historical reporting conventions, entrenched attitudes toward crime, chronic funding patterns) that would otherwise sit in $u$ and correlate with current spending. This is a weaker, more mechanical substitute for a genuine ZCM argument, useful precisely in settings — like the [difference-in-differences](../difference-in-differences/00-overview.md) and panel-data methods elsewhere in this vault — where no credible proxy variable exists but repeated observations on the same units over time do.

*Source: Wooldridge (2016), §9-2a.*
