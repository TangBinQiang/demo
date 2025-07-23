import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  //markdown配置
  markdown: {
    //行号显示
    lineNumbers: true, //false关闭
  },
  base: '/demo/', //这里一定要记得写，不然样式会出问题，然后写上自己的仓库名
  title: "TomeCodehub",
  description: "A VitePress Site",
  themeConfig: {
    logo: '/logo2.png',
    //本地搜索s
    search: {
      provider: 'local'
    },
    //返回顶部文字修改
    returnToTopLabel: '返回顶部',
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
          { text: '侧边栏2', link: '/markdown-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TangBinQiang/demo' },
      { icon: 'gitlab', link: 'https://github.com/TangBinQiang/demo' },
      { icon: 'juejin', link: 'https://github.com/TangBinQiang/demo' },
      { icon: 'gitee', link: 'https://github.com/TangBinQiang/demo' },
      { icon: 'discord', link: 'https://github.com/TangBinQiang/demo'},
      { icon: 'x', link: 'https://github.com/TangBinQiang/demo'},
      // { icon: '', link: 'https://github.com/TangBinQiang/demo' } 这串代码技术导致调试出现https://api.iconify.design/simple-icons/.svg的罪魁祸首
    ]
  }
})
