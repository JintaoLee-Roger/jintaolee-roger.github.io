---
title:
  zh: Deep Learning-based Seismic Reflectivity Estimation by Pre-training on Labeled
    Synthetic Data and Physics-guided Fine-tuning in Field Data
  en: Deep Learning-based Seismic Reflectivity Estimation by Pre-training on Labeled
    Synthetic Data and Physics-guided Fine-tuning in Field Data
summary:
  zh: Physics-guided fine-tuning for seismic reflectivity estimation from synthetic
    pre-training to field-data adaptation.
  en: Physics-guided fine-tuning for seismic reflectivity estimation from synthetic
    pre-training to field-data adaptation.
progress:
  zh: 'Wang, Y., <b>Li, J.<sup>†</sup></b>, Sun, X., and Wu, X.<sup>†</sup>, 2026. Deep
    Learning-based Seismic Reflectivity Estimation by Pre-training on Labeled Synthetic
    Data and Physics-guided Fine-tuning in Field Data. <i>Geophysical Journal International</i>:
    ggag317.'
  en: 'Wang, Y., <b>Li, J.<sup>†</sup></b>, Sun, X., and Wu, X.<sup>†</sup>, 2026. Deep
    Learning-based Seismic Reflectivity Estimation by Pre-training on Labeled Synthetic
    Data and Physics-guided Fine-tuning in Field Data. <i>Geophysical Journal International</i>:
    ggag317.'
order: 103
visible: true
image: "/images/pubs/geo26reflectivity.png"
imageAlt:
  zh: Deep Learning-based Seismic Reflectivity Estimation by Pre-training on Labeled
    Synthetic Data and Physics-guided Fine-tuning in Field Data
  en: Deep Learning-based Seismic Reflectivity Estimation by Pre-training on Labeled
    Synthetic Data and Physics-guided Fine-tuning in Field Data
tags:
- zh: Reflectivity Estimation
  en: Reflectivity Estimation
- zh: Physics-Guided Learning
  en: Physics-Guided Learning
- zh: Seismic Inversion
  en: Seismic Inversion
links:
- label: Paper
  href: https://doi.org/10.1093/gji/ggag317
---

Reflectivity estimation aims to enhance the resolution of seismic data, providing crucial support for the detailed inversion of reservoir parameters. We propose a method that combines supervised pre-training with synthetic data and physics-guided fine-tuning in field data to estimate reasonable reflectivity from seismic data. Initially, a U-shaped network is pre-trained by supervised learning on a large amount of synthetic seismic data. Subsequently, multiple geophysically meaningful constraints including structure-oriented smoothness, reflectivity sparsity, and data reconstruction, are introduced to formulate a self-supervised or unsupervised learning mechanism to fine-tune the pre-trained model so that it is better adapted to field data for obtaining more reasonable reflectivity. The pre-trained model provides an initial reflectivity that aligns with fundamental structural features. Based on the initial estimate, the model is further optimized through physics-guided fine-tuning to obtain a more reasonable reflectivity estimation that better reflects the characteristics of the field data and geophysical priors. Furthermore, the well-log-based correlation evaluation metric is applied to automatically and adaptively determine the early-stopping point of the fine-tuning process where favorable results are achieved. Experiments on synthetic and field seismic data confirm that the proposed method yields reasonable and high-resolution reflectivity estimation.
