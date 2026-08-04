---
title: The ATT under the CIA
source: "Econ 2b, Ch.5 Estimation under Unconfoundedness, §Other Estimands: ATT"
status: enriched
tags:
  - att
  - conditional-independence-assumption
  - heterogeneous-treatment-effects
prerequisites:
  - unconfoundedness-methods/nonparametric-identification-under-cia
  - treatment-effects/average-treatment-effect-and-att
---
## Identification

$$\tau_{ATT} = \mathbb{E}[Y_i(1)-Y_i(0)\mid D_i{=}1]$$

Under unconfoundedness:

$$\mathbb{E}[Y_i(1)-Y_i(0)\mid D_i{=}1] = \mathbb{E}\Big[\mathbb{E}[Y_i\mid X_i,D_i{=}1] - \mathbb{E}[Y_i\mid X_i,D_i{=}0] \,\Big|\, D_i{=}1\Big]$$

**Proof sketch.** Iterated expectations conditions on $X_i$ within the treated subpopulation; the CIA is used to replace $\mathbb{E}[Y_i(0)\mid X_i,D_i{=}1]$ (a counterfactual, since $Y_i(0)$ is never observed for the treated) with $\mathbb{E}[Y_i(0)\mid X_i,D_i{=}0]$ (observed); consistency then converts both potential-outcome expectations into observed-outcome expectations. This is exactly the same regression-adjustment logic used for the [ATE](../unconfoundedness-methods/nonparametric-identification-under-cia.md), but the outer average is taken **only over the treated**, using the treated units' own covariate distribution as the weighting scheme rather than the full population's.

## When ATT and ATE diverge

They coincide only when effects are homogeneous, or when the treated subpopulation's covariate distribution happens to match the overall population's. In general, if treatment effects are heterogeneous **and** the treated group differs systematically in covariates from the untreated (which is, after all, exactly the scenario unconfoundedness is invoked to handle), ATT and ATE differ. ATT is often the more directly policy-relevant quantity when the question is retrospective — "what was the effect on those we actually treated?" — rather than "what would the effect be on a randomly chosen member of the population?"

The LaLonde/NSW literature targets ATT specifically for exactly this reason: the policy question of interest — "did this job-training program help the disadvantaged workers who actually enrolled?" — is inherently about the treated population, a group that (by the program's own eligibility rules) differs systematically from the general population on covariates like prior earnings and employment history. Reporting an ATE for the general population would answer a different, less policy-relevant question, since most members of the general population were never eligible for or interested in the program in the first place.

*Source: Cunningham (2021), Ch.5.*
