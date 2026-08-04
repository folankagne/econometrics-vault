---
title: Sample Selection and the Heckit Method
source: "Wooldridge (2016), §17-5"
status: enriched
tags:
  - beyond-lectures
  - sample-selection
  - incidental-truncation
  - heckit
  - inverse-mills-ratio
  - control-function
prerequisites:
  - limited-dependent-variable-models/the-tobit-model-for-corner-solutions
  - treatment-effects/experimental-selection-correction-estimator
---
## When does selection into the sample matter?

Regressing $y$ on $\mathbf{x}$ using only a **selected sample** ($s=1$) is unbiased and consistent whenever selection is determined *entirely* by the regressors themselves ("exogenous sample selection" — e.g. restricting a wage regression to a specific demographic subgroup defined by variables already in $\mathbf{x}$), or when selection is genuinely random and unrelated to $u$. Selection becomes a problem only when it is correlated with the **unobserved** determinants of $y$ — a form of endogeneity structurally identical to the [selectivity bias](../treatment-effects/the-selectivity-problem.md) already developed for treatment evaluation, now framed as a missing-data problem rather than a treatment-effect problem. The clearest failure case is **truncation from above** — observing $y$ only when $y\leq c$ — since then $s$ is mechanically a function of $y$ itself, and no amount of controlling for $\mathbf{x}$ removes the correlation between $s$ and $u$.

## Incidental truncation and the Heckman selection equation

The leading applied case is **incidental truncation**: $y$ is fully observed only for a *subset* of the population, where inclusion is governed by a separate, related process. The canonical example is a wage **offer**, observed only for people who are actually working:

$$y = \mathbf{x}\boldsymbol\beta+u, \ \ \mathbb{E}(u\mid\mathbf{x})=0 \qquad\qquad s = \mathbf{1}[\mathbf{z}\boldsymbol\gamma+v\geq0]$$

with $\mathbf{x}$ a strict subset of $\mathbf{z}$ — at least one variable must affect selection ($s$) without directly affecting the outcome equation, an **exclusion restriction** in the same spirit as [instrumental variables](../instrumental-variables/iv-identification-conditions.md). If $(u,v)$ are jointly normal and independent of $\mathbf{z}$ with $\mathbb{E}(u\mid v)=\rho v$, then

$$\mathbb{E}(y\mid\mathbf{z},s{=}1) = \mathbf{x}\boldsymbol\beta + \rho\lambda(\mathbf{z}\boldsymbol\gamma)$$

where $\lambda(\cdot)$ is the same **inverse Mills ratio** already used for [Tobit](../limited-dependent-variable-models/the-tobit-model-for-corner-solutions.md). Whenever $\rho\neq0$, running OLS on the selected sample omits $\lambda(\mathbf{z}\boldsymbol\gamma)$ — a variable generally correlated with $\mathbf{x}$ — producing exactly the omitted-variable bias already familiar from [omitted variable bias](../identification/omitted-variable-bias.md), here with a specific, derivable functional form for the missing regressor.

## The Heckit two-step procedure

Heckman's (1976) **Heckit method** turns this directly into an estimable recipe: (i) using the *full* sample, estimate a probit of $s$ on $\mathbf{z}$ and compute the fitted inverse Mills ratio $\hat\lambda_i=\lambda(\mathbf{z}_i\hat{\boldsymbol\gamma})$ for every selected observation; (ii) using only the selected sample, regress $y$ on $\mathbf{x}$ and $\hat\lambda$. This is a **control function** approach — the same family of technique used elsewhere in this vault for the [experimental selection correction estimator](../treatment-effects/experimental-selection-correction-estimator.md): an unobserved source of selection is proxied by a quantity recovered from a separate first stage, then included directly as a regressor. A convenient byproduct: the $t$-statistic on $\hat\lambda$ in the second step is a direct test of $H_0:\rho=0$ — no sample-selection problem — though the *reported* standard errors from this second-step regression are technically invalid (they ignore the estimation error in $\hat\gamma$), and correctly adjusted standard errors require additional computation most software packages handle automatically.

## Worked example: wage offers for married women

Applying Heckit to the labor-force-participation and wage data (MROZ) — regressing $\log(wage)$ on `educ`, `exper`, `exper`$^2$ using only the 428 working women, with the probit selection equation additionally including non-wage income, age, and number of young/older children (excluded from the wage equation itself) — finds **no evidence of a selection problem**: the coefficient on $\hat\lambda$ is small and statistically insignificant ($t=.239$), and the OLS and Heckit slope coefficients are nearly identical (the estimated return to education differs by only one-tenth of a percentage point). This is itself a useful applied lesson: Heckit does not automatically "fix" an estimate — when $\hat\rho$ is small and insignificant, it confirms that the simpler OLS-on-the-selected-sample estimate was already trustworthy, and the correction changes little beyond adding reassurance.

*Source: Wooldridge (2016), §§17-5a–17-5b, Example 17.5; Heckman (1976).*
