---
title: Inverse Probability Weighting (IPW)
source: "Econ 2b, Ch.5 Estimation under Unconfoundedness, §Inverse Probability Weighting (IPW)"
status: enriched
tags:
  - inverse-probability-weighting
  - propensity-score
  - pseudo-population
prerequisites:
  - unconfoundedness-methods/propensity-score-theorem
---
## Identification

Under unconfoundedness and overlap:

$$\mathbb{E}[Y_i(1)] = \mathbb{E}\left[\frac{D_iY_i}{p(X_i)}\right] \qquad\qquad \mathbb{E}[Y_i(0)] = \mathbb{E}\left[\frac{(1-D_i)Y_i}{1-p(X_i)}\right]$$

**Proof (first equation).** $\mathbb{E}[Y_i(1)] = \mathbb{E}\big[\mathbb{E}[Y_i(1)\mid X_i]\big]$. Multiply and divide by $p(X_i)$ inside: $= \mathbb{E}\big[p(X_i)\mathbb{E}[Y_i(1)\mid X_i]/p(X_i)\big]$. Since $p(X_i)=\mathbb{E}[D_i\mid X_i]$ and, by CIA, $D_i\perp Y_i(1)\mid X_i$ implies $\mathbb{E}[D_i\mid X_i]\mathbb{E}[Y_i(1)\mid X_i] = \mathbb{E}[D_iY_i(1)\mid X_i]$, this becomes $\mathbb{E}\big[\mathbb{E}[D_iY_i(1)\mid X_i]/p(X_i)\big] = \mathbb{E}[D_iY_i(1)/p(X_i)]$ by iterated expectations, and by consistency ($D_iY_i(1)=D_iY_i$) this equals $\mathbb{E}[D_iY_i/p(X_i)]$.

## The estimator

$$\hat\tau_{IPW} = \frac{1}{n}\sum_{i=1}^{n}\left[\frac{D_iY_i}{\hat p(X_i)} - \frac{(1-D_i)Y_i}{1-\hat p(X_i)}\right]$$

## Intuition: reweighting into a pseudo-population

IPW reweights each observation by the inverse of its own realized treatment probability. A **treated** unit with a **low** propensity score gets a **high** weight — it stands in for the many similar untreated units that, given its covariates, would typically not have been treated. Symmetrically, an **untreated** unit with a **high** propensity score gets high weight. The effect is to construct a reweighted "pseudo-population" in which treatment assignment is statistically independent of $X_i$, restoring — by weighting rather than by conditioning or matching — the same balance that literal randomization would have delivered directly.

This also makes precise why [overlap violations](../unconfoundedness-methods/trimming-and-overlap-violations.md) are so damaging to IPW specifically: a treated unit with $\hat p(X_i)$ near zero receives a weight approaching infinity, so a single such observation can dominate the entire estimator — exactly the mechanism visible in the LaLonde/CPS application, where the extreme concentration of CPS propensity scores near zero would make an unweighted-trimming IPW estimate wildly unstable, which is precisely why Dehejia and Wahba trim before, not instead of, applying weighting-based estimators.

*Source: Cunningham (2021), Ch.5.*
