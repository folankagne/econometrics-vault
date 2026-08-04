---
title: Variance Derivations for OLS and IV Estimators (Binary Treatment)
source: "Econ 2b, Appendix, §Variance Derivations for OLS and IV Estimators"
status: enriched
tags:
  - variance-derivation
  - wald-estimator
  - law-of-total-variance
prerequisites:
  - treatment-effects/minimum-detectable-effect
  - treatment-effects/the-statistical-cost-of-non-compliance
---
## OLS variance under perfect compliance

For $y=\alpha+\beta D+u$ with perfect compliance, $\hat\beta = \bar y^{D=1}-\bar y^{D=0}$. Since $\bar D_{D=1}=1,\bar D_{D=0}=0$: $\hat\beta-\beta = \bar u^{D=1}-\bar u^{D=0}$, a difference of means over **disjoint** observation sets, hence independent: $\mathbb{V}(\hat\beta) = \mathbb{V}(\bar u^{D=1})+\mathbb{V}(\bar u^{D=0})$. Each group mean has variance $\sigma_u^2(D{=}d)/N_d$; under homoskedasticity these are both $\sigma_u^2$, giving $\mathbb{V}(\hat\beta)=\sigma_u^2(1/N_1+1/N_0)$. By the law of total variance (Eve's law) and ZCM, $\mathbb{V}(u)=\mathbb{E}[\mathbb{V}(u\mid D)]=\sigma_u^2$ under homoskedasticity. Writing $N_1=\bar D N$, $N_0=(1-\bar D)N$ and combining fractions:

$$\mathbb{V}(\hat\beta_{OLS}) = \frac{\sigma_u^2}{N\,\bar D(1-\bar D)} = \frac{\mathbb{V}(u)}{N}\cdot\frac{1}{\bar D(1-\bar D)}$$

## IV (Wald) variance under non-compliance

For the [Wald estimator](../instrumental-variables/wald-estimator.md) $\hat\beta_{IV}=(\bar y^{Z=1}-\bar y^{Z=0})/(\bar D^{Z=1}-\bar D^{Z=0})$: writing $\pi_1=\bar D^{Z=1}-\bar D^{Z=0}$ as fixed, $\hat\beta_{IV}-\beta = (\bar u^{Z=1}-\bar u^{Z=0})/\pi_1$, so $\mathbb{V}(\hat\beta_{IV}) = \mathbb{V}(\bar u^{Z=1}-\bar u^{Z=0})/\pi_1^2$. By the same disjoint-groups argument as above, this becomes $\sigma_u^2(1/m+1/n_0)/\pi_1^2$ with $m=N\bar Z$, $n_0=N(1-\bar Z)$ the group sizes by $Z$. Here $\mathbb{E}[u\mid Z]=0$ follows from **exclusion plus exogeneity of $Z$** jointly, so $\mathbb{V}(u)=\sigma_u^2$ under homoskedasticity, giving:

$$\mathbb{V}(\hat\beta_{IV}) = \frac{\mathbb{V}(u)}{N}\cdot\frac{1}{\bar Z(1-\bar Z)}\cdot\frac{1}{\pi_1^2}$$

— exactly the [take-up-differential variance formula](../treatment-effects/the-statistical-cost-of-non-compliance.md) used to quantify the statistical cost of non-compliance, here derived from first principles rather than asserted.

Comparing the two boxed formulas side by side makes the cost of instrumenting completely explicit: both share the identical structure $\mathbb{V}(u)/N$ times an assignment-balance factor $1/[\bar p(1-\bar p)]$, and the IV formula carries one further multiplicative penalty, $1/\pi_1^2$, entirely absent from the OLS case. Every other result in this vault about weak instruments, statistical power, or non-compliance inflating standard errors is, at bottom, a restatement of this single extra factor.
