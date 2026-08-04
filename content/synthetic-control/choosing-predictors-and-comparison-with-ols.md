---
title: Choosing Predictors, and Synthetic Control versus OLS
source: "Econ 2b, Ch.7 Synthetic Control Methods, §Why Not Include All Pre-Treatment Outcomes, §Comparison with OLS Regression"
status: enriched
tags:
  - predictor-choice
  - ols-comparison
  - extrapolation
  - specification-search
prerequisites:
  - synthetic-control/linear-factor-model-and-bias-bound
  - synthetic-control/sparsity-and-permutation-inference
---
## Why not just use every pre-treatment outcome as a predictor?

Using $\mathbf{X}_j=(Y_{j1},\dots,Y_{jT_0})'$ directly seems natural but is actively worse, for two reasons. **Sparsity constraint:** nonzero weights are bounded by $k=\dim(\mathbf{X}_j)$, so using all $T_0$ periods as separate predictors permits up to $T_0$ nonzero weights — destroying the sparsity that makes the method transparent. **Increased bias bound:** if time-invariant observed covariates $\mathbf{Z}_j$ are dropped from the predictor set (crowded out by including every raw outcome period instead), they get absorbed into the unobserved factor loading $\boldsymbol{\mu}_j$, effectively raising $F$ and, per the [bias bound](../synthetic-control/linear-factor-model-and-bias-bound.md), worsening it.

The practical compromise: use **period averages** of pre-treatment outcomes plus a small number of strategically chosen individual lags, together with the substantive covariates $\mathbf{Z}_j$. This keeps $k$ small (preserving sparsity), keeps $\mathbf{Z}_j$ in the predictor set (avoiding inflating $F$), and still captures the outcome's broad pre-treatment trajectory through the averages — exactly the specification used in the Proposition 99 study, which achieves a near-perfect match on every predictor without overfitting to period-specific noise.

## Synthetic control versus OLS regression

An alternative counterfactual estimator: regress post-treatment control outcomes $\mathbf{Y}_0$ on pre-treatment predictors $\bar{\mathbf{X}}_0=(1,\mathbf{X}_0')'$, giving $\hat{\mathbf{B}}=(\bar{\mathbf{X}}_0\bar{\mathbf{X}}_0')^{-1}\bar{\mathbf{X}}_0\mathbf{Y}_0'$ and a fitted counterfactual $\hat{\mathbf{B}}'\bar{\mathbf{X}}_1 = \mathbf{Y}_0\mathbf{W}^{reg}$ with $\mathbf{W}^{reg}=\bar{\mathbf{X}}_0'(\bar{\mathbf{X}}_0\bar{\mathbf{X}}_0')^{-1}\bar{\mathbf{X}}_1$ — a weighted average of control outcomes too, but with weights computed purely from the predictors.

**Four advantages of synthetic control over this OLS alternative.** *No extrapolation*: $\mathbf{W}^{reg}$ sums to one (the intercept guarantees this) but individual elements can be **negative or exceed one**, meaning OLS can construct its counterfactual partly by extrapolating beyond the observed data — synthetic control's $[0,1]$ constraint rules this out entirely. *Transparency of weights*: OLS typically assigns nonzero weight to nearly every donor unit, obscuring which comparators actually drive the result; synthetic control's sparsity keeps this legible. *Transparency of fit*: OLS *always* achieves $\bar{\mathbf{X}}_0\mathbf{W}^{reg}=\bar{\mathbf{X}}_1$ exactly by construction (that's what least squares does), silently masking cases where the predictor match is actually poor; synthetic control's fit quality is directly visible, since nothing forces $\mathbf{X}_0\mathbf{W}^*$ to equal $\mathbf{X}_1$ exactly. *Safeguard against specification search*: synthetic control weights are computed using **only pre-treatment data**, so the design phase (which predictors, which donors) cannot be tuned by peeking at post-treatment outcomes to get a "nicer" result — a discipline regression-based approaches do not enforce.

**Illustration.** In the German reunification study, OLS assigns *negative* weights to Greece, Italy, Portugal, and Spain — implicitly "going short" on weaker Southern European economies to construct the counterfactual, a form of extrapolation entirely absent from the synthetic control weights (which put zero weight on all four).

## When synthetic control isn't the right tool

It works best when the treated unit sits in the **interior** of the donor pool's convex hull, a good pre-treatment fit is achievable, and the donor pool is reasonably large. If the treated unit is a genuine outlier on key predictors, no convex combination can approximate it well, and a regression-based (extrapolating) approach may be unavoidable — though any such extrapolation should be made explicit and interpreted cautiously, not treated as equivalent in reliability to a well-fitting synthetic control.

## When pre-treatment fit is imperfect: two proposed fixes

Cunningham (2021) surveys two responses to a documented weakness: when the treated unit is affected by **transitory shocks** — common in practice — pre-treatment fit deteriorates and bias is introduced, since the method has no way to distinguish a genuine one-off shock from the underlying structural trajectory it needs to match. Ferman and Pinto (2019) study using **de-trended** outcome data specifically to address this, and show it can have real advantages, in some settings even dominating DiD on both bias and variance. Powell (2017) proposes a different, parametric fix that exploits information already in the fitting procedure: if a treated unit does not lie in the donor pool's convex hull (so the standard method cannot reconstruct it well), but that same unit shows up with a positive weight in the synthetic control constructed for *some other* unit, its appearance there can be used to back out and correct for the poor fit — a clever way of "borrowing" information the standard procedure would otherwise discard.

*Source: Cunningham (2021); Ferman & Pinto (2019); Powell (2017).*
