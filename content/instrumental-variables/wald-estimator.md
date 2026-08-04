---
title: The Wald Estimator
source: "Econ 1, Lecture Notes, §Univariate model with binary regressor: the Wald estimator"
status: enriched
tags:
  - wald-estimator
  - binary-instrument
  - instrumental-variables
prerequisites:
  - instrumental-variables/iv-identification-conditions
---
## Setup

Consider the simplest possible IV setting: a univariate model $y_i = \alpha + \rho s_i + u_i$ with $\mathbb{E}(u_i\mid s_i) = 0$ imposed on the *conditional* model, and a **binary instrument** $z_i^e \in \{0,1\}$ satisfying $\mathbb{E}(u_i\mid z_i^e) = 0$. Taking expectations conditional on the instrument at each of its two values:

$$\mathbb{E}(y_i\mid z_i^e{=}1) = \alpha + \rho\,\mathbb{E}(s_i\mid z_i^e{=}1) \qquad\qquad \mathbb{E}(y_i\mid z_i^e{=}0) = \alpha + \rho\,\mathbb{E}(s_i\mid z_i^e{=}0)$$

## The estimator

Subtracting and solving for $\rho$:

$$\rho = \frac{\mathbb{E}(y_i\mid z_i^e{=}1) - \mathbb{E}(y_i\mid z_i^e{=}0)}{\mathbb{E}(s_i\mid z_i^e{=}1) - \mathbb{E}(s_i\mid z_i^e{=}0)}$$

Replacing population moments with sample means gives the **Wald estimator**, consistent under $A_1^{IV}$:

$$\text{plim}\,\hat\rho = \frac{\bar{y}^{z^e=1} - \bar{y}^{z^e=0}}{\bar{s}^{z^e=1} - \bar{s}^{z^e=0}} = \rho$$

## Interpretation and a trade-off

Applied to the Mincer equation with quarter-of-birth as a binary instrument (born in Q4 versus not), the numerator is the difference in mean wages between the two birth-quarter groups, and the denominator is the difference in mean schooling between them — [Angrist and Krueger (1991)](../instrumental-variables/iv-identification-conditions.md) compute exactly this. Notably, their OLS and Wald estimates turn out to be quite close in magnitude — yet the Wald (IV) estimate is the one to trust if endogeneity (e.g. ability bias) is a genuine concern.

> The Wald estimator has **higher variance** than OLS. OLS exploits *all* available variation in the regressor; the Wald estimator discards whatever variation is not tied to the instrument, on the grounds that this discarded variation is potentially confounded. Using strictly less variation to pin down the same parameter necessarily means less precision — the familiar cost of solving an endogeneity problem via instruments.

## The draft-lottery example

Angrist and Pischke (2009, §4.1.2) present the Vietnam-era draft lottery as the cleanest illustration of the Wald estimator's logic. From 1970–72, random sequence numbers were assigned to birth dates; men with numbers below a randomly set ceiling were draft-eligible. Draft-eligibility ($Z_i$) is a valid instrument for veteran status ($D_i$) because it was **literally randomly assigned** — the only threat to validity is whether it affects earnings ($Y_i$) through any channel other than military service. For men born in 1950, mean 1981 earnings were $\$16{,}461$; eligibility lowered earnings by $\$435.80$ (the reduced form), while eligibility raised the probability of serving by $0.159$ (the first stage). The Wald estimate of the effect of *military service* on earnings is therefore $-435.80/0.159 \approx -\$2{,}741$ — roughly 15% of mean earnings. A validity check on the same design: draft-eligibility has *no* effect on 1969 earnings (predating the 1970 lottery, coefficient $\approx -\$2.0$, statistically indistinguishable from zero) — exactly what the exclusion restriction predicts, since eligibility could not yet have influenced anyone's behavior.

*Source: Angrist & Pischke (2009), §4.1.2, Table 4.1.3.*
