---
title: The Central Limit Theorem, Formally
source: "Econ 2b, Appendix S1, §Central Limit Theorem"
status: enriched
tags:
  - central-limit-theorem
  - moment-generating-function
  - lyapunov-clt
prerequisites:
  - reference/laws-of-large-numbers-formal
  - asymptotic-theory/convergence-in-distribution-and-the-central-limit-theorem
---
This formalizes the [CLT](../asymptotic-theory/convergence-in-distribution-and-the-central-limit-theorem.md) already introduced, with a full proof and an extension beyond the i.i.d. case.

## Statement (Lindeberg-Lévy)

For i.i.d. $Y_1,\dots,Y_n$ with mean $\mu$ and finite variance $\sigma^2>0$, the standardized average $Z_n = \sqrt{n}(\bar Y_n-\mu)/\sigma$ satisfies $Z_n\overset{d}{\to}\mathcal{N}(0,1)$.

## Proof via moment generating functions

Center and standardize: $W_i=(Y_i-\mu)/\sigma$, so $\mathbb{E}[W_i]=0,\mathbb{E}[W_i^2]=1$, and $Z_n = \frac{1}{\sqrt n}\sum_i W_i$. If the MGF $M(t)=\mathbb{E}[e^{tW_i}]$ exists near zero, a Taylor expansion gives $M(t) = 1+\frac{t^2}{2}+O(t^3)$. By independence, $M_{Z_n}(t) = [M(t/\sqrt n)]^n$; substituting the expansion at $t/\sqrt n$:

$$M_{Z_n}(t) = \left(1+\frac{t^2}{2n}+O(n^{-3/2})\right)^n \longrightarrow e^{t^2/2}$$

which is exactly the MGF of $\mathcal{N}(0,1)$. Convergence of MGFs on an open interval implies convergence in distribution, giving $Z_n\overset{d}{\to}\mathcal{N}(0,1)$.

**Alternative: characteristic functions.** The MGF proof requires the MGF to exist, excluding heavy-tailed distributions. The standard proof instead uses the characteristic function $\varphi_{W_i}(t)=\mathbb{E}[e^{itW_i}]$, which *always* exists; an analogous expansion $\varphi_{W_i}(t)=1-t^2/2+o(t^2)$ gives $\varphi_{Z_n}(t)\to e^{-t^2/2}$, and Lévy's continuity theorem converts this into convergence in distribution — a proof that works even when moments beyond the second don't exist.

## Practical takeaway

For large $n$, $\bar Y_n \approx \mathcal{N}(\mu,\sigma^2/n)$ **regardless of the shape of the underlying distribution** of $Y_i$, as long as $\sigma^2<\infty$. The $\sqrt n$ scaling is what keeps the limit non-degenerate — without it, $\bar Y_n-\mu\overset{\mathbb{P}}{\to}0$ collapses to a point mass, exactly the tension already resolved in the [informal CLT discussion](../asymptotic-theory/convergence-in-distribution-and-the-central-limit-theorem.md). This $\sqrt n$-rate is the reason standard errors and $t$-statistics take the form they do throughout econometric inference.

## Extension: Lyapunov CLT for non-identical distributions

When the $Y_i$ are independent but **not** identically distributed, Lindeberg-Lévy no longer applies directly. Let $S_n^2 = \sum_i\mathbb{V}(Y_i)$. If, for some $\delta>0$:

$$\frac{1}{S_n^{2+\delta}}\sum_{i=1}^n \mathbb{E}\big[|Y_i-\mathbb{E}[Y_i]|^{2+\delta}\big] \longrightarrow 0$$

(the **Lyapunov condition**), then $S_n^{-1}\sum_i(Y_i-\mathbb{E}[Y_i])\overset{d}{\to}\mathcal{N}(0,1)$ regardless. This is invoked, for instance, to justify asymptotic normality of the ATE estimator under complete randomization when the potential outcomes $\{y_i(0),y_i(1)\}$ are treated as fixed rather than random — a design-based inference setting where the $Y_i$ are independent (from the randomization) but not identically distributed (since each unit's own fixed potential outcomes differ).

This design-based application is exactly the theoretical foundation underneath [randomization inference](../treatment-effects/statistical-power-and-type-i-ii-errors.md): Fisher's exact permutation test sidesteps asymptotic approximations entirely by conditioning on the fixed potential outcomes and enumerating every possible reassignment, while the Lyapunov CLT is what justifies treating the *usual* asymptotic-normal test as a valid large-sample approximation to that same exact randomization distribution, even though the underlying $Y_i$ are non-identically distributed fixed quantities rather than i.i.d. draws from a common population distribution.
