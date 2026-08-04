---
title: Weak Instruments and the Limits of IV
source: "Econ 1, Lecture Notes, §Identification through instruments: some warnings"
status: enriched
tags:
  - weak-instruments
  - late
  - heterogeneous-treatment-effects
prerequisites:
  - instrumental-variables/two-stage-least-squares
  - instrumental-variables/compliers-always-takers-never-takers-defiers
---
## Weak instruments

An instrument is **weak** when $\mathbb{E}(\mathbf{z}_i'\mathbf{x}_i) \to \mathbf{0}$: too little correlation between instrument and endogenous regressor to pin down the parameter reliably — the IV analogue of near-collinearity in OLS. With a single endogenous regressor, weak-instrument strength can be checked via a joint-significance test on the [first-stage](../instrumental-variables/continuous-iv-and-the-first-stage.md) equation.

A tempting fix — adding more instruments — is double-edged. As more and more instruments are added to a [2SLS](../instrumental-variables/two-stage-least-squares.md) specification, the fitted first-stage values $\hat{\mathbf{x}}_K$ increasingly approximate $\mathbf{x}_K$ itself, and the estimator drifts back toward plain (biased) OLS — precisely the endogenous variation IV was meant to filter out risks being reintroduced through the back door.

## Heterogeneity: IV identifies a LATE, not necessarily the ATE

In the just-identified univariate case, $b_K = \text{Cov}(y_i,z_i^e)/\text{Cov}(x_i,z_i^e)$ measures how $x$ and $y$ move *in response to the instrument* — and IV identification, per [compliers, always-takers, never-takers, and defiers](../instrumental-variables/compliers-always-takers-never-takers-defiers.md), is driven entirely by **compliers**. If the parameter of interest is homogeneous across the population, this is immaterial. But if effects are heterogeneous — e.g. $\mathbb{E}(b_{iK}\mid i \in \text{Compliers}) \neq \mathbb{E}(b_{iK}\mid i \in \text{High education people})$ — then IV does not recover the population average treatment effect; it recovers a **Local Average Treatment Effect (LATE)**, specific to whichever compliance group the chosen instrument happens to select. Changing the instrument can change which subpopulation the estimate describes, even when both instruments are individually valid.

## The deeper warning: identification is not the whole question

Beyond these technical caveats lies a more fundamental one. Identification strategies are tools in service of a research question, not ends in themselves — hunting for an available instrument and only afterward deciding what to study inverts the proper order of empirical work. As Deaton (2010) puts it, this risks becoming a matter of "look[ing] for an object where the light is strong enough to see; we have control over the light, but choose to let it fall where it may, and then proclaim that whatever it illuminates is what we were looking for all along." Heckman (2021) makes the same point more bluntly: economics has developed "a professional obsession... to obtain 'causal effects,' even if the effects being identified are without social significance and/or economic meaning." Unbiasedness (exogeneity) is only part of what makes an empirical estimate useful — the identity and relevance of the parameter actually being estimated matters just as much.

Angrist and Pischke (2009, §4.4) frame the heterogeneity point in terms of two distinct validity concepts worth keeping apart: **internal validity** (did the design correctly uncover a causal effect *for the population actually studied*?) and **external validity** (does the finding generalize elsewhere?). A well-executed IV design — like the draft lottery — has a strong claim to internal validity, but its LATE-driven nature limits external validity almost by construction: LATE describes compliers with the specific instrument used, and "there is nothing in IV formulas to explain *why*" an effect holds for a broader population — extrapolation requires an economic theory of the mechanism, not just a valid instrument.

*Source: Angrist & Pischke (2009), §4.4.1; Deaton (2010); Heckman (2021).*
