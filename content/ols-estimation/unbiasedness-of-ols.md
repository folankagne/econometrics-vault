---
title: "Unbiasedness of OLS (A3)"
source: "Econ 1, Lecture Notes, §Set-up of the OLS estimator › Identification with OLS"
status: enriched
tags:
  - unbiased-estimator
  - exogeneity
  - orthogonality-conditions
  - conditional-expectation-function
prerequisites:
  - ols-estimation/the-general-linear-regression-model
---
## Assumption A3: strict exogeneity

**Assumption $A_3^{OLS}$** states that the model's true noise has conditional mean zero given the regressors, for every individual:

$$A_3^{OLS}: \ \mathbb{E}(u_i \mid \mathbf{X}) = 0, \quad \forall i$$

This must hold for *every* individual $i$, not merely on average across the sample. It says the part of $y_i$ left unexplained by $\mathbf{X}$ carries no systematic relationship with $\mathbf{X}$ itself.

## Unbiasedness

An estimator $\hat{\theta}(\mathbf{y}, \mathbf{X})$ of a population parameter $\theta$ is **unbiased** if $\mathbb{E}[\hat{\theta}(\mathbf{y}, \mathbf{X})] = \theta$. Concretely, unbiasedness means that across an infinite number of samples drawn from the same population, the average of the resulting sample estimates equals the true population parameter — not that any single sample estimate equals it exactly. Under $A_3^{OLS}$, the OLS estimator is unbiased.

## Why A3 is the identifying assumption

$A_3^{OLS}$ implies the **orthogonality conditions**: $\mathbb{E}[\mathbf{x}_i' u_i] = \mathbb{E}_x\big[\mathbf{x}_i\,\mathbb{E}[u_i \mid \mathbf{X}]\big] = 0$ — geometrically, the noise is uncorrelated with (orthogonal to) every regressor. Writing the model for one observation as $y_i = \mathbf{x}_i'\mathbf{b} + u_i$, the **conditional expectation function (CEF)** of $y_i$ given the regressors becomes:

$$\mathbb{E}[y_i \mid \mathbf{x}_i] = \mathbf{x}_i'\mathbf{b} + \mathbb{E}[u_i \mid \mathbf{x}_i] \overset{A_3^{OLS}}{=} \mathbf{x}_i'\mathbf{b}$$

The noise term drops out of the CEF entirely — this disappearance is exactly what makes the estimator unbiased. Like every identifying assumption, $A_3^{OLS}$ **cannot be tested empirically**: the true noise $u_i$ is never observed, only the *residuals* implied by the assumed model and the sample at hand. Judging its plausibility requires outside knowledge of what $u_i$ actually contains — typically, unobservable factors (omitted from the data) and non-measurable factors (e.g. intrinsic motivation) that jointly influence $y$.

> Applied to the job-search-assistance example from [potential outcomes and the naive estimator](../causal-inference-foundations/potential-outcomes-and-the-naive-estimator.md): if the level of assistance received, $x_i$, correlates with years of education — itself folded into $u_i$ because it is unobserved — then $A_3^{OLS}$ fails. Individuals routed to the lightest assistance level are plausibly the most educated, so $x$ and (the education component of) $u$ move together, violating the zero-conditional-mean requirement.

## Wooldridge's MLR.4 and the omitted-variable diagnosis

Wooldridge (2016, §3-3) calls the same condition **MLR.4 (zero conditional mean)**, $\mathbb{E}(u\mid x_1,\dots,x_K)=0$, and gives the standard diagnostic for when it plausibly fails: $u$ contains a variable that (a) affects $y$ and (b) is correlated with an included regressor $x_k$ — an **omitted variable**. His school-lunch-program example is a clean illustration: regressing tenth-grade math pass rates on the percentage of students eligible for a subsidized lunch program gives a strongly *negative* coefficient, which taken literally would say the lunch program *hurts* performance. The real story is that lunch-program eligibility proxies for poverty, and poverty (via school funding, home environment, etc.) is folded into $u$ and correlated with eligibility — MLR.4 fails, and the negative coefficient reflects that correlation rather than any causal harm from the program. This is exactly the general [omitted variable bias](../identification/00-overview.md) mechanism, stated here in its simplest form.

*Source: Wooldridge (2016), §3-3.*
