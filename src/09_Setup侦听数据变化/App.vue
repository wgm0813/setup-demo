<template>
  <div>setup侦听数据变化{{ message }}</div>
  <button @click="message = '你好'">修改message</button>
  <div>setup侦听数据变化{{ info }}</div>
  <button @click="info.name = '杨幂'">修改info</button>
</template>

<script>
import {reactive, ref, watch}from 'vue'
export default {
  // vue2
  // data(){ return { message: '' } },
  // watch:{ message(newvalue,oldvalue){} }


  // vue3
  setup(){
    // 定义数据
    const message = ref('hello world')
    const info = reactive({
      name: 'wgm',
      age:18
    })

    // 侦听数据变化
    watch(message,(newValue, oldValue) =>{
      console.log('1',newValue,oldValue)
    })
    watch(info,(newValue,oldValue) => {
      // 这两个引用同一个地址，所以值一样，对象
      console.log('2',newValue,oldValue)
    }, {
      immediate: true,//默认先执行一次侦听
      deep: true//深度监听，默认true
    })

    //监听reactive数据变化后，获取普通对象
    // watch(() => info,(newValue,oldValue) => {
    watch(() => ({...info}),(newValue,oldValue) => {
      console.log('3',newValue,oldValue)
    },{
      immediate:true,
      deep:true
    })
    return {message,info}
  }
}
</script>

<style>

</style>