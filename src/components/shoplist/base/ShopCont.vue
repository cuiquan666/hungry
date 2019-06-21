<template>
  <div id="shopCont">
      <div class="fenlei">
          <ul>
              <router-link to="/food" tag="li" class="active" exact><span>点餐</span></router-link>
              <router-link to="/ping"  tag="li"><span>评价</span></router-link>
              <router-link to="/jia"  tag="li"><span>商家</span></router-link>
          </ul>
      </div>
  </div>
</template>

<script>

export default {
   
}
</script>

<style lang='stylus' scoped>
    #shopCont
       margin-top:.4rem;
       font-size:.3rem;
       .fenlei 
          width:100%;
          height:1rem;
          ul
           display:flex; 
           width:100%;
           height:100%;
           .active
            border-bottom:.05rem solid blue;
           li 
            width:33%;
            text-align:center;
            line-height:1rem;
              
</style>
