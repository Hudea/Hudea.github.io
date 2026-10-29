<script setup>
const noteSeries = [
  {
    name: '计算机网络',
    status: 'active',
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

const projects = [
  {
    name: 'SubLift',
    status: 'preview',
    statusLabel: '技术预览',
    version: 'v0.1.0',
    summary:
      '本地硬字幕提取工具：从视频画面识别烧录字幕，导出可编辑的 SRT。识别在本机完成，不上传。当前提供 Native CLI、macOS 工作台和局域网 Docker Web。',
    stack: ['C++20', 'SwiftUI', 'Vue 3', 'ONNX Runtime', 'ffmpeg', 'Docker'],
    page: '/projects/sublift',
    repo: 'https://github.com/Hudea/SubLift'
  }
]
</script>

<template>
  <div class="board">
    <header class="intro">
      <p class="kicker">Hudea</p>
      <h1>笔记与项目</h1>
    </header>

    <section class="section" aria-label="知识笔记">
      <div class="section-head">
        <h2 class="section-title">笔记</h2>
        <a class="section-link" href="/notes/">完整目录 →</a>
      </div>

      <article v-for="s in noteSeries" :key="s.name" class="card">
        <div class="card-head">
          <div>
            <h3>
              <a class="title-link" :href="s.entry">{{ s.name }}</a>
            </h3>
            <p class="summary">{{ s.summary }}</p>
          </div>
          <div class="badges">
            <span class="badge" :class="s.status">{{ s.statusLabel }}</span>
            <span class="badge ver">{{ s.countLabel }}</span>
          </div>
        </div>

        <div class="layer-grid">
          <div v-for="layer in s.layers" :key="layer.code" class="layer-box">
            <div class="layer-code">{{ layer.code }}</div>
            <div class="layer-title">{{ layer.title }}</div>
            <p class="layer-desc">{{ layer.desc }}</p>
            <div class="layer-links">
              <a
                v-for="item in layer.items"
                :key="item.link"
                class="pill-link"
                :href="item.link"
              >
                {{ item.text }}
              </a>
            </div>
          </div>
        </div>

        <div v-if="s.upcoming?.length" class="upcoming-row">
          <span class="upcoming-label">待更新</span>
          <span v-for="u in s.upcoming" :key="u" class="upcoming-pill">{{ u }}</span>
        </div>

        <div class="actions">
          <a class="btn primary" :href="s.entry">开始阅读</a>
          <a v-if="s.highlight" class="btn" :href="s.highlight.link">
            {{ s.highlight.label }}
          </a>
        </div>
      </article>
    </section>

    <section class="section" aria-label="项目列表">
      <div class="section-head">
        <h2 class="section-title">项目</h2>
      </div>

      <article v-for="p in projects" :key="p.name" class="card compact">
        <div class="card-head">
          <div>
            <div class="inline-head">
              <h3>
                <a class="title-link" :href="p.page">{{ p.name }}</a>
              </h3>
              <span class="badge" :class="p.status">{{ p.statusLabel }}</span>
              <span class="badge ver">{{ p.version }}</span>
            </div>
            <p class="summary">{{ p.summary }}</p>
          </div>
        </div>

        <div class="project-foot">
          <div class="chips">
            <span v-for="t in p.stack" :key="t">{{ t }}</span>
          </div>
          <div class="actions compact-actions">
            <a class="btn" :href="p.page">架构与亮点</a>
            <a class="btn" :href="p.repo" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<style scoped>
.board {
  max-width: 880px;
  margin: 0 auto;
  padding: 4rem 1.5rem 5.5rem;
}

.intro {
  margin-bottom: 2.5rem;
}

.kicker {
  margin: 0 0 0.4rem;
  color: var(--vp-c-brand-1);
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.intro h1 {
  margin: 0;
  font-size: 2.3rem;
  letter-spacing: -0.03em;
  line-height: 1.15;
}

.section + .section {
  margin-top: 2.75rem;
}

.section-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 0.85rem;
}

.section-title {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 0.82rem;
  font-weight: 650;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
}

.section-link {
  font-size: 0.84rem;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.section-link:hover {
  text-decoration: underline;
}

.card {
  padding: 1.6rem 1.65rem 1.45rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  background: var(--vp-c-bg-soft);
}

.card.compact {
  padding: 1.35rem 1.5rem 1.3rem;
}

.card + .card {
  margin-top: 1rem;
}

.card-head {
  display: flex;
  justify-content: space-between;
  gap: 1.25rem;
  align-items: flex-start;
}

.inline-head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
}

.card-head h3 {
  margin: 0;
  font-size: 1.45rem;
  letter-spacing: -0.02em;
  line-height: 1.25;
}

.card.compact .card-head h3 {
  font-size: 1.28rem;
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
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  line-height: 1.68;
}

.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-content: flex-end;
  flex-shrink: 0;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.18rem 0.58rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  background: var(--vp-c-default-soft);
  color: var(--vp-c-text-2);
}

.badge.preview,
.badge.active {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.layer-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.85rem;
  margin-top: 1.35rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--vp-c-divider);
}

.layer-box {
  display: flex;
  flex-direction: column;
  padding: 0.95rem 1rem;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
}

.layer-code {
  font-size: 0.75rem;
  font-weight: 650;
  letter-spacing: 0.04em;
  color: var(--vp-c-brand-1);
}

.layer-title {
  margin-top: 0.25rem;
  font-size: 0.98rem;
  font-weight: 650;
  color: var(--vp-c-text-1);
}

.layer-desc {
  margin: 0.3rem 0 0.75rem;
  font-size: 0.82rem;
  line-height: 1.55;
  color: var(--vp-c-text-2);
  flex-grow: 1;
}

.layer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.38rem;
}

.pill-link {
  display: inline-flex;
  align-items: center;
  padding: 0.18rem 0.55rem;
  border-radius: 7px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: border-color 0.15s ease, color 0.15s ease;
}

.pill-link:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.upcoming-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.85rem;
}

.upcoming-label {
  font-size: 0.76rem;
  font-weight: 600;
  color: var(--vp-c-text-3);
  margin-right: 0.15rem;
}

.upcoming-pill {
  padding: 0.14rem 0.52rem;
  border-radius: 7px;
  border: 1px dashed var(--vp-c-divider);
  font-size: 0.76rem;
  color: var(--vp-c-text-3);
}

.project-foot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.9rem;
  margin-top: 1.15rem;
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.38rem;
}

.chips span {
  padding: 0.2rem 0.52rem;
  border-radius: 7px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 1.25rem;
}

.actions.compact-actions {
  margin-top: 0;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.85rem;
  border-radius: 999px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  font-size: 0.86rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: border-color 0.15s ease, background 0.15s ease, color 0.15s ease;
}

.btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.btn.primary {
  background: var(--vp-c-brand-1);
  border-color: transparent;
  color: #fff;
}

.btn.primary:hover {
  background: var(--vp-c-brand-2);
  color: #fff;
}

@media (max-width: 760px) {
  .card-head {
    flex-direction: column;
    gap: 0.75rem;
  }

  .badges {
    justify-content: flex-start;
  }

  .layer-grid {
    grid-template-columns: 1fr;
  }

  .project-foot {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
