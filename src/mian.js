import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)







// 按需导入 Mint-UI 中的组件   
import { Header, Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)





import "./lib/mui/css/mui.css"
import './lib/mui/css/icons-extra.css'


import router from "./router"
import app from './js/app.vue'




var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
  })


  
 