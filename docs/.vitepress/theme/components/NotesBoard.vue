<script setup>
const subjects = [
  {
    id: 'network',
    title: '计算机网络',
    badge: '持续整理',
    summary:
      '围绕五层体系结构逐层拆解通信问题，串联协议机制推导与 Linux C++ Socket / 内核实现细节。',
    groups: [
      {
        layer: '00 · 全局导读',
        items: [
          {
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
            title: '应用层概述',
            desc: '面向特定应用语义的进程交互规则（HTTP / DNS / SMTP）',
            link: '/notes/network/application/overview'
          },
          {
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
            title: '传输层基本概念',
            desc: '端到端进程逻辑通信，进程 / 端口 / Socket / 连接辨析与四类服务需求',
            link: '/notes/network/transport/overview'
          },
          {
            title: '传输层基本原理',
            desc: '多路复用与分用，RDT 1.0–3.0 演进，流水线 GBN 与 SR 窗口大小数学约束',
            link: '/notes/network/transport/principles'
          },
          {
            title: 'TCP',
            desc: '报文段与 MSS、三次握手/四次挥手（Linux C++ 视角）、SACK 与快速重传、流量控制与拥塞控制（Tahoe/Reno/CUBIC/BBR/ECN）、粘包与经典攻击',
            link: '/notes/network/transport/tcp'
          },
          {
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
    <header class="intro">
      <p class="kicker">Notes</p>
      <h1>笔记</h1>
    </header>

    <section v-for="sub in subjects" :key="sub.id" class="subject">
      <div class="subject-head">
        <div>
          <div class="title-row">
            <h2>{{ sub.title }}</h2>
            <span class="badge">{{ sub.badge }}</span>
          </div>
          <p class="summary">{{ sub.summary }}</p>
        </div>
      </div>

      <div class="groups">
        <div
          v-for="g in sub.groups"
          :key="g.layer"
          class="group"
          :class="{ muted: g.muted }"
        >
          <h3 class="group-title">{{ g.layer }}</h3>
          <div class="rows">
            <template v-for="item in g.items" :key="item.title">
              <a v-if="item.link" class="row link-row" :href="item.link">
                <div class="row-main">
                  <span class="row-title">{{ item.title }}</span>
                  <span class="row-desc">{{ item.desc }}</span>
                </div>
                <span class="row-arrow" aria-hidden="true">→</span>
              </a>
              <div v-else class="row pending-row">
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
</template>

<style scoped>
.board {
  max-width: 880px;
  margin: 0 auto;
  padding: 4rem 1.5rem 5.5rem;
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
  font-size: 2.3rem;
  letter-spacing: -0.03em;
  line-height: 1.15;
}

.subject {
  padding: 1.65rem 1.7rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  background: var(--vp-c-bg-soft);
}

.subject + .subject {
  margin-top: 1.5rem;
}

.title-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6rem;
}

.title-row h2 {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 1.45rem;
  letter-spacing: -0.02em;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.18rem 0.58rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.summary {
  margin: 0.45rem 0 0;
  color: var(--vp-c-text-2);
  font-size: 0.94rem;
  line-height: 1.65;
}

.groups {
  margin-top: 1.4rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--vp-c-divider);
  display: flex;
  flex-direction: column;
  gap: 1.35rem;
}

.group.muted {
  opacity: 0.75;
}

.group-title {
  margin: 0 0 0.55rem;
  font-size: 0.78rem;
  font-weight: 650;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
}

.rows {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.8rem 1rem;
  border-radius: 11px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  text-decoration: none;
}

.link-row {
  transition: border-color 0.15s ease, transform 0.15s ease;
}

.link-row:hover {
  border-color: var(--vp-c-brand-1);
}

.link-row:hover .row-title,
.link-row:hover .row-arrow {
  color: var(--vp-c-brand-1);
}

.pending-row {
  border-style: dashed;
  background: transparent;
}

.row-main {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;
}

.row-title {
  font-size: 0.96rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  transition: color 0.15s ease;
}

.pending-row .row-title {
  color: var(--vp-c-text-2);
}

.row-desc {
  font-size: 0.84rem;
  line-height: 1.55;
  color: var(--vp-c-text-2);
}

.pending-row .row-desc {
  color: var(--vp-c-text-3);
}

.row-arrow {
  font-size: 0.95rem;
  color: var(--vp-c-text-3);
  flex-shrink: 0;
  transition: color 0.15s ease;
}

.pending-tag {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--vp-c-text-3);
  padding: 0.12rem 0.5rem;
  border-radius: 999px;
  border: 1px solid var(--vp-c-divider);
  flex-shrink: 0;
}
</style>
