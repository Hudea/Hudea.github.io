<script setup>
const metrics = [
  { value: '01', label: '开源项目' },
  { value: '02', label: '知识专题' },
  { value: '08', label: '已发笔记' }
]

const noteSeries = [
  {
    code: 'SERIES 01',
    icon: 'agent',
    name: 'Agent 基础',
    statusLabel: '持续整理',
    countLabel: '2 篇',
    summary:
      '从现代 Agent Runtime 视角建立系统认知：拆解“感知—记忆—规划—行动”闭环与 MCP / Skills 扩展底座，并顺着全链路剖析六大对抗性攻击面、模型幻觉与纵深防御体系。',
    entry: '/notes/agent/fundamentals',
    highlight: {
      label: '最新：核心攻击手法与防御',
      link: '/notes/agent/attacks'
    },
    layers: [
      {
        code: '01 · 架构与扩展底座',
        title: 'Agent 基本认知',
        desc: '感知分层注入与 Context 治理、CoALA 四类记忆、动态重规划及 MCP / Skills / Plugins 扩展机制',
        items: [
          { text: '基础工作流', link: '/notes/agent/fundamentals#基础工作流' },
          { text: 'MCP 与 Skills', link: '/notes/agent/fundamentals#工具扩展机制' }
        ]
      },
      {
        code: '02 · 安全与纵深防御',
        title: '针对 Agent 的核心攻击手法',
        desc: '致命三要素、间接注入、记忆投毒、规划劫持、执行穿透、MCP 供应链与多智能体横向渗透',
        items: [
          { text: '攻击本质', link: '/notes/agent/attacks' },
          { text: '记忆投毒', link: '/notes/agent/attacks#持久化记忆层-记忆投毒与逻辑炸弹' },
          { text: '执行与供应链', link: '/notes/agent/attacks#执行层-权限越界、解析穿透与静默外带' },
          { text: '横向渗透', link: '/notes/agent/attacks#多智能体协同层-横向渗透' }
        ]
      }
    ]
  },
  {
    code: 'SERIES 02',
    icon: 'network',
    name: '计算机网络',
    statusLabel: '持续整理',
    countLabel: '6 篇',
    summary:
      '以五层体系结构为主线拆解协议设计原理，从分层抽象、可靠数据传输（RDT）到 TCP 连接管理与拥塞控制，结合 Socket 与 Linux C++ 内核视角落到工程细节。',
    entry: '/notes/network/',
    highlight: {
      label: '直达：TCP 协议',
      link: '/notes/network/transport/tcp'
    },
    layers: [
      {
        code: '00 · 导读',
        title: '五层体系结构',
        desc: '通信问题拆解、分层抽象与独立演进',
        items: [{ text: '体系结构概述', link: '/notes/network/' }]
      },
      {
        code: '01 · 应用层',
        title: '应用架构与 Socket',
        desc: 'C/S、P2P、混合架构与进程间通信接口',
        items: [
          { text: '概述', link: '/notes/network/application/overview' },
          { text: '应用层基本原理', link: '/notes/network/application/principles' }
        ]
      },
      {
        code: '02 · 传输层',
        title: '可靠传输与 TCP',
        desc: '复用分用、RDT 1.0–3.0、GBN/SR 与 TCP',
        items: [
          { text: '基本概念', link: '/notes/network/transport/overview' },
          { text: '基本原理', link: '/notes/network/transport/principles' },
          { text: 'TCP', link: '/notes/network/transport/tcp' }
        ]
      }
    ],
    upcoming: ['传输层 · UDP', '网络层', '数据链路层', '物理层']
  }
]

const featuredProject = {
  code: 'PROJECT 01',
  name: 'SubLift',
  tagline: '离线优先硬字幕提取与校对工作台 · 纯毫秒打轴 · 三引擎同源',
  statusLabel: '正式发布',
  version: 'v1.0.0',
  license: 'Apache-2.0',
  summary:
    '从视频画面自动定位并识别烧录字幕，还原为可编辑的 SRT。围绕 C++20 五层零泄漏算法核、Tauri 2 (Rust/Tokio) 原生宿主与 React 19 校对工作台构建，零本地端口、零 Python 运行时依赖，同时支持本地双引擎与流式 VLM 识别。',
  surfaces: [
    { name: 'Desktop App', note: 'Tauri 2 + React 19 工作台' },
    { name: 'Native CLI', note: 'sublift_cli 批处理 / 纯打轴' },
    { name: 'Rust VLM', note: '流式拼图 / 四级自救 / 续传' }
  ],
  stack: ['C++20', 'Rust / Tauri 2', 'React 19', 'ONNX Runtime', 'Apple Vision', 'FFmpeg'],
  pipeline: [
    {
      step: '01',
      name: '自动选区与高效解码',
      detail: 'Sobel 缩略图初筛 + 双峰回扫定位字幕带 · 硬解与 noref 跳帧'
    },
    {
      step: '02',
      name: '视觉特征与纯毫秒打轴',
      detail: '双极性描边掩码 · 三分区 dHash · 掩码局部 SSIM · 字形保留否决'
    },
    {
      step: '03',
      name: '三引擎首尾同源识别',
      detail: 'PaddleOCR (ORT) / Apple Vision / Rust 原生流式 VLM 拼图'
    },
    {
      step: '04',
      name: '跨帧共识与工作台校对',
      detail: '五维行评分 · 4-Pass 去重合并 · 虚拟列表校对与唯一权威 SRT'
    }
  ],
  guarantees: ['五层零泄漏', '首尾同源三引擎', '静态依赖门禁'],
  page: '/projects/sublift/',
  repo: 'https://github.com/Hudea/SubLift'
}
</script>

<template>
  <div class="board">
    <div class="hero-backdrop" aria-hidden="true" />

    <div class="board-inner">
      <header class="masthead">
        <div class="masthead-top">
          <div class="eyebrow">
            <span class="live-dot" aria-hidden="true" />
            <span>HUDEA // TECHNICAL INDEX</span>
          </div>
          <div class="telemetry" aria-label="站点概览">
            <div v-for="m in metrics" :key="m.label" class="metric">
              <span class="metric-val">{{ m.value }}</span>
              <span class="metric-label">{{ m.label }}</span>
            </div>
          </div>
        </div>
        <div class="masthead-main">
          <h1>项目与笔记</h1>
          <p class="signature" aria-label="个性签名">
            <svg class="sig-wave" viewBox="0 0 36 8" fill="none" aria-hidden="true">
              <path
                d="M1 4.6C5.5 1.6 10.5 7.4 15 4.6C19.5 1.6 24.5 7.4 29 4.6C31.5 3 33.6 3.5 35 4.2"
                stroke="currentColor"
                stroke-width="1.25"
                stroke-linecap="round"
              />
            </svg>
            <span class="sig-text">一直游到海水变蓝</span>
          </p>
        </div>
      </header>

      <section class="section" aria-label="工程项目">
        <div class="section-head">
          <div class="section-label">
            <span class="section-idx">01</span>
            <h2 class="section-title">项目</h2>
          </div>
          <span class="section-rule" aria-hidden="true" />
          <a
            class="section-link"
            href="https://github.com/Hudea"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>

        <article class="project-showcase">
          <div class="project-info">
            <div class="project-meta">
              <span class="mono-code">{{ featuredProject.code }}</span>
              <span class="meta-sep" aria-hidden="true">/</span>
              <span class="status-pill live">{{ featuredProject.statusLabel }}</span>
              <span class="count-pill">{{ featuredProject.version }}</span>
              <span class="count-pill">{{ featuredProject.license }}</span>
            </div>

            <h3 class="project-name">
              <a class="title-link" :href="featuredProject.page">{{ featuredProject.name }}</a>
            </h3>
            <p class="project-tagline">{{ featuredProject.tagline }}</p>
            <p class="summary">{{ featuredProject.summary }}</p>

            <div class="surface-strip" aria-label="支持入口">
              <div
                v-for="sf in featuredProject.surfaces"
                :key="sf.name"
                class="surface-item"
              >
                <span class="surface-name">{{ sf.name }}</span>
                <span class="surface-note">{{ sf.note }}</span>
              </div>
            </div>

            <div class="stack-row" aria-label="技术栈">
              <span v-for="tech in featuredProject.stack" :key="tech" class="stack-tag">
                {{ tech }}
              </span>
            </div>

            <div class="project-actions">
              <a class="btn primary" :href="featuredProject.page">
                架构与亮点 <span class="arrow" aria-hidden="true">→</span>
              </a>
              <a
                class="btn"
                :href="featuredProject.repo"
                target="_blank"
                rel="noreferrer"
              >
                GitHub 仓库 <span class="arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div class="pipeline-pane" aria-label="SubLift 处理管线示意">
            <div class="pane-head">
              <span class="pane-title">SUBLIFT // PIPELINE</span>
              <span class="pane-badge">OFFLINE FIRST</span>
            </div>

            <div class="cli-box">
              <span class="cli-prompt">$</span>
              <span class="cli-cmd">sublift_cli</span>
              <span class="cli-sub">extract</span>
              <span class="cli-arg">clip.mkv</span>
              <span class="cli-flag">-o</span>
              <span class="cli-arg">out.srt</span>
              <span class="cli-flag">--auto-region</span>
            </div>

            <ol class="pipeline-steps">
              <li v-for="stage in featuredProject.pipeline" :key="stage.step" class="pipeline-step">
                <span class="step-num">{{ stage.step }}</span>
                <div class="step-body">
                  <div class="step-name">{{ stage.name }}</div>
                  <div class="step-detail">{{ stage.detail }}</div>
                </div>
              </li>
            </ol>

            <div class="pane-foot">
              <span v-for="g in featuredProject.guarantees" :key="g" class="guarantee-item">
                {{ g }}
              </span>
            </div>
          </div>
        </article>
      </section>

      <section class="section" aria-label="知识笔记">
        <div class="section-head">
          <div class="section-label">
            <span class="section-idx">02</span>
            <h2 class="section-title">笔记</h2>
          </div>
          <span class="section-rule" aria-hidden="true" />
          <a class="section-link" href="/notes/">完整目录 <span aria-hidden="true">→</span></a>
        </div>

        <div class="series-list">
          <article v-for="s in noteSeries" :key="s.name" class="series-panel">
            <div class="series-head">
              <div class="series-main">
                <div class="series-meta">
                  <span class="series-icon" aria-hidden="true">
                    <svg v-if="s.icon === 'agent'" viewBox="0 0 20 20" fill="none">
                      <rect x="2.5" y="2.5" width="5.5" height="5.5" rx="1.2" stroke="currentColor" stroke-width="1.4" />
                      <rect x="12" y="2.5" width="5.5" height="5.5" rx="1.2" stroke="currentColor" stroke-width="1.4" />
                      <rect x="12" y="12" width="5.5" height="5.5" rx="1.2" stroke="currentColor" stroke-width="1.4" />
                      <rect x="2.5" y="12" width="5.5" height="5.5" rx="1.2" stroke="currentColor" stroke-width="1.4" />
                      <path d="M8 5.25h4M14.75 8v4M12 14.75H8M5.25 12V8" stroke="currentColor" stroke-width="1.3" />
                    </svg>
                    <svg v-else viewBox="0 0 20 20" fill="none">
                      <path d="M3 6.2 10 3l7 3.2-7 3.2-7-3.2Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" />
                      <path d="m3 10.2 7 3.2 7-3.2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="m3 14.2 7 3.2 7-3.2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                  <span class="mono-code">{{ s.code }}</span>
                  <span class="meta-sep" aria-hidden="true">/</span>
                  <span class="status-pill">{{ s.statusLabel }}</span>
                  <span class="count-pill">{{ s.countLabel }}</span>
                </div>

                <h3>
                  <a class="title-link" :href="s.entry">{{ s.name }}</a>
                </h3>
                <p class="summary">{{ s.summary }}</p>
              </div>

              <div class="series-actions">
                <a class="btn primary" :href="s.entry">
                  开始阅读 <span class="arrow" aria-hidden="true">→</span>
                </a>
                <a v-if="s.highlight" class="btn subtle" :href="s.highlight.link">
                  {{ s.highlight.label }}
                </a>
              </div>
            </div>

            <div
              class="chapter-grid"
              :class="s.layers.length === 2 ? 'cols-2' : 'cols-3'"
            >
              <div v-for="layer in s.layers" :key="layer.code" class="chapter-cell">
                <div class="chapter-code">{{ layer.code }}</div>
                <div class="chapter-title">{{ layer.title }}</div>
                <p class="chapter-desc">{{ layer.desc }}</p>
                <div class="chapter-links">
                  <a
                    v-for="item in layer.items"
                    :key="item.link"
                    class="micro-link"
                    :href="item.link"
                  >
                    <span>{{ item.text }}</span>
                    <span class="micro-arrow" aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </div>

            <div v-if="s.upcoming?.length" class="upcoming-rail">
              <span class="upcoming-label">UPCOMING</span>
              <div class="upcoming-items">
                <span v-for="u in s.upcoming" :key="u" class="upcoming-item">{{ u }}</span>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.board {
  position: relative;
  width: 100%;
  overflow-x: clip;
}

.hero-backdrop {
  position: absolute;
  inset: 0 0 auto 0;
  height: 360px;
  pointer-events: none;
  background-image: url('/bg-hudea.webp');
  background-position: 72% 28%;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: var(--hd-hero-opacity);
  filter: var(--hd-bg-filter);
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.92) 0%,
    rgba(0, 0, 0, 0.55) 55%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.92) 0%,
    rgba(0, 0, 0, 0.55) 55%,
    transparent 100%
  );
}

.board-inner {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2.6rem 1.75rem 6rem;
}

/* ==========================================================================
   Masthead
   ========================================================================== */
.masthead {
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--hd-hairline);
}

.masthead-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--vp-font-family-mono);
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--vp-c-text-3);
}

.live-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--hd-status-live);
  box-shadow: 0 0 0 3px var(--hd-status-live-soft);
}

.telemetry {
  display: inline-flex;
  align-items: center;
  gap: 1.25rem;
  font-variant-numeric: tabular-nums;
}

.metric {
  display: inline-flex;
  align-items: baseline;
  gap: 0.35rem;
}

.metric-val {
  font-family: var(--vp-font-family-mono);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.metric-label {
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
}

.masthead-main {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem 2rem;
  margin-top: 1.15rem;
}

.masthead-main h1 {
  margin: 0;
  font-size: clamp(2.05rem, 3.8vw, 2.7rem);
  font-weight: 720;
  letter-spacing: -0.04em;
  line-height: 1.12;
  color: var(--vp-c-text-1);
}

.signature {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  margin: 0;
}

.sig-wave {
  width: 30px;
  height: 8px;
  color: var(--hd-sig-wave);
  flex-shrink: 0;
}

.sig-text {
  display: inline-block;
  padding: 0.14em 0.04em;
  font-family: 'HudeaSignature', 'Kaiti SC', 'STKaiti', serif;
  font-size: clamp(1.52rem, 2.65vw, 1.92rem);
  font-weight: 400;
  letter-spacing: 0.08em;
  line-height: 1.25;
  background: var(--hd-sig-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}

/* ==========================================================================
   Sections
   ========================================================================== */
.section {
  margin-top: 2.75rem;
}

.section + .section {
  margin-top: 3.5rem;
}

.section-head {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-bottom: 1.15rem;
}

.section-label {
  display: inline-flex;
  align-items: baseline;
  gap: 0.55rem;
  flex-shrink: 0;
}

.section-idx {
  font-family: var(--vp-font-family-mono);
  font-size: 0.76rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

.section-title {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 0.95rem;
  font-weight: 650;
  letter-spacing: -0.01em;
  color: var(--vp-c-text-1);
}

.section-rule {
  flex: 1;
  height: 1px;
  background: var(--hd-hairline);
}

.section-link {
  flex-shrink: 0;
  font-family: var(--vp-font-family-mono);
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.15s ease;
}

.section-link:hover {
  color: var(--vp-c-brand-1);
}

/* ==========================================================================
   Note Series Panels (Hairline Grid Architecture)
   ========================================================================== */
.series-list {
  display: flex;
  flex-direction: column;
  gap: 1.35rem;
}

.series-panel {
  border: 1px solid var(--hd-hairline);
  border-radius: 14px;
  background: var(--hd-surface);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: var(--hd-shadow-card);
  overflow: hidden;
  transition: border-color 0.2s ease;
}

.series-panel:hover {
  border-color: var(--hd-hairline-strong);
}

.series-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.55rem 1.7rem 1.45rem;
}

.series-main {
  min-width: 0;
  flex: 1;
}

.series-meta,
.project-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.series-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 7px;
  border: 1px solid var(--hd-hairline);
  background: var(--hd-surface-subtle);
  color: var(--vp-c-brand-1);
  margin-right: 0.15rem;
}

.series-icon svg {
  width: 15px;
  height: 15px;
}

.mono-code {
  font-family: var(--vp-font-family-mono);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: var(--vp-c-text-3);
}

.meta-sep {
  color: var(--hd-hairline-strong);
  font-family: var(--vp-font-family-mono);
  font-size: 0.72rem;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  padding: 0.12rem 0.5rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 600;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.status-pill.live {
  background: var(--hd-status-live-soft);
  color: var(--hd-status-live);
}

.count-pill {
  display: inline-flex;
  align-items: center;
  padding: 0.12rem 0.48rem;
  border-radius: 6px;
  border: 1px solid var(--hd-hairline);
  background: var(--hd-surface-subtle);
  font-family: var(--vp-font-family-mono);
  font-size: 0.71rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.series-head h3 {
  margin: 0.75rem 0 0;
  font-size: 1.42rem;
  font-weight: 700;
  letter-spacing: -0.028em;
  line-height: 1.25;
}

.title-link {
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.15s ease;
}

.title-link:hover {
  color: var(--vp-c-brand-1);
}

.summary {
  margin: 0.5rem 0 0;
  max-width: 64ch;
  color: var(--vp-c-text-2);
  font-size: 0.92rem;
  line-height: 1.7;
}

.series-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  flex-shrink: 0;
  padding-top: 0.15rem;
}

/* Hairline-divided Chapter Matrix */
.chapter-grid {
  display: grid;
  border-top: 1px solid var(--hd-hairline);
}

.chapter-grid.cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.chapter-grid.cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.chapter-cell {
  display: flex;
  flex-direction: column;
  padding: 1.15rem 1.45rem 1.2rem;
  border-right: 1px solid var(--hd-hairline);
  transition: background-color 0.16s ease;
}

.chapter-cell:last-child {
  border-right: 0;
}

.chapter-cell:hover {
  background: var(--hd-surface-hover);
}

.chapter-code {
  font-family: var(--vp-font-family-mono);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  color: var(--vp-c-brand-1);
}

.chapter-title {
  margin-top: 0.3rem;
  font-size: 0.98rem;
  font-weight: 650;
  letter-spacing: -0.015em;
  color: var(--vp-c-text-1);
}

.chapter-desc {
  margin: 0.35rem 0 0.85rem;
  font-size: 0.82rem;
  line-height: 1.58;
  color: var(--vp-c-text-2);
  flex-grow: 1;
}

.chapter-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 0.65rem;
  padding-top: 0.65rem;
  border-top: 1px dashed var(--hd-hairline);
}

.micro-link {
  display: inline-flex;
  align-items: center;
  gap: 0.22rem;
  font-size: 0.8rem;
  font-weight: 550;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.15s ease;
}

.micro-arrow {
  font-family: var(--vp-font-family-mono);
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
  transition:
    color 0.15s ease,
    transform 0.15s ease;
}

.micro-link:hover {
  color: var(--vp-c-brand-1);
}

.micro-link:hover .micro-arrow {
  color: var(--vp-c-brand-1);
  transform: translate(1px, -1px);
}

/* Upcoming Footer Rail */
.upcoming-rail {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.55rem 0.9rem;
  padding: 0.75rem 1.7rem;
  border-top: 1px solid var(--hd-hairline);
  background: var(--hd-surface-subtle);
}

.upcoming-label {
  font-family: var(--vp-font-family-mono);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--vp-c-text-3);
}

.upcoming-items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 0.85rem;
}

.upcoming-item {
  position: relative;
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
}

.upcoming-item + .upcoming-item::before {
  content: '·';
  margin-right: 0.85rem;
  color: var(--hd-hairline-strong);
}

/* ==========================================================================
   Featured Project — SubLift Architectural Split Showcase
   ========================================================================== */
.project-showcase {
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(0, 1fr);
  border: 1px solid var(--hd-hairline);
  border-radius: 14px;
  background: var(--hd-surface);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: var(--hd-shadow-card);
  overflow: hidden;
  transition: border-color 0.2s ease;
}

.project-showcase:hover {
  border-color: var(--hd-hairline-strong);
}

.project-info {
  display: flex;
  flex-direction: column;
  padding: 1.7rem 1.75rem;
}

.project-name {
  margin: 0.85rem 0 0;
  font-size: 1.75rem;
  font-weight: 740;
  letter-spacing: -0.035em;
  line-height: 1.15;
}

.project-tagline {
  margin: 0.35rem 0 0;
  font-family: var(--vp-font-family-mono);
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--vp-c-brand-1);
}

.surface-strip {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 1.25rem;
  border: 1px solid var(--hd-hairline);
  border-radius: 10px;
  background: var(--hd-surface-subtle);
  overflow: hidden;
}

.surface-item {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding: 0.65rem 0.75rem;
  border-right: 1px solid var(--hd-hairline);
}

.surface-item:last-child {
  border-right: 0;
}

.surface-name {
  font-family: var(--vp-font-family-mono);
  font-size: 0.76rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.surface-note {
  font-size: 0.74rem;
  color: var(--vp-c-text-3);
}

.stack-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.38rem;
  margin-top: 1.15rem;
}

.stack-tag {
  padding: 0.18rem 0.5rem;
  border-radius: 6px;
  border: 1px solid var(--hd-hairline);
  background: var(--hd-surface);
  font-family: var(--vp-font-family-mono);
  font-size: 0.73rem;
  color: var(--vp-c-text-2);
}

.project-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: auto;
  padding-top: 1.45rem;
}

/* Integrated Dark Engineering Pipeline Panel */
.pipeline-pane {
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1.55rem 1.3rem;
  background: var(--hd-terminal-bg);
  color: var(--hd-terminal-text);
  border-left: 1px solid var(--hd-hairline);
}

.pane-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding-bottom: 0.9rem;
  border-bottom: 1px solid var(--hd-terminal-border);
}

.pane-title {
  font-family: var(--vp-font-family-mono);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--hd-terminal-muted);
}

.pane-badge {
  font-family: var(--vp-font-family-mono);
  font-size: 0.67rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  padding: 0.14rem 0.46rem;
  border-radius: 999px;
  border: 1px solid rgba(45, 212, 191, 0.28);
  background: rgba(45, 212, 191, 0.1);
  color: #5eead4;
}

.cli-box {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 1rem;
  padding: 0.62rem 0.85rem;
  border-radius: 8px;
  border: 1px solid var(--hd-terminal-border);
  background: var(--hd-terminal-surface);
  font-family: var(--vp-font-family-mono);
  font-size: 0.78rem;
  line-height: 1.5;
}

.cli-prompt {
  color: #5eead4;
  user-select: none;
}

.cli-cmd {
  color: #ffffff;
  font-weight: 600;
}

.cli-sub {
  color: var(--hd-terminal-accent);
}

.cli-flag {
  color: #fbbf24;
}

.cli-arg {
  color: var(--hd-terminal-muted);
}

.pipeline-steps {
  list-style: none;
  margin: 1.15rem 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.pipeline-step {
  position: relative;
  display: grid;
  grid-template-columns: 26px minmax(0, 1fr);
  gap: 0.7rem;
  align-items: start;
}

.pipeline-step:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 12px;
  top: 24px;
  bottom: -10px;
  width: 1px;
  background: var(--hd-terminal-border);
}

.step-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 22px;
  border-radius: 5px;
  border: 1px solid var(--hd-terminal-border);
  background: var(--hd-terminal-surface);
  font-family: var(--vp-font-family-mono);
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--hd-terminal-accent);
}

.step-name {
  font-size: 0.84rem;
  font-weight: 620;
  color: var(--hd-terminal-text);
  line-height: 1.35;
}

.step-detail {
  margin-top: 0.14rem;
  font-size: 0.76rem;
  line-height: 1.5;
  color: var(--hd-terminal-muted);
}

.pane-foot {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem 0.9rem;
  margin-top: auto;
  padding-top: 1.1rem;
  border-top: 1px solid var(--hd-terminal-border);
}

.guarantee-item {
  font-family: var(--vp-font-family-mono);
  font-size: 0.7rem;
  color: var(--hd-terminal-dim);
}

.guarantee-item::before {
  content: '✓ ';
  color: #5eead4;
}

/* ==========================================================================
   Buttons
   ========================================================================== */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.44rem 0.9rem;
  border-radius: 8px;
  border: 1px solid var(--hd-hairline-strong);
  background: var(--hd-surface);
  font-size: 0.84rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  text-decoration: none;
  white-space: nowrap;
  transition:
    border-color 0.15s ease,
    background-color 0.15s ease,
    color 0.15s ease;
}

.btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.btn.subtle {
  border-color: var(--hd-hairline);
  background: var(--hd-surface-subtle);
  font-size: 0.79rem;
  font-weight: 550;
  color: var(--vp-c-text-2);
}

.btn.subtle:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.btn.primary {
  background: var(--vp-c-brand-1);
  border-color: transparent;
  color: #ffffff;
}

.btn.primary:hover {
  background: var(--vp-c-brand-2);
  color: #ffffff;
}

.btn .arrow {
  font-family: var(--vp-font-family-mono);
  font-size: 0.82em;
  transition: transform 0.15s ease;
}

.btn:hover .arrow {
  transform: translateX(2px);
}

/* ==========================================================================
   Responsive
   ========================================================================== */
@media (max-width: 880px) {
  .series-head {
    flex-direction: column;
    gap: 1.1rem;
  }

  .series-actions {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }

  .chapter-grid.cols-3 {
    grid-template-columns: 1fr;
  }

  .chapter-grid.cols-3 .chapter-cell {
    border-right: 0;
    border-bottom: 1px solid var(--hd-hairline);
  }

  .chapter-grid.cols-3 .chapter-cell:last-child {
    border-bottom: 0;
  }

  .project-showcase {
    grid-template-columns: 1fr;
  }

  .pipeline-pane {
    border-left: 0;
    border-top: 1px solid var(--hd-hairline);
  }
}

@media (max-width: 640px) {
  .board-inner {
    padding: 2.25rem 1.15rem 4.5rem;
  }

  .series-head,
  .project-info,
  .pipeline-pane {
    padding-left: 1.2rem;
    padding-right: 1.2rem;
  }

  .chapter-grid.cols-2 {
    grid-template-columns: 1fr;
  }

  .chapter-grid.cols-2 .chapter-cell {
    border-right: 0;
    border-bottom: 1px solid var(--hd-hairline);
  }

  .chapter-grid.cols-2 .chapter-cell:last-child {
    border-bottom: 0;
  }

  .chapter-cell {
    padding: 1rem 1.2rem;
  }

  .upcoming-rail {
    padding-left: 1.2rem;
    padding-right: 1.2rem;
  }

  .surface-strip {
    grid-template-columns: 1fr;
  }

  .surface-item {
    border-right: 0;
    border-bottom: 1px solid var(--hd-hairline);
  }

  .surface-item:last-child {
    border-bottom: 0;
  }
}
</style>
