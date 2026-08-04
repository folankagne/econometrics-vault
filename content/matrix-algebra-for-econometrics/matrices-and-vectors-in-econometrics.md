---
title: Matrices and Vectors in Econometrics
source: "Econ 1, Intro Note, §Matrix algebra"
status: enriched
tags:
  - vectors
  - matrices
  - matrix-dimension
  - notation
prerequisites: []
---
## From a list of numbers to a vector

Suppose we have the heights of all $n$ students in a cohort. A concise way to hold this information is a **column vector**:

$$\mathbf{x} = \begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ \vdots \\ x_n \end{pmatrix}$$

Its [transpose](../matrix-algebra-for-econometrics/matrix-transpose-and-symmetric-matrices.md) $\mathbf{x}'$ is the corresponding **row vector**, $\mathbf{x}' = \begin{pmatrix} x_1 & x_2 & x_3 & \dots & x_n \end{pmatrix}$.

## From several variables to a matrix

If we also observe a second variable for the same $n$ students — say their age — the two variables can be stacked into a **matrix** $\mathbf{X}$, where the subscript indexes the variable (1 for height, 2 for age) and the superscript indexes the student:

$$
\mathbf{X} = \begin{pmatrix}
x_1^{1} & x_2^{1} \\
x_1^{2} & x_2^{2} \\
\vdots & \vdots \\
x_1^{n} & x_2^{n}
\end{pmatrix}
$$

The first column holds every student's height, the second every student's age. More generally, an $(n \times p)$ matrix is a rectangular array of $n$ rows and $p$ columns:

$$
\mathbf{A} = (a_{ij})_{n \times p} = \begin{pmatrix}
a_{11} & a_{12} & \dots & a_{1p} \\
a_{21} & a_{22} & \dots & a_{2p} \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} & a_{n2} & \dots & a_{np}
\end{pmatrix}
$$

where $a_{ij}$ is the element in row $i$, column $j$. A vector is simply a matrix with one of its two dimensions equal to $1$: a column vector is $(n \times 1)$, a row vector is $(1 \times n)$.

## Dimension

The **dimension** of a matrix or vector is its number of rows and columns, written $(n \times p)$. Dimensions matter because basic operations — addition, subtraction, multiplication — are only defined between matrices whose dimensions are **compatible** with the operation in question; see [matrix addition and subtraction](../matrix-algebra-for-econometrics/matrix-addition-and-subtraction.md) and [matrix multiplication](../matrix-algebra-for-econometrics/matrix-multiplication-for-econometrics.md).

## The zero matrix

One more building block recurs throughout econometrics: the $(n \times p)$ **zero matrix**, denoted $\mathbf{0}$, has every entry equal to $0$ (Wooldridge, 2016, Appendix D-1). It need not be square, and it plays the same role as the number $0$ in scalar algebra: $\mathbf{A} + \mathbf{0} = \mathbf{A}$, $\mathbf{A} - \mathbf{A} = \mathbf{0}$, and $\mathbf{A}\mathbf{0} = \mathbf{0}\mathbf{A} = \mathbf{0}$ whenever the products are conformable.

*Source: Wooldridge (2016), Appendix D-1.*
