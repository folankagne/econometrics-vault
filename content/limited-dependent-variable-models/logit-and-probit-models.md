---
title: Logit and Probit Models for Binary Response
source: "Wooldridge (2016), §17-1"
status: enriched
tags:
  - beyond-lectures
  - binary-response
  - logit
  - probit
  - latent-variable-model
  - maximum-likelihood
prerequisites:
  - ols-estimation/deriving-the-ols-estimator
  - probability-and-distributions/normal-distribution
---
## Why go beyond the linear probability model

A binary response $y\in\{0,1\}$ can always be modeled linearly — the [linear probability model (LPM)](../ols-estimation/00-overview.md) — but $\mathbb{P}(y{=}1\mid\mathbf{x})=\beta_0+\mathbf{x}\boldsymbol\beta$ has no guarantee of staying inside $[0,1]$, and it forces every regressor's partial effect on the response probability to be constant, however far from $0.5$ the probability already sits. **Logit** and **probit** models fix both problems by passing the linear index through a nonlinear function $G(\cdot)$ that is strictly between $0$ and $1$ everywhere:

$$\mathbb{P}(y{=}1\mid\mathbf{x}) = G(\beta_0+\mathbf{x}\boldsymbol\beta)$$

**Logit** uses the logistic CDF, $G(z)=\Lambda(z)=e^z/(1+e^z)$; **probit** uses the standard normal CDF, $G(z)=\Phi(z)$. Both are increasing, S-shaped functions that approach $0$ and $1$ only in the limits — no combination of regressors can ever push the fitted probability outside the unit interval.

## The latent-variable motivation

Both models can be derived from an unobserved **latent variable** $y^*=\beta_0+\mathbf{x}\boldsymbol\beta+e$, with $y=\mathbf{1}[y^*>0]$ and $e$ independent of $\mathbf{x}$, symmetric about zero. If $e$ is standard normal, $\mathbb{P}(y{=}1\mid\mathbf{x})=\mathbb{P}(e>-\beta_0-\mathbf{x}\boldsymbol\beta\mid\mathbf{x})=\Phi(\beta_0+\mathbf{x}\boldsymbol\beta)$ — probit; if $e$ is standard logistic, the identical argument delivers logit. $y^*$ itself often has no natural unit of measurement (a utility difference between two choices, say), so the $\beta_j$'s magnitudes are not directly interpretable the way an LPM coefficient is — only their **sign** carries a clean, immediate meaning, since $g(\cdot)>0$ always (where $g\equiv G'$), so $\partial\mathbb{P}(y{=}1\mid\mathbf{x})/\partial x_j = g(\beta_0+\mathbf{x}\boldsymbol\beta)\beta_j$ always has the same sign as $\beta_j$.

## Estimation by maximum likelihood

Since $G$ is nonlinear, neither OLS nor WLS applies; logit and probit are estimated by **maximum likelihood**. The density of a single observation is $f(y\mid\mathbf{x};\boldsymbol\beta)=[G(\mathbf{x}\boldsymbol\beta)]^y[1-G(\mathbf{x}\boldsymbol\beta)]^{1-y}$, giving the log-likelihood contribution $\ell_i(\boldsymbol\beta)=y_i\log[G(\mathbf{x}_i\boldsymbol\beta)]+(1-y_i)\log[1-G(\mathbf{x}_i\boldsymbol\beta)]$, summed and maximized numerically. Testing proceeds as usual: a $t$-statistic per coefficient, an asymptotic **Wald test** or **likelihood ratio test** ($LR=2(\mathcal{L}_{ur}-\mathcal{L}_r)\overset{a}{\sim}\chi^2_q$ for $q$ restrictions) for joint hypotheses, and a **pseudo-$R^2$** (McFadden's $1-\mathcal{L}_{ur}/\mathcal{L}_0$, comparing the fitted model's log-likelihood to an intercept-only model's) in place of the ordinary $R^2$.

## Worked example: married women's labor force participation

Applying LPM, logit, and probit to the same labor-force-participation regressor set (MROZ data, already used for the LPM in earlier coursework) gives remarkably consistent qualitative conclusions: identical signs and statistical significance across all three models, and percentage-correctly-predicted figures within a point of each other ($73.4\%$, $73.6\%$, $73.4\%$). The raw coefficients are *not* directly comparable across models — logit coefficients run roughly $1.6\times$ probit coefficients as a rule of thumb, reflecting the different scaling of the logistic versus normal density at zero ($g(0)=.25$ for logit, $g(0)\approx.40$ for probit) — which is exactly why [partial effects](../limited-dependent-variable-models/partial-effects-in-nonlinear-response-models.md), not raw coefficients, are the right basis for comparing magnitudes across specifications.

*Source: Wooldridge (2016), §§17-1a–17-1d, Example 17.1.*
