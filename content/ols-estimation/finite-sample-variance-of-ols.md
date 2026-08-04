---
title: "Finite-Sample Variance of OLS (A4)"
source: "Econ 1, Lecture Notes, §Finite sample properties of the OLS estimator › Statistical Inference 1: Precision of the OLS estimator"
status: enriched
tags:
  - variance-covariance-matrix
  - homoskedasticity
  - spherical-disturbances
  - precision
prerequisites:
  - ols-estimation/unbiasedness-of-ols
  - probability-and-distributions/variance-and-covariance-of-a-random-variable
---
## Setting up the variance-covariance matrix

Precision — how tightly the sampling distribution of $\hat{\mathbf{b}}^{OLS}$ is spread around its mean — is captured by the $(K{+}1 \times K{+}1)$ variance-covariance matrix of the estimator:

$$
\mathbb{V}(\hat{\mathbf{b}}^{OLS} \mid \mathbf{X})
= \mathbb{E}\Big[\big(\hat{\mathbf{b}}^{OLS} - \mathbb{E}(\hat{\mathbf{b}}^{OLS}\mid\mathbf{X})\big)\big(\hat{\mathbf{b}}^{OLS} - \mathbb{E}(\hat{\mathbf{b}}^{OLS}\mid\mathbf{X})\big)' \,\Big|\, \mathbf{X}\Big]
= \mathbf{(X'X)}^{-1}\mathbf{X}'\,\mathbb{E}[\mathbf{u}\mathbf{u}' \mid \mathbf{X}]\,\mathbf{X}\mathbf{(X'X)}^{-1}
$$

using $\hat{\mathbf{b}}^{OLS} - \mathbf{b} = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{u}$. The obstacle is the term $\mathbb{E}[\mathbf{u}\mathbf{u}' \mid \mathbf{X}]$: the $(N \times N)$ variance-covariance matrix of the true noise, with $\mathbb{V}(u_i \mid \mathbf{X})$ on the diagonal and $\text{Cov}(u_i, u_j \mid \mathbf{X})$ off it — unobservable, since the true noise is never observed.

## Assumption A4: spherical disturbances

To make this matrix tractable, two further assumptions are imposed:

$$A_{4a}^{OLS}: \ \mathbb{V}(u_i \mid \mathbf{X}) = \sigma^2, \ \ \forall i \qquad\qquad A_{4b}^{OLS}: \ \mathbb{E}(u_i u_j \mid \mathbf{X}) = 0, \ \ \forall i \neq j$$

$A_{4a}^{OLS}$ is **homoskedasticity**: every individual's noise has the same variance. $A_{4b}^{OLS}$ is the **no serial correlation** assumption: the noise is uncorrelated across individuals. Together, $A_4^{OLS} = \{A_{4a}^{OLS}, A_{4b}^{OLS}\}$ collapse $\mathbb{E}[\mathbf{u}\mathbf{u}' \mid \mathbf{X}]$ to a scalar multiple of the identity matrix:

$$\mathbb{E}[\mathbf{u}\mathbf{u}' \mid \mathbf{X}] = \sigma^2 \mathbf{I}_N$$

This is called a **spherical disturbances** structure — the joint distribution of the noise, viewed from above, is spherically symmetric. Combined with $A_3^{OLS}$, it implies the noise is independently and identically distributed (i.i.d.) across individuals.

## The finite-sample variance of OLS

Substituting $\sigma^2 \mathbf{I}_N$ back into the variance expression and simplifying:

$$
\begin{align}
\mathbb{V}(\hat{\mathbf{b}}^{OLS} \mid \mathbf{X}) &= \mathbf{(X'X)}^{-1}\mathbf{X}'\, \sigma^2 \mathbf{I}_N \,\mathbf{X}\mathbf{(X'X)}^{-1} \\
&= \sigma^2\, \mathbf{(X'X)}^{-1}(\mathbf{X}'\mathbf{X})\mathbf{(X'X)}^{-1} \\
&= \sigma^2 \mathbf{(X'X)}^{-1}
\end{align}
$$

This closed-form result — $\mathbb{V}(\hat{\mathbf{b}}^{OLS} \mid \mathbf{X}) = \sigma^2(\mathbf{X}'\mathbf{X})^{-1}$ — is what makes finite-sample inference on OLS operational, and it is only valid under $A_4^{OLS}$. When disturbances are not spherical — [heteroskedastic or serially correlated](../heteroskedasticity-and-autocorrelation/00-overview.md) — this expression is wrong, and a different variance formula is required even though the OLS point estimates themselves remain unbiased.

## What drives the variance of a single coefficient

Wooldridge (2016, §3-4) unpacks the diagonal entry of $\sigma^2(\mathbf{X}'\mathbf{X})^{-1}$ corresponding to $\hat{\beta}_j$ into an explicit formula that isolates *three* separate sources of imprecision:

$$\text{Var}(\hat{\beta}_j) = \frac{\sigma^2}{SST_j(1-R_j^2)}$$

where $SST_j = \sum_i(x_{ij}-\bar{x}_j)^2$ is the total sample variation in $x_j$, and $R_j^2$ is the $R^2$ from regressing $x_j$ on *all other* regressors. This decomposition makes the drivers of imprecision explicit: (1) a larger error variance $\sigma^2$ always inflates every coefficient's variance; (2) more spread in $x_j$ itself (larger $SST_j$) shrinks the variance — more variation in the regressor makes its effect easier to pin down; and (3) a high $R_j^2$ — meaning $x_j$ is well explained by the *other* regressors, i.e. **multicollinearity** — inflates $\text{Var}(\hat{\beta}_j)$ through the factor $1/(1-R_j^2)$, potentially severely as $R_j^2 \to 1$. Multicollinearity does not bias $\hat{\beta}_j$ or violate any Gauss-Markov assumption; it purely erodes precision, which is why highly collinear regressors can produce large standard errors and statistically insignificant coefficients even when the underlying relationship is real and economically important.

*Source: Wooldridge (2016), §3-4.*
