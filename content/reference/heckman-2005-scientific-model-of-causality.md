---
title: "Heckman (2005) — The Scientific Model of Causality"
source: "Econ 2b, Appendix, §Summary of Heckman (2005)"
status: enriched
tags:
  - structural-econometrics
  - marginal-treatment-effect
  - heckman
prerequisites:
  - causal-inference-foundations/marshalls-maxim-and-the-all-causes-model
  - unconfoundedness-methods/propensity-score-theorem
---
## Three interconnected arguments

Heckman's "The Scientific Model of Causality" argues, first, that **causality is a property of models, not of data** — a fully articulated model of counterfactuals produces a definition of causality as an automatic byproduct; there is no way to define causality "for free," independent of a model of how the phenomenon is generated. Second, that applied work conflates **three distinct tasks**. Third, that the estimators dominant in applied treatment-effect work rest on **implicit, often implausible assumptions about unobservables** that a structural approach makes explicit instead.

## Fixing versus conditioning

A crucial distinction: *fixing* an argument of the outcome function $y(s) = g_s(x,u_s)$ differs from *conditioning* on it, unless every cause is accounted for. Regression gives $\mathbb{E}(Y\mid X) = X\beta + \mathbb{E}(U\mid X)$, which equals the causal quantity $X\beta$ only when $\mathbb{E}(U\mid X)=0$ — exactly [ZCM](../identification/zcm-and-zc-assumptions.md). Heckman's charge: the statistical approach conflates fixing with conditioning, producing "spurious causal effects" whenever this equivalence silently fails.

## Three tasks, and three policy questions

The literature routinely collapses: (1) **defining** the counterfactuals (a theory problem), (2) **identifying** parameters from hypothetical population data (a mathematical problem), and (3) **identifying** parameters from real, finite data (a statistical problem) — treating identification as automatic once an estimator is chosen. The structural tradition keeps these separate: theory first, identification second, estimation third.

Correspondingly, three classes of policy question: $P_1$ (internal validity — the effect of a historical intervention where it was implemented), $P_2$ (external validity — forecasting a *known* intervention in a *new* setting), and $P_3$ (a genuinely *new* policy, never previously implemented). The statistical treatment-effect literature addresses only $P_1$, and incompletely at that, since it typically leaves the selection mechanism unmodeled. A structural approach, specifying outcomes as functions of primitive treatment characteristics, can in principle address all three.

## Comparing what different estimators actually assume

**Matching** requires $(Y_1,Y_0)\perp D\mid W$ — this implies ATE equals TT *at every $X$*, an "unattractive implication" in a Roy-style self-selection model where agents choose treatment based on anticipated (unobserved) gains $Y_1-Y_0$, which mechanically breaks conditional independence.

**Control functions** instead model $\mathbb{E}(U_1\mid X,Z,D{=}1)$ directly as $\mu_1(X)+K_1(P(X,Z))$ — allowing unobservables to remain related to $D$ *after* conditioning on $X$, at the cost of needing an exclusion restriction and separability. The conceptual contrast with matching: matching requires unobservables independent of $D$ given $X$; control functions require unobservables independent of the *instrument* $Z$ given $X$ — "one set of conditions does not imply the other."

**Conventional IV** identifies a causal effect only under separability plus $\mathbb{E}(U_0\mid P(X,Z),X)=\mathbb{E}(U_0\mid X)$ — under these, IV happens to identify the ATE (the effect for the marginal participant). **Local IV (LIV)** relaxes separability and identifies the **marginal treatment effect (MTE)** at each point of the propensity score:

$$\frac{\partial\mathbb{E}(Y\mid X,P(X,Z))}{\partial P(X,Z)} = \text{MTE}(X,P(X,Z),V{=}0)$$

The MTE framework is unifying: every estimator (OLS, matching, IV, [LATE](../instrumental-variables/late-theorem.md)) corresponds to a *different weighted average* of the same underlying MTE function — formalizing, in structural terms, the very reason "different instruments identify different parameters."

## Causal claims remain provisional

All causal inference rests on maintained, generally untestable assumptions — no purely empirical algorithm, including DAG-based methods, recovers causal effects in general without substantive theoretical input. The structural approach's advantage is not that it avoids assumptions, but that it makes them **explicit** and connects them to economic theory, where they can be scrutinized directly — as opposed to embedding equally strong assumptions implicitly in an estimator's construction while projecting an illusory appearance of assumption-free identification.

Read alongside the rest of this vault, Heckman's MTE framework is best understood as the formal skeleton behind a claim made repeatedly, in less technical language, throughout the treatment-effects and instrumental-variables material: that different identification strategies — OLS, matching, 2SLS, [LATE](../instrumental-variables/late-theorem.md) — are not competing estimates of one fixed population quantity, but distinct weighted averages of a single underlying MTE function, each strategy implicitly choosing its own weights through the specific comparison it constructs. Heckman's critique of the "treatment effect" literature is, in this sense, the theoretical justification for a design principle this vault applies pragmatically throughout: always ask *which* parameter an estimator identifies, not only *whether* it is unbiased for something.

*Source: Heckman (2005).*
