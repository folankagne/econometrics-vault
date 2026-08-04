---
title: The Multivariate IV Estimator
source: "Econ 1, Lecture Notes, §Multivariate model with one endogenous regressor: the simple IV estimator"
status: enriched
tags:
  - instrumental-variables
  - small-sample-bias
  - consistency
  - partialling-out
prerequisites:
  - instrumental-variables/continuous-iv-and-the-first-stage
---
## Setup: one endogenous regressor among many

Generalizing to $K$ regressors with only the last, $x_K$, endogenous: $y = b_0 + b_1\mathbf{x}_1 + \dots + b_{K-1}\mathbf{x}_{K-1} + b_K\mathbf{x}_K + \mathbf{u}$, with $\mathbb{E}(\mathbf{x}_{ik}u_i)=0$ for $k=1,\dots,K-1$ but $\mathbb{E}(\mathbf{x}_{iK}u_i)\neq0$. With an instrument $\mathbf{z}^e$ for $\mathbf{x}_K$, the rank condition in the auxiliary model $x_K = \delta_0 + \delta_1x_1+\dots+\delta_{K-1}x_{K-1}+\theta_1z^e+r_K$ requires $\theta_1 \neq 0$ — crucially, correlation between $\mathbf{z}^e$ and $\mathbf{x}_K$ must survive **after controlling for the other exogenous regressors**. Intuitively: the instrument must be correlated with the part of $\mathbf{x}_K$'s variation that is independent of everything else already in the model, since that is the only variation OLS-on-the-transformed-model has left to exploit.

## The estimator

Denote $\mathbf{Z} = [\mathbf{x}_0,\dots,\mathbf{x}_{K-1},\mathbf{z}^e]$, the full set of exogenous variables (endogenous regressor replaced by its instrument). The moment condition $\mathbb{E}(\mathbf{z}_i'u_i)=0$ gives, by the LLN, $\mathbf{Z}'\mathbf{u} = \mathbf{Z}'(\mathbf{y}-\mathbf{X}\mathbf{b}) \overset{\mathbb{P}}{\to} \mathbf{0}$. Solving the corresponding sample moment condition for $\mathbf{b}$ gives the **IV estimator**:

$$\hat{\mathbf{b}}_{IV} = (\mathbf{Z}'\mathbf{X})^{-1}\mathbf{Z}'\mathbf{y}$$

which satisfies $\mathbf{Z}'\hat{\mathbf{u}}^{IV} = \mathbf{0}$ (residuals orthogonal to every column of $\mathbf{Z}$, exactly as OLS residuals are orthogonal to $\mathbf{X}$).

## Biased in finite samples, consistent asymptotically

Substituting $\mathbf{y} = \mathbf{X}\mathbf{b} + \mathbf{u}$:

$$\hat{\mathbf{b}}_{IV} = \mathbf{b} + (\mathbf{Z}'\mathbf{X})^{-1}\mathbf{Z}'\mathbf{u} \quad\Longrightarrow\quad \mathbb{E}(\hat{\mathbf{b}}_{IV}) = \mathbf{b} + \mathbb{E}\big[(\mathbf{Z}'\mathbf{X})^{-1}\mathbf{Z}'\mathbf{u}\big]$$

This second term does **not** vanish in finite samples — unbiasedness would require $\mathbb{E}(u_i\mid\mathbf{Z},\mathbf{X})=0$, which fails precisely because $\mathbf{X}$ contains the endogenous $x_K$. The IV estimator therefore suffers from **small-sample bias**. Asymptotically, however:

$$\text{plim}\,\hat{\mathbf{b}}_{IV} = \mathbf{b} + \big[\mathbb{E}(\mathbf{z}_i'\mathbf{x}_i)\big]^{-1}\underbrace{\mathbb{E}(\mathbf{z}_i'u_i)}_{=0 \text{ by } A_1^{IV}} = \mathbf{b}$$

so the IV estimator **is consistent**. The practical implication: IV estimation should be applied to samples large enough for its asymptotic properties to be trusted — precisely the samples where its finite-sample bias becomes negligible.

## A surprising empirical pattern: 2SLS ≥ OLS

Angrist and Pischke's (2009, §4.1.1) quarter-of-birth application delivers a result that runs counter to the naive "ability bias means OLS overstates the return to schooling" intuition: across every specification in their Table 4.1.1, the 2SLS estimates of the return to education are **as large as or larger than** the corresponding OLS estimates (e.g. $0.081$ vs. $0.075$ with no controls). If ability bias alone were driving a wedge between OLS and the truth, 2SLS — purged of that bias — should come in systematically *below* OLS. That it does not suggests either that ability bias is empirically small relative to other forces, or that the quarter-of-birth instrument captures a [local average treatment effect](../instrumental-variables/late-theorem.md) for a specific subpopulation (those whose schooling is compulsion-constrained) whose true return to education happens to be higher than the population-average OLS coefficient — a preview of why, once treatment effects are heterogeneous, IV and OLS estimate genuinely different parameters rather than the same parameter with different amounts of bias.

*Source: Angrist & Pischke (2009), §4.1.1, Table 4.1.1.*
