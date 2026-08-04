---
title: Matrix Multiplication for Econometrics
source: "Econ 1, Intro Note, §Matrix algebra › Matrix multiplication"
status: enriched
tags:
  - matrix-multiplication
  - conformability
  - pre-multiplication
  - post-multiplication
prerequisites:
  - matrix-algebra-for-econometrics/matrices-and-vectors-in-econometrics
---
## Conformability

The product $\mathbf{X} \times \mathbf{Y}$ is defined **if and only if the number of columns of $\mathbf{X}$ equals the number of rows of $\mathbf{Y}$**: if $\mathbf{X}$ is $(p \times q)$ and $\mathbf{Y}$ is $(q \times r)$, the product $\mathbf{X}\mathbf{Y}$ is $(p \times r)$. In this case, $\mathbf{Y} \times \mathbf{X}$ is generally not even defined, since its required inner dimensions ($r$ and $p$) need not match.

Because matrix multiplication does not commute — $\mathbf{X}\mathbf{Y} \neq \mathbf{Y}\mathbf{X}$ even when both products exist — the order of multiplication must always be stated explicitly. The convention is to describe $\mathbf{X}\mathbf{Y}$ as "**pre-multiplying**" $\mathbf{Y}$ by $\mathbf{X}$, or equivalently "**post-multiplying**" $\mathbf{X}$ by $\mathbf{Y}$.

## Computing the product

For two $(2 \times 2)$ matrices $\mathbf{X}$ and $\mathbf{Y}$, pre-multiplying $\mathbf{Y}$ by $\mathbf{X}$ gives:

$$
\mathbf{X}\mathbf{Y} = \begin{pmatrix}
(x_1^{1} y_1^{1}) + (x_2^{1} y_2^{1}) & (x_1^{1} y_2^{1}) + (x_2^{1} y_2^{2}) \\
(x_1^{2} y_1^{1}) + (x_2^{2} y_2^{1}) & (x_1^{2} y_2^{1}) + (x_2^{2} y_2^{2})
\end{pmatrix}
$$

Each entry $(i,j)$ of the product is the sum of the element-by-element products of row $i$ of $\mathbf{X}$ and column $j$ of $\mathbf{Y}$ — the general $(n\times p)(p \times m)$ case follows the same row-times-column pattern, summed over the shared inner dimension $p$.

> Matrix multiplication is exactly what turns a system of $n$ scalar equations $y_i = \beta_0 + \beta_1 x_i + u_i$ into the single compact expression $\mathbf{y} = \mathbf{X}\boldsymbol{\beta} + \mathbf{u}$ used throughout [deriving the OLS estimator](../ols-estimation/deriving-the-ols-estimator.md) — pre-multiplying the parameter vector $\boldsymbol{\beta}$ by the $(n \times p)$ regressor matrix $\mathbf{X}$ reproduces all $n$ equations at once.

## Properties, and why associativity matters

Matrix multiplication is associative, $(\mathbf{A}\mathbf{B})\mathbf{C} = \mathbf{A}(\mathbf{B}\mathbf{C})$, and distributes over addition, $\mathbf{A}(\mathbf{B}+\mathbf{C}) = \mathbf{A}\mathbf{B}+\mathbf{A}\mathbf{C}$ (Wooldridge, 2016, Appendix D-2c) — but, as emphasized above, it is **not commutative**, which is the one rule from scalar algebra that fails and must be relearned carefully.

## Partitioned matrix multiplication

When $\mathbf{X}$ is split column-wise into blocks, $\mathbf{X} = (\mathbf{X}_1 \mid \mathbf{X}_2)$ with $\mathbf{X}_1$ of dimension $(n \times k_1)$ and $\mathbf{X}_2$ of dimension $(n \times k_2)$, the product $\mathbf{X}'\mathbf{X}$ can be written block-by-block (Wooldridge, 2016, Appendix D-2e):

$$\mathbf{X}'\mathbf{X} = \begin{pmatrix} \mathbf{X}_1'\mathbf{X}_1 & \mathbf{X}_1'\mathbf{X}_2 \\ \mathbf{X}_2'\mathbf{X}_1 & \mathbf{X}_2'\mathbf{X}_2 \end{pmatrix}$$

This is not just a bookkeeping convenience: it is the algebraic engine behind the **Frisch-Waugh-Lovell theorem** — the fact that the OLS coefficient on $\mathbf{X}_2$ from the full regression of $\mathbf{y}$ on $(\mathbf{X}_1, \mathbf{X}_2)$ equals the coefficient from regressing $\mathbf{y}$ on the *residuals* of $\mathbf{X}_2$ after partialling out $\mathbf{X}_1$ — which underlies the ["partialling out" interpretation of multiple regression](../ols-estimation/00-overview.md) and the equivalence between the fixed-effects estimator and the dummy-variable regression in panel data.

*Source: Wooldridge (2016), Appendix D-2c, D-2e.*
