---
title: "Deep Learning-based Seismic Reflectivity Estimation using Labeled Synthetic Data Pre-training and Physics-guided Fine-tuning in Field Data"
subtitle_cn: 
image: /images/pubs/geo26reflectivity.png
order: 103
paper: "Wang, Y., <b>Li, J.<sup>†</sup></b>, Sun, X., and Wu, X., 2026. Deep Learning-based Seismic Reflectivity Estimation using Labeled Synthetic Data Pre-training and Physics-guided Fine-tuning in Field Data. Geophysics. "
image_max_width: "500px"
link:
has_details: False
published: false
---

Reflectivity estimation aims to enhance the resolution of seismic data, providing crucial support for the detailed inversion of reservoir parameters. We propose a method that combines supervised pre-training with synthetic data and physics-guided fine-tuning in field data to estimate reasonable reflectivity from seismic data. Initially, a U-shaped network is pre-trained by supervised learning on a large amount of synthetic seismic data. Subsequently, multiple geophysically meaningful constraints including structure-oriented smoothness, reflectivity sparsity, and data reconstruction, are introduced to formulate a self-supervised or unsupervised learning mechanism to fine-tune the pre-trained model so that it is better adapted to field data for obtaining more reasonable reflectivity. The pre-trained model provides an initial reflectivity that aligns with fundamental structural features. Based on the initial estimate, the model is further optimized through physics-guided fine-tuning to obtain a more reasonable reflectivity estimation that better reflects the characteristics of the field data and geophysical priors. Furthermore, the well-log-based correlation evaluation metric is applied to automatically and adaptively determine the early-stopping point of the fine-tuning process where favorable results are achieved. Experiments on synthetic and field seismic data confirm that the proposed method yields reasonable and high-resolution reflectivity estimation.