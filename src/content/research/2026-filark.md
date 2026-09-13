---
title:
  zh: 'FiLark: 面向分布式声学传感端到端探索、标注与算法集成的流式优先软件框架'
  en: 'FiLark: a streaming-first software framework for end-to-end exploration, annotation, and algorithm integration in distributed acoustic sensing'
summary:
  zh: 面向连续、大规模 DAS 数据的流式优先框架，将交互探索、信号处理、事件标注与算法集成连接为统一工作流。
  en: A streaming-first framework that unifies interactive exploration, signal processing, event annotation, and algorithm integration for continuous, large-scale DAS data.
progress:
  zh: '<b>Li, J.</b>, Li, W.<sup>†</sup>, Tong, K., and Guo, X., 2026. FiLark: a streaming-first software framework for end-to-end exploration, annotation, and algorithm integration in distributed acoustic sensing. <i>Manuscript under review</i>.'
  en: '<b>Li, J.</b>, Li, W.<sup>†</sup>, Tong, K., and Guo, X., 2026. FiLark: a streaming-first software framework for end-to-end exploration, annotation, and algorithm integration in distributed acoustic sensing. <i>Manuscript under review</i>.'
order: 104
visible: true
image: /images/research/filark-architecture.webp
imageAlt:
  zh: FiLark 流式优先架构，连接 DAS 数据探索、分析标注与算法集成
  en: FiLark streaming-first architecture connecting DAS exploration, analysis and annotation, and algorithm integration
tags:
  - zh: 分布式声学传感
    en: Distributed Acoustic Sensing
  - zh: 流式数据处理
    en: Streaming Data Processing
  - zh: 科学软件
    en: Scientific Software
links:
  - label: Preprint
    href: https://arxiv.org/abs/2605.20132
  - label: Docs (Preview)
    href: https://filark.readthedocs.io/en/latest/
---

FiLark is designed for DAS recordings that are continuous, spatially dense, and too large for workflows centered on loading short, manually extracted segments. It treats streaming as a shared abstraction across data access, processing, visualization, annotation, and monitoring, so the same workflow can move from interactive exploration to scalable execution without being rebuilt around a separate data model.

![FiLark streaming-first architecture connecting exploration, annotation, and algorithm integration](/images/research/filark-architecture.webp)

## A unified streaming workflow

The framework connects three user-facing phases. Interactive exploration provides continuous navigation through long recordings. Analysis and annotation turn regions of interest into reproducible labels and processing workflows. Algorithm integration allows custom detectors and learning-based models to operate on the same stream and return results to the visualization environment for inspection and review.

Underneath these phases, a unified I/O layer presents files, multi-file acquisitions, and live sources through a common interface. Signal-processing and pipeline components are independent of the graphical interface, allowing them to be reused in scripts, notebooks, and headless workflows.

## Public preview

FiLark is currently under review and its source repository is not yet publicly available. The public documentation is a staged preview: core I/O, visualization, region-of-interest analysis, signal processing, and comparison workflows are documented, while the complete annotation and monitoring GUI workflows will be released after publication.

The preview documentation includes setup guidance, architectural concepts, workflow guides, and demonstrations of exploration, processing, annotation, monitoring, and review.
