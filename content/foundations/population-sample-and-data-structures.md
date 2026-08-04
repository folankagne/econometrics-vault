---
title: Population, Sample, and Data Structures
source: "Econ 1, Lecture Notes, §The two fundamental inferential problems in econometrics › Empirical analysis and inference"
status: enriched
tags:
  - population
  - sample
  - simple-random-sample
  - inference
prerequisites:
  - foundations/what-is-econometrics
---
## Population and sample

The **population** is the complete collection of all units under study — for instance, all individuals in a country, or all registered companies. "Individuals" here need not be human; any well-defined observation unit qualifies. The **data** at hand is a collection of observations on $N$ units drawn from that population.

## Sampling process

The **sampling process** is the rule used to select which units from the population end up in the sample. This vault, like the course it is drawn from, works throughout under the assumption of a **simple random sample (SRS)**: with $P$ units in the population and a sample of size $N$, an SRS gives every unit the same probability of inclusion, $s_j = N/P$ for $j = 1, \dots, P$. As the sample size $N$ grows, the amount of information available grows with it.

## Stacking the sample into vectors and matrices

Let $y_i$ be the outcome of interest (e.g. monthly wages) for individual $i \in \{1, \dots, N\}$. Stacking the sample gives a column vector:

$$\mathbf{y} = \begin{pmatrix} y_1 \\ \vdots \\ y_i \\ \vdots \\ y_N \end{pmatrix}$$

If $K$ explanatory variables $x_1, \dots, x_K$ are also observed for every individual (education, experience, gender, etc.), each is itself an $(N \times 1)$ column vector, and placing the $K$ vectors side by side gives an $(N \times K)$ matrix:

$$
\mathbf{X} = \begin{pmatrix}
x_{11} & \dots & x_{1k} & \dots & x_{1K} \\
\vdots & \ddots & \vdots & \ddots & \vdots \\
x_{i1} & \dots & x_{ik} & \dots & x_{iK} \\
\vdots & \ddots & \vdots & \ddots & \vdots \\
x_{N1} & \dots & x_{Nk} & \dots & x_{NK}
\end{pmatrix}
$$

The entire sample is summarized by the $K+1$ vectors $\{\mathbf{y}; \mathbf{x}_1; \dots; \mathbf{x}_K\}$.

## The inference question

The central question this data structure is built to answer is: **what conclusions can and cannot be drawn about the target population, from what is observed in the sample at hand?** This is the question of **inference**, and it sits at the heart of essentially all econometric work — distinct from, though easily confused with, the narrower notion of [statistical inference](../foundations/identification-and-statistical-inference.md) discussed next.

## Four data structures (Wooldridge, 2016, §1-3)

The vector/matrix layout above is generic, but *how* the $N$ observations relate to one another across units and time matters enormously for which econometric methods are valid. Wooldridge distinguishes four structures:

- **Cross-sectional data** — a sample of individuals, households, firms, or other units observed at (essentially) one point in time, e.g. wages, education, and experience for 526 workers in 1976. The order of the observations carries no information, and under simple random sampling the observations can be treated as independent draws — this is the structure Part I of this vault (and Wooldridge Part 1) is built around, because it raises the fewest technical complications.
- **Time series data** — observations on one or more variables over time (stock prices, GDP, monthly minimum wage and unemployment for Puerto Rico). Here the *chronological ordering is essential information*: economic time series are rarely independent across periods (last quarter's GDP predicts this quarter's), and trends, seasonality, and persistence require dedicated methods not needed for cross-sections.
- **Pooled cross sections** — independent random samples taken at different points in time and stacked together (e.g. household surveys from 1985 and 1990, or house sales from 1993 and 1995 bracketing a property-tax change). Different units appear in each period; pooling mainly buys sample size and lets a relationship be compared before vs. after an event — this is the structure underlying the simplest before/after [difference-in-differences](../difference-in-differences/00-overview.md) designs.
- **Panel (longitudinal) data** — the *same* cross-sectional units followed over multiple periods (the same 150 cities' crime statistics in 1986 and 1990). Unlike a pooled cross section, panel data let unobserved, time-constant characteristics of each unit be controlled for by construction — this is what makes fixed-effects estimators like [two-way fixed effects](../difference-in-differences/two-way-fixed-effects.md) possible, and is often the only way to make progress on a causal question when random assignment is unavailable.

Distinguishing these structures matters because the methods valid for one can be invalid, or need modification, for another: independence across observations — a natural assumption for a cross-section — is precisely what fails by construction in time series and panel data.

*Source: Wooldridge (2016), §1-3.*
