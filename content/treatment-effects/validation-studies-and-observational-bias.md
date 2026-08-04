---
title: Validation Studies and the Reliability of Observational Methods
source: "Econ 2b, Ch.2 Rubin's Causal Model and Randomized Experiments, §Comparing Experimental and Observational Results"
status: enriched
tags:
  - validation-study
  - lalonde-study
  - observational-bias
  - external-validity
prerequisites:
  - treatment-effects/the-selectivity-problem
  - treatment-effects/randomized-controlled-trials
---
## What a validation study asks

A **validation study** uses an experiment as a credible benchmark, then asks: would standard observational methods, applied to a non-experimental comparison group, have recovered the same treatment effect?

## The LaLonde (1986) study

LaLonde used the National Supported Work (NSW) Demonstration — an RCT providing temporary employment for disadvantaged youth — and compared its experimental effect estimate against estimates from observational methods (OLS, difference-in-differences, Heckman selection correction) applied to external comparison groups built from PSID and CPS survey data. He found **large discrepancies**, which selection correction methods of the time could not close. Dehejia and Wahba (1999) later argued propensity-score matching could recover the experimental benchmark; Smith and Todd (2005) showed this conclusion was not robust to reasonable specification changes. LaLonde's underlying conclusion still stands for this program: no one has demonstrated a reliable way for observational methods to recover the correct causal effect — the experimental estimate remains the only fully credible benchmark.

## Bernard et al. (2024): a systematic reassessment

Using 44 RCTs with imperfect compliance from developing-country settings, Bernard et al. compare observational and experimental estimates directly, at scale. Three findings stand out: **observational bias is large** — even with modern machine-learning covariate adjustment; **its direction is unpredictable** — the observational estimate is not even reliably on the same *side* of zero as the experimental one, so no sign bound can be constructed; and **uncertainty compounds** — accounting honestly for the possibility of observational bias implies a minimum detectable effect of roughly $0.3\sigma$ *even with infinite sample size*, a floor driven by bias uncertainty rather than sampling variance. Their conclusion: "given current evidence, observational studies are uninformative about many programs that in truth have important effects."

## Combining experimental and observational data productively

Despite this, the two data types are not simply substitutes with one dominating the other — they can be combined. Two routes: estimating effects on outcomes absent from the experimental sample (e.g. long-run outcomes observed only administratively), via a **surrogacy** approach (using a short-term outcome as a stand-in) or an [experimental selection correction](../treatment-effects/experimental-selection-correction-estimator.md) approach; and using observational data to **extrapolate** an internally valid experimental result to new populations or settings, extending external validity beyond the original trial's sample.

> A brief methodological note on RCTs as a practice: their use is often defended on the grounds that experimentation is how causal claims have historically been most convincingly established, and that refusing to experiment when the answer is genuinely unknown amounts to refusing to learn. Critics counter that this reasoning obscures *who* typically learns from RCTs (often institutions in wealthy countries) versus *who* bears their risks (often participants in the Global South) — a tension visible, for instance, in the unequal global rollout of COVID-19 vaccine trials and supply. This vault does not take a position on the debate; it is flagged here because it materially shapes how, and on whom, the methods in this vault get applied in practice.

## A medical parallel: hormone replacement therapy

Angrist and Pischke (2009, §2.2) cite a medical validation study with the same structure as LaLonde's: the Nurses' Health Study, a large observational survey, found *better* health outcomes among women taking hormone replacement therapy (HRT) — but a subsequent randomized trial (the Women's Health Initiative) found few benefits and, worse, revealed serious side effects invisible in the observational data. The parallel to LaLonde is exact: an observational comparison plausibly confounded by who *chooses* to take HRT (healthier, more health-conscious women) gave a systematically misleading answer, and only the randomized trial exposed both the absence of benefit and the presence of harm. Angrist and Pischke draw the general lesson that "it's easy to see why this comparison should not be taken at face value" whenever treatment uptake is itself a choice correlated with the outcome — precisely the [selectivity problem](../treatment-effects/the-selectivity-problem.md) formalized elsewhere in this folder, here shown to bite in domains (medicine) far removed from labor economics.

*Source: Angrist & Pischke (2009), §2.2; Hsia et al. (2006).*
