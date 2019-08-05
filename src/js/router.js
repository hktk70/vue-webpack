import VueRouter from 'vue-router'

import x from "./test.vue"
var router= new VueRouter({
    routes:[
    
      { path: '/x', component: x }
    ]
  })
  export default router;