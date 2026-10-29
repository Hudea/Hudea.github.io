import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'Hudea',
  description: '知识笔记与工程项目',
  markdown: {
    math: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/notes/', activeMatch: '^/notes/' },
      { text: 'SubLift', link: '/projects/sublift', activeMatch: '^/projects/sublift' }
    ],

    sidebar: {
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
          text: 'SubLift',
          items: [
            { text: '概览', link: '/projects/sublift' },
            { text: '核心功能', link: '/projects/sublift#核心功能' },
            { text: '技术', link: '/projects/sublift#技术' },
            { text: '架构', link: '/projects/sublift#架构' },
            { text: '亮点', link: '/projects/sublift#亮点' }
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
