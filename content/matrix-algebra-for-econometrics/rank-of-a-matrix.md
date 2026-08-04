---
title: Rank of a Matrix
source: "Econ 1, Intro Note, §Matrix algebra › Rank"
status: enriched
tags:
  - rank
  - linear-independence
  - full-rank
prerequisites:
  - matrix-algebra-for-econometrics/matrices-and-vectors-in-econometrics
---
## Definition

The **rank** of a matrix $\mathbf{A}$ is the number of its columns that are linearly independent. $\mathbf{A}$ is said to be of **full rank** (or regular) if all of its columns are linearly independent.

The rank of $\mathbf{A}$ is unchanged by any of the following operations: permuting two columns, multiplying a column by a nonzero scalar $\lambda \in \mathbb{R}$, or adding to one column a linear combination of the other columns — none of these operations can create or destroy a linear dependence among columns that was not already there.

## Properties

$$\text{Rank}(\mathbf{A}) = \text{Rank}(\mathbf{A}') = \text{Rank}(\mathbf{A}\mathbf{A}') = \text{Rank}(\mathbf{A}'\mathbf{A})$$

$$\text{Rank}(\mathbf{A} + \mathbf{B}) \leq \text{Rank}(\mathbf{A}) + \text{Rank}(\mathbf{B})$$

> Rank is the condition that decides whether OLS is even computable: [deriving the OLS estimator](../ols-estimation/deriving-the-ols-estimator.md) requires inverting $\mathbf{X}'\mathbf{X}$, and by $\text{Rank}(\mathbf{X}'\mathbf{X}) = \text{Rank}(\mathbf{X})$, this is only possible when the regressor matrix $\mathbf{X}$ is of full column rank — i.e., no regressor is an exact linear combination of the others. This is the matrix-algebra counterpart of the "no perfect multicollinearity" assumption.

Wooldridge (2016, Appendix D-3, D-4) states this formally as **Assumption E.2 (no perfect collinearity)**: the $(n \times (k+1))$ regressor matrix $\mathbf{X}$ must have $\text{rank}(\mathbf{X}) = k+1$, i.e. full *column* rank. Because rank can never exceed the smaller dimension, $\text{rank}(\mathbf{X}) \leq \min(n, k+1)$ — so a necessary (though not sufficient) condition for identification is simply having at least as many observations as parameters, $n \geq k+1$. A related and stronger property used throughout the [Gauss-Markov theorem](../ols-estimation/gauss-markov-theorem.md) is that a full-column-rank $\mathbf{X}$ makes $\mathbf{X}'\mathbf{X}$ not merely invertible but **positive definite**: $\mathbf{x}'(\mathbf{X}'\mathbf{X})\mathbf{x} > 0$ for every nonzero vector $\mathbf{x}$, which is exactly what guarantees the OLS objective function has a unique minimum rather than a saddle point.

*Source: Wooldridge (2016), Appendix D-3, D-4.*
