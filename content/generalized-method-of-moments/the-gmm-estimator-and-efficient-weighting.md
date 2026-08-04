---
title: The GMM Estimator and Efficient Weighting
source: "Hansen (1982); Wooldridge (2010)"
status: enriched
tags:
  - beyond-lectures
  - gmm
  - weighting-matrix
  - efficient-gmm
  - two-stage-least-squares
prerequisites:
  - generalized-method-of-moments/moment-conditions-and-the-method-of-moments
  - instrumental-variables/two-stage-least-squares
---
## Combining over-identified moment conditions

With $g(\boldsymbol\theta)$ an $(m\times1)$ vector of sample moment averages and $m>k$ parameters, **Generalized Method of Moments (GMM)** does not try to set every moment to exactly zero — impossible in general — but instead minimizes a weighted quadratic form in how far the sample moments sit from zero:

$$\hat{\boldsymbol\theta}_{GMM} = \arg\min_{\boldsymbol\theta}\ \bar g(\boldsymbol\theta)'\,\mathbf{W}\,\bar g(\boldsymbol\theta), \qquad \bar g(\boldsymbol\theta) \equiv \frac{1}{n}\sum_{i=1}^n g(\mathbf{w}_i,\boldsymbol\theta)$$

for some positive semi-definite **weighting matrix** $\mathbf{W}$. Any positive semi-definite $\mathbf{W}$ delivers a *consistent* estimator (under standard regularity conditions), but different choices of $\mathbf{W}$ generally deliver *different*, non-equally-efficient estimators — exactly the situation already familiar from [robust versus efficient estimation](../heteroskedasticity-and-autocorrelation/robust-vs-efficient-estimation-tradeoff.md), now generalized beyond the linear-regression case.

## 2SLS as a special case with a natural weighting matrix

Setting $\mathbf{W}=(\mathbf{Z}'\mathbf{Z})^{-1}$ for instrument matrix $\mathbf{Z}$ recovers exactly [the 2SLS estimator](../instrumental-variables/two-stage-least-squares.md) already derived in this vault via the projection-matrix argument — GMM with this specific weighting choice **is** 2SLS, not merely analogous to it. This is the cleanest illustration that GMM is a genuine generalization rather than a competing framework: every linear IV result already developed here is recoverable as one particular GMM weighting choice.

## The efficient weighting matrix

Hansen (1982) shows that the **asymptotically efficient** GMM estimator — the one with the smallest possible asymptotic variance among all valid choices of $\mathbf{W}$ — uses $\mathbf{W}^*=\mathbf{S}^{-1}$, where $\mathbf{S}=\text{Var}[g(\mathbf{w}_i,\boldsymbol\theta_0)]$ is the asymptotic variance of the moment conditions themselves. Since $\mathbf{S}$ is unknown, **efficient (or "two-step") GMM** proceeds in two stages: obtain a consistent (if inefficient) first-stage estimate using an arbitrary weighting matrix (e.g. $\mathbf{W}=\mathbf{I}$), use the resulting residuals to construct $\hat{\mathbf{S}}$, then re-minimize using $\hat{\mathbf{S}}^{-1}$ as the weighting matrix. This is directly analogous to [feasible GLS](../heteroskedasticity-and-autocorrelation/feasible-gls-for-heteroskedasticity.md): an initial inefficient estimator is used only to estimate the correct weighting/variance structure, which is then plugged back in to obtain the efficient estimator proper.

## Why the efficient weighting matters most under heteroskedasticity or serial correlation

If the moment conditions have a genuinely non-scalar covariance structure — heteroskedastic errors, or serially correlated moments in time series applications — efficient GMM automatically down-weights noisier moment conditions relative to more informative ones, exactly the logic behind [WLS under heteroskedasticity](../heteroskedasticity-and-autocorrelation/sphericalization-and-gls.md). When the moment conditions instead already satisfy a scalar-covariance structure, efficient GMM collapses back to the simpler weighting (e.g. ordinary 2SLS), so there is no efficiency to be gained from the extra machinery — a useful practical check before reaching for two-step GMM in a given application.

*Source: Hansen (1982); Wooldridge (2010).*
