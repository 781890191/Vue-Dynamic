import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from "@/plugins/ElementUI";
Vue.config.productionTip = false

new Vue({
  router,
  ElementUI,
  render: h => h(App)
}).$mount('#app')
