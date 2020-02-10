import Vue from 'vue'
import App from './App.vue'
import game from '@/game'

Vue.config.productionTip = false

new Vue({
  game,
  render: h => h(App),
}).$mount('#app')
