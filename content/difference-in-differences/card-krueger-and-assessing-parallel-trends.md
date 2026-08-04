---
title: "Card & Krueger (1994) and Assessing Parallel Trends"
source: "Econ 2b, Ch.6 Difference-in-Differences and Two-Way Fixed Effects, §Empirical Application: Card & Krueger (1994)"
status: enriched
tags:
  - parallel-trends
  - pre-trend-testing
  - ashenfelter-dip
  - card-krueger
prerequisites:
  - difference-in-differences/standard-difference-in-differences
---
## The minimum wage natural experiment

On April 1, 1992, New Jersey raised its minimum wage from \$4.25 to \$5.05; Pennsylvania's stayed at \$4.25. Card and Krueger (1994) compared fast-food employment in the two states before and after:

| | PA | NJ | Difference (NJ−PA) |
|---|:---:|:---:|:---:|
| FTE before | 23.33 (1.35) | 20.44 (0.51) | −2.89 (1.44) |
| FTE after | 21.17 (0.94) | 21.03 (0.52) | −0.14 (1.07) |
| Change | −2.16 (1.25) | 0.59 (0.54) | 2.76 (1.36) |

$\widehat{DID} = 0.59-(-2.16) = 2.76$ (s.e. $1.36$): employment **fell** in Pennsylvania (constant minimum wage) but **rose** in New Jersey (higher minimum wage) — a positive employment effect from a minimum-wage increase, the opposite of the standard competitive-labor-market prediction, though not statistically significant at conventional levels.

## Pre-trends as an indirect check on parallel trends

Parallel trends is fundamentally untestable — it concerns counterfactual, never-observed outcomes. But it can be assessed *indirectly*: if multiple pre-treatment periods are available, check whether $\mathbb{E}[Y_{s,t}(0)-Y_{s,t-1}(0)] = \mathbb{E}[Y_{n,t}(0)-Y_{n,t-1}(0)]$ for $t<t^*$. Parallel **pre**-trends are **necessary but not sufficient** for the post-treatment parallel trends assumption to hold — matching trajectories before treatment is reassuring, but nothing guarantees the trajectories would have stayed matched afterward.

## Card and Krueger (2000): a control group can stop being valid

Extending the analysis with BLS state-level data from October 1991 to July 1997 revealed two complications: there was only **one** pre-treatment observation, making it hard to assess whether pre-trends were genuinely parallel; and around 1996, Pennsylvania's own minimum wage rose (via the federal minimum wage increase) — Pennsylvania itself became a "switcher," so it could no longer serve as a clean control for the later period. (New Jersey, having already raised its wage above the federal level earlier, could instead serve as a comparison group for *that* later federal change.) The lesson: a control group's validity is not fixed for all time — it can erode if the control is later subject to its own policy change.

## The Ashenfelter dip

Ashenfelter (1978) documented that individuals enrolling in job-training programs often show a temporary earnings **dip** just before enrollment — a form of adverse selection: people enroll precisely when their outcomes are transiently depressed. This directly violates parallel pre-trends, and naive DID applied to such data overstates the program's effect, since part of the measured "improvement" is simply **mean reversion** back to the individual's normal trajectory rather than a genuine causal effect of the program.

## Natural experiments as the modern DiD default

De Chaisemartin (2021, Ch.11) frames Card and Krueger's design as the prototype of what he calls a **natural experiment**: the treatment and control groups are defined by *legislative* change (New Jersey's minimum-wage law) rather than by units self-selecting into treatment, precisely to sidestep exactly the kind of Ashenfelter-dip-style self-selection concern raised above. This is why, he notes, most well-published modern DiD papers seek out a natural experiment — a group compelled into treatment by external policy change — rather than relying on units that chose treatment themselves; self-selected treatment groups are the settings where parallel trends is hardest to defend, since the very reasons a unit selects into treatment (a downward income shock, in Ashenfelter's case) are often the reasons its trend would have diverged from the control group's regardless of treatment.

*Source: de Chaisemartin (2021), Ch.11, §11.1.1; Card & Krueger (1994, 2000); Ashenfelter (1978).*
