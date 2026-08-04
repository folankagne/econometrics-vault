---
title: Matrix Inversion
source: "Econ 1, Intro Note, §Matrix algebra › Matrix inversion"
status: enriched
tags:
  - matrix-inverse
  - singular-matrix
  - invertibility
prerequisites:
  - matrix-algebra-for-econometrics/matrix-multiplication-for-econometrics
  - matrix-algebra-for-econometrics/determinant-of-a-square-matrix
---
## Definition

Matrix **inversion** is the analogue of division for scalars. A square matrix $\mathbf{A}$ of order $n$ is **invertible** if there exists a matrix $\mathbf{B}$ of the same dimension such that:

$$\mathbf{A}\mathbf{B} = \mathbf{B}\mathbf{A} = \mathbf{I}_n$$

When such a $\mathbf{B}$ exists, it is unique and is called the **inverse** of $\mathbf{A}$, written $\mathbf{A}^{-1}$. A square matrix that is not invertible is said to be **singular** — equivalently, one whose [determinant](../matrix-algebra-for-econometrics/determinant-of-a-square-matrix.md) is zero, or whose columns are not linearly independent (less than full [rank](../matrix-algebra-for-econometrics/rank-of-a-matrix.md)).

## Properties

If $\mathbf{A}$ is invertible, so is its transpose, and the two operations commute:

$$(\mathbf{A}')^{-1} = (\mathbf{A}^{-1})'$$

If $\mathbf{A}$ and $\mathbf{B}$ are square matrices of the same dimension, both invertible, then their product is invertible with:

$$(\mathbf{A}\mathbf{B})^{-1} = \mathbf{B}^{-1}\mathbf{A}^{-1}$$

— the order of the two inverses reverses, exactly as with transposition.

> Matrix inversion is the last step of [deriving the OLS estimator](../ols-estimation/deriving-the-ols-estimator.md): the closed-form solution $\hat{\boldsymbol{\beta}}^{OLS} = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{y}$ exists precisely when $\mathbf{X}'\mathbf{X}$ is invertible, i.e. when the regressor matrix $\mathbf{X}$ has full column rank.

A common misstep (Wooldridge, 2016, Appendix E-1) is to try to simplify $\hat{\boldsymbol{\beta}}^{OLS} = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{y}$ further to $\mathbf{X}^{-1}(\mathbf{X}')^{-1}\mathbf{X}'\mathbf{y} = \mathbf{X}^{-1}\mathbf{y}$: this is invalid because $\mathbf{X}$ is $(n \times k)$ and generally not square (there are more observations than parameters), so $\mathbf{X}^{-1}$ does not exist. Only the *square* matrix $\mathbf{X}'\mathbf{X}$ is invertible, never $\mathbf{X}$ itself.

*Source: Wooldridge (2016), Appendix D-2g, E-1.*
