---
title: Testing for and Correcting Weak Instruments
source: "Econ 2b, Ch.3 Instrumental Variables, §Relevance Revisited: Weak Instruments (Which Asymptotics?, Testing, Solutions)"
status: enriched
tags:
  - stock-yogo-test
  - anderson-rubin-test
  - liml
  - many-instrument-asymptotics
prerequisites:
  - instrumental-variables/the-weak-instruments-problem
---
## Which asymptotics apply?

The claim that $\hat\beta_{2SLS}$ can remain biased even as $n\to\infty$ seems to contradict the usual CLT-based result $\sqrt{N}(\hat\beta_{2SLS}-\beta)\overset{d}{\to}\mathcal{N}(0,V)$. The resolution: that CLT approximation is only trustworthy when $n$ grows while *everything else* — in particular, the number of instruments $K$ and the instrument strength — stays fixed. The [weak-instrument bias formula](../instrumental-variables/the-weak-instruments-problem.md) is instead derived under an asymptotic sequence where $n$ and $K$ grow **together**, at comparable rates — a genuinely different (and, with many or weak instruments, more realistic) large-sample approximation.

## The Stock-Yogo rule of thumb

Since bias falls with the first-stage $F$-statistic, Stock and Yogo (2005) derive formal weak-instrument tests built around it. Their **rule of thumb**: if $F>10$, the 2SLS bias can be rejected as exceeding $10\%$ of the OLS bias. "Is $F>10$?" has become a routine diagnostic in applied 2SLS work — worth remembering that it remains a rule of thumb, not a formal test with guaranteed size, and that it addresses only the *bias* side of the problem, not necessarily inference validity.

## Illustration: Bound, Jaeger, and Baker (1995) on the Angrist-Krueger data

Re-running Angrist and Krueger's specification with progressively weaker instrument sets: with 3 quarter-of-birth instruments, $F=13.5$ and the 2SLS coefficient is $0.142$; with 30 instruments (quarter of birth interacted with year of birth), $F=4.7$ and the coefficient drops to $0.081$; with 28 instruments plus additional controls, $F=1.6$ and the coefficient falls to $0.060$ — converging toward the OLS benchmark of roughly $0.063$, exactly the "bias toward OLS" pattern predicted by theory. Most strikingly: substituting **randomly generated** birth dates for the true ones — where the true first-stage coefficient $\pi$ is exactly zero, so the parameter is genuinely unidentified and the honest confidence interval should span $(-\infty,+\infty)$ — 2SLS with these fake instruments *still* produces apparently statistically significant coefficients. This is the clearest possible demonstration that standard 2SLS inference can fail completely under weak instruments, not merely become imprecise.

## Solutions

**Estimation.** In the just-identified case ($K{=}1$), the estimator remains properly centered even when weak — a weak instrument there just produces very wide (honestly uninformative) confidence intervals, so the risk is being uninformative, not being wrong. In the over-identified case, the **Limited Information Maximum Likelihood (LIML)** estimator has substantially smaller finite-sample bias than 2SLS under weak instruments, and is often preferred for that reason.

**Inference.** Standard inference is simply wrong with (many) weak instruments — but weak-instrument-robust confidence intervals can be constructed that widen appropriately rather than falsely narrowing. The **Anderson-Rubin test** (1949) and conditional-likelihood-ratio tests deliver correct size regardless of instrument strength; applied to the Angrist-Krueger data, Moreira (2003) shows these methods still yield informative confidence intervals, in contrast to the misleading precision that naive 2SLS standard errors can suggest.

This same quarter-of-birth application is the running example throughout Angrist and Pischke's (2009, §4.6.4) own discussion of 2SLS bias, where they walk through the identical progression — a strong 3-instrument specification, a weaker 30-instrument specification, and a further-weakened controls-heavy specification — to illustrate that the estimate's drift toward the OLS benchmark as instruments weaken is a real, reproducible finite-sample phenomenon, not a hypothetical worst case.

*Source: Stock & Yogo (2005); Angrist & Pischke (2009), §4.6.4; Moreira (2003).*
