---
title: Consequences of Non-Sphericity for OLS
source: "Econ 1, Lecture Notes, §Restoring statistical inference in the non-spherical model"
status: enriched
tags:
  - non-spherical-disturbances
  - variance-covariance-matrix
  - efficiency
  - monte-carlo-simulation
prerequisites:
  - heteroskedasticity-and-autocorrelation/non-spherical-disturbances
  - ols-estimation/gauss-markov-theorem
---
## The true variance of OLS under non-sphericity

Assuming $A_1^{OLS}$–$A_3^{OLS}$ still hold (so OLS remains unbiased and consistent), dropping $A_4^{OLS}$ changes the variance of the OLS estimator. Substituting $\mathbb{E}(\mathbf{u}\mathbf{u}'\mid\mathbf{X}) = \sigma^2\boldsymbol{\Omega}$ into the general variance expression:

$$\mathbb{V}(\hat{\mathbf{b}}_{OLS}\mid\mathbf{X}) = \sigma^2(\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\boldsymbol{\Omega}\mathbf{X}(\mathbf{X}'\mathbf{X})^{-1}$$

This is **not** $\sigma^2(\mathbf{X}'\mathbf{X})^{-1}$ — the formula that statistical software computes by default. Using the default formula anyway means computing a matrix that simply is not the variance of the OLS estimator, and any confidence interval or test built on it will be misleading.

## OLS is still LUE, but no longer B(est)

OLS remains linear and unbiased (since $A_3^{OLS}$ is retained), but it is generally no longer **efficient**: [Gauss-Markov](../ols-estimation/gauss-markov-theorem.md) required $A_4^{OLS}$ to establish that OLS has the lowest variance among linear unbiased estimators. Under non-sphericity, OLS ignores information contained in the pattern of variances (heteroskedasticity) or correlations (autocorrelation) across observations, and an alternative unbiased estimator that exploits that structure can achieve lower variance.

## Naive inference goes wrong: a Monte Carlo illustration

Simulating data from $y_i = u_i$ with $u_i = v_i\sigma(x_i)$ under three different heteroskedastic variance functions (labeled M, D, E), and computing OLS estimates across $100{,}000$ simulated samples at sizes $N = 50, 500, 8000$, shows that the *point estimate* $\hat{b}_1^{OLS}$ is essentially unbiased throughout (consistent with OLS remaining unbiased and consistent under non-sphericity). But the naive variance $\sigma^2(\mathbf{X}'\mathbf{X})^{-1}$ diverges substantially from the true variance in every specification, and — critically — **larger samples do not fix it**: the empirical rejection rate of a true null hypothesis stays far from the nominal significance level ($10\%$, $5\%$, $1\%$) at every sample size tested, sometimes overstating and sometimes understating the true rejection rate depending on the specification.

> As Angrist and Pischke put it in *Mostly Harmless Econometrics*: "Carefully applied to coherent causal questions, regression and 2SLS almost always make sense. **Your standard errors probably won't be quite right, but they rarely are.**" The point estimate survives non-sphericity; the standard errors do not, unless explicitly corrected via [robust](../heteroskedasticity-and-autocorrelation/white-robust-standard-errors.md) or [efficient](../heteroskedasticity-and-autocorrelation/sphericalization-and-gls.md) estimation.

## Two ways forward

Non-sphericity creates two distinct problems, addressed by two distinct sets of tools: **robust estimation**, which computes the *correct* variance of the (still unbiased but inefficient) OLS estimator, $\sigma^2(\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\boldsymbol{\Omega}\mathbf{X}(\mathbf{X}'\mathbf{X})^{-1}$; and **efficient estimation**, which restores efficiency by exploiting the variance structure directly rather than merely correcting for it.

Wooldridge (2016, Ch.8 summary) opens with exactly this framing: heteroskedasticity "does not cause bias or inconsistency in the OLS estimators" — the point estimates survive — but it does invalidate the usual $t$, $F$, and LM statistics, since these are built from a variance formula, $\sigma^2(\mathbf{X}'\mathbf{X})^{-1}$, that is simply wrong once $A_4^{OLS}$ fails. His labor-force-participation example (Example 8.8) is a useful complement to the Monte Carlo evidence above: comparing usual and heteroskedasticity-robust standard errors for the same regression, several coefficients show almost no difference between the two — a reminder that heteroskedasticity, while a real theoretical problem, is sometimes practically minor for a given dataset, which is exactly why it is routine to compute and report both.

*Source: Wooldridge (2016), Ch.8 summary, Example 8.8.*
