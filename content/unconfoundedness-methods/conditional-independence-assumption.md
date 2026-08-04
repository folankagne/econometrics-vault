---
title: The Conditional Independence Assumption
source: "Econ 1, Lecture Notes, §Conditional Independence"
status: enriched
tags:
  - conditional-independence
  - control-variables
  - twins-study
  - regression-discontinuity
prerequisites:
  - treatment-effects/average-treatment-effect-and-att
  - identification/exogeneity-and-endogeneity
---
## When treatment is random only after conditioning

Treatment assignment need not be unconditionally random for identification to be possible — it may become "as good as random" once a set of **control variables** $\tilde{\mathbf{x}}$ is accounted for. This is the **conditional independence assumption (CIA)**:

$$\ell(y_{1i}, y_{0i} \mid \mathcal{T}_i, \tilde{\mathbf{x}}_i) \equiv \ell(y_{1i}, y_{0i} \mid \tilde{\mathbf{x}}_i)$$

— the joint distribution of potential outcomes does not depend on treatment status once $\tilde{\mathbf{x}}_i$ is held fixed. Crucially, the control variables $\tilde{\mathbf{x}}$ are included purely to **clean the noise** of confounding variation; they are not assigned any causal or structural interpretation of their own. This single idea underlies a wide range of otherwise very different identification strategies covered later in this vault.

## Example: twin studies as conditional independence via panel data

Ashenfelter and Krueger visited a "twins fair" and collected socio-economic and labor-market data on twin pairs, estimating a [Mincer-style](../identification/exogeneity-and-endogeneity.md) equation separately for each twin:

$$\ln w_{1i} = \alpha_sEduc_{1i} + \gamma\mathbf{x}_i + \beta\mathbf{z}_{1i} + \mu_i + \varepsilon_{1i} \qquad \ln w_{2i} = \alpha_sEduc_{2i} + \gamma\mathbf{x}_i + \beta\mathbf{z}_{2i} + \mu_i + \varepsilon_{2i}$$

Genetic and family-background ability $\mu_i$ is shared by both twins and, by assumption, generates no residual ability bias *conditional on* $\mu_i$. Differencing the two equations for each pair cancels $\mu_i$ (and any other twin-shared confounder) exactly:

$$\ln w_{1i} - \ln w_{2i} = \alpha_s(Educ_{1i}-Educ_{2i}) + \beta(\mathbf{z}_{1i}-\mathbf{z}_{2i}) + \varepsilon_{1i}-\varepsilon_{2i}$$

Conditioning on "being from the same twin pair" plays the role of $\tilde{\mathbf{x}}$: within a pair, whatever residual variation in education remains is plausibly unrelated to the shared, unobserved ability that would otherwise bias a standard cross-sectional Mincer regression.

## Regression discontinuity as local conditional independence

A distinct route to conditional independence arises when treatment assignment follows an **arbitrary, exogenous threshold rule** on some running variable $\mathcal{D}_i$: $\mathcal{T}_i = \mathbb{1}[\mathcal{D}_i \geq \bar{d}]$ — an income cutoff for program eligibility, a maximum-class-size rule, an exam pass mark. Right at the threshold, this generates a **local** conditional independence:

$$\exists\,\epsilon>0: \ \ell(y_{1i},y_{0i}\mid \mathcal{D}_i = \bar{d}-\epsilon) \equiv \ell(y_{1i},y_{0i}\mid \mathcal{D}_i = \bar{d}+\epsilon)$$

Individuals just below and just above the cutoff are, in the limit, comparable in every respect except treatment status — an idea developed in full in [regression discontinuity designs](../regression-discontinuity/00-overview.md). Both twin-fixed-effects and RDD are special cases of the same underlying logic: find a source of variation in treatment that is independent of potential outcomes once the right conditioning set (twin pair, or proximity to a threshold) is fixed.

Cunningham (2021, Ch.5) frames CIA/unconfoundedness as the natural econometric translation of Pearl's graphical **backdoor criterion**: conditioning on $\tilde{\mathbf{x}}$ "closes" every non-causal ("backdoor") path between treatment and outcome, leaving only the causal path open. This DAG-based framing is a useful complement to the potential-outcomes statement above — it makes explicit that the entire method lives or dies on whether the analyst has correctly identified *every* confounding path and included a variable that blocks it, a substantive, institution-specific claim rather than a statistical one.

*Source: Cunningham (2021), Ch.5.*
