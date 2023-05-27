<template>
  <div>info:{{ info.name }} - {{ info.age }}</div>
  <div>info:{{ name }} - {{ age }}</div>
  <div>info:{{ height }}</div>
  <button @click="age++">修改age</button>
</template>

<script>
import { reactive,toRef,toRefs } from 'vue'
export default {
  setup() {
    const info = reactive({
      name: 'why',
      age: 12,
      height: '180'
    })

    // 方法1：直接解构（存在问题：失去响应式了）
    // const {name, age} = info;

    // toRef()
    const height = toRef(info, 'height');

    // toRefs()
    const {name, age} = toRefs(info);

    return {info,name,age,height}
  }
}
</script>

<style>

</style>