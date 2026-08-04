---
title: "The General Linear Regression Model (A1, A2)"
source: "Econ 1, Lecture Notes, §Set-up of the OLS estimator › The Linear Model, The OLS Estimator"
status: enriched
tags:
  - linear-model
  - linearity-in-parameters
  - no-perfect-multicollinearity
  - normal-equations
prerequisites:
  - ols-estimation/deriving-the-ols-estimator
  - matrix-algebra-for-econometrics/rank-of-a-matrix
---
## Assumption A1: linearity in parameters

With one outcome $y$ and $K$ explanatory variables, the model assumed to generate the data is:

$$y_i = b_0 + \sum_{k=1}^{K} b_k x_{ik} + u_i, \qquad i = 1, \dots, N$$

This is **assumption $A_1^{OLS}$**: the model is linear *in the parameters* $b_0, b_1, \dots, b_K$. The term $u_i$ acknowledges that the $K$ regressors are never sufficient to fully explain $y_i$ — it is the model's error, capturing every factor influencing $y_i$ that is not among the included $x_k$'s. In matrix form, with the intercept absorbed into $\mathbf{X}$ as a column of ones:

$$\mathbf{y} = \mathbf{X}\mathbf{b} + \mathbf{u}$$

Linearity in parameters is compatible with a broad range of functional forms: including $x_k^2$ or an interaction $x_k x_j$ as regressors is perfectly fine, since these are just nonlinear *transformations of the data*, entering the model linearly. What would violate $A_1^{OLS}$ is a nonlinear function of the *parameters themselves*, such as $b_k^2$ or a product $b_k b_j$.

Each slope coefficient $b_k$ is interpreted as a **marginal effect**: the partial derivative of $y_i$ with respect to $x_{ik}$, holding the other regressors fixed:

$$b_k = \frac{\partial y_i}{\partial x_{ik}}$$

## Assumption A2: full rank

The OLS estimator, [derived here](../ols-estimation/deriving-the-ols-estimator.md) for the single-regressor case and unchanged in form for $K$ regressors, is $\hat{\mathbf{b}}^{OLS} = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{y}$. For this to be defined, **assumption $A_2^{OLS}$** requires that $(\mathbf{X}'\mathbf{X})^{-1}$ exist — equivalently, that $\mathbf{X}'\mathbf{X}$ have [full rank](../matrix-algebra-for-econometrics/rank-of-a-matrix.md), i.e. that the columns of $\mathbf{X}$ be linearly independent.

This is the familiar **no perfect multicollinearity** condition: no explanatory variable is an exact linear function of the others. The intuition follows directly from the marginal-effect interpretation of $b_k$: if $x_k$ and $x_j$ are perfectly correlated, then $x_j$ always moves whenever $x_k$ does, so it becomes impossible to compute a partial derivative that holds $x_j$ (and every other regressor) fixed while $x_k$ varies — there is no data configuration in which that comparison exists.

Together, $A_1^{OLS}$ and $A_2^{OLS}$ guarantee that $\hat{\mathbf{b}}^{OLS}$ exists and is unique. Substituting the model itself, $\mathbf{y} = \mathbf{X}\mathbf{b} + \mathbf{u}$, into the estimator gives:

$$\hat{\mathbf{b}}^{OLS} = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'(\mathbf{X}\mathbf{b} + \mathbf{u}) = \mathbf{b} + (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{u}$$

so the OLS estimator is a linear function of the true parameters $\mathbf{b}$ and the true noise $\mathbf{u}$, and the estimation error $\hat{\mathbf{b}}^{OLS} - \mathbf{b} = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{u}$ is written down explicitly. Its $K+1$ first-order conditions are the **least squares normal equations**, $\mathbf{X}'\hat{\mathbf{u}} = \mathbf{0}$ — where $\hat{\mathbf{u}}$, the *estimated* residuals, must not be confused with $\mathbf{u}$, the true, unobserved noise.

## Matching this to Wooldridge's MLR assumptions

Wooldridge (2016, Ch.3) builds up the identical content in scalar rather than matrix notation, under the labels **MLR.1** (linear in parameters — same content as $A_1^{OLS}$), **MLR.2** (random sampling — the mechanism that generates the $N$ rows of $\mathbf{X}$ and $\mathbf{y}$, implicit in this vault's [population, sample, and data structures](../foundations/population-sample-and-data-structures.md) entry), and **MLR.3** (no perfect collinearity — the scalar phrasing of $A_2^{OLS}$'s full-rank requirement). Wooldridge's presentation makes one nuance especially vivid: MLR.3 rules out *exact* linear relationships among regressors, but it says nothing about *near*-collinearity — regressors that are strongly, but not perfectly, correlated are perfectly permissible under MLR.3 and still give a well-defined, unique $\hat{\mathbf{b}}^{OLS}$, even though (as the [finite-sample variance](../ols-estimation/finite-sample-variance-of-ols.md) entry discusses) their coefficients will be estimated imprecisely.

*Source: Wooldridge (2016), §§3-1–3-2.*
