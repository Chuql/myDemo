import Vue from 'vue'
import App from './App.vue'
// import App from './index.vue'
// import router from './router'
// import './plugins/element.js'
// import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import ChuTree from './element-ui/packages/tree'
import ChuCheck from './element-ui/packages/checkbox'
import dialog from './element-ui/packages/dialog'
import button from './element-ui/packages/button'

Vue.use(ChuCheck)
Vue.use(ChuTree)
Vue.use(dialog)
Vue.use(button)
Vue.config.productionTip = false

new Vue({
  // router,
  render: h => h(App)
}).$mount('#app')