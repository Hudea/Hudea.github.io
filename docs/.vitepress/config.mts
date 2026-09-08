import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hudea",
  description: "SubLift — 本地硬字幕提取",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'SubLift', link: '/projects/sublift' }
    ],

    sidebar: {
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
      ],
      '/notes/': [
        {
          text: '技术笔记',
          items: [
            { text: 'C++ 核心笔记', link: '/notes/cpp' },
            { text: '算法与数据结构', link: '/notes/algorithm' }
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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hudea' }
    ]
  }
})
