---
title: Dynamic TWFE and Event Studies
source: "Econ 2b, Ch.6 Difference-in-Differences and Two-Way Fixed Effects, §Dynamic TWFE and Event Studies"
status: enriched
tags:
  - event-study
  - pre-trend-testing
  - contamination
prerequisites:
  - difference-in-differences/early-vs-late-treated-illustrative-example
---
## The event study specification

To trace how effects evolve with exposure length, researchers estimate a **dynamic TWFE / event study**:

$$Y_{g,t} = \gamma_g+\lambda_t+\sum_{\ell=-K,\ \ell\neq-1}^{L}\beta_\ell\cdot\mathbf{1}\{F_g=t-\ell\} + \varepsilon_{g,t}$$

where $F_g$ is group $g$'s first treatment period. $\beta_{-1}=0$ is the normalization (reference period, the period just before treatment); for $\ell\geq0$, $\beta_\ell$ is meant to capture the effect of having been treated for $\ell{+}1$ periods; for $\ell\leq-2$, $\beta_\ell$ is meant as a **pre-trend test** — under parallel trends, a not-yet-treated group's current outcome should not differ from other not-yet-treated groups', so $\hat\beta_\ell\neq0$ for $\ell\leq-2$ is read as evidence against the identifying assumption.

```tikz
\begin{document}
\begin{tikzpicture}[scale=1]
\draw[->] (-4,0) -- (4,0) node[right] {Event time $\ell$};
\draw[->] (0,-1) -- (0,3) node[above] {$\hat\beta_\ell$};
\draw[dashed] (-4,0) -- (4,0);
\draw (-3,-0.3) -- (-3,0.3); \fill (-3,0) circle (1.5pt);
\draw (-2,-0.25) -- (-2,0.35); \fill (-2,0.05) circle (1.5pt);
\node at (-1,0) {$\times$};
\node[below] at (-1,-0.4) {(ref.)};
\draw (0,0.9) -- (0,1.5); \fill (0,1.2) circle (1.5pt);
\draw (1,1.4) -- (1,2.2); \fill (1,1.8) circle (1.5pt);
\draw (2,1.7) -- (2,2.5); \fill (2,2.1) circle (1.5pt);
\draw (3,1.6) -- (3,2.6); \fill (3,2.1) circle (1.5pt);
\node[below] at (-3,-0.3) {$-3$};
\node[below] at (-2,-0.25) {$-2$};
\node[below] at (0,-0.05) {$0$};
\node[below] at (1,-0.05) {$1$};
\node[below] at (2,-0.05) {$2$};
\node[below] at (3,-0.05) {$3$};
\end{tikzpicture}
\end{document}
```
*Figure — a well-behaved event study: pre-period coefficients ($\ell\leq-2$) sit flat near zero (no pre-trend), while post-period coefficients ($\ell\geq0$) jump and persist. The reference period $\ell=-1$ is normalized to zero by construction, marked $\times$. As the contamination result below shows, this clean visual pattern is necessary but not sufficient evidence that parallel trends actually holds.*

## Example: France's parental leave benefit (Piketty 1998)

In 1994, France extended the *Allocation parentale d'éducation* (a parental-leave benefit) from parents with $3{+}$ children to parents with $2$. Piketty (1998) compares employment of mothers with $2$ children (treated) against mothers with $1$ or $3$ children (controls), using an event-study design specifically to capture how the effect *cumulates* with eligibility duration. The data show a sharp employment drop for 2-child mothers exactly at 1994, while 1-child mothers' employment stays flat and 3-child mothers' (already eligible, already low) barely moves.

## The contamination problem (Sun and Abraham, 2021)

Under parallel trends, for $\ell\geq0$:

$$\mathbb{E}[\hat\beta_\ell] = \mathbb{E}\left[\sum_g w_{g,\ell}\cdot TE_g(\ell) + \sum_{\ell'\neq\ell}\sum_g w_{g,\ell'}\cdot TE_g(\ell')\right]$$

Two distinct problems, layered on top of each other: some $w_{g,\ell}$ can be **negative**, exactly the [static TWFE issue](../difference-in-differences/twfe-negative-weights-and-goodman-bacon.md) reappearing horizon-by-horizon; and there is **contamination from other horizons** $\ell'\neq\ell$ — the coefficient nominally labeled "effect after $\ell{+}1$ periods" can be partly driven by effects at *entirely different* exposure lengths, unless those other-horizon effects happen to be constant across groups (in which case the contaminating weights, though present, sum to zero and cause no harm).

## Pre-trend tests are contaminated too

The same decomposition applies for $\ell\leq-2$: **$\hat\beta_\ell$ can be nonzero even when parallel trends genuinely holds** (contamination bleeding backward from post-treatment effects), or **zero despite an actual parallel-trends violation** (contamination happening to cancel). This undermines the standard practice of reading pre-period event-study coefficients as a clean, self-contained test of the identifying assumption — a "good-looking" pre-trend plot is not, by itself, sufficient evidence that parallel trends holds.

## A worked event-study and Bacon decomposition (Cunningham, 2021)

Cunningham (2021) walks through exactly this diagnostic on Cheng and Hoekstra's (2013) study of "castle doctrine" self-defense laws and homicide rates, using leads and lags around each state's law-expansion date. The resulting event-study plot shows leads 1–6 statistically indistinguishable from zero (flat pre-trends, reassuring), while leads 8–9 look different from zero — but are driven by only one or three states each, a small-sample overrejection risk (MacKinnon & Webb, 2017) rather than genuine evidence against parallel trends. Post-treatment, log homicides rise steadily across lags 1–5, consistent with a real, not purely mechanical, effect. Applying the **Bacon decomposition** to the same data, Cunningham shows the TWFE estimate of $0.069$ splits into three types of $2\times2$ comparisons: "treatment vs. never-treated" contributes 90% of the weight with an average estimate of $0.078$; "later-treated vs. earlier-treated" contributes a small, offsetting negative-leaning weight. In this particular application the forbidden-comparison problem turns out to be a minor drag on the estimate rather than a sign-flipping catastrophe — a concrete illustration that the severity of TWFE bias is an empirical question to be checked in each application (via the Bacon decomposition or `TwoWayFEWeights`), not something to assume away or panic about uniformly.

*Source: Cunningham (2021); Cheng & Hoekstra (2013); Goodman-Bacon (2021); MacKinnon & Webb (2017).*
