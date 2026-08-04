---
title: "The First-Differenced Estimator, Revisited for T > 2"
source: "Wooldridge (2016), Ch.13"
status: enriched
tags:
  - beyond-lectures
  - panel-data
  - first-differencing
  - strict-exogeneity
  - balanced-panel
prerequisites:
  - panel-data-methods/pooled-cross-sections-and-the-unobserved-effects-model
  - difference-in-differences/standard-difference-in-differences
---
## The two-period case, generalized

[Standard difference-in-differences](../difference-in-differences/standard-difference-in-differences.md) is the $T=2$ special case of a general **first-differenced (FD) estimator**: subtracting $y_{i,t-1} = \beta_0 + \beta_1x_{i,t-1,1}+\dots+a_i+u_{i,t-1}$ from $y_{it} = \beta_0+\beta_1x_{it1}+\dots+a_i+u_{it}$ cancels $a_i$ and the intercept exactly, leaving

$$\Delta y_{it} = \beta_1\Delta x_{it1} + \dots + \beta_k\Delta x_{itk} + \Delta u_{it}, \qquad t=2,\dots,T$$

Pooled OLS on this differenced equation, using all $T-1$ differenced observations per unit, is the FD estimator. Since the first period contributes no differenced observation, a balanced panel with $N$ units and $T$ periods yields $N(T-1)$ usable observations.

## Worked example: job training and firm scrap rates

Wooldridge's JTRAIN application illustrates the mechanics on a genuine multi-period panel (54 firms, 1987–1989, only 1988–1989 grants observed): differencing $\log(scrap)_{it} = \beta_0 + \delta_0y88_t + \beta_1grant_{it} + a_i + u_{it}$ gives $\Delta\log(scrap)_i = \delta_0 + \beta_1\Delta grant_i + \Delta u_i$ for $t=2$ (1988), since no firm received a grant in 1987 so $\Delta grant_i = grant_{i2}$ directly. The estimated effect on scrap rates is small and statistically indistinguishable from zero using levels ($\hat\beta_1=-0.739$, se $0.683$), but using $\log(scrap)$ the estimated effect is a much larger $-27.2\%$ [$\exp(-.317)-1$] with a marginally significant $t\approx-1.93$ — and pooled OLS on the same data (ignoring $a_i$ entirely) finds essentially nothing ($\hat\beta_1=0.057$, se $0.431$), evidence that firms with less-skilled (lower-productivity, higher-$a_i$) workers were more likely to receive a grant in the first place, exactly the endogeneity problem panel methods are built to solve.

## Extending to any T: time dummies and the estimation recipe

With $T>2$ periods, the model should generally include a separate intercept for each period (time dummies $d_2,\dots,d_T$) since they capture aggregate trends common to every unit — omitting them attributes secular change to whatever regressor happens to be trending too. After differencing, the equation becomes $\Delta y_{it} = \alpha_0 + \alpha_3d_{3t}+\dots+\alpha_Td_{Tt}+\beta_1\Delta x_{it1}+\dots+\Delta u_{it}$ for $t=2,\dots,T$, estimated by pooled OLS on the stacked differenced data. A subtle data-management point: if the differenced dataset is built incorrectly (failing to set $t=1$ observations to missing before differencing), the $t=1$ record for unit $i$ gets differenced against the $t=T$ record of unit $i-1$, producing a bogus observation — a mechanical bug worth checking for explicitly, not merely a theoretical caveat.

## What FD requires: strict exogeneity

Consistency of FD requires the explanatory variables to be **strictly exogenous** conditional on $a_i$: $\text{Cov}(x_{itj},u_{is})=0$ for *every* pair of periods $t,s$, not merely $t=s$. This rules out a lagged dependent variable among the regressors, and rules out any $x$ that reacts to a past shock in $u$ — a feedback pattern common in dynamic economic systems (e.g. a firm cutting future advertising after a bad sales shock). Wooldridge's example with the North Carolina crime-rate panel shows FD in action once time-varying probability-of-arrest, -conviction, and sentencing variables are properly differenced and interacted with year dummies: the resulting coefficient on $\Delta\log(prbarr)$ is $-0.327$ (heteroskedasticity-and-serial-correlation-robust se $0.056$) — a sizable, precisely estimated deterrent effect, once the unobserved county-level heterogeneity in reporting practices and enforcement culture ($a_i$) has been differenced away.

*Source: Wooldridge (2016), §§13-4–13-5, Examples 13.6–13.9.*
