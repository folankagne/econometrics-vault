---
title: Local Linear Estimation and Bandwidth Choice in RDD
source: "Econ 2b, Ch.4 Regression Discontinuity Design (RDD), §Estimation"
status: enriched
tags:
  - local-linear-regression
  - bandwidth-selection
  - bias-variance-tradeoff
prerequisites:
  - regression-discontinuity/fuzzy-rdd
---
## The fundamental estimation challenge

$\tau_{RD}$ is defined as a difference of **limits** — $\lim_{\varepsilon\downarrow0}\mathbb{E}[Y\mid X{=}c{+}\varepsilon] - \lim_{\varepsilon\uparrow0}\mathbb{E}[Y\mid X{=}c{+}\varepsilon]$ — and no dataset has an exact empirical counterpart to a limit: estimation necessarily uses data *away* from $c$ and extrapolates inward.

## Setting up the regression

For $Y=\alpha+\beta D+U$, write $\mathbb{E}[U\mid X]=g(X)$ for some function continuous near $c$, and $\varepsilon\equiv U-\mathbb{E}[U\mid X]$, giving $Y=\alpha+\beta D+g(X)+\varepsilon$. The threshold indicator $Z=\mathbf{1}[X\geq c]$ predicts treatment (equals $D$ in sharp RDD, instruments for it in fuzzy RDD) and is uncorrelated with $\varepsilon$ by construction, since $\mathbb{E}[\varepsilon\mid X]=0 \Rightarrow \mathbb{E}[\varepsilon\mid Z]=0$.

## Local linear regression

Fit separate linear regressions on each side of the threshold, within a bandwidth $b$: $\mathbb{E}[Y(0)\mid X]\approx\alpha_\ell+\delta_\ell(X{-}c)$ for $X<c$, $\mathbb{E}[Y(1)\mid X]\approx\alpha_r+\delta_r(X{-}c)$ for $X\geq c$, giving $\hat\tau_{RD}=\hat\alpha_r-\hat\alpha_\ell$. Implemented as a single regression on $X\in[c{-}b,c{+}b]$:

$$Y_i = \alpha_\ell + \tau D_i + \delta_\ell(X_i-c) + \delta'D_i(X_i-c) + \varepsilon_i$$

> **Centering matters.** Using $(X-c)$ rather than raw $X$ ensures the intercept jump $\hat\tau$ is estimated exactly **at** the threshold — the quantity of actual interest — rather than at $X=0$.

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.1]
\draw[->] (-3,0) -- (3,0) node[right] {Running variable $X$};
\draw[->] (-3,0) -- (-3,4) node[above] {Outcome $Y$};
\draw[dashed] (0,0) -- (0,3.6);
\node[below] at (0,-0.15) {$c$};
\draw[dotted] (-1.2,0) -- (-1.2,3.6);
\draw[dotted] (1.2,0) -- (1.2,3.6);
\node[below] at (-1.2,-0.15) {$c-h$};
\node[below] at (1.2,-0.15) {$c+h$};
\draw[gray,thick] plot[smooth] coordinates {(-3,1.0) (-2,1.3) (-1.2,1.55)};
\draw[thick] plot[smooth] coordinates {(-1.2,1.55) (-0.6,1.68) (-0.05,1.8)};
\draw[thick] plot[smooth] coordinates {(0.05,2.7) (0.6,2.78) (1.2,2.85)};
\draw[gray,thick] plot[smooth] coordinates {(1.2,2.85) (2,3.1) (3,3.3)};
\draw[<->] (0.15,1.8) -- (0.15,2.7);
\node[right] at (0.3,2.25) {$\hat\tau_{RD}$};
\end{tikzpicture}
\end{document}
```
*Figure — Local linear estimation fits a straight line to each side using only observations inside the bandwidth $[c-h,c+h]$ (black); data outside the window (gray) is discarded — smaller $h$ reduces bias from curvature but leaves fewer points to estimate the line from.*

## Bandwidth choice: bias versus variance

A smaller bandwidth $b$ improves the linear approximation locally (less bias) but retains fewer observations (more variance); a larger $b$ does the reverse. Imbens and Kalyanaraman (2012) develop data-driven MSE-minimizing bandwidth selectors, but in practice the stronger discipline is **robustness**: results should be checked across a range of bandwidths, sensitivity analysis is more credible than any single "optimal" specification, and visual inspection of the raw data remains essential.

## Full-sample polynomial alternative, and why it's disfavored

An alternative uses the *entire* sample with flexible polynomial controls on each side, $Y=\alpha+\beta D+g(X{-}c)+\mathbf{1}[X\geq c]g'(X{-}c)+\varepsilon$. Gelman and Imbens (2019) caution against high-order global polynomials specifically — they can produce misleading, erratic fits, especially near the boundary of the support. **Local linear** regression is preferred in modern practice precisely because it is robust to functional-form misspecification away from the threshold, where a global polynomial's behavior is hardest to trust.

## Fuzzy RDD: local first stage and reduced form

Estimate reduced form and first stage as separate local linear regressions in $Z=\mathbf{1}[X\geq c]$, or equivalently run 2SLS on $Y=\alpha+\beta D+\delta(X-c)+\delta'\mathbf{1}[X\geq c](X-c)+\varepsilon$ for $X\in[c-b,c+b]$, instrumenting $D$ with $Z$. The resulting $\hat\beta$ estimates $(Y^+-Y^-)/(D^+-D^-)$.

## A practical checklist

Following Lee (2010): graph the **density** of the forcing variable (McCrary test); graph the **first stage** (fuzzy design) and **reduced form** directly; run **sensitivity analysis** across bandwidths and polynomial orders; run **balancing tests** on baseline covariates; and check that estimates are **stable** to the inclusion or exclusion of covariates. In practice: local linear RDD reduces to plain OLS (sharp) or 2SLS (fuzzy); graphs should show binned local averages, with a polynomial fit optionally superimposed for visual reference; and the goal throughout is demonstrating robustness across reasonable specifications, not claiming to have found *the* optimal one.

Hoekstra's (2009) own robustness exercise is the textbook illustration of exactly this discipline: rather than reporting a single "optimal-bandwidth" estimate of the flagship-university earnings effect, he reports how the estimate moves across a whole range of bandwidths — from 7.4% to 11.1%, centered near the headline 9.5% figure — letting the reader see directly how sensitive (or, in this case, how reassuringly stable) the result is to the bandwidth choice, rather than asking the reader to simply trust one data-driven selector's output.

*Source: Cunningham (2021), Ch.6; Hoekstra (2009); Imbens & Kalyanaraman (2012).*
