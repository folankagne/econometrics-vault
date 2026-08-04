---
title: The Length of the Horowitz-Manski Bounds
source: "Econ 2b, Ch.8 Partial Identification, §Length of the Horowitz-Manski Bounds"
status: enriched
tags:
  - horowitz-manski-bounds
  - bound-width
  - non-response
prerequisites:
  - partial-identification/horowitz-manski-bounds
---
## Width of the marginal bounds

$$\overline\mu(d)-\underline\mu(d) = (\bar y-\underline y)\,P(S{=}0\mid D{=}d)$$

The bound on each potential mean widens in direct proportion to both the **support length** of $Y$ and the **non-response probability** in that arm. With zero attrition, the width is zero — the bounds collapse to a point, recovering ordinary point identification.

## Width of the ATE bounds

Since $\text{ATE}\in[\underline\mu(1)-\overline\mu(0),\,\overline\mu(1)-\underline\mu(0)]$:

$$\text{width} = \big[\overline\mu(1)-\underline\mu(0)\big]-\big[\underline\mu(1)-\overline\mu(0)\big] = (\bar y-\underline y)\big[P(S{=}0\mid D{=}1)+P(S{=}0\mid D{=}0)\big]$$

The intuition is transparent: bound width scales with **support length** times **total non-response mass across both arms**. Both must be small for HM bounds to be practically useful. When $Y$ is binary, support length is $1$, so width equals total non-response probability directly. In the test-score example: $\bar y-\underline y=100$, $P(S{=}0\mid D{=}1)+P(S{=}0\mid D{=}0)=0.2+0.4=0.6$, giving width $100\times0.6=60$ — exactly matching the computed $[-22,38]$ interval.

> **Why Lee bounds can do much better.** HM bound width scales with the *entire* support of $Y$; Lee bounds only involve the conditional distribution of $Y$ within $\{S{=}1,D{=}1\}$, trimmed at the $p_c$ and $1{-}p_c$ quantiles — a quantity that can stay small even when $Y$'s overall support is wide, as long as the *within-sample* variation is concentrated. This is precisely why Lee bounds beat HM bounds most dramatically when the outcome has a wide theoretical range but limited realized variation.

This width formula is also the practical reason attrition rates are reported so prominently in modern experimental economics: a referee or reader can compute, from the reported $P(S{=}0\mid D{=}d)$ figures alone, roughly how informative a paper's headline treatment-effect estimate *could* be under only the design's own randomization — without needing to run the full Horowitz-Manski calculation themselves. An experiment with 2% attrition in each arm can support a fairly tight worst-case bound; one with 30% attrition cannot, regardless of how large its point estimate's standard error looks.

*Source: Horowitz & Manski (2000).*
