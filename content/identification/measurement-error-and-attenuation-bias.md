---
title: Measurement Error and Attenuation Bias
source: "Econ 1, Lecture Notes, §Three typical sources of endogeneity › Measurement errors"
status: enriched
tags:
  - classical-measurement-error
  - attenuation-bias
  - intergenerational-mobility
prerequisites:
  - identification/exogeneity-and-endogeneity
---
## Classical measurement error

Suppose the true regressor of interest is $x_i^*$, but only a noisy proxy $x_i = x_i^* + e_i$ is observed — for instance, self-reported hours worked, subject to recall error. **Classical measurement error** assumes the reporting noise $e_i$ is exogenous ($\mathbb{E}(e_i\mid x^*) = 0$) and independent of the structural noise ($\mathbb{E}(u_ie_j) = 0$ for all $i,j$) — ruling out, e.g., systematic over-reporting by richer respondents. The true model is $y_i = x_i^*b + u_i$ with $\mathbb{E}(u_i\mid x^*)=0$, but the estimated model necessarily uses $x_i$:

$$y_i = x_ib + v_i \quad\Longrightarrow\quad v_i = u_i - be_i$$

## Why this biases OLS toward zero

$$\mathbb{E}(v_ix_i) = \mathbb{E}[(u_i - be_i)(x_i^* + e_i)] = \mathbb{E}(u_ix_i^*) + \mathbb{E}(u_ie_i) - b\,\mathbb{E}(e_ix_i^*) - b\,\mathbb{E}(e_i^2) = -b\sigma_e^2 \neq 0$$

so even though the measurement error is "purely random," the regressor $x_i$ ends up mechanically correlated with the composite noise $v_i$. Working through the probability limit of the OLS estimator:

$$\text{plim}\,\hat{b}_{OLS} = b + (\sigma_x^2)^{-1}(-b\sigma_e^2) = b\left(\frac{\sigma_{x^*}^2}{\sigma_{x^*}^2 + \sigma_e^2}\right) < b$$

This is **attenuation bias**: the estimated coefficient is systematically pulled toward zero, by a factor equal to the *signal-to-total-variance ratio* $\sigma_{x^*}^2/(\sigma_{x^*}^2+\sigma_e^2)$ — the share of the observed regressor's variance that is genuine signal rather than noise. The noisier the measurement (the larger $\sigma_e^2$ relative to $\sigma_{x^*}^2$), the more severely the true effect is understated. This is counterintuitive at first: "random" measurement error still produces a systematic, predictable bias, precisely because the error enters the regressor itself rather than only the outcome.

## Example: intergenerational income mobility

Becker and Tomes estimate income mobility via $y_C = \alpha + \beta y_P + u$, where $\beta$ measures how strongly a child's income $y_C$ inherits the parent's income $y_P$ — typical OLS estimates put $\hat\beta_{OLS} \approx 0.1$–$0.2$. Solon points out that both incomes are usually measured with error: $y^*_P = y_P + v_P$, $y_C^* = y_C + v_C$. Estimating the *observed* relationship rather than the *true* one gives a composite error $v = \beta v_P - v_C + u$ with:

$$\mathbb{E}(y_i^P v) = \mathbb{E}\big[(y_i^{*P} - v_i^P)(\beta v_i^P - v_i^C + u_i)\big] = \beta\sigma_C^2 \neq 0$$

Since permanent income is difficult to measure precisely (annual income is a noisy proxy for lifetime economic status), Solon's point is that naively estimated intergenerational mobility coefficients are attenuated — the true persistence of economic status across generations is understated by measurement error in exactly the way described above.

## Measurement error in y versus in x: a crucial asymmetry

Wooldridge (2016, §9-4) draws a sharp distinction this vault's algebra already implies but is worth stating explicitly: measurement error in the *dependent* variable $y$ is comparatively benign — if the reporting error $e_0 = y - y^*$ is uncorrelated with the regressors, OLS of $y$ on $\mathbf{x}$ remains unbiased and consistent, at the cost only of a larger error variance ($\text{Var}(u+e_0) = \sigma_u^2+\sigma_{e_0}^2 > \sigma_u^2$) and hence larger standard errors — there is "nothing to be done about it except collect better data." Measurement error in an *explanatory* variable is the more serious case developed above, and Wooldridge's family-income (Example 9.7) and marijuana-use examples sharpen when the classical errors-in-variables (CEV) assumption itself is credible: CEV requires $\text{Cov}(x^*, e_1) = 0$, i.e. the size of the reporting error is unrelated to the *true* value — plausible for something like income, but not for marijuana use, where non-users almost certainly report with zero error while heavy users are the ones most likely to under-report, so the error is *itself* correlated with the true value and the resulting bias need not even be a clean attenuation toward zero.

*Source: Wooldridge (2016), §9-4a–b, Examples 9.5–9.7.*
