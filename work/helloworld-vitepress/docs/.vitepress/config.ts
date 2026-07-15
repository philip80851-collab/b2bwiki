import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'B2B AI 应用手册',
  description: '面向 B2B 企业的 AI 场景与落地方法',
  lang: 'zh-CN',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'AI 数字人', link: '/ai-digital-human' },
      { text: 'AI 宣传片', link: '/ai-promo-video' },
      { text: 'AI 内容营销', link: '/ai-content-marketing' }
    ],
    sidebar: [
      {
        text: 'B2B AI 应用场景',
        items: [
          { text: '场景总览', link: '/' },
          { text: 'AI 数字人', link: '/ai-digital-human' },
          { text: 'AI 制作宣传片', link: '/ai-promo-video' },
          { text: 'AI 内容营销', link: '/ai-content-marketing' }
        ]
      }
    ],
    search: { provider: 'local' },
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' }
  }
})
