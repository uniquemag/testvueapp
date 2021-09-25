import { createApp } from 'vue'
import App from './aa.vue'

createApp(App).mount('#app')

import axios from 'axios'
import api from '@/service/api'  // 第二步驟會用到
import VueAxios from 'vue-axios'
// 教學專案採用element UI組件來切版和建置表單，所以先裝好
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 套用並設定prototype
Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.prototype.$api = api // 定義api這個常數給AXIOS存取json-server或實際api環境用