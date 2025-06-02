import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/demo/', //这里一定要记得写，不然样式会出问题，然后写上自己的仓库名
  title: "TomeCodehub",
  description: "A VitePress Site",
  themeConfig: {
    logo : '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '笔记', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: '侧边栏1', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏1', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏1', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
          { text: '侧边栏2', link: '/markdown-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TangBinQiang/demo'},
      { icon: 'gitlab', link: 'https://github.com/TangBinQiang/demo'},
      { icon: 'juejin', link: 'https://github.com/TangBinQiang/demo'},
      { icon: 'gitee', link: 'https://github.com/TangBinQiang/demo'},
      { icon: '', link: 'https://github.com/TangBinQiang/demo'}
    ]
  }
})
