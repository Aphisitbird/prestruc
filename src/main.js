import './firebase';
import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire';
import lodash from 'lodash'


Vue.use(VueFire);
Vue.use( lodash)




new Vue({
  el: '#app',
  render: h => h(App)
})
