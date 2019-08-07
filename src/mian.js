import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)







// 按需导入 Mint-UI 中的组件   
import { Header, Swipe, SwipeItem,Button } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)




import "./lib/mui/css/mui.css"
import './lib/mui/css/icons-extra.css'


import router from "./router"
import app from './js/app.vue'

Vue.http.options.root = 'http://www.liulongbin.top:3005';

import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
  })


  
 