import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'Hudea',
  description: '知识笔记与工程项目',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%23111318'/%3E%3Cpath d='M9 8h3.4v6.6h7.2V8H23v16h-3.4v-6.4h-7.2V24H9V8z' fill='%23ffffff'/%3E%3Crect x='23.5' y='21.5' width='3' height='3' rx='0.6' fill='%237e9eff'/%3E%3C/svg%3E"
      }
    ]
  ],
  markdown: {
    math: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'SubLift', link: '/projects/sublift/', activeMatch: '^/projects/sublift' },
      { text: '笔记', link: '/notes/', activeMatch: '^/notes/' }
    ],

    sidebar: {
      '/notes/agent/': [
        {
          text: 'Agent 基础',
          items: [
            { text: 'Agent 基本认知', link: '/notes/agent/fundamentals' },
            { text: '针对 Agent 的核心攻击手法', link: '/notes/agent/attacks' }
          ]
        }
      ],
      '/notes/network/': [
        {
          text: '计算机网络',
          items: [
            { text: '五层体系结构', link: '/notes/network/' }
          ]
        },
        {
          text: '应用层',
          collapsed: false,
          items: [
            { text: '应用层概述', link: '/notes/network/application/overview' },
            { text: '应用层基本原理', link: '/notes/network/application/principles' }
          ]
        },
        {
          text: '传输层',
          collapsed: false,
          items: [
            { text: '传输层基本概念', link: '/notes/network/transport/overview' },
            { text: '传输层基本原理', link: '/notes/network/transport/principles' },
            { text: 'TCP', link: '/notes/network/transport/tcp' },
            { text: 'UDP（待更新）' }
          ]
        }
      ],
      '/research/': [
        {
          text: '论文与科研',
          items: [
            { text: 'HARD 论文笔记', link: '/research/hard' }
          ]
        }
      ],
      '/projects/': [
        {
          text: 'SubLift v1.0.0',
          items: [
            { text: '项目总览', link: '/projects/sublift/' },
            { text: '跨栈分层架构与工程治理', link: '/projects/sublift/architecture' },
            { text: '视觉特征与纯毫秒打轴引擎', link: '/projects/sublift/timing-engine' },
            { text: '自动选区、解码与文本后处理', link: '/projects/sublift/region-and-text' },
            { text: '桌面宿主、三引擎与 VLM 管线', link: '/projects/sublift/desktop-and-vlm' }
          ]
        }
      ]
    },

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    sidebarMenuLabel: '目录',
    returnToTopLabel: '回到顶部',
    darkModeSwitchLabel: '外观',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hudea' }
    ]
  }
})
