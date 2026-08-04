---
title: "Econometrics in Three Words: Parameter, Estimand, Estimator"
source: "Econ 2b, Ch.1 Traditional Approach to Causality, §Econometrics in Three Words"
status: enriched
tags:
  - identification
  - over-identification
  - under-identification
  - analogy-principle
  - parameter-estimand-estimator
prerequisites:
  - causal-inference-foundations/marshalls-maxim-and-the-all-causes-model
  - foundations/identification-and-statistical-inference
---
## Three concepts, three levels

Following Hull's *Metrics Notes*, empirical work moves through three distinct objects:

| Economic theory |  Population  |    Sample     |
| :-------------: | :----------: | :-----------: |
|        ↓        |      ↓       |       ↓       |
|  **Parameter**  | **Estimand** | **Estimator** |

**Identification** connects parameters to estimands — the *modeling* task of picking a population quantity that equals the parameter of interest. **Statistical inference** connects estimands to estimators — the *statistical* task of recovering the estimand from a finite sample.

> **Having an unbiased estimator does not mean you have identified a causal parameter.** $\hat\beta_1^{OLS} \to \beta_1^{OLS} = \text{Cov}(X,Y)/\text{Var}(X)$ is a statement about *inference* — it says nothing about whether $\beta_1^{OLS}$ *equals* a causal parameter such as the ATE. That further question is *identification*, and it requires additional assumptions the inference step does not supply on its own.

## Worked example: identification of β

Parameter: the wage-education relationship in France. Data: the joint distribution of $(y,X)$. Model: $y = \alpha + \beta X + u$ with $\text{Cov}(u,X)=0$ and $\text{Var}(X)\neq 0$. Then:

$$\text{Cov}(y,X) = \text{Cov}(\alpha+\beta X+u, X) = \beta\,\text{Cov}(X,X) + \text{Cov}(u,X) = \beta\,\text{Var}(X)$$

using linearity of covariance and the exogeneity assumption. Since $\text{Var}(X)\neq 0$, this solves uniquely for $\beta = \text{Cov}(y,X)/\text{Var}(X)$ — a known function of the joint distribution of observables, hence **identified**.

## Over-identification

A parameter is **over-identified** if it is uniquely determined *and* the model imposes a testable restriction on the data. Example: with two cross-sections, $y_t = \alpha+\beta X_t+u_t$ for $t=1,2$ each identify the *same* $\beta$, so the model implicitly restricts $\text{Cov}(y_1,X_1)/\text{Var}(X_1) = \text{Cov}(y_2,X_2)/\text{Var}(X_2)$. This restriction is testable — comparing $\hat\beta_1$ and $\hat\beta_2$ is closely related to the [Sargan test](../instrumental-variables/sargan-test-for-overidentification.md). A *just-identified* alternative (letting $\beta_t$ vary freely by period) drops the restriction entirely.

A second example: a Mincer-style model with $\ln(\text{salary}_i) = \beta_0+\beta_1\text{experience}_i+u_i$ imposes a *constant* return to experience — a functional-form restriction that is itself testable, e.g. by adding an interaction term for experience beyond a threshold and testing whether its coefficient is zero.

## Under-identification

A parameter is **not identified** (under-identified) if more than one value is consistent with the data and model. Example — selection: only wages of the employed ($S=1$) are observed, but $\mathbb{E}(y) = \Pr(S{=}1)\mathbb{E}(w\mid S{=}1) + \Pr(S{=}0)\mathbb{E}(w\mid S{=}0)$ requires the unobserved $\mathbb{E}(w\mid S{=}0)$, which the model leaves unrestricted — many values of $\mathbb{E}(y)$ remain consistent with the data. The [individual causal effect](../causal-inference-foundations/marshalls-maxim-and-the-all-causes-model.md) $\Delta_i$ is under-identified for the same structural reason: the counterfactual outcome is simply never observed and never restricted by the model.

## From identification to estimation: the analogy principle

Once a parameter is identified as a function of population moments, the natural estimator is the **sample analog**: replace each true moment with its empirical counterpart. If $\beta = \text{Cov}(y,X)/\text{Var}(X)$, then:

$$\hat\beta = \frac{\sum_{i=1}^{N}(y_i-\bar y)(X_i-\bar X)}{\sum_{i=1}^{N}(X_i-\bar X)^2}$$

This is the bridge used throughout the rest of this vault: every estimator introduced from here on is the sample analog of a population quantity shown, first, to be identified.

Cunningham (2021, Introduction) frames this same discipline as the defining feature of the "credibility revolution" in applied economics: causal inference is "the leveraging of theory and deep knowledge of institutional details to estimate the impact of events and choices on a given outcome of interest" — a definition that puts identification (the parameter-to-estimand step) and institutional knowledge, not statistical technique alone, at the center of the enterprise. The under-identification example given here — wages observed only for the employed — is a direct preview of the [partial identification](../partial-identification/00-overview.md) machinery developed later in the vault, where bounds rather than point identification become the honest fallback once an estimand genuinely cannot be pinned down to a single value.

*Source: Cunningham (2021), Introduction.*
