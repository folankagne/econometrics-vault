---
title: The Laws of Large Numbers, Formally
source: "Econ 2b, Appendix S1, §Law of Large Numbers"
status: enriched
tags:
  - law-of-large-numbers
  - chebyshev-inequality
  - continuous-mapping-theorem
prerequisites:
  - asymptotic-theory/law-of-large-numbers
---
This formalizes the [Law of Large Numbers](../asymptotic-theory/law-of-large-numbers.md) already introduced, distinguishing three versions by their mode of convergence.

## Weak Law of Large Numbers (WLLN)

For i.i.d. $Y_1,\dots,Y_n$ with mean $\mu$ and finite variance $\sigma^2$: $\Pr(|\bar Y_n-\mu|\geq\varepsilon)\to0$ as $n\to\infty$, for every $\varepsilon>0$ — equivalently $\text{plim}\,\bar Y_n=\mu$.

**Proof.** $\mathbb{E}[\bar Y_n]=\mu$, $\mathbb{V}(\bar Y_n)=\sigma^2/n$. By **Chebyshev's inequality**, $\Pr(|\bar Y_n-\mu|\geq\varepsilon)\leq \mathbb{V}(\bar Y_n)/\varepsilon^2 = \sigma^2/(n\varepsilon^2) \to 0$.

## Strong Law of Large Numbers (SLLN)

$\Pr(\lim_{n\to\infty}\bar Y_n=\mu)=1$ — i.e. $\bar Y_n \to \mu$ **almost surely**, a strictly stronger statement than the WLLN: it asserts the event "$\bar Y_n$ fails to converge to $\mu$" has probability exactly zero, not merely that each individual deviation probability shrinks. A full proof requires the Borel-Cantelli lemma (if $\mathbb{E}[Y_i^4]<\infty$) or Kolmogorov's maximal inequality (for the general case, needing only $\mathbb{E}[|Y_i|]<\infty$).

## Uniform Law of Large Numbers (ULLN)

For a family of functions $g(\cdot;\theta)$ indexed by $\theta$ in a compact set $\Theta$, with $\mathbb{E}[\sup_\theta|g(Y_i;\theta)|]<\infty$: $\sup_\theta\big|\frac1n\sum_i g(Y_i;\theta) - \mathbb{E}[g(Y_i;\theta)]\big| \overset{a.s.}{\to} 0$. This is what's needed for **consistency of extremum estimators** (MLE, GMM), where the sample criterion function must converge to its population counterpart *uniformly* across the whole parameter space, not just pointwise at the true value — otherwise the maximizer of the sample criterion need not converge to the maximizer of the population criterion.

## The continuous mapping theorem and plim algebra

If $\text{plim}\,W_n=\theta$ and $g$ is continuous at $\theta$, then $\text{plim}\,g(W_n)=g(\theta)$. More generally, for $\text{plim}\,T_n=\tau$ and $\text{plim}\,U_n=\upsilon$: $\text{plim}(T_n+U_n)=\tau+\upsilon$, $\text{plim}(T_nU_n)=\tau\upsilon$, and $\text{plim}(T_n/U_n)=\tau/\upsilon$ (for $\upsilon\neq0$). These innocuous-looking algebra rules are what license, e.g., the [consistency proof for OLS](../asymptotic-theory/asymptotic-distribution-of-ols-can.md) — every step that moves a $\text{plim}$ through a sum, product, or ratio of estimators relies on exactly this.

The WLLN/SLLN distinction is mostly a mathematical nicety for applied econometric work — nearly every consistency result cited elsewhere in this vault only ever needs the weak version, since convergence in probability is exactly what "consistent estimator" means throughout. The ULLN is the one genuinely load-bearing extension for applied purposes: it is the formal requirement behind claims like "the MLE is consistent" or "the GMM estimator is consistent," wherever an estimator is itself defined as the maximizer or zero of a sample-based criterion function rather than a simple closed-form average.
