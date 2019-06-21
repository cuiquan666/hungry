<template>
  <div id="home">
    <home-head></home-head>
    <home-nav></home-nav>
    <home-banner></home-banner>
    <home-list></home-list>
  </div>
</template>

<script>
import HomeHead from './base/HomeHead';
import HomeNav from './base/HomeNav';
import HomeBanner from './base/HomeBanner';
import HomeList from './base/HomeList';
export default {
    components:{
        HomeHead,
        HomeNav,
        HomeBanner,
        HomeList
    }
}
</script>

<style lang='stylus' scoped>

</style>