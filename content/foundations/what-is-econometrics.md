---
title: What Is Econometrics
source: "Econ 1, Lecture Notes, §What econometrics is about"
status: enriched
tags:
  - econometrics
  - correlation-vs-causation
  - spurious-correlation
  - economic-theory
prerequisites: []
---
## Definitions

Statistics provides tools for collecting, organizing, summarizing, and analyzing data, and for studying the properties of variables and their distributions. **Econometrics** goes further: it studies the relationships between economic variables, typically with a focus on establishing and characterizing *cause-and-effect*. Arthur Goldberger's 1964 textbook *Econometric Theory* defines it as:

> "[...] the social science in which the tools of economic theory, mathematics, and statistical inference are applied to the analysis of economic phenomena."

In a similar spirit, Samuelson, Koopmans, and Stone (1954) describe econometrics as "the application of mathematical statistics to economic data to lend empirical support to the models constructed by mathematical economics and to obtain numerical results." Both definitions converge on the same point: econometrics combines economic theory, mathematics, and statistics — and **economic theory plays a central role**. Data alone rarely "speaks for itself"; economic theory is what makes empirical results interpretable.

## Why theory is indispensable: correlation is not causation

Raw data is messy, and conclusions rarely follow from it directly. A recurring, basic-yet-serious problem is **spurious correlation**. A few illustrative (and deliberately absurd) examples: average global temperatures have tracked national science R&D budgets — does this mean climate science is a hoax propagated by scientists? Shoe size correlates with children's reading scores — should shoe size be targeted to raise literacy? Health outcomes correlate negatively with the number of days spent in hospital — do hospitals kill patients? Many more examples of this kind are collected on [Tyler Vigen's Spurious Correlations](https://tylervigen.com/spurious-correlations). Each example captures the same lesson: an observed association carries no information about its own cause, absent a theory of how the variables relate.

> As Manski illustrates: suppose you observe the almost simultaneous movements of a person and their reflection in a mirror. Does the image cause the person's movements, or reflect them? Without some understanding of optics — a *theory* — the data alone cannot answer the question. The same logic applies to economic data: distinguishing cause from reflection requires a model, not just an association.

## A concrete example: evaluating a job-search program

Fougère, Kramarz, and Pouget-Rebeyrend (2010, cited as `fkp_2010`) study the impact of a 2001 French unemployment-benefits reform that introduced a new job-search-assistance program (PARE, later renamed PPAE) with four increasingly intensive service levels, from *No OFS* (no specific help) to *OFS 3* (fully personalized, frequent, wide-ranging support). The raw data show that the *No OFS* group — receiving the least support — found jobs fastest, while the *OFS 3* group — receiving the most support — stayed unemployed longest.

Taken at face value, this would suggest the program is actively harmful and should be cancelled. But this reasoning ignores who received which service level: individuals routed to *No OFS* are likely the most employable to begin with (education, experience, socio-economic background), while those routed to *OFS 3* are likely the least employable, independent of the program. The information genuinely missing from the raw comparison is "what would have happened to the *OFS 3* group in the absence of the program?" — precisely the counterfactual question that motivates the [potential outcomes framework](../causal-inference-foundations/potential-outcomes-and-the-naive-estimator.md).

> A related surrealist illustration: in Salvador Dalí's *[Swans Reflecting Elephants](https://en.wikipedia.org/wiki/Swans_Reflecting_Elephants)* (1937), the same shapes read as swans or as elephants depending on which frame the viewer imposes — a visual reminder that the same raw data supports opposite readings without an interpretive framework to adjudicate between them.

## From economic model to econometric model

Wooldridge (2016, Ch.1) frames the same point operationally: empirical work does not start from data, it starts from a **question**, which is then given structure by an **economic model** — a set of mathematical relationships derived from theory (e.g. utility maximization) or, just as often, from informal economic reasoning. Becker's (1968) model of criminal behavior is the textbook case of the former: time spent on crime is modeled as a function of the wage available in crime, the legal wage, other income, the probability of arrest and conviction, the expected sentence, and age — a genuine utility-maximization derivation. A model of wages as a function of education, experience, and job training (Wooldridge, 2016, Example 1.2) is the textbook case of the latter: no formal derivation is needed, only the economically informed judgment that these factors plausibly affect productivity, and that pay tracks productivity.

Either way, the economic model must be turned into an **econometric model** before it can meet data — for example:

$$wage = \beta_0 + \beta_1 educ + \beta_2 exper + \beta_3 training + u$$

Two things happen in this step. First, a specific functional form is chosen (the economic model only said "wage is *some* function of these factors"). Second, and more consequentially, an **error term** $u$ is introduced to absorb everything the model leaves out — innate ability, family background, measurement error, and any other unobserved determinant of the outcome. Wooldridge calls handling $u$ "perhaps the most important component of any econometric analysis," precisely because the properties later assumed about $u$ (its independence from the observed regressors, in particular) are what make the estimated $\beta_j$'s interpretable as causal effects rather than mere associations — see [Identification](../identification/00-overview.md).

## Ceteris paribus and why experiments are the benchmark

The reason correlation fails to answer causal questions is that raw associations are rarely computed *ceteris paribus* — "other relevant factors held fixed." Asking for the causal effect of education on wages, or of police presence on crime, is implicitly a ceteris paribus question: how much would wages (or crime) change if education (or police) changed, holding everything else about the person (or city) fixed?

The cleanest way to answer such a question is a **randomized experiment**: assign the "treatment" (fertilizer amount, education level, number of police officers) independently of any other factor that affects the outcome, so that any resulting difference in outcomes cannot be explained by anything but the treatment itself (Wooldridge, 2016, Examples 1.3–1.6). This is exactly why the [potential outcomes framework](../causal-inference-foundations/potential-outcomes-and-the-naive-estimator.md) treats random assignment as the benchmark case in which the naive comparison-of-means estimator is unbiased.

But most of economics works with **nonexperimental** (observational, retrospective) data: nobody randomly assigns years of education to workers or police officers to cities. People *choose* their own education level, correlated with unobserved ability and family background; city governments *choose* police force size, correlated with unobserved crime trends (often reacting to them, i.e. reverse causality). Wooldridge's return-to-education and crime-and-policing examples are the running illustrations of exactly the identification problem this vault develops in detail: [omitted variable bias](../identification/00-overview.md) when relevant factors are correlated with the regressor of interest, and simultaneity when the "cause" and the "effect" determine each other jointly. The entirety of modern causal inference — instrumental variables, RCTs and imperfect compliance, regression discontinuity, unconfoundedness, difference-in-differences — is best understood as a collection of strategies for approximating the missing experiment using nonexperimental data.

*Source: Wooldridge (2016), §§1-1–1-4.*
