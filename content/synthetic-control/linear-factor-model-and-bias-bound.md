---
title: The Linear Factor Model and the Synthetic Control Bias Bound
source: "Econ 2b, Ch.7 Synthetic Control Methods, §Theoretical Foundation: The Linear Factor Model"
status: enriched
tags:
  - linear-factor-model
  - bias-bound
  - two-way-fixed-effects
prerequisites:
  - synthetic-control/setup-and-the-estimator
  - difference-in-differences/two-way-fixed-effects
---
## The linear factor model

Abadie, Diamond, and Hainmueller (2010) model the untreated potential outcome as:

$$Y_{jt}^N = \delta_t + \boldsymbol{\theta}_t\mathbf{Z}_j + \boldsymbol{\lambda}_t\boldsymbol{\mu}_j + \varepsilon_{jt}$$

with a common time effect $\delta_t$, observed covariates $\mathbf{Z}_j$ with time-varying coefficients $\boldsymbol{\theta}_t$, **unobserved** factor loadings $\boldsymbol{\mu}_j$ interacting with common **unobserved** factors $\boldsymbol{\lambda}_t$, and idiosyncratic noise $\varepsilon_{jt}$.

## This generalizes TWFE

With $F{=}1$ and $\boldsymbol{\lambda}_t{=}1$ for all $t$, $\boldsymbol{\lambda}_t\boldsymbol{\mu}_j$ collapses to a plain unit fixed effect, recovering $Y_{jt}^N = \delta_t+\mu_j+\varepsilon_{jt}$ — exactly [TWFE](../difference-in-differences/two-way-fixed-effects.md). The factor model's extra flexibility is letting unobserved heterogeneity's *impact* vary over time (via $\boldsymbol{\lambda}_t$), rather than being additively fixed — this is precisely why synthetic control can succeed in settings where DID (with its purely additive unit and time effects) would fail.

## Deriving the bias

If the optimal weights achieve **perfect** pre-treatment fit on both outcomes and observed predictors ($Y_{1t}=\sum_j w_j^*Y_{jt}$ for $t\leq T_0$; $\mathbf{Z}_1=\sum_j w_j^*\mathbf{Z}_j$), then for $t>T_0$:

$$Y_{1t}^N - \hat Y_{1t}^N = \sum_{j=2}^{J+1}w_j^*\boldsymbol{\lambda}_t(\boldsymbol{\lambda}^{P\prime}\boldsymbol{\lambda}^P)^{-1}\boldsymbol{\lambda}^{P\prime}\boldsymbol{\varepsilon}_j^P - \boldsymbol{\lambda}_t(\boldsymbol{\lambda}^{P\prime}\boldsymbol{\lambda}^P)^{-1}\boldsymbol{\lambda}^{P\prime}\boldsymbol{\varepsilon}_1^P + \varepsilon_{1t} - \sum_{j=2}^{J+1}w_j^*\varepsilon_{jt}$$

**Derivation sketch.** Subtract the weighted-control expression for $Y_{jt}^N$ from $Y_{1t}^N$'s own expression, isolating an observed-predictor gap, an unobserved-factor-loading gap, and idiosyncratic errors. Perfect pre-treatment fit on $Y$ and $\mathbf{Z}$ forces the left side and the observed-predictor term to vanish when evaluated over $t\leq T_0$, which — after pre-multiplying by $\boldsymbol{\lambda}^{P\prime}$ and inverting $\boldsymbol{\lambda}^{P\prime}\boldsymbol{\lambda}^P$ — pins down the otherwise-unobservable factor-loading gap $\boldsymbol{\mu}_1-\sum_jw_j^*\boldsymbol{\mu}_j$ in terms of *pre-treatment errors alone*. Substituting this back into the post-treatment expression for $t>T_0$ produces the bias formula above.

## Bounding the expected bias

Taking expectations (using $\mathbb{E}[\varepsilon_{jt}]=0$), the post-treatment noise terms vanish, leaving $\mathbb{E}[Y_{1t}^N-\hat Y_{1t}^N] = \mathbb{E}\big[\sum_jw_j^*\boldsymbol{\lambda}_t(\boldsymbol{\lambda}^{P\prime}\boldsymbol{\lambda}^P)^{-1}\boldsymbol{\lambda}^{P\prime}\boldsymbol{\varepsilon}_j^P\big]$. ADH10 further bound $\mathbb{E}[|Y_{1t}^N-\hat Y_{1t}^N|]$ by a quantity that **increases** with $J$ (donor pool size), $F$ (number of unobserved factors), and $\text{Var}(\varepsilon_{jt})$, and **decreases** with $T_0$ (pre-treatment length).

## Why: fitting factors versus fitting noise

If the synthetic control perfectly matched both $\mathbf{Z}_1$ and the unobserved $\boldsymbol{\mu}_1$, it would be unbiased — but $\boldsymbol{\mu}_1$ cannot be targeted directly, only inferred indirectly by matching $Y_{1t}$ over the pre-period. That inference is reliable only when idiosyncratic noise $\varepsilon_{jt}$ is small relative to the genuine factor structure; otherwise the weights end up "fitting noise instead of factors." Larger $T_0$ and smaller $\text{Var}(\varepsilon_{jt})$ both make that failure mode less likely — explaining the bound's monotonic dependence on each.

> **Larger donor pools are a double-edged sword.** More candidate controls give more error terms $\varepsilon_{jt}$ to potentially fit $Y_{1t}$'s pre-treatment path *without* actually recovering $\boldsymbol{\mu}_1$ — which is exactly why the bias bound **increases** in $J$, the opposite of what conventional large-sample intuition would suggest.

This is why ADH10's own applications deliberately restrict the donor pool on substantive grounds rather than including every available unit: the California Proposition 99 study explicitly drops the handful of other states that adopted their own large-scale tobacco-control programs over the same period, and the German reunification study is naturally limited to OECD member countries with comparable data. Both restrictions serve the same purpose the bias bound formalizes — a smaller, carefully curated donor pool of genuinely comparable units controls $J$ directly, trading away some flexibility in matching for a tighter theoretical guarantee against fitting idiosyncratic noise rather than the true underlying factor structure.

*Source: Abadie, Diamond & Hainmueller (2010); Cunningham (2021).*
