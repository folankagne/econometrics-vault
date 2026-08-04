---
title: Fuzzy Regression Discontinuity Design
source: "Econ 2b, Ch.4 Regression Discontinuity Design (RDD), §Fuzzy Regression Discontinuity Design"
status: enriched
tags:
  - fuzzy-rdd
  - wald-estimator
  - instrumental-variables
prerequisites:
  - regression-discontinuity/sharp-rdd
  - instrumental-variables/wald-estimator
---
## When crossing the threshold only changes the odds of treatment

In many applications, crossing $c$ shifts the *probability* of treatment rather than determining it outright. **Fuzzy RDD**: $D^+ = \lim_{X\downarrow c}\mathbb{E}[D\mid X]$ and $D^- = \lim_{X\uparrow c}\mathbb{E}[D\mid X]$ both exist, with $D^+\neq D^-$ — a discontinuity in treatment *probability*, not certainty. [Sharp RDD](../regression-discontinuity/sharp-rdd.md) is the special case $D^+=1$, $D^-=0$. Fuzzy RDD is structurally similar to an [encouragement design](../treatment-effects/imperfect-compliance-and-encouragement-designs.md); sharp RDD is structurally similar to a perfect-compliance RCT.

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.1]
\draw[->] (-3,0) -- (3,0) node[right] {Running variable $X$};
\draw[->] (-3,0) -- (-3,3.2) node[above] {$\Pr(D=1\mid X)$};
\draw[dashed] (0,0) -- (0,2.6);
\node[below] at (0,-0.15) {$c$};
\draw[dashed] (-3,2.2) -- (3,2.2) node[right] {$1$};
\draw[thick] plot[smooth] coordinates {(-3,0.4) (-2,0.5) (-1,0.6) (-0.05,0.7)};
\draw[thick] plot[smooth] coordinates {(0.05,1.6) (1,1.7) (2,1.8) (3,1.9)};
\fill (-2.5,0.35) circle (1pt); \fill (-1.8,0.7) circle (1pt); \fill (-1.0,0.45) circle (1pt);
\fill (-0.4,0.85) circle (1pt);
\fill (0.4,1.4) circle (1pt); \fill (1.1,1.9) circle (1pt); \fill (1.9,1.6) circle (1pt);
\fill (2.6,2.0) circle (1pt);
\draw[<->] (0.15,0.7) -- (0.15,1.6);
\node[right] at (0.3,1.15) {$D^+ - D^-$};
\end{tikzpicture}
\end{document}
```
*Figure — the dashed horizontal line marks $\Pr(D=1\mid X)=1$. Crossing the cutoff raises the treatment probability from about $0.3$ to about $0.7$ — a partial, "fuzzy" jump — without ever reaching $0$ or $1$ on either side, unlike sharp RDD's full $0$-to-$1$ jump.*

## Identification under homogeneous effects

For $Y=\alpha+\beta D+U$ with constant effect $\beta$, and continuity of $\mathbb{E}[U\mid X]$ at $c$ (equivalent to continuity of $\mathbb{E}[Y(0)\mid X]$):

$$\beta = \frac{Y^+-Y^-}{D^+-D^-}$$

**Proof.** $Y^+ = \alpha+\beta D^+ + \lim_{X\downarrow c}\mathbb{E}[U\mid X]$ and $Y^- = \alpha+\beta D^- + \lim_{X\uparrow c}\mathbb{E}[U\mid X]$. Subtracting, the two $U$-limits are equal by continuity and cancel: $Y^+-Y^- = \beta(D^+-D^-)$, so $\beta = (Y^+-Y^-)/(D^+-D^-)$.

## This is exactly IV

The fuzzy RDD estimator is the [Wald estimator](../instrumental-variables/wald-estimator.md) with instrument $Z=\mathbf{1}[X\geq c]$: $D^+-D^-$ is the **first stage** (effect of crossing the threshold on treatment), $Y^+-Y^-$ is the **reduced form** (effect of crossing the threshold on the outcome). Angrist and Pischke summarize this succinctly: "fuzzy RDD is IV." Setting $D^+=1,D^-=0$ recovers $\beta = Y^+-Y^-$, confirming sharp RDD as the degenerate, perfect-first-stage case.

Angrist and Lavy's (1999) Maimonides'-Rule design is Cunningham's (2021, Ch.6) own worked example of this equivalence: because school administrators can override the predicted class-size formula $f(e)$ (adding an extra section early, or leaving a large class intact for logistical reasons), actual class size $S$ does not deterministically equal $f(e)$ — crossing an enrollment multiple of 40 shifts the *probability distribution* of class size discontinuously rather than flipping it deterministically, exactly the fuzzy-design signature. The 2SLS estimator using $f(e)$ as an instrument for $S$ is then numerically the fuzzy-RDD Wald ratio: the reduced-form jump in test scores at $e=40,80,120,\dots$ divided by the first-stage jump in actual class size at the same points.

*Source: Cunningham (2021), Ch.6; Angrist & Lavy (1999).*
