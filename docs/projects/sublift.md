# SubLift

从视频画面识别烧录字幕，导出可编辑的 SRT。抽帧、OCR、打轴都在本机完成，视频和识别文本不上传。

| | |
|---|---|
| 状态 | 0.1 技术预览（[v0.1.0](https://github.com/Hudea/SubLift/releases/tag/v0.1.0)） |
| 仓库 | [github.com/Hudea/SubLift](https://github.com/Hudea/SubLift) |
| 许可 | MIT |

很多成片只有烧进画面的字幕，没有单独文件。SubLift 把它还原成可校对、可再剪辑的字幕轴。它不是软字幕轨提取，也不是翻译或云端服务。

## 核心功能

- **硬字幕提取**：ffmpeg 抽帧 → 字幕区域 → OCR → 时间轴 → SRT。
- **三个入口，同一套识别语义**：Native CLI、macOS SwiftUI 工作台、局域网 Docker Web。
- **双引擎**：macOS 用 Apple Vision（默认中英）；跨平台用 PaddleOCR PP-OCRv6 + ONNX Runtime。
- **选区**：CLI 默认裁画面下部；GUI / Web 可自动出候选框，再手工改。
- **打轴与去重**：像素差检测字幕出现/消失，相邻同文合并，短空洞可桥接。
- **工作台**：预览、增量结果、文本校对、合并/拆分；macOS 另有批量任务中心。
- **失败可见**：模型、Worker 或所请求引擎不可用时直接报错，不静默换成别的实现。

### 0.1 入口

| 入口 | 适合 | 说明 |
|---|---|---|
| 局域网 Web | Linux 服务器 + 浏览器 | Docker Compose，CPU Paddle，宿主目录挂到 `/media`，仅可信局域网 |
| Native CLI | 脚本、单文件 | `sublift extract clip.mkv -o out.srt` |
| macOS GUI | 本机校对 | `swift run SubLiftMac`；不是签名 `.app` |

## 技术

| 层 | 选用 |
|---|---|
| 识别核心 | C++20，Pipeline 与领域模型自有类型，不把 OpenCV / ORT / ObjC 泄漏到公共接口 |
| OCR | Apple Vision（ObjC++ Adapter）；Paddle Det/Cls/Rec 的 Native ONNX 实现 |
| 抽帧 | ffmpeg（含 ROI crop） |
| macOS | Swift 5.9+ / SwiftUI，经 UDS 连 C++ Worker |
| Web | Vue 3，经 HTTP/SSE 连 `sublift_server` |
| 部署 | 单容器同源：静态页 + API；PP-OCRv6 与 ORT 按 SHA-256 钉死 |

产品运行时只有 Native C++。Python 只用于隔离的离线工具，不是安装或回滚依赖。

## 架构

入口协议不同，核心处理顺序相同：

```text
产品入口 → 宿主（Worker / Server）→ Application → Pipeline → Core
                                         │
                                         └─ Ports ← Adapters（ffmpeg / Vision / Paddle）
```

```text
视频 + 配置 / 可选 ROI
  → 抽帧与坐标转换
  → 帧签名、变化检测、字幕段
  → 代表帧 OCR
  → 行选择与跨帧共识
  → 去重合并
  → SubtitleEntry → 编辑 / SRT
```

- **Application** 管任务生命周期、配置快照、进度、取消和错误映射。
- **Pipeline** 管签名、changepoint、时间轴、行选择与去重，不实例化具体 OCR。
- **Ports** 描述抽帧 / 检测 / OCR；Vision 与 Paddle 只作为 Adapter 注入。
- Worker 走 Unix Domain Socket；Server 走 HTTP/SSE。两者都不复制算法。

局域网部署时，宿主媒体目录是唯一授权根，工作区启动后锁定；没有公网 HTTPS 或账号系统。

更完整的分层与数据模型见仓库里的 [ARCHITECTURE.md](https://github.com/Hudea/SubLift/blob/main/docs/ARCHITECTURE.md)。

## 亮点

- **OCR 后置，而不是逐帧狂认。** 先用双信号帧签名（前景占比 + dHash）和三态状态机切段，每段最多认几个代表帧，再跨帧共识压背景字。
- **引擎可替换，流水线不绑死厂商。** 换 Vision / Paddle / Mock 只动 Adapter；CLI、GUI、Web 看到的仍是同一份 `SubtitleEntry`。
- **fail-closed。** 缺模型、缺 GPU 构建、缺媒体根去绑非 loopback，都是明确失败，而不是悄悄降级成空结果或 mock。
- **离线与可复现。** 模型清单带 SHA-256；容器构建校验失败即失败。推理不依赖网络。
- **增量可看、可取消。** 段闭合后就能出字幕；GUI / Web 能停在真实的 ffmpeg / Worker 边界上。

## 边界

0.1 不包含：签名公证的 macOS 安装包、GPU/CUDA、公网暴露、ASS/VTT、软字幕轨、翻译。

处理 mkv 需要系统 ffmpeg。局域网不要把端口打到公网；也不要给浏览器工作台开访问 token（当前网页不会带 Bearer）。

安装与命令以仓库 [README](https://github.com/Hudea/SubLift) 为准。
