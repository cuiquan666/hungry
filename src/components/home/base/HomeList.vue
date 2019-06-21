<template>
  <div id="homeList">
   <span class="list-top">--推荐商家--</span>

   <router-link :to="{name:'ShopLink',params:{id:item.id}}" tag='div' class="lists" v-for="(item,index) in list" :key="index">
       <div class="imgs">
           <img :src="item.imgUrl" alt="">
       </div>
       <div class="cont">
           <span class="title">{{item.title}}</span>
           <p class="num">月售{{item.num}}单</p>
           <p class="price">¥15起送 | 配送费¥1</p>
           <p class="dev">满18减3，满28减5，满38减7，满48减10，满80减17</p>
       </div>
   </router-link>

  
    
  </div>
</template>

<script>
 import {getHome} from '@/api'
export default {
  data(){
    return{
       list:[]
    }
  },
  created(){
    getHome().then(res=>{
      this.list = res.data.data
    })
  }
}
</script>

<style lang='stylus' scoped>
    #homeList
        margin-top:.5rem;
        font-size:.35rem;
        .list-top 
           margin-left:2.8rem;
        .lists
           display:flex;
           width:100%;
           height:3.2rem;
           border-bottom:1px solid #ccc;
           color:rgba(0,0,0,0.6);
           .imgs 
              width:25%;
              img 
                 width:1.5rem;
                 height:1.5rem;
                 margin-left:.2rem;
                 margin-top:.4rem;
           .cont
              width:74%;
              margin-left:.2rem;
              margin-top:.35rem;
              .title
                font-weight:bold;
                color:#000;
              .num 
                font-size:.25rem;
                margin:.15rem 0; 
              .price 
                font-size:.25rem;
              .dev 
                font-size:.28rem;
                margin-top:.3rem;
</style>