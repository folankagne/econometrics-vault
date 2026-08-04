---
title: Regression Discontinuity Design — Introduction and Historical Examples
source: "Econ 2b, Ch.4 Regression Discontinuity Design (RDD), §Introduction and Historical Examples"
status: enriched
tags:
  - regression-discontinuity
  - forcing-variable
  - maimonides-rule
prerequisites:
  - unconfoundedness-methods/conditional-independence-assumption
---
## The core intuition

When treatment is assigned based on whether an observed **forcing variable** (or **running variable**) $X$ crosses a known threshold $c$ — treated if $X\geq c$, untreated if $X<c$ — individuals just above and just below the cutoff are likely nearly identical in every respect except treatment status. This creates a **local randomization** exploitable for causal identification, formalized as: the conditional expectation of potential outcomes is continuous at the threshold.

## Historical example 1: Thistlethwaite and Campbell (1960), merit awards

The first formal RDD application studied the impact of merit awards on future academic outcomes, where award receipt $D$ is a discontinuous function of test score $X$: awarded iff $X\geq c$. Absent any other reason for outcomes to jump at $X=c$, any observed jump identifies the award's causal effect. Because their test-score data was only available in intervals, they could not measure the jump directly at the threshold — this required **extrapolation**, assuming linearity to estimate the discontinuity, the local-linear approach that later became the modern RDD standard.

## Historical example 2: Maimonides' Rule (Angrist and Lavy, 1999)

Israeli schools follow **Maimonides' Rule**: maximum class size is $40$, so enrollment exceeding $40$ mandates a second class. Predicted class size $f(e) = e/\lceil e/40\rceil$ is a discontinuous, sawtooth function of enrollment $e$, dropping sharply at $e=40,80,120,\dots$. Angrist and Lavy use $f(e)$ as an **instrument** for actual class size $S$: relevant, since $f(e)$ explains $S$; excludable, since — conditional on total enrollment $e$ — the *predicted* class size shouldn't have any other channel to outcomes. The estimating equation, $Y=\alpha+\beta S+g(e)+U$, includes a flexible but **continuous** function $g(e)$ to absorb omitted causes correlated with enrollment itself.

## Two implementations of the same idea

Both examples share the underlying logic — a discontinuity in treatment exposure implies a discontinuity in outcomes — but differ in execution: one discontinuity (merit awards) versus several, repeating ones (Maimonides at $40,80,120,\dots$); a forcing variable that perfectly determines treatment versus one that only predicts it; and estimation by OLS ([sharp design](../regression-discontinuity/sharp-rdd.md)) versus 2SLS ([fuzzy design](../regression-discontinuity/fuzzy-rdd.md)).

## A modern sharp-design example: Hoekstra (2009) and flagship-university admission

Cunningham (2021, Ch.6) uses Hoekstra's (2009) study of the effect of attending a state flagship university on earnings as the chapter's central worked illustration, and it is worth adding here as a third canonical example alongside Thistlethwaite-Campbell and Maimonides' Rule. Hoekstra obtained admissions and earnings records for a state flagship university with a minimum-SAT admission cutoff, and plotted enrollment probability against the "recentered" running variable (SAT score minus the cutoff): enrollment jumps discontinuously from roughly 5% just below the cutoff to over 50% just above it — a textbook sharp-design first stage. Students admitted right at the cutoff earned roughly 9.5% more in the long run than those who just missed it, with estimates ranging from 7.4% to 11.1% across a range of bandwidth choices — an early, influential demonstration that *which* public university a student attends, not merely *whether* they attend college at all, causally affects earnings.

*Source: Cunningham (2021), Ch.6; Hoekstra (2009).*
