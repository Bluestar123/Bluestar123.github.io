<template>
  <div class='wang-lou-chuan-xin p-4'>
    <h2>望楼传信系统（二进制）</h2>

    <h4 class="pt-4 chars">
      <span v-for="(item,i) in chars" :key='i'>{{item}}{{i}}</span>
    </h4>

    <div class="pt-3 d-flex justify-content-center">
      <div class="box" v-for="(item,index) in lights" :key='index'
      :class="{active:item===1}"
      @click='$set(lights,index,1-item)'
      >
        {{item}}
      </div>
    </div>

    <h3 class="pt-4">
      {{num}} : {{char}}
    </h3>
  </div>
</template>

<script>
export default{
  computed:{
    num(){
      return parseInt(this.lights.join(''),2)
    },
    char(){
      return this.chars[this.num]
    }
  },
  data(){
    return {
      chars:'张都尉 狼 入 东西市 平康 怀远 永宁 皇城'.split(' '),
      lights:Array(4).fill(0)
    }
  }
}
</script>

<style lang="scss">
.wang-lou-chuan-xin{
  height: 100%;
	background: #000;
	color: #ecc;
  font-family: "KaiTi";
  text-align: center;
  .chars{
    span{
      display: inline-block;
      width: 2rem;
    }
  }
  .box{
    width: 4rem;
    height: 4rem;
    background: #333;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    cursor: pointer;
    &.active{
      background: #ecc;
      color: #333;
    }
  }
}
</style>
