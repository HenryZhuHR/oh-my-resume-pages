import { path } from '@vuepress/utils'
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { localTheme } from './theme'


export default defineUserConfig({
  base: '/oh-my-resume-pages/',
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  theme: localTheme({
    // 默认主题配置项
  }),
})
