---
title: Marshall's Maxim and the All-Causes Model
source: "Econ 2b, Ch.1 Traditional Approach to Causality, §The All-Causes Model"
status: enriched
tags:
  - all-causes-model
  - ceteris-paribus
  - marshalls-maxim
  - individual-causal-effect
prerequisites:
  - foundations/what-is-econometrics
---
## The all-causes model

Heckman (2005) locates the starting point of the econometric approach to causality in specifying an economic model relating an outcome to **all** of its determinants — the **all-causes model**:

$$y = f(X_1, X_2, \dots, X_K)$$

Two features define it: **completeness** (observing every $X$ and knowing $f$ would pin down $y$ exactly) and **unidirectional causality** (causation runs from the $X$'s to $y$; if $y$ also caused some $X$, a richer simultaneous-equations model would be needed). As Heckman puts it: "A model is in the mind. As a consequence, causality is in the mind" — a causal statement only has content relative to a fully articulated model of counterfactuals, not as a free-floating claim about "what caused what."

## Running example: an all-causes wage model

Combining human capital theory, social-reproduction theory, and search-and-matching theory, log wages might be modeled as:

$$y \equiv \log(\text{wage}) = f(\text{edu}, \text{ability}, \text{origin}, \text{luck}, t)$$

where education and ability are human capital, family background (origin) is social capital, luck captures idiosyncratic match quality, and $t$ captures time-varying factors (business cycle, experience).

## Limits of all-causes models

In the social sciences, all-causes models face two kinds of limits: **limits to theory** (competing accounts of the mechanism — does education raise wages via signaling or via skill accumulation? — and the difficulty of combining mechanisms into one integrated model) and **limits to observation** (some causes, like luck, may be entirely unobservable; others, like innate ability, only imperfectly proxied, e.g. by an IQ score). Because of these limits, all-causes models are **not meant to be estimated**; they serve as the theoretical *benchmark* against which estimated models — which necessarily include only a subset of causes — are assessed.

> This structural, theory-first stance contrasts with a more design-based empirical tradition (developed later in this vault). Historically it is associated with the *Keynes–Tinbergen debate*: Keynes argued that valid econometric inference requires a complete list of relevant factors — a condition he considered essentially unattainable — and that theoretical reasoning should take precedence over data-driven work.

## Ceteris paribus and the individual causal effect

Marshall's (1890) **ceteris paribus** principle defines the causal effect of one cause $X_1$ as the change in $y$ from changing $X_1$ alone, holding every other cause $X_2,\dots,X_K$ fixed. The **individual causal effect** of moving education from 10 to 11 years for individual $i$ is:

$$\Delta_i = f(11, \text{ability}_i, \text{origin}_i, \text{luck}_i, t) - f(10, \text{ability}_i, \text{origin}_i, \text{luck}_i, t)$$

No individual is ever observed simultaneously at 10 and 11 years of education — so no dataset, of any size, can reveal $\Delta_i$: **individual causal effects are not identified**, exactly the [fundamental problem of causal inference](../causal-inference-foundations/rubins-causal-model.md) encountered again later under the potential-outcomes framework. This non-identification is what motivates turning to [average causal effects](../causal-inference-foundations/average-causal-effects.md) and to the broader [parameter/estimand/estimator](../causal-inference-foundations/parameter-estimand-and-estimator.md) distinction instead.

Cunningham (2021, Introduction) opens his own treatment of causality with the identical warning against conflating correlation and causation, using the "optimization makes everything endogenous" framing: because economic agents are constantly, purposefully choosing the very variables researchers want to treat as regressors — how much education to acquire, whether to take a job, where to live — almost every observational regressor is entangled with the agent's own optimization problem, which is exactly the mechanism by which $X_1$ ends up correlated with the omitted causes folded into an all-causes model's error term. This is the applied, non-technical restatement of why *ceteris paribus* variation almost never arises naturally in economic data, and why the identification strategies developed throughout the rest of this vault exist at all.

*Source: Cunningham (2021), Introduction, "Optimization Makes Everything Endogenous"; Heckman (2005).*
