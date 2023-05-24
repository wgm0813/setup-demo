<template>
  <h2>子组件showInfo:{{ info }}</h2>
  <button @click="updateSon">按钮</button>
</template>

<script>
export default {
  props: {
    info:{
      type: Object,
      default:()=>({})
    }
  },
  emits: ['changeInfo'],
  setup(props, context) {
    function updateSon() {
      context.emit('changeInfo', 'wgm')
    }

    return {updateSon}
  }
}
</script>

<style>

</style>