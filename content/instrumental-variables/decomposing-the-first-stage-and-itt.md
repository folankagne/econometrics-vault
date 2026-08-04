---
title: Decomposing the First Stage and the ITT by Compliance Type
source: "Econ 2b, Ch.3 Instrumental Variables, §Heterogeneity Revisited: Local Average Treatment Effects (LATEs)"
status: enriched
tags:
  - late
  - compliance-types
  - first-stage
  - intention-to-treat
prerequisites:
  - instrumental-variables/compliers-always-takers-never-takers-defiers
  - instrumental-variables/iv-as-a-source-of-exogenous-variation
---
## IVs as simple experiments

An instrumental-variables design can be read as a simple experiment: two counterfactual worlds, assignment to treatment ($Z{=}1$) or control ($Z{=}0$); individuals then decide whether to actually participate ($D{=}1$) or not ($D{=}0$). Comparing treatment and control on assignment alone yields two causal effects: the **first stage** (effect of $Z$ on $D$) and the **reduced form**, a.k.a. **intention-to-treat (ITT)** (effect of $Z$ on $Y$).

> **Wording matters here.** $D$ is variously called treatment status, enrollment, participation, take-up, or effective treatment. $Z$ is assignment, assigned treatment, or encouragement. "Treatment" alone is ambiguous — because of the link to randomized experiments, "the treatment group" conventionally means those *assigned* to treatment ($Z_i{=}1$), not necessarily those *actually* treated ($D_i{=}1$).

## The first stage identifies the complier share

Using the four [compliance types](../instrumental-variables/compliers-always-takers-never-takers-defiers.md) — compliers, always-takers, never-takers, defiers — under monotonicity (no defiers), the first-stage effect is exactly the share of compliers in the population:

$$\Delta_Z \equiv \mathbb{E}(D\mid Z{=}1)-\mathbb{E}(D\mid Z{=}0) = \Pr(\text{Complier})$$

Always-takers have $D{=}1$ regardless of $Z$; never-takers have $D{=}0$ regardless of $Z$; only compliers actually change treatment status in response to the instrument, so only they contribute to the gap between the $Z{=}1$ and $Z{=}0$ treatment rates.

## The ITT is proportional to the complier share and the complier effect

The reduced form, $\text{ITT} = \mathbb{E}(Y\mid Z{=}1)-\mathbb{E}(Y\mid Z{=}0)$, reflects a causal chain: encouragement $Z$ pushes compliers into treatment, and treatment $D$ affects their outcomes. Always-takers and never-takers contribute *zero* to this gap — their treatment status, and hence (under exclusion) their outcome, does not respond to $Z$ at all: $\Delta_{AT} = \Delta_{NT} = 0$. Only compliers respond, so:

$$\text{ITT} = \Pr(\text{Complier}) \times \Delta_C$$

where $\Delta_C$ is the average treatment effect *among compliers*. Rearranging, the complier-specific effect is recovered by rescaling the reduced form by the inverse of the complier share:

$$\Delta_C = \frac{\text{ITT}}{\Pr(\text{Complier})} = \frac{\mathbb{E}(Y\mid Z{=}1)-\mathbb{E}(Y\mid Z{=}0)}{\mathbb{E}(D\mid Z{=}1)-\mathbb{E}(D\mid Z{=}0)}$$

— exactly the [Wald estimator](../instrumental-variables/wald-estimator.md) formula, now given an explicit compliance-type interpretation: IV does not estimate an economy-wide average effect, it estimates the average effect **for compliers specifically**, obtained by dividing the reduced form by the first stage.

## The JTPA training experiment

Angrist and Pischke's (2009, §4.4.3) running illustration of this decomposition is the JTPA (Job Training Partnership Act) randomized evaluation: 60% of those *assigned* to job training ($Z_i=1$) actually enrolled, while about 2% of the control group ($Z_i=0$) received training through some other channel. The first stage — $\Delta_Z \approx 0.60-0.02 = 0.58$ — is the complier share: 58% of the sample are compliers who take training if and only if assigned to it. The ITT compares earnings by *assignment* regardless of actual take-up, and dividing it by $0.58$ rescales it up to the effect specifically on those whose training status was determined by assignment — exactly compensating for the fact that the raw ITT is diluted by the roughly 42% of the sample (never-takers, plus a small always-taker share) whose behavior did not respond to assignment at all.

*Source: Angrist & Pischke (2009), §4.4.3, Table 4.4.1.*
