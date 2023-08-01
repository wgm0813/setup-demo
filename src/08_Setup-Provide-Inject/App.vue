<template>
  <div>provide/inject</div>
  <button @click="countAdd">+1</button>
  <div>父:{{ counter }}</div>
  <show-info></show-info>
</template>

<script>
import { provide } from 'vue'
import ShowInfo from '@/08_Setup-Provide-Inject/ShowInfo.vue'
export default {
  components: { ShowInfo },
  setup() {
    // 这里如果不是ref或者reactive类型就不会是响应式数据了
    // 单纯的变量是不会是响应式的
    let counter = 100
    let info = {
      name: 'why',
      age: 10
    }
    function countAdd() {
      counter++;
      console.log(counter);
    }
    console.log(counter);
    provide('counter', counter)
    provide('info', info)
    return {countAdd,counter}
  }
}
</script>

<style>

</style>