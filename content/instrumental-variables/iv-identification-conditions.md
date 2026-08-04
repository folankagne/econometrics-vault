---
title: Instrumental Variables — Identification Conditions
source: "Econ 1, Lecture Notes, §Identification through instrumental variables"
status: enriched
tags:
  - instrumental-variables
  - exogeneity
  - rank-condition
  - distance-to-college
  - quarter-of-birth
prerequisites:
  - identification/exogeneity-and-endogeneity
  - identification/identification-strategies-overview
---
## The IV idea in one paragraph

Given a model with an endogenous regressor $\tilde{x}$, an **external variable** $z^e$ that (i) does not affect the outcome $y$ directly and (ii) is uncorrelated with the noise $u$, but (iii) is correlated with $\tilde{x}$ for reasons unrelated to what generates $y$, can be used to isolate the "clean" part of $\tilde{x}$'s variation. Total variation in $\tilde{x}$ splits into a part correlated with $z^e$ (necessarily uncorrelated with the noise, since $z^e$ itself is) and a part uncorrelated with $z^e$ (potentially confounded). Discarding the second and keeping only the first recovers identification.

## Formal conditions

For a model $\mathbf{y} = \mathbf{X}\mathbf{b} + \mathbf{u}$ with $\mathbb{E}(\tilde{\mathbf{x}}_i'u_i) \neq 0$ for some endogenous $\tilde{\mathbf{X}} \subset \mathbf{X}$, a set of external variables $\mathbf{Z}^e$ qualifies as **instrumental variables** for $\tilde{\mathbf{X}}$ if:

$$A_1^{IV} \text{ (Exogeneity/orthogonality):}\ \mathbb{E}(u_i\mid\mathbf{z}_i^e) = 0 = \mathbb{E}(\mathbf{z}_i^{e\prime}u_i)\ \forall i \qquad\qquad A_2^{IV} \text{ (Rank):}\ \mathbf{z}_i^e \text{ sufficiently correlated with } \tilde{\mathbf{x}}_i$$

$A_1^{IV}$ requires the instrument be orthogonal to the noise; $A_2^{IV}$ requires it be meaningfully correlated with the endogenous regressor. Contrasted with the DGP under $A_3^{OLS}$ (noise affects only $y$) and under $\overline{A}_3^{OLS}$ (noise correlates with both $x$ and $y$), the IV DGP adds $z^e$, correlated with $\tilde{x}_i$ but with **no direct arrow into $y_i$** and no correlation with $u_i$ — every effect of $z^e$ on $y$ must pass through $\tilde{x}_i$.

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.1]
\node (Z) at (0,0) {$Z$};
\node (X) at (2.5,0) {$X$};
\node (Y) at (5,0) {$Y$};
\node (U) at (3.75,1.8) {$U$};
\draw[->,thick] (Z) -- (X);
\draw[->,thick] (X) -- (Y);
\draw[->,thick,dashed] (U) -- (X);
\draw[->,thick,dashed] (U) -- (Y);
\node[below] at (1.25,-0.1) {relevance ($A_2^{IV}$)};
\node[below] at (3.75,-0.1) {structural effect};
\end{tikzpicture}
\end{document}
```
*Figure — $Z$ moves $X$ (the first stage) and reaches $Y$ only through $X$: there is no arrow $Z\to Y$, which is exactly the exogeneity condition $A_1^{IV}$. The unobserved confounder $U$ (dashed arrows) threatens $X\to Y$ directly but never touches $Z$ — that is what makes $Z$ usable for identification even though $X$ itself is endogenous.*

## Example: distance to college

Card (1993) instruments years of education in a [Mincer wage equation](../identification/exogeneity-and-endogeneity.md) with **geographic distance to the nearest college**. The logic: overall variation in schooling reflects many factors, including ability, but part of it is driven simply by how physically close a college is to where someone grew up — plausibly unrelated to wages except through education itself, and plausibly uncorrelated with ability.

## Example: quarter of birth

Angrist and Krueger (1991) instrument education with **quarter of birth**. In the US, compulsory schooling binds by age (children turning 6 in a calendar year all start school the following September) rather than by grade completed, and compulsory attendance ends at 16 regardless of grade. Two children born months apart in the same year enter school together but reach the age-16 exit threshold after completing different amounts of schooling — a child born early in the year (further from the September cutoff) accumulates less schooling before hitting 16 than one born late in the year. This mechanically ties quarter of birth to years of education, while quarter of birth is plausibly unrelated to ability or other wage determinants. The correlation between the instrument and the endogenous regressor (here, quarter of birth and education) is called the **first stage**; the correlation between the instrument and the outcome (quarter of birth and wages) is the **reduced form**.

## Where credible instruments come from

Angrist and Pischke (2009, §4.1) frame instrument-hunting as a search for **institutional knowledge**: good instruments typically come from policy rules, legal thresholds, or historical accidents that shift the endogenous regressor for reasons unconnected to individual choice. Beyond compulsory-schooling and distance-to-college, their canonical examples include the Vietnam-era **draft lottery** (randomly assigned sequence numbers as an instrument for military service) and **multiple/same-sex births** (a third birth being effectively random conditional on having two same-sex children, used to instrument family size). A recurring practical checkpoint they stress: a credible instrument story should be checkable against **institutional detail and placebo tests** — e.g., verifying the instrument has no effect on outcomes measured *before* it could plausibly matter (the draft lottery's null effect on 1969 earnings, predating the 1970 lottery) — since the exclusion restriction itself can never be tested directly.

*Source: Angrist & Pischke (2009), §4.1.*
