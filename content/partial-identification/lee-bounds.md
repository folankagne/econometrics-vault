---
title: Lee Bounds
source: "Econ 2b, Ch.8 Partial Identification, §Lee Bounds"
status: enriched
tags:
  - lee-bounds
  - monotonicity
  - always-takers
  - quantile-trimming
prerequisites:
  - partial-identification/horowitz-manski-bounds
  - instrumental-variables/compliers-always-takers-never-takers-defiers
---
## Trading assumption strength for bound tightness

[Horowitz-Manski bounds](../partial-identification/horowitz-manski-bounds.md) are assumption-free but can be very wide when attrition is large relative to $Y$'s support. Lee (2009) shows that a **monotonicity** assumption on selection buys substantially tighter bounds — at the cost of targeting a different, narrower estimand.

## Selection compliance types

Let $S(d)$ be the selection status that *would* occur under treatment $d$, extending [compliance typing](../instrumental-variables/compliers-always-takers-never-takers-defiers.md) from treatment take-up to survey response itself:

| $S(0)$ | $S(1)$ | Type |
|:---:|:---:|---|
| 0 | 0 | Never-taker: never observed |
| 0 | 1 | Complier: observed only if treated |
| 1 | 0 | Defier: observed only if untreated |
| 1 | 1 | Always-taker: observed regardless |

**Random assignment (Lee)**: $(Y(1),Y(0),S(1),S(0))\perp D$ — stronger than the HM requirement, since it also requires *selection behavior itself* to be independent of assignment. **Monotonicity**: $S(1)\geq S(0)$ almost surely — no defiers; treatment never *reduces* the chance of being observed. Plausible, e.g., when $D$ is job training and $S$ is labor-market participation: training can plausibly only help, not hurt, someone's odds of being observed in the labor market.

## The estimand: effect on always-takers

$$\tau_{AT} = \mathbb{E}[Y(1)-Y(0)\mid \text{AT}] = \mathbb{E}[Y(1)\mid S(1){=}1,S(0){=}1] - \mathbb{E}[Y(0)\mid S(1){=}1,S(0){=}1]$$

**The second term is point-identified.** Under monotonicity, $\{S(1){=}1,S(0){=}1\}$ conditional on $D{=}0$ is exactly $\{S{=}1,D{=}0\}$ (no defiers to muddy the count), and $Y=Y(0)$ when $D{=}0$, so $\mathbb{E}[Y(0)\mid\text{AT}] = \mathbb{E}[Y\mid S{=}1,D{=}0]$ directly.

**The first term needs bounding.** Under monotonicity, $\{S{=}1,D{=}1\}$ identifies **AT ∪ Complier** — a mixture, since compliers only become observed when treated. The complier share within this mixture is identified even though individual compliers are not:

$$p_c = \frac{P(C)}{P(\text{AT}\cup C)} = \frac{P(S{=}1\mid D{=}1)-P(S{=}1\mid D{=}0)}{P(S{=}1\mid D{=}1)}$$

## Bounding via quantile trimming

Let $y_q$ be the $q$-th quantile of $Y$ within $\{S{=}1,D{=}1\}$. Since always-takers make up a $(1{-}p_c)$ share of this group, trimming away the extreme $p_c$ fraction in either direction isolates a worst-case-consistent subset of always-takers:

$$\mathbb{E}[Y(1)\mid\text{AT}] \leq \mathbb{E}[Y\mid S{=}1,D{=}1,Y>y_{p_c}] \qquad (\text{upper: compliers assumed lowest } Y(1))$$
$$\mathbb{E}[Y(1)\mid\text{AT}] \geq \mathbb{E}[Y\mid S{=}1,D{=}1,Y<y_{1-p_c}] \qquad (\text{lower: compliers assumed highest } Y(1))$$

giving the **Lee bounds**, sharp under random assignment and no defiers alone:

$$\tau_{AT} \in \Big[\mathbb{E}[Y\mid S{=}1,D{=}1,Y{<}y_{1-p_c}]-\mathbb{E}[Y\mid S{=}1,D{=}0],\ \ \mathbb{E}[Y\mid S{=}1,D{=}1,Y{>}y_{p_c}]-\mathbb{E}[Y\mid S{=}1,D{=}0]\Big]$$

```tikz
\begin{document}
\begin{tikzpicture}[scale=1]
\draw[->] (0,0) -- (7,0) node[right] {$Y$};
\draw[->] (0,0) -- (0,2.5) node[above] {density among $\{S{=}1,D{=}1\}$};
\draw[thick] plot[smooth] coordinates {(0.2,0.2) (1.5,1.4) (3,2.2) (4.5,1.6) (6,0.6) (6.8,0.15)};
\draw[dashed] (1.7,0) -- (1.7,1.55);
\draw[dashed] (5.9,0) -- (5.9,0.65);
\node[below] at (1.7,-0.1) {$y_{p_c}$};
\node[below] at (5.9,-0.1) {$y_{1-p_c}$};
\node[above] at (0.9,0.5) {trimmed (upper bound)};
\node[above] at (6.3,0.9) {trimmed (lower bound)};
\end{tikzpicture}
\end{document}
```
*Figure — Lee bounds trim the observed $\{S{=}1,D{=}1\}$ outcome distribution at the $p_c$ and $1{-}p_c$ quantiles — the shares that could, in the worst case, be compliers rather than always-takers — leaving the middle mass to bound the always-taker mean.*

## Numerical example: tutoring and test scores

$P(S{=}1\mid D{=}1)=0.8$, $P(S{=}1\mid D{=}0)=0.6$, $\mathbb{E}[Y\mid S{=}1,D{=}1]=75$, $\mathbb{E}[Y\mid S{=}1,D{=}0]=70$, $Y\in[0,100]$. HM bounds: $\overline{\text{ATE}}=60+20-42-0=38$, $\underline{\text{ATE}}=60+0-42-40=-22$, so $[-22,38]$. Lee: $p_c=(0.8-0.6)/0.8=1/4$; with trimmed means $\mathbb{E}[Y\mid S{=}1,D{=}1,Y{<}y_{3/4}]=70$ and $\mathbb{E}[Y\mid S{=}1,D{=}1,Y{>}y_{1/4}]=80$, $\tau_{AT}\in[70-70,\,80-70]=[0,10]$ — dramatically tighter than HM, and rules out a negative effect entirely (HM did not).

> **The cost of that tightness.** Lee bounds require the substantive monotonicity assumption, and — more fundamentally — identify $\tau_{AT}$, **not** the population ATE. The two coincide only in the degenerate case where treatment has no effect on selection at all (no compliers). In general $\tau_{AT}$ and the ATE can differ substantially, exactly as [LATE differs from ATE](../instrumental-variables/consequences-of-late.md) under heterogeneous effects — Lee bounds trade *which parameter* is identified for how tightly it is identified.

David Lee's (2009) original *Review of Economic Studies* paper motivates the method with exactly the job-training application generalized here: earnings are only observed for the employed, so treatment can affect who is observed (via its effect on employment) as well as what the observed earnings are — the double channel that makes plain conditioning on "observed given treated" versus "observed given untreated" invalid, and is the reason the always-taker estimand, rather than the ATE, is the natural object of study whenever selection into observability is itself a potential outcome of the treatment.

*Source: Lee (2009).*
