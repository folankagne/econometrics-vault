---
title: Sparsity, Transparency, and Permutation Inference in Synthetic Control
source: "Econ 2b, Ch.7 Synthetic Control Methods, §Properties and Advantages, §Inference via Permutation Tests"
status: enriched
tags:
  - sparsity
  - permutation-test
  - placebo-test
  - rmspe
prerequisites:
  - synthetic-control/setup-and-the-estimator
---
## Sparsity as a feature, not an accident

The non-negativity and sum-to-one constraints typically produce **sparse** solutions: the number of nonzero weights is bounded by $k$, the number of predictors. In the German reunification study, only five countries receive positive weight (Austria $0.42$, US $0.22$, Japan $0.16$, Switzerland $0.11$, Netherlands $0.09$); in the Proposition 99 study, only five states (Utah, Nevada, Montana, Colorado, Connecticut). Sparsity means the synthetic control's composition can be inspected directly and sanity-checked substantively — "does it make sense for these specific countries/states to be West Germany's/California's comparators?" — a check that is simply unavailable for methods (like OLS) that spread small weights across every unit.

> Matching on **averages** of pre-treatment outcomes (rather than every individual period) prevents overfitting: with a large enough donor pool, some convex combination could always be found that reproduces every single pre-treatment data point exactly, without genuinely capturing the underlying structural drivers of the outcome. Restricting to averages (plus a few strategically chosen lags) still achieves excellent fit while remaining robust to fitting noise.

## Why permutation inference, not standard asymptotics

Standard asymptotic inference struggles here: there is typically only **one** treated unit, the donor pool $J$ is often small, and the weights themselves are a complex, data-driven object with no simple sampling distribution.

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.1]
\draw[->] (0,-2) -- (6,-2) node[right] {Time};
\draw[->] (0,-2) -- (0,2.5) node[above] {Gap: $Y_{jt}-\hat Y_{jt}^N$};
\draw[dashed] (0,0) -- (6,0);
\draw[dashed] (3,-2) -- (3,2.3);
\node[below] at (3,-2.15) {$T_0$};
\draw[gray,thin] plot[smooth] coordinates {(0.3,0.1) (1.5,-0.2) (3,0.05) (4.2,0.3) (5.7,-0.15)};
\draw[gray,thin] plot[smooth] coordinates {(0.3,-0.15) (1.5,0.1) (3,-0.1) (4.2,-0.4) (5.7,0.2)};
\draw[gray,thin] plot[smooth] coordinates {(0.3,0.2) (1.5,0.05) (3,0.15) (4.2,-0.2) (5.7,-0.35)};
\draw[gray,thin] plot[smooth] coordinates {(0.3,-0.1) (1.5,-0.3) (3,-0.05) (4.2,0.45) (5.7,0.3)};
\draw[gray,thin] plot[smooth] coordinates {(0.3,0.05) (1.5,0.25) (3,-0.2) (4.2,0.15) (5.7,-0.4)};
\draw[very thick] plot[smooth] coordinates {(0.3,0.05) (1.5,-0.1) (3,0.05) (4.2,1.3) (5.7,2.0)};
\node[right] at (5.8,2.0) {Treated unit};
\node[right] at (5.8,0.2) {Placebos};
\end{tikzpicture}
\end{document}
```
*Figure — Placebo test: re-running synthetic control on every donor-pool unit produces gaps hovering near zero throughout (thin gray lines); the actually-treated unit's gap (bold) is indistinguishable from the placebos before $T_0$ but diverges sharply after — the visual basis for the permutation $p$-value.*

## The placebo approach

Re-run the entire synthetic control procedure treating *each donor-pool unit* as if it were the treated unit (with the real treated unit placed back in the donor pool), generating a distribution of **placebo effects**. Since no placebo unit was actually treated, its estimated post-treatment "gap" should be close to zero if the method is working as intended.

Define $\text{RMSPE}_j^{pre} = \big(\frac{1}{T_0}\sum_{t=1}^{T_0}(Y_{jt}-\hat Y_{jt}^N)^2\big)^{1/2}$ and $\text{RMSPE}_j^{post}$ analogously for post-treatment periods. Units with a poor **pre**-treatment fit (large $\text{RMSPE}_j^{pre}$) generate noisy, uninformative post-treatment gaps regardless of any true effect, and should be **excluded** from the placebo comparison — e.g. by retaining only units with $(\text{RMSPE}_j^{pre}/\text{RMSPE}_1^{pre})^2 < C$ for some threshold $C$ (e.g. $2$, $5$, or $20$).

## The ratio test statistic and its p-value

$$r_j = \frac{\text{RMSPE}_j^{post}}{\text{RMSPE}_j^{pre}} \qquad\qquad p = \frac{1}{J+1}\sum_{j=1}^{J+1}\mathbf{1}[r_j\geq r_1]$$

$r_j$ measures how much a unit's prediction error *grows* after treatment relative to before; units with no true effect should have $r_j\approx1$. Under $H_0:\tau_{1t}=0$ for all $t>T_0$, and exchangeability of the treatment assignment across the $J{+}1$ units, $\Pr(p\leq\alpha)\leq\alpha$ for any $\alpha$ — **proof sketch**: under the null, every unit's observed outcome equals its own $Y^N$, so by exchangeability $r_1$ is drawn from the same distribution as any other $r_j$; its rank among all $J{+}1$ ratios is therefore uniform on $\{1,\dots,J{+}1\}$, which directly gives the stated probability bound.

The **minimum achievable p-value** is $1/(J{+}1)$ — with $39$ units (Proposition 99), that floor is $1/39\approx0.026$, just under the conventional $5\%$ threshold; with $17$ units (German reunification), the floor is $1/17\approx0.059$, which cannot reach the $5\%$ threshold even in the best case. Donor-pool size therefore places a hard ceiling on achievable statistical precision, independent of how strong the true effect actually is.

## What the p-value does and does not establish

Rejecting $H_0$ means the treated unit's post-treatment gap is extreme relative to the placebo distribution — evidence that *something* real happened. It says nothing about the **mechanism**: synthetic control answers "did something happen?" without identifying *why*, and remains agnostic about whether the estimand corresponds to an ATE or some other structural quantity. This trades structural interpretability for applicability in settings — single treated aggregate units — where no experiment and no clean comparison group is otherwise available.

## A caution about specification search

Cunningham (2021) reports a sobering result from Ferman, Pinto, and Possebom (2020) that qualifies how much protection the permutation p-value actually provides: because researchers retain real discretion over which predictors and which pre-treatment periods to include, Ferman et al. run randomization-inference tests across many "commonly used" specifications and find the probability that *at least one* specification falsely rejects a true null at the 5% level can be as high as 14% — and this false-positive rate stays around 13% even with as many as 400 pre-treatment periods available to specification-search over. Their finding directly undercuts the hope that synthetic control's data-driven weight selection fully removes researcher discretion and the bias it can introduce: the *weights* are optimal conditional on a choice of predictors and distance function, but that choice itself remains a researcher decision, and specification searching over it can reintroduce exactly the kind of p-hacking risk the method's transparency was meant to guard against. Ferman et al.'s practical recommendation is the same one that recurs throughout this vault's discussion of specification robustness: report results across a variety of standard specifications rather than a single cherry-picked one, so a reader can judge how sensitive the finding is to reasonable variation.

*Source: Cunningham (2021); Ferman, Pinto & Possebom (2020).*
