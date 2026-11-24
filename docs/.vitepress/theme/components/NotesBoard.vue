<script setup>
const subjects = [
  {
    id: 'agent',
    code: 'SERIES 01',
    shortIdx: '01',
    title: 'Agent 基础',
    badge: '持续整理',
    count: '2 篇',
    summary:
      '围绕现代 Agent Runtime 梳理“感知—记忆—规划—行动”闭环原理、MCP / Skills 扩展机制，以及全链路安全攻击面与纵深防御工程。',
    groups: [
      {
        layer: '01 · 核心认知与扩展架构',
        items: [
          {
            idx: '01',
            title: 'Agent 基本认知',
            desc: '四要素工作流闭环（感知分层注入与 Context 治理、CoALA 四类记忆、动态重规划、Runtime Span 追踪）与工具扩展体系（MCP 协议、Skills 渐进式披露、Plugins）',
            link: '/notes/agent/fundamentals'
          }
        ]
      },
      {
        layer: '02 · 安全风险与纵深防御',
        items: [
          {
            idx: '02',
            title: '针对 Agent 的核心攻击手法',
            desc: '控制面与数据面混流、致命三要素，覆盖感知间接注入、跨会话记忆投毒、规划劫持与审批欺骗、执行穿透与外带、MCP 工具投毒、多智能体横向渗透及幻觉治理',
            link: '/notes/agent/attacks'
          }
        ]
      }
    ]
  },
  {
    id: 'network',
    code: 'SERIES 02',
    shortIdx: '02',
    title: '计算机网络',
    badge: '持续整理',
    count: '6 篇',
    summary:
      '围绕五层体系结构逐层拆解通信问题，串联协议机制推导与 Linux C++ Socket / 内核实现细节。',
    groups: [
      {
        layer: '00 · 全局导读',
        items: [
          {
            idx: '01',
            title: '计算机网络的五层体系结构',
            desc: '核心通信问题拆解，分层、抽象、封装与独立演进',
            link: '/notes/network/'
          }
        ]
      },
      {
        layer: '01 · 应用层',
        items: [
          {
            idx: '02',
            title: '应用层概述',
            desc: '面向特定应用语义的进程交互规则（HTTP / DNS / SMTP）',
            link: '/notes/network/application/overview'
          },
          {
            idx: '03',
            title: '应用层基本原理',
            desc: 'C/S、P2P 与混合架构，进程间通信与 Socket 编程三阶段',
            link: '/notes/network/application/principles'
          }
        ]
      },
      {
        layer: '02 · 传输层',
        items: [
          {
            idx: '04',
            title: '传输层基本概念',
            desc: '端到端进程逻辑通信，进程 / 端口 / Socket / 连接辨析与四类服务需求',
            link: '/notes/network/transport/overview'
          },
          {
            idx: '05',
            title: '传输层基本原理',
            desc: '多路复用与分用，RDT 1.0–3.0 演进，流水线 GBN 与 SR 窗口大小数学约束',
            link: '/notes/network/transport/principles'
          },
          {
            idx: '06',
            title: 'TCP',
            desc: '报文段与 MSS、三次握手/四次挥手（Linux C++ 视角）、SACK 与快速重传、流量控制与拥塞控制（Tahoe/Reno/CUBIC/BBR/ECN）、粘包与经典攻击',
            link: '/notes/network/transport/tcp'
          },
          {
            idx: '—',
            title: 'UDP',
            desc: '无连接传输服务与报文结构',
            pending: true
          }
        ]
      },
      {
        layer: '03–05 · 下层体系（待更新）',
        muted: true,
        items: [
          {
            idx: '—',
            title: '网络层 · 数据链路层 · 物理层',
            desc: '跨网路由转发、局域网成帧寻址与物理比特传输（后续逐步补充）',
            pending: true
          }
        ]
      }
    ]
  }
]
</script>

<template>
  <div class="board">
    <div class="hero-backdrop" aria-hidden="true" />

    <div class="board-inner">
      <header class="masthead">
        <div class="masthead-top">
          <div class="eyebrow">
            <span class="live-dot" aria-hidden="true" />
            <span>NOTES // DIRECTORY</span>
          </div>
          <div class="telemetry">
            <span class="metric"><span class="metric-val">02</span> 专题</span>
            <span class="metric"><span class="metric-val">08</span> 已发布</span>
          </div>
        </div>

        <div class="masthead-row">
          <h1>笔记</h1>
          <nav class="jump-nav" aria-label="专题跳转">
            <a
              v-for="sub in subjects"
              :key="sub.id"
              class="jump-pill"
              :href="`#${sub.id}`"
            >
              <span class="jump-idx">{{ sub.shortIdx }}</span>
              <span>{{ sub.title }}</span>
            </a>
          </nav>
        </div>
      </header>

      <div class="subject-list">
        <section
          v-for="sub in subjects"
          :id="sub.id"
          :key="sub.id"
          class="subject-panel"
        >
          <div class="subject-head">
            <div class="subject-meta">
              <span class="mono-code">{{ sub.code }}</span>
              <span class="meta-sep" aria-hidden="true">/</span>
              <span class="status-pill">{{ sub.badge }}</span>
              <span class="count-pill">{{ sub.count }}</span>
            </div>
            <h2>{{ sub.title }}</h2>
            <p class="summary">{{ sub.summary }}</p>
          </div>

          <div class="groups">
            <div
              v-for="g in sub.groups"
              :key="g.layer"
              class="group"
              :class="{ muted: g.muted }"
            >
              <div class="group-bar">
                <h3 class="group-title">{{ g.layer }}</h3>
              </div>

              <div class="ledger">
                <template v-for="item in g.items" :key="item.title">
                  <a v-if="item.link" class="ledger-row link-row" :href="item.link">
                    <span class="row-idx">{{ item.idx }}</span>
                    <div class="row-main">
                      <span class="row-title">{{ item.title }}</span>
                      <span class="row-desc">{{ item.desc }}</span>
                    </div>
                    <span class="row-arrow" aria-hidden="true">→</span>
                  </a>
                  <div v-else class="ledger-row pending-row">
                    <span class="row-idx">{{ item.idx }}</span>
                    <div class="row-main">
                      <span class="row-title">{{ item.title }}</span>
                      <span class="row-desc">{{ item.desc }}</span>
                    </div>
                    <span class="pending-tag">待更新</span>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </section>
      </div>
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
  height: 260px;
  pointer-events: none;
  background-image: radial-gradient(var(--hd-grid-dot) 1px, transparent 1px);
  background-size: 20px 20px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.85) 0%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.85) 0%, transparent 100%);
}

.board-inner {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2.6rem 1.75rem 6rem;
}

/* Masthead */
.masthead {
  padding-bottom: 1.85rem;
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
  background: var(--vp-c-brand-1);
  box-shadow: 0 0 0 3px var(--vp-c-brand-soft);
}

.telemetry {
  display: inline-flex;
  align-items: center;
  gap: 1.15rem;
  font-variant-numeric: tabular-nums;
}

.metric {
  display: inline-flex;
  align-items: baseline;
  gap: 0.32rem;
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
}

.metric-val {
  font-family: var(--vp-font-family-mono);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.masthead-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.1rem;
}

.masthead-row h1 {
  margin: 0;
  font-size: clamp(2rem, 3.6vw, 2.55rem);
  font-weight: 720;
  letter-spacing: -0.04em;
  line-height: 1.12;
  color: var(--vp-c-text-1);
}

.jump-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.jump-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.34rem 0.72rem;
  border-radius: 8px;
  border: 1px solid var(--hd-hairline);
  background: var(--hd-surface);
  font-size: 0.82rem;
  font-weight: 550;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition:
    border-color 0.15s ease,
    color 0.15s ease;
}

.jump-idx {
  font-family: var(--vp-font-family-mono);
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

.jump-pill:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-text-1);
}

/* Subject Panels */
.subject-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2.25rem;
}

.subject-panel {
  scroll-margin-top: calc(var(--vp-nav-height) + 1.5rem);
  border: 1px solid var(--hd-hairline);
  border-radius: 14px;
  background: var(--hd-surface);
  box-shadow: var(--hd-shadow-card);
  overflow: hidden;
}

.subject-head {
  padding: 1.55rem 1.7rem 1.45rem;
}

.subject-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.mono-code {
  font-family: var(--vp-font-family-mono);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: var(--vp-c-text-3);
}

.meta-sep {
  font-family: var(--vp-font-family-mono);
  font-size: 0.72rem;
  color: var(--hd-hairline-strong);
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

.subject-head h2 {
  margin: 0.7rem 0 0;
  padding: 0;
  border: 0;
  font-size: 1.42rem;
  font-weight: 700;
  letter-spacing: -0.028em;
  line-height: 1.25;
}

.summary {
  margin: 0.45rem 0 0;
  max-width: 66ch;
  color: var(--vp-c-text-2);
  font-size: 0.92rem;
  line-height: 1.68;
}

/* Groups & Hairline Ledger */
.group.muted {
  opacity: 0.72;
}

.group-bar {
  padding: 0.55rem 1.7rem;
  border-top: 1px solid var(--hd-hairline);
  border-bottom: 1px solid var(--hd-hairline);
  background: var(--hd-surface-subtle);
}

.group-title {
  margin: 0;
  font-family: var(--vp-font-family-mono);
  font-size: 0.73rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-3);
}

.ledger-row {
  display: grid;
  grid-template-columns: 2.25rem minmax(0, 1fr) auto;
  align-items: center;
  gap: 0.75rem 1rem;
  padding: 1rem 1.7rem;
  border-bottom: 1px solid var(--hd-hairline);
  text-decoration: none;
  transition: background-color 0.15s ease;
}

.group:last-child .ledger-row:last-child {
  border-bottom: 0;
}

.link-row:hover {
  background: var(--hd-surface-hover);
}

.row-idx {
  font-family: var(--vp-font-family-mono);
  font-size: 0.76rem;
  font-weight: 600;
  color: var(--vp-c-text-3);
  transition: color 0.15s ease;
}

.row-main {
  display: flex;
  flex-direction: column;
  gap: 0.22rem;
  min-width: 0;
}

.row-title {
  font-size: 0.96rem;
  font-weight: 620;
  color: var(--vp-c-text-1);
  transition: color 0.15s ease;
}

.pending-row .row-title {
  color: var(--vp-c-text-2);
}

.row-desc {
  font-size: 0.83rem;
  line-height: 1.58;
  color: var(--vp-c-text-2);
}

.pending-row .row-desc {
  color: var(--vp-c-text-3);
}

.row-arrow {
  font-family: var(--vp-font-family-mono);
  font-size: 0.95rem;
  color: var(--vp-c-text-3);
  transition:
    color 0.15s ease,
    transform 0.15s ease;
}

.link-row:hover .row-idx,
.link-row:hover .row-title,
.link-row:hover .row-arrow {
  color: var(--vp-c-brand-1);
}

.link-row:hover .row-arrow {
  transform: translateX(3px);
}

.pending-tag {
  font-family: var(--vp-font-family-mono);
  font-size: 0.71rem;
  font-weight: 500;
  color: var(--vp-c-text-3);
  padding: 0.14rem 0.52rem;
  border-radius: 6px;
  border: 1px dashed var(--hd-hairline-strong);
  white-space: nowrap;
}

@media (max-width: 640px) {
  .board-inner {
    padding: 2.25rem 1.15rem 4.5rem;
  }

  .subject-head,
  .group-bar,
  .ledger-row {
    padding-left: 1.15rem;
    padding-right: 1.15rem;
  }

  .ledger-row {
    grid-template-columns: 1.65rem minmax(0, 1fr) auto;
    gap: 0.55rem 0.75rem;
  }
}
</style>
