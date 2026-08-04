---
title: Sharpness of Bounds
source: "Econ 2b, Ch.8 Partial Identification, §Sharpness"
status: enriched
tags:
  - sharpness
  - identified-set
  - valid-bounds
prerequisites:
  - partial-identification/lee-bounds
---
## Valid versus sharp

For identified set $\Theta_I=[\theta_{lb},\theta_{ub}]$, a candidate interval $[\underline\theta,\overline\theta]$ is **valid** if $[\underline\theta,\overline\theta]\supseteq\Theta_I$ (it contains the true identified set — a safe but potentially loose statement), and **sharp** if $[\underline\theta,\overline\theta]=\Theta_I$ exactly (it equals the identified set — the tightest correct statement possible). Sharpness means every value inside the interval is actually achievable by *some* data-generating process consistent with the data and the maintained assumptions — nothing in a sharp interval is there "just in case."

Both [Horowitz-Manski](../partial-identification/horowitz-manski-bounds.md) and [Lee bounds](../partial-identification/lee-bounds.md) are sharp by construction: each endpoint corresponds to an explicit, internally consistent extreme scenario for the unobserved quantities (all non-respondents at $\bar y$ for the upper HM bound; all compliers at the lowest possible $Y(1)$ for the upper Lee bound).

## An example of bounds that are valid but not sharp

For the Lee estimand, a cruder (but still technically correct) interval: since $\mathbb{E}[Y(1)\mid\text{AT}]\in[\underline y,\bar y]$ trivially, and $\mathbb{E}[Y(0)\mid\text{AT}]=\mathbb{E}[Y\mid S{=}1,D{=}0]$ is point-identified,

$$\tau_{AT} \in \big[\underline y - \mathbb{E}[Y\mid S{=}1,D{=}0],\ \ \bar y - \mathbb{E}[Y\mid S{=}1,D{=}0]\big]$$

In the tutoring example this gives $[0-70,\,100-70]=[-70,30]$ — it does contain the true Lee interval $[0,10]$, so it is **valid**. But it is not **sharp**: no data-generating process consistent with the data and monotonicity actually produces, say, $\tau_{AT}=-50$; the true identified set is the strictly narrower $[0,10]\subsetneq[-70,30]$.

> Non-sharp bounds waste identifying power that the assumptions already paid for — if a sharp alternative exists (as it does here, via Lee's quantile-trimming argument), reporting the cruder, valid-but-not-sharp interval understates what the assumptions actually deliver.

Sharpness plays the same methodological role in partial identification that efficiency plays in point estimation (recall the [Gauss-Markov theorem](../ols-estimation/gauss-markov-theorem.md)): both ask, among the estimators/intervals consistent with the maintained assumptions, which one extracts the maximum information those assumptions actually license. Manski's broader research program treats deriving the sharp identified set — not merely *a* valid bound — as the central technical task of any partial-identification analysis, precisely because a non-sharp bound conflates two very different sources of uncertainty: genuine non-identification (which no amount of data resolves) and mere analytical slack (which a sharper derivation would remove).

*Source: Manski (1990); Lee (2009); Horowitz & Manski (2000).*
