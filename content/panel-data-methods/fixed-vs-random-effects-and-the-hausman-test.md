---
title: Fixed versus Random Effects, and the Hausman Test
source: "Wooldridge (2016), Ch.14"
status: enriched
tags:
  - beyond-lectures
  - panel-data
  - hausman-test
  - fixed-effects
  - random-effects
prerequisites:
  - panel-data-methods/random-effects-model-and-gls
  - instrumental-variables/hausman-test
---
## The economic question behind the statistical choice

Fixed effects allows $a_i$ to correlate arbitrarily with the regressors; random effects assumes it does not. Since RE is more efficient whenever its extra assumption holds, and FE remains valid regardless, the choice mirrors a pattern already familiar from [the OLS-vs-WLS diagnostic](../heteroskedasticity-and-autocorrelation/robust-vs-efficient-estimation-tradeoff.md): a stronger assumption bought in exchange for precision, with a fallback estimator that needs less to be true. In practice RE is the exception rather than the rule for genuinely *causal* time-varying regressors — the leading case where $\text{Cov}(x_{it},a_i)=0$ is credible is when the regressor is **experimentally, repeatedly randomized** (e.g. a child randomly reassigned to a different class size each year); most observational regressors are themselves the outcome of individual choices correlated with unobserved individual traits, which is exactly why FE is the default in applied panel work.

## The Hausman test

Hausman (1978) formalized a direct comparison, already introduced in this vault for [OLS vs. IV](../instrumental-variables/hausman-test.md): under the RE null, both the RE and FE estimators are consistent, but only RE is efficient; under the alternative (RE's exogeneity assumption fails), FE remains consistent but RE does not. The test statistic compares the two sets of time-varying coefficients, $\hat\gamma \equiv \hat\beta_{FE}-\hat\beta_{RE}$, using the same efficient-estimator variance-difference logic as the IV case:

$$H = \hat\gamma'\big[\widehat{\text{Var}}(\hat\beta_{FE})-\widehat{\text{Var}}(\hat\beta_{RE})\big]^{-1}\hat\gamma \ \overset{\mathcal{L}}{\underset{H_0}{\to}}\ \chi^2(q)$$

for $q$ time-varying regressors compared. A rejection is conventionally read as evidence against RE's exogeneity assumption, favoring FE; a failure to reject means either the two estimates are genuinely close (RE and FE tell the same story, so the more efficient RE is preferred) or the sampling variation is too large to distinguish them at all — in which case, as with any underpowered test, "no rejection" should not be over-read as positive evidence for RE.

## Worked example: a wage equation using panel data

Wooldridge's WAGEPAN application estimates the same wage equation three ways — pooled OLS, RE, and FE — on men observed across multiple years (Table 14.2). The time-constant regressors (`educ`, race dummies) can only be estimated by pooled OLS or RE, both of which put the return to education at roughly 9%. The time-varying `married` coefficient (the marriage wage premium) tells the more interesting story: it falls from $10.8\%$ (pooled OLS) to $6.4\%$ (RE) to $4.7\%$ (FE) as progressively more unobserved heterogeneity is absorbed — consistent with more able men being both more likely to marry and paid more *regardless* of marital status, so the naive pooled-OLS premium substantially overstates marriage's own causal effect. The estimated $\hat\theta=.643$ for this application sits well toward the fixed-effects end of the $[0,1]$ range, which is exactly why the RE and FE estimates for the time-varying coefficients land closer to each other than either does to pooled OLS.

*Source: Wooldridge (2016), §14-2a, Example 14.4; Hausman (1978).*
