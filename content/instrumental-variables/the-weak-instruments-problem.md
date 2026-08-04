---
title: The Weak Instruments Problem
source: "Econ 2b, Ch.3 Instrumental Variables, §Relevance Revisited: Weak Instruments (Weak Instruments Problem, 2SLS Setup and Bias, Bias Direction, Bias Formula)"
status: enriched
tags:
  - weak-instruments
  - 2sls-bias
  - f-statistic
  - overfitting
prerequisites:
  - instrumental-variables/statistical-properties-of-the-wald-estimator
---
## When usual asymptotics mislead

Bound, Jaeger, and Baker (1995), revisiting Angrist and Krueger (1991), showed that with weak instruments the standard asymptotic story can fail badly: even very large samples can give a poor approximation to 2SLS's actual sampling distribution; under more realistic asymptotics, 2SLS can be **inconsistent** — biased *toward* OLS — and its computed standard errors can themselves be inconsistent. The result is unreliable confidence intervals: not correctly centered, and not correctly sized either.

## 2SLS setup and the source of finite-sample bias

For $Y=X\beta+\varepsilon$, $X=Z\pi+v$, with $K$ excluded instruments and $\mathbb{E}(\varepsilon\mid Z)=0$: $\hat\beta_{2SLS} = (X'P_ZX)^{-1}X'P_ZY = \beta + (X'P_ZX)^{-1}X'P_Z\varepsilon$, with $P_Z=Z(Z'Z)^{-1}Z'$. While $\text{plim}\,\hat\beta_{2SLS}=\beta$ (consistency holds), $\mathbb{E}(\hat\beta_{2SLS}\mid X,Z) = \beta+(X'P_ZX)^{-1}X'P_Z\,\mathbb{E}(\varepsilon\mid X,Z)$, and $\mathbb{E}(\varepsilon\mid X,Z)\neq 0$ precisely because $X$ is endogenous. In the **just-identified** case ($K{=}1$), the expectation of $\hat\beta_{2SLS}$ does not even exist (its distribution has flat tails); in the **over-identified** case ($K{>}1$), $\hat\beta_{2SLS}$ is biased at any finite sample size.

## Why the bias points toward OLS

The first stage aims to construct $\hat X = Z\hat\pi$ as close to $X$ as possible, by least squares. In finite samples, $\hat\pi\neq\pi$, and the least-squares criterion for choosing $\hat\pi$ is literally "make $\hat X$ resemble $X$" — which, at finite distance, means $\hat X$ ends up capturing some of the noise in $X$ as well as its instrumented signal. This finite-sample **overfitting** makes $\hat X$ look "too much like" $X$, which in turn makes $\hat\beta_{2SLS}$ look too much like $\hat\beta_{OLS}$: **the 2SLS bias is toward the OLS estimate**, worse the weaker the instrument.

## The approximate bias formula, and the F-statistic

$$\mathbb{E}(\hat\beta_{2SLS})-\beta \approx \frac{\text{Cov}(\varepsilon,v)}{\sigma_v^2}\cdot\left[\frac{\pi'Z'Z\pi/K}{\sigma_v^2}+1\right]^{-1} = \frac{\text{Cov}(\varepsilon,v)}{\sigma_v^2}\cdot\frac{1}{1+F}$$

where $F = \hat\pi'Z'Z\hat\pi/K \big/ \hat\sigma_v^2$ is exactly the first-stage F-statistic for testing $\pi=0$. The bias is **inversely proportional to $F$**: the weaker the first stage, the closer the 2SLS bias sits to the full OLS bias $\text{Cov}(\varepsilon,v)/\sigma_v^2$. An instrument is **weak** when it explains little of the endogenous variable — formally, low partial $R^2_{X,Z}$, related to $F$ by $F = \frac{R^2_{X,Z}/K}{(1-R^2_{X,Z})/(n-K)}$.

## Two practical implications

If $R^2_{X,Z}$ stays small, **no amount of additional sample size** rescues the bias — $F$ depends on $R^2_{X,Z}$, $K$, and $n$ jointly, and a small $R^2_{X,Z}$ can offset even a very large $n$. And **adding more instruments is a bad idea when they are individually weak**: each additional weak instrument raises $K$ in the denominator of $F$ roughly as much as it raises the numerator through marginal explanatory power, so $F$ — and hence the bias — barely improves, or can even worsen.

This is precisely the concern Angrist and Pischke (2009, §4.1.1, fn.7) flag about their own quarter-of-birth application: expanding from 3 to 30 instruments (adding year-of-birth interactions) buys a modest precision gain in their baseline table, but they caution this "may not be without cost, as the use of many additional instruments opens up the possibility of increased bias" — exactly the mechanism formalized here.

*Source: Bound, Jaeger & Baker (1995); Angrist & Pischke (2009), §4.1.1 fn.7, §4.6.4.*
