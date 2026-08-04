---
title: The Statistical Cost of Non-Compliance
source: "Econ 2b, Ch.2 Rubin's Causal Model and Randomized Experiments, §The Statistical Cost of Non-Compliance, §Exercise: Comparing Experimental Designs"
status: enriched
tags:
  - imperfect-compliance
  - take-up-differential
  - experimental-design
  - minimum-detectable-effect
prerequisites:
  - treatment-effects/minimum-detectable-effect
  - treatment-effects/imperfect-compliance-and-encouragement-designs
---
## IV is less precise than OLS under perfect compliance

With perfect compliance ($D=Z$), $\mathbb{V}(\hat\beta_{OLS}) = \frac{1}{\bar D(1-\bar D)}\cdot\frac{\mathbb{V}(u)}{N}$. Under non-compliance, using the [Wald/IV estimator](../treatment-effects/imperfect-compliance-and-encouragement-designs.md) instead:

$$\mathbb{V}(\hat\beta_{IV}) = \frac{1}{\bar Z(1-\bar Z)}\cdot\frac{\mathbb{V}(u)}{N}\cdot\frac{1}{\pi_1^2}$$

where $\pi_1 = \mathbb{E}[D\mid Z{=}1]-\mathbb{E}[D\mid Z{=}0]$ is the **take-up differential** — the first-stage strength of the instrument.

## The inflation factor

$$\frac{\mathbb{V}(\hat\beta_{IV})}{\mathbb{V}(\hat\beta_{OLS})} \approx \frac{1}{\pi_1^2}$$

The IV standard error is inflated relative to the perfect-compliance benchmark by a factor of $1/\pi_1$. If compliance is perfect ($\pi_1=1$), IV and OLS have identical precision. If only half comply ($\pi_1=0.5$), the standard error **doubles** — compensating requires **quadrupling** the sample size. If compliance is very low ($\pi_1=0.1$), the standard error is **10×** larger, requiring **100×** the sample size to compensate. Precision falls off with the *square* of the take-up differential, which is why weak-encouragement designs (information nudges, low-salience letters) demand very large samples to have any power at all.

## Worked comparison: two designs for the same program

Evaluating a job-training program with voluntary participation, given $N$ job seekers and an anticipated $50\%$ volunteer rate, two designs are compared. **Design 1** — recruit volunteers first (informed consent to enroll *iff* they win a lottery), then randomize among volunteers at probability $0.5$. **Design 2** — an [encouragement design](../treatment-effects/imperfect-compliance-and-encouragement-designs.md): randomize the full sample at probability $0.5$, then only lottery winners are invited to enroll (and some subset of those actually take up).

- **Enrollment.** Identical in both: $0.25N$ (Design 1: $0.5N$ volunteers × $0.5$ lottery win rate; Design 2: $0.5N$ lottery winners × $0.5$ take-up rate).
- **Outcome measurement.** Design 1 only requires measuring outcomes for the $0.5N$ volunteers. Design 2 requires the **full** sample $N$, since an ITT analysis needs outcomes for everyone assigned, whether or not they enrolled.
- **Power.** Design 1 has *higher* power: with perfect compliance among $0.5N$ subjects, $SE \propto 1/\sqrt{0.5N} \approx 1.41/\sqrt{N}$; Design 2's $50\%$ take-up differential on the full sample gives $SE \propto (1/\sqrt{N})\times(1/0.5) = 2/\sqrt{N}$ — noticeably worse.
- **Overall.** Since both designs identify the same estimand (the LATE among compliers), and Design 1 dominates on both power and data-collection cost, Design 1 is preferred — unless pre-commitment ("I'll enroll only if I win the lottery") is practically infeasible, or the ITT itself (the effect of merely *offering* the program) is the policy-relevant object rather than the effect on those who actually take it up.

## A real-world benchmark: JTPA's take-up differential

The JTPA training evaluation (Angrist & Pischke, 2009, §4.4.3) gives a concrete sense of scale for the inflation factor: with 60% take-up in the treatment arm and 2% "contamination" in the control arm, the take-up differential is $\pi_1\approx 0.58$, so $\mathbb{V}(\hat\beta_{IV})/\mathbb{V}(\hat\beta_{OLS}) \approx 1/0.58^2 \approx 2.97$ — standard errors roughly $1.7\times$ larger than the perfect-compliance benchmark, requiring roughly $3\times$ the sample size to compensate. This is a moderately costly but very much still workable inflation, in contrast to the encouragement designs mentioned above (information nudges, low-salience letters) where take-up differentials of $0.1$–$0.2$ are common and the resulting $25$–$100\times$ sample-size penalty can make a design impractical without a much larger and more expensive study.

*Source: Angrist & Pischke (2009), §4.4.3.*
