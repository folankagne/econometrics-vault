---
title: The CIA and Standard Linear Regression
source: "Econ 2b, Ch.5 Estimation under Unconfoundedness, §Relation to Standard Linear Regression"
status: enriched
tags:
  - conditional-independence-assumption
  - zero-conditional-mean
  - homogeneous-treatment-effects
prerequisites:
  - unconfoundedness-methods/nonparametric-identification-under-cia
  - identification/zcm-and-zc-assumptions
---
## When does plain OLS recover a causal effect?

Given (i) **homogeneous effects**, $Y_i(1)-Y_i(0)=\beta$ for all $i$; (ii) **linearity**, $\mathbb{E}[Y_i(0)\mid X_i]=\alpha+X_i'\gamma$; and (iii) the **CIA**, $\mathbb{E}[Y_i(0)\mid X_i,D_i]=\mathbb{E}[Y_i(0)\mid X_i]$:

$$\mathbb{E}[Y_i\mid X_i,D_i] = D_i\,\mathbb{E}[Y_i(1)\mid X_i,D_i] + (1-D_i)\,\mathbb{E}[Y_i(0)\mid X_i,D_i] = \mathbb{E}[Y_i(0)\mid X_i] + \beta D_i = \alpha+X_i'\gamma+\beta D_i$$

using (i) and (iii) to write $\mathbb{E}[Y_i(1)\mid X_i,D_i] = \mathbb{E}[Y_i(0)+\beta\mid X_i]$, and (ii) for the final substitution. **Plain OLS of $Y_i$ on $(1,X_i,D_i)$ identifies $\beta$.** This connects directly to the [ZCM assumption](../identification/zcm-and-zc-assumptions.md) from Econ 1/2b Chapter 1: under (i)–(iii), $Y_i=\alpha+X_i'\gamma+\beta D_i+u_i$ satisfies ZCM with $u_i = Y_i(0)-\mathbb{E}[Y_i(0)\mid X_i]$.

## Why ZCM is not the same claim as causal identification

Suppose (iii) instead fails specifically: $\mathbb{E}[Y_i(0)\mid X_i,D_i] = \alpha+X_i'\gamma+e\cdot D_i$ for some $e\neq 0$ — the untreated baseline outcome itself depends on treatment status, i.e. **selection on unobservables**, violating the CIA. Then $Y_i(0) = \alpha+X_i'\gamma+e\cdot D_i+u_i$ with $\mathbb{E}[u_i\mid X_i,D_i]=0$, so:

$$Y_i = \alpha + (\beta+e)D_i + X_i'\gamma + u_i, \qquad \mathbb{E}[u_i\mid X_i,D_i]=0$$

OLS still satisfies ZCM here — the regression error is still mean-independent of the regressors — but it identifies $(\beta+e)$, **not** the causal parameter $\beta$. This is the crucial distinction: **a regression having ZCM is a purely statistical property; it says nothing by itself about whether the estimated coefficient is causal.** Causal identification additionally requires the CIA (or some other identification strategy) — ZCM alone, without a substantive argument for why it holds *for causal reasons* rather than merely as a residual-orthogonality bookkeeping fact, is not sufficient.

This is exactly the diagnosis for LaLonde's original multivariate-regression estimates on the CPS/PSID comparison groups: regressing NSW-plus-comparison earnings on treatment and a standard set of controls (age, education, race) satisfies ZCM mechanically — the regression residuals are orthogonal to the included regressors by construction — yet still returned deeply wrong, often negative, estimates of the training program's effect, because the CIA itself failed: whatever made CPS/PSID respondents different from NSW trainees was not fully captured by the linear control set, so the $e\cdot D_i$ selection term above remained embedded in the coefficient on $D_i$.

*Source: Cunningham (2021), Ch.5.*
