import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/pages/home'
import bill from '@/components/pages/homes/bill'
import main from '@/components/pages/homes/main'
import my from '@/components/pages/homes/my'
import profit from '@/components/pages/homes/profit'
import glory from '@/components/pages/glory'
import award from '@/components/pages/award_explain'
import login from '@/components/pages/login'
import register from '@/components/pages/register'
import search from '@/components/pages/search'
import newBook from '@/components/pages/new_book'
import detail from '@/components/pages/detail'
import recommend from '@/components/pages/recommend'
import read from '@/components/pages/read'
import addBook from '@/components/pages/admin/add_book'
import Child from '@/components/pages/Child'
import cart from '@/components/pages/cart'
import todoList from '@/components/pages/todoList'
import text from '@/components/text'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect:"/home"
    },
    {
      path: '/home',
      redirect:'/home/main',
      name: 'home',
      component: home,
      children:[
        {
          path: 'profit',
          name:'profit',
          component:profit
        },
        {
          path: 'main',
          name:'main',
          component:main
        },
        {
          path: 'bill',
          name:'bill',
          component:bill
        },
        {
          path: 'my',
          name:'my',
          component:my
        }
      ]
      
    },
    {
      path: '/glory',
      name:'glory',
      component: glory
    },
    {
      path: '/award',
      name:'award',
      component: award
    },
    {
      path: '/login',
      name:'login',
      component: login
    },
    {
      path: '/search',
      name:'search',
      component: search
    },
    {
      path: '/newBook/:author',
      name:'newBook',
      component: newBook
    },
    {
      path: '/detail',
      name:'detail',
      component: detail
    },
    {
      path: '/recommend',
      name:'recommend',
      component: recommend
    },
    {
      path: '/read',
      name:'read',
      component: read
    },
    {
      path: '/register',
      name:'register',
      component: register
    },
    {
      path: '/addBook',
      name:'addBook',
      component: addBook
    },
    {
      path: '/Child',
      component: Child
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/todoList',
      component: todoList
    },
    {
      path: '/text',
      component: text
    }

  
  ]
})
