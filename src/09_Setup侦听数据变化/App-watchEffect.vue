<template>
  <div>setup侦听数据变化WatchEffect</div>
  <div>当前计数：{{ counter }}</div>
  <div>当前message：{{ message }}</div>
  <button @click="counter++">+1</button>
  <button @click="message = '杨幂'">修改message</button>
</template>

<script>
import {ref, watchEffect} from 'vue'
export default {
  setup(){
    const counter = ref(0)
    const message = ref('王高敏')

    // watch(counter,(newValue,oldValue)=>{})

    // watchEffect传入的函数会默认被执行
    // 在执行过程中，会自动的收集依赖（依赖哪些响应式数据）
    const stopWatch = watchEffect(() => {
      // 默认会执行一次，可以看到所有的变量的变化
      // 只有当收集的依赖发生变化才会执行
      console.log(counter.value,message.value)
      // 想要停止监听
      if(counter.value >= 10)stopWatch()
    })
    return {counter,message,stopWatch}
  }
}
</script>

<style>

</style>