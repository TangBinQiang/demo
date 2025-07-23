/* .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import './style/index.css'
// 彩虹背景动画样式
let homePageStyle: HTMLStyleElement | undefined
import { watch } from 'vue'
import { h } from 'vue' // h函数
// 组件1(返回顶部)
import backtotop from "./components/backtotop.vue";
// 组件(公告)
import notice from "./components/notice.vue";


export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 指定组件使用layout-top插槽(公告)
      // 'layout-top': () => h(notice),


      // 指定组件使用doc-footer-before插槽
      'doc-footer-before': () => h(backtotop),

    })
  }

  // enhanceApp({app , router }) {
  //   // 彩虹背景动画样式
  //   if (typeof window !== 'undefined') {
  //     watch(
  //       () => router.route.data.relativePath,
  //       () => updateHomePageStyle(location.pathname === '/'),
  //       { immediate: true },
  //     )
  //   }

  // },
}
// 彩虹背景动画样式
// function updateHomePageStyle(value: boolean) {
//   if (value) {
//     if (homePageStyle) return

//     homePageStyle = document.createElement('style')
//     homePageStyle.innerHTML = `
//     :root {
//       animation: rainbow 12s linear infinite;
//     }`
//     document.body.appendChild(homePageStyle)
//   } else {
//     if (!homePageStyle) return

//     homePageStyle.remove()
//     homePageStyle = undefined
//   }
// }
