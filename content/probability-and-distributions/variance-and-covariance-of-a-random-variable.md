---
title: Variance and Covariance of a Random Variable
source: "Econ 1, Intro Note, §Laws of distributions › Moments of a distribution › Covariance, Variance"
status: enriched
tags:
  - variance
  - covariance
  - moments-of-a-distribution
  - independence
prerequisites:
  - probability-and-distributions/expectation-of-a-random-variable
---
## Covariance

The **covariance** between two random variables $x, y$ measures the extent to which they move together, in the same or opposite direction:

$$\text{Cov}(x, y) = \mathbb{E}\big[(x - \mathbb{E}(x))(y - \mathbb{E}(y))\big]$$

Its main properties, for a constant $\lambda \in \mathbb{R}$ and a third random variable $z$:

1. $\text{Cov}(x, y) = \mathbb{E}(xy) - \mathbb{E}(x)\,\mathbb{E}(y)$
2. $\text{Cov}(\lambda x, y) = \text{Cov}(x, \lambda y) = \lambda\, \text{Cov}(x, y)$
3. $\text{Cov}(x + \lambda, y) = \text{Cov}(x, y + \lambda) = \text{Cov}(x, y)$ — covariance is unaffected by shifting either variable by a constant
4. $\text{Cov}(x + y, z) = \text{Cov}(x, z) + \text{Cov}(y, z)$
5. $\text{Cov}(x, \lambda) = 0$ — a constant covaries with nothing

## Variance

The **variance** of $x$ measures the dispersion of $x$ around its mean:

$$\mathbb{V}(x) = \mathbb{E}\big[(x - \mathbb{E}(x))^2\big]$$

Its main properties:

1. $\mathbb{V}(x) = \text{Cov}(x, x)$ — variance is a special case of covariance
2. $\mathbb{V}(x) = \mathbb{E}(x^2) - \big(\mathbb{E}(x)\big)^2$
3. $\mathbb{V}(\lambda x) = \lambda^2\, \mathbb{V}(x)$
4. $\mathbb{V}(x + \lambda) = \mathbb{V}(x)$ — shifting by a constant does not change dispersion
5. $\mathbb{V}(x + y) = \mathbb{V}(x) + \mathbb{V}(y) + 2\,\text{Cov}(x, y)$, and symmetrically $\mathbb{V}(x - y) = \mathbb{V}(x) + \mathbb{V}(y) - 2\,\text{Cov}(x, y)$
6. $\mathbb{V}(\lambda) = 0$

> If $x$ and $y$ are independent, $\text{Cov}(x, y) = 0$, so $\mathbb{V}(x+y) = \mathbb{V}(x-y) = \mathbb{V}(x) + \mathbb{V}(y)$: adding or subtracting two independent variables increases dispersion by the same amount either way. As with the expectation operator, $\mathbb{V}(\cdot)$ only passes through linear expressions — property 5 shows that even there, a cross term survives unless the variables are independent or uncorrelated.

## Correlation coefficient

Covariance's magnitude is not directly interpretable because it depends on the units in which $x$ and $y$ are measured — rescaling $x$ from dollars to thousands of dollars scales $\text{Cov}(x,y)$ by 1,000 without the underlying relationship changing at all (property 2 above). The **correlation coefficient** fixes this by normalizing covariance by both standard deviations:

$$\text{Corr}(x, y) = \frac{\text{Cov}(x, y)}{\text{sd}(x)\,\text{sd}(y)} \in [-1, 1]$$

Correlation is invariant to positive rescaling of either variable (Wooldridge, 2016, Appendix B-4c), which is why it — rather than covariance — is the natural summary of "how strongly two variables move together": a correlation near $\pm 1$ indicates a strong linear relationship regardless of the units the variables happen to be reported in, and $\text{Corr}(x,y)=0$ if and only if $\text{Cov}(x,y)=0$, i.e. $x$ and $y$ are **uncorrelated**. As with covariance, zero correlation captures only the *absence of a linear* relationship — $x$ and $y$ can be strongly, deterministically related in a nonlinear way (e.g. $y = x^2$ with $x$ symmetric about zero) and still have zero correlation.

*Source: Wooldridge (2016), Appendix B-3d–h, B-4a–d.*
