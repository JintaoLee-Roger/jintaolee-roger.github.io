---
title: "High‑Fidelity Seismic Super‑Resolution Using Prior‑Informed Deep Learning with 3D Awareness"
subtitle_cn: 
image: /images/pubs/tip25sr/tip25sr.png
order: 102
paper: "<b>Li, J.</b>, Wu, X., Zhang, X., Du, X., Sun, X., Deng, B. and Wang, G., 2025. High‑Fidelity Seismic Super‑Resolution Using Prior‑Informed Deep Learning with 3D Awareness. IEEE Transactions on Image Processing. "
link: https://ieeexplore.ieee.org/document/11399639
has_details: true
---

The limitations of seismic vertical resolution pose significant challenges for the identification of thin beds. Improving the vertical resolution of seismic data using deep learning methods often encounters challenges related to unrealistic outputs and limited generalization. To address these challenges, we propose a novel framework that improves the fidelity and generalization of seismic super-resolution. Our approach begins with the generation of realistic synthetic training data that aligns with the structural and amplitude characteristics of field surveys. We then introduce an enhanced 2D network with 3D awareness, which builds on the 2D Swin-Transformer and 3D convolution blocks to effectively capture 3D spatial features while maintaining computational efficiency. This network addresses the limitations of traditional 2D approaches by reducing stitching artifacts and improving spatial consistency. Finally, we develop a prior-informed fine-tuning strategy using field data without the need for labels, which incorporates a self-supervised data consistency loss and a spectral matching loss based on prior knowledge. This strategy ensures that the super-resolution results preserve the original low frequency information while yielding a spectral distribution as expected. Experiments on multiple field datasets demonstrate the robustness and generalization capability of our method, making it a practical solution for seismic resolution enhancement in diverse field datasets.

![fig](/images/pubs/tip25sr/tip25sr.png)


## Results

![3dresult](/images/pubs/tip25sr/3dresult.png)

Results of applying the model to the entire 3D dataset. (a) Original data; (b) 2D HAT model results (no fine-tuning), where inline slices are processed individually and aggregated along the assemble direction, leading to noticeable stitching artifacts; (c) Enhanced 2D model (3D input) results (no fine-tuning); (d) Enhanced 2D model results after fine-tuning. Both 2D and enhanced 2D models improve vertical resolution, while fine-tuning enhances realism.


![inline](/images/pubs/tip25sr/inline.png)

Comparison of super-resolution results and frequency spectra. (a) The low-resolution data; (b) Our method without fine-tuning; (c) Our method after fine-tuning; (d) Frequency spectra comparison; (e) Results from [Li, et, al., 2022](https://ieeexplore.ieee.org/document/9364884); (f) Results from the diffusion-based method ([Xiao, et, al., 2024](https://doi.org/10.1190/geo2023-0676.1)).



## Citation

If you find this work useful in your research, please consider citing:

```bibtex
@article{li2026high,
  title={High-Fidelity Seismic Super-Resolution Using Prior-Informed Deep Learning with 3D Awareness},
  author={Li, Jintao and Wu, Xinming and Zhang, Xianwen and Du, Xin and Sun, Xiaoming and Deng, Bao and Wang, Guangyu},
  journal={IEEE Transactions on Image Processing},
  year={2026}
}
```