---
title: The Poisson Regression Model for Count Data
source: "Wooldridge (2016), §17-3"
status: enriched
tags:
  - beyond-lectures
  - poisson-regression
  - count-data
  - quasi-maximum-likelihood
  - overdispersion
prerequisites:
  - limited-dependent-variable-models/logit-and-probit-models
  - probability-and-distributions/probability-density-and-distribution-functions
---
## Modeling nonnegative integers

A **count variable** — number of arrests in a year, number of children ever born, number of patents filed — takes values in $\{0,1,2,\dots\}$, often bunched heavily near zero. A linear model can fit reasonably well on average but, exactly as with [Tobit corner solutions](../limited-dependent-variable-models/the-tobit-model-for-corner-solutions.md), can produce nonsensical negative predictions and cannot reflect that the outcome's variance itself typically grows with its conditional mean.

## An exponential conditional mean

The standard fix models $\mathbb{E}(y\mid\mathbf{x})=\exp(\beta_0+\mathbf{x}\boldsymbol\beta)$ directly — always strictly positive, for any values of $\boldsymbol\beta$ and $\mathbf{x}$, since $\exp(\cdot)>0$ everywhere. Taking logs gives $\log[\mathbb{E}(y\mid\mathbf{x})]=\beta_0+\mathbf{x}\boldsymbol\beta$: the log of the *expected value* is linear in the parameters, so coefficients carry the same semi-elasticity interpretation already familiar from log-linear OLS models — $100\beta_j$ is approximately the percentage change in $\mathbb{E}(y\mid\mathbf{x})$ for a one-unit change in $x_j$, or exactly $100[\exp(\beta_j)-1]\%$ for a discrete unit change, and $\beta_j$ is a direct elasticity when $x_j$ itself enters in logs.

## The Poisson distribution and maximum likelihood

Because $y$ cannot be normal (it is discrete and nonnegative), the natural distributional assumption is **Poisson**: $\mathbb{P}(y{=}h\mid\mathbf{x})=\exp[-\exp(\mathbf{x}\boldsymbol\beta)][\exp(\mathbf{x}\boldsymbol\beta)]^h/h!$, fully determined by its own mean, $\exp(\mathbf{x}\boldsymbol\beta)$. The resulting log-likelihood, $\mathcal{L}(\boldsymbol\beta)=\sum_i\{y_i\mathbf{x}_i\boldsymbol\beta-\exp(\mathbf{x}_i\boldsymbol\beta)\}$, is maximized numerically to give the **Poisson regression** MLE. Its partial effects follow the chain rule directly, $\partial\mathbb{E}(y\mid\mathbf{x})/\partial x_j=\exp(\beta_0+\mathbf{x}\boldsymbol\beta)\beta_j$, and — a convenient special feature of the exponential mean function — the average of the fitted values from Poisson MLE always exactly equals the sample average of $y$ itself, mirroring the analogous OLS property and making Poisson-vs-OLS comparisons unusually direct.

## Robustness without believing the Poisson assumption: QMLE

The defining Poisson property, $\text{Var}(y\mid\mathbf{x})=\mathbb{E}(y\mid\mathbf{x})$ (equidispersion), is frequently violated in practice — real count data is often **overdispersed**, with variance exceeding the mean. Remarkably, the Poisson MLE's point estimates $\hat\beta_j$ remain **consistent and asymptotically normal even when the Poisson distribution is entirely wrong**, exactly as OLS remains consistent without normality — this is **quasi-maximum likelihood estimation (QMLE)**. What changes when equidispersion fails is the standard errors: under the more flexible assumption $\text{Var}(y\mid\mathbf{x})=\sigma^2\mathbb{E}(y\mid\mathbf{x})$, a single scale factor $\hat\sigma$ (estimated from the standardized residuals $\hat u_i/\hat y_i$) rescales every nominal Poisson standard error, and the ordinary likelihood-ratio statistic is divided by $\hat\sigma^2$ to become a valid **quasi-LR statistic**.

## Worked example: number of arrests

Applying Poisson QMLE to `narr86` (number of 1986 arrests; zero for 1,970 of 2,725 men, at most a handful above 5) gives $\hat\sigma=1.232$ — substantial overdispersion — so every nominal Poisson standard error should be inflated by about $23\%$ before it can be trusted; several coefficients remain statistically significant even after this correction, but the corrected $t$-statistics are meaningfully smaller than the naive ones. The coefficient on `black` implies a $93.7\%$ higher expected arrest count for a Black man relative to a white man with identical values of every other regressor ($100\cdot[\exp(.661)-1]$) — a direct, economically interpretable statement the raw linear-model coefficient does not deliver as naturally. Comparing model fit via the squared correlation between $y_i$ and $\hat y_i$ (the same goodness-of-fit measure used for Tobit), the exponential Poisson specification fits modestly better than the linear alternative on the same data — though, as with Tobit, this is a side benefit of the specification, not the estimation criterion the Poisson MLE actually maximizes.

*Source: Wooldridge (2016), §17-3, Example 17.3.*
