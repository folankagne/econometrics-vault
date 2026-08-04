---
title: Index Numbers and Event Studies in Time Series
source: "Wooldridge (2016), §10-4"
status: enriched
tags:
  - beyond-lectures
  - time-series
  - index-numbers
  - event-study
  - real-vs-nominal
prerequisites:
  - time-series-methods/static-and-finite-distributed-lag-models
---
## Index numbers, and why they are usually logged

Macroeconomic time series are often reported as **index numbers** — a single aggregated quantity (the Consumer Price Index, the Index of Industrial Production) expressed relative to an arbitrary **base period** set to $100$. An index number's *level* in any one year carries no independent meaning; only *ratios* across years are interpretable ("industrial production was 7.7% higher in 1992 than in the 1987 base year"). This is exactly why index numbers so often enter regressions in logarithmic form: taking logs converts an otherwise-arbitrary base-year normalization into an additive constant absorbed by the intercept, leaving the coefficient of interest to capture genuine percentage co-movement regardless of which base year the index happened to use.

## Real versus nominal variables

Standard economic theory — labor supply responding to the real wage, not the nominal one — requires converting **nominal** (current-dollar) series into **real** (constant-dollar) ones by dividing through by a price index: $\text{real wage} = w/(\text{CPI}/100)$. A subtle specification issue follows directly: modeling $\log(hours)=\beta_0+\beta_1\log(w/p)+u$ is equivalent to $\log(hours)=\beta_0+\beta_1\log(w)+\beta_2\log(p)+u$ **only if** the restriction $\beta_2=-\beta_1$ is imposed; leaving $\beta_1$ and $\beta_2$ unrestricted and testing whether $\hat\beta_2\approx-\hat\beta_1$ is itself a test of whether economic agents respond to real values as theory predicts, or whether nominal illusion (workers responding to the dollar figure on their paycheck, not its purchasing power) plays some independent role.

## Event studies

An **event study** asks whether a specific, dateable event moved an outcome — did a new regulation move a firm's stock price, did an antidumping ruling change import volumes — typically via a regression on a small set of dummy variables marking the event window, alongside controls for factors that would have moved the outcome regardless (a broad market index, in a stock-price event study; overall demand conditions, in a trade-policy event study). The **barium chloride antidumping** application illustrates the logic cleanly: dummies for the six months before a complaint was filed, the six months after filing, and the six months after a ruling in the domestic industry's favor, alongside controls for chemical production, gasoline production, and the exchange rate. The pre-filing dummy is statistically insignificant (no evidence Chinese exporters anticipated the complaint and altered behavior beforehand), while the post-ruling dummy shows a large, statistically significant $43.2\%$ fall in Chinese imports [$100(\exp(-.565)-1)$] — a textbook example of using a dated policy event, rather than a designed experiment, as a source of identifying variation, in the same spirit as the [natural-experiment logic](../difference-in-differences/card-krueger-and-assessing-parallel-trends.md) developed for cross-sectional DiD, now applied within a single time series.

*Source: Wooldridge (2016), §10-4, Examples 10.5–10.6; Krupp & Pollard (1996).*
