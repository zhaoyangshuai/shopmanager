// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Http from './plugins/http'
import App from './App'
import router from './router'
import '@/assets/index.css'
import Moment from 'moment'
Vue.use(ElementUI);
Vue.config.productionTip = false
//处理日期格式
Vue.filter('fmtData', (v) => {
  return Moment(v).format('YYYY-MM-DD')
})
Vue.use(Http)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
