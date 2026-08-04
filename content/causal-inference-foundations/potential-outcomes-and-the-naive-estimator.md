---
title: Potential Outcomes and the Naive Estimator
source: "Econ 1, Lecture Notes, §The challenge of proper inference"
status: enriched
tags:
  - potential-outcomes
  - naive-estimator
  - selection-bias
  - missing-data
  - identifying-assumption
prerequisites:
  - foundations/what-is-econometrics
---
## A first pass at potential outcomes

Consider a toy world of five individuals $i = 1, \dots, 5$, each with a treatment status $\mathcal{T}_i \in \{0,1\}$ and potential outcomes $y_{1_i}$ (outcome if treated) and $y_{0_i}$ (outcome if not). The quantity of interest is the individual causal effect $\Delta_i = y_{1_i} - y_{0_i}$. This is the same construction developed more fully in [Rubin's causal model](../causal-inference-foundations/rubins-causal-model.md); here it is introduced from the estimation side, to see directly what a naive comparison of treated and untreated groups can and cannot recover.

Observational data delivers, for each individual, only **one** of the two potential outcomes — whichever corresponds to their actual treatment status. The other is a **counterfactual**: what would have happened to this same individual under the treatment status they did not experience. Formally, the observed outcome is:

$$y_i = y_{1_i}\mathcal{T}_i + y_{0_i}(1 - \mathcal{T}_i)$$

Since $\Delta_i$ requires both $y_{1_i}$ and $y_{0_i}$, and only one is ever observed, **individual causal effects cannot be measured from observational data**. This is a missing-data problem, not a sample-size problem: no amount of additional data on individual $i$ resolves it.

## Two issues that follow from non-identification

Not all is lost, but two distinct issues must be confronted:

- **Issue 1 — choosing a parameter.** If $\Delta_i$ itself is unobservable, its full distribution is unobservable too. What can be targeted instead is a well-defined summary, most commonly the population average $\mathbb{E}(\Delta_i) \equiv \Delta$.
- **Issue 2 — choosing an estimator.** Given a target parameter $\Delta$, an estimator must be proposed. The most direct candidate is the **naive estimator**: the difference between the mean outcome among the treated and the mean outcome among the untreated, $\hat{\Delta} = \bar{y}_{|\mathcal{T}=1} - \bar{y}_{|\mathcal{T}=0}$, whose expectation is $\mathbb{E}(\hat{\Delta}) = \mathbb{E}[y_{1_i} \mid \mathcal{T}=1] - \mathbb{E}[y_{0_i} \mid \mathcal{T}=0]$. Whether this equals $\Delta$ is exactly the open question.

## The identifying assumption: selection is ignorable

The data alone cannot say whether $\mathbb{E}(\hat{\Delta}) = \Delta$. An **identifying assumption** can. Suppose treatment status is unrelated to potential outcomes — treated and untreated individuals are, on average, identical — formally $y_{1_i}, y_{0_i} \perp \mathcal{T}_i$ ("selection is ignorable"). Then $\mathbb{E}[y_{0_i}\mid \mathcal{T}_i{=}1] = \mathbb{E}[y_{0_i}\mid \mathcal{T}_i{=}0] = \mathbb{E}[y_{0_i}]$ and likewise for $y_{1_i}$, so:

$$\mathbb{E}(\hat{\Delta}) = \mathbb{E}[y_{1_i}\mid\mathcal{T}_i{=}1] - \mathbb{E}[y_{0_i}\mid\mathcal{T}_i{=}1] = \mathbb{E}[y_{1_i}] - \mathbb{E}[y_{0_i}] = \mathbb{E}[\Delta_i] \equiv \Delta$$

Under this assumption, the naive estimator is informative about $\Delta$. But the assumption's plausibility cannot itself be tested empirically — like every identifying assumption encountered in this vault, it can only be judged using outside knowledge of how the data was generated, never verified from the data alone.

## Selection bias as a decomposition

Writing the observed outcome as a simple linear model, $y_i(\mathcal{T}_i) = a + b\mathcal{T}_i + u_i$, where $b$ is the true treatment effect and $u_i$ collects unobservables, the naive estimator's expectation decomposes as:

$$\mathbb{E}(\hat{\Delta}) = b + \underbrace{\mathbb{E}[u_i \mid \mathcal{T}=1] - \mathbb{E}[u_i \mid \mathcal{T}=0]}_{\mathcal{B}^S \ \text{(selection bias)}}$$

$\mathcal{B}^S$, the **selection bias**, measures how different treated and untreated individuals are on average, apart from treatment itself. If $\mathcal{B}^S > 0$ the naive estimator overstates the treatment effect; if $\mathcal{B}^S < 0$ it understates it. Selection is ignorable exactly when $\mathcal{B}^S = 0$, in which case the naive estimator is unbiased for $b$. This decomposition — true effect plus a bias term driven by non-random selection into treatment — recurs throughout the causal-inference toolkit developed later in this vault, from the [selectivity problem](../treatment-effects/the-selectivity-problem.md) in observational studies to the motivation for randomized experiments.

## The full three-term decomposition, and a numerical illustration

Cunningham (2021, Ch.4) derives a sharper version of this same decomposition once treatment effects are allowed to be heterogeneous. Writing the **simple difference in outcomes (SDO)** as $\frac{1}{N_T}\sum_i(y_i\mid D_i{=}1) - \frac{1}{N_C}\sum_i(y_i\mid D_i{=}0)$, it equals *three* terms rather than two:

$$SDO = \underbrace{\mathbb{E}[y_1]-\mathbb{E}[y_0]}_{ATE} + \underbrace{\mathbb{E}[y_0\mid D{=}1]-\mathbb{E}[y_0\mid D{=}0]}_{\text{selection bias}} + \underbrace{(1-\pi)(ATT-ATU)}_{\text{heterogeneous treatment effect bias}}$$

where $\pi$ is the treated share of the population and $ATU$ is the average effect on the untreated. Cunningham's worked chemo-vs-surgery numerical example (a "perfect doctor" who assigns each patient to whichever treatment benefits them personally) makes the three-way split concrete: $SDO = -0.4$, decomposing into $ATE=0.6$, selection bias $=-4.8$, and heterogeneous-effect bias $=+3.8$ — a case where the naive comparison is not merely biased in magnitude but has the **wrong sign** relative to a genuinely positive average effect. This is the potential-outcomes generalization of the two-term selection-bias story above: with homogeneous effects ($ATT=ATU$), the third term vanishes and the decomposition collapses back to $SDO = ATE + \mathcal{B}^S$ exactly as derived here.

*Source: Cunningham (2021), Ch.4, "Simple Difference in Outcomes."*
