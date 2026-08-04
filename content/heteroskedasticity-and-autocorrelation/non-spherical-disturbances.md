---
title: Non-Spherical Disturbances
source: "Econ 1, Lecture Notes, §Non spherical disturbances"
status: enriched
tags:
  - non-spherical-disturbances
  - variance-covariance-matrix
  - curse-of-dimensionality
  - linear-probability-model
prerequisites:
  - ols-estimation/finite-sample-variance-of-ols
---
## Motivating example: the linear probability model

Consider a binary outcome $y_i \in \{0,1\}$ — say, whether an individual is a program alumnus — modeled linearly: $\mathbf{y} = \mathbf{X}\mathbf{b} + \mathbf{u}$ with $\mathbb{E}(\mathbf{u}\mid\mathbf{X}) = 0$ (a "linear probability model"). Writing $p_i = \mathbf{x}_i\mathbf{b}$ for the true probability that $y_i = 1$, and imposing $A_3^{OLS}$:

$$\mathbb{E}(u_i\mid\mathbf{X}) = p_i(1-\mathbf{x}_i\mathbf{b}) + (1-p_i)(-\mathbf{x}_i\mathbf{b}) = 0 \ \Rightarrow\ p_i = \mathbf{x}_i\mathbf{b}$$
$$\mathbb{V}(u_i\mid\mathbf{X}) = \mathbf{x}_i\mathbf{b}(1-\mathbf{x}_i\mathbf{b})(1-\mathbf{x}_i\mathbf{b}) + (1-\mathbf{x}_i\mathbf{b})(\mathbf{x}_i\mathbf{b})^2 = \mathbf{x}_i\mathbf{b}(1-\mathbf{x}_i\mathbf{b})$$

The noise variance is a function of $\mathbf{x}_i$ that differs across individuals — $A_{4a}^{OLS}$ (homoskedasticity) fails purely because of the binary nature of $y$, even with every other assumption intact.

```tikz
\begin{document}
\begin{tikzpicture}[scale=1]
\draw[->] (0,0) -- (6,0) node[right] {$x$};
\draw[->] (0,0) -- (0,4.5) node[above] {$y$};
\draw[thick] (0.3,1.0) -- (5.5,3.2);
\fill (0.5,1.15) circle (1.2pt); \fill (0.7,0.95) circle (1.2pt); \fill (0.9,1.25) circle (1.2pt);
\fill (1.5,1.35) circle (1.2pt); \fill (1.7,1.55) circle (1.2pt); \fill (1.9,1.2) circle (1.2pt);
\fill (2.5,1.6) circle (1.2pt); \fill (2.7,2.3) circle (1.2pt); \fill (2.9,1.4) circle (1.2pt);
\fill (3.5,1.8) circle (1.2pt); \fill (3.6,3.1) circle (1.2pt); \fill (3.8,1.5) circle (1.2pt); \fill (3.9,2.5) circle (1.2pt);
\fill (4.5,1.9) circle (1.2pt); \fill (4.6,3.6) circle (1.2pt); \fill (4.7,1.3) circle (1.2pt); \fill (4.9,2.9) circle (1.2pt); \fill (5.0,4.0) circle (1.2pt);
\end{tikzpicture}
\end{document}
```
*Figure — the classic heteroskedasticity signature: residuals fan out as $x$ grows, so the spread of $y$ around the fitted line is not constant — exactly the failure of $A_{4a}^{OLS}$ this entry formalizes.*

## Spherical versus non-spherical

If both $A_{4a}^{OLS}$ (homoskedasticity) and $A_{4b}^{OLS}$ (no serial correlation) hold, the disturbances are **spherical**: the joint distribution of the noise, viewed geometrically, is a sphere. If either fails, the shape becomes an ellipse instead. Formally, a model is **non-spherical** if:

$$\mathbb{E}(\mathbf{u}\mathbf{u}'\mid\mathbf{X}) = \sigma^2\boldsymbol{\Omega} \neq \sigma^2\mathbf{I}_N$$

for some matrix $\boldsymbol{\Omega}$ with $\sigma_i^2$ terms on the diagonal and $\sigma_{ij}$ covariance terms off it.

## The curse of dimensionality

Under spherical disturbances, $\sigma^2\mathbf{I}_N$ leaves exactly one unknown, $\sigma^2$. A fully unrestricted $\boldsymbol{\Omega}$ has $\frac{1}{2}(N^2+N)$ unknown entries — far more parameters than the $N-K-1$ degrees of freedom available. This is the **curse of dimensionality**: more sample size does not help, since a larger $N$ adds proportionally more unknowns to $\boldsymbol{\Omega}$ at the same time as it adds observations. Making progress requires either accepting an unknown but structured $\boldsymbol{\Omega}$ ([robust estimation](../heteroskedasticity-and-autocorrelation/white-robust-standard-errors.md)) or imposing enough structure on $\boldsymbol{\Omega}$ to estimate it directly ([efficient/GLS estimation](../heteroskedasticity-and-autocorrelation/sphericalization-and-gls.md)).

Wooldridge (2016, §8-5) treats the linear probability model as the canonical example precisely because heteroskedasticity there is not a modeling choice but a mathematical certainty: whenever $y$ is binary, $\text{Var}(y\mid\mathbf{x}) = p(\mathbf{x})[1-p(\mathbf{x})]$ with $p(\mathbf{x})=\mathbb{E}(y\mid\mathbf{x})$, which is constant only in the knife-edge case where every slope coefficient is exactly zero. This makes the LPM a useful benchmark for the rest of this folder: it is a setting where heteroskedasticity is guaranteed by construction, rather than merely suspected.

*Source: Wooldridge (2016), §8-5.*
