// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import './assets/css/common.css'
import './assets/css/reset.css'
import './assets/kitAdmin/js/jquery-1.8.3'
import './assets/kitAdmin/js/jquery.jflip-0.4'
import './assets/kitAdmin/js/jquery-migrate-1.4.1.min'
import $ from 'jquery'
import Const from './globals'
import text from './text'

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(VueResource)
Vue.use(Const)
Vue.use(text)

Vue.http.options.emulateHTTP = true;
//Vue.http.options.emulateJSON = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

var eventBus = new Vue({})
