---
title: Average Causal Effects (ACEs)
source: "Econ 2b, Ch.1 Traditional Approach to Causality, §Average Causal Effects (ACEs)"
status: enriched
tags:
  - average-causal-effect
  - conditional-expectation-function
  - marshalls-maxim
prerequisites:
  - causal-inference-foundations/marshalls-maxim-and-the-all-causes-model
  - causal-inference-foundations/parameter-estimand-and-estimator
---
## From individual to average effects

Since [individual causal effects are not identified](../causal-inference-foundations/marshalls-maxim-and-the-all-causes-model.md), attention turns to **average causal effects (ACEs)**, defined from the conditional expectation function (CEF) of the all-causes model, $\mathbb{E}(y\mid X) = f(X_1,\dots,X_K)$. This still implements Marshall's maxim, but at the level of groups rather than individuals: compare the average outcome of two groups who share the same values of every cause except the one of interest.

## Two equivalent worked forms

For a **discrete** cause $X_1$:

$$\Delta_1(x_1^0,\dots,x_K^0) = \mathbb{E}(y\mid X_1{=}x_1^0{+}1, X_2{=}x_2^0,\dots) - \mathbb{E}(y\mid X_1{=}x_1^0, X_2{=}x_2^0,\dots)$$

For a **continuous** cause $X_1$, the discrete difference becomes a partial derivative of the CEF:

$$\Delta_1(x_1^0,\dots,x_K^0) = \frac{\partial \mathbb{E}(y\mid X)}{\partial X_1}\bigg|_{(x_1^0,\dots,x_K^0)}$$

A concrete instance: comparing $\mathbb{E}(y\mid \text{edu}{=}11,\text{ability}_0,\text{origin}_0,\text{luck}_0,t_0)$ against the same expression with $\text{edu}=10$ defines $\Delta(x_0)$ — the ACE of one additional year of education, evaluated at a specific baseline $x_0 = (\text{ability}_0,\text{origin}_0,\text{luck}_0,t_0)$. Crucially, this ACE **depends on the baseline** — different ability, origin, or time values can yield different causal effects, so "the" ACE is really a family of effects indexed by which baseline is held fixed.

## Identification and estimation with discrete covariates

With all covariates discrete, the ACE of $X_1$ is identified whenever the CEF is identified at both comparison points $x' = (x_1^0{+}1,x_2^0,\dots)$ and $x=(x_1^0,x_2^0,\dots)$ — which holds as long as the population contains individuals at both covariate values with a well-defined mean of $y$. By the [analogy principle](../causal-inference-foundations/parameter-estimand-and-estimator.md), the natural estimator replaces conditional expectations with sample means over the matching subgroups:

$$\hat\Delta_1(x_1^0,\dots,x_K^0) = \frac{1}{n'}\sum_{i:X_i=x'} y_i - \frac{1}{n}\sum_{i:X_i=x} y_i$$

with $n'$ and $n$ the group sizes at $x'$ and $x$. When covariates are continuous, the same logic applies but requires either non-parametric methods or the linear-model approximation developed in [linear models as a proxy for the all-causes model](../identification/zcm-and-zc-assumptions.md).

This "compare groups matched on every other covariate" logic is exactly the independence-based reasoning Cunningham (2021, Ch.4) uses to justify treating a simple difference in outcomes as causal: if $(y_1,y_0) \perp D$ — potential outcomes are independent of treatment assignment — then averaging within cells defined by identical covariate values is unnecessary in the first place, since the treated and untreated groups are then, on average, comparable *unconditionally*. When that independence fails but holds only *within* covariate cells (a weaker, conditional version), the CEF-based cell-by-cell comparison developed here becomes necessary — the ACE machinery is precisely what [unconfoundedness methods](../unconfoundedness-methods/00-overview.md) generalize into matching and propensity-score estimators once the number of covariates makes exact cell-matching infeasible.

*Source: Cunningham (2021), Ch.4.*
