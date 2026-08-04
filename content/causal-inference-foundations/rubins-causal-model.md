---
title: Rubin's Causal Model
source: "Econ 2b, Ch.2 Rubin's Causal Model and Randomized Experiments, §Rubin's Causal Model"
status: enriched
tags:
  - potential-outcomes
  - treatment-effect
  - average-treatment-effect
  - treatment-on-the-treated
  - heterogeneous-treatment-effects
  - fundamental-problem-of-causal-inference
prerequisites:
  - causal-inference-foundations/marshalls-maxim-and-the-all-causes-model
  - causal-inference-foundations/parameter-estimand-and-estimator
---
## Treatment and potential outcomes

A **treatment** is the program or intervention whose effect is to be evaluated — job search assistance, a smaller class size, a training grant. Let $D_i$ denote individual $i$'s treatment status: most often binary ($D_i = 1$ if treated, $D_i = 0$ otherwise), but it can also take several discrete values or be continuous, as with a grant amount that varies with family income.

For each individual, define a **potential outcome** for every treatment status they could in principle receive:

$$y_{0i}: \text{ outcome of individual } i \text{ if not treated} \qquad y_{1i}: \text{ outcome of individual } i \text{ if treated}$$

These are two separate quantities attached to the same person — the test score they *would* get in a regular class, and the test score they *would* get in a small class — regardless of which one is actually realized.

## Observed and counterfactual outcomes

Only one of $y_{0i}, y_{1i}$ is ever realized, depending on which treatment status $i$ actually experiences. The **observed outcome** is:

$$y_i = (1 - D_i)\,y_{0i} + D_i\,y_{1i}$$

If $D_i = 1$, then $y_{1i} = y_i$ is observed while $y_{0i}$ is the **counterfactual** — what would have happened to this same person had they not been treated. If $D_i = 0$, the roles reverse: $y_{0i} = y_i$ is observed and $y_{1i}$ is counterfactual.

## The individual treatment effect and the fundamental problem of causal inference

The **individual treatment effect** is the difference between the two potential outcomes:

$$\Delta_i = y_{1i} - y_{0i}$$

Since only one of $y_{0i}$ and $y_{1i}$ is ever observed for a given individual, $\Delta_i$ itself can never be computed from data — this is the **fundamental problem of causal inference**. It is not a problem of sample size or measurement error: no amount of additional data on individual $i$ alone can resolve it, because it would require observing the same person simultaneously treated and untreated.

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.1]
\node (i) at (0,1) {Individual $i$, $D_i=1$};
\node (y1) at (3.3,2) {$y_{1i}$};
\node (y0) at (3.3,0) {$y_{0i}$};
\draw[->,thick] (i) -- (y1);
\draw[->,thick,gray,dashed] (i) -- (y0);
\node[right] at (3.6,2) {observed ($=y_i$)};
\node[right,gray] at (3.6,0) {counterfactual — never observed};
\end{tikzpicture}
\end{document}
```
*Figure — For a treated individual ($D_i=1$), only $y_{1i}$ is ever observed; $y_{0i}$ — what would have happened without treatment — is the counterfactual the entire causal-inference toolkit exists to approximate.*

> Treatment effects and potential outcomes are, in general, **individual-specific**: if $\Delta_i$ varies across $i$, treatment effects are said to be **heterogeneous**. Unlike a structural/all-causes model, the potential-outcomes framework is a *reduced form*: $y_{0i}$ and $y_{1i}$ need not derive from an explicit causal graph, and they are implicitly defined for a given economic environment — they describe values at the observed equilibrium, not universal constants.

## Connection to Marshall's maxim

The [all-causes model](../causal-inference-foundations/marshalls-maxim-and-the-all-causes-model.md) defines a causal effect via *ceteris paribus*: change one cause, hold everything else fixed. Potential outcomes implement this automatically. Comparing $y_{1i}$ to $y_{0i}$ varies only the treatment status of a single individual $i$ — every predetermined characteristic, observable or not (education, ability, family background), stays fixed simply because it is the same person in both potential states. No other variable needs to be controlled for by assumption; holding "everything else" constant is built into the comparison itself.

This clarifies a distinction that matters throughout the rest of the causal-inference toolkit: variables **predetermined** before treatment (education, ability) are the ones *ceteris paribus* holds fixed, while variables realized **after** treatment (job search intensity, reservation wage, following a job-search-assistance program) are part of the causal mechanism through which $D_i$ affects the outcome, and should not be held fixed — doing so would remove part of the very effect being measured.

## Average evaluation parameters: ATE and TT

Because $\Delta_i$ is not identified at the individual level, and because treatment effects can vary across individuals, causal inference targets population-level summaries instead of the individual effect itself. Two of the most common are:

$$\text{ATE} = \mathbb{E}[y_1 - y_0] \qquad \text{TT} = \mathbb{E}[y_1 - y_0 \mid D = 1]$$

The **Average Treatment Effect (ATE)** averages $\Delta_i$ over the whole population; the **Treatment on the Treated (TT)**, sometimes written ATT, averages it only over the subpopulation that actually receives treatment. These need not coincide: if the people who select into treatment are those who benefit most (or least) from it, TT and ATE diverge. Much of the applied literature — instrumental variables in particular — exists precisely to handle this kind of heterogeneity carefully.

## Homogeneous treatment effects and OLS

Consider the standard regression $y_i = \alpha + D_i\beta + W_i\gamma + u_i$. It can be rewritten in potential-outcomes form:

$$y_i = (1-D_i)\underbrace{(\alpha + W_i\gamma + u_i)}_{y_{0i}} + D_i\underbrace{(\alpha + \beta + W_i\gamma + u_i)}_{y_{1i}}$$

so that $y_{1i} - y_{0i} = \beta$ for every individual $i$: the treatment effect is the same for everyone. Under this **homogeneous effects** assumption, $\text{ATE} = \text{TT} = \beta$, and OLS on the standard model recovers a single, unambiguous causal parameter.

## Heterogeneous treatment effects and OLS

A richer model lets the two potential outcomes have separate intercepts and slopes:

$$y_{0i} = \alpha_0 + \gamma_0 X_i + u_{0i} \qquad y_{1i} = \alpha_1 + \gamma_1 X_i + u_{1i}$$

so that the individual effect $(y_{1i} - y_{0i}) = (\alpha_1 - \alpha_0) + (\gamma_1 - \gamma_0)X_i + (u_{1i} - u_{0i})$ now depends both on observed characteristics $X_i$ and on unobserved terms $u_{0i}, u_{1i}$. In general $\text{ATE} \neq \text{TT}$, since $X_i$, $u_{0i}$, and $u_{1i}$ need not be identically distributed among the treated and the untreated. OLS can accommodate heterogeneity **in observables**, by including interaction terms like $X_i \cdot D_i$; it cannot separate heterogeneity **in unobservables**, since $(u_{1i} - u_{0i})$ is simply absorbed, undifferentiated, into a composite error term.

## Example 1

Consider four individuals eligible for a job-search-assistance program, with hypothetical potential outcomes for the probability of finding a job within six months:

| Individual | $y_{0i}$ | $y_{1i}$ | $\Delta_i$ | $D_i$ | $y_i$ (observed) |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 1 | $0.30$ | $0.50$ | $0.20$ | $1$ | $0.50$ |
| 2 | $0.40$ | $0.55$ | $0.15$ | $1$ | $0.55$ |
| 3 | $0.35$ | $0.40$ | $0.05$ | $0$ | $0.35$ |
| 4 | $0.45$ | $0.45$ | $0.00$ | $0$ | $0.45$ |

The two potential outcomes columns are a construct — in reality, only the shaded outcome for each individual's actual $D_i$ would ever be observed, the other being counterfactual. Averaging $\Delta_i$ over all four individuals gives $\text{ATE} = (0.20+0.15+0.05+0.00)/4 = 0.10$, while averaging only over the treated ($i=1,2$) gives $\text{TT} = (0.20+0.15)/2 = 0.175$. Here $\text{TT} > \text{ATE}$: the individuals who selected into treatment happen to be those with the largest gains from it, which is exactly the kind of selection pattern that makes ATE and TT diverge in applications.

## SUTVA: the assumption implicit in writing $y_{1i}, y_{0i}$ at all

Cunningham (2021, Ch.4) makes explicit an assumption this notation silently presupposes: the **Stable Unit Treatment Value Assumption (SUTVA)**. Writing a *single* pair $(y_{0i}, y_{1i})$ for individual $i$ — rather than a value that also depends on everyone else's treatment status — requires that (i) each unit receives one well-defined "dose" of treatment (not a hidden mix of different treatment intensities lumped under one label) and (ii) there is **no interference**: unit $i$'s potential outcomes do not depend on which units *other* than $i$ are treated (no spillovers, no general-equilibrium feedback). SUTVA is not a technical footnote; it is what makes the entire potential-outcomes apparatus — ATE, TT, the naive estimator's bias decomposition — well-defined in the first place. It can fail in recognizable ways: a vaccine trial where treated individuals reduce disease transmission to untreated neighbors violates no-interference directly, and scaling a job-training program from a small pilot to an entire labor market can violate SUTVA through general-equilibrium wage effects that never appear in the pilot's estimates — a standard concern when extrapolating experimental results to policy scale.

*Source: Cunningham (2021), Ch.4, "SUTVA."*
