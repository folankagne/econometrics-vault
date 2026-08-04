---
title: "Cohort-Based Estimators: Callaway-Sant'Anna, Sun-Abraham, and Borusyak-Jaravel-Spiess"
source: "Econ 2b, Ch.6 Difference-in-Differences and Two-Way Fixed Effects, §Modern Solutions › Allowing for Dynamic Effects, Callaway & Sant'Anna, Sun & Abraham, Borusyak, Jaravel & Spiess"
status: enriched
tags:
  - callaway-santanna
  - sun-abraham
  - bjs-imputation-estimator
  - cohort-time-effects
prerequisites:
  - difference-in-differences/did-m-estimator
---
## Setup: potential outcomes indexed by treatment history

When effects can genuinely evolve over exposure duration, the potential outcome $Y_{g,T}(d_1,\dots,d_T)$ depends on the *entire* treatment path, not just current status. Parallel trends becomes a statement about the never-treated path specifically: $\mathbb{E}[Y_{g,t}(\mathbf{0}_t)-Y_{g,t-1}(\mathbf{0}_{t-1})]$ does not depend on $g$. The target parameter becomes **cohort-specific**: $TE_{c,c+\ell} = \mathbb{E}[\bar Y^{c,c+\ell}(\mathbf{0}_{c-1},\mathbf{1}_{\ell+1}) - \bar Y^{c,c+\ell}(\mathbf{0}_{c+\ell})]$, the effect of having been treated for $\ell{+}1$ periods, for the cohort $c$ first treated in period $c$.

## Callaway and Sant'Anna (2021)

$$\widehat{DID}_{c,\ell} = \bar Y^{c,c+\ell} - \bar Y^{c,c-1} - \big(\bar Y^{n,c+\ell}-\bar Y^{n,c-1}\big)$$

using period $c{-}1$ (just before cohort $c$'s treatment) as baseline, and the never-treated group as control. **Proof sketch.** Adding and subtracting $\bar Y^{c,c+\ell}(\mathbf{0}_{c+\ell})$ splits the expression into $TE_{c,c+\ell}$ plus two telescoped sums of period-to-period untreated changes for cohort $c$ and for the never-treated group respectively; parallel trends makes each term of one sum equal the corresponding term of the other, so the two sums cancel exactly, leaving $\mathbb{E}[\widehat{DID}_{c,\ell}]=TE_{c,c+\ell}$. In practice, many $(c,\ell)$ pairs are aggregated into summary measures $\widehat{DID}_\ell$, and when no never-treated group exists, **not-yet-treated** groups can substitute as controls (a choice that can improve precision even when a never-treated group *is* available).

## Sun and Abraham (2021)

Propose estimators for the same $TE_{c,c+\ell}$ using either the never-treated group (coinciding with Callaway-Sant'Anna in that case) or the **last-treated** group as control.

## Borusyak, Jaravel, and Spiess (2024): the imputation estimator

A different construction: (1) fit $Y_{g,t}=\alpha_g+\delta_t+\varepsilon_{g,t}$ using **only untreated** observations, obtaining $\hat\alpha_g,\hat\delta_t$; (2) for treated observations, impute the counterfactual and compute $\widehat{TE}_{g,t} = Y_{g,t}-\hat\alpha_g-\hat\delta_t$; (3) aggregate the relevant $\widehat{TE}_{g,t}$ to obtain $\widehat{TE}_{c,c+\ell}$.

## How the estimators relate

Under binary staggered treatment, $DID_M$ reduces to $DID_{+,t}$ alone (there are no switchers-out) and coincides with the de Chaisemartin-D'Haultfœuille estimator using all not-yet-treated groups as control; $\widehat{DID}_{c,\ell}$ equals Sun-Abraham's estimator when both use the never-treated group. All of these are, at bottom, the same search for **clean comparisons**, differing mainly in which control group and which time window they draw on:

| Estimator | Target | Control group | Design | PT assumption |
|---|---|---|---|---|
| dCDH, $DID_M$ | switchers' TE | not-yet-treated | any | on both $Y(0)$ and $Y(1)$ |
| CSA, $DID_{c,\ell}$ | $TE_{c,c+\ell}$ | never- or not-yet-treated | binary staggered | on $Y(0)$ |
| Sun-Abraham | $TE_{c,c+\ell}$ | never- or last-treated | binary staggered | on $Y(0)$ |
| BJS | $TE_{c,c+\ell}$ | not-yet-treated | binary staggered | on $Y(0)$ |

Larger control groups (not-yet-treated) generally buy more precision than smaller ones (never- or last-treated), at the cost of relying on parallel trends holding for a larger, more heterogeneous set of comparison units.

## Two further solutions in the same spirit

Cunningham (2021) surveys two additional responses to the same underlying problem, both illustrating that CSA/Sun-Abraham/BJS are not the only way to avoid forbidden comparisons. **Cengiz et al.'s (2019)** minimum-wage study takes a "stacking" approach: rather than run one pooled TWFE regression, the authors build 138 separate datasets, one per state-level minimum-wage change, each with its own treatment and control units — and critically, a unit is only allowed to serve as a control in a given sub-dataset if it was *not itself treated* within that sub-dataset's sample window. The 138 event-specific estimates are then stacked and averaged, mechanically ruling out late-vs-early forbidden comparisons by construction, at the cost of substantially more data engineering than a single regression. **Athey et al.'s (2018) matrix completion** approach reframes the whole problem as a missing-data problem in machine learning: treating the full $N\times T$ matrix of potential untreated outcomes as partially observed (observed wherever a unit-period is actually untreated, missing wherever treated), the method uses nuclear-norm regularization to impute the missing untreated counterfactuals directly, without ever specifying group or cohort structure explicitly — a genuinely different philosophy from the regression-based estimators, with a family resemblance to the [synthetic control](../synthetic-control/00-overview.md) approach developed in the next topic.

*Source: Cunningham (2021); Callaway & Sant'Anna (2021); Cengiz et al. (2019); Athey et al. (2018).*
