---
title: Minimum Detectable Effect (MDE)
source: "Econ 2b, Ch.2 Rubin's Causal Model and Randomized Experiments, §Computing the Power, §Minimum Detectable Effect (MDE), §MDE and Sample Size"
status: enriched
tags:
  - minimum-detectable-effect
  - statistical-power
  - experimental-design
prerequisites:
  - treatment-effects/statistical-power-and-type-i-ii-errors
---
## Deriving the power formula

Given a true effect $\beta$, the power is $\mathbb{P}\big(\hat\beta/\sigma_{\hat\beta} > t_{1-\alpha/2} \mid \beta\big) = \kappa$. Subtracting the (non-random) constant $\beta/\sigma_{\hat\beta}$ from both sides of the inequality and using that $(\hat\beta-\beta)/\sigma_{\hat\beta}$ is asymptotically standard normal:

$$\Phi\left(\frac{\beta}{\sigma_{\hat\beta}} - t_{1-\alpha/2}\right) = \kappa \qquad\Longrightarrow\qquad \frac{\beta}{\sigma_{\hat\beta}} - t_{1-\alpha/2} = t_\kappa$$

## The MDE formula

The value of $\beta$ that would be statistically significant $(1-\kappa)\times 100\%$ of the time is the **Minimum Detectable Effect**:

$$MDE = (t_{1-\alpha/2} + t_\kappa)\,\sigma_{\hat\beta}$$

For the conventional choice $\alpha=0.05$, $\kappa=0.80$: $t_{0.975}=1.96$, $t_{0.80}=0.84$, so $MDE \approx 2.8\,\sigma_{\hat\beta}$ — with $80\%$ power, only effects roughly $2.8\times$ larger than the standard error are reliably detectable; smaller true effects will frequently fail to reach significance even though they are real.

## MDE and sample size

For $y=c+\beta D+u$ under homoskedasticity, $\sigma_{\hat\beta}^2 = \frac{1}{\bar D(1-\bar D)}\cdot\frac{\mathbb{V}(u)}{N}$, so:

$$MDE = (t_{1-\alpha/2}+t_\kappa)\sqrt{\frac{1}{\bar D(1-\bar D)}\cdot\frac{\mathbb{V}(u)}{N}}$$

Three levers determine the MDE: $\mathbb{V}(u)$ (noisier outcomes require larger detectable effects), $N$ (MDE shrinks with $\sqrt{N}$ — **halving** the MDE requires **quadrupling** $N$), and $\bar D(1-\bar D)$ (the treatment/control split, minimized — i.e. MDE minimized — at $\bar D = 0.5$, an equal split).

## Reducing V(u) directly

Two practical levers shrink $\mathbb{V}(u)$ without touching sample size: **adding controls** that predict the outcome (exactly the precision gain from [adding controls in RCTs](../treatment-effects/adding-controls-in-rcts.md)), and **collecting baseline data** — pre-treatment measures of the outcome are especially powerful since they let the analysis isolate the *change* over time rather than absorb all of the outcome's cross-sectional variance, and can also support stratified designs (e.g. splitting by above/below median at baseline).

## MDE in practice: when a "large" point estimate is still uninformative

Angrist and Pischke's (2009, §4.1.2) twins-versus-sex-composition family-size study illustrates how a wide implied MDE shows up in practice: the twins-instrument Wald estimate of the effect of a third child on weeks worked is $-3.83$ with a standard error of $0.758$, while the same estimate using the same-sex instrument is $-6.23$ with a standard error of $1.29$ — both point estimates are plausible, but the wide standard errors (driven by weaker first-stage variation for the same-sex instrument, and by the [statistical cost of non-compliance](../treatment-effects/the-statistical-cost-of-non-compliance.md) style dilution inherent to any IV design) mean the implied MDE for that specification is large enough that only fairly substantial true effects would reliably be detected — a useful reminder that comparing point estimates across specifications is less informative than comparing their precision.

*Source: Angrist & Pischke (2009), §4.1.2.*
