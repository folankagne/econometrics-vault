---
title: Standard Difference-in-Differences
source: "Econ 2b, Ch.6 Difference-in-Differences and Two-Way Fixed Effects, §Standard Difference-in-Differences"
status: enriched
tags:
  - difference-in-differences
  - parallel-trends
  - potential-outcomes
  - average-treatment-effect-on-the-treated
  - quasi-experiment
  - panel-data
prerequisites:
  - causal-inference-foundations/rubins-causal-model
---
## Setup: two groups, two periods

Consider the canonical setting with two groups observed in two time periods, $t_1$ (pre) and $t_2$ (post). A **switcher** group $s$ moves from untreated to treated between the two periods; a **never-treated** group $n$ stays untreated throughout. This arises naturally whenever a policy change hits one group but not another — a minimum-wage increase in one state but not a neighboring one, a program rolled out in some regions first.

## The difference-in-differences estimator

Let $\bar{Y}_{g,t}$ denote the sample mean outcome in group $g \in \{s, n\}$ at time $t \in \{1, 2\}$. The **difference-in-differences (DID) estimator** is:

$$\widehat{DID} = \big(\bar{Y}_{s,2} - \bar{Y}_{s,1}\big) - \big(\bar{Y}_{n,2} - \bar{Y}_{n,1}\big)$$

The first difference — over time, within the switcher group — nets out any characteristic of group $s$ that is constant across the two periods, whether or not it is observed. The second difference — across groups — nets out whatever the two groups have in common as time passes, in particular a shared macroeconomic trend that has nothing to do with treatment. What is left is attributed to the treatment itself.

In potential-outcomes notation, let $Y_{g,t}(d)$ be the potential outcome for group $g$ at time $t$ under treatment status $d \in \{0,1\}$, so that the observed outcome is $Y_{g,t} = D_{g,t}\,Y_{g,t}(1) + (1-D_{g,t})\,Y_{g,t}(0)$, exactly as in [Rubin's causal model](../causal-inference-foundations/rubins-causal-model.md) — here the treatment indicator $D_{g,t}$ additionally varies over time, not just across units.

## The parallel trends assumption

DID does not identify a treatment effect for free — it requires that, absent treatment, the two groups would have evolved the same way:

$$\mathbb{E}\big[Y_{s,2}(0) - Y_{s,1}(0)\big] = \mathbb{E}\big[Y_{n,2}(0) - Y_{n,1}(0)\big]$$

This is the **parallel trends assumption**: the expected change in the *untreated* potential outcome is the same for both groups. It says nothing about the levels of $Y$ being similar across groups — group $s$ can start (and stay) systematically higher or lower than group $n$ — only that, had neither group been treated, both would have moved in step.

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.1]
\draw[->] (0,0) -- (5,0) node[right] {Time};
\draw[->] (0,0) -- (0,4.2) node[above] {Outcome $Y$};
\draw[dashed] (2.5,0) -- (2.5,3.8);
\node[below] at (2.5,-0.15) {Treatment date};
\node[below] at (0.5,-0.15) {Pre};
\node[below] at (4.5,-0.15) {Post};
\draw[thick] (0.5,1.2) -- (2.5,2.0) -- (4.5,2.8);
\node[right] at (4.6,2.8) {Control ($n$)};
\draw[thick] (0.5,0.5) -- (2.5,1.3);
\draw[thick,dashed] (2.5,1.3) -- (4.5,2.1);
\node[right] at (4.6,2.1) {Counterfactual};
\draw[thick] (2.5,1.3) -- (4.5,3.3);
\node[right] at (4.6,3.3) {Switcher ($s$), actual};
\draw[<->] (4.5,2.1) -- (4.5,3.3);
\node[right] at (4.75,2.7) {$\widehat{DID}$};
\fill (0.5,1.2) circle (1.5pt);
\fill (2.5,2.0) circle (1.5pt);
\fill (4.5,2.8) circle (1.5pt);
\fill (0.5,0.5) circle (1.5pt);
\fill (2.5,1.3) circle (1.5pt);
\fill (4.5,2.1) circle (1.5pt);
\fill (4.5,3.3) circle (1.5pt);
\end{tikzpicture}
\end{document}
```
*Figure — the control group's slope (solid) traces out the shared trend; the switcher group departs from it exactly at the treatment date. Extending the switcher's own pre-trend (dashed) gives the unobserved counterfactual; the gap between the counterfactual and the switcher's actual post-period path is $\widehat{DID}$.*

## Identification of the ATT under parallel trends

Under parallel trends, $\widehat{DID}$ is unbiased for the average treatment effect on the treated group $s$, evaluated at period 2:

$$\mathbb{E}\big[\widehat{DID}\big] = \mathbb{E}\big[Y_{s,2}(1) - Y_{s,2}(0)\big]$$

The result follows from writing the observed post-period outcome for the switcher group as its treated potential outcome, $Y_{s,2} = Y_{s,2}(1)$, and then adding and subtracting $Y_{s,2}(0)$:

$$
\begin{align}
\mathbb{E}\big[\widehat{DID}\big]
&= \mathbb{E}\big[Y_{s,2} - Y_{s,1} - (Y_{n,2} - Y_{n,1})\big] \\
&= \mathbb{E}\big[Y_{s,2}(1) - Y_{s,1}(0) - \big(Y_{n,2}(0) - Y_{n,1}(0)\big)\big] \\
&= \mathbb{E}\big[Y_{s,2}(1) - Y_{s,2}(0)\big] + \mathbb{E}\big[Y_{s,2}(0) - Y_{s,1}(0) - \big(Y_{n,2}(0) - Y_{n,1}(0)\big)\big] \\
&= \mathbb{E}\big[Y_{s,2}(1) - Y_{s,2}(0)\big] + 0 \qquad \text{(parallel trends)} \\
&= \mathbb{E}\big[Y_{s,2}(1) - Y_{s,2}(0)\big]
\end{align}
$$

The second line uses $Y_{s,1} = Y_{s,1}(0)$ (the switcher group is still untreated in period 1) and $Y_{n,t} = Y_{n,t}(0)$ for both periods (the never-treated group is always untreated). The trick is adding and subtracting $\mathbb{E}[Y_{s,2}(0)]$: it splits the expression into the treatment effect of interest plus a second term that the parallel trends assumption sets exactly to zero.

## Why parallel trends is untestable

Parallel trends is a statement about $Y_{s,2}(0)$ — the outcome the *treated* group would have had, had it *not* been treated, in the post-treatment period. Because group $s$ is in fact treated at $t_2$, $Y_{s,2}(0)$ is never observed for it, for the same reason no individual's counterfactual outcome is ever observed in [Rubin's causal model](../causal-inference-foundations/rubins-causal-model.md). Parallel trends can therefore never be directly verified from the data used to estimate $\widehat{DID}$ itself; applied work instead builds indirect evidence for its plausibility — most commonly by checking that the two groups' *pre-treatment* trends (using periods before $t_1$, if available) already track each other closely.

> This is the central practical weakness of DID, and it is the starting point for everything that follows in this topic: once the design is extended from two groups/two periods to *many* groups adopting treatment at *different* times, the natural generalization — [two-way fixed effects](../difference-in-differences/two-way-fixed-effects.md) — turns out to combine parallel-trends-type comparisons in a way that can be severely biased under heterogeneous treatment effects, motivating the modern estimators developed later in this topic.

## Example 1

A training program is introduced in one region (the switcher group $s$) but not in a neighboring region (the never-treated group $n$). Average employment rates are:

| | Pre ($t_1$) | Post ($t_2$) | Change |
|---|:---:|:---:|:---:|
| Switcher region ($s$) | $10$ | $16$ | $+6$ |
| Never-treated region ($n$) | $8$ | $11$ | $+3$ |

Both regions' employment rates rose — a raw pre/post comparison in the switcher region alone would (over-)credit the program with the full $+6$ change. The DID estimator instead nets out the $+3$ change common to both regions, presumably driven by a shared macroeconomic trend:

$$\widehat{DID} = (16 - 10) - (11 - 8) = 6 - 3 = 3$$

Under parallel trends, the program's effect on the treated region is estimated at $3$ percentage points — not $6$, since roughly half of the raw pre/post change would have happened anyway.

## Recovering the effect of time from untreated units

De Chaisemartin's (2021, Ch.11) presentation of this same result stresses a specific reading of the mechanics worth carrying forward: between the two periods, the switcher group's outcome can change for two reasons — the passage of time itself, and the switch from untreated to treated. If the effect of time is the *same* for both groups (parallel trends), the untreated group's own evolution isolates exactly that time effect on its own, since nothing else changes for it between periods. Subtracting the untreated group's change from the switcher group's change therefore cancels the shared time effect and leaves only the treatment effect — precisely the "a + b, minus a" logic underlying the proof above, restated as a simple accounting exercise rather than an algebraic derivation.

*Source: de Chaisemartin (2021), Ch.11, §11.1.1.*
