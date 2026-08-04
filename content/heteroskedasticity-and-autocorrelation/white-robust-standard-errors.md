---
title: White (Heteroskedasticity-Robust) Standard Errors
source: "Econ 1, Lecture Notes, §Cross section data: Heteroskedasticity"
status: enriched
tags:
  - heteroskedasticity
  - white-standard-errors
  - hccme
  - random-coefficients-model
  - sandwich-estimator
prerequisites:
  - heteroskedasticity-and-autocorrelation/non-spherical-disturbances
  - asymptotic-theory/asymptotic-distribution-of-ols-can
---
## Pure heteroskedasticity

The **pure heteroskedastic model** drops $A_{4a}^{OLS}$ but retains $A_{4b}^{OLS}$ (no serial correlation):

$$\overline{A}_{4a}^{OLS}: \ \mathbb{V}(u_i\mid\mathbf{x}_i)/\sigma^2 = \sigma_i^2 \neq \mathbb{V}(u_j\mid\mathbf{x}_j) \qquad A_{4b}^{OLS}: \ \mathbb{E}(u_iu_j\mid\mathbf{X}) = 0, \ i\neq j$$

so that $\boldsymbol{\Omega}$ is diagonal with distinct entries $\sigma_i^2$ — reducing the curse of dimensionality from $\frac{1}{2}(N^2+N)$ down to $N$ unknowns (still more than the $N-K-1$ degrees of freedom available, so further structure is eventually needed).

## Example: a random coefficients model generates heteroskedasticity

Suppose the effect of $x$ on $y$ is individual-specific rather than homogeneous: $y_i = a + x_ib_i + v_i$ with $b_i = b + v_{bi}$, where $v_i$ and $v_{bi}$ are mean-zero, mutually independent, and independent across individuals with variances $\sigma_v^2$ and $\sigma_b^2$. The reduced form is $y_i = a + x_ib + u_i$ with $u_i = x_iv_{bi} + v_i$. Then $\mathbb{E}(u_i\mid\mathbf{X}) = 0$ and $\mathbb{E}(u_iu_j\mid\mathbf{X}) = 0$ for $i \neq j$ both hold — exogeneity and no serial correlation survive — but:

$$\mathbb{E}(u_i^2\mid\mathbf{X}) = x_i^2\sigma_b^2 + \sigma_v^2 \ \Rightarrow\ \mathbb{V}(\mathbf{u}\mid\mathbf{X}) = \text{Diag}(\sigma_v^2 + x_i^2\sigma_b^2) \neq \sigma^2\mathbf{I}_N$$

Heterogeneous treatment effects across individuals, entirely on their own, are enough to generate heteroskedasticity — homoskedasticity is a strong claim that individual-level heterogeneity in the *effect itself*, not just in observed characteristics, does not exist.

## Efficient estimation: Weighted Least Squares

Since $\boldsymbol{\Omega}^{-1/2} = \text{Diag}(1/\sigma_i)$ in the diagonal case, the [sphericalized](../heteroskedasticity-and-autocorrelation/sphericalization-and-gls.md) model divides every observation's $y_i$ and $x_{ik}$ by its own $\sigma_i$: $\tilde{y}_i = y_i/\sigma_i$, $\tilde{x}_{ik} = x_{ik}/\sigma_i$. OLS on this transformed model is the **Weighted Least Squares (WLS)** estimator, which implicitly down-weights noisier (higher-variance) observations relative to more precise ones — unlike plain OLS, which weights every observation equally.

## Robust estimation: the White (HCCME) estimator

Rather than transform the model, robust estimation corrects the *variance formula* directly. The asymptotic variance of OLS is a "sandwich": $\big(\frac{1}{N}\sum_i\mathbf{x}_i'\mathbf{x}_i\big)^{-1}$ ("bread") applied on both sides of $\text{plim}\,\frac{1}{N}\mathbf{X}'\mathbf{u}\mathbf{u}'\mathbf{X}$ ("ham"). Under $A_{5'}^{OLS}$ the bread is easy — it converges to $\mathbf{Q}^{-1}$. Under pure heteroskedasticity, off-diagonal cross-terms in $\mathbf{u}\mathbf{u}'$ vanish, so the ham simplifies to $\text{plim}\,\frac{1}{N}\sum_i \mathbf{x}_i'u_i^2\mathbf{x}_i$. White (1980) showed this is consistently estimated using squared OLS residuals:

$$\frac{1}{N}\sum_i \hat{u}_i^2\mathbf{x}_i'\mathbf{x}_i \overset{\mathbb{P}}{\longrightarrow} \mathbb{E}(u_i^2\mathbf{x}_i'\mathbf{x}_i)$$

giving the **Heteroskedasticity-Consistent Covariance Matrix Estimator (HCCME)**, or **White robust estimator** (Stata's `, robust`):

$$\hat{\mathbb{V}}_{White}(\hat{\mathbf{b}}_{OLS}) = (\mathbf{X}'\mathbf{X})^{-1}\left(\sum_{i=1}^{N}\hat{u}_i^2\mathbf{x}_i\mathbf{x}_i'\right)(\mathbf{X}'\mathbf{X})^{-1}$$

The "ham" must be built from $\sum_i \hat{u}_i^2\mathbf{x}_i\mathbf{x}_i'$ — the sum of individual outer products — and **not** from $\mathbf{X}'\hat{\mathbf{u}}\hat{\mathbf{u}}'\mathbf{X}$, which would incorrectly include cross-products of noise *between* different individuals that pure heteroskedasticity rules out.

## Performance in finite samples: a Monte Carlo comparison

Applying the White estimator to the same simulated data used to illustrate [naive inference going wrong](../heteroskedasticity-and-autocorrelation/consequences-of-non-sphericity-for-ols.md): at $N=50$, the White variance estimate is still noticeably off from the true variance and empirical rejection rates remain distorted; at $N=500$ it is much closer, with rejection rates near their nominal levels; at $N=8000$ the estimated variance is nearly exact. The robust estimator is *consistent* — while the naive homoskedastic-formula variance is not, at any sample size — but its own good behavior relies on asymptotics and can be slow to kick in, demanding fairly large samples before its nominal properties are trustworthy.

## Testing for heteroskedasticity: Breusch-Pagan and White

Before reaching for robust standard errors, Wooldridge (2016, §8-3) presents two standard tests of $H_0: \mathbb{V}(u\mid\mathbf{x}) = \sigma^2$ (homoskedasticity). The **Breusch-Pagan (BP) test** regresses the squared OLS residuals $\hat u_i^2$ on all the original regressors $x_1,\dots,x_k$ and tests their joint significance (via the $F$ form, or the $LM = nR_u^2$ form, both asymptotically valid without needing the errors to be normal) — the logic being that if $\hat u_i^2$ is systematically related to any $x_j$, homoskedasticity is violated. The **(special case of the) White test** instead regresses $\hat u_i^2$ on the fitted values $\hat y_i$ and $\hat y_i^2$, which is a more parsimonious way of picking up heteroskedasticity that depends on the regressors *and* their interactions/nonlinear combinations without having to include every cross-term individually. His cigarette-demand example (Example 8.7) finds a Breusch-Pagan $R^2$ of only $0.040$ — small — but with $n=807$, $LM = 807(0.040)\approx 32.28$, an overwhelming rejection of homoskedasticity at conventional levels: a reminder that with large samples, even a small $R^2$ in the auxiliary regression can be highly statistically significant, so the $LM$ (or $F$) statistic, not the raw $R^2$, is what must be checked.

*Source: Wooldridge (2016), §8-3, Example 8.7.*
