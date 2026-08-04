---
title: The Sargan Test for Over-Identifying Restrictions
source: "Econ 1, Lecture Notes, §Testing in the IV framework › Using IVs to test for orthogonality, The Sargan test"
status: enriched
tags:
  - sargan-test
  - overidentifying-restrictions
  - instrumental-variables
prerequisites:
  - instrumental-variables/two-stage-least-squares
  - instrumental-variables/hausman-test
---
## Why over-identification enables a new test

With more instruments than endogenous regressors, [2SLS](../instrumental-variables/two-stage-least-squares.md) combines all of them — but each individual instrument, or any subset, would also identify the parameter on its own, under the maintained assumption that its own orthogonality condition holds. If all instruments are jointly valid, every such subset should consistently estimate the *same* underlying parameter. If they are not all valid, different subsets can converge to different values, and the discrepancy is detectable.

## Building the test statistic

For an over-identified model with $\mathbf{Z}$ including both exogenous regressors and $H-K$ instruments, orthogonality requires $\mathbb{E}(\mathbf{z}_i'u_i) = \mathbf{0}$ ($H \times 1$). By the CLT, if the true noise were observed, $\sqrt{N}\big(\frac{1}{N}\sum_i\mathbf{z}_i'u_i\big) \overset{\mathcal{L}}{\underset{H_0}{\to}} \mathcal{N}[\mathbf{0}, \sigma^2\mathbb{E}(\mathbf{z}_i'\mathbf{z}_i)]$, and the corresponding quadratic form converges to $\chi^2(H)$.

In practice the true noise is unobserved; the best available substitute is the residual from the *over-identified* 2SLS fit, $\hat{u}_i = y_i - \mathbf{x}_i\hat{\mathbf{b}}_{IV^*}$. In the **just-identified** case, $\frac{1}{N}\sum_i\mathbf{z}_i'\hat{u}_i = 0$ holds *by construction* — it is exactly the moment condition solved to define the IV estimator, so it carries no independent information. In the **over-identified** case, this sum is not mechanically forced to zero, and how far it deviates from zero is informative.

## The Sargan (Hansen) statistic

Let $\mathbf{b}_?$ denote the value such that $\text{plim}\,\hat{\mathbf{b}}_{IV^*} = \mathbf{b}_?$ (equal to the true $\mathbf{b}$ if and only if all instruments are jointly valid). Testing:

$$H_0: \exists\, \mathbf{b}_? \text{ such that } \mathbb{E}[\mathbf{z}_i'(y_i - \mathbf{x}_i\mathbf{b}_?)] = \mathbf{0} \text{ (holds for all } H \text{ instruments)}$$

$$S^{Sargan} = \left(\frac{1}{N}\sum_i \mathbf{z}_i'\hat{\mathbf{u}}_i\right)'\frac{N}{\hat\sigma^2}\left(\frac{1}{N}\mathbf{z}_i'\mathbf{z}_i\right)^{-1}\left(\frac{1}{N}\sum_i \mathbf{z}_i'\hat{\mathbf{u}}_i\right) \overset{\mathcal{L}}{\underset{H_0}{\to}} \chi^2(H-K-1)$$

In practice, this reduces to a global-significance test of $\hat{u}_i = \mathbf{z}_i\boldsymbol{\gamma} + v_i$ against $H_0: \boldsymbol{\gamma} = \mathbf{0}$.

> The Sargan test is often — **misleadingly** — called a test of "instrument validity." As with the [Hausman test](../instrumental-variables/hausman-test.md), this overstates what it delivers: the orthogonality of the instruments *just needed to identify the model* is assumed, not tested, and forms the basis on which the test is built. Rejecting $H_0$ shows that the instruments are **consistently inconsistent with each other** — they do not all converge to the same parameter — not that any specific instrument, individually, is invalid or valid.

## The GMM view, and a practical caveat

Angrist and Pischke (2009, §4.2.2) derive the identical statistic from a generalized-method-of-moments (GMM) perspective: 2SLS is the GMM estimator that minimizes a quadratic form in the sample moment vector $m_N(\Gamma) = N^{-1}\sum_i \mathbf{z}_i\hat\eta_i(\Gamma)$, and the minimized value of that quadratic form — the "2SLS minimand" — is exactly the over-identification (Sargan/Hansen) test statistic, asymptotically $\chi^2(H-K-1)$. They add an important practical warning worth carrying forward: because the statistic measures variance-*normalized* goodness of fit, it tends to be small (failing to reject) whenever the underlying IV estimates are already imprecise — so a non-rejection is weak comfort when standard errors are large, and a rejection need not signal invalid instruments at all; it can instead be a symptom of genuine [treatment-effect heterogeneity](../instrumental-variables/late-theorem.md), since different (all valid) instruments identify different LATEs and hence need not numerically agree.

*Source: Angrist & Pischke (2009), §4.2.2.*
