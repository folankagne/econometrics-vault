---
title: Synthetic Control — Setup and the Estimator
source: "Econ 2b, Ch.7 Synthetic Control Methods, §Setup and Notation, §The Synthetic Control Estimator"
status: enriched
tags:
  - synthetic-control
  - convex-combination
  - weight-selection
prerequisites:
  - synthetic-control/motivation-and-examples
  - causal-inference-foundations/rubins-causal-model
---
## Notation

$J{+}1$ units total: unit $1$ is treated, units $2,\dots,J{+}1$ form the donor pool. $T$ periods, with treatment starting after period $T_0$. $\mathbf{X}_j$ is a $(k\times1)$ vector of predictors unaffected by the intervention (possibly including pre-treatment outcome values). Potential outcomes: $Y_{jt}^N$ (without intervention) and $Y_{1t}^I$ (treated unit, with intervention, $t>T_0$), so $\tau_{1t} = Y_{1t}^I - Y_{1t}^N = Y_{1t}-Y_{1t}^N$ for $t>T_0$ — the standard [fundamental problem of causal inference](../causal-inference-foundations/rubins-causal-model.md): $Y_{1t}^N$ for $t>T_0$ is never observed.

## The estimator

A synthetic control is a weight vector $\mathbf{W}=(w_2,\dots,w_{J+1})'$, giving:

$$\hat Y_{1t}^N(\mathbf{W}) = \sum_{j=2}^{J+1} w_jY_{jt} \qquad\qquad \hat\tau_{1t}(\mathbf{W}) = Y_{1t}-\hat Y_{1t}^N(\mathbf{W})$$

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.1]
\draw[->] (0,0) -- (6,0) node[right] {Time};
\draw[->] (0,0) -- (0,4) node[above] {Outcome};
\draw[dashed] (3,0) -- (3,3.6);
\node[below] at (3,-0.15) {$T_0$};
\draw[thick] plot[smooth] coordinates {(0.3,1.5) (1,1.9) (2,1.6) (3,2.1)};
\draw[thick,dashed] plot[smooth] coordinates {(0.3,1.4) (1,1.85) (2,1.55) (3,2.05)};
\draw[thick] plot[smooth] coordinates {(3,2.1) (4,1.6) (5,1.2) (5.7,0.9)};
\draw[thick,dashed] plot[smooth] coordinates {(3,2.05) (4,2.2) (5,2.35) (5.7,2.5)};
\node[right] at (5.8,0.9) {Treated unit};
\node[right] at (5.8,2.5) {Synthetic control};
\draw[<->] (5.7,0.95) -- (5.7,2.45);
\node[right] at (5.9,1.7) {$\hat\tau_{1t}$};
\end{tikzpicture}
\end{document}
```
*Figure — the treated unit (solid) and its synthetic counterpart (dashed) track closely before $T_0$, the standard pre-treatment fit check; after $T_0$ the synthetic control continues along its own trajectory as the estimated counterfactual, and the gap $\hat\tau_{1t}$ is read directly off the plot.*

## Choosing W: matching predictors, not outcomes directly

The optimal weights minimize a weighted distance in **predictor space**:

$$\|\mathbf{X}_1-\mathbf{X}_0\mathbf{W}\|_{\mathbf{V}} = \left(\sum_{h=1}^{k} v_h(X_{h1}-w_2X_{h2}-\dots-w_{J+1}X_{h,J+1})^2\right)^{1/2}$$

subject to $w_j\geq0$ (non-negativity) and $\sum_j w_j=1$ (sum-to-one), where $\mathbf{V}=(v_1,\dots,v_k)$ weights how important each predictor is to match. These two constraints together force the synthetic control to be a **convex combination** of donor units — it can never extrapolate beyond the range of the observed data, keeping the counterfactual transparent and directly interpretable. The direct consequence: if the treated unit lies **outside** the convex hull of the donor pool (e.g. has the extreme value of some predictor throughout the pre-period), no combination of weights can match it well, and pre-treatment fit will visibly suffer.

## Choosing V: minimize pre-treatment prediction error

$\mathbf{V}^*$ is chosen to minimize the *outcome* prediction error over some pre-treatment window $\mathcal{T}_0\subseteq\{1,\dots,T_0\}$: $\mathbf{V}^* = \arg\min_{\mathbf{V}} \sum_{t\in\mathcal{T}_0}(Y_{1t}-w_2^*(\mathbf{V})Y_{2t}-\dots)^2$. This is a **nested optimization**: for a candidate $\mathbf{V}$, the inner problem finds $\mathbf{W}^*(\mathbf{V})$ minimizing predictor distance; the outer problem then picks $\mathbf{V}^*$ to minimize the resulting outcome fit.

> Is this "just machine learning"? In substance, yes — it is a data-driven, non-parametric weight-selection algorithm, which is what "machine learning" broadly means. What distinguishes synthetic control specifically is not the *absence* of a learning algorithm but the **particular constraints imposed** — non-negativity and sum-to-one — which prevent extrapolation and keep the resulting counterfactual transparent, properties a generic unconstrained prediction algorithm would not automatically deliver.

The final estimator uses $\mathbf{W}^*=\mathbf{W}^*(\mathbf{V}^*)$: $\hat Y_{1t}^N = \sum_j w_j^*Y_{jt}$, $\hat\tau_{1t} = Y_{1t}-\hat Y_{1t}^N$.

## Origin and reception

The estimator first appeared in Abadie and Gardeazabal (2003), applied to the economic cost of Basque terrorism, and was substantially elaborated in Abadie, Diamond, and Hainmueller (2010, hereafter ADH10). Cunningham (2021) reports that a Google Scholar search for "synthetic control" and "Abadie" returned over 3,500 hits at the time of writing, and quotes Athey and Imbens's (2017) assessment that it is "arguably the most important innovation in the policy evaluation literature in the last 15 years" — a striking claim given how much else was developed over the same period (matching, RDD, the modern DiD estimators), and a useful signal of how central this method has become to applied microeconomics' comparative-case-study tradition specifically.

*Source: Cunningham (2021); Abadie & Gardeazabal (2003); Abadie, Diamond & Hainmueller (2010).*
