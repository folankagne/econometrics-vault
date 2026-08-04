---
title: Identification and Statistical Inference
source: "Econ 1, Lecture Notes, §The two fundamental inferential problems in econometrics"
status: enriched
tags:
  - identification
  - statistical-inference
  - data-generating-process
prerequisites:
  - foundations/estimators-and-sampling-distributions
  - causal-inference-foundations/potential-outcomes-and-the-naive-estimator
---
## Two distinct questions

Following Manski, the general inference question — what conclusions can be drawn about a population from a sample — splits into two genuinely separate problems.

**Identification.** Suppose a model has been specified and, hypothetically, data on the *entire* population (not just a sample) were available. A parameter is **identified** if, under the specified model and the (infinite) population, it is uniquely determined. This is a population-level question: it asks whether the object of interest could in principle be pinned down even with infinite data, given the assumptions in play. The example from [potential outcomes and the naive estimator](../causal-inference-foundations/potential-outcomes-and-the-naive-estimator.md) illustrates this directly: in the model $y_i(\mathcal{T}_i) = a + b\mathcal{T}_i + u_i$, $\mathbb{E}(\Delta_i)$ is uniquely determined to equal $b$ only under the "selection is ignorable" assumption; without it, the naive estimator's expectation is $b + \mathcal{B}^S$, and $\mathcal{B}^S$ is not pinned down by the model, so $\mathbb{E}(\Delta_i)$ is not identified as $b$.

**Statistical inference.** Returning to the practical reality that only a finite sample is ever available: given that a parameter *is* identified, what can be concluded about the population parameter from the imperfect information contained in one particular sample? This is answered by studying the [sampling distribution](../foundations/estimators-and-sampling-distributions.md) of the estimator — how dispersed would estimates be across repeated samples of the same size — which underlies the construction of confidence intervals and significance tests.

> **Identification comes first.** It makes no sense to use a finite sample to try to learn something that could not be learned even with an infinite one. But identification alone is not enough either: a precise, well-identified estimate that is only valid for the specific sample at hand is of no use — the point of using a sample is to say something about the population it was drawn from.

## True DGP versus assumed DGP

Econometrics formalizes this with the notion of a **Data Generating Process (DGP)**. The data actually observed is the product of the **true DGP**, governed by true (unknown) parameters $\mu, \sigma$. The researcher, in turn, specifies a **supposed** (or **assumed**) **DGP** — the model actually estimated — which produces an estimator $\hat{\theta}$ with distributional properties $\mathbb{E}(\hat{\theta}), \mathbb{V}(\hat{\theta})$. Inference is then the question of how close $\mathbb{E}(\hat{\theta}), \mathbb{V}(\hat{\theta})$ are to the true $\mu, \sigma$ — and the properties of any given estimator depend entirely on whether, and how closely, the assumed DGP coincides with the true one.

## The same split, in Wooldridge's vocabulary

Wooldridge (2016, Appendix C-1) arrives at the same two-step structure from mathematical statistics rather than Manski's identification vocabulary, but the mapping is direct: he starts from a population characterized by a pdf $f(y; \theta)$ known up to the parameter $\theta$ — this presupposes identification, i.e. that a $\theta$ exists and is uniquely pinned down by the model. Statistical inference is then everything that follows once a random sample is drawn: computing a **point estimate** of $\theta$ (a single best-guess number), an **interval estimate** (a range, such as a confidence interval), or conducting **hypothesis testing** (choosing between two competing claims about $\theta$, e.g. whether a policy has any effect at all). All three of these — point estimation, interval estimation, testing — are statistical-inference questions in the identification/statistical-inference split above: they take identification of $\theta$ as already settled and ask what a *finite* sample can say about it.
