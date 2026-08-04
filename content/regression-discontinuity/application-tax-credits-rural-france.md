---
title: "Application: Tax Credits in Rural France (Behaghel, Lorenceau, and Quantin 2015)"
source: "Econ 2b, Ch.4 Regression Discontinuity Design (RDD), §Application: Tax Credits in Rural France"
status: enriched
tags:
  - fuzzy-rdd
  - spillovers
  - sutva
prerequisites:
  - regression-discontinuity/fuzzy-rdd
  - regression-discontinuity/testing-continuity-mccrary-and-balancing
---
## Setting

Behaghel, Lorenceau, and Quantin (2015) evaluate a 1995 French tax-credit program for rural businesses, allocated to *cantons* (local jurisdictions) with 1990 population density below $31$ inhabitants per km². Two complications go beyond the textbook RDD setup: it is a **fuzzy** design (additional eligibility criteria apply beyond the density cutoff), and there is a genuine risk of **spillovers** across neighboring cantons — a direct threat to SUTVA, since a canton's own outcome could depend on whether its neighbors were treated too.

## Handling spillovers within an RDD

Rather than assuming SUTVA away, the authors construct instruments for **both** a canton's own treatment status and the *share of its treated neighbors*, using the eligibility rule as the source of exogenous variation for each. This lets them separately estimate direct program effects and spillover effects, instead of conflating the two.

## Validation steps

- **McCrary test**: the density of 1990 population density shows no discontinuity at $31$ — consistent with cantons being unable to precisely manipulate their own density.
- **First stage**: program participation jumps sharply at the $31$ threshold, confirming instrument relevance.
- **Balancing**: no discontinuity in *pre-period* (1982–1990) changes in employment, unemployment, or population — the two sides of the threshold looked comparable before the program even existed.

## Results

The estimated effects on local employment in targeted sectors are small and mostly statistically insignificant, with no detectable spillover effects onto neighboring cantons — a case where a carefully validated RDD design still yields a precisely estimated *null* result, itself a substantively informative finding about the program's limited effectiveness.

This SUTVA-aware extension is exactly the kind of design sophistication Cunningham (2021, Ch.6) highlights as characteristic of the best modern RDD applications: rather than treating spillovers as a fatal violation to be assumed away, Behaghel, Lorenceau, and Quantin build the interference structure directly into the instrument set, in the same spirit as the [geographic-RDD cautions](../regression-discontinuity/special-cases-and-when-rdd-fails.md) developed elsewhere in this folder — spatial designs are not automatically invalid, but they require the analyst to explicitly model, rather than assume away, the ways a treated unit's neighbors might also be affected.

*Source: Cunningham (2021), Ch.6; Behaghel, Lorenceau & Quantin (2015).*
