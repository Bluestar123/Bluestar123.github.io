<template>
  <div class="main">
    <Head></Head>
    <router-view></router-view>
  </div>
</template>

<script>
import Head from '../../components/header/header.vue'
export default{
  name:'Main',
  components:{Head}
}
</script>

<style>
.main{
  height: calc(100% - 56px);
}
</style>
