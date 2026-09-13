# 中文 CV

中文与英文 CV 目录使用相同的编辑框架。

## 编辑位置

| 内容 | 文件 |
| --- | --- |
| 文档设置与章节顺序 | `main.tex` |
| 工作经历 | `exp_research.tex` |
| 教育经历 | `education.tex` |
| 研究方向 | `research_int.tex` |
| 科研基金 | `funding.tex` |
| 文献分组标题 | `publications.tex` |
| 文献数据、排序与作者注解 | `ref.bib` |
| Chicago、Harvard、IEEE 切换 | `reference-style.tex` |
| 参考文献共享渲染逻辑 | `bibliography-config.tex` |
| 软件、荣誉、教学与服务 | 对应的 `.tex` 文件 |
| 特邀报告（可选，默认隐藏） | `invited_talks.tex` |
| 颜色 | `colors.tex` |

## 文献字段

- `keywords = {J}`：已发表期刊和重要会议论文。
- `keywords = {P}`：预印本、under review 和 in revision 稿件。
- `keywords = {C}`：其他会议论文与摘要。
- `sortkey`：组内倒序排序。
- `author+an`：可组合使用 `highlight`、`cofirst` 和 `corresponding`。
- `usera`：显示在完整引用与 DOI 后面的 CV 注释。

使用 `latexmk -xelatex main.tex` 编译。Overleaf 中请将 Compiler 设为
`XeLaTeX`。英文只加载与英文 CV 同源的 KpFonts OTF 文本字体，不加载较重的
KpMath/unicode-math；中文优先使用 Overleaf 自带的
Noto Serif/Sans CJK SC（即思源宋体/黑体的 Google 版本），不可用时自动回退
到 Fandol。无需上传字体文件。

在 `reference-style.tex` 中选择 `chicago`、`harvard` 或 `ieee`。切换格式后，
请在 Overleaf 中执行一次 **Recompile from scratch**；不同格式不能安全复用旧的
`.bcf` 或 `.bbl` 缓存，否则页面可能仍显示切换前的样式。

首次编译需要运行 XeLaTeX 和 Biber，耗时会稍长。之后继续使用同一项目缓存
执行 `latexmk -xelatex main.tex` 即可增量编译；只有修改 `ref.bib` 或引用设置
时才需要重新运行 Biber。不建议每次编译前清理辅助文件。

项目中的 `latexmkrc` 会忽略 `biblatex` 在引用已经稳定后仍会改写的
`main.run.xml`，避免一次不改变 PDF 内容的额外 XeLaTeX 编译。Overleaf 会自动
读取该配置。单独上传 `cv_cn` 时使用目录内配置；通过 Git 同步整个仓库时，
仓库根目录也提供了相同配置。

如果项目此前已经超时，请先确认 `latexmkrc` 位于 Overleaf 项目根目录，再执行
一次 **Recompile from scratch** 清除由本地 TeX Live 生成的旧辅助文件。之后应
使用普通 **Recompile**，不要在每次编译前清理缓存。

需要显示特邀报告时，在 `invited_talks.tex` 中添加内容，并将 `main.tex`
中的 `\showinvitedtalksfalse` 改为 `\showinvitedtalkstrue`。
