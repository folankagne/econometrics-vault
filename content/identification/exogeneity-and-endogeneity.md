---
title: Exogeneity and Endogeneity
source: "Econ 1, Lecture Notes, §Identification Issues in Linear Regressions"
status: enriched
tags:
  - endogeneity
  - exogeneity
  - confounding-variation
  - ability-bias
  - mincer-equation
prerequisites:
  - ols-estimation/unbiasedness-of-ols
---
## A motivating example: when does a lagged regressor stay exogenous?

Consider the autoregressive time-series model $y_t = a_1y_{t-1} + \mathbf{x}_t\mathbf{b} + u_t$, with $\mathbb{E}(\mathbf{x}_t'u_t) = 0$. Is this enough for [$A_3^{OLS}$](../ols-estimation/unbiasedness-of-ols.md) to hold for the *lagged* regressor $y_{t-1}$ too? It depends entirely on whether the noise is serially correlated. If $A_{4b}^{OLS}$ (no serial correlation) holds, then $\mathbb{E}(y_{t-1}u_t) = \mathbb{E}[(a_1y_{t-2}+\mathbf{x}_{t-1}\mathbf{b}+u_{t-1})u_t] = 0$: exogeneity survives, because $u_{t-1}$ and $u_t$ are unrelated. But if the noise instead follows an AR(1) process, $u_t = \rho u_{t-1} + \varepsilon_t$, then $\mathbb{E}(y_{t-1}u_t) = \rho\,\sigma_\varepsilon^2/(1-\rho^2) \neq 0$ whenever $\rho \neq 0$: the lagged dependent variable becomes endogenous, because part of its variation is driven by the same persistent unobserved shock that also drives $u_t$.

## What A3 buys, and what dropping it costs

$A_3^{OLS}$ says regressors are **exogenous** — determined outside the model, uncorrelated with unobservables, so that $\mathbb{E}(y_i\mid\mathbf{X}) = \mathbf{x}_i\mathbf{b}$ exactly. Dropping it, $\overline{A}_3^{OLS}: \mathbb{E}(u_i\mid\mathbf{X}) \neq 0$ for at least one regressor, means that regressor is **endogenous**: something *inside* the noise correlates with it. This happens whenever a factor that is (i) unobserved, (ii) influential on the outcome, and (iii) correlated with a regressor exists — all three conditions must hold simultaneously for endogeneity to arise.

Under endogeneity, the noise becomes a function of the regressors, $u_i \equiv u_i(\mathbf{x}_i)$, so the observed partial derivative decomposes as:

$$\frac{\partial y_i}{\partial x_{ik}} = b_k + \underbrace{\frac{\partial u_i}{\partial x_{ik}}}_{\text{confounding variation}}$$

The second term, **confounding variation**, is exactly what prevents the observed covariation between $y$ and $x_k$ from identifying $b_k$ alone.

Wooldridge (2016, Ch.9 intro) uses this vocabulary directly: a regressor correlated with the error is an **endogenous explanatory variable**, a term borrowed from simultaneous-equations analysis but now used broadly for any regressor correlated with unobservables, "for whatever reason." He organizes the reasons into the same three-way split this vault uses — [omitted variables](../identification/omitted-variable-bias.md), [measurement error](../identification/measurement-error-and-attenuation-bias.md), and simultaneity — and stresses that, unlike heteroskedasticity, endogeneity is the "much more serious" Gauss-Markov failure precisely because it is not merely an inference problem: it corrupts the point estimate itself, and (per the argument below) does not go away no matter how much data is collected.

## Endogeneity biases and de-consistencies OLS

$$\hat{\mathbf{b}}_{OLS} = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{X}\mathbf{b} + (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{u} = \mathbf{b} + (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{u}$$

If $\mathbb{E}(u_i\mid\mathbf{X}) \neq 0$, the second term does not vanish in expectation: $\mathbb{E}(\hat{\mathbf{b}}_{OLS}) \neq \mathbf{b}$, so **OLS is biased**. The same failure survives asymptotically: $\text{plim}\,(\hat{\mathbf{b}}_{OLS} - \mathbf{b}) = \mathbb{E}(\mathbf{x}_i'\mathbf{x}_i)^{-1}\mathbb{E}(\mathbf{x}_i'u_i) \neq 0$, so **OLS is also inconsistent** — more data does not fix endogeneity, unlike the finite-sample biases that vanish asymptotically elsewhere in this vault. The sign and magnitude of the resulting bias is governed entirely by $\mathbb{E}[\mathbf{x}_i'u_i]$.

## Example: ability bias in the Mincer equation

The Mincer model regresses log wages on education and experience, $\ln w_i = \alpha_s Educ_i + \alpha_e Exp_i + \alpha_{e^2}Exp_i^2 + u_i$. A canonical omitted factor is individual **ability** $\mu_i$, folded into $u_i = \mu_i + v_i$. Two plausible facts generate endogeneity: more able people earn more (holding education and experience fixed), and more able people also tend to acquire more education. Ability sits in the noise and correlates with education — exactly the endogeneity condition — so $\mathbb{E}(u_i\mid Educ) \neq 0$, and the OLS coefficient on education mixes the *direct* return to schooling with the *indirect* effect of the ability that led people to become more educated in the first place. This is the standard **ability bias** story, and it recurs across a wide range of applied settings wherever an unobserved trait jointly drives both the outcome and a regressor of interest.
