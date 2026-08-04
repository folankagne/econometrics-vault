---
title: Hypothesis Testing and t-Statistics
source: "Econ 1, Lecture Notes, §Confidence intervals and tests of statistical significance"
status: enriched
tags:
  - hypothesis-testing
  - t-statistic
  - p-value
  - statistical-significance
prerequisites:
  - ols-estimation/confidence-intervals-for-ols-coefficients
---
## From the pivotal statistic to a test

Because $\frac{\hat{b}_k^{OLS} - b_k}{\sqrt{\hat{\sigma}^2 S_k}} \equiv \mathcal{T}_{N-K-1}$ (see [confidence intervals for OLS coefficients](../ols-estimation/confidence-intervals-for-ols-coefficients.md)), any candidate value $b_0$ for the true $b_k$ can be tested directly: if $b_k = b_0$ is true, plugging $b_0$ into the statistic yields a $t$-distributed quantity; if $b_k \neq b_0$, it generally does not follow that distribution. This gives the **null** and **alternative** hypotheses:

$$H_0: b_k = b_0 \qquad\qquad H_1: b_k \neq b_0$$

with test statistic $t = \dfrac{\hat{b}_k^{OLS} - b_0}{\sqrt{\hat{\sigma}^2 S_k}}$. The most common special case is $b_0 = 0$ — testing whether a regressor has any effect at all — which simplifies the statistic to $t = \dfrac{\hat{b}_k^{OLS}}{\sqrt{\hat{\sigma}^2 S_k}}$, the coefficient's **t-stat**.

## p-values and significance levels

The **p-value** answers: *if $H_0$ were true*, how likely is a t-statistic at least as extreme as the one actually observed? A very low p-value means the observed t-stat would be an unlikely draw from the $\mathcal{T}_{N-K-1}$ distribution implied by $H_0$ — i.e., it is unlikely the result arose by pure sampling chance under the null. Rejecting $H_0$ whenever the p-value falls below $0.05$ corresponds to a $95\%$ significance level: rejecting only when there is at most a $5\%$ chance the observed statistic came from the null's distribution.

The conventional thresholds — p-values below $0.01$, $0.05$, and $0.10$, corresponding to $99\%$, $95\%$, and $90\%$ significance — are an academic convention, not a theoretical requirement; there is no principled reason a result at $p = 0.051$ is qualitatively different from one at $p = 0.049$.

> A p-value is the probability of the *data* (or something more extreme) given the null hypothesis, $\mathbb{P}(\text{data} \mid H_0)$ — it is **not** the probability that $H_0$ is true given the data, $\mathbb{P}(H_0 \mid \text{data})$, a common and consequential misreading. A low p-value is evidence against $H_0$, not a direct statement about how likely $H_0$ is to be correct.

## One-sided tests, and testing values other than zero

Wooldridge (2016, §4-2) emphasizes a distinction this entry's two-sided framing elides: the alternative hypothesis should be chosen *before* looking at the data, not read off the sign of the estimated coefficient. Against a one-sided alternative such as $H_1: \beta_k > 0$, the rejection rule uses the *signed* t-statistic against a one-tailed critical value ($t_{\hat\beta_k} > c$), which is more powerful than a two-sided test at detecting an effect in the hypothesized direction — but a large negative t-statistic, no matter how extreme, then provides *no* evidence in favor of $H_1$. Wooldridge's campus-crime example illustrates testing a value other than zero: for the constant-elasticity model $\log(crime) = \beta_0+\beta_1\log(enroll)+u$, the economically interesting null is $H_0:\beta_1=1$ (crime rises proportionally with enrollment) against $H_1:\beta_1>1$ (crime rises more than proportionally). The test statistic generalizes to $t = (\hat\beta_1 - 1)/\text{se}(\hat\beta_1)$ — subtracting the *hypothesized* value, not zero — and with $\hat\beta_1=1.27$, $\text{se}=0.11$, $t=(1.27-1)/0.11\approx 2.45$, comfortably rejecting $\beta_1=1$ at the 1% level.

A recurring practical distinction is **statistical vs. economic (practical) significance**: statistical significance is determined purely by the size of the t-statistic, while economic significance depends on the size and sign of $\hat\beta_k$ itself. With a large enough sample, even a trivially small, practically unimportant effect can become statistically significant (Wooldridge's 401(k)-participation example: firm size has a statistically significant but practically tiny effect on plan participation), and conversely a practically large coefficient can fail to reach significance in a small sample — the two questions ("is there evidence of an effect?" and "how big is the effect?") must be kept separate.

*Source: Wooldridge (2016), §§4-2, 4-2f.*
