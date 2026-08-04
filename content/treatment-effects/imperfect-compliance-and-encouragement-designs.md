---
title: Imperfect Compliance and Encouragement Designs
source: "Econ 2b, Ch.2 Rubin's Causal Model and Randomized Experiments, §Imperfect Compliance"
status: enriched
tags:
  - imperfect-compliance
  - encouragement-design
  - intention-to-treat
  - wald-estimator
prerequisites:
  - treatment-effects/randomized-controlled-trials
  - instrumental-variables/iv-as-a-source-of-exogenous-variation
---
## Assignment versus treatment

Participants often cannot be forced to comply with their assigned treatment status — an **encouragement design** randomizes *encouragement* to be treated rather than treatment itself, which is simpler to implement and often the only ethical or practical option. This requires two separate variables: $Z_i$, the randomized **assignment**, and $D_i$, the actual (potentially endogenous) **treatment** received. In the STAR experiment, roughly 10% of students changed class type mid-study at teacher or parental request — so $Z \neq D$ even though $Z$ was randomly assigned.

## Assignment as an instrument

With homogeneous effects, $y=\alpha+\beta D+u$, but $u$ is no longer mean-independent of $D$ once selection into actual treatment is possible. The random assignment $Z$, however, satisfies the [IV conditions](../instrumental-variables/iv-identification-conditions.md): **relevance**, $\text{Cov}(Z,D)\neq 0$ (unless encouragement had literally no effect on take-up), and the **exclusion restriction** — $Z$ is purely random, so uncorrelated with any pre-treatment cause of $y$, and (absent an experimenter effect) has no direct effect on $y$ except through $D$.

> A concrete threat to exclusion: control-group individuals who feel discouraged by "losing the lottery" might change behavior in ways that affect the outcome directly, independent of whether they actually receive treatment — violating exclusion even though $Z$ was properly randomized.

## The Wald estimator, derived

$$\hat\beta_{Wald} = \frac{\bar y^{Z=1}-\bar y^{Z=0}}{\bar D^{Z=1}-\bar D^{Z=0}}$$

**Derivation.** Take expectations of $y=\alpha+\beta D+u$ conditional on $Z$: $\mathbb{E}[y\mid Z]=\alpha+\beta\mathbb{E}[D\mid Z]+\mathbb{E}[u\mid Z]$. Since $Z$ is randomly assigned, $Z\perp u$, so $\mathbb{E}[u\mid Z{=}1]=\mathbb{E}[u\mid Z{=}0]$. Differencing the $Z{=}1$ and $Z{=}0$ equations cancels these terms:

$$\mathbb{E}[y\mid Z{=}1]-\mathbb{E}[y\mid Z{=}0] = \beta\big(\mathbb{E}[D\mid Z{=}1]-\mathbb{E}[D\mid Z{=}0]\big)$$

so $\beta = \big[\mathbb{E}(y\mid Z{=}1)-\mathbb{E}(y\mid Z{=}0)\big]\big/\big[\mathbb{E}(D\mid Z{=}1)-\mathbb{E}(D\mid Z{=}0)\big]$, and replacing population means with sample means gives the Wald estimator — the numerator is the **reduced-form** effect of $Z$ on $y$, the denominator the **first-stage** effect of $Z$ on $D$.

## Intention-to-treat

The reduced-form quantity $\mathbb{E}[y\mid Z{=}1]-\mathbb{E}[y\mid Z{=}0]$ is itself a parameter of independent interest: the **intention-to-treat (ITT)** effect — the effect of *offering* or *assigning* treatment, as opposed to the effect of actually *receiving* it. Policymakers frequently control assignment (whether to offer a program, send a reminder, provide a voucher) but not take-up, which makes ITT often the policy-relevant parameter in its own right, not merely a stepping stone to the ATE. If compliance is low, a large underlying treatment effect can still translate into a small ITT — directly relevant for cost-benefit calculations at the scale a policy could realistically be implemented.

The JTPA job-training evaluation, already discussed for its [LATE interpretation](../instrumental-variables/late-theorem.md), is the standard textbook illustration of this design (Angrist & Pischke, 2009, §4.4.3): assignment to the training offer ($Z$) was randomized, but only 60% of those assigned actually enrolled while roughly 2% of the control group obtained training anyway — an encouragement design with substantial one-sided non-compliance, exactly the setting this entry's Wald-estimator derivation is built for. The ITT there (the effect of *being offered* training) understates the effect of training itself roughly in proportion to the 58-percentage-point first-stage gap, which is precisely why program evaluators report both ITT and the Wald/LATE-rescaled estimate rather than either alone.

*Source: Angrist & Pischke (2009), §4.4.3.*
