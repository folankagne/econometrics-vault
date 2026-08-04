---
title: Pooled Cross Sections and the Unobserved Effects Model
source: "Wooldridge (2016), Ch.13"
status: enriched
tags:
  - beyond-lectures
  - panel-data
  - pooled-cross-sections
  - unobserved-effects-model
  - fixed-effect
prerequisites:
  - foundations/population-sample-and-data-structures
  - difference-in-differences/cross-section-and-before-after-estimators
---
## Two ways of having repeated data over time

[Population, sample, and data structures](../foundations/population-sample-and-data-structures.md) already distinguishes **pooled cross sections** (independent random samples drawn at different dates, different units each time) from **panel data** (the *same* units followed over time). Both look superficially similar — a dataset stacked across periods — but they support very different methods. A pooled cross section can still be useful for policy evaluation even without following individuals: appending year dummies and interacting them with a policy indicator recovers a before/after comparison across two independently drawn samples, exactly the [difference-in-differences regression representation](../difference-in-differences/the-did-regression-representation.md) already developed from the course notes. What pooled cross sections *cannot* do is control for a specific individual's own time-constant unobserved characteristics — there is no "before" and "after" for the same person, only for the same population.

## The unobserved effects model

Genuine panel data unlocks a different tool. Write the outcome for unit $i$ at time $t$ as

$$y_{it} = \beta_0 + \beta_1x_{it1} + \dots + \beta_kx_{itk} + a_i + u_{it}, \qquad t=1,\dots,T$$

where $a_i$ is the **unobserved effect** (also called the fixed effect or unobserved heterogeneity) — everything about unit $i$ that is constant over the sample period: innate ability, firm management quality, a city's geography. $u_{it}$ is the **idiosyncratic error**, varying across both $i$ and $t$. Together $v_{it} \equiv a_i + u_{it}$ is the **composite error**.

The entire appeal of panel data is this: if $a_i$ is correlated with one or more regressors — the standard endogeneity worry from [omitted variable bias](../identification/omitted-variable-bias.md) — pooled OLS on the levels equation is biased and inconsistent, exactly as it would be from a single cross section. But because $a_i$ is *time-constant*, it can be swept out entirely by a transformation that uses only within-unit variation over time, **without ever needing to observe or proxy for $a_i$ itself**. This is a fundamentally different identification strategy from [unconfoundedness methods](../unconfoundedness-methods/conditional-independence-assumption.md), which require *observed* covariates rich enough to satisfy conditional independence: panel methods instead require the confounder to be *time-constant*, observed or not.

## Pooled OLS on panel data is usually the wrong default

Running OLS on stacked panel data while ignoring $a_i$ — treating the composite error $v_{it}$ as if it satisfies the usual Gauss-Markov assumptions — is called **pooled OLS**. It is consistent only if $a_i$ is uncorrelated with every regressor in every period, exactly the condition the [random effects model](../panel-data-methods/random-effects-model-and-gls.md) formalizes. Even when that holds, pooled OLS ignores the serial correlation that $a_i$ mechanically induces in $v_{it}$ across periods (the same $a_i$ appears in $v_{i1}, v_{i2}, \dots$), so its standard errors are wrong even when its point estimates are not — the panel-data analogue of the point made throughout [heteroskedasticity and autocorrelation](../heteroskedasticity-and-autocorrelation/00-overview.md) that non-spherical disturbances corrupt inference before they corrupt point estimates.

## What this folder develops

Two transformations remove $a_i$ from the equation entirely, at different costs: **differencing** (subtracting one period's equation from another's — see [the first-differenced estimator](../panel-data-methods/the-first-differenced-estimator.md)) and **time-demeaning** (subtracting each unit's own average — see [the fixed effects estimator](../panel-data-methods/fixed-effects-within-estimator.md)). A third route, the **random effects** transformation, does not remove $a_i$ but instead models it explicitly and uses GLS — valid only under the stronger assumption that $a_i$ is uncorrelated with the regressors. Choosing among them is the subject of the rest of this folder.

*Source: Wooldridge (2016), Ch.13 introduction.*
