---
title: Synthetic Control — Motivation and Canonical Examples
source: "Econ 2b, Ch.7 Synthetic Control Methods, §Motivation and Illustrative Examples"
status: enriched
tags:
  - synthetic-control
  - comparative-case-study
  - donor-pool
prerequisites:
  - difference-in-differences/standard-difference-in-differences
---
## When a single control unit is not enough

Aggregate-level policy evaluation — a whole country, state, or region affected by a single intervention — often has no natural comparison unit: the affected unit may already differ systematically from every candidate control *before* treatment even occurs. **Synthetic control** methods are designed for exactly this: (1) effects of interest at the aggregate level, (2) only one (or very few) treated units, (3) a reasonably large "donor pool" of potential controls, and (4) no single control unit that provides a credible counterfactual on its own.

## Three canonical applications

**German reunification** (Abadie, Diamond, and Hainmueller, 2015). West Germany's GDP per capita, trade openness, and other predictors already diverged from the OECD average pre-reunification, so neither the OECD average nor the nearest single comparator (Austria) is credible. A "Synthetic West Germany" — a weighted combination of OECD countries matching West Germany's pre-reunification characteristics — reveals a significant post-1990 GDP decline relative to the synthetic trajectory.

**California's Proposition 99** (Abadie, Diamond, and Hainmueller, 2010). California and the rest-of-US already had different cigarette consumption trends before the 1988 tobacco-control law. A "Synthetic California," built from 38 control states (excluding states with their own large tobacco-control programs), shows the law reduced per-capita cigarette sales by roughly 26 packs/year relative to the synthetic counterfactual.

**Basque terrorism** (Abadie and Gardeazabal, 2003). The Basque Country's distinct economic and institutional profile makes any single Spanish region a poor comparator for estimating the economic cost of ETA's terrorist campaign; a synthetic Basque Country reveals a substantial GDP gap opening after violence escalated in the late 1970s.

## Why no single comparator works: the German case in numbers

| | West Germany | Synthetic | OECD Average | Austria |
|---|:---:|:---:|:---:|:---:|
| GDP per capita | 15,808.9 | 15,802.2 | 13,669.4 | 14,817.0 |
| Trade openness | 56.8 | 56.9 | 59.8 | 74.6 |
| Inflation | 2.6 | 3.5 | 7.6 | 3.5 |
| Schooling | 55.5 | 55.2 | 38.7 | 60.9 |

Austria matches West Germany on some dimensions but diverges sharply on others (trade openness, schooling); the OECD average is off across the board. The synthetic control matches nearly *every* predictor simultaneously — something no single country, and no simple average, can do.

## A fourth example: revisiting Card (1990) on the Mariel Boatlift

Cunningham (2021) frames synthetic control as, among other things, a way to revisit older comparative-case studies built on *ad hoc* comparison groups. Card's (1990) famous study of the 1980 Mariel Boatlift — roughly 125,000 Cuban emigrants arriving in Miami over six months, expanding the city's labor force by about 7% — used four hand-picked comparison cities (Atlanta, Los Angeles, Houston, Tampa–St. Petersburg), selected in a footnote on the grounds that they were "similar" on demographics and economic conditions, and famously found no detectable effect on native wages or unemployment, contradicting the standard competitive labor-market prediction. Because the choice of comparison cities was subjective, the finding attracted persistent methodological skepticism. Peri and Yasenov (2018) replicated the analysis using synthetic control instead of an ad hoc comparison group, and recovered similar results — an important robustness check demonstrating that Card's original finding was not an artifact of the specific comparison cities he happened to choose, addressing exactly the "arbitrary control group" objection that motivates synthetic control's more disciplined, data-driven approach.

*Source: Cunningham (2021); Card (1990); Peri & Yasenov (2018).*
