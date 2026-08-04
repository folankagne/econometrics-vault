---
title: Average Treatment Effect (ATE) and Treatment on the Treated (ATT)
source: "Econ 1, Lecture Notes, §Clever instruments: tools for policy evaluation › \"Policy\" evaluation"
status: enriched
tags:
  - average-treatment-effect
  - att
  - late
  - potential-outcomes
  - policy-evaluation
prerequisites:
  - causal-inference-foundations/potential-outcomes-and-the-naive-estimator
  - causal-inference-foundations/rubins-causal-model
---
## Potential outcomes, restated for policy evaluation

For a policy change $\mathcal{T} \in \{0,1\}$ and outcome $y$, each individual $i$ at date $t$ has potential outcomes $y_{it} = y_{0i}$ if $\mathcal{T}_{it}=0$ and $y_{it} = y_{1i}$ if $\mathcal{T}_{it}=1$, with only one ever observed: $y_{it} = y_{0i} + \mathcal{T}_{it}(y_{1i}-y_{0i})$. Writing $\Delta_i = y_{1i}-y_{0i}$ for the individual causal effect, identifying "the" effect of a policy requires two things: **defining the target parameter**, and **finding a counterfactual** — a stand-in for the unobserved potential outcome.

## Three evaluation parameters

Because $\Delta_i$ can vary across individuals, several distinct population summaries are in use, all developed further in [Rubin's causal model](../causal-inference-foundations/rubins-causal-model.md):

$$\Delta^{ATE} = \mathbb{E}(y_{1i}-y_{0i}) \qquad\qquad \Delta^{ATT} = \mathbb{E}(y_{1i}-y_{0i}\mid \mathcal{T}_i=1) \qquad\qquad \Delta^{LATE} = \mathbb{E}(y_{1i}-y_{0i}\mid \mathcal{T}_{1i}-\mathcal{T}_{0i}>0)$$

**ATE** averages the effect over the whole population; **ATT** averages it only over those who actually received treatment; **LATE**, as in [IV with heterogeneous effects](../instrumental-variables/weak-instruments-and-iv-warnings.md), averages it only over compliers — those whose treatment status responds to an instrument.

## Why the target parameter changes the counterfactual problem needed

Estimating **ATT** requires only a proxy for $\mathbb{E}(y_{0i}\mid\mathcal{T}_i=1)$ — the counterfactual untreated outcome for those who were actually treated. Estimating **ATE** requires, in addition, a proxy for $\mathbb{E}(y_{1i}\mid\mathcal{T}_i=0)$ — the counterfactual treated outcome for those who were not. ATT is therefore a strictly easier target: it does not require knowing what would have happened to the untreated group *had they been treated*, only what would have happened to the treated group had it *not* been treated. This asymmetry is why so much of applied policy evaluation targets ATT rather than ATE — it demands one fewer unobservable counterfactual.

## Example

Five individuals with hypothetical potential outcomes $(y_{0i}, y_{1i})$: $(3,5), (2,5), (5,4), (2,7), (1,2)$, with treatment status $\mathcal{T}_i = (0,1,1,0,1)$. Only the outcome matching each individual's actual $\mathcal{T}_i$ is ever observed — $(3, 5, 4, 2, 2)$ — the rest ($5, 2, 5, 7, 1$, shown in red in the source table) are pure counterfactuals. Averaging $\Delta_i = y_{1i}-y_{0i}$ over all five gives $\widehat{ATE} = (2+3-1+5+1)/5 = 2$; averaging only over the treated ($i=2,3,5$) gives $\widehat{ATT} = (3-1+1)/3 = 1$ — the same divergence between population-wide and treated-subpopulation effects already seen in [potential outcomes and the naive estimator](../causal-inference-foundations/potential-outcomes-and-the-naive-estimator.md), here made numerically explicit. The rest of the toolkit developed in this vault — [difference-in-differences](../difference-in-differences/00-overview.md), [unconfoundedness methods](../unconfoundedness-methods/00-overview.md), [regression discontinuity](../regression-discontinuity/00-overview.md), [instrumental variables](../instrumental-variables/00-overview.md) — is best understood as a set of different strategies for supplying the missing counterfactual these parameters require.

A fourth parameter, the **average treatment effect on the untreated (ATU)**, $\mathbb{E}(y_{1i}-y_{0i}\mid\mathcal{T}_i{=}0)$, completes the trio Cunningham (2021, Ch.4) uses in his own SDO decomposition (see [potential outcomes and the naive estimator](../causal-inference-foundations/potential-outcomes-and-the-naive-estimator.md)): $ATE$ is always the treatment-share-weighted average of $ATT$ and $ATU$, $ATE = \pi\cdot ATT + (1-\pi)\cdot ATU$. The three coincide ($ATE=ATT=ATU$) exactly under the "equal gain" property — homogeneous treatment effects, or effects uncorrelated with treatment status — which is also precisely the condition under which the choice of target parameter stops mattering for applied work.

*Source: Cunningham (2021), Ch.4.*
