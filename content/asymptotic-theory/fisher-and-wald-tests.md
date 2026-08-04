---
title: Joint Hypothesis Tests, The Fisher and Wald Statistics
source: "Econ 1, Lecture Notes, §Testing without the normality assumption › Asymptotic tests: unidimensional, multivariate, hypothesis"
status: enriched
tags:
  - fisher-test
  - wald-test
  - joint-hypothesis-test
  - f-distribution
  - chi-square-distribution
  - r-squared
prerequisites:
  - asymptotic-theory/hypothesis-testing-framework-errors-and-power
  - probability-and-distributions/fishers-f-distribution
  - probability-and-distributions/chi-square-distribution
---
## From one parameter to several: why a new tool is needed

Testing several restrictions at once — e.g. whether $\beta_{LL} = \beta_{LC} = \beta_{CC} = 0$ jointly, to decide whether a Cobb-Douglas production function (constrained) is preferable to a translog one (unconstrained) — requires the *joint* distribution of several statistics, a "hyperspace" that is awkward to work with directly. The standard trick: the sum of squares of $q$ i.i.d. standard normal statistics is [chi-square](../probability-and-distributions/chi-square-distribution.md) distributed with $q$ degrees of freedom, so stacking standardized statistics into a vector and taking its scalar (quadratic-form) product turns a multivariate problem into a univariate chi-square one.

## Setting up q linear restrictions

Any set of $q$ linear restrictions on the parameter vector is written $\mathbf{C}\mathbf{b} = \mathbf{r}$, for a $(q \times (K{+}1))$ matrix $\mathbf{C}$ and $(q \times 1)$ vector $\mathbf{r}$ chosen to encode the hypothesis of interest. The competing models are the **constrained** model $H_C: \mathbf{y} = \mathbf{X}\mathbf{b} + \mathbf{u}$ subject to $\mathbf{C}\mathbf{b} = \mathbf{r}$, versus the **non-constrained** model $H_{NC}: \mathbf{y} = \mathbf{X}\mathbf{b} + \mathbf{u}$.

## The Fisher ("exact") test, under normality

Under $A_5^{OLS}$ (normality), $\mathbf{C}\hat{\mathbf{b}}_{OLS} \equiv \mathcal{N}[\mathbf{C}\mathbf{b}, \sigma^2\mathbf{C}(\mathbf{X}'\mathbf{X})^{-1}\mathbf{C}']$. Under $H_C$, $\mathbb{E}(\mathbf{C}\hat{\mathbf{b}}_{OLS} - \mathbf{r}) = \mathbf{0}$, so a quadratic form in $(\mathbf{C}\hat{\mathbf{b}}_{OLS} - \mathbf{r})$ is $\chi^2(q)$-distributed. Replacing the unknown $\sigma^2$ with its estimate $\hat\sigma^2$ (which introduces an independent $\chi^2(N-K-1)$ term in the denominator) gives the **Fisher statistic**:

$$f = \frac{(\mathbf{C}\hat{\mathbf{b}}_{OLS}-\mathbf{r})'[\hat\sigma^2\mathbf{C}(\mathbf{X}'\mathbf{X})^{-1}\mathbf{C}']^{-1}(\mathbf{C}\hat{\mathbf{b}}_{OLS}-\mathbf{r})}{q} \ \underset{H_C}{\equiv}\ F(q,\, N-K-1)$$

This is called an "exact" test because, under normality, the test achieves its stated Type I error rate exactly in every finite sample — not merely as $N \to \infty$. An equivalent, and often more practical, formula uses residual sums of squares or $R^2$ from the constrained (CLS) and unconstrained (OLS) fits:

$$f = \frac{RSS_{CLS} - RSS_{OLS}}{RSS_{OLS}}\cdot\frac{df_{OLS}}{df_{CLS} - df_{OLS}} = \frac{R^2_{OLS} - R^2_{CLS}}{1 - R^2_{OLS}}\cdot\frac{df_{OLS}}{df_{CLS}-df_{OLS}}$$

A standard special case is the test of **global significance** of a model — whether all slope coefficients are jointly zero, $H_0: b_1 = \dots = b_K = 0$ — which reduces to:

$$f = \frac{R^2_{OLS}}{1 - R^2_{OLS}}\cdot\frac{N-K-1}{K} \equiv F(K,\, N-K-1)$$

## The Wald test: the asymptotic generalization

Dropping normality, [CAN](../asymptotic-theory/asymptotic-distribution-of-ols-can.md) still gives $\sqrt{N}(\mathbf{C}\hat{\mathbf{b}}_{OLS} - \mathbf{r}) \overset{\mathcal{L}}{\underset{H_0}{\to}} \mathcal{N}[\mathbf{0}, \mathbf{C}\,\mathbb{V}_{as}(\hat{\mathbf{b}}_{OLS})\,\mathbf{C}']$, so an analogous quadratic form converges to $\chi^2(q)$. Substituting the consistent estimator of the asymptotic variance gives the **Wald statistic**:

$$\hat{W}_{ald} = (\mathbf{C}\hat{\mathbf{b}}_{OLS}-\mathbf{r})'[\mathbf{C}\hat\sigma^2(\mathbf{X}'\mathbf{X})^{-1}\mathbf{C}']^{-1}(\mathbf{C}\hat{\mathbf{b}}_{OLS}-\mathbf{r}) \ \overset{\mathcal{L}}{\underset{H_0}{\to}}\ \chi^2(q)$$

Algebraically, $\hat{W}_{ald}$ equals $q$ times the Fisher statistic $f$ — the Wald test is exactly the large-sample analogue of the Fisher test, trading the exact finite-sample $F(q, N-K-1)$ reference distribution for the asymptotic $\chi^2(q)$ one, which no longer requires assuming normal errors.

**Consistency.** If instead $H_1$ holds, with $\mathbf{C}\mathbf{b} - \mathbf{r} = \mathbf{m} \neq \mathbf{0}$, then $\hat{W}_{ald}/N$ converges in probability to a strictly positive constant, so $\hat{W}_{ald} \overset{\mathbb{P}}{\to} +\infty$ — exactly the divergence argument used for the [univariate asymptotic test](../asymptotic-theory/hypothesis-testing-framework-errors-and-power.md), extended to the multivariate case. The Wald test of asymptotic size $\alpha$ is therefore consistent: its power converges to $1$ under any fixed departure from $H_0$.

## A third option: the Lagrange multiplier (LM) statistic

Wooldridge (2016, §5-2a) presents a third asymptotically equivalent way to test $q$ exclusion restrictions, $H_0: \beta_{K-q+1}=\dots=\beta_K=0$, that needs only the **restricted** model to be estimated — useful when the unrestricted model is inconvenient to fit. The procedure: (i) regress $y$ on the restricted set of regressors and save the residuals $\tilde u$; (ii) regress $\tilde u$ on *all* regressors (restricted and excluded together — an **auxiliary regression** whose coefficients are not of direct interest) and obtain its $R^2$, call it $R_u^2$; (iii) compute $LM = n R_u^2$. Under $H_0$, $LM \overset{\mathcal{L}}{\to} \chi^2(q)$ — hence the LM statistic's alternative name, the **$n R^2$ statistic**. Intuitively, if the omitted variables truly have zero coefficients, the restricted-model residuals should be (asymptotically) uncorrelated with everything, including the excluded regressors, so $R_u^2$ should be small; multiplying by $n$ turns "small $R^2$" into a properly scaled test statistic. Wooldridge's crime-model example (testing whether `avgsen` and `tottime` jointly affect `narr86`) finds $LM\approx 4.09$ against a 10% critical value of $4.61$ for $\chi^2(2)$ — failing to reject, and yielding a $p$-value ($\approx 0.129$) close to the $F$-test's ($\approx 0.131$) on the same restriction, illustrating that with large samples, $F$, Wald, and LM tests rarely disagree in practice.

*Source: Wooldridge (2016), §5-2a.*
