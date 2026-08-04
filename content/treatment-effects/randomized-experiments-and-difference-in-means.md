---
title: Randomized Experiments and the Difference-in-Means Estimator
source: "Econ 2b, Ch.1 Traditional Approach to Causality, §Randomized Experiments and the Simple Regression Model"
status: enriched
tags:
  - randomized-controlled-trial
  - difference-in-means
  - zero-conditional-mean
prerequisites:
  - identification/zcm-and-zc-assumptions
  - ols-estimation/deriving-the-ols-estimator
---
## Why ZCM holds automatically under randomization

In a randomized experiment, the regressor is $X = T$, a binary, randomly allocated treatment, so the CEF takes only two values, $\mathbb{E}(y\mid T{=}0)$ and $\mathbb{E}(y\mid T{=}1)$:

$$\mathbb{E}(y\mid T) = \mathbb{E}(y\mid T{=}0) + \big[\mathbb{E}(y\mid T{=}1)-\mathbb{E}(y\mid T{=}0)\big]T = \beta_0+\beta_1T$$

The ACE is simply $\beta_1 = \mathbb{E}(y\mid T{=}1)-\mathbb{E}(y\mid T{=}0)$. Since $u$ collects every cause of $y$ other than $T$, and **randomization** of $T$ guarantees $u \perp T$ regardless of what those other causes actually are, [ZCM](../identification/zcm-and-zc-assumptions.md) holds **by design** — no theory of "what is in $u$" is required, unlike the observational setting where ZCM must be argued for case by case.

## Difference-in-means equals the OLS estimator

For $y = \beta_0+\beta_1T+u$ with $\text{Cov}(u,T)=\mathbb{E}(u)=0$, the population estimand is $\beta_1 = \mathbb{E}(y\mid T{=}1)-\mathbb{E}(y\mid T{=}0)$, and — a direct consequence of $T$ being binary — the OLS estimator reduces exactly to the **difference-in-means**:

$$\hat\beta_1^{OLS} = \bar y^{T=1} - \bar y^{T=0}$$

**Proof sketch.** By the [analogy principle](../causal-inference-foundations/parameter-estimand-and-estimator.md), $\hat\beta_1^{OLS} = \widehat{\text{Cov}}(y,T)/\widehat{\text{Var}}(T)$. For binary $T$, $y_iT_i = y_i$ when $T_i=1$ and $0$ otherwise, so $\frac{1}{n}\sum_i y_iT_i = \bar y^{T=1}\bar T$, giving $\widehat{\text{Cov}}(y,T) = \bar T(\bar y^{T=1}-\bar y)$. Decomposing the overall mean as $\bar y = \bar T\bar y^{T=1}+(1-\bar T)\bar y^{T=0}$ gives $\bar y^{T=1}-\bar y = (1-\bar T)(\bar y^{T=1}-\bar y^{T=0})$, so $\widehat{\text{Cov}}(y,T) = \bar T(1-\bar T)(\bar y^{T=1}-\bar y^{T=0})$. Since $T^2=T$ for binary $T$, $\widehat{\text{Var}}(T) = \bar T(1-\bar T)$. The $\bar T(1-\bar T)$ terms cancel, leaving $\hat\beta_1^{OLS} = \bar y^{T=1}-\bar y^{T=0}$.

> This is why the most intuitive possible estimator for an experiment — compare the treatment group's mean to the control group's mean — is not an ad hoc shortcut but exactly what OLS delivers once the regressor is a randomized binary indicator. The rest of the [treatment-effects](../treatment-effects/average-treatment-effect-and-att.md) toolkit generalizes this basic result to settings where treatment is not perfectly randomized, or where compliance with the assigned treatment is imperfect.

## From the STAR experiment: the short and long regression

Angrist and Pischke (2009, §2.3) illustrate this identity using the STAR class-size data, writing the treatment-only ("short") regression $Y_i = \alpha + \rho D_i + \eta_i$ alongside a "long" regression that adds covariates, $Y_i = \alpha + \rho D_i + X_i'\gamma + \eta_i$. Because random assignment makes $D_i \perp X_i$, the two regressions give *the same* point estimate of $\rho$ in expectation — Krueger's (1999) STAR estimates of the small-class effect are stable at roughly 4.8–5.4 percentile points whether or not student race, gender, free-lunch status, or school fixed effects are included. What the covariates *do* change is precision: the standard error falls from 2.19 (no controls) to 1.19 (full controls), because the added variables explain residual variation in test scores unrelated to treatment assignment — exactly the mechanism developed in [adding controls in RCTs](../treatment-effects/adding-controls-in-rcts.md).

*Source: Angrist & Pischke (2009), §2.3, Table 2.2.2.*
