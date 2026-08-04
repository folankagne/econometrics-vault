---
title: Deriving the OLS Estimator
source: "Econ 1, Intro Note, §Deriving the OLS estimator"
status: enriched
tags:
  - ols
  - least-squares
  - linear-regression
  - matrix-algebra
  - residuals
prerequisites:
  - matrix-algebra-for-econometrics/matrix-multiplication-for-econometrics
  - matrix-algebra-for-econometrics/matrix-transpose-and-symmetric-matrices
  - matrix-algebra-for-econometrics/differentiation-of-linear-and-quadratic-forms
---
## From a scatterplot to a linear model

Suppose we observe, for $n$ individuals, an outcome $y$ and a regressor $x$ — for instance, students' grades and their mothers' years of education. Plotted in the $x$-$y$ plane, the data form a scatter of $n$ points $(x_i, y_i)$, $i = 1, \dots, n$. The simplest way to summarize the relationship between $x$ and $y$ is to fit a straight line through the cloud:

$$y = \beta_0 + \beta_1 x$$

where $\beta_0$ is the intercept and $\beta_1$ the slope. A line that passed exactly through every point would satisfy $y_i = \beta_0 + \beta_1 x_i$ for all $i$, but with real data almost every point lies slightly off any given line. This discrepancy is absorbed into a residual term $u_i$:

$$y_i = \beta_0 + \beta_1 x_i + u_i, \qquad i = 1, \dots, n$$

Stacking the $n$ equations gives the matrix form of the model:

$$
\begin{pmatrix} y_1 \\ y_2 \\ \vdots \\ y_n \end{pmatrix}
=
\begin{pmatrix} 1 & x_1 \\ 1 & x_2 \\ \vdots & \vdots \\ 1 & x_n \end{pmatrix}
\begin{pmatrix} \beta_0 \\ \beta_1 \end{pmatrix}
+
\begin{pmatrix} u_1 \\ u_2 \\ \vdots \\ u_n \end{pmatrix}
\qquad\Longleftrightarrow\qquad
\mathbf{y} = \mathbf{X}\boldsymbol{\beta} + \mathbf{u}
$$

Rearranging, the residual vector is $\mathbf{u} = \mathbf{y} - \mathbf{X}\boldsymbol{\beta}$: it measures how far each point falls from the fitted line for a given choice of $\boldsymbol{\beta}$. Although the derivation here uses a single regressor $x$ for clarity, nothing in it depends on $\mathbf{X}$ having two columns — the same argument goes through unchanged for a model with several explanatory variables.

```tikz
\begin{document}
\begin{tikzpicture}[scale=1]
\draw[->] (0,0) -- (6,0) node[right] {$x$};
\draw[->] (0,0) -- (0,4.5) node[above] {$y$};
\draw[thick] (0.3,0.6) -- (5.5,3.9);
\draw[dashed] (0.5,1.3) -- (0.5,0.73);
\draw[dashed] (1.2,1.1) -- (1.2,1.17);
\draw[dashed] (2,2.6) -- (2,1.68);
\draw[dashed] (2.8,2.0) -- (2.8,2.19);
\draw[dashed] (3.5,3.3) -- (3.5,2.63);
\draw[dashed] (4.3,2.8) -- (4.3,3.14);
\fill (0.5,1.3) circle (1.5pt);
\fill (1.2,1.1) circle (1.5pt);
\fill (2,2.6) circle (1.5pt);
\fill (2.8,2.0) circle (1.5pt);
\fill (3.5,3.3) circle (1.5pt);
\fill (4.3,2.8) circle (1.5pt);
\node[right] at (5.6,3.9) {$\hat y_i=\hat\beta_0+\hat\beta_1x_i$};
\end{tikzpicture}
\end{document}
```
*Figure — OLS chooses the line minimizing the sum of squared vertical distances (dashed) between each observed point and the fitted line — these vertical gaps are exactly the residuals $\hat u_i$ that $\mathbf{u}'\mathbf{u}$ sums and squares.*

## The residual sum of squares in matrix form

"Choosing a line" means choosing $\boldsymbol{\beta}$, and a good choice is one that keeps the residuals collectively small. The method of **Ordinary Least Squares (OLS)** makes this precise by minimizing the sum of squared residuals. Pre-multiplying the $(n \times 1)$ vector $\mathbf{u}$ by its transpose gives a scalar:

$$\mathbf{u}'\mathbf{u} = \sum_{i=1}^{n} u_i^2$$

> Do not confuse $\mathbf{u}'\mathbf{u}$, a $(1 \times 1)$ scalar equal to the sum of squared residuals, with $\mathbf{u}\mathbf{u}'$, the $(n \times n)$ variance–covariance matrix of the residuals — the two objects look similar but play very different roles.

Substituting $\mathbf{u} = \mathbf{y} - \mathbf{X}\boldsymbol{\beta}$ and expanding using $(\mathbf{AB})' = \mathbf{B}'\mathbf{A}'$:

$$
\begin{align}
\mathbf{u}'\mathbf{u} &= (\mathbf{y} - \mathbf{X}\boldsymbol{\beta})'(\mathbf{y} - \mathbf{X}\boldsymbol{\beta}) \\
&= (\mathbf{y}' - \boldsymbol{\beta}'\mathbf{X}')(\mathbf{y} - \mathbf{X}\boldsymbol{\beta}) \\
&= \mathbf{y}'\mathbf{y} - \mathbf{y}'\mathbf{X}\boldsymbol{\beta} - \boldsymbol{\beta}'\mathbf{X}'\mathbf{y} + \boldsymbol{\beta}'\mathbf{X}'\mathbf{X}\boldsymbol{\beta} \\
&= \mathbf{y}'\mathbf{y} - 2\mathbf{y}'\mathbf{X}\boldsymbol{\beta} + \boldsymbol{\beta}'\mathbf{X}'\mathbf{X}\boldsymbol{\beta}
\end{align}
$$

The last line uses the fact that $\mathbf{y}'\mathbf{X}\boldsymbol{\beta}$ is a $(1 \times 1)$ scalar, hence equal to its own transpose $\boldsymbol{\beta}'\mathbf{X}'\mathbf{y}$, so the two middle terms of the expansion can be combined.

## Minimizing the residual sum of squares

To find the $\boldsymbol{\beta}$ that minimizes $\mathbf{u}'\mathbf{u}$, differentiate with respect to $\boldsymbol{\beta}$:

$$
\frac{\partial \mathbf{u}'\mathbf{u}}{\partial \boldsymbol{\beta}}
= \frac{\partial}{\partial \boldsymbol{\beta}}\big(\mathbf{y}'\mathbf{y}\big)
- 2\frac{\partial}{\partial \boldsymbol{\beta}}\big(\mathbf{y}'\mathbf{X}\boldsymbol{\beta}\big)
+ \frac{\partial}{\partial \boldsymbol{\beta}}\big(\boldsymbol{\beta}'\mathbf{X}'\mathbf{X}\boldsymbol{\beta}\big)
= -2\mathbf{X}'\mathbf{y} + 2\mathbf{X}'\mathbf{X}\boldsymbol{\beta}
$$

using the standard rules for [differentiating linear and quadratic forms](../matrix-algebra-for-econometrics/differentiation-of-linear-and-quadratic-forms.md) and the symmetry of $\mathbf{X}'\mathbf{X}$. Setting the first-order condition to zero:

$$\mathbf{X}'\mathbf{X}\boldsymbol{\beta} = \mathbf{X}'\mathbf{y}$$

The second derivative is $2\mathbf{X}'\mathbf{X}$, a positive semi-definite matrix (the matrix analogue of a positive number), which confirms this stationary point is a minimum rather than a maximum or saddle point.

## The OLS estimator

Provided $\mathbf{X}'\mathbf{X}$ is invertible — which requires no exact linear relationship among the regressors — solving the first-order condition gives the **OLS estimator**:

$$\hat{\boldsymbol{\beta}}^{OLS} = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{y}$$

This closed-form expression is what makes OLS so tractable: no numerical optimization is required, only matrix inversion and multiplication. It generalizes without modification to any number of regressors, since nothing in the derivation above used the dimension of $\boldsymbol{\beta}$.

> Least squares is one specific way to make the residuals "small" — minimizing $\sum_i u_i^2$ rather than, say, $\sum_i |u_i|$ (least absolute deviations). The reason OLS is the default choice is not that it is the only option, but that under a specific set of assumptions it has very desirable properties among all estimators, linear or not — see the [Gauss-Markov theorem](../ols-estimation/gauss-markov-theorem.md).

## Example 1

Consider four observations $(x_i, y_i)$: $(1, 2)$, $(2, 4)$, $(3, 5)$, $(4, 4)$. For a single regressor, the matrix solution $(\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{y}$ reduces to the familiar covariance-over-variance formula:

$$
\hat{\beta}_1 = \frac{\sum_i (x_i - \bar{x})(y_i - \bar{y})}{\sum_i (x_i - \bar{x})^2}, \qquad
\hat{\beta}_0 = \bar{y} - \hat{\beta}_1 \bar{x}
$$

Here $\bar{x} = 2.5$ and $\bar{y} = 3.75$. The deviations from the means are $(-1.5, -1.75)$, $(-0.5, 0.25)$, $(0.5, 1.25)$, $(1.5, 0.25)$, so:

$$
\sum_i (x_i - \bar{x})(y_i - \bar{y}) = 2.625 - 0.125 + 0.625 + 0.375 = 3.5, \qquad
\sum_i (x_i - \bar{x})^2 = 2.25 + 0.25 + 0.25 + 2.25 = 5
$$

Hence $\hat{\beta}_1 = 3.5 / 5 = 0.7$ and $\hat{\beta}_0 = 3.75 - 0.7 \times 2.5 = 2$. The fitted line is:

$$\hat{y} = 2 + 0.7x$$

Each additional year of $x$ is associated with a $0.7$-unit increase in the fitted value of $y$, and the residuals $u_i = y_i - \hat{y}_i$ are exactly the values that minimize the sum of squared deviations among all possible lines through this scatter.

## Reading the coefficients: fitted values, residuals, and goodness of fit

Wooldridge (2016, §2-2–2-3) motivates the same scalar formula, $\hat{\beta}_1 = \sum_i(x_i-\bar{x})(y_i-\bar{y}) / \sum_i(x_i-\bar{x})^2$, from the *method of moments*: choose $\hat{\beta}_0, \hat{\beta}_1$ to satisfy the sample analogues of the population conditions $\mathbb{E}(u)=0$ and $\text{Cov}(x,u)=0$. His running wage-education example, $\widehat{wage} = -0.90 + 0.54\,educ$, illustrates how to read the result: the slope says each extra year of education is associated with a $0.54 increase in predicted hourly wage, while the intercept ($-0.90$) is a pure artifact of extrapolating the line to $educ=0$ and should not be over-interpreted when few or no observations lie near that value.

By construction, OLS residuals always average to zero and are uncorrelated with the regressor in the sample — these are *algebraic* properties of the first-order conditions, true for every OLS fit regardless of whether the underlying model assumptions hold. This decomposes the total sample variation in $y$ (SST) into an explained part (SSE) and a residual part (SSR), SST = SSE + SSR, which defines the **$R^2 \equiv$ SSE/SST**, the fraction of the variation in $y$ explained by $x$. A low $R^2$ (Wooldridge's CEO-salary-on-ROE example explains only 1.3% of salary variation) does not by itself mean the estimated ceteris paribus relationship is wrong or useless — it means many other factors, folded into $u$, also drive $y$.

*Source: Wooldridge (2016), §§2-2–2-3.*
