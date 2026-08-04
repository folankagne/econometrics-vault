---
title: Partial Effects in Nonlinear Response Models
source: "Wooldridge (2016), §17-1d"
status: enriched
tags:
  - beyond-lectures
  - partial-effects
  - average-partial-effect
  - marginal-effects
  - logit
  - probit
prerequisites:
  - limited-dependent-variable-models/logit-and-probit-models
---
## Why a single coefficient no longer summarizes "the effect"

In $\mathbb{P}(y{=}1\mid\mathbf{x})=G(\beta_0+\mathbf{x}\boldsymbol\beta)$, the partial effect of a roughly continuous $x_j$ is $g(\beta_0+\mathbf{x}\boldsymbol\beta)\beta_j$ — a **scale factor** $g(\cdot)$ times the raw coefficient, and the scale factor itself depends on *every* regressor's value through the index $\mathbf{x}\boldsymbol\beta$. Unlike a linear model, there is no single number that is "the" effect of $x_j$; the effect varies across the population depending on where each individual sits in the distribution of the index.

## Two ways to build a single summary number

**Partial effect at the average (PEA).** Plug the sample averages $\bar{\mathbf{x}}$ into the scale factor: $g(\hat\beta_0+\bar{\mathbf{x}}\hat{\boldsymbol\beta})\hat\beta_j$ — the effect for a hypothetical "average" individual. Two problems limit this: for a binary regressor (e.g. $\overline{female}=.475$), "the average person" is a meaningless 47.5%-female construct; and for a regressor entering nonlinearly (a quadratic or a log), it is unclear whether to average the raw variable or the transformed one before plugging in.

**Average partial effect (APE), or average marginal effect (AME).** Instead average the *individual* scale factors across the whole sample: $n^{-1}\sum_ig(\hat\beta_0+\mathbf{x}_i\hat{\boldsymbol\beta})\cdot\hat\beta_j$. This sidesteps both PEA problems — no fictitious "average person" is ever constructed — and is generally the preferred summary in modern applied work. PEA and APE need not coincide, and can differ meaningfully when the sample is not concentrated near its own mean.

## Discrete regressors: use the exact probability difference

For a binary or otherwise discrete $x_k$ moving from $c_k$ to $c_k+1$, the correct partial effect is not a calculus approximation at all but the literal difference in fitted probabilities, averaged across the sample:

$$n^{-1}\sum_{i=1}^n\Big\{G\big[\hat\beta_0+\hat\beta_1x_{i1}+\dots+\hat\beta_k(c_k{+}1)\big] - G\big[\hat\beta_0+\hat\beta_1x_{i1}+\dots+\hat\beta_kc_k\big]\Big\}$$

For each individual $i$, this evaluates the predicted probability twice — once at each value of $x_k$, holding everything else at $i$'s own actual values — and averages the resulting differences. This is exactly the same **counterfactual-comparison logic** used to motivate [simultaneous equations models](../identification/simultaneity-bias.md) and, more broadly, the potential-outcomes framework throughout this vault: predict each unit under both states of the world, then average the individual differences, rather than trying to read an effect off a single derivative.

## Worked example: married women's labor force participation, APEs compared

Computing APEs for the LPM, logit, and probit models of labor-force participation (MROZ data) shows the three models' magnitudes converging closely once the nonlinear models' raw coefficients are properly scaled: the APE on `educ` is $.038$ (LPM), $.039$ (logit), $.039$ (probit); on `kidslt6` (number of children under six), $-.262$, $-.258$, $-.261$. This near-agreement is a common — though not universal — empirical pattern: nonlinear binary-response models and the LPM often tell a similar quantitative story once compared on a genuinely comparable footing (APEs, not raw coefficients), even though the LPM's constant-marginal-effect assumption is theoretically less appealing. Where the models diverge more visibly is at the *extremes* of the covariate distribution — plotting fitted participation probability against years of education, the LPM and probit curves cross near 11.5 years of schooling but diverge substantially at both very low and very high education levels, exactly where the LPM's linearity is most implausible and most likely to predict probabilities outside $[0,1]$.

*Source: Wooldridge (2016), §17-1d, Example 17.1, Table 17.2, Figure 17.2.*
