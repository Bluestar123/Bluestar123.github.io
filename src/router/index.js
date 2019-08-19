import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/views/main.vue'

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children:[
        {
          path:'',name:'home',component:_import('home/home'),meta:{title:'目录'}
        }
      ]
    },
    {
      path:'/login'
    }
  ]
})
