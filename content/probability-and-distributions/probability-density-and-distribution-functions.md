---
title: Probability Density and Distribution Functions
source: "Econ 1, Intro Note, §Laws of distributions"
status: enriched
tags:
  - probability-density-function
  - cumulative-distribution-function
  - continuous-random-variable
prerequisites: []
---
## Why distributions matter for econometrics

An econometrician almost never observes a population parameter directly — only a sample drawn from the population. To turn a sample estimate into a confidence interval or a test of statistical significance, some knowledge of how the underlying random variable is distributed is required. This is why a working command of a handful of statistical distributions — normal, chi-square, Student's $t$, Fisher's $F$ — underlies essentially all of classical inference in econometrics.

## Density and distribution functions

The law of distribution of a continuous random variable $x$ with support $\mathbb{X} \subset \mathbb{R}$ is defined by a **density function** $f(x)$ such that, for any interval $[a, b] \subset \mathbb{X}$:

$$\mathbb{P}[x \in [a, b]] = \int_{a}^{b} f(x)\, dx \qquad \text{and} \qquad \mathbb{P}[x \in [x_0, x_0 + dx]] = f(x_0)$$

The associated **distribution function**, for any $a \in \mathbb{X}$, is:

$$F(a) = \mathbb{P}[x < a] = \int_{-\infty}^{a} f(x)\, dx$$

In common usage, $f(\cdot)$ is the probability density function (PDF) and $F(\cdot)$ the cumulative distribution function (CDF) of $x$: the PDF gives the local likelihood of $x$ near a point, while the CDF accumulates that likelihood from $-\infty$ up to a given value.

## Discrete vs. continuous random variables

Wooldridge (2016, Appendix B-1) draws a sharper line than "PDF and CDF" suggests: a random variable is **discrete** if it takes on only a finite or countably infinite set of values (e.g. the number of children in a household), and **continuous** if it can take on a continuum of values, each with probability exactly zero (e.g. hourly wage, in principle). For a discrete variable the pdf $f(x_j) = \mathbb{P}(X = x_j)$ is a literal probability, and the CDF is a step function obtained by summing $f$ over all $x_j \leq x$; for a continuous variable, only *areas* under $f$ — not point values — are probabilities, and the CDF is the smooth integral above. The simplest discrete case, the **Bernoulli** (binary) random variable — $X=1$ with probability $\theta$, $X=0$ with probability $1-\theta$ — recurs throughout the vault as the natural representation of a treatment indicator or any yes/no outcome; summing $n$ independent Bernoulli($\theta$) draws gives a **Binomial**$(n,\theta)$ random variable.

## Joint and conditional densities, and independence

When two random variables $X, Y$ are analyzed together, their relationship is fully described by the **joint density** $f_{X,Y}(x,y) = \mathbb{P}(X=x, Y=y)$ (discrete case). $X$ and $Y$ are **independent** if and only if the joint density factors into the product of the marginals, $f_{X,Y}(x,y) = f_X(x)f_Y(y)$ for all $x,y$ — equivalently, knowing the realization of one variable reveals nothing about the distribution of the other. The **conditional density** of $Y$ given $X$, $f_{Y \mid X}(y \mid x) = f_{X,Y}(x,y)/f_X(x)$, captures how the distribution of $Y$ changes with $x$ when $X$ and $Y$ are *not* independent — this is the building block for [conditional expectation](../probability-and-distributions/expectation-of-a-random-variable.md), which in turn is the object a regression function estimates.

*Source: Wooldridge (2016), Appendix B-1, B-2.*
