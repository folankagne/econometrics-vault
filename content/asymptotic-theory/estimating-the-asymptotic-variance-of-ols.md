---
title: Estimating the Asymptotic Variance of OLS
source: "Econ 1, Lecture Notes, §Testing without the normality assumption"
status: enriched
tags:
  - asymptotic-variance
  - consistent-estimator
  - degrees-of-freedom
prerequisites:
  - asymptotic-theory/asymptotic-distribution-of-ols-can
  - ols-estimation/finite-sample-variance-of-ols
---
## Asymptotic variance versus finite-sample variance

The [CAN result](../asymptotic-theory/asymptotic-distribution-of-ols-can.md) gives $\sqrt{N}(\hat{\mathbf{b}}_{OLS} - \mathbf{b}) \overset{\mathcal{L}}{\to} \mathcal{N}[\mathbf{0}, \sigma^2\mathbf{Q}^{-1}]$. The variance appearing here, of the *standardized* estimator, is the **asymptotic variance**:

$$\mathbb{V}_{as}(\hat{\mathbf{b}}_{OLS}) = \mathbb{V}\big[\sqrt{N}(\hat{\mathbf{b}}_{OLS} - \mathbf{b})\big] = \sigma^2\mathbb{E}(\mathbf{x}_i'\mathbf{x}_i)^{-1} \equiv \sigma^2\mathbf{Q}^{-1}$$

This is distinct from the ordinary (finite-sample) variance of $\hat{\mathbf{b}}_{OLS}$ itself: since $\mathbb{V}_{as}(\hat{\mathbf{b}}_{OLS}) = N \cdot \mathbb{V}(\hat{\mathbf{b}}_{OLS})$, the two are related by:

$$\mathbb{V}(\hat{\mathbf{b}}_{OLS}) = \frac{1}{N}\mathbb{V}_{as}(\hat{\mathbf{b}}_{OLS})$$

The expression $\sigma^2\mathbf{Q}^{-1}$ contains two unknowns, $\sigma^2$ and $\mathbf{Q}$, both of which must be estimated before this result can be used in practice.

## Consistent estimators

The degrees-of-freedom-corrected residual variance remains both unbiased and consistent under $A_1^{OLS}$–$A_{5'}^{OLS}$:

$$\hat{\sigma}^2 = \frac{(\mathbf{y} - \mathbf{X}\hat{\mathbf{b}}_{OLS})'(\mathbf{y} - \mathbf{X}\hat{\mathbf{b}}_{OLS})}{N-K-1} = \frac{\hat{\mathbf{u}}'\hat{\mathbf{u}}}{N-K-1} \overset{\mathbb{P}}{\longrightarrow} \sigma^2$$

The $N-K-1$ divisor (rather than $N$) is what delivers both properties simultaneously — the degrees-of-freedom correction is not a cosmetic convention. Combined with the sample analogue of $\mathbf{Q}$, this yields a consistent estimator of the asymptotic variance:

$$\hat{\mathbb{V}}_{as}(\hat{\mathbf{b}}^{OLS}) = \hat{\sigma}^2\left(\frac{1}{N}\sum_{i=1}^{N}\mathbf{x}_i'\mathbf{x}_i\right)^{-1} \overset{\mathbb{P}}{\longrightarrow} \mathbb{V}_{as}(\hat{\mathbf{b}}_{OLS})$$

which in turn gives a consistent estimator of the plain (finite-sample-style) variance:

$$\hat{\mathbb{V}}(\hat{\mathbf{b}}_{OLS}) = \frac{1}{N}\hat{\mathbb{V}}_{as}(\hat{\mathbf{b}}_{OLS}) = \hat{\sigma}^2(\mathbf{X}'\mathbf{X})^{-1} \overset{\mathbb{P}}{\longrightarrow} \mathbb{V}(\hat{\mathbf{b}}_{OLS})$$

> This is exactly the same formula, $\hat{\sigma}^2(\mathbf{X}'\mathbf{X})^{-1}$, already derived for the [finite-sample variance of OLS](../ols-estimation/finite-sample-variance-of-ols.md) — the asymptotic route arrives at the same practical estimator, but justifies it without needing to assume normal errors, at the cost of the result being only exact in the limit rather than in any fixed finite sample. Throughout, $A_4^{OLS}$ (spherical disturbances) is still assumed to hold; relaxing it as well is the subject of [heteroskedasticity and autocorrelation](../heteroskedasticity-and-autocorrelation/00-overview.md).

## The 1/√n rate, and how much a bigger sample actually helps

Wooldridge (2016, §5-2) draws out a practical implication of $\widehat{\mathbb{V}}(\hat\beta_j) = \hat\sigma^2/[SST_j(1-R_j^2)]$: since $SST_j \approx n\sigma_j^2$ grows roughly proportionally with $n$ (for a fixed population variance $\sigma_j^2$ of $x_j$), the standard error itself shrinks at rate $\text{se}(\hat\beta_j) \approx c_j/\sqrt{n}$ for a constant $c_j = \sigma/[\sigma_j\sqrt{1-\rho_j^2}]$ that does not depend on sample size. This $1/\sqrt{n}$ rate is the standard benchmark for "how much more data helps": his birth-weight example uses half a sample ($n=694$) versus the full sample ($n=1{,}388$, exactly double) and finds the standard error on the cigarettes-smoked coefficient falls by a factor of about $0.662$ — close to the $\sqrt{694/1388}\approx0.707$ the rate predicts. A useful consequence: because the rate is a *square root*, quadrupling the sample size only halves standard errors, not eliminates them — collecting more data has sharply diminishing returns for precision.

*Source: Wooldridge (2016), §5-2.*
