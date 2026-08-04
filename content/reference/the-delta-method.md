---
title: The Delta Method
source: "Econ 2b, Appendix, §Alternative Derivation via the Delta Method"
status: enriched
tags:
  - delta-method
  - taylor-expansion
  - wald-estimator
prerequisites:
  - reference/variance-derivations-ols-and-iv
  - asymptotic-theory/convergence-in-distribution-and-the-central-limit-theorem
---
## Statement

**Univariate.** If $\sqrt{N}(\hat\theta_N-\theta)\overset{d}{\to}\mathcal{N}(0,\sigma^2)$ and $g$ is continuously differentiable at $\theta$ with $g'(\theta)\neq0$:

$$\sqrt{N}\big(g(\hat\theta_N)-g(\theta)\big) \overset{d}{\to} \mathcal{N}\big(0,\,[g'(\theta)]^2\sigma^2\big) \qquad\Longleftrightarrow\qquad \mathbb{V}(g(\hat\theta_N)) \approx [g'(\theta)]^2\,\mathbb{V}(\hat\theta_N)$$

The intuition is a first-order Taylor expansion, $g(\hat\theta_N)\approx g(\theta)+g'(\theta)(\hat\theta_N-\theta)$, whose variance is mechanically $[g'(\theta)]^2$ times the variance of the linear term.

**Multivariate.** For $\hat{\boldsymbol\theta}_N$ with $\sqrt{N}(\hat{\boldsymbol\theta}_N-\boldsymbol\theta)\overset{d}{\to}\mathcal{N}(\mathbf{0},\boldsymbol\Sigma)$ and $g:\mathbb{R}^k\to\mathbb{R}$: $\mathbb{V}(g(\hat{\boldsymbol\theta}_N)) \approx \nabla g(\boldsymbol\theta)^\top\boldsymbol\Sigma\,\nabla g(\boldsymbol\theta)$.

## Applying it to the Wald estimator

$\hat\beta_{IV} = \widehat{\text{Cov}}(Z,y)/\widehat{\text{Cov}}(Z,D) = g(a,b)$ with $g(a,b)=a/b$, gradient $\nabla g = (1/b,\,-a/b^2)$. A key simplification: by the exclusion restriction, essentially all the sampling variability lives in the **numerator** $\widehat{\text{Cov}}(Z,y)$ (which contains the noise $u$); the denominator $\widehat{\text{Cov}}(Z,D)$ converges to its population value at the standard $\sqrt N$ rate and contributes negligibly to the variance by comparison. Treating $b=\text{Cov}(Z,D)$ as fixed reduces this to the univariate case with $g(a)=a/c$, $g'(a)=1/c$:

$$\mathbb{V}(\hat\beta_{IV}) \approx \frac{\mathbb{V}(\widehat{\text{Cov}}(Z,y))}{[\text{Cov}(Z,D)]^2}$$

For binary $Z$, $\widehat{\text{Cov}}(Z,y) = \bar Z(1-\bar Z)(\bar y^{Z=1}-\bar y^{Z=0})$ with the $\bar Z(1-\bar Z)$ factor fixed by design; using exclusion ($\mathbb{E}[u\mid Z]=0$) to equate the variance of this outcome-mean difference with that of the corresponding noise-mean difference reproduces $\mathbb{V}(\widehat{\text{Cov}}(Z,y)) = \bar Z(1-\bar Z)\sigma_u^2/N$. Similarly, $\text{Cov}(Z,D)=\bar Z(1-\bar Z)\pi_1$. Combining:

$$\mathbb{V}(\hat\beta_{IV}) = \frac{\bar Z(1-\bar Z)\sigma_u^2/N}{[\bar Z(1-\bar Z)\pi_1]^2} = \frac{\mathbb{V}(u)}{N}\cdot\frac{1}{\bar Z(1-\bar Z)}\cdot\frac{1}{\pi_1^2}$$

— the identical result to the [direct derivation](../reference/variance-derivations-ols-and-iv.md), reached via a different route. The direct approach explicitly decomposes $\hat\beta_{IV}$ and computes the numerator's variance from first principles; the delta method instead treats $\hat\beta_{IV}$ as a ratio $g(a,b)=a/b$ and applies the standard large-sample approximation $\mathbb{V}(a/b)\approx\mathbb{V}(a)/b^2$. Both agree exactly here — the delta method is simply the standard shortcut for **any** ratio estimator in econometrics, avoiding a bespoke derivation each time.

The delta method's usefulness extends well beyond ratios: any nonlinear transformation of an asymptotically normal estimator — a marginal effect computed at the sample mean in a nonlinear model, an elasticity built from two regression coefficients, a standard error for $\exp(\hat\beta)$ in a log-linear specification — routes through exactly this Taylor-expansion machinery. It is the general-purpose tool that lets asymptotic-normality results, once established for a "primitive" estimator like $\hat\beta_{OLS}$, be transferred automatically to any smooth function of that estimator, without re-deriving asymptotic normality from scratch for every downstream quantity a researcher might want a standard error for.
