<template>
  <!-- 获取元素 -->
  <div ref="title">我是title标题</div>
  <div ref="titleRef">我是titleRef标题</div>
  <button @click="getElement">获取titleRef</button>

  <!-- 获取组件实例 -->
  <show-info ref="ShowInfoRef"></show-info>
  <button @click="getSonElements">获取子组件元素</button>
</template>

<script>
import { onMounted, ref } from 'vue'
import ShowInfo from '@/06_Setup中ref引入元素/ShowInfo.vue'

export default {
  components: {
    ShowInfo,
  },
  // mounted() {
  //   console.log(this.$refs.title);
  // }
  setup() {
    const titleRef = ref()
    const ShowInfoRef = ref()

    // 在setup里面打印没有值
    console.log('不在生命周期里面', titleRef.value)
    
    onMounted(()=>{
      console.log('在生命周期里面，元素', titleRef.value)
      console.log('在生命周期里面，子组件', ShowInfoRef.value)

      // 调用子组件的方法
      ShowInfoRef.value.open();
    })

    // 但是在点击的时候会有值
    function getElement(){
      console.log('点击方法里面',titleRef.value)
    }

    // 获取子组件元素
    function getSonElements(){
      console.log('子组件元素',ShowInfoRef.value)
    }
    return {
      titleRef,
      ShowInfoRef,
      getElement,
      getSonElements
    }
  }
}
</script>

<style>

</style>