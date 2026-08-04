---
title: "TWFE Robustness Measures and DID_M Details (de Chaisemartin and D'Haultfœuille, Extended)"
source: "Econ 2b, Appendix, §Two-Way Fixed Effects Estimators with Heterogeneous Treatment Effects"
status: enriched
tags:
  - twfe
  - did-m-estimator
  - robustness-measure
  - placebo-test
prerequisites:
  - difference-in-differences/twfe-negative-weights-and-goodman-bacon
  - difference-in-differences/did-m-estimator
---
This extends the [core TWFE negative-weights result](../difference-in-differences/twfe-negative-weights-and-goodman-bacon.md) and [$DID_M$ estimator](../difference-in-differences/did-m-estimator.md) with the more formal machinery from de Chaisemartin and D'Haultfœuille (2020).

## Where negative weights concentrate

Writing $\varepsilon_{g,t}$ for the residual of regressing $D_{g,t}$ on group and period fixed effects, the TWFE weight $w_{g,t}$ is proportional to $\varepsilon_{g,t} = D_{g,t}-D_{g,\cdot}-D_{\cdot,t}+D_{\cdot,\cdot}$ (under a balanced panel). This is smaller — more likely negative — whenever **period $t$ has a large share of already-treated groups** ($D_{\cdot,t}$ large) or **group $g$ has itself been treated for many periods** ($D_{g,\cdot}$ large). In staggered-adoption designs, where the treated share rises over time, this means **later-period effects and early adopters are systematically the most likely to receive negative weight** — the negative-weight problem is not evenly spread across the data, it concentrates predictably.

## Quantifying robustness: two summary statistics

Define $\sigma(\mathbf{w})$ as the standard deviation of the weights across treated cells. The **first robustness measure**, $\underline\sigma_{fe} = |\tilde\beta_{fe}|/\sigma(\mathbf{w})$, is the *minimal* standard deviation of cell-level ATEs at which $\hat\beta_{fe}$ and the true ATT could have **opposite signs** — derived via Cauchy-Schwarz: $|\tilde\beta_{fe}| \leq \sigma(\mathbf{w})\sigma(\tilde{\boldsymbol\Delta})$, so $\sigma(\tilde{\boldsymbol\Delta}) \geq \underline\sigma_{fe}$ is required before sign-reversal becomes possible, and this bound is tight. If $\underline\sigma_{fe}$ is small, even modest effect heterogeneity — well within what's plausible in most applications — could flip the sign of the reported estimate relative to the ATT. A **second measure**, $\overline\sigma_{fe}$, is the minimal heterogeneity at which $\hat\beta_{fe}$ could have the opposite sign to **every single** cell-level effect (defined only when at least one weight is strictly negative).

Crucially, TWFE is consistent for the ATT only if the weights are **uncorrelated** with the true cell-level ATEs — an assumption unlikely to hold, since heavily treated groups mechanically receive the lowest (most negative) weights, and heavily treated groups are often exactly those with the largest cumulative treatment effects.

## The first-differences (FD) regression has the same problem

Regressing $Y_{g,t}-Y_{g,t-1}$ on period effects and $D_{g,t}-D_{g,t-1}$ is also a weighted average of cell-level ATEs with potentially negative weights — a *different* weighting than TWFE (they coincide only when $T{=}2$ with a balanced panel). Cells with $D_{g,t-1}{=}1$ (already-treated groups) get negative FD weight whenever the share of newly-treated groups is larger between $t{-}1$ and $t$ than between $t$ and $t{+}1$ — meaning **long-run treatment effects are the ones typically contaminated** in the FD specification.

## DID_M formalized, with the stable-groups condition

The **switching-cell ATE**, $\delta^S$, averages the treatment effect over exactly the group-period cells where treatment status *changed* relative to the prior period. $DID_M$ requires a **stable-groups condition**: between every pair of consecutive periods with a "joiner" (switch $0\to1$), at least one group must remain untreated throughout both periods to serve as control; symmetrically for "leavers" ($1\to0$), at least one group must remain treated throughout. Under this plus common trends on *both* $Y(0)$ and $Y(1)$, $\mathbb{E}[DID_M]=\delta^S$ exactly.

## The placebo pre-trends test, valid under heterogeneity

$DID_M^{pl}$ compares outcome evolution from $t{-}2$ to $t{-}1$ (i.e. strictly *before* any switch) between groups about to switch at $t$ and groups that remain stable. Under the common-trends assumptions $DID_M$ relies on, this placebo should be zero in expectation; a rejection signals the switching and stable groups were already on divergent trends before the switch. Unlike the standard event-study pre-trend coefficient — shown by Sun and Abraham (2021) to be [contaminated under heterogeneous effects](../difference-in-differences/dynamic-twfe-and-event-studies.md) — this placebo test remains valid even when treatment effects are fully heterogeneous.

## A second empirical illustration: the union wage premium

Beyond the newspapers/turnout application already discussed, Vella and Verbeek's (1998) study of the union wage premium shows TWFE estimating a $10.7\%$ premium versus $DID_M$'s $4.1\%$ — a large gap — accompanied by a significant one-period-ahead placebo, suggesting pre-existing wage dynamics among workers about to join a union (a form of Ashenfelter-dip-style selection). The **leavers'** $DID_M$ estimate specifically, for which no pre-trend violation is detected, comes out close to zero — casting real doubt on whether a genuine union wage premium exists at all, once the identifying assumption is scrutinized this carefully rather than taken on faith from the TWFE coefficient alone.

Both applications together (newspapers/turnout, union wages) make the same broader methodological point this reference entry exists to document: the gap between TWFE and $DID_M$ is not a fixed, predictable amount — it depends entirely on the correlation between a study's own weight structure and its true effect heterogeneity, which is why de Chaisemartin and D'Haultfœuille's diagnostic statistics ($\underline\sigma_{fe}$, $\overline\sigma_{fe}$) and the placebo test are reported alongside the point estimate in careful applied work, rather than trusting a single TWFE coefficient at face value.
