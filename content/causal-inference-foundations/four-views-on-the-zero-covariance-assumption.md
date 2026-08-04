---
title: "The Mathematician, the Randomista, the Theorist, and the Computer Scientist"
source: "Econ 2b, Ch.1 Traditional Approach to Causality, §The Mathematician, the Randomista, the Theorist, and the Computer Scientist"
status: enriched
tags:
  - zero-covariance
  - design-based-econometrics
  - structural-econometrics
  - prediction-vs-causality
prerequisites:
  - identification/zcm-and-zc-assumptions
---
Four distinct disciplinary postures toward the same equation, $y=\beta_0+\beta_1x+u$ with $\text{Cov}(x,u)=\mathbb{E}(u)=0$, illustrate how radically the *interpretation* of a regression coefficient depends on what is assumed about where the variation in $x$ comes from.

## The mathematician's view

The zero-covariance decomposition is **always** constructible, by definition: set $\beta_1 = \text{Cov}(x,y)/\text{Var}(x)$, $\beta_0 = \mathbb{E}(y)-\beta_1\mathbb{E}(x)$, and $u=y-\beta_0-\beta_1x$; one can then verify directly that $\text{Cov}(x,u)=0$ and $\mathbb{E}(u)=0$ hold automatically. The parameters exist and are unique — **identified**, in the narrow statistical sense — but nothing about this construction says what $\beta_1$ *means*.

## The randomista's view

If $x$ is randomized, $x\perp u$, so $\mathbb{E}(u\mid x{=}1)=\mathbb{E}(u\mid x{=}0)$, and:

$$\Delta \equiv \mathbb{E}(y\mid x{=}1)-\mathbb{E}(y\mid x{=}0) = \big[\beta_0+\beta_1+\mathbb{E}(u\mid x{=}1)\big] - \big[\beta_0+\mathbb{E}(u\mid x{=}0)\big] = \beta_1$$

This is **design-based econometrics**: causal effects come "for free" once randomization holds, with no need to speculate about the contents of $u$ at all.

## The theorist's view

Absent an experiment, theory can instead specify *what is in* $u$. If $y$ is wages, $x$ is education, and $u$ contains innate ability, theory suggests $\text{Cov}(x,u)>0$ (the more able study longer — "unto every one that hath shall be given"). The prescribed fix is to **control for ability** directly: $y=\beta_0+\beta_1\text{edu}+\beta_2\text{ability}+v$, restoring zero covariance for $v$. This is **structural econometrics**: identification through an explicit theoretical model of the confounder, rather than through design.

## The computer scientist's view

Remaining agnostic about causality altogether, the same regression can still be used for **prediction**: fit $\hat\beta_0,\hat\beta_1$ on a training sample, predict $\hat y = \hat\beta_0+\hat\beta_1x$, and evaluate the prediction's accuracy on a held-out validation sample. Here $\beta_1$ captures the *combined* effect of $x$ and every unobserved cause correlated with it — not causally interpretable, but that is beside the point for a purely predictive use case.

> The same regression coefficient can be a causal parameter, a structural parameter, or a purely predictive one — the mathematics never changes, but which interpretation is licensed depends entirely on assumptions about where the variation in $x$ originates, exactly the theme running through [ZCM/ZC](../identification/zcm-and-zc-assumptions.md) and every identification strategy in this vault.

The randomista's view maps directly onto Cunningham's (2021, Ch.4) independence assumption, $(y_1,y_0)\perp D$: it is precisely the condition that lets a simple difference in means recover the ATE without any structural model of what $u$ contains. Cunningham's Malawi HIV-testing field experiment (Thornton, 2008) is a clean real-world instance of the randomista's view in action — because cash incentives to learn one's HIV status were randomly assigned, the effect of *learning one's status* on subsequent condom purchases could be estimated by simple treatment-control comparison (later refined with IV), with no need for a theoretical account of who chooses to learn their status and why.

*Source: Cunningham (2021), Ch.4.*
