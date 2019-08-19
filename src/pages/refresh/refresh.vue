<template>
</template>

<script>
export default{
  name:'refresh',
  beforeRouterEnter(to,from,next){
    next(vm=>{
      vm.$router.replace(from.fullPath)
    })
  }
}
</script>

<style>
</style>
