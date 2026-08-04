---
title: The Propensity Score Theorem
source: "Econ 2b, Ch.5 Estimation under Unconfoundedness, §Propensity Score Methods"
status: enriched
tags:
  - propensity-score
  - dimension-reduction
  - rosenbaum-rubin
prerequisites:
  - unconfoundedness-methods/nonparametric-identification-under-cia
---
## Definition

The **propensity score** is $p(x) = \Pr(D_i{=}1\mid X_i{=}x)$ — the probability of treatment given covariates.

## The Rosenbaum-Rubin theorem

If unconfoundedness holds conditional on the full covariate vector $X_i$, it also holds conditional on the **scalar** propensity score alone:

$$Y_i(1),Y_i(0)\perp D_i \mid X_i \quad\Longrightarrow\quad Y_i(1),Y_i(0)\perp D_i \mid p(X_i)$$

**Proof sketch.** It suffices to show $\Pr(D_i{=}1\mid Y_i(1),Y_i(0),p(X_i)) = p(X_i)$. Conditioning further on $X_i$ (which determines $p(X_i)$, so this is not extra information) and applying the law of iterated expectations, the CIA gives $\mathbb{E}[D_i\mid Y_i(1),Y_i(0),X_i] = \mathbb{E}[D_i\mid X_i] = p(X_i)$ — conditioning on the potential outcomes doesn't change this once $X_i$ is fixed — so averaging back over $X_i$ given $p(X_i)$ still yields $p(X_i)$. A second, similar computation confirms $\Pr(D_i{=}1\mid p(X_i)) = p(X_i)$ as well, together establishing the conditional independence.

> **Why this matters: dimension reduction.** $X_i$ may be high-dimensional; $p(X_i)$ is always a single scalar. Matching or conditioning on one number is far more tractable than matching on an entire covariate vector — this directly addresses the curse of dimensionality that plagues [nonparametric estimation](../unconfoundedness-methods/regression-and-kernel-based-estimation.md) with many covariates.

## Identification via the propensity score

Under CIA and overlap, the ATE is equally identified using $p(X_i)$ in place of $X_i$:

$$\mathbb{E}[Y_i(1)-Y_i(0)] = \mathbb{E}\Big[\mathbb{E}[Y_i\mid p(X_i),D_i{=}1] - \mathbb{E}[Y_i\mid p(X_i),D_i{=}0]\Big]$$

**Proof sketch.** Overlap at the $X_i$ level, $0<p(x)<1$, combined with the [balancing property](../unconfoundedness-methods/the-balancing-property.md) $\Pr(D_i{=}1\mid p(X_i))=p(X_i)$, gives overlap at the propensity-score level too: $0<\Pr(D_i{=}1\mid p(X_i))<1$. By the law of iterated expectations, $\mathbb{E}[Y_i(1)] = \mathbb{E}\big[\mathbb{E}[Y_i(1)\mid p(X_i)]\big]$; by the theorem above, $\mathbb{E}[Y_i(1)\mid p(X_i)] = \mathbb{E}[Y_i(1)\mid p(X_i),D_i{=}1]$; by consistency, this equals $\mathbb{E}[Y_i\mid p(X_i),D_i{=}1]$. The symmetric argument handles $\mathbb{E}[Y_i(0)]$.

## Propensity score matching, and estimating p(x)

Any matching estimator (e.g. [nearest-neighbor matching](../unconfoundedness-methods/nearest-neighbor-matching.md)) can be run using $p(x)$ or an estimate $\hat p(x)$ in place of the raw covariate vector — matching on $|\hat p(X_l)-\hat p(X_i)|$ instead of $\|X_l-X_i\|$. The propensity score itself is typically estimated parametrically by maximum likelihood — **probit**, $p(x)=\Phi(x'\beta)$, or **logit**, $p(x)=\exp(x'\beta)/(1+\exp(x'\beta))$ — both guaranteeing $\hat p(x)\in(0,1)$, fit by maximizing $\mathcal{L}(\beta) = \prod_i p(X_i)^{D_i}(1-p(X_i))^{1-D_i}$.

## The LaLonde/Dehejia-Wahba validation exercise

Cunningham (2021, Ch.5) uses the LaLonde (1986) National Supported Work (NSW) job-training data — the same experiment discussed in [validation studies and observational bias](../treatment-effects/validation-studies-and-observational-bias.md) — as the running numerical illustration for this entire estimation toolkit. The true, experimentally validated ATE is $1{,}794$. LaLonde's original observational comparisons, using CPS and PSID survey respondents as a non-experimental control group, produced wildly wrong estimates: as low as $-\$15{,}997$ (PSID) — the wrong sign entirely, since the NSW's real, disadvantaged trainees looked nothing like a random national sample on covariates like race, age, or 1975 earnings. Dehejia and Wahba (1999, 2002) reran the comparison using propensity-score matching and weighting on the same non-experimental data and recovered estimates of $\$1{,}473$–$\$1{,}616$ — far closer to the experimental benchmark, though not exact — demonstrating both that propensity-score methods can substantially repair a badly biased observational comparison, and that they are not a magic fix: getting close to, but not exactly matching, the experimental truth is the realistic expectation for a genuinely observational method.

*Source: Cunningham (2021), Ch.5; LaLonde (1986); Dehejia & Wahba (1999, 2002).*
