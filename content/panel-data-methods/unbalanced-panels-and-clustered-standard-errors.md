---
title: Unbalanced Panels and Clustered Standard Errors
source: "Wooldridge (2016), Ch.13–14"
status: enriched
tags:
  - beyond-lectures
  - panel-data
  - unbalanced-panel
  - attrition
  - clustered-standard-errors
prerequisites:
  - panel-data-methods/fixed-effects-within-estimator
  - treatment-effects/validation-studies-and-observational-bias
---
## When some units are missing some periods

A **balanced panel** observes every unit in every period; an **unbalanced panel** has gaps — firms that entered the dataset late, survey respondents who dropped out, cities with missing years of data. The mechanics of fixed effects extend without much difficulty: for unit $i$ observed in $T_i\leq T$ periods, time-demeaning uses only those $T_i$ observations, and the total sample size becomes $\sum_iT_i$ rather than $NT$. Units observed in only a single period contribute nothing to FE (their demeaned values are identically zero) and are automatically dropped; the same units can still contribute to a first-differenced analysis only if they have at least two consecutive periods.

## Why *why* the panel is unbalanced matters

The harder question is not mechanical but substantive: **does the reason units drop out threaten identification?** If missingness is unrelated to the idiosyncratic error $u_{it}$ — a city's data simply wasn't digitized for certain years, unrelated to its crime trajectory — an unbalanced panel causes no bias at all, fixed effects remains consistent, and the loss is only in precision. If instead units drop out **because of** something correlated with $u_{it}$ — firms that go out of business are disproportionately those with declining unobserved productivity, exactly the kind of shock that would also show up in the outcome — the surviving sample is no longer a clean random draw, and this is precisely the [attrition](../partial-identification/from-point-to-partial-identification.md) problem already developed for randomized experiments, now recurring in observational panel data. One genuine advantage of fixed effects here: it *does* allow attrition to be correlated with the time-constant $a_i$ without introducing bias, since $a_i$ is removed regardless — the concern is specifically attrition correlated with the *time-varying* $u_{it}$.

## Clustered standard errors

Even with a properly specified fixed-effects model, pooled OLS on the time-demeaned data implicitly assumes the transformed errors are uncorrelated across periods within a unit — an assumption seldom exactly true in practice (a firm's demeaned shocks in adjacent years plausibly still correlate somewhat, even after removing the time-constant $a_i$). **Clustered standard errors** relax this by allowing *arbitrary* correlation and heteroskedasticity within each cross-sectional unit's block of observations, while still assuming independence *across* units — a considerably weaker and more realistic requirement, feasible because the panel typically has a genuinely large number of independent clusters ($N$) even when $T$ is small. This is the direct panel-data generalization of [heteroskedasticity-robust](../heteroskedasticity-and-autocorrelation/white-robust-standard-errors.md) and [autocorrelation-robust](../heteroskedasticity-and-autocorrelation/testing-for-autocorrelation.md) standard errors developed elsewhere in this vault, now applied at the cluster (unit) level rather than the individual-observation level. In practice, clustered standard errors are typically larger than either the naive OLS or the simple heteroskedasticity-robust standard errors, reflecting a more honest accounting of how much genuinely independent information the panel actually contains.

*Source: Wooldridge (2016), §§13-A.2, 14-1c.*
