<template>
  <h2>子组件showInfo:{{ info }}</h2>
  <button @click="updateSon">按钮</button>
  
  <h2>子组件showroInfo:{{ roInfo }}</h2>
  <!-- 如果没有eslint就不会出现被改动了，readonly只能显示，不会被修改 -->
  <!-- <button @click="roInfo.name ='2123'">按钮</button> -->
  <button @click="updateSonRo">按钮</button>
</template>

<script>
export default {
  props: {
    info:{
      type: Object,
      default:()=>({})
    },
    roInfo:{
      type: Object,
      default:() => ({})
    }
  },
  emits: ['changeInfo'],
  setup(props, context) {
    function updateSon() {
      context.emit('changeInfo', 'wgm')
    }
    function updateSonRo() {
      context.emit('changeInfoRo', 'wgm2')
    }

    return {updateSon,updateSonRo}
  }
}
</script>

<style>

</style>