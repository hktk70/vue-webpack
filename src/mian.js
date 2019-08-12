import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
import Vuex from "vuex"
Vue.use(Vuex);

var car = JSON.parse(localStorage.getItem('car') || '[]')

var store=new Vuex.Store({
  state:{
    car:car
  },
  mutations: {
    addToCar(state,goodinfo){
      let flag=false;
      state.car.some(item=>{
        if(item.id==goodinfo.id){
          item.count+=parseInt(goodinfo.count);
          flag=true;
          return true;
        }
      })

      if(!flag){
        state.car.push(goodinfo);
      }
      
      localStorage.setItem("car", JSON.stringify(state.car));
     
    },
    removeCar(state,id){
      state.car.some((item,i)=>{
        if(item.id==id){
          state.car.splice(i,1);
          return true;
        }
      });
      localStorage.setItem("car", JSON.stringify(state.car));

    },
    updateGoodsSelected(state, info) {
      state.car.some(item => {
        if (item.id == info.id) {
          item.selected = info.selected
        }
      })
      // 把最新的 所有购物车商品的状态保存到 store 中去
      localStorage.setItem('car', JSON.stringify(state.car))
    }





  },
  getters: {
    getAll(state){
      let c=0;
      state.car.forEach(item => {
        c+=item.count;
      });
      return c;
    },
    getAllCount(state){
      let c={};
      state.car.forEach(item => {
        c[item.id]=item.count;
      });
      return c;

    },
    getAllCountAndAmount(state){
      let o={
        count:0,
        amount:0
      };
      state.car.forEach(item=>{
        if (item.selected) {
          o.count += item.count
          o.amount += item.price * item.count
        }
      })
      return o;
    },
    getAllSelect(state){
      let o={};
      state.car.forEach(item=>{
        o[item.id]=item.selected;
      })
      return o;
    }




  }


})















// 按需导入 Mint-UI 中的组件   

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'


import "./lib/mui/css/mui.css"
import './lib/mui/css/icons-extra.css'


import router from "./router"
import app from './js/app.vue'

Vue.http.options.root = 'http://www.liulongbin.top:3005';
Vue.http.options.emulateJSON = true;

import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})


var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router,
    store
  })


  
 