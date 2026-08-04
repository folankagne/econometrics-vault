---
title: Determinant of a Square Matrix
source: "Econ 1, Intro Note, §Matrix algebra › Determinant"
status: enriched
tags:
  - determinant
  - minor
  - cofactor-expansion
prerequisites:
  - matrix-algebra-for-econometrics/matrices-and-vectors-in-econometrics
---
## Definition

For a square $(n \times n)$ matrix $\mathbf{A}$, the **determinant**, $\text{Det}(\mathbf{A})$, measures the scale factor of the linear transformation that $\mathbf{A}$ represents — geometrically, the factor by which $\mathbf{A}$ expands or contracts volumes.

For $n = 2$:

$$\text{Det}(\mathbf{A}) = a_{11}a_{22} - a_{12}a_{21}$$

For $n > 2$, let $\mathbf{A}_{ij}$ (the **minor** of $a_{ij}$) denote the matrix obtained by deleting row $i$ and column $j$ from $\mathbf{A}$. The determinant is computed by cofactor expansion along any row $i$:

$$\text{Det}(\mathbf{A}) = \sum_{j=1}^{n} a_{ij}(-1)^{i+j}\, \text{Det}(\mathbf{A}_{ij})$$

> A matrix is [invertible](../matrix-algebra-for-econometrics/matrix-inversion.md) if and only if its determinant is nonzero — a zero determinant signals that the transformation collapses at least one dimension, which is exactly the geometric counterpart of the matrix having less than full [rank](../matrix-algebra-for-econometrics/rank-of-a-matrix.md).

In practice, econometrics software computes determinants and inverses numerically rather than via cofactor expansion (which becomes computationally expensive fast as $n$ grows), but the qualitative link matters for diagnosing estimation problems: when $\mathbf{X}'\mathbf{X}$ is *near*-singular — its determinant close to, though not exactly, zero — this is the numerical symptom of severe [multicollinearity](../ols-estimation/00-overview.md) among the regressors, even when no *exact* linear dependence (which would make the determinant exactly zero and OLS undefined) is present.

*Source: Magnus (lecture notes on matrix calculus).*
