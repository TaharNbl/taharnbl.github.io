---
layout: page
title: TSFMs
description: time-indexed foundation models
img: assets/img/gap.jpg
importance: 1
category: research
related_publications: true
---

In June 2026, we introduced TS-ICL, a new Time Series Foundation Model (TSFM) developed at EDF Lab and designed to jointly address forecasting and imputation in a zero-shot manner.

- **Paper:** [TS-ICL: A Flexible Time-Indexed Foundation Model for Time Series via In-Context Learning](https://arxiv.org/abs/2606.05878) {% cite lenaour2026tsicl %}
- **Code:** [EDF-Lab/ts-icl](https://github.com/EDF-Lab/ts-icl/tree/main)

*Joint work with [Etienne Le Naour](https://github.com/etiennelnr) and [Adrien Petralia](https://adrienpetralia.github.io/).*

Recent Time Series Foundation Models (TSFMs), such as Chronos-2, have significantly advanced zero-shot forecasting performance. However, support for imputation remains limited. At the same time, tabular foundation models adapted to time series, including TabPFN-TS and TabICL-TS, can naturally handle both forecasting and imputation, but their higher inference costs and lack of time-series-specific inductive biases leave room for dedicated TSFMs to address both tasks within a unified framework.

With TS-ICL, we aim to bridge the gap between these two families of methods. TS-ICL is a probabilistic time-continuous Transformer trained through in-context learning on both real-world datasets and synthetic causal priors. By formulating time series tasks as timestamp-aligned regression problems, it can:
- Forecast future values,
- Impute missing observations, a critical capability for sensor monitoring, historical reconstruction, and anomaly investigation,
- Incorporate covariates without task-specific retraining,
- Handle irregular and partially observed time series.

Across a collection of benchmarks, TS-ICL achieves state-of-the-art zero-shot imputation performance while remaining competitive with leading forecasting foundation models. The benefits are particularly pronounced when forecasting from incomplete historical observations.

---

Past investigations of time series foundation models focused on the crucial yet largely unexplored imputation task.

 1. Our proposed architecture: MoTM, Mixture of TimeFlow Models {% cite nabil2025motm %}
 2. A large-scale empirical benchmark showcasing the strong performances of MoTM along with SOTA TABPFN-TS {% cite nabil2025time %}