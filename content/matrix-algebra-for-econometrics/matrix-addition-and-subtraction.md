---
title: Matrix Addition and Subtraction
source: "Econ 1, Intro Note, §Matrix algebra › Matrix addition and subtraction"
status: enriched
tags:
  - matrix-addition
  - matrix-subtraction
  - conformability
prerequisites:
  - matrix-algebra-for-econometrics/matrices-and-vectors-in-econometrics
---
## Definition

The sum $\mathbf{X} + \mathbf{Y}$ of two matrices is defined **only if $\mathbf{X}$ and $\mathbf{Y}$ have the same dimensions** — the same number of rows and the same number of columns. For two $(2 \times 2)$ matrices:

$$
\mathbf{X} = \begin{pmatrix} x_1^{1} & x_2^{1} \\ x_1^{2} & x_2^{2} \end{pmatrix}, \qquad
\mathbf{Y} = \begin{pmatrix} y_1^{1} & y_2^{1} \\ y_1^{2} & y_2^{2} \end{pmatrix}
$$

the sum is computed element by element:

$$\mathbf{X} + \mathbf{Y} = \begin{pmatrix} x_1^{1}+y_1^{1} & x_2^{1}+y_2^{1} \\ x_1^{2}+y_1^{2} & x_2^{2}+y_2^{2} \end{pmatrix}$$

Subtraction follows the same rule, requiring identical dimensions and proceeding element by element: $\mathbf{X} - \mathbf{Y}$ has $(i,j)$ entry $x_{ij} - y_{ij}$.

> Unlike multiplication, addition and subtraction of matrices are **commutative** ($\mathbf{X} + \mathbf{Y} = \mathbf{Y} + \mathbf{X}$) and place no restriction beyond matching dimensions — there is no analogue of the row/column compatibility rule needed for [matrix multiplication](../matrix-algebra-for-econometrics/matrix-multiplication-for-econometrics.md).

## Scalar multiplication

A closely related operation is **scalar multiplication**: for any real number $\gamma$ and matrix $\mathbf{A} = (a_{ij})$, $\gamma\mathbf{A} \equiv (\gamma a_{ij})$ — every entry is scaled by $\gamma$ (Wooldridge, 2016, Appendix D-2b). Combined with addition, scalar multiplication satisfies the familiar rules of ordinary algebra: $(\alpha+\beta)\mathbf{A} = \alpha\mathbf{A} + \beta\mathbf{A}$, $\alpha(\mathbf{A}+\mathbf{B}) = \alpha\mathbf{A} + \alpha\mathbf{B}$, and $(\alpha\beta)\mathbf{A} = \alpha(\beta\mathbf{A})$ for any scalars $\alpha,\beta$. These, together with $\mathbf{A}+\mathbf{B}=\mathbf{B}+\mathbf{A}$ and $(\mathbf{A}+\mathbf{B})+\mathbf{C} = \mathbf{A}+(\mathbf{B}+\mathbf{C})$, are exactly the vector-space axioms one would expect — matrix addition and scalar multiplication behave in every way like ordinary arithmetic, which is precisely what makes it safe to manipulate expressions like $\mathbf{y} - \mathbf{X}\boldsymbol{\beta}$ without special care.

*Source: Wooldridge (2016), Appendix D-2a–b.*
