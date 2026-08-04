---
title: Differentiation of Linear and Quadratic Forms
source: "Econ 1, Intro Note, §Matrix algebra › Differentiation of matrices"
status: enriched
tags:
  - matrix-calculus
  - linear-form
  - quadratic-form
  - gradient
prerequisites:
  - matrix-algebra-for-econometrics/matrix-multiplication-for-econometrics
  - matrix-algebra-for-econometrics/matrix-transpose-and-symmetric-matrices
---
## Differentiating a linear transformation

Let $\mathbf{y} \in \mathbb{R}^n$, $\mathbf{x} \in \mathbb{R}^p$ be column vectors and $\mathbf{A}$ an $(n \times p)$ matrix not depending on $\mathbf{x}$, such that $\mathbf{y} = \mathbf{A}\mathbf{x}$. Stacking the partial derivative of every component of $\mathbf{y}$ with respect to every component of $\mathbf{x}$ gives the Jacobian:

$$
\frac{\partial \mathbf{y}}{\partial \mathbf{x}}
=
\begin{pmatrix}
\dfrac{\partial y_1}{\partial x_1} & \dots & \dfrac{\partial y_1}{\partial x_p} \\
\vdots & & \vdots \\
\dfrac{\partial y_n}{\partial x_1} & \dots & \dfrac{\partial y_n}{\partial x_p}
\end{pmatrix}
= \mathbf{A}
$$

That is, differentiating a linear transformation $\mathbf{A}\mathbf{x}$ with respect to $\mathbf{x}$ simply returns $\mathbf{A}$ — the matrix analogue of $\frac{d}{dx}(ax) = a$.

## Differentiating a bilinear form

Let $\mathbf{Z} = \mathbf{y}'\mathbf{A}\mathbf{x}$ for a matrix $\mathbf{A}$ not depending on $\mathbf{x}$ or $\mathbf{y}$. Then:

$$\frac{\partial \mathbf{Z}}{\partial \mathbf{x}} = \mathbf{y}'\mathbf{A} \qquad\qquad \frac{\partial \mathbf{Z}}{\partial \mathbf{y}} = \mathbf{x}'\mathbf{A}'$$

## Differentiating a quadratic form

Let $\tilde{\mathbf{Z}} = \mathbf{x}'\mathbf{A}\mathbf{x}$. Then:

$$\frac{\partial \tilde{\mathbf{Z}}}{\partial \mathbf{x}} = \mathbf{x}'(\mathbf{A} + \mathbf{A}')$$

If $\mathbf{A}$ is [symmetric](../matrix-algebra-for-econometrics/matrix-transpose-and-symmetric-matrices.md) — as it is in every application below — this simplifies to:

$$\frac{\partial \tilde{\mathbf{Z}}}{\partial \mathbf{x}} = 2\mathbf{x}'\mathbf{A}$$

> This last rule, applied to $\mathbf{A} = \mathbf{X}'\mathbf{X}$ (always symmetric) and $\mathbf{x} = \boldsymbol{\beta}$, is exactly what produces the term $2\boldsymbol{\beta}'\mathbf{X}'\mathbf{X}$ when [deriving the OLS estimator](../ols-estimation/deriving-the-ols-estimator.md) by minimizing the residual sum of squares $\mathbf{u}'\mathbf{u}$.

## Moments of a random vector

The same quadratic-form machinery extends directly to random vectors (Wooldridge, 2016, Appendix D-7; Magnus, lecture notes). For an $(n \times 1)$ random vector $\mathbf{y}$ with $\mathbb{E}(\mathbf{y}) = \boldsymbol{\mu}$, the **variance-covariance matrix** is $\text{Var}(\mathbf{y}) \equiv \mathbb{E}\big[(\mathbf{y}-\boldsymbol{\mu})(\mathbf{y}-\boldsymbol{\mu})'\big]$ — an $(n \times n)$ symmetric, positive semi-definite matrix with $\text{Var}(y_i)$ on the diagonal and $\text{Cov}(y_i, y_j)$ off it. For nonrandom $\mathbf{A}$ and $\mathbf{b}$, expectation and variance behave exactly as the linear-form rules above would suggest: $\mathbb{E}(\mathbf{A}\mathbf{y}+\mathbf{b}) = \mathbf{A}\boldsymbol{\mu}+\mathbf{b}$, and $\text{Var}(\mathbf{A}\mathbf{y}+\mathbf{b}) = \mathbf{A}\,\text{Var}(\mathbf{y})\,\mathbf{A}'$ — the direct matrix analogue of the scalar rule $\mathbb{V}(aX+b) = a^2\mathbb{V}(X)$. This single identity, applied to $\hat{\boldsymbol{\beta}} = \boldsymbol{\beta} + (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{u}$ with $\text{Var}(\mathbf{u}\mid\mathbf{X}) = \sigma^2\mathbf{I}_n$, is exactly what produces the OLS variance-covariance formula $\text{Var}(\hat{\boldsymbol{\beta}}\mid\mathbf{X}) = \sigma^2(\mathbf{X}'\mathbf{X})^{-1}$ underlying the [Gauss-Markov theorem](../ols-estimation/gauss-markov-theorem.md).

*Source: Wooldridge (2016), Appendix D-6, D-7; Magnus, lecture notes on matrix calculus.*
