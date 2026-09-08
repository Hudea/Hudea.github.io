<script setup>
const projects = [
  {
    name: 'SubLift',
    status: 'preview',
    statusLabel: '技术预览',
    version: 'v0.1.0',
    summary: '从视频画面识别烧录字幕，导出可编辑的 SRT。全部在本机完成，不上传。',
    functions: [
      '抽帧、字幕区域、OCR、打轴，一条 Native 流水线',
      'macOS Vision 与跨平台 PaddleOCR（PP-OCRv6）',
      'CLI、macOS 工作台、局域网 Docker Web 三个入口',
      '能力缺失时明确失败，不静默换引擎'
    ],
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
      <h1>项目</h1>
      <p class="lede">
        本机优先的工程工具。首页按项目排布状态，后续可以直接往下加卡片。
      </p>
    </header>

    <section class="list" aria-label="项目列表">
      <article v-for="p in projects" :key="p.name" class="card">
        <div class="card-head">
          <div>
            <h2>{{ p.name }}</h2>
            <p class="summary">{{ p.summary }}</p>
          </div>
          <div class="badges">
            <span class="badge" :class="p.status">{{ p.statusLabel }}</span>
            <span class="badge ver">{{ p.version }}</span>
          </div>
        </div>

        <div class="grid">
          <div>
            <h3>核心能力</h3>
            <ul>
              <li v-for="item in p.functions" :key="item">{{ item }}</li>
            </ul>
          </div>
          <div>
            <h3>技术</h3>
            <div class="chips">
              <span v-for="t in p.stack" :key="t">{{ t }}</span>
            </div>
          </div>
        </div>

        <div class="actions">
          <a class="btn primary" :href="p.page">架构与亮点</a>
          <a class="btn" :href="p.repo" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </article>
    </section>
  </div>
</template>

<style scoped>
.board {
  max-width: 880px;
  margin: 0 auto;
  padding: 4.25rem 1.5rem 5.5rem;
}

.intro {
  margin-bottom: 2.25rem;
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
  font-size: 2.35rem;
  letter-spacing: -0.03em;
  line-height: 1.15;
}

.lede {
  max-width: 36rem;
  margin: 0.85rem 0 0;
  color: var(--vp-c-text-2);
  font-size: 1.02rem;
  line-height: 1.7;
}

.card {
  padding: 1.6rem 1.65rem 1.45rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  background: var(--vp-c-bg-soft);
}

.card-head {
  display: flex;
  justify-content: space-between;
  gap: 1.25rem;
  align-items: flex-start;
}

.card-head h2 {
  margin: 0;
  font-size: 1.55rem;
  letter-spacing: -0.02em;
}

.summary {
  margin: 0.45rem 0 0;
  color: var(--vp-c-text-2);
  line-height: 1.65;
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
  padding: 0.18rem 0.55rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  background: var(--vp-c-default-soft);
  color: var(--vp-c-text-2);
}

.badge.preview {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 1.4rem 2rem;
  margin-top: 1.35rem;
}

.grid h3 {
  margin: 0 0 0.55rem;
  font-size: 0.78rem;
  font-weight: 650;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
}

.grid ul {
  margin: 0;
  padding-left: 1.05rem;
  color: var(--vp-c-text-1);
  line-height: 1.7;
}

.grid li + li {
  margin-top: 0.28rem;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.chips span {
  padding: 0.22rem 0.55rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  font-size: 0.8rem;
  color: var(--vp-c-text-1);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.45rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 0.42rem 0.85rem;
  border-radius: 999px;
  border: 1px solid var(--vp-c-divider);
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: border-color 0.15s ease, background 0.15s ease;
}

.btn:hover {
  border-color: var(--vp-c-brand-1);
}

.btn.primary {
  background: var(--vp-c-brand-1);
  border-color: transparent;
  color: #fff;
}

.btn.primary:hover {
  background: var(--vp-c-brand-2);
}

@media (max-width: 720px) {
  .card-head,
  .grid {
    grid-template-columns: 1fr;
    display: block;
  }

  .badges {
    justify-content: flex-start;
    margin-top: 0.75rem;
  }

  .grid h3 {
    margin-top: 1rem;
  }
}
</style>
