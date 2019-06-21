<template>
  <div id="header">
     <div class="seach">
         <i class="iconfont icon-htmal5icon25"></i>
         <span>搜索饿了么商家、商品名称</span>
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='stylus' scoped>
    #header
        z-index:100;
        position:fixed;
        left:0;
        top:0;
        width:100%;
        height:.6rem;
        background-color:#0085ff;
        padding:.2rem .3rem;
        font-size:.3rem;
        .seach{
            width:92%;
            height:.6rem;
            background-color:#fff;
            color #333;
            text-align:center;
            line-height .6rem;
        }
</style>