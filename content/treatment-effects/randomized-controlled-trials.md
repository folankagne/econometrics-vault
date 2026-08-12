---
title: Randomized Controlled Trials (RCTs)
source: "Econ 2b, Ch.2 Rubin's Causal Model and Randomized Experiments, §Randomized Controlled Trials (RCTs)"
status: enriched
tags:
  - randomized-controlled-trial
  - perfect-compliance
  - difference-in-means
  - no-selectivity
prerequisites:
  - treatment-effects/the-selectivity-problem
  - treatment-effects/randomized-experiments-and-difference-in-means
---
## Randomization makes no-selectivity true by design

Rather than *assuming* no selectivity, an RCT **constructs** it: draw treated and untreated units randomly from the population, so that:

$$D \perp (y_1, y_0, X)$$

for any $X$ determined prior to randomization. This guarantees $\mathbb{E}(y_0\mid D{=}1) = \mathbb{E}(y_0\mid D{=}0) = \mathbb{E}(y_0)$ **by construction**, resolving [the selectivity problem](../treatment-effects/the-selectivity-problem.md) without needing to argue for it.

## Identification under perfect compliance

With **perfect compliance** (everyone receives the treatment they were assigned), the treatment-control comparison identifies the ATE, which under randomization also equals the TT:

$$
\begin{align}
\mathbb{E}(y\mid D{=}1) - \mathbb{E}(y\mid D{=}0) &= \mathbb{E}(y_1\mid D{=}1) - \mathbb{E}(y_0\mid D{=}0) && \text{(perfect compliance: observed } y \text{ equals the relevant potential outcome)} \\
&= \mathbb{E}(y_1 - y_0 \mid D{=}1) && \text{(random assignment: } \mathbb{E}(y_0\mid D{=}0)=\mathbb{E}(y_0\mid D{=}1)\text{)} \\
&= \mathbb{E}(y_1-y_0) && \text{(random assignment: } (y_0,y_1)\perp D\text{)}
\end{align}
$$

> If compliance is imperfect — some assigned to treatment refuse it, or some assigned to control obtain it anyway — then $D=1$ no longer represents a random draw from the population: those who actually take treatment may differ systematically (more motivated, more in need), so $\mathbb{E}(y_1-y_0\mid D{=}1) \neq \mathbb{E}(y_1-y_0)$ and the simple comparison stops identifying the ATE. This motivates intention-to-treat analysis and instrumental-variables approaches, developed in the entries on imperfect compliance.

## Estimation: difference-in-means

Under perfect compliance, $ATE \equiv \mathbb{E}(y_1-y_0) = \mathbb{E}(y\mid D{=}1)-\mathbb{E}(y\mid D{=}0)$, with sample analog:

$$\widehat{ATE} = \frac{1}{N_1}\sum_{i:D_i=1} y_i - \frac{1}{N_0}\sum_{i:D_i=0} y_i \equiv \bar y_1 - \bar y_0$$

exactly the [difference-in-means estimator](../treatment-effects/randomized-experiments-and-difference-in-means.md), which equals $\hat\beta^{OLS}$ in the simple regression $y=\alpha+\beta D+u$.

## Two flagship examples: STAR and the Perry Preschool Project

Angrist and Pischke (2009, §2.2) hold up the Tennessee STAR class-size experiment as the paradigm case: 11,600 kindergartners randomly assigned to small classes (13–17 students), regular classes (22–25), or regular classes with a teacher's aide, run at a cost of roughly \$12 million over four years — expensive and logistically demanding, but delivering an internally airtight answer (a lasting, statistically significant achievement gain of roughly 0.2 standard deviations for small classes) that non-experimental class-size studies had failed to establish credibly. An even earlier example they cite is the 1962 Perry Preschool Project: 123 Black preschoolers in Ypsilanti, Michigan randomly assigned to an intensive early-intervention program, followed up through age 27 — a small trial whose results nevertheless provided the intellectual foundation for Head Start, the federal preschool program that has served millions of children since 1964. Both examples illustrate why RCTs, despite their cost and logistical difficulty, remain the benchmark this vault's other identification strategies are implicitly judged against.

*Source: Angrist & Pischke (2009), §§2.1–2.2.*
