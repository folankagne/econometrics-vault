---
title: "Application: The STAR Class-Size Experiment and Balance Checks"
source: "Econ 2b, Ch.2 Rubin's Causal Model and Randomized Experiments, §Application: The STAR Class Size Experiment"
status: enriched
tags:
  - star-experiment
  - balance-table
  - randomization-check
  - within-school-randomization
prerequisites:
  - treatment-effects/randomized-controlled-trials
---
## Why an experiment at all?

The STAR (Student-Teacher Achievement Ratio) experiment, analyzed by Krueger (1999), studied how class size affects student achievement — a setting where an experiment is close to indispensable: the parameter matters for policy, a credible structural model is hard to build given the many possible confounders, and there is enormous scope for selection (parents choosing schools, teachers choosing students, principals assigning students to classes). Absent randomization, any observed class-size/achievement correlation could be entirely a byproduct of these selection mechanisms rather than a causal effect of class size itself.

## Design complications

STAR randomly assigned kindergarten teachers and students to small classes ($D_i=1$) versus regular classes ($D_i=0$), with two complications: a **third arm** (regular class size with an aide teacher, randomly assigned as well — a "multiple-arm" experiment), and randomization conducted **within each school** rather than across the full sample.

## Reading a balance table

A balance table reports $\mathbb{E}[X_i\mid Z_i=\text{Small}]$, $\mathbb{E}[X_i\mid Z_i=\text{Regular}]$, $\mathbb{E}[X_i\mid Z_i=\text{Aide}]$ for pre-treatment covariates $X_i$ — this is the standard first check of whether randomization "worked." In Krueger's Table I: free-lunch eligibility, race, and age are balanced across arms (high joint $p$-values, cannot reject equal means) — as expected under successful randomization. **Attrition** differs significantly across arms ($p=0.02$) — a genuine concern, since differential attrition can reintroduce selection even after correct initial randomization. Class size itself differs sharply by design ($p=0.00$, confirming the treatment was implemented as intended), and the percentile test score gap ($54.7$ vs. $49.9$, roughly $4.8$ points) is the **outcome** being evaluated, not a covariate that should be balanced.

> With a $5\%$ Type I error rate, testing many covariates individually means roughly $1$ in $20$ should show "imbalance" by pure chance even when randomization worked perfectly — this is why balance tables typically also report a **joint** significance test across all covariates simultaneously, rather than relying on covariate-by-covariate significance alone.

Angrist and Pischke (2009, §2.2) reproduce this exact table (their Table 2.2.1) as a template for how any randomized (or quasi-randomized) design should be checked: free-lunch status, race, and age show small, statistically insignificant differences across the three arms (joint $p$-values of $.09$, $.26$, $.32$), while class size itself differs sharply and significantly by design ($p=.00$) — confirming the experiment created the intended variation without contaminating pre-treatment characteristics. They flag the differential attrition rate ($p=.02$, lower in small classes) as a genuine, if secondary, threat: if attrition itself is related to potential outcomes (e.g. struggling students in large classes disproportionately transferring out), the surviving sample can no longer be treated as a clean random draw even though the *initial* assignment was random — a caveat worth carrying into any experimental analysis with post-randomization sample loss.

*Source: Angrist & Pischke (2009), §2.2, Table 2.2.1; Krueger (1999).*

## OLS versus reduced-form estimates

Krueger reports both OLS estimates (using *actual*, realized class size) and reduced-form estimates (using *initial random assignment*). Covariates like race or gender predict test scores in the OLS specification without being causal — they proxy for correlated factors like socioeconomic status or school quality. Because randomization occurred **within school**, including school fixed effects is essential: it ensures the comparison is always between students who faced the *same* randomization lottery, rather than pooling across schools with different baseline compositions.
