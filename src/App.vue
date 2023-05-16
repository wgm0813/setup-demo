<template>
  <div class="app">
    <h2>当前计数: {{counter }}</h2>
    <button @click="increment"> +1 </button>
    <button @click="decrement"> -1 </button>
  </div>
</template>

<script>
// import { ref } from 'vue'
import useCounter from './hooks/useCounter';

export default {
  setup() {
    // 默认定义的数据都不是响应式数据
    // let counter = ref(100);
    // const increment = () => {
    //   console.log('增加了');
    //   counter.value++;
    // }
    // const decrement = () => {
    //   console.log('减少了');
    //   counter.value--;

    const {counter,increment,decrement} = useCounter()
    return {
      counter,
      increment,
      decrement
    }
    // return {
    //   ...useCounter()
    // }
  }
}
</script>

<style>
</style>
