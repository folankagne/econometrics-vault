---
title: Omitted Variable Bias
source: "Econ 1, Lecture Notes, §Three typical sources of endogeneity › Omitted variables"
status: enriched
tags:
  - omitted-variable-bias
  - misspecification
  - mincer-equation
prerequisites:
  - identification/exogeneity-and-endogeneity
---
## The formal condition for omitted variable bias

Let the true DGP be $y_i = \sum_k x_{ik}b_k + w_ib_w + u_i$, with $b_w \neq 0$ and $\mathbb{E}[u_i\mid\mathbf{X},w] = 0$ (call this $A_3^{DGP}$). If the model actually estimated omits $w$, $y_i = \sum_k x_{ik}b_k + v_i$, then $v_i = u_i + w_ib_w$, and:

$$\mathbb{E}[\mathbf{x}_i'v_i] = \underbrace{\mathbb{E}(\mathbf{x}_i'u_i)}_{=0 \text{ by } A_3^{DGP}} + b_w\,\mathbb{E}[\mathbf{x}_i'w_i] \neq 0$$

as long as $\mathbb{E}[\mathbf{x}_i'w_i] \neq 0$: the included regressors are correlated with the omitted variable. This is the source of the classic **ability bias** in the [Mincer equation](../identification/exogeneity-and-endogeneity.md), where $w$ is unobserved ability.

## When omission does NOT cause bias

Omitting a variable is not automatically harmful — bias requires **both** $b_w \neq 0$ **and** $\mathbb{E}[\mathbf{x}_i'w_i] \neq 0$ at once. Omission is harmless if any of the following holds: the omitted variable is **irrelevant** ($b_w = 0$, i.e. $y \perp w$ given the other regressors); the omitted variable is **uncorrelated** with the included regressors ($\mathbf{X} \perp w$); or the variable is not actually omitted ($w \in \mathbf{X}$, trivially). Identification only fails when an omitted factor simultaneously *matters for the outcome* and *correlates with what is already in the model*.

## Functional-form misspecification as a hidden case of omission

Omitted variable bias is not limited to leaving out an entire covariate — it also arises from getting the *functional form* wrong. Suppose the true DGP is $y_i = g(\mathbf{x}_i,\theta) + v_i$ for some nonlinear $g(\cdot)$, but the estimated model imposes linearity, $y_i = \mathbf{x}_i\mathbf{b} + u_i$. Then $u_i = v_i + \underbrace{[g(\mathbf{x}_i,\theta) - \mathbf{x}_i\mathbf{b}]}_{g^*(\mathbf{x}_i,\theta,\mathbf{b})}$: the noise absorbs whatever nonlinear structure the linear approximation misses, and since $g^*(\cdot)$ is itself a function of $\mathbf{x}_i$, the noise correlates with the regressors — endogeneity from misspecification, structurally identical to omitting a variable.

Concretely, if the true Mincer DGP includes a quadratic experience term, $\ln w_i = \alpha_s Educ_i + \alpha_e Exp_i + \alpha_{e^2}Exp_i^2 + v_i$, but the estimated model drops $Exp_i^2$, then $u_i = v_i + \alpha_{e^2}Exp_i^2$ — and $Exp_i^2$ is obviously correlated with $Exp_i$, so the omission of a nonlinear term in an already-included variable generates exactly the same endogeneity problem as omitting an entirely separate variable.

## Two remedies Wooldridge treats separately: proxies and RESET

Wooldridge (2016, §9-1) treats the functional-form case above as detectable, at least in part: adding quadratic terms of significant regressors and testing their joint significance (an $F$ test) is a first line of defense, and **RESET** (Ramsey's regression specification error test) generalizes this by adding $\hat y^2$ and $\hat y^3$ from the initial fit as extra regressors and testing their joint significance — a significant RESET flags general nonlinearity the model missed, though it offers no direction on *how* to fix the specification, and (importantly) has no power against either omitted variables with linear conditional means or heteroskedasticity, so a clean RESET does not certify the model is otherwise well specified.

For omission of a genuinely separate, unobserved variable (his running example: unobserved *ability* omitted from a wage equation), Wooldridge's remedy (§9-2) is different in kind: rather than trying to detect the omission after the fact, find a **proxy variable** correlated with the unobservable — IQ score standing in for ability — and include it directly. If the proxy satisfies $\mathbb{E}(\text{ability}\mid educ,exper,IQ) = \mathbb{E}(\text{ability}\mid IQ)$ (once IQ is controlled for, education carries no further information about ability), including it recovers a consistent estimate of the return to education even though ability itself stays unobserved — his wage-equation example shows the estimated return to education falling from 6.5% to 5.4% once IQ is added, consistent with a positive ability bias in the naive estimate.

*Source: Wooldridge (2016), §§9-1, 9-2, Example 9.3.*
