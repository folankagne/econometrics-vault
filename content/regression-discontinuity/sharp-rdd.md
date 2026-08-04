---
title: Sharp Regression Discontinuity Design
source: "Econ 2b, Ch.4 Regression Discontinuity Design (RDD), §Sharp Regression Discontinuity Design"
status: enriched
tags:
  - sharp-rdd
  - continuity-assumption
  - potential-outcomes
prerequisites:
  - regression-discontinuity/introduction-and-historical-examples
---
## Definition

In a **sharp RDD**, treatment is a deterministic function of the forcing variable: $D_i = \mathbf{1}[X_i\geq c]$. Every unit above the threshold is treated; every unit below is not, so the observed outcome is $Y_i(1)$ for $X_i\geq c$ and $Y_i(0)$ for $X_i<c$.

## The identifying assumption: continuity

$$\mathbb{E}[Y_i(0)\mid X_i=x] \quad\text{and}\quad \mathbb{E}[Y_i(1)\mid X_i=x] \text{ are continuous in } x \text{ at } x=c$$

## Identification

$$\tau_{RD} = \mathbb{E}[Y_i(1)-Y_i(0)\mid X_i=c] = \lim_{\varepsilon\downarrow 0}\mathbb{E}[Y_i\mid X_i=c+\varepsilon] - \lim_{\varepsilon\uparrow 0}\mathbb{E}[Y_i\mid X_i=c+\varepsilon]$$

**Proof.** Define $Y^+=\lim_{\varepsilon\downarrow 0}\mathbb{E}[Y_i\mid X_i=c+\varepsilon]$ and $Y^-=\lim_{\varepsilon\uparrow 0}\mathbb{E}[Y_i\mid X_i=c+\varepsilon]$. Just above $c$, only $Y_i(1)$ is observed, so $Y^+ = \lim_{\varepsilon\downarrow0}\mathbb{E}[Y_i(1)\mid X_i=c+\varepsilon] = \mathbb{E}[Y_i(1)\mid X_i=c]$ by continuity of $\mathbb{E}[Y_i(1)\mid X_i]$. Symmetrically, $Y^-=\mathbb{E}[Y_i(0)\mid X_i=c]$. Hence $Y^+-Y^- = \mathbb{E}[Y_i(1)-Y_i(0)\mid X_i=c]$.

> As Hahn, Todd, and van der Klaauw (2001) show, continuity of both conditional expectation functions **at** $c$ is the *only* assumption strictly needed — though it becomes far more plausible as a claim if continuity plausibly holds everywhere, not merely at one isolated point.

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.1]
\draw[->] (-3,0) -- (3,0) node[right] {Running variable $X$};
\draw[->] (-3,0) -- (-3,4) node[above] {Outcome $Y$};
\draw[dashed] (0,0) -- (0,3.6);
\node[below] at (0,-0.15) {$c$};
\draw[thick] plot[smooth] coordinates {(-3,1.0) (-2,1.3) (-1,1.6) (-0.05,1.8)};
\draw[thick] plot[smooth] coordinates {(0.05,2.7) (1,2.9) (2,3.1) (3,3.3)};
\fill (-2.6,0.75) circle (1pt); \fill (-2.2,1.5) circle (1pt); \fill (-1.7,1.3) circle (1pt);
\fill (-1.3,1.9) circle (1pt); \fill (-0.8,1.5) circle (1pt); \fill (-0.3,2.0) circle (1pt);
\fill (0.3,2.4) circle (1pt); \fill (0.7,3.1) circle (1pt); \fill (1.2,2.7) circle (1pt);
\fill (1.8,3.3) circle (1pt); \fill (2.3,3.0) circle (1pt); \fill (2.7,3.6) circle (1pt);
\draw[<->] (0.15,1.8) -- (0.15,2.7);
\node[right] at (0.3,2.25) {$\tau_{RD}$};
\end{tikzpicture}
\end{document}
```
*Figure — binned local averages (dots) trace two continuous curves on either side of the cutoff $c$; the vertical gap between them at $c$ is $\tau_{RD}$. Nothing about the smooth trend on either side is assumed — only that each side's curve extends continuously up to (not across) the cutoff.*

## RDD as a special case of a randomized experiment

If treatment were assigned by a genuinely random draw $X$ (an arbitrary threshold on a random number), then $X$ is independent of potential outcomes by construction, so $\mathbb{E}[Y_i(0)\mid X]=\mathbb{E}[Y_i(0)]$ and $\mathbb{E}[Y_i(1)\mid X]=\mathbb{E}[Y_i(1)]$ — both **constant** in $X$, hence trivially continuous everywhere, not just at $c$. This is the conceptual bridge between RCTs and RDD: randomization delivers continuity *globally*; a non-experimental RDD instead asks continuity to hold only **locally**, in a neighborhood of the threshold — a much weaker, but correspondingly less automatically justified, requirement.

## Why continuity is the natural default

Cunningham (2021, Ch.6) motivates the continuity assumption with a principle he attributes to Darwin: *Natura non facit saltum* — "nature does not make jumps." His view is that continuity should be treated as the default null hypothesis for any outcome as a function of any running variable, precisely because gradual change is what is normally expected; an observed discontinuity therefore "begs for explanation," and the RDD logic is that the *only* available explanation, once continuity is otherwise plausible, is the treatment switching on at the cutoff. This is also why a picture — plotting binned local averages of $Y$ against the recentered running variable, exactly as in Hoekstra's flagship-university figures — is treated as close to mandatory for any credible RDD study: the visual jump (or its absence) is the single most persuasive piece of evidence a sharp RDD can offer.

*Source: Cunningham (2021), Ch.6.*
