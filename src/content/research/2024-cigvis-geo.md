---
title:
  zh: 'CIGVis: an open-source Python tool for real-time interactive visualization
    of multidimensional geophysical data'
  en: 'CIGVis: an open-source Python tool for real-time interactive visualization
    of multidimensional geophysical data'
summary:
  zh: Open-source Python software for real-time interactive visualization of multidimensional
    geophysical data.
  en: Open-source Python software for real-time interactive visualization of multidimensional
    geophysical data.
progress:
  zh: "<b>Li, J.</b>, Shi, Y., and Wu, X., 2024. CIGVis: an open-source Python tool
    for real-time interactive visualization of multidimensional geophysical data.
    Geophysics 90, 1–37."
  en: "<b>Li, J.</b>, Shi, Y., and Wu, X., 2024. CIGVis: an open-source Python tool
    for real-time interactive visualization of multidimensional geophysical data.
    Geophysics 90, 1–37."
order: 100
visible: true
image: /images/pubs/geo24cigvis_s.png
imageAlt:
  zh: CIGVis 展示的三维地震数据、层位、断层与地质体
  en: Multidimensional geophysical data visualized with CIGVis, including seismic volumes, horizons, faults, and geological bodies
tags:
- zh: Visualization
  en: Visualization
- zh: Open-Source Software
  en: Open-Source Software
- zh: 3D Geophysical Data
  en: 3D Geophysical Data
links:
- label: Paper
  href: https://library.seg.org/doi/abs/10.1190/geo2024-0041.1
- label: Code
  href: https://github.com/JintaoLee-Roger/cigvis
- label: Docs
  href: https://cigvis.readthedocs.io/en/latest/
- label: PyPI
  href: https://pypi.org/project/cigvis/
---

<div style="display:flex; gap:10px; margin: 15px 0;">
  <img src="/images/pubs/geo24cigvis.png" style="width:58%; border-radius:8px; box-shadow:0 4px 10px #aaa;">
  <img src="https://raw.githubusercontent.com/JintaoLee-Roger/images/main/cigvis/ex.gif" style="width:40%; border-radius:8px; box-shadow:0 4px 10px #aaa;">
</div>
<div style="display:flex; gap:10px; margin: 15px 0;">
  <img src="https://raw.githubusercontent.com/JintaoLee-Roger/images/main/cigvis/3Dvispy/11.gif" style="width:40%; border-radius:8px; box-shadow:0 4px 10px #aaa;">
  <img src="https://raw.githubusercontent.com/JintaoLee-Roger/images/main/cigvis/viser/04.gif" style="width:58%; border-radius:8px; box-shadow:0 4px 10px #aaa;">
</div>
As Python’s role in processing and interpreting geophysical data expands, the need for a Python-based tool tailored for visualizing geophysical data has become increasingly critical. In response, CIGVis was developed - a fully open-source Python tool optimized for researchers and licensed under the MIT. It specializes in real-time, interactive visualiza- tion of multidimensional geophysical data, including 3D seismic, faults, horizons, geological bodies, and well logs. CIGVis enables users to interact with data through operations such as rotation, movement, zooming, and dragging slices. It also supports a multi-canvas functionality, allowing simultaneous visualization across multiple sub-canvases with a unified camera perspective. Its ease of use allows for effective visualization with just a few lines of code across all major operating systems, and extends to both desktop and Jupyter environments, facilitating code execution in various settings. The core functionalities of CIGVis are exemplified using straightforward datasets, such as the F3 dataset.
