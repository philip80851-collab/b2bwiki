import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Hello World',
  description: 'A VitePress Hello World site deployed with Cloudflare Pages',
  lang: 'zh-CN',
  themeConfig: {
    nav: [{ text: '首页', link: '/' }],
    sidebar: [{ text: '开始', items: [{ text: 'Hello World', link: '/' }] }],
    search: { provider: 'local' }
  }
})
