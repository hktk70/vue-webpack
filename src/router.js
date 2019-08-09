import VueRouter from 'vue-router'
import Home from "./components/tabbar/Home.vue"
import Member from "./components/tabbar/Member.vue"
import Search from "./components/tabbar/Search.vue"
import shopcar from "./components/tabbar/shopcar.vue"
import mewsList from "./components/news/newsList.vue"
import mewsinfo from "./components/news/newsinfo.vue"
import PhotoList from "./components/photos/PhotoList.vue"
import PhotoInfo from "./components/photos/PhotoInfo.vue"
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from "./components/goods/GoodsInfo.vue"
import GoodsDesc from "./components/goods/GoodsDesc.vue"
import GoodsComment from "./components/goods/GoodsComment.vue"
var router= new VueRouter({
    routes:[
      
      { path: '/', redirect:"/home" },
      { path: '/home', component: Home },
      { path: '/home/newslist', component: mewsList },
      { path: '/home/newsinfo/:id', component: mewsinfo },
      { path: '/home/photolist', component: PhotoList },
      { path: '/home/photoinfo/:id', component: PhotoInfo },
      { path: '/home/goodslist', component: GoodsList },
      { path: '/home/goodsinfo/:id', component: GoodsInfo, name: 'goodsinfo' },
      { path: '/home/goodsdesc/:id', component:GoodsDesc, name: 'goodsdesc'  },
      { path: '/home/goodscomment/:id', component: GoodsComment, name: 'goodscomment' },

      { path: '/shopcar', component: shopcar  },
      { path: '/search', component: Search },
      { path: '/member', component: Member },
      
    ],
    linkActiveClass:"mui-active"
  })
  export default router;