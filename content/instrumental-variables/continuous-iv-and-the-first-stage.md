---
title: Continuous Instruments, the First Stage, and the Reduced Form
source: "Econ 1, Lecture Notes, §Univariate model with continuous IV"
status: enriched
tags:
  - first-stage
  - reduced-form
  - weak-instruments
  - instrumental-variables
prerequisites:
  - instrumental-variables/wald-estimator
---
## Setup

For a univariate model $y_i = b_0 + b_Kx_{iK} + u_i$ with $\mathbb{E}(x_{iK}u_i) \neq 0$ and a continuous instrument $z_i^e$, the orthogonality condition is $\mathbb{E}(z_i^eu_i) = 0 \Leftrightarrow \text{Cov}(u_i, z_i^e) = 0$. Model the endogenous regressor as a linear function of the instrument: $x_{iK} = \delta_0 + \theta_1 z_i^e + r_i$. Since $\theta_1 = \text{Cov}(x_{iK}, z_i^e)/\mathbb{V}(z_i^e)$, the **rank condition** $A_2^{IV}$ requires $\theta_1 \neq 0$.

## Identification as a ratio of covariances

Under $A_1^{IV}$ and $A_2^{IV}$:

$$\text{Cov}(y_i, z_i^e) = b_K\,\text{Cov}(x_{iK}, z_i^e) + \underbrace{\text{Cov}(u_i,z_i^e)}_{=0 \text{ by } A_1^{IV}} \quad\Longrightarrow\quad b_K = \frac{\text{Cov}(y_i,z_i^e)}{\text{Cov}(x_{iK},z_i^e)}$$

Dividing numerator and denominator by $\mathbb{V}(z_i^e)$ expresses this as a ratio of two regression coefficients:

$$b_K = \frac{\text{reduced-form coefficient on } z^e\ (\pi_1)}{\text{first-stage coefficient on } z^e\ (\theta_1)}$$

from the three related equations: the **equation of interest** $y_i = b_0 + b_Kx_{iK} + u_i$; the **first stage** (or "IV equation") $x_{iK} = \delta_0 + \theta_1z_i^e + r_{iK}$; and the **reduced form**, obtained by substituting the first stage into the equation of interest, $y_i = \pi_0 + \pi_1z_i^e + v_i$ with $\pi_1 = b_K\theta_1$. The parameter of interest is recovered simply as $b_K = \pi_1/\theta_1$ — the effect of the instrument on the outcome, scaled by the effect of the instrument on the endogenous regressor.

## Weak instruments

If the rank condition holds only barely — $\text{Cov}(x_{iK}, z_i^e) \to 0$ — the instrument is **weak**: there is too little exogenous variation left to pin down $b_K$ reliably, and the ratio $\pi_1/\theta_1$ becomes unstable, inflating the estimate and introducing bias even asymptotically. This mirrors the effect of near-collinearity in [OLS](../matrix-algebra-for-econometrics/rank-of-a-matrix.md): a technically nonzero but small denominator produces an estimator that behaves badly in finite samples, and often in the limit as well.

## The Wald estimator as the "mother of all IV estimators"

Angrist and Pischke (2009, §4.1.3) make an organizing point that ties this entry back to the [Wald estimator](../instrumental-variables/wald-estimator.md): with a discrete (grouped) instrument, 2SLS is numerically identical to running GLS on group means, which in turn can be shown to be a particular weighted combination of all pairwise Wald estimators constructable from the instrument's support. A continuous instrument like draft-lottery number (ranging 1–365) does not change this picture much in practice, since it can typically be discretized into groups (e.g. eligibility ceilings, or 25-number bins) without much loss of information — every credible IV design, discrete or continuous, ultimately reduces to comparing group means of $y$ and of the endogenous regressor across values of the instrument, exactly the first-stage/reduced-form logic this entry formalizes.

*Source: Angrist & Pischke (2009), §4.1.3.*
