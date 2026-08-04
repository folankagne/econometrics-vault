---
title: Expectation of a Random Variable
source: "Econ 1, Intro Note, §Laws of distributions › Moments of a distribution › Expectation"
status: enriched
tags:
  - expectation
  - moments-of-a-distribution
  - linearity
prerequisites:
  - probability-and-distributions/probability-density-and-distribution-functions
---
## Definition

For a continuous random variable $x$ with density $f(x)$ on support $\mathbb{X}$, the **expectation** of $x$ is its mean or average value:

$$\mathbb{E}(x) = \int_{\mathbb{X}} x f(x)\, dx$$

## Properties

For random variables $x, y$ and a constant $\lambda \in \mathbb{R}$, the expectation operator satisfies:

1. $\mathbb{E}(\lambda x) = \lambda\, \mathbb{E}(x)$
2. $\mathbb{E}(x + y) = \mathbb{E}(x) + \mathbb{E}(y)$
3. $\mathbb{E}(\lambda) = \lambda$
4. $\mathbb{E}(xy) = \mathbb{E}(x)\,\mathbb{E}(y)$ **if and only if** $x$ and $y$ are independent
5. $\displaystyle \mathbb{E}\left(\frac{x}{y}\right) \neq \frac{\mathbb{E}(x)}{\mathbb{E}(y)}$ in general

> Properties 1–3 make $\mathbb{E}(\cdot)$ a **linear operator**: it passes through sums and scalar multiples without further assumptions. Property 5 is the reminder that this linearity does not extend to nonlinear transformations — $\mathbb{E}(\cdot)$ only "distributes" over linear expressions, and applying it naively to a ratio, a product of dependent variables, or any other nonlinear function generally gives the wrong answer.

## Conditional expectation

When $Y$ is related to another variable $X$, the full relationship is described by the [conditional density](../probability-and-distributions/probability-density-and-distribution-functions.md) of $Y$ given $X$, but a single summarizing number at each value of $X = x$ is usually more useful: the **conditional expectation** (or conditional mean), $\mathbb{E}(Y \mid X = x)$, the average of $Y$ among the sub-population for which $X = x$. As $x$ varies, $\mathbb{E}(Y\mid x)$ traces out a function of $x$ — this function *is* the population regression function that OLS estimates. Wooldridge's (2016, Appendix B-4e) example: if $Y = wage$ and $X = educ$, and $\mathbb{E}(wage \mid educ) = 1.05 + 0.45 \cdot educ$, then the average wage among workers with 8 years of education is $1.05 + 0.45(8) = \$4.65$, and each extra year of education raises the *average* wage by $\$0.45$.

Three properties of conditional expectation are used repeatedly throughout this vault:

- **CE.3 (independence).** If $X$ and $Y$ are independent, $\mathbb{E}(Y\mid X) = \mathbb{E}(Y)$ — knowing $X$ tells you nothing about $Y$'s average level. The special case $\mathbb{E}(U \mid X) = 0$ whenever $U$ and $X$ are independent with $\mathbb{E}(U)=0$ is the prototype for the [zero conditional mean assumption](../identification/zcm-and-zc-assumptions.md) that underlies unbiasedness of OLS.
- **CE.4, the law of iterated expectations.** $\mathbb{E}\big[\mathbb{E}(Y\mid X)\big] = \mathbb{E}(Y)$: averaging the conditional means over the distribution of $X$ recovers the unconditional mean. This is the workhorse identity behind deriving unconditional properties (like unbiasedness) of estimators from conditional ones.
- **CE.5.** If $\mathbb{E}(Y\mid X) = \mathbb{E}(Y)$ — i.e. $X$ carries no information about $Y$'s mean — then $\text{Cov}(X,Y) = 0$ and, in fact, $X$ is uncorrelated with *every* function of $Y$. The converse is false: zero correlation does not imply $\mathbb{E}(Y\mid X)$ is constant in $X$, since correlation only captures *linear* association (Property 4 above already illustrated this with $Y = X^2$).

*Source: Wooldridge (2016), Appendix B-3a–b, B-4e–f.*
