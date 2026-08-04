---
title: Special Matrices in Econometrics
source: "Econ 1, Intro Note, §Matrix algebra › Special matrices"
status: enriched
tags:
  - square-matrix
  - diagonal-matrix
  - identity-matrix
  - idempotent-matrix
  - orthogonal-matrix
prerequisites:
  - matrix-algebra-for-econometrics/matrices-and-vectors-in-econometrics
  - matrix-algebra-for-econometrics/matrix-multiplication-for-econometrics
---
## Square matrix

A matrix is **square** if its dimensions are $(n \times n)$: the number of rows equals the number of columns. Several families of square matrices recur throughout econometrics — [symmetric matrices](../matrix-algebra-for-econometrics/matrix-transpose-and-symmetric-matrices.md) are one; diagonal, identity, and idempotent matrices are three more, defined below.

## Diagonal matrix

A square matrix $\mathbf{A}$ is **diagonal** if every off-diagonal element is zero, with (typically) nonzero elements along the main diagonal:

$$a_{ii} \neq 0 \ \ \forall i = 1, \dots, n \qquad\qquad a_{ij} = 0 \ \ \forall i \neq j$$

## Identity matrix

The **identity matrix** of dimension $n$, denoted $\mathbf{I}_n$, is the diagonal matrix whose diagonal entries all equal $1$:

$$a_{ii} = 1 \ \ \forall i = 1, \dots, n \qquad\qquad a_{ij} = 0 \ \ \forall i \neq j$$

It plays the role of the number $1$ in matrix algebra: for any conformable matrix $\mathbf{A}$, $\mathbf{I}\mathbf{A} = \mathbf{A}\mathbf{I} = \mathbf{A}$, and it is the matrix a square, invertible $\mathbf{A}$ must produce when multiplied by [its inverse](../matrix-algebra-for-econometrics/matrix-inversion.md).

## Idempotent matrix

A square matrix $\mathbf{A}$ is **idempotent** if multiplying it by itself reproduces it exactly:

$$\mathbf{A}\mathbf{A} = \mathbf{A}^2 = \mathbf{A}$$

> Idempotent matrices arise naturally as projection matrices — for instance, the matrix that maps the observed outcome vector $\mathbf{y}$ onto its OLS-fitted values, or onto the residuals, is idempotent: projecting an already-projected vector changes nothing further.

Concretely (Wooldridge, 2016, Appendix D-5), for the $(n \times k)$ full-rank regressor matrix $\mathbf{X}$, define the **projection (hat) matrix** $\mathbf{P} \equiv \mathbf{X}(\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'$ and the **annihilator matrix** $\mathbf{M} \equiv \mathbf{I}_n - \mathbf{P}$. Both are symmetric and idempotent: $\mathbf{P}\mathbf{y} = \hat{\mathbf{y}}$ produces the OLS fitted values, and $\mathbf{M}\mathbf{y} = \hat{\mathbf{u}}$ produces the OLS residuals. Their ranks follow from the trace identity above: $\text{rank}(\mathbf{P}) = \text{tr}(\mathbf{P}) = \text{tr}[(\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{X}] = \text{tr}(\mathbf{I}_k) = k$, and $\text{rank}(\mathbf{M}) = n-k$ — the fitted values live in a $k$-dimensional subspace (spanned by the columns of $\mathbf{X}$), and the residuals in the orthogonal $(n-k)$-dimensional complement.

## Positive definite and positive semi-definite matrices

A symmetric $(n \times n)$ matrix $\mathbf{A}$ is **positive definite (p.d.)** if the quadratic form $\mathbf{x}'\mathbf{A}\mathbf{x} > 0$ for every nonzero vector $\mathbf{x}$, and **positive semi-definite (p.s.d.)** if $\mathbf{x}'\mathbf{A}\mathbf{x} \geq 0$ (Wooldridge, 2016, Appendix D-4). Two facts make this matter throughout the vault: for any matrix $\mathbf{X}$, $\mathbf{X}'\mathbf{X}$ is always p.s.d., and is p.d. (hence invertible) exactly when $\mathbf{X}$ has full column [rank](../matrix-algebra-for-econometrics/rank-of-a-matrix.md); and a p.d. matrix is automatically invertible with a p.d. inverse. Variance-covariance matrices are p.s.d. by construction (they are p.d. unless some linear combination of the variables is degenerate), which is the matrix generalization of the scalar fact that a variance can never be negative.

## Orthogonality

A square matrix $\mathbf{A}$ is **orthogonal** if $\mathbf{A}'\mathbf{A} = \mathbf{0}$. More generally, two matrices $\mathbf{A}$ and $\mathbf{B}$ — not necessarily square, but with dimensions compatible for the product to be defined — are said to be orthogonal if $\mathbf{A}\mathbf{B} = \mathbf{0}$.
