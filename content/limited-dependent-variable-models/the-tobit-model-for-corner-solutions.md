---
title: The Tobit Model for Corner Solution Responses
source: "Wooldridge (2016), §17-2"
status: enriched
tags:
  - beyond-lectures
  - tobit-model
  - corner-solution
  - censored-regression
  - inverse-mills-ratio
prerequisites:
  - limited-dependent-variable-models/logit-and-probit-models
  - reference/the-delta-method
---
## A variable that piles up at zero

A **corner solution response** is continuously distributed over a wide range of positive values but takes the value exactly zero for a nontrivial share of the population — hours worked (zero for the non-employed), charitable giving (zero for non-donors), spending on alcohol. A linear model can approximate $\mathbb{E}(y\mid\mathbf{x})$ reasonably well near the mean but will generally predict **negative** values for some individuals — nonsensical for a variable bounded below at zero — and forces the same constant partial effect on $\mathbb{E}(y\mid\mathbf{x})$ regardless of how close an individual already sits to the corner.

## The latent-variable specification

The **Tobit model** specifies a latent $y^*=\beta_0+\mathbf{x}\boldsymbol\beta+u$, $u\mid\mathbf{x}\sim\mathcal{N}(0,\sigma^2)$, with the *observed* $y=\max(0,y^*)$. Because $y^*$ is normal, $y$'s distribution is a mixture: a probability mass at exactly zero, $\mathbb{P}(y{=}0\mid\mathbf{x})=1-\Phi(\mathbf{x}\boldsymbol\beta/\sigma)$, plus a continuous normal density over strictly positive values. The log-likelihood combines both pieces —

$$\ell_i(\boldsymbol\beta,\sigma) = \mathbf{1}(y_i{=}0)\log\big[1-\Phi(\mathbf{x}_i\boldsymbol\beta/\sigma)\big] + \mathbf{1}(y_i{>}0)\log\Big\{\tfrac1\sigma\phi\big[(y_i-\mathbf{x}_i\boldsymbol\beta)/\sigma\big]\Big\}$$

— and is maximized by MLE, jointly estimating $\boldsymbol\beta$ and $\sigma$. Unlike logit/probit, $\sigma$ is not a nuisance parameter that can be dropped: it enters the partial-effect formulas directly (below), so its magnitude has real economic content even though it never affects the *sign* of any effect.

## Two conditional expectations, and the inverse Mills ratio

Tobit distinguishes two quantities that coincide in a linear model but differ here: $\mathbb{E}(y\mid y{>}0,\mathbf{x})$ (the expected value **among those with a positive outcome**) and $\mathbb{E}(y\mid\mathbf{x})$ (the **unconditional** expectation, averaging in the zeros). Using the truncated-normal moment $\mathbb{E}(z\mid z>c)=\phi(c)/[1-\Phi(c)]$ for standard normal $z$:

$$\mathbb{E}(y\mid y{>}0,\mathbf{x}) = \mathbf{x}\boldsymbol\beta + \sigma\lambda(\mathbf{x}\boldsymbol\beta/\sigma), \qquad \lambda(c)\equiv\phi(c)/\Phi(c)$$

$\lambda(\cdot)$ is the **inverse Mills ratio** — the same object that resolves the [sample-selection problem](../limited-dependent-variable-models/sample-selection-and-the-heckit-method.md) elsewhere in this folder. Combining both pieces gives the unconditional expectation $\mathbb{E}(y\mid\mathbf{x})=\Phi(\mathbf{x}\boldsymbol\beta/\sigma)\cdot\mathbb{E}(y\mid y{>}0,\mathbf{x})$, which can be shown to simplify remarkably to $\Phi(\mathbf{x}\boldsymbol\beta/\sigma)\mathbf{x}\boldsymbol\beta+\sigma\phi(\mathbf{x}\boldsymbol\beta/\sigma)$ — always strictly positive for any $\mathbf{x}$ and $\boldsymbol\beta$, exactly the property a linear model cannot guarantee.

## A clean comparability result

Differentiating $\mathbb{E}(y\mid\mathbf{x})$ with respect to a continuous $x_j$ yields, after simplification using $\Phi(c)\lambda(c)=\phi(c)$,

$$\frac{\partial \mathbb{E}(y\mid\mathbf{x})}{\partial x_j} = \beta_j\Phi(\mathbf{x}\boldsymbol\beta/\sigma)$$

— the Tobit coefficient scaled by exactly the probability of a positive outcome, $\Phi(\mathbf{x}\boldsymbol\beta/\sigma)\in(0,1)$. This gives the same two [PEA/APE](../limited-dependent-variable-models/partial-effects-in-nonlinear-response-models.md) summary options developed for logit and probit: evaluate the scale factor at the sample averages (PEA) or average the individual scale factors (APE), with APE generally preferred for the same reasons.

## Worked example: married women's annual hours worked

Applying Tobit to hours worked (MROZ: 753 women, 325 with zero hours) alongside OLS on the same data (Table 17.3) shows the raw coefficients pointing the same direction but differing substantially in magnitude — the Tobit coefficient on `educ` is $80.65$ versus OLS's $28.76$. Scaling the Tobit coefficients by the APE factor ($\approx.589$ in this application) brings them into the same units as OLS: the education APE becomes about $47.5$ hours, still noticeably larger than the OLS estimate of $28.76$. The two models' *fitted* expected-hours curves (Figure 17.3) diverge most sharply for women with mid-range education — at 12 years of schooling, OLS predicts $732.7$ hours versus Tobit's $598.3$ — precisely reflecting that a large share of the sample sits at the zero corner, which the linear model cannot represent. Every one of the 753 Tobit-fitted values is positive by construction; 39 of the OLS-fitted values (just over 5% of the sample) are not.

*Source: Wooldridge (2016), §§17-2, 17-2a–b, Example 17.2.*
