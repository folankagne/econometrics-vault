---
title: Three Consequences of the LATE Reinterpretation
source: "Econ 2b, Ch.3 Instrumental Variables, §Consequences of IV Reinterpretation, §Role of Monotonicity: An Exercise"
status: enriched
tags:
  - late-theorem
  - defiers
  - sign-reversal
  - overidentification
prerequisites:
  - instrumental-variables/late-theorem
---
## Three consequences of "IV identifies effects on compliers"

**1. The effect is local, by definition.** The LATE is estimated on a subpopulation — compliers — not the full population, hence the name.

**2. LATE ≠ ATE under heterogeneous effects, generally.** A [Roy-model](../treatment-effects/sources-of-selection-bias.md)-style ordering is plausible in many applications: always-takers take treatment precisely because they benefit most from it, never-takers avoid it because they benefit least, and compliers — who only take it when nudged — sit in between:

$$\mathbb{E}(Y_1-Y_0\mid\text{AT}) > \mathbb{E}(Y_1-Y_0\mid\text{C}) > \mathbb{E}(Y_1-Y_0\mid\text{NT})$$

If this ordering holds, LATE understates the effect on those who take treatment regardless of encouragement, and overstates it relative to those who never would.

**3. Different instruments identify different LATEs.** Since the complier population is defined *by the instrument*, two equally valid instruments for the same treatment generically identify two different parameters, not the same underlying causal effect measured twice. This reframes ["tests of over-identifying restrictions"](../instrumental-variables/sargan-test-for-overidentification.md) — comparing estimates from different instruments is not purely a validity check; a rejection can equally well reflect **genuine effect heterogeneity** across the different complier populations each instrument selects, rather than an invalid instrument.

## Why monotonicity matters: a numeric exercise

Suppose a population is $20\%$ compliers and $5\%$ defiers, with average effects $+1$ for compliers and $+5$ for defiers — **both effects positive**. Without monotonicity, the ITT decomposition picks up a term for defiers with the **opposite sign**, since defiers do $D{=}0$ when $Z{=}1$ and $D{=}1$ when $Z{=}0$:

$$\text{ITT} = \Pr(\text{C})\,\mathbb{E}(Y_1-Y_0\mid\text{C}) - \Pr(\text{D})\,\mathbb{E}(Y_1-Y_0\mid\text{D}) = 0.20(1) - 0.05(5) = 0.20-0.25 = -0.05$$

$$\text{First stage} = \Pr(\text{C})-\Pr(\text{D}) = 0.20-0.05 = 0.15$$

$$\Delta_{Wald} = \frac{-0.05}{0.15} = -\frac{1}{3} < 0$$

The Wald estimator is **negative**, even though every individual treatment effect in the population is **positive**. This is a **sign-reversal failure**: without monotonicity, the Wald estimator is a weighted average with a *positive* weight on compliers but a *negative* weight on defiers, and that combination can flip sign relative to every underlying effect. Monotonicity is precisely what rules this out — it removes the defier term entirely, guaranteeing the Wald estimator is a genuine (positively-weighted) average of real treatment effects, and therefore cannot have the wrong sign relative to those effects.

## External validity, revisited

Angrist and Pischke (2009, §4.4) tie point 1 (locality) directly to the internal-vs-external-validity distinction: a LATE estimate can be as internally valid as any experimental result — the draft-lottery estimates genuinely capture the causal effect of *Vietnam-era conscription* on those men whose service was determined by the lottery — while still having limited external validity for a different population or era (e.g. an all-volunteer force, or a different draft policy), since "there is nothing in IV formulas to explain *why*" an effect exists, only that it does for the specific compliers identified. This is why applied papers using IV routinely append substantive discussion of *who the compliers plausibly are* and *why the estimated effect on them is or isn't informative for the policy question at hand* — the LATE machinery answers what is identified, not what it is useful for.

*Source: Angrist & Pischke (2009), §4.4.*
