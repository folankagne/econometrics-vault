---
title: Common Statistical Densities — Reference Catalogue
source: "Econ 2b, Appendix S1, §Common Statistical Densities (Berger 2013)"
status: enriched
tags:
  - probability-distributions
  - reference-table
prerequisites:
  - probability-and-distributions/normal-distribution
  - probability-and-distributions/chi-square-distribution
---
A reference catalogue of standard densities (after Berger, 2013, Appendix 1), giving support, parameter range, density, and moments. $I_A(z)$ is the indicator of set $A$; $\Gamma(a)=\int_0^\infty e^{-x}x^{a-1}dx$.

## Continuous densities

**Normal** $\mathcal{N}(\mu,\sigma^2)$: $f(x)=\frac{1}{\sqrt{2\pi}\sigma}\exp(-\frac{(x-\mu)^2}{2\sigma^2})$ on $\mathbb{R}$. Mean $\mu$, variance $\sigma^2$. The $p$-variate version $\mathcal{N}_p(\boldsymbol\mu,\boldsymbol\Sigma)$ replaces the exponent with $-\frac12(\mathbf{x}-\boldsymbol\mu)^\top\boldsymbol\Sigma^{-1}(\mathbf{x}-\boldsymbol\mu)$, mean $\boldsymbol\mu$, covariance $\boldsymbol\Sigma$.

**Uniform** $\mathcal{U}(a,b)$: $f(x)=\frac{1}{b-a}I_{(a,b)}(x)$. Mean $\frac{a+b}{2}$, variance $\frac{(b-a)^2}{12}$.

**Gamma** $\mathcal{G}(a,\beta)$: $f(x)=\frac{1}{\Gamma(a)\beta^a}x^{a-1}e^{-x/\beta}I_{(0,\infty)}(x)$. Mean $a\beta$, variance $a\beta^2$. Special cases: Exponential $\mathcal{E}(\beta)=\mathcal{G}(1,\beta)$; Chi-square $\chi^2(n)=\mathcal{G}(n/2,2)$.

**Beta** $\mathcal{B}(a,\beta)$: $f(x)=\frac{\Gamma(a+\beta)}{\Gamma(a)\Gamma(\beta)}x^{a-1}(1-x)^{\beta-1}$ on $[0,1]$. Mean $\frac{a}{a+\beta}$, variance $\frac{a\beta}{(a+\beta)^2(a+\beta+1)}$.

**Cauchy** $\mathcal{C}(a,\beta)$: $f(x)=\frac{1}{\pi\beta[1+((x-a)/\beta)^2]}$. Mean and variance **do not exist**.

**F distribution** $\mathcal{F}(a,\beta)$: density on $(0,\infty)$ with mean $\frac{\beta}{\beta-2}$ (for $\beta>2$), variance $\frac{2\beta^2(a+\beta-2)}{a(\beta-2)^2(\beta-4)}$ (for $\beta>4$) — see [Fisher's F distribution](../probability-and-distributions/fishers-f-distribution.md).

**t distribution** $\mathcal{T}(a,\mu,\sigma^2)$: mean $\mu$ (for $a>1$), variance $\frac{a\sigma^2}{a-2}$ (for $a>2$) — see [Student's t distribution](../probability-and-distributions/students-t-distribution.md).

**Inverse Gamma**, **Dirichlet**, **Pareto**: further standard densities with closed-form moments, used respectively in Bayesian variance priors, compositional/share data, and heavy-tailed (e.g. income/city-size) modeling.

## Discrete densities

**Binomial** $\mathcal{B}(n,p)$: mean $np$, variance $np(1-p)$.

**Poisson** $\mathcal{P}(\lambda)$: mean $=$ variance $=\lambda$.

**Negative Binomial** $\mathcal{NB}(a,p)$: mean $a(1-p)/p$, variance $a(1-p)/p^2$. Special case: Geometric $=\mathcal{NB}(1,p)$.

**Multinomial** $\mathcal{M}(n,\mathbf{p})$: $\mathbb{E}[X_i]=np_i$, $\mathbb{V}(X_i)=np_i(1-p_i)$, $\text{Cov}(X_i,X_j)=-np_ip_j$ for $i\neq j$ — the negative covariance reflects that category counts must sum to the fixed total $n$.

## Where each density recurs in this vault

This catalogue is deliberately exhaustive rather than curated to what the two courses actually use, so it is worth flagging which entries do the real work elsewhere: the Normal, $\chi^2$, $t$, and $F$ densities underlie essentially all of [classical OLS inference](../ols-estimation/00-overview.md); the Binomial and Bernoulli (its $n{=}1$ special case) describe any binary treatment indicator throughout the [causal-inference](../causal-inference-foundations/00-overview.md) material; and the Beta distribution is the natural conjugate prior for a propensity score $p(x)\in[0,1]$ in Bayesian treatments of [propensity-score methods](../unconfoundedness-methods/propensity-score-theorem.md), though this vault's coverage of propensity scores is entirely frequentist. The remaining densities (Gamma, Cauchy, Inverse Gamma, Dirichlet, Pareto, Negative Binomial, Multinomial) are included for completeness and cross-reference rather than because they appear elsewhere in the vault's current content.

*Source: Berger (2013), Appendix 1.*
