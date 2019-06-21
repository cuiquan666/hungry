<template>
  <div id="shopList">
      <div class="imgs" v-for="(item,index) in data" :key="index">
          <img :src="item.logo" alt="">
          <div class="logo">
              <img :src="item.imgUrl" alt="">
          </div>
          <p class="title">{{item.title}}</p>
          <p class="num">评价4.6 月售{{item.num}}单 蜂鸟快送</p>
          <p class="dev">公告：大家好《佳香味煎饼》为你服务</p>
        <div class="back" @click="fn">
          <i class="iconfont icon-jiantou"></i>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  props:['data'],
 
  methods:{
    fn(){
      this.$router.push('/')
    }
  }
}
</script>

<style lang='stylus' scoped>
    #shopList
        font-size:.25rem;
        .imgs 
          position:relative;
          img 
            width:100%;
            height:2.2rem;
          .logo
            position:absolute;
            top:1rem;
            left:0;
            right:0;
            margin:auto; 
            width:1.5rem;
            height:1.5rem;
            img  
              width:100%;
              height:100%;
          p 
            text-align:center;   
          .title 
            font-size:.4rem;
            font-weight:bold;
            margin-top .5rem;
          .num  
            margin:.2rem 0;
          .back
            position:absolute;
            left:.2rem;
            top:.3rem; 
            color:#fff;
            
          

</style>
