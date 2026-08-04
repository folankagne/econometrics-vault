---
title: The Difference-in-Differences Regression Representation
source: "Econ 1, Lecture Notes, §Difference Estimators › The Difference-in-Difference estimator"
status: enriched
tags:
  - difference-in-differences
  - interaction-term
  - selection-bias
  - simultaneity-bias
prerequisites:
  - difference-in-differences/cross-section-and-before-after-estimators
  - difference-in-differences/standard-difference-in-differences
---
## DiD as a single regression with an interaction term

Observing both treated and untreated individuals ($\mathcal{T}_{i\bar{t}} \in \{0,1\}$) at two time periods ($P_{it} \in \{0,1\}$ for before/after) lets both failure modes of the [cross-section and before-after estimators](../difference-in-differences/cross-section-and-before-after-estimators.md) be controlled for at once, via a single regression with an interaction term:

$$y_{it} = \alpha_0 + \mathcal{T}_{it}\underbrace{\gamma_T}_{\text{selection}} + P_{it}\underbrace{\gamma_P}_{\text{simultaneity}} + P_{it}\mathcal{T}_{it}\underbrace{\gamma_{PT}}_{\text{difference-in-differences}} + v_{it}$$

Taking expectations across the four (treatment status $\times$ period) cells shows exactly what each coefficient captures:

$$\mathbb{E}(y_{it}) = \underbrace{\mathbb{E}(y_{it}\mid \mathcal{T}{=}0,P{=}0)}_{\alpha_0} + \mathcal{T}_{it}\underbrace{\big[\mathbb{E}(y_{it}\mid \mathcal{T}{=}1,P{=}1)-\mathbb{E}(y_{it}\mid \mathcal{T}{=}0,P{=}1)\big]}_{\gamma_T} + P_{it}\underbrace{\big[\mathbb{E}(y_{it}\mid \mathcal{T}{=}0,P{=}1)-\mathbb{E}(y_{it}\mid \mathcal{T}{=}0,P{=}0)\big]}_{\gamma_P}$$
$$+\ P_{it}\mathcal{T}_{it}\underbrace{\Big[\big(\mathbb{E}(y_{it}\mid \mathcal{T}{=}1,P{=}1)-\mathbb{E}(y_{it}\mid \mathcal{T}{=}0,P{=}1)\big) - \big(\mathbb{E}(y_{it}\mid \mathcal{T}{=}1,P{=}0)-\mathbb{E}(y_{it}\mid \mathcal{T}{=}0,P{=}0)\big)\Big]}_{\gamma_{PT}}$$

$\gamma_T$ alone would be the (potentially selection-biased) cross-section comparison; $\gamma_P$ alone would be the (potentially simultaneity-biased) before-after comparison. The **interaction coefficient** $\gamma_{PT}$ is the difference *of these two differences* — it purges both the average treatment/control gap and the average pre/post trend, isolating what changed for the treated group beyond what changed for the untreated group and beyond what the treated group's own pre-existing gap already implied.

## Equivalence with the means-difference estimator

The OLS estimate of $\gamma_{PT}$ is numerically identical to the mean-based [difference-in-differences estimator](../difference-in-differences/standard-difference-in-differences.md):

$$\hat{\gamma}_{PT} = \hat{\Delta}^{DD} = \big(\hat{\Delta}^{BA}_{\mathcal{T}=1} - \hat{\Delta}^{BA}_{\mathcal{T}=0}\big) = \big(\hat{\Delta}^{C}_{\bar{t}} - \hat{\Delta}^{C}_{\underline{t}}\big)$$

— the before-after estimator's difference across treatment groups, or equivalently the cross-section estimator's difference across time periods. Both routes to the same number make explicit that DiD is simultaneously "differencing away" selection bias (via the cross-section-over-time comparison) and simultaneity bias (via the before-after-across-groups comparison).

## Recovering the parallel trends condition

$$\mathbb{E}(\hat{\Delta}^{DD}) = \Delta^{ATT} + \Big[\mathbb{E}(u_{i\bar{t}}\mid\mathcal{T}{=}1)-\mathbb{E}(u_{i\bar{t}}\mid\mathcal{T}{=}0)\Big] - \Big[\mathbb{E}(u_{i\underline{t}}\mid\mathcal{T}{=}1)-\mathbb{E}(u_{i\underline{t}}\mid\mathcal{T}{=}0)\Big]$$

$\hat{\Delta}^{DD}$ is unbiased for $\Delta^{ATT}$ exactly when the bracketed terms cancel — when the treatment/control gap in the noise is the *same* before and after treatment. This is the regression-based restatement of the [parallel trends assumption](../difference-in-differences/standard-difference-in-differences.md): the identifying claim is not that treated and untreated groups look alike in levels, but that whatever gap existed between them would have stayed constant absent treatment.

## Sensitivity to functional form: levels versus logs

De Chaisemartin (2021, Ch.11) flags a subtlety that this linear regression representation obscures but that matters enormously in practice: the parallel trends assumption is **not scale-invariant** — it can hold for $Y_{it}$ in levels while failing for $\ln(Y_{it})$, or vice versa, since "the mean outcome would have grown by the same amount" and "the mean outcome would have grown by the same percentage" are different, generally incompatible claims. His own example: if a treatment group's untreated mean would have risen from 100 to 150 (a $+50$ level, or a $+50\%$ change) while a control group's rises from 50 to 100 (a $+50$ level, but a $+100\%$ change), parallel trends holds exactly in levels but is badly violated in logs. Applied DiD papers whose results flip sign or significance between a levels and a logs specification — his cited example is Meyer, Viscusi & Durbin (1995) on workers' compensation and injury duration — are often silently running into exactly this sensitivity, which is part of why de Chaisemartin recommends Athey and Imbens's (2006) scale-invariant **changes-in-changes** estimator as a robustness check whenever treatment and control groups differ substantially in their period-0 outcome levels.

*Source: de Chaisemartin (2021), Ch.11, §11.1.1; Meyer, Viscusi & Durbin (1995); Athey & Imbens (2006).*
