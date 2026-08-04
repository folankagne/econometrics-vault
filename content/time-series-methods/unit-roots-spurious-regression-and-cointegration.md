---
title: Unit Roots, Spurious Regression, and Cointegration
source: "Wooldridge (2016), Ch.18"
status: enriched
tags:
  - beyond-lectures
  - time-series
  - unit-root
  - spurious-regression
  - cointegration
  - error-correction-model
prerequisites:
  - time-series-methods/weakly-dependent-time-series-and-asymptotic-ols
  - heteroskedasticity-and-autocorrelation/autocorrelation-and-stationarity
---
## I(1) processes: when the stability condition fails

[The AR(1) stability condition](../time-series-methods/weakly-dependent-time-series-and-asymptotic-ols.md), $|\rho_1|<1$, is what makes a series weakly dependent. Setting $\rho_1=1$ instead gives the **random walk**, $y_t=y_{t-1}+e_t$ — already flagged elsewhere in this vault as the canonical *non*-stationary process, since $\text{Var}(y_t)=t\sigma_e^2$ grows without bound. A series requiring exactly one differencing to become weakly dependent is said to be **integrated of order one**, $I(1)$, or to have a **unit root**; a weakly dependent series in its own right (no differencing needed) is $I(0)$. Unlike the geometric decay of a stable AR(1), shocks to an $I(1)$ process are **permanent** — a one-time innovation $e_t$ shifts the entire future path of $y$ by exactly $e_t$, forever, which is itself often of direct economic interest (does a productivity shock permanently raise the level of GDP, or only temporarily?).

```tikz
\begin{document}
\begin{tikzpicture}[scale=1]
\draw[->] (0,-2.5) -- (7,-2.5) node[right] {$t$};
\draw[->] (0,-2.5) -- (0,2.5) node[above] {$y_t$};
\draw[dashed] (0,-0.5) -- (7,-0.5);
\draw[thick] plot[smooth] coordinates {(0.2,-0.5) (0.8,0.3) (1.4,-0.9) (2,0.5) (2.6,-0.3) (3.2,0.7) (3.8,-0.6) (4.4,0.2) (5,-0.4) (5.6,0.6) (6.2,-0.2) (6.8,0.1)};
\draw[thick,dashed] plot[smooth] coordinates {(0.2,-0.5) (0.8,-0.1) (1.4,-0.6) (2,-0.9) (2.6,-1.5) (3.2,-1.1) (3.8,-0.4) (4.4,0.2) (5,0.9) (5.6,1.5) (6.2,1.9) (6.8,2.2)};
\node[right] at (6.9,0.1) {Stable AR(1), $|\rho|<1$};
\node[right] at (6.9,2.2) {Random walk, $\rho=1$};
\end{tikzpicture}
\end{document}
```
*Figure — A stable AR(1) process ($|\rho|<1$, solid) keeps returning toward its mean; a random walk ($\rho=1$, dashed) has no attracting level at all — shocks accumulate permanently, and the two paths that start identically drift arbitrarily far apart over time.*

## Testing for a unit root: the Dickey-Fuller test

Since $|\rho_1|<1$ versus $\rho_1=1$ is the object of interest, the natural test regresses $\Delta y_t$ on $y_{t-1}$ (equivalently, tests $H_0:\theta=0$ in $y_t=\alpha+\theta y_{t-1}+e_t$, $\theta\equiv\rho_1-1$) — but the resulting $t$-statistic does **not** follow a standard $t$ distribution under the unit-root null, because $y_{t-1}$ is not weakly dependent under $H_0$ itself, breaking the usual asymptotic argument. Dickey and Fuller derived the correct (nonstandard, left-skewed) reference distribution directly; the resulting **Dickey-Fuller (DF) test** rejects the unit-root null only for $t$-statistics more negative than the usual $-1.65$ or $-1.96$ critical values would suggest. The **augmented Dickey-Fuller (ADF) test** adds lagged values of $\Delta y_t$ to the same regression to soak up any additional serial correlation in $e_t$ before testing — the practical default in applied work, and generally more reliable than the plain DF test.

## Spurious regression: the formal version of a warning already raised

[Trending series can produce spurious relationships](../time-series-methods/trends-seasonality-and-spurious-regression.md) even without unit roots, simply by both drifting in the same direction — that earlier warning concerned deterministic trends. Wooldridge's Ch.18 treatment extends the same concern to **stochastic** trends: regressing one **independent** $I(1)$ random walk on another produces a $t$-statistic that rejects the (true) null of no relationship far more often than the nominal significance level would suggest, and an $R^2$ that does not converge to zero as the sample grows but instead behaves like a genuine random variable with substantial spread — two $I(1)$ series that have *nothing to do with each other* will routinely appear strongly, spuriously related. This is a considerably more severe version of the deterministic-trend spurious-regression problem, since including a simple time trend does **not** fix it — the confounding here comes from the stochastic drift itself, not from any deterministic component that a trend term could absorb.

## Cointegration: the one case where an I(1)-on-I(1) regression is not spurious

If $y_t$ and $x_t$ are both $I(1)$ but some linear combination $y_t-\beta x_t$ is itself $I(0)$, the two series are **cointegrated** — they cannot drift arbitrarily far apart, even though each individually wanders without bound, because $\beta$ is the specific ratio at which their stochastic trends exactly cancel. The **Engle-Granger test** operationalizes this: run the static regression of $y_t$ on $x_t$, then apply a Dickey-Fuller-type unit-root test to the *residuals* — if the residuals are $I(0)$, the original I(1)-on-I(1) regression was not spurious after all, and $\hat\beta$ consistently estimates the cointegrating parameter. Cointegration is economically meaningful whenever theory predicts a stable long-run relationship between two individually nonstationary series — short- and long-term interest rates, or consumption and income — even though nothing rules out each series wandering on its own in the short run.

## Error correction models

If $y_t$ and $x_t$ are cointegrated, a well-specified dynamic model should include not just $\Delta x_t$ but also the lagged cointegrating residual, $(y_{t-1}-\beta x_{t-1})$, as an **error-correction term**:

$$\Delta y_t = \alpha_0+\alpha_1\Delta x_{t-1}+\delta(y_{t-1}-\beta x_{t-1})+e_t$$

The coefficient $\delta$ measures how strongly $y$ is pulled back toward the long-run cointegrating relationship whenever it has drifted away from it in the previous period — a direct, estimable measure of the "error correction" mechanism implied by cointegration, and a more parsimonious representation than an unrestricted vector autoregression in levels would require. This is the standard applied toolkit for series (interest rate spreads, purchasing-power-parity deviations) where theory predicts a stable long-run anchor but permits genuine short-run divergence from it.

*Source: Wooldridge (2016), Ch.18 summary, §§18-3–18-5.*
