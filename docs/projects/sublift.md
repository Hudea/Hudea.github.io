# SubLift

本地硬字幕提取工具：从视频画面识别烧录字幕，导出可编辑的 SRT。视频和识别文本留在本机，不上传。

当前公开版本是 **0.1 技术预览**（[v0.1.0](https://github.com/Hudea/SubLift/releases/tag/v0.1.0)）。

- **仓库**：[github.com/Hudea/SubLift](https://github.com/Hudea/SubLift)
- **许可**：MIT
- **技术栈**：C++20 / SwiftUI / Vue 3 / ONNX Runtime / ffmpeg；macOS 可用 Apple Vision，跨平台走 PaddleOCR（PP-OCRv6）

## 它解决什么

很多成片只有烧进画面的字幕，没有单独的字幕文件。SubLift 在本地抽帧、检测字幕区域、OCR、打轴，最后写出 SRT，方便校对、翻译或再剪辑。

不是软字幕轨提取，也不是翻译或云端 SaaS。

## 0.1 能怎么用

| 入口 | 说明 |
|---|---|
| 局域网 Web | Linux 上用 Docker Compose 跑工作台（CPU Paddle）；媒体目录挂进容器，仅限可信局域网 |
| Native CLI | `sublift extract` 本机编译后提取 |
| macOS GUI | SwiftUI 工作台：拖拽、预览、选区、校对、批量队列；开发者构建，不是签名安装包 |

缺少模型或所请求的引擎时会明确失败，不会静默换成别的实现。

## 明确不做

- 签名 / 公证的 macOS `.app`
- GPU / CUDA（尚未验收）
- 公网 HTTPS、账号系统
- ASS / VTT 导出

用法与限制以仓库 [README](https://github.com/Hudea/SubLift) 为准。
