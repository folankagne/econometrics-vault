---
title: Testing for AR(1) Autocorrelation
source: "Econ 1, Lecture Notes, §Testing for AR(1) correlation, §Implementation of Durbin-Watson"
status: enriched
tags:
  - breusch-godfrey-test
  - durbin-watson-statistic
  - autocorrelation
prerequisites:
  - heteroskedasticity-and-autocorrelation/ar1-processes-and-prais-winsten-estimation
---
## Testing via the OLS estimate of ρ

If $u_t$ were observed, regressing $u_t = \lambda u_{t-1} + \varepsilon_t$ by OLS gives $\hat\lambda_{OLS}$, which is CAN with:

$$\mathbb{V}_{as}(\hat\lambda_{OLS}) = \mathbb{V}(u_{t-1})^{-1}\mathbb{V}(\varepsilon_t) = 1-\rho^2 \qquad\qquad \sqrt{T}(\hat\lambda_{OLS} - \rho) \overset{\mathcal{L}}{\to} \mathcal{N}(0, 1-\rho^2)$$

The same asymptotic property carries over (with a more involved proof) when the *estimated* residuals $\hat u_t$ are used in place of the true $u_t$: $\text{plim}\,\hat\rho_{OLS} = \rho$ and $\sqrt{T}(\hat\rho_{OLS} - \rho) \overset{\mathcal{L}}{\to} \mathcal{N}(0, 1-\rho^2)$. This is what makes both FGLS estimation and a direct test of autocorrelation possible from data alone.

## The Breusch-Godfrey/Pagan test

Testing $H_0: \rho = 0$ against $H_1: \rho \neq 0$ uses $\sqrt{T}\hat\rho_{OLS} \overset{\mathcal{L}}{\to} \mathcal{N}(0,1)$ under the null — a consistent $t$-type test, known as the **Breusch-Godfrey (or Breusch-Pagan) test** for autocorrelation.

## The Durbin-Watson statistic

An alternative, longstanding diagnostic is the **Durbin-Watson statistic**:

$$\hat{d} = \frac{\sum_{t=2}^{T}(\hat{u}_t - \hat{u}_{t-1})^2}{\sum_{t=1}^{T}\hat{u}_t^2}$$

which satisfies $\text{plim}\,\hat{d} = 2(1-\rho)$, giving a direct mapping between the statistic and the sign of the autocorrelation:

$$\rho = 0 \Leftrightarrow \text{plim}\,\hat{d} = 2 \qquad\qquad \rho > 0 \Leftrightarrow \text{plim}\,\hat{d} < 2 \qquad\qquad \rho < 0 \Leftrightarrow \text{plim}\,\hat{d} > 2$$

As $\rho \to -1$, $\text{plim}\,\hat{d} \to 4$: the statistic is bounded in $[0,4]$, with $2$ signaling no autocorrelation and departures in either direction signaling positive or negative autocorrelation respectively.

> The exact distribution of $\hat{d}$ is not fully known in closed form; Durbin showed it is bounded by two reference statistics $d_l < \hat{d} < d_u$, whose distributions depend on $T$ and $K$ and are tabulated — leaving, unlike most tests in this vault, an inconclusive region between the lower and upper bounds where the test cannot reject or fail to reject with certainty.

## Wooldridge's version, and why regressors matter

Wooldridge (2016, §12-2) presents the same $t$-test on $\hat u_{t-1}$ (his equation 12.14) with an important caveat this entry's derivation elides: the test is valid as stated only when the regressors are **strictly exogenous** — in particular, the model must not contain a lagged dependent variable, since $y_{t-1}$ and $u_{t-1}$ are mechanically correlated whenever $u_t$ itself is autocorrelated, which invalidates the simple residual-on-lagged-residual regression. His fix for the general case (his "regression with general regressors," §12-2c) reruns the auxiliary regression with *all* original regressors included alongside $\hat u_{t-1}$, which restores validity even with a lagged dependent variable — this is the **Breusch-Godfrey** test in its fully general form, and it generalizes directly to testing for AR($q$) correlation at once by including $\hat u_{t-1},\dots,\hat u_{t-q}$ and taking the joint $F$ (or $LM = (n-q)R_u^2$) statistic. Applied to the Phillips-curve example he develops throughout the chapter, the AR(1) test gives $\hat\rho=.573$ ($t=4.93$, $p<.001$) for the static specification — strong evidence of positive serial correlation — versus $\hat\rho=-.036$ ($t=-0.29$) for an expectations-augmented specification with more complete dynamics, illustrating this entry's point that serial correlation in the residuals often signals dynamic misspecification (an incompletely specified lag structure) rather than a nuisance to be corrected away mechanically.

*Source: Wooldridge (2016), §§12-1d, 12-2, Example 12.1.*
