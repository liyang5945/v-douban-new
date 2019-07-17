import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import VueResource from 'vue-resource';

Vue.use(VueResource);


import '@/styles/index.sass'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


