---
title: The Experimental Selection Correction (ESC) Estimator
source: "Econ 2b, Ch.2 Rubin's Causal Model and Randomized Experiments, §The Experimental Selection Correction Estimator"
status: enriched
tags:
  - control-function
  - surrogacy
  - external-validity
  - latent-unconfoundedness
prerequisites:
  - treatment-effects/validation-studies-and-observational-bias
  - unconfoundedness-methods/conditional-independence-assumption
---
## The problem: long-term outcomes without an experiment

Athey et al. (2025) develop a method for estimating a treatment's effect on a **long-term** outcome by combining two data sources: an **experimental sample** ($G_i=E$) with randomized treatment $D_i$ and a **short-term** outcome $Y_i^S$ only (e.g. test scores), and an **observational sample** ($G_i=O$) with non-random treatment but *both* short-term $Y_i^S$ and long-term $Y_i^P$ outcomes (e.g. class size, test scores, *and* high school graduation).

## A constant-effect model

$$Y_i^P(0) = \alpha_i^P + X_i'\gamma_P \qquad Y_i^P(1) = Y_i^P(0)+\tau_P \qquad\qquad Y_i^S(0) = \alpha_i^S+X_i'\gamma_S \qquad Y_i^S(1) = Y_i^S(0)+\tau_S$$

with $\alpha_i^P,\alpha_i^S$ individual-specific unobserved heterogeneity in the long- and short-term outcomes, and $\tau_P,\tau_S$ the (constant) treatment effects.

## Two identifying assumptions

**External validity**: the same potential-outcome equations and the same $(\tau_S,\tau_P)$ apply in both samples — the experimental sample is not systematically different from the observational one in how treatment operates.

**Latent unconfoundedness**: the unobserved long-term heterogeneity decomposes as $\alpha_i^P = \delta\alpha_i^S+\varepsilon_i^P$, with $D_i \perp \varepsilon_i^P \mid X_i,\alpha_i^S, G_i{=}O$. In words: whatever part of the long-term unobservable is *not* explained by the short-term unobservable is independent of treatment, conditional on observables and on the short-term unobservable itself. Intuitively, if unobserved parental involvement or motivation drives short-term test scores, it plausibly also drives long-term graduation — the assumption allows some unobservables to matter only short-term or only long-term, but requires that whatever residual long-term-specific unobserved factor remains does not itself drive selection into treatment.

## The control-function estimator

1. In the **experimental** sample, estimate $\hat\tau_S,\hat\gamma_S$ consistently — valid by randomization, exactly as in [randomized controlled trials](../treatment-effects/randomized-controlled-trials.md).
2. Recover the short-term residual for **observational**-sample units: $\hat\alpha_i^S = Y_i^S - D_i\hat\tau_S - X_i'\hat\gamma_S$.
3. Regress $Y_i^P$ on $D_i$, $X_i$, and $\hat\alpha_i^S$ within the observational sample.

**Why this works.** In the observational sample, $Y_i^P = D_i\tau_P+X_i'\gamma_P+\alpha_i^P = D_i\tau_P+X_i'\gamma_P+\delta\alpha_i^S+\varepsilon_i^P$. Since latent unconfoundedness gives $D_i\perp\varepsilon_i^P$ conditional on $X_i,\alpha_i^S$, controlling for the (estimated) $\hat\alpha_i^S$ is enough to remove selection bias from the coefficient on $D_i$, which then identifies $\tau_P$. This is a **control function approach**, in the same family as the classical Heckman selection correction — an unobserved source of selection is proxied by a residual recovered elsewhere in the data, then included directly as a regressor.

## Application: STAR class size and high school graduation

Combining the Tennessee STAR experiment (randomized class size, short-term test scores) with New York City administrative data (non-random class size, test scores, and graduation), naive observational OLS gives a **negative** effect of small classes on both test scores and graduation — selection bias dominates. The ESC estimator instead recovers a test-score effect matching the experimental benchmark ($0.19\sigma$) and a **positive** graduation effect ($0.69$ percentage points, consistent in sign and plausibility with the experimental short-term result), where naive OLS on the observational data alone would have pointed the wrong way entirely.

> ESC confidence intervals are wider than naive OLS's — this is a feature, not a flaw. A biased point estimate with a narrow standard error is "incredible certainty"; an honest estimate with appropriately wide intervals reflects genuine uncertainty. As Charles Manski put it: "you prefer credible uncertainty to incredible certainty."

## Why this exists: the validation-study problem, addressed rather than lamented

The ESC estimator is a direct methodological response to the pattern documented in [validation studies and observational bias](../treatment-effects/validation-studies-and-observational-bias.md): naive OLS on purely observational long-term data (like the STAR/NYC graduation exercise here) can be badly, even sign-reversingly, biased, exactly as LaLonde (1986) and Bernard et al. (2024) found for training programs and Angrist and Pischke's HRT example found in medicine. Rather than concluding that observational data is simply unusable for long-term outcomes absent directly from any experiment, the ESC approach asks what the experimental sample's *short-term* result can contribute: since the experiment pins down $\tau_S$ with full credibility, and short-term and long-term unobserved heterogeneity are assumed to share a common component $\alpha_i^S$, the experimental short-term effect becomes leverage for cleaning up the observational long-term regression — a genuinely productive combination of the two data types, rather than treating them as simple substitutes where one must simply be discarded in favor of the other.

*Source: Athey et al. (2025).*
