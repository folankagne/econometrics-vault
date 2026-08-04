---
title: "Illustrative Example: Early versus Late Treated Groups"
source: "Econ 2b, Ch.6 Difference-in-Differences and Two-Way Fixed Effects, §Illustrative Example: Early vs. Late Treated Groups"
status: enriched
tags:
  - forbidden-comparisons
  - negative-weights
  - staggered-adoption
prerequisites:
  - difference-in-differences/twfe-negative-weights-and-goodman-bacon
---
## Setup

Two groups, three periods: group $e$ (early) is treated in periods $2$ and $3$; group $\ell$ (late) is treated only in period $3$. The TWFE estimator decomposes exactly as:

$$\hat\beta^{fe} = \tfrac{1}{2}\widehat{DID}_{e,\ell,1,2} + \tfrac{1}{2}\widehat{DID}_{\ell,e,2,3}$$

The first term is a **valid** comparison ($\ell$ is untreated in both periods $1,2$, a legitimate control for $e$'s period-2 switch): $\mathbb{E}[\widehat{DID}_{e,\ell,1,2}]=\mathbb{E}[TE_{e,2}]$. The second is a **forbidden** comparison — $e$ is already treated in *both* periods $2$ and $3$, yet is being used as the "control" for $\ell$'s period-3 switch.

## Proof: what the forbidden comparison actually recovers

Writing $\widehat{DID}_{\ell,e,2,3} = Y_{\ell,3}-Y_{\ell,2}-(Y_{e,3}-Y_{e,2})$ in potential-outcomes terms and adding/subtracting $Y_{\ell,3}(0)$, $Y_{e,3}(0)$, $Y_{e,2}(0)$:

$$\widehat{DID}_{\ell,e,2,3} = TE_{\ell,3} + \big[Y_{\ell,3}(0)-Y_{\ell,2}(0)\big] - TE_{e,3} - \big[Y_{e,3}(0)-Y_{e,2}(0)\big] + TE_{e,2}$$

Parallel trends applies to *counterfactual* untreated outcomes for **every** group regardless of actual treatment status, so $\mathbb{E}[Y_{\ell,3}(0)-Y_{\ell,2}(0)] = \mathbb{E}[Y_{e,3}(0)-Y_{e,2}(0)]$ — these two bracketed terms cancel even though group $e$ is *observed* as treated throughout. What remains:

$$\mathbb{E}[\widehat{DID}_{\ell,e,2,3}] = \mathbb{E}[TE_{\ell,3} - TE_{e,3} + TE_{e,2}]$$

Combining both halves: $\mathbb{E}[\hat\beta^{fe}] = \mathbb{E}\big[\tfrac12 TE_{\ell,3} + TE_{e,2} - \tfrac12 TE_{e,3}\big]$ — **$TE_{e,3}$ enters with a negative weight** ($-\tfrac12$). If treatment effects grow over time for the early group ($TE_{e,3} > TE_{e,2}$ substantially), the whole expression can even become negative despite every individual effect being positive.

## When the problem disappears

If treatment effects are **constant over time** within a group ($TE_{e,3}=TE_{e,2}$), the forbidden-comparison terms cancel exactly: $\mathbb{E}[\widehat{DID}_{\ell,e,2,3}]=\mathbb{E}[TE_{\ell,3}]$, and the comparison becomes valid after all. More generally, with binary staggered treatment and time-constant effects, all Goodman-Bacon weights are positive, and $\hat\beta^{fe}$ is a genuine convex combination of treatment effects. The same fix applies if a **never-treated** group exists and every comparison uses it as the control — then no comparison is ever "forbidden" in the first place, regardless of whether effects are dynamic, because the control group's own treatment status never changes.

De Chaisemartin (2021, Ch.11.2) proves a formal characterization of exactly which cells get negative weights in the general staggered-adoption case (his Proposition 11.2.2): a cell $(g,t)$ is more likely to receive a negative TWFE weight the *more* other groups are treated at $t$ and the *longer* $g$ itself has already been treated — precisely the situation of group $e$ at period 3 in this two-group example, generalized. This is why negative weights are systematically more prevalent in designs with many "early adopters" (most groups switching on early, so later periods are dominated by already-treated comparisons) than in designs with many "late adopters."

*Source: de Chaisemartin (2021), Ch.11.2.2, Prop. 11.2.2.*
