---
title: Sources of Selection Bias
source: "Econ 2b, Ch.2 Rubin's Causal Model and Randomized Experiments, §The Selectivity Problem › Sources of Selection Bias"
status: enriched
tags:
  - selection-bias
  - roy-model
  - self-selection
  - equity-efficiency-tradeoff
prerequisites:
  - treatment-effects/the-selectivity-problem
---
## Self-selection: the Roy model

Consider a participation rule where individuals opt into treatment when it is worth the cost: $D=1$ if $y_1-y_0 > c$, for participation cost $c$. This immediately implies:

$$\mathbb{E}(y_0\mid D{=}1) = \mathbb{E}(y_0\mid y_0 < y_1-c) \neq \mathbb{E}(y_0\mid y_0\geq y_1-c) = \mathbb{E}(y_0\mid D{=}0)$$

Selection bias under this rule stems from two distinct channels: **comparative advantage** ($y_1-y_0$), if it correlates with **absolute advantage** ($y_0$); and **heterogeneity in cost** $c$, if cost itself correlates with $y_0$.

```tikz
\begin{document}
\begin{tikzpicture}[scale=1]
\draw[->] (0,0) -- (5.5,0) node[right] {$y_0$};
\draw[->] (0,0) -- (0,5.5) node[above] {$y_1$};
\draw[dashed] (0,0) -- (5,5) node[above right] {$y_1=y_0$};
\draw[thick] (0,0.8) -- (4.2,5) node[above left] {$y_1=y_0+c$};
\fill (1,3.2) circle (1.5pt);
\fill (2,3.5) circle (1.5pt);
\fill (3,4.6) circle (1.5pt);
\node[above right] at (2,3.5) {treated};
\fill (1.5,1.2) circle (1.5pt);
\fill (2.5,2.0) circle (1.5pt);
\fill (3.8,3.2) circle (1.5pt);
\node[below right] at (2.5,2.0) {untreated};
\end{tikzpicture}
\end{document}
```
*Figure — each dot is one individual, plotted at their pair of potential outcomes $(y_0,y_1)$. Points above the $y_1=y_0+c$ line gain more than the participation cost $c$ and select into treatment; points below do not — comparative advantage is what drives who ends up treated.*

## Example: job search assistance, both directions

**Positive selection on gains.** If individuals who benefit most from assistance (high $y_1-y_0$) are also those with the best baseline prospects (high $y_0$) — more capable, more motivated people both do better absent treatment *and* are more likely to seek help — the treated group has higher $y_0$ than the untreated, producing **positive** selectivity bias.

**Negative selection (the more common case for targeted programs).** If the program specifically targets those with weak prospects — low $y_0$ — either because those individuals seek help more, or because staff prioritize the struggling, the treated group has **lower** $y_0$ than the untreated, producing **negative** selectivity bias: a naive comparison *understates* the true effect. Even when comparative advantage is high, participation cost $c$ can push in the same direction — individuals with very low $y_0$ may face especially high psychic costs of *not* seeking help, making the program more attractive to precisely this group. In the extreme, a program perfectly targeted at those with $y_0\approx 0$, compared against a control group with moderate prospects, would severely underestimate the program's true effect.

## Selection by program staff

Independent of individual self-selection, staff themselves may select participants for reasons unrelated to a clean causal comparison: **cream-skimming** (choosing easy cases, high $y_0$), **remediation** (choosing those most in need, low $y_0$), or **maximizing measured program impact** (choosing those with the largest $y_1-y_0$). If low-$y_0$ individuals also tend to have low $y_1-y_0$, staff face a genuine **equity-efficiency trade-off**: serving those most in need is not the same as maximizing the program's average measured effect.

> Every one of these mechanisms operates on $\mathbb{E}(y_0\mid D)$ — the counterfactual untreated outcome — never on something directly observed. This is precisely why [the selectivity problem](../treatment-effects/the-selectivity-problem.md) cannot be resolved by looking harder at the treated and control groups' *observed* outcomes; it requires either an experiment that removes selection by construction ([RCTs](../treatment-effects/randomized-controlled-trials.md)) or an identification strategy that accounts for it explicitly.

## The hospital example, and government training programs

The [hospital allegory](../treatment-effects/the-selectivity-problem.md) is a textbook case of remediation-style selection: people go to the hospital precisely *because* their (untreated) health is poor, so $\mathbb{E}(y_0\mid D{=}1) \ll \mathbb{E}(y_0\mid D{=}0)$ — negative selection on the untreated outcome, producing a strongly negatively biased naive comparison. Angrist and Pischke (2009, §2.2) report an analogous, empirically documented pattern for government-subsidized job-training programs aimed at disadvantaged workers: because these programs are deliberately targeted at people with weak labor-market attachment, non-experimental comparisons of participants to non-participants routinely show *participants earning less* even after training — not because training harms earnings, but because low pre-program earnings potential is exactly what selects people into the program (Ashenfelter, 1978; Ashenfelter & Card, 1985; LaLonde, 1995). Randomized evaluations of the same programs typically find genuinely positive effects (LaLonde, 1986; Orr et al., 1996), confirming that the negative non-experimental estimates reflect selection bias, not a true negative treatment effect.

*Source: Angrist & Pischke (2009), §§2.1–2.2.*
