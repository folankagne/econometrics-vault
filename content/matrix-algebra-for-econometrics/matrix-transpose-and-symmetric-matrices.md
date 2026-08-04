---
title: Matrix Transpose and Symmetric Matrices
source: "Econ 1, Intro Note, §Matrix algebra"
status: enriched
tags:
  - matrix-transpose
  - symmetric-matrix
prerequisites:
  - matrix-algebra-for-econometrics/matrices-and-vectors-in-econometrics
---
## Transpose

The **transpose** of a matrix $\mathbf{X}$, denoted $\mathbf{X}'$ (or $\mathbf{X}^{T}$), is obtained by turning its rows into columns. For the $(n \times 2)$ matrix of heights and ages introduced in [Matrices and Vectors in Econometrics](../matrix-algebra-for-econometrics/matrices-and-vectors-in-econometrics.md):

$$
\mathbf{X} = \begin{pmatrix} x_1^{1} & x_2^{1} \\ x_1^{2} & x_2^{2} \\ \vdots & \vdots \\ x_1^{n} & x_2^{n} \end{pmatrix}
\qquad\Longrightarrow\qquad
\mathbf{X}' = \begin{pmatrix} x_1^{1} & x_1^{2} & \dots & x_1^{n} \\ x_2^{1} & x_2^{2} & \dots & x_2^{n} \end{pmatrix}
$$

An $(n \times p)$ matrix has a $(p \times n)$ transpose. Transposition reverses the order of a product: $(\mathbf{A}\mathbf{B})' = \mathbf{B}'\mathbf{A}'$ — a rule used repeatedly when [deriving the OLS estimator](../ols-estimation/deriving-the-ols-estimator.md).

## Symmetric matrices

A square, $(n \times n)$ matrix $\mathbf{A}$ is **symmetric** if and only if it equals its own transpose:

$$\mathbf{A} = \mathbf{A}' \quad\Longleftrightarrow\quad a_{ij} = a_{ji} \text{ for all } i, j$$

Symmetric matrices are pervasive in econometrics: $\mathbf{X}'\mathbf{X}$ is always symmetric for any matrix $\mathbf{X}$, which is what allows the two cross terms in the OLS residual sum of squares to be combined into one, and what simplifies the [differentiation of quadratic forms](../matrix-algebra-for-econometrics/differentiation-of-linear-and-quadratic-forms.md) such as $\mathbf{x}'\mathbf{A}\mathbf{x}$.

## Trace

For any square $(n \times n)$ matrix $\mathbf{A}$, the **trace**, $\text{tr}(\mathbf{A})$, is the sum of its diagonal elements, $\text{tr}(\mathbf{A}) = \sum_{i=1}^n a_{ii}$ (Wooldridge, 2016, Appendix D-2f). Two properties make it useful well beyond bookkeeping: $\text{tr}(\mathbf{A}') = \text{tr}(\mathbf{A})$, and — critically — $\text{tr}(\mathbf{A}\mathbf{B}) = \text{tr}(\mathbf{B}\mathbf{A})$ for any conformable $\mathbf{A}, \mathbf{B}$, even though $\mathbf{A}\mathbf{B} \neq \mathbf{B}\mathbf{A}$ in general. This "cyclic" property is what lets $\text{tr}\big[(\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{X}\big]$ be rearranged to $\text{tr}(\mathbf{I}_k) = k$, and more generally makes the trace the standard tool for computing the rank of the [idempotent projection matrices](../matrix-algebra-for-econometrics/special-matrices-in-econometrics.md) that appear throughout OLS theory: for any idempotent $\mathbf{A}$, $\text{rank}(\mathbf{A}) = \text{tr}(\mathbf{A})$.

*Source: Wooldridge (2016), Appendix D-2d, D-2f.*
