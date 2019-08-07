import VueRouter from 'vue-router'
import Home from "./components/tabbar/Home.vue"
import Member from "./components/tabbar/Member.vue"
import Search from "./components/tabbar/Search.vue"
import shopcar from "./components/tabbar/shopcar.vue"
import mewsList from "./components/news/newsList.vue"
import mewsinfo from "./components/news/newsinfo.vue"
var router= new VueRouter({
    routes:[
      
      { path: '/', redirect:"/home" },
      { path: '/home', component: Home },
      { path: '/home/newslist', component: mewsList },
      { path: '/home/newsinfo/:id', component: mewsinfo },


      { path: '/shopcar', component: shopcar  },
      { path: '/search', component: Search },
      { path: '/member', component: Member }
    ],
    linkActiveClass:"mui-active"
  })
  export default router;