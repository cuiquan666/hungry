<template>
  <div id="foods">
    <div  class="lists" v-for="(item,index) in list" :key="index">
       <div class="imgs">
           <img :src="item.imgUrl" alt="">
       </div>
       <div class="cont">
           <span class="title">{{item.title}}</span>
           <p class="num">月售{{item.num}}份</p>
           <p class="price">¥{{item.price}}</p>
       </div>
       <div class="btn" @click="fn(index)">
         <span>+</span>
       </div>
   </div>
   
   
  </div>
</template>

<script>

export default {
   
   props:['list'],
  
  
 
 
}
</script>

<style lang='stylus' scoped>
   #foods
     position:relative;
     font-size:.35rem;
     height:7.6rem;
     overflow-y:scroll;
     .lists
           position:relative;
           display:flex;
           width:100%;
           height:2.2rem;
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
                font-size:.3rem;
                color:orange;
           .btn
              position:absolute;
              right 0.5rem;
              top:.8rem;
              width:.5rem;
              height:.5rem;
              background-color:blue;
              color:#fff;
              text-align:center;
              line-height:.4rem;
              border-radius:50%;


              
</style>
