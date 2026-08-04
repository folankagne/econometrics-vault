---
title: "One Instrument, One Endogenous Variable"
source: "Econ 2b, Ch.3 Instrumental Variables, §Exclusion Revisited: More Than Random Instruments (Message 2)"
status: enriched
tags:
  - exclusion-restriction
  - mediation
  - multiple-channels
prerequisites:
  - instrumental-variables/exclusion-violations-and-iv-bias
---
## Random only guarantees independence from what came before

A random instrument $Z$ is, by construction, independent of every variable **predetermined** at the moment of the shock. It is *not*, however, guaranteed to be independent of variables **determined after** the shock — and this distinction is exactly where exclusion violations creep in. The causal effect of $Z$ on any later outcome is directly identifiable (a simple difference in means), but that is only ever a **reduced form**: if $Z$ triggers a complex causal chain touching multiple downstream variables, no single one of those reduced-form effects on its own identifies a specific structural parameter.

The exclusion restriction needed to estimate the effect of one particular channel $A$ on outcome $B$ decomposes into two distinct requirements: $Z$ has no *direct* effect on $B$, and $Z$ has no effect on any *other* cause of $B$ besides $A$. Randomization guarantees this only with respect to causes that were **already determined** before the shock — it says nothing about causes that the shock itself sets in motion.

## Why one instrument can identify at most one endogenous variable

If a random shock $Z$ affects *both* $X_1$ and $X_2$, and both in turn affect $Y$, then a single instrument cannot separately identify $\beta_1$ and $\beta_2$ in $Y=\beta_0+\beta_1X_1+\beta_2X_2+u$ when both are endogenous: the reduced-form effect of $Z$ on $Y$ conflates the two channels, with no way to apportion credit between them. **A random event can be a valid instrument for only one endogenous cause of $Y$ at a time.**

**Diagnostic.** Check whether $Z$ affects any candidate intermediate variable $X_1$ besides the endogenous regressor $X_2$ of actual interest. If $Z$ has no detectable effect on $X_1$, confidence in $Z$ as a valid instrument for $X_2$ increases. If $Z$ *does* affect $X_1$, identification of the individual structural effect becomes problematic — though not necessarily hopeless: the ITT (reduced form of $Z$ on $Y$) remains a defensible, well-defined quantity even when the underlying structural decomposition is not separately identified, and mediation-analysis tools offer partial (imperfect) ways forward.

## Example: a migration shock used for two different (competing) papers

A country receives a large, randomly-sized-across-cities inflow of unskilled migrants. Paper A uses this variation to study the effect of resulting **ethnic fragmentation** on growth; Paper B uses the *same* variation to study the effect of **technology adoption** (labor-saving technology, prompted by the changed labor mix) on growth. The migration shock plausibly affects *both* channels, and if both channels affect growth, neither paper can cleanly separate its own channel of interest from the other's. Either both papers understate the threat to their own exclusion restriction, or at most one channel truly matters — either way, the shared instrument cannot identify both structural effects at once, since a single instrument fundamentally cannot serve two endogenous variables simultaneously.

## The flip side: two instruments, one endogenous variable

The converse configuration — several distinct instruments for a *single* endogenous regressor — is not just permitted but often revealing. Angrist and Pischke (2009, §4.1.2) instrument family size with two unrelated sources of exogenous variation: a **twins** dummy (a multiple third birth among mothers with at least two children) and a **same-sex** dummy (parents of two same-sex children are 6.7 percentage points more likely to have a third child than parents of mixed-sex children). Both are plausibly random with respect to labor-supply potential, and both move family size, but they produce **different** Wald estimates of the effect of a third child on mothers' employment — the same-sex-based estimates are noticeably larger in absolute value than the twins-based estimates. Angrist and Pischke flag this as an important preview rather than a contradiction: distinct instruments generally identify a **local** average effect specific to the subpopulation each instrument moves (formalized later as the [LATE theorem](../instrumental-variables/late-theorem.md)), so two valid instruments for the same regressor need not — and generally should not — be expected to agree exactly, unless the underlying treatment effect is homogeneous across the population.

*Source: Angrist & Pischke (2009), §4.1.2, Table 4.1.4.*
