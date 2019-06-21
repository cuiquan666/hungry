import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home.vue';
import ShopList from '@/components/shoplist/ShopList.vue';
import Foods from '@/components/shoplist/base/child/Foods.vue';
import Ping from '@/components/shoplist/base/child/Ping.vue';
import Jig from '@/components/shoplist/base/child/Jig.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'HomeLink',
      component: Home
    },
    {
      path: '/shoplist/:id',
      name: 'ShopLink',
      component: ShopList,
      children:[
        {
          path: '/food',
          name: 'FoodLink',
          component: Foods
        },
        {
          path: '/ping',
          name: 'PingLink',
          component: Ping
        }, {
          path: '/jia',
          name: 'JiaLink',
          component: Jig
        }

      ]
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})
