---
title: The Fixed Effects (Within) Estimator
source: "Wooldridge (2016), Ch.14"
status: enriched
tags:
  - beyond-lectures
  - panel-data
  - fixed-effects
  - within-estimator
  - dummy-variable-regression
prerequisites:
  - panel-data-methods/the-first-differenced-estimator
  - matrix-algebra-for-econometrics/special-matrices-in-econometrics
---
## Time-demeaning instead of differencing

Differencing is only one way to eliminate the unobserved effect $a_i$. Averaging the unobserved-effects model $y_{it}=\beta_1x_{it}+a_i+u_{it}$ over $t$ for each unit gives $\bar y_i = \beta_1\bar x_i + a_i + \bar u_i$, and subtracting this from the original equation cancels $a_i$ exactly (it is constant over $t$, so it equals its own time average):

$$\ddot y_{it} = \beta_1\ddot x_{it} + \ddot u_{it}, \qquad \ddot y_{it}\equiv y_{it}-\bar y_i,\ \ \ddot x_{it}\equiv x_{it}-\bar x_i$$

This is the **within transformation**, and pooled OLS on the time-demeaned data is the **fixed effects (within) estimator**. The name reflects what identifies $\beta_1$: only variation in $x$ *within* each unit over time, never variation *between* units — a unit that is constant on some regressor throughout the sample contributes nothing to that coefficient's identification, which is exactly why any time-constant regressor (gender, a firm's founding-year characteristics, a city's distance to a river) is swept out of the equation entirely, just as it is under first differencing.

```tikz
\begin{document}
\begin{tikzpicture}[scale=1]
\draw[->] (0,0) -- (3,0) node[right] {\scriptsize $t$};
\draw[->] (0,0) -- (0,4) node[above] {\scriptsize $y_{it}$};
\draw[thick] plot coordinates {(0.3,3.2) (1.3,3.5) (2.3,3.0)};
\draw[thick,dashed] plot coordinates {(0.3,2.0) (1.3,2.4) (2.3,1.8)};
\draw[thick,dotted] plot coordinates {(0.3,0.8) (1.3,1.2) (2.3,0.5)};
\node[below] at (1.3,-0.3) {\scriptsize raw data};
\begin{scope}[xshift=5cm]
\draw[->] (0,0) -- (3,0) node[right] {\scriptsize $t$};
\draw[->] (0,-1.3) -- (0,1.3) node[above] {\scriptsize $\ddot y_{it}$};
\draw[thick] plot coordinates {(0.3,-0.1) (1.3,0.5) (2.3,-0.4)};
\draw[thick,dashed] plot coordinates {(0.3,-0.15) (1.3,0.65) (2.3,-0.5)};
\draw[thick,dotted] plot coordinates {(0.3,-0.05) (1.3,0.75) (2.3,-0.7)};
\node[below] at (1.3,-1.6) {\scriptsize demeaned};
\end{scope}
\end{tikzpicture}
\end{document}
```
*Figure — Three units with very different levels (left) collapse onto the same baseline once each is demeaned by its own time average (right) — the unobserved fixed effect $a_i$ is removed, leaving only within-unit variation to identify $\beta_1$.*

## Equivalence with the dummy variable regression

A more traditional way to view fixed effects treats $a_i$ as a parameter to be estimated directly: include a dummy variable for every cross-sectional unit alongside the regressors. This **dummy variable regression** is computationally unwieldy for large $N$, but it delivers *numerically identical* slope coefficients, standard errors, and test statistics to the within estimator — a useful equivalence, since it means the fixed-effects coefficients can equally be interpreted as "controlling for a separate intercept per unit." The unit-specific intercepts themselves are recoverable after within estimation as $\hat a_i = \bar y_i - \hat\beta_1\bar x_{i1}-\dots-\hat\beta_k\bar x_{ik}$, useful when the individual $a_i$'s are themselves of interest (e.g. ranking cities by their unobserved crime propensity net of observed covariates).

## A degrees-of-freedom subtlety

Estimating the time-demeaned equation by pooled OLS on $NT$ stacked observations with $k$ regressors might suggest $NT-k$ degrees of freedom, but this overcounts: for each unit $i$, the demeaned errors $\ddot u_{it}$ sum to exactly zero across $t$ by construction, costing one degree of freedom per unit. The correct count is $df = NT - N - k = N(T-1)-k$ — modern software with a dedicated fixed-effects routine handles this automatically, but a manual within-transformation-then-pooled-OLS implementation must correct the reported standard errors and test statistics by hand.

## Worked example: job training and firm scrap rates, three years

Extending the [FD example](../panel-data-methods/the-first-differenced-estimator.md) to all three years of the JTRAIN panel (1987–1989) with year dummies and a lagged grant indicator, fixed effects estimates a substantially larger **lagged** effect ($\hat\beta_{grant_{-1}} = -0.422$, se $0.210$, $t\approx-2.01$) than contemporaneous effect ($\hat\beta_{grant}=-0.252$, se $0.151$) — job training's productivity payoff shows up with a one-year lag. Omitting the lag entirely collapses the contemporaneous coefficient to a small, statistically insignificant $-0.082$ ($t=-0.65$), illustrating that a fixed-effects analysis is only as good as its dynamic specification: failing to allow for a lagged response can make a real effect disappear into the noise.

*Source: Wooldridge (2016), §§14-1, 14-1a, Examples 14.1–14.2.*
