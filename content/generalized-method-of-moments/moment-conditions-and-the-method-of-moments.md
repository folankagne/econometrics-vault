---
title: Moment Conditions and the Method of Moments
source: "Hansen (1982); Wooldridge (2010)"
status: enriched
tags:
  - beyond-lectures
  - gmm
  - moment-conditions
  - analogy-principle
prerequisites:
  - causal-inference-foundations/parameter-estimand-and-estimator
  - asymptotic-theory/law-of-large-numbers
---
## Generalizing the analogy principle

[The analogy principle](../causal-inference-foundations/parameter-estimand-and-estimator.md) already used throughout this vault — identify a parameter as a function of population moments, then plug in sample moments — is the special case of a much more general estimation framework. A **moment condition** is a population statement of the form

$$\mathbb{E}\big[g(\mathbf{w}_i,\boldsymbol\theta_0)\big] = \mathbf{0}$$

for some known function $g(\cdot)$ of the data $\mathbf{w}_i$ and the true parameter vector $\boldsymbol\theta_0$. Every identification argument in this vault has, at bottom, been an instance of finding such a condition: OLS's zero-covariance condition $\mathbb{E}[\mathbf{x}_i'(y_i-\mathbf{x}_i\boldsymbol\beta)]=\mathbf{0}$, IV's orthogonality condition $\mathbb{E}[\mathbf{z}_i'(y_i-\mathbf{x}_i\boldsymbol\beta)]=\mathbf{0}$, and even the [law of large numbers](../asymptotic-theory/law-of-large-numbers.md) itself (the sample mean satisfies $\mathbb{E}[y_i-\mu]=0$) are all moment conditions of exactly this form.

## From moment conditions to an estimator

If $\boldsymbol\theta_0$ has $k$ components and exactly $k$ moment conditions are available — the **just-identified** case — replacing the population expectation with a sample average and setting the resulting $k$ equations to zero, $n^{-1}\sum_ig(\mathbf{w}_i,\hat{\boldsymbol\theta})=\mathbf{0}$, pins down a unique solution $\hat{\boldsymbol\theta}$: the **method of moments (MM) estimator**. This is precisely how [the IV estimator](../instrumental-variables/multivariate-iv-estimator.md) was constructed earlier in this vault — as many instruments as endogenous regressors, moment conditions solved exactly.

## The problem method of moments alone cannot solve

When there are **more** moment conditions than parameters — the [over-identified](../instrumental-variables/two-stage-least-squares.md) case, more instruments than endogenous regressors — the sample moment conditions generally cannot all be set to exactly zero simultaneously; there are more equations than unknowns. Some way of combining the (approximately, not exactly, satisfied) moment conditions into a single estimator is needed, and *how* to combine them turns out to matter for efficiency — this is exactly the question [the GMM estimator](../generalized-method-of-moments/the-gmm-estimator-and-efficient-weighting.md) answers.

*Source: Hansen (1982); Wooldridge (2010).*
