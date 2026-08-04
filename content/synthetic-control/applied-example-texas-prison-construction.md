---
title: "Applied Example: Texas Prison Construction and Falsification Exercises"
source: "Econ 2b, Ch.7 Synthetic Control Methods, §Applied Example: Prison Construction and Black Male Incarceration"
status: enriched
tags:
  - falsification-test
  - placebo-date-test
  - covariate-balance
prerequisites:
  - synthetic-control/choosing-predictors-and-comparison-with-ols
  - synthetic-control/sparsity-and-permutation-inference
---
## Setting

Texas's 1993 prison-construction boom (\$1 billion approved, roughly doubling capacity within three years) is evaluated for its effect on Black male incarceration counts, using annual data 1985–2000, treatment date $T_0=1993$. Crucially, **before** 1993 Texas's Black male incarceration rate tracked the national average closely — Texas was not an outlier in predictor space pre-treatment, giving grounds to believe Texas lies inside (or near) the donor pool's convex hull, so the non-negativity/sum-to-one constraints are unlikely to bind destructively.

## Implementation and weights

Predictors: period averages of the outcome (1988, 1990–92) plus pre-treatment covariates (alcohol consumption, AIDS incidence, income, unemployment, poverty, proportion Black, proportion aged 15–19) — exactly the [averages-plus-covariates strategy](../synthetic-control/choosing-predictors-and-comparison-with-ols.md) recommended to balance sparsity against bias. The optimal weights are sparse: California ($0.408$), Illinois ($0.360$), Louisiana ($0.122$), Florida ($0.109$) — states sharing large urban populations and comparable minority-incarceration and demographic profiles with pre-1993 Texas.

## Inference

Iterating the procedure over all 46 state units (Texas placed back in the donor pool each time), Texas has the **second-highest** post-to-pre RMSPE ratio, giving $p=2/46\approx0.04$ — rejecting the null of no effect at the $5\%$ level. The gap between actual and synthetic Texas is near zero throughout the pre-period and rises sharply after 1993, peaking around $25{,}000$ additional Black male prisoners.

## Falsification exercises expected of modern applications

Beyond the point estimate and p-value, credible synthetic control work checks: **pre-treatment fit quality** (RMSPE small relative to outcome scale — satisfied here over 1985–1993); **covariate balance** ($\mathbf{X}_0\mathbf{W}^*\approx\mathbf{X}_1$, the substantive-covariate analogue of a matching/RCT balance table); **permutation p-values** (as above); and — perhaps most distinctively — **placebo-date falsification**: re-running the entire procedure with treatment moved to a date *before* the real intervention (here, 1989, with the sample truncated at 1992). A well-specified design should show **no** spurious divergence at the fake date; Cunningham (2021) confirms this for Texas, and Abadie et al. (2015) similarly find no effect using 1975 as a placebo date in the German reunification study — a check that specifically guards against a method that would flag "an effect" at essentially any arbitrarily chosen date, real or not.

## Relaxing non-negativity, and the scope of the causal claim

Doudchenko and Imbens (2016) propose relaxing the non-negativity constraint (keeping sum-to-one), interpolating between synthetic control and regression — trading away the no-extrapolation guarantee for applicability when the treated unit sits outside the donor pool's convex hull. Regardless of which variant is used, the estimate identifies a **reduced-form** effect — "what happened to Black male incarceration in Texas after 1993, relative to the counterfactual" — not the **mechanism** (higher arrest rates? longer sentences? reduced parole? some combination?), and external validity to other states or periods requires an argument beyond the identification strategy itself.

This example is Cunningham's (2021) own chosen vehicle for walking through the full synthetic control workflow end-to-end — predictor selection, weight sparsity, RMSPE-based inference, and falsification checks together — precisely because Texas's pre-treatment similarity to the national average (rather than being an extreme outlier like West Germany or the Basque Country) makes it a cleaner didactic case for seeing the convex-hull machinery work as intended, without the added complication of a treated unit sitting near the edge of the donor pool's support.

*Source: Cunningham (2021); Abadie, Diamond & Hainmueller (2015); Doudchenko & Imbens (2016).*
