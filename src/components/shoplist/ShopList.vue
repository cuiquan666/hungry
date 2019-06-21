<template>
  <div id="shopList">
      <shop-title :data='data'></shop-title>
      <shop-cont></shop-cont>
     <router-view :list='list'></router-view>
  </div>
</template>

<script>
import shopTitle from './base/ShopTitle'
import shopCont from './base/shopCont'
import {getList} from '@/api'
export default {
    data(){
    return{
      data:[],
      list:[]
    }
  },
    components:{
        shopTitle,
        shopCont
      
    },
     created(){
     getList(this.$route.params.id).then(res=>{
     this.data =res.data.data
     this.list =res.data.food
   })
  }
}
</script>

<style lang='stylus' scoped>

</style>
