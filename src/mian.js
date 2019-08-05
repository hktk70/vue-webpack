import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './js/login.vue'
import { Button, Cell } from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from "./js/router"
import "./lib/mui/css/mui.min.css"


// 2. 手动安装 VueRouter 
Vue.use(VueRouter)
Vue.component(Button.name, Button)

var vm = new Vue({
    el: '#app',
  



    render: c => c(app),
    router
  })


  
 