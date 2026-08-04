---
title: GMM Nests OLS, IV, and MLE
source: "Hansen (1982); Wooldridge (2010)"
status: enriched
tags:
  - beyond-lectures
  - gmm
  - maximum-likelihood
  - unification
prerequisites:
  - generalized-method-of-moments/the-gmm-estimator-and-efficient-weighting
  - ols-estimation/deriving-the-ols-estimator
---
## Every estimator in this vault is (asymptotically) a GMM estimator

The point of stating GMM explicitly is not to introduce a new competing technique but to reveal that nearly every estimator already developed in this vault is a special case, differing only in *which* moment condition is imposed:

- **OLS** solves the just-identified moment condition $\mathbb{E}[\mathbf{x}_i'(y_i-\mathbf{x}_i\boldsymbol\beta)]=\mathbf{0}$ — [the normal equations](../ols-estimation/deriving-the-ols-estimator.md) are literally the sample analog of this moment condition, set to zero.
- **IV / 2SLS** solves $\mathbb{E}[\mathbf{z}_i'(y_i-\mathbf{x}_i\boldsymbol\beta)]=\mathbf{0}$, just-identified or (via the efficient weighting matrix) over-identified — exactly [the IV estimator](../instrumental-variables/multivariate-iv-estimator.md) and [2SLS](../instrumental-variables/two-stage-least-squares.md) already derived.
- **Maximum likelihood** is a GMM estimator whose moment condition is the **score equation**, $\mathbb{E}[\nabla_{\boldsymbol\theta}\log f(\mathbf{w}_i;\boldsymbol\theta_0)]=\mathbf{0}$ — the first-order condition of the log-likelihood, which always holds at the true parameter under standard regularity conditions. MLE is therefore GMM with a specific, likelihood-derived moment condition and (asymptotically) the efficient weighting matrix automatically built in, which is exactly why MLE achieves the semi-parametric efficiency bound when the distributional assumption is correct — the same bound [double/debiased machine learning](../unconfoundedness-methods/double-debiased-machine-learning.md) targets under weaker assumptions elsewhere in this vault.

## Why the unification is more than a curiosity

Seeing every estimator as "solve some moment condition" clarifies what actually varies across methods: not the *logic* of estimation (always: find $\hat{\boldsymbol\theta}$ that makes the sample analog of a population zero condition hold as closely as possible) but the *substantive assumption* each moment condition encodes — OLS assumes regressors are exogenous, IV assumes instruments are exogenous and relevant, MLE assumes a specific distribution. This is the same lesson already drawn from [Heckman's critique](../reference/heckman-2005-scientific-model-of-causality.md): different estimators are not competing for the same target under no assumptions, they are each buying identification with a specific, checkable (or unfortunately often unchecked) assumption, and GMM is simply the mathematical language that makes comparing those assumptions precise.

*Source: Hansen (1982); Wooldridge (2010).*
