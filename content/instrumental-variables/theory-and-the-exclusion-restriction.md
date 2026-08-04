---
title: "Theory May Be Needed to Assess Exclusion: The Same-Sex Instrument"
source: "Econ 2b, Ch.3 Instrumental Variables, §Exclusion Revisited: More Than Random Instruments (Message 3)"
status: enriched
tags:
  - exclusion-restriction
  - same-sex-instrument
  - separability
prerequisites:
  - instrumental-variables/one-instrument-one-endogenous-variable
  - instrumental-variables/monotonicity-and-relevance-for-late
---
## The research question and the instrument

Angrist and Evans (1998) study the causal effect of fertility on female labor supply — a question where reverse causality and confounding both plausibly run in both directions (falling fertility and rising labor-force participation trend together, but which drives which?). Their instrument: parents with a preference for a mixed-sex sibling composition are more likely to have a third child if their first two children were the same sex — the **same-sex instrument**. It clears the two conditions checked mechanically: **relevance** (same-sex firstborns predict a third birth) and **randomness** (the sex of a child is not itself a function of parental characteristics or preferences).

## Why relevance and randomness are not enough

Rosenzweig and Wolpin (2000) point out that this exogeneity argument, though intuitively appealing, is not grounded in an explicit model — and once one is written down, exclusion is no longer automatic. Consider a household choosing consumption $c$, leisure $h$, and final number of children $n$, subject to a budget constraint $c=w(1-h)-qn$, with utility $V(c,h,n,s)$ depending also on the sibling-sex composition $s$.

**If utility is separable**, $V(c,h,n,s)=u(c,h)+v(n,s)$, the first-order conditions decouple: labor supply $h$ is chosen given $n$, with no direct role for $s$ once $n$ is fixed ($dh/ds\mid_n = 0$), while fertility $n$ does respond to $s$ ($dn/ds\neq 0$). Under separability, **same-sex is a valid instrument**: its only channel to labor supply is through the number of children.

**If utility is not separable**, $dh/ds\mid_n \neq 0$: sibling-sex composition can shift preferences for leisure *directly*, independent of the number of children — for instance, if parents enjoy time with same-sex versus mixed-sex children differently. The same problem arises if the *cost* of raising children, $q$, itself depends on sex composition. In either case, **same-sex is not a valid instrument** — it has a channel to the outcome that bypasses fertility entirely.

## Evidence against separability

Rosenzweig and Wolpin document that spending per child in India is affected by sibling-sex composition — direct evidence that $s$ operates through more than one channel, casting doubt on exclusion for the same-sex instrument in at least some settings.

> The general lesson: an instrument's randomness can be verified empirically (balance checks, institutional knowledge of the assignment mechanism), but its exclusion restriction often cannot be — assessing it requires writing down an explicit behavioral model of *how* the instrument could plausibly reach the outcome through channels other than the one of interest, exactly the kind of theoretical argument that a purely design-based, "the instrument is as good as random" defense tends to skip.

Angrist and Pischke (2009, §4.1) make the same point about the quarter-of-birth design itself: quarter of birth's randomness is essentially beyond dispute, but its exclusion restriction survives only because of a specific, checkable institutional story (compulsory schooling binds by age, not grade) — and they explicitly test an alternative channel (age-at-school-entry effects on learning, independent of total years of schooling) as a robustness check, exactly the kind of channel-by-channel scrutiny the same-sex example above illustrates in a different context.

*Source: Angrist & Pischke (2009), §4.1; Rosenzweig & Wolpin (2000); Angrist & Evans (1998).*
