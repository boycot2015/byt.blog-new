import * as ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { ID_INJECTION_KEY, ZINDEX_INJECTION_KEY } from 'element-plus'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ElementPlus, { locale: zhCn })
  nuxtApp.vueApp.provide(ID_INJECTION_KEY, {
    prefix: Math.floor(Math.random() * 10000),
    current: 0,
  })
  nuxtApp.vueApp.provide(ZINDEX_INJECTION_KEY, { current: 1000 })
})
