import type { Theme } from '@vuepress/core'
import { defaultTheme } from '@vuepress/theme-default'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'


// 继承默认主题 https://v2.vuepress.vuejs.org/zh/reference/default-theme/extending.html

export const localTheme = (options: DefaultThemeOptions): Theme => {
  return {
    name: 'vuepress-theme-local',
    extends: defaultTheme(options),
    layouts: {
      Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
    },
    // 组件替换 https://v2.vuepress.vuejs.org/zh/reference/default-theme/extending.html#组件替换
    // 组件列表 https://github.com/vuepress/vuepress-next/tree/main/packages/%40vuepress/theme-default/src/client/components
    alias: {
      '@theme/HomeFeatures.vue': path.resolve(__dirname, './components/ResumeHomeFeatures/ResumeHomeFeatures.vue'),
      '@theme/HomeContent.vue': path.resolve(__dirname, './components/ResumeHomeContent/ResumeHomeContent.vue'),
    },
  }
}